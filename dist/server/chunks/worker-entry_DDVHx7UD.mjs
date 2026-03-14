globalThis.process ??= {};
globalThis.process.env ??= {};
import "cloudflare:workers";
const sessionKVBindingName = "SESSION";
function appendForwardSlash(path) {
  return path.endsWith("/") ? path : path + "/";
}
function prependForwardSlash(path) {
  return path[0] === "/" ? path : "/" + path;
}
const MANY_LEADING_SLASHES = /^\/{2,}/;
function collapseDuplicateLeadingSlashes(path) {
  if (!path) {
    return path;
  }
  return path.replace(MANY_LEADING_SLASHES, "/");
}
const MANY_SLASHES = /\/{2,}/g;
function collapseDuplicateSlashes(path) {
  if (!path) {
    return path;
  }
  return path.replace(MANY_SLASHES, "/");
}
const MANY_TRAILING_SLASHES = /\/{2,}$/g;
function collapseDuplicateTrailingSlashes(path, trailingSlash) {
  if (!path) {
    return path;
  }
  return path.replace(MANY_TRAILING_SLASHES, trailingSlash ? "/" : "") || "/";
}
function removeTrailingForwardSlash(path) {
  return path.endsWith("/") ? path.slice(0, path.length - 1) : path;
}
function removeLeadingForwardSlash(path) {
  return path.startsWith("/") ? path.substring(1) : path;
}
function trimSlashes(path) {
  return path.replace(/^\/|\/$/g, "");
}
function isString(path) {
  return typeof path === "string" || path instanceof String;
}
const INTERNAL_PREFIXES = /* @__PURE__ */ new Set(["/_", "/@", "/.", "//"]);
const JUST_SLASHES = /^\/{2,}$/;
function isInternalPath(path) {
  return INTERNAL_PREFIXES.has(path.slice(0, 2)) && !JUST_SLASHES.test(path);
}
function joinPaths(...paths) {
  return paths.filter(isString).map((path, i2) => {
    if (i2 === 0) {
      return removeTrailingForwardSlash(path);
    } else if (i2 === paths.length - 1) {
      return removeLeadingForwardSlash(path);
    } else {
      return trimSlashes(path);
    }
  }).join("/");
}
function isRemotePath(src) {
  if (!src) return false;
  const trimmed = src.trim();
  if (!trimmed) return false;
  let decoded = trimmed;
  let previousDecoded = "";
  let maxIterations = 10;
  while (decoded !== previousDecoded && maxIterations > 0) {
    previousDecoded = decoded;
    try {
      decoded = decodeURIComponent(decoded);
    } catch {
      break;
    }
    maxIterations--;
  }
  if (/^[a-zA-Z]:/.test(decoded)) {
    return false;
  }
  if (decoded[0] === "/" && decoded[1] !== "/" && decoded[1] !== "\\") {
    return false;
  }
  if (decoded[0] === "\\") {
    return true;
  }
  if (decoded.startsWith("//")) {
    return true;
  }
  try {
    const url = new URL(decoded, "http://n");
    if (url.username || url.password) {
      return true;
    }
    if (decoded.includes("@") && !url.pathname.includes("@") && !url.search.includes("@")) {
      return true;
    }
    if (url.origin !== "http://n") {
      const protocol = url.protocol.toLowerCase();
      if (protocol === "file:") {
        return false;
      }
      return true;
    }
    if (URL.canParse(decoded)) {
      return true;
    }
    return false;
  } catch {
    return true;
  }
}
function slash(path) {
  return path.replace(/\\/g, "/");
}
function fileExtension(path) {
  const ext = path.split(".").pop();
  return ext !== path ? `.${ext}` : "";
}
const WITH_FILE_EXT = /\/[^/]+\.\w+$/;
function hasFileExtension(path) {
  return WITH_FILE_EXT.test(path);
}
function matchPattern(url, remotePattern) {
  return matchProtocol(url, remotePattern.protocol) && matchHostname(url, remotePattern.hostname, true) && matchPort(url, remotePattern.port) && matchPathname(url, remotePattern.pathname, true);
}
function matchPort(url, port) {
  return !port || port === url.port;
}
function matchProtocol(url, protocol) {
  return !protocol || protocol === url.protocol.slice(0, -1);
}
function matchHostname(url, hostname, allowWildcard = false) {
  if (!hostname) {
    return true;
  } else if (!allowWildcard || !hostname.startsWith("*")) {
    return hostname === url.hostname;
  } else if (hostname.startsWith("**.")) {
    const slicedHostname = hostname.slice(2);
    return slicedHostname !== url.hostname && url.hostname.endsWith(slicedHostname);
  } else if (hostname.startsWith("*.")) {
    const slicedHostname = hostname.slice(1);
    if (!url.hostname.endsWith(slicedHostname)) {
      return false;
    }
    const subdomainWithDot = url.hostname.slice(0, -(slicedHostname.length - 1));
    return subdomainWithDot.endsWith(".") && !subdomainWithDot.slice(0, -1).includes(".");
  }
  return false;
}
function matchPathname(url, pathname, allowWildcard = false) {
  if (!pathname) {
    return true;
  } else if (!allowWildcard || !pathname.endsWith("*")) {
    return pathname === url.pathname;
  } else if (pathname.endsWith("/**")) {
    const slicedPathname = pathname.slice(0, -2);
    return slicedPathname !== url.pathname && url.pathname.startsWith(slicedPathname);
  } else if (pathname.endsWith("/*")) {
    const slicedPathname = pathname.slice(0, -1);
    if (!url.pathname.startsWith(slicedPathname)) {
      return false;
    }
    const additionalPathChunks = url.pathname.slice(slicedPathname.length).split("/").filter(Boolean);
    return additionalPathChunks.length === 1;
  }
  return false;
}
function isRemoteAllowed(src, {
  domains,
  remotePatterns
}) {
  if (!URL.canParse(src)) {
    return false;
  }
  const url = new URL(src);
  if (!["http:", "https:", "data:"].includes(url.protocol)) {
    return false;
  }
  return domains.some((domain) => matchHostname(url, domain)) || remotePatterns.some((remotePattern) => matchPattern(url, remotePattern));
}
function normalizeLF(code) {
  return code.replace(/\r\n|\r(?!\n)|\n/g, "\n");
}
function codeFrame(src, loc) {
  if (!loc || loc.line === void 0 || loc.column === void 0) {
    return "";
  }
  const lines = normalizeLF(src).split("\n").map((ln) => ln.replace(/\t/g, "  "));
  const visibleLines = [];
  for (let n2 = -2; n2 <= 2; n2++) {
    if (lines[loc.line + n2]) visibleLines.push(loc.line + n2);
  }
  let gutterWidth = 0;
  for (const lineNo of visibleLines) {
    let w = `> ${lineNo}`;
    if (w.length > gutterWidth) gutterWidth = w.length;
  }
  let output = "";
  for (const lineNo of visibleLines) {
    const isFocusedLine = lineNo === loc.line - 1;
    output += isFocusedLine ? "> " : "  ";
    output += `${lineNo + 1} | ${lines[lineNo]}
`;
    if (isFocusedLine)
      output += `${Array.from({ length: gutterWidth }).join(" ")}  | ${Array.from({
        length: loc.column
      }).join(" ")}^
`;
  }
  return output;
}
class AstroError extends Error {
  loc;
  title;
  hint;
  frame;
  type = "AstroError";
  constructor(props, options) {
    const { name, title, message, stack, location, hint, frame } = props;
    super(message, options);
    this.title = title;
    this.name = name;
    if (message) this.message = message;
    this.stack = stack ? stack : this.stack;
    this.loc = location;
    this.hint = hint;
    this.frame = frame;
  }
  setLocation(location) {
    this.loc = location;
  }
  setName(name) {
    this.name = name;
  }
  setMessage(message) {
    this.message = message;
  }
  setHint(hint) {
    this.hint = hint;
  }
  setFrame(source, location) {
    this.frame = codeFrame(source, location);
  }
  static is(err) {
    return err?.type === "AstroError";
  }
}
const ClientAddressNotAvailable = {
  name: "ClientAddressNotAvailable",
  title: "`Astro.clientAddress` is not available in current adapter.",
  message: (adapterName) => `\`Astro.clientAddress\` is not available in the \`${adapterName}\` adapter. File an issue with the adapter to add support.`
};
const PrerenderClientAddressNotAvailable = {
  name: "PrerenderClientAddressNotAvailable",
  title: "`Astro.clientAddress` cannot be used inside prerendered routes.",
  message: (name) => `\`Astro.clientAddress\` cannot be used inside prerendered route ${name}`
};
const StaticClientAddressNotAvailable = {
  name: "StaticClientAddressNotAvailable",
  title: "`Astro.clientAddress` is not available in prerendered pages.",
  message: "`Astro.clientAddress` is only available on pages that are server-rendered.",
  hint: "See https://docs.astro.build/en/guides/on-demand-rendering/ for more information on how to enable SSR."
};
const NoMatchingStaticPathFound = {
  name: "NoMatchingStaticPathFound",
  title: "No static path found for requested path.",
  message: (pathName) => `A \`getStaticPaths()\` route pattern was matched, but no matching static path was found for requested path \`${pathName}\`.`,
  hint: (possibleRoutes) => `Possible dynamic routes being matched: ${possibleRoutes.join(", ")}.`
};
const OnlyResponseCanBeReturned = {
  name: "OnlyResponseCanBeReturned",
  title: "Invalid type returned by Astro page.",
  message: (route, returnedValue) => `Route \`${route ? route : ""}\` returned a \`${returnedValue}\`. Only a [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) can be returned from Astro files.`,
  hint: "See https://docs.astro.build/en/guides/on-demand-rendering/#response for more information."
};
const MissingMediaQueryDirective = {
  name: "MissingMediaQueryDirective",
  title: "Missing value for `client:media` directive.",
  message: 'Media query not provided for `client:media` directive. A media query similar to `client:media="(max-width: 600px)"` must be provided'
};
const NoMatchingRenderer = {
  name: "NoMatchingRenderer",
  title: "No matching renderer found.",
  message: (componentName, componentExtension, plural, validRenderersCount) => `Unable to render \`${componentName}\`.

${validRenderersCount > 0 ? `There ${plural ? "are" : "is"} ${validRenderersCount} renderer${plural ? "s" : ""} configured in your \`astro.config.mjs\` file,
but ${plural ? "none were" : "it was not"} able to server-side render \`${componentName}\`.` : `No valid renderer was found ${componentExtension ? `for the \`.${componentExtension}\` file extension.` : `for this file extension.`}`}`,
  hint: (probableRenderers) => `Did you mean to enable the ${probableRenderers} integration?

See https://docs.astro.build/en/guides/framework-components/ for more information on how to install and configure integrations.`
};
const NoClientOnlyHint = {
  name: "NoClientOnlyHint",
  title: "Missing hint on client:only directive.",
  message: (componentName) => `Unable to render \`${componentName}\`. When using the \`client:only\` hydration strategy, Astro needs a hint to use the correct renderer.`,
  hint: (probableRenderers) => `Did you mean to pass \`client:only="${probableRenderers}"\`? See https://docs.astro.build/en/reference/directives-reference/#clientonly for more information on client:only`
};
const InvalidGetStaticPathsEntry = {
  name: "InvalidGetStaticPathsEntry",
  title: "Invalid entry inside getStaticPath's return value",
  message: (entryType) => `Invalid entry returned by getStaticPaths. Expected an object, got \`${entryType}\``,
  hint: "If you're using a `.map` call, you might be looking for `.flatMap()` instead. See https://docs.astro.build/en/reference/routing-reference/#getstaticpaths for more information on getStaticPaths."
};
const InvalidGetStaticPathsReturn = {
  name: "InvalidGetStaticPathsReturn",
  title: "Invalid value returned by getStaticPaths.",
  message: (returnType) => `Invalid type returned by \`getStaticPaths\`. Expected an \`array\`, got \`${returnType}\``,
  hint: "See https://docs.astro.build/en/reference/routing-reference/#getstaticpaths for more information on getStaticPaths."
};
const GetStaticPathsExpectedParams = {
  name: "GetStaticPathsExpectedParams",
  title: "Missing params property on `getStaticPaths` route.",
  message: "Missing or empty required `params` property on `getStaticPaths` route.",
  hint: "See https://docs.astro.build/en/reference/routing-reference/#getstaticpaths for more information on getStaticPaths."
};
const GetStaticPathsInvalidRouteParam = {
  name: "GetStaticPathsInvalidRouteParam",
  title: "Invalid route parameter returned by `getStaticPaths()`.",
  message: (key, value, valueType) => `Invalid \`getStaticPaths()\` route parameter for \`${key}\`. Expected a string or undefined, received \`${valueType}\` (\`${value}\`)`,
  hint: "See https://docs.astro.build/en/reference/routing-reference/#getstaticpaths for more information on getStaticPaths."
};
const GetStaticPathsRequired = {
  name: "GetStaticPathsRequired",
  title: "`getStaticPaths()` function required for dynamic routes.",
  message: "`getStaticPaths()` function is required for dynamic routes. Make sure that you `export` a `getStaticPaths` function from your dynamic route.",
  hint: `See https://docs.astro.build/en/guides/routing/#dynamic-routes for more information on dynamic routes.

	If you meant for this route to be server-rendered, set \`export const prerender = false;\` in the page.`
};
const ReservedSlotName = {
  name: "ReservedSlotName",
  title: "Invalid slot name.",
  message: (slotName) => `Unable to create a slot named \`${slotName}\`. \`${slotName}\` is a reserved slot name. Please update the name of this slot.`
};
const NoMatchingImport = {
  name: "NoMatchingImport",
  title: "No import found for component.",
  message: (componentName) => `Could not render \`${componentName}\`. No matching import has been found for \`${componentName}\`.`,
  hint: "Please make sure the component is properly imported."
};
const InvalidComponentArgs = {
  name: "InvalidComponentArgs",
  title: "Invalid component arguments.",
  message: (name) => `Invalid arguments passed to${name ? ` <${name}>` : ""} component.`,
  hint: "Astro components cannot be rendered directly via function call, such as `Component()` or `{items.map(Component)}`."
};
const PageNumberParamNotFound = {
  name: "PageNumberParamNotFound",
  title: "Page number param not found.",
  message: (paramName) => `[paginate()] page number param \`${paramName}\` not found in your filepath.`,
  hint: "Rename your file to `[page].astro` or `[...page].astro`."
};
const ImageMissingAlt = {
  name: "ImageMissingAlt",
  title: 'Image missing required "alt" property.',
  message: 'Image missing "alt" property. "alt" text is required to describe important images on the page.',
  hint: 'Use an empty string ("") for decorative images.'
};
const InvalidImageService = {
  name: "InvalidImageService",
  title: "Error while loading image service.",
  message: "There was an error loading the configured image service. Please see the stack trace for more information."
};
const MissingImageDimension = {
  name: "MissingImageDimension",
  title: "Missing image dimensions",
  message: (missingDimension, imageURL) => `Missing ${missingDimension === "both" ? "width and height attributes" : `${missingDimension} attribute`} for ${imageURL}. When using remote images, both dimensions are required in order to avoid CLS.`,
  hint: "If your image is inside your `src` folder, you probably meant to import it instead. See [the Imports guide for more information](https://docs.astro.build/en/guides/imports/#other-assets). You can also use `inferSize={true}` for remote images to get the original dimensions."
};
const FailedToFetchRemoteImageDimensions = {
  name: "FailedToFetchRemoteImageDimensions",
  title: "Failed to retrieve remote image dimensions",
  message: (imageURL) => `Failed to get the dimensions for ${imageURL}.`,
  hint: "Verify your remote image URL is accurate, and that you are not using `inferSize` with a file located in your `public/` folder."
};
const RemoteImageNotAllowed = {
  name: "RemoteImageNotAllowed",
  title: "Remote image is not allowed",
  message: (imageURL) => `Remote image ${imageURL} is not allowed by your image configuration.`,
  hint: "Update `image.domains` or `image.remotePatterns`, or remove `inferSize` for this image."
};
const UnsupportedImageFormat = {
  name: "UnsupportedImageFormat",
  title: "Unsupported image format",
  message: (format, imagePath, supportedFormats) => `Received unsupported format \`${format}\` from \`${imagePath}\`. Currently only ${supportedFormats.join(
    ", "
  )} are supported by our image services.`,
  hint: "Using an `img` tag directly instead of the `Image` component might be what you're looking for."
};
const UnsupportedImageConversion = {
  name: "UnsupportedImageConversion",
  title: "Unsupported image conversion",
  message: "Converting between vector (such as SVGs) and raster (such as PNGs and JPEGs) images is not currently supported."
};
const PrerenderDynamicEndpointPathCollide = {
  name: "PrerenderDynamicEndpointPathCollide",
  title: "Prerendered dynamic endpoint has path collision.",
  message: (pathname) => `Could not render \`${pathname}\` with an \`undefined\` param as the generated path will collide during prerendering. Prevent passing \`undefined\` as \`params\` for the endpoint's \`getStaticPaths()\` function, or add an additional extension to the endpoint's filename.`,
  hint: (filename) => `Rename \`${filename}\` to \`${filename.replace(/\.(?:js|ts)/, (m) => `.json` + m)}\``
};
const ExpectedImage = {
  name: "ExpectedImage",
  title: "Expected src to be an image.",
  message: (src, typeofOptions, fullOptions) => `Expected \`src\` property for \`getImage\` or \`<Image />\` to be either an ESM imported image or a string with the path of a remote image. Received \`${src}\` (type: \`${typeofOptions}\`).

Full serialized options received: \`${fullOptions}\`.`,
  hint: "This error can often happen because of a wrong path. Make sure the path to your image is correct. If you're passing an async function, make sure to call and await it."
};
const ExpectedImageOptions = {
  name: "ExpectedImageOptions",
  title: "Expected image options.",
  message: (options) => `Expected getImage() parameter to be an object. Received \`${options}\`.`
};
const ExpectedNotESMImage = {
  name: "ExpectedNotESMImage",
  title: "Expected image options, not an ESM-imported image.",
  message: "An ESM-imported image cannot be passed directly to `getImage()`. Instead, pass an object with the image in the `src` property.",
  hint: "Try changing `getImage(myImage)` to `getImage({ src: myImage })`"
};
const IncompatibleDescriptorOptions = {
  name: "IncompatibleDescriptorOptions",
  title: "Cannot set both `densities` and `widths`",
  message: "Only one of `densities` or `widths` can be specified. In most cases, you'll probably want to use only `widths` if you require specific widths.",
  hint: "Those attributes are used to construct a `srcset` attribute, which cannot have both `x` and `w` descriptors."
};
const NoImageMetadata = {
  name: "NoImageMetadata",
  title: "Could not process image metadata.",
  message: (imagePath) => `Could not process image metadata${imagePath ? ` for \`${imagePath}\`` : ""}.`,
  hint: "This is often caused by a corrupted or malformed image. Re-exporting the image from your image editor may fix this issue."
};
const ResponseSentError = {
  name: "ResponseSentError",
  title: "Unable to set response.",
  message: "The response has already been sent to the browser and cannot be altered."
};
const MiddlewareNoDataOrNextCalled = {
  name: "MiddlewareNoDataOrNextCalled",
  title: "The middleware didn't return a `Response`.",
  message: "Make sure your middleware returns a `Response` object, either directly or by returning the `Response` from calling the `next` function."
};
const MiddlewareNotAResponse = {
  name: "MiddlewareNotAResponse",
  title: "The middleware returned something that is not a `Response` object.",
  message: "Any data returned from middleware must be a valid `Response` object."
};
const EndpointDidNotReturnAResponse = {
  name: "EndpointDidNotReturnAResponse",
  title: "The endpoint did not return a `Response`.",
  message: "An endpoint must return either a `Response`, or a `Promise` that resolves with a `Response`."
};
const LocalsNotAnObject = {
  name: "LocalsNotAnObject",
  title: "Value assigned to `locals` is not accepted.",
  message: "`locals` can only be assigned to an object. Other values like numbers, strings, etc. are not accepted.",
  hint: "If you tried to remove some information from the `locals` object, try to use `delete` or set the property to `undefined`."
};
const LocalsReassigned = {
  name: "LocalsReassigned",
  title: "`locals` must not be reassigned.",
  message: "`locals` cannot be assigned directly.",
  hint: "Set a `locals` property instead."
};
const AstroResponseHeadersReassigned = {
  name: "AstroResponseHeadersReassigned",
  title: "`Astro.response.headers` must not be reassigned.",
  message: "Individual headers can be added to and removed from `Astro.response.headers`, but it must not be replaced with another instance of `Headers` altogether.",
  hint: "Consider using `Astro.response.headers.add()`, and `Astro.response.headers.delete()`."
};
const LocalImageUsedWrongly = {
  name: "LocalImageUsedWrongly",
  title: "Local images must be imported.",
  message: (imageFilePath) => `\`Image\`'s and \`getImage\`'s \`src\` parameter must be an imported image or an URL, it cannot be a string filepath. Received \`${imageFilePath}\`.`,
  hint: "If you want to use an image from your `src` folder, you need to either import it or if the image is coming from a content collection, use the [image() schema helper](https://docs.astro.build/en/guides/images/#images-in-content-collections). See https://docs.astro.build/en/guides/images/#src-required for more information on the `src` property."
};
const i18nNoLocaleFoundInPath = {
  name: "i18nNoLocaleFoundInPath",
  title: "The path doesn't contain any locale",
  message: "You tried to use an i18n utility on a path that doesn't contain any locale. You can use `pathHasLocale` first to determine if the path has a locale."
};
const RewriteWithBodyUsed = {
  name: "RewriteWithBodyUsed",
  title: "Cannot use Astro.rewrite after the request body has been read",
  message: "Astro.rewrite() cannot be used if the request body has already been read. If you need to read the body, first clone the request."
};
const ForbiddenRewrite = {
  name: "ForbiddenRewrite",
  title: "Forbidden rewrite to a static route.",
  message: (from, to, component) => `You tried to rewrite the on-demand route '${from}' with the static route '${to}', when using the 'server' output. 

The static route '${to}' is rendered by the component
'${component}', which is marked as prerendered. This is a forbidden operation because during the build, the component '${component}' is compiled to an
HTML file, which can't be retrieved at runtime by Astro.`,
  hint: (component) => `Add \`export const prerender = false\` to the component '${component}', or use a Astro.redirect().`
};
const FontFamilyNotFound = {
  name: "FontFamilyNotFound",
  title: "Font family not found",
  message: (family) => `No data was found for the \`"${family}"\` family passed to the \`<Font>\` component.`,
  hint: "This is often caused by a typo. Check that the `<Font />` component is using a `cssVariable` specified in your config."
};
const ActionsReturnedInvalidDataError = {
  name: "ActionsReturnedInvalidDataError",
  title: "Action handler returned invalid data.",
  message: (error2) => `Action handler returned invalid data. Handlers should return serializable data types like objects, arrays, strings, and numbers. Parse error: ${error2}`,
  hint: "See the devalue library for all supported types: https://github.com/rich-harris/devalue"
};
const ActionNotFoundError = {
  name: "ActionNotFoundError",
  title: "Action not found.",
  message: (actionName) => `The server received a request for an action named \`${actionName}\` but could not find a match. If you renamed an action, check that you've updated your \`actions/index\` file and your calling code to match.`,
  hint: "You can run `astro check` to detect type errors caused by mismatched action names."
};
const SessionStorageInitError = {
  name: "SessionStorageInitError",
  title: "Session storage could not be initialized.",
  message: (error2, driver) => `Error when initializing session storage${driver ? ` with driver \`${driver}\`` : ""}. \`${error2 ?? ""}\``,
  hint: "For more information, see https://docs.astro.build/en/guides/sessions/"
};
const SessionStorageSaveError = {
  name: "SessionStorageSaveError",
  title: "Session data could not be saved.",
  message: (error2, driver) => `Error when saving session data${driver ? ` with driver \`${driver}\`` : ""}. \`${error2 ?? ""}\``,
  hint: "For more information, see https://docs.astro.build/en/guides/sessions/"
};
const CacheNotEnabled = {
  name: "CacheNotEnabled",
  title: "Cache is not enabled.",
  message: "`Astro.cache` is not available because the cache feature is not enabled. To use caching, configure a cache provider in your Astro config under `experimental.cache`.",
  hint: 'Use an adapter that provides a default cache provider, or set one explicitly: `experimental: { cache: { provider: "..." } }`. See https://docs.astro.build/en/reference/experimental-flags/route-caching/.'
};
const decoder$2 = new TextDecoder();
const toUTF8String = (input, start = 0, end = input.length) => decoder$2.decode(input.slice(start, end));
const toHexString = (input, start = 0, end = input.length) => input.slice(start, end).reduce((memo, i2) => memo + `0${i2.toString(16)}`.slice(-2), "");
const getView = (input, offset) => new DataView(input.buffer, input.byteOffset + offset);
const readInt16LE = (input, offset = 0) => getView(input, offset).getInt16(0, true);
const readUInt16BE = (input, offset = 0) => getView(input, offset).getUint16(0, false);
const readUInt16LE = (input, offset = 0) => getView(input, offset).getUint16(0, true);
const readUInt24LE = (input, offset = 0) => {
  const view = getView(input, offset);
  return view.getUint16(0, true) + (view.getUint8(2) << 16);
};
const readInt32LE = (input, offset = 0) => getView(input, offset).getInt32(0, true);
const readUInt32BE = (input, offset = 0) => getView(input, offset).getUint32(0, false);
const readUInt32LE = (input, offset = 0) => getView(input, offset).getUint32(0, true);
const readUInt64 = (input, offset, isBigEndian) => getView(input, offset).getBigUint64(0, !isBigEndian);
const methods = {
  readUInt16BE,
  readUInt16LE,
  readUInt32BE,
  readUInt32LE
};
function readUInt(input, bits, offset = 0, isBigEndian = false) {
  const endian = isBigEndian ? "BE" : "LE";
  const methodName = `readUInt${bits}${endian}`;
  return methods[methodName](input, offset);
}
function readBox(input, offset) {
  if (input.length - offset < 4) return;
  const boxSize = readUInt32BE(input, offset);
  if (input.length - offset < boxSize) return;
  return {
    name: toUTF8String(input, 4 + offset, 8 + offset),
    offset,
    size: boxSize
  };
}
function findBox(input, boxName, currentOffset) {
  while (currentOffset < input.length) {
    const box = readBox(input, currentOffset);
    if (!box) break;
    if (box.name === boxName) return box;
    currentOffset += box.size > 0 ? box.size : 8;
  }
}
const BMP = {
  validate: (input) => toUTF8String(input, 0, 2) === "BM",
  calculate: (input) => ({
    height: Math.abs(readInt32LE(input, 22)),
    width: readUInt32LE(input, 18)
  })
};
const TYPE_ICON = 1;
const SIZE_HEADER$1 = 2 + 2 + 2;
const SIZE_IMAGE_ENTRY = 1 + 1 + 1 + 1 + 2 + 2 + 4 + 4;
function getSizeFromOffset(input, offset) {
  const value = input[offset];
  return value === 0 ? 256 : value;
}
function getImageSize$1(input, imageIndex) {
  const offset = SIZE_HEADER$1 + imageIndex * SIZE_IMAGE_ENTRY;
  return {
    height: getSizeFromOffset(input, offset + 1),
    width: getSizeFromOffset(input, offset)
  };
}
const ICO = {
  validate(input) {
    const reserved = readUInt16LE(input, 0);
    const imageCount = readUInt16LE(input, 4);
    if (reserved !== 0 || imageCount === 0) return false;
    const imageType = readUInt16LE(input, 2);
    return imageType === TYPE_ICON;
  },
  calculate(input) {
    const nbImages = readUInt16LE(input, 4);
    const imageSize = getImageSize$1(input, 0);
    if (nbImages === 1) return imageSize;
    const images = [];
    for (let imageIndex = 0; imageIndex < nbImages; imageIndex += 1) {
      images.push(getImageSize$1(input, imageIndex));
    }
    return {
      width: imageSize.width,
      height: imageSize.height,
      images
    };
  }
};
const TYPE_CURSOR = 2;
const CUR = {
  validate(input) {
    const reserved = readUInt16LE(input, 0);
    const imageCount = readUInt16LE(input, 4);
    if (reserved !== 0 || imageCount === 0) return false;
    const imageType = readUInt16LE(input, 2);
    return imageType === TYPE_CURSOR;
  },
  calculate: (input) => ICO.calculate(input)
};
const DDS = {
  validate: (input) => readUInt32LE(input, 0) === 542327876,
  calculate: (input) => ({
    height: readUInt32LE(input, 12),
    width: readUInt32LE(input, 16)
  })
};
const gifRegexp = /^GIF8[79]a/;
const GIF = {
  validate: (input) => gifRegexp.test(toUTF8String(input, 0, 6)),
  calculate: (input) => ({
    height: readUInt16LE(input, 8),
    width: readUInt16LE(input, 6)
  })
};
const brandMap = {
  avif: "avif",
  avis: "avif",
  // avif-sequence
  mif1: "heif",
  msf1: "heif",
  // heif-sequence
  heic: "heic",
  heix: "heic",
  hevc: "heic",
  // heic-sequence
  hevx: "heic"
  // heic-sequence
};
function detectType(input, start, end) {
  let hasAvif = false;
  let hasHeic = false;
  let hasHeif = false;
  for (let i2 = start; i2 <= end; i2 += 4) {
    const brand = toUTF8String(input, i2, i2 + 4);
    if (brand === "avif" || brand === "avis") hasAvif = true;
    else if (brand === "heic" || brand === "heix" || brand === "hevc" || brand === "hevx") hasHeic = true;
    else if (brand === "mif1" || brand === "msf1") hasHeif = true;
  }
  if (hasAvif) return "avif";
  if (hasHeic) return "heic";
  if (hasHeif) return "heif";
}
const HEIF = {
  validate(input) {
    const boxType = toUTF8String(input, 4, 8);
    if (boxType !== "ftyp") return false;
    const ftypBox = findBox(input, "ftyp", 0);
    if (!ftypBox) return false;
    const brand = toUTF8String(input, ftypBox.offset + 8, ftypBox.offset + 12);
    return brand in brandMap;
  },
  calculate(input) {
    const metaBox = findBox(input, "meta", 0);
    const iprpBox = metaBox && findBox(input, "iprp", metaBox.offset + 12);
    const ipcoBox = iprpBox && findBox(input, "ipco", iprpBox.offset + 8);
    if (!ipcoBox) {
      throw new TypeError("Invalid HEIF, no ipco box found");
    }
    const type = detectType(input, 8, metaBox.offset);
    const images = [];
    let currentOffset = ipcoBox.offset + 8;
    while (currentOffset < ipcoBox.offset + ipcoBox.size) {
      const ispeBox = findBox(input, "ispe", currentOffset);
      if (!ispeBox) break;
      const rawWidth = readUInt32BE(input, ispeBox.offset + 12);
      const rawHeight = readUInt32BE(input, ispeBox.offset + 16);
      const clapBox = findBox(input, "clap", currentOffset);
      let width = rawWidth;
      let height = rawHeight;
      if (clapBox && clapBox.offset < ipcoBox.offset + ipcoBox.size) {
        const cropRight = readUInt32BE(input, clapBox.offset + 12);
        width = rawWidth - cropRight;
      }
      images.push({ height, width });
      currentOffset = ispeBox.offset + ispeBox.size;
    }
    if (images.length === 0) {
      throw new TypeError("Invalid HEIF, no sizes found");
    }
    return {
      width: images[0].width,
      height: images[0].height,
      type,
      ...images.length > 1 ? { images } : {}
    };
  }
};
const SIZE_HEADER = 4 + 4;
const FILE_LENGTH_OFFSET = 4;
const ENTRY_LENGTH_OFFSET = 4;
const ICON_TYPE_SIZE = {
  ICON: 32,
  "ICN#": 32,
  // m => 16 x 16
  "icm#": 16,
  icm4: 16,
  icm8: 16,
  // s => 16 x 16
  "ics#": 16,
  ics4: 16,
  ics8: 16,
  is32: 16,
  s8mk: 16,
  icp4: 16,
  // l => 32 x 32
  icl4: 32,
  icl8: 32,
  il32: 32,
  l8mk: 32,
  icp5: 32,
  ic11: 32,
  // h => 48 x 48
  ich4: 48,
  ich8: 48,
  ih32: 48,
  h8mk: 48,
  // . => 64 x 64
  icp6: 64,
  ic12: 32,
  // t => 128 x 128
  it32: 128,
  t8mk: 128,
  ic07: 128,
  // . => 256 x 256
  ic08: 256,
  ic13: 256,
  // . => 512 x 512
  ic09: 512,
  ic14: 512,
  // . => 1024 x 1024
  ic10: 1024
};
function readImageHeader(input, imageOffset) {
  const imageLengthOffset = imageOffset + ENTRY_LENGTH_OFFSET;
  return [
    toUTF8String(input, imageOffset, imageLengthOffset),
    readUInt32BE(input, imageLengthOffset)
  ];
}
function getImageSize(type) {
  const size = ICON_TYPE_SIZE[type];
  return { width: size, height: size, type };
}
const ICNS = {
  validate: (input) => toUTF8String(input, 0, 4) === "icns",
  calculate(input) {
    const inputLength = input.length;
    const fileLength = readUInt32BE(input, FILE_LENGTH_OFFSET);
    let imageOffset = SIZE_HEADER;
    const images = [];
    while (imageOffset < fileLength && imageOffset < inputLength) {
      const imageHeader = readImageHeader(input, imageOffset);
      const imageSize = getImageSize(imageHeader[0]);
      images.push(imageSize);
      imageOffset += imageHeader[1];
    }
    if (images.length === 0) {
      throw new TypeError("Invalid ICNS, no sizes found");
    }
    return {
      width: images[0].width,
      height: images[0].height,
      ...images.length > 1 ? { images } : {}
    };
  }
};
const J2C = {
  // TODO: this doesn't seem right. SIZ marker doesn't have to be right after the SOC
  validate: (input) => readUInt32BE(input, 0) === 4283432785,
  calculate: (input) => ({
    height: readUInt32BE(input, 12),
    width: readUInt32BE(input, 8)
  })
};
const JP2 = {
  validate(input) {
    const boxType = toUTF8String(input, 4, 8);
    if (boxType !== "jP  ") return false;
    const ftypBox = findBox(input, "ftyp", 0);
    if (!ftypBox) return false;
    const brand = toUTF8String(input, ftypBox.offset + 8, ftypBox.offset + 12);
    return brand === "jp2 ";
  },
  calculate(input) {
    const jp2hBox = findBox(input, "jp2h", 0);
    const ihdrBox = jp2hBox && findBox(input, "ihdr", jp2hBox.offset + 8);
    if (ihdrBox) {
      return {
        height: readUInt32BE(input, ihdrBox.offset + 8),
        width: readUInt32BE(input, ihdrBox.offset + 12)
      };
    }
    throw new TypeError("Unsupported JPEG 2000 format");
  }
};
const EXIF_MARKER = "45786966";
const APP1_DATA_SIZE_BYTES = 2;
const EXIF_HEADER_BYTES = 6;
const TIFF_BYTE_ALIGN_BYTES = 2;
const BIG_ENDIAN_BYTE_ALIGN = "4d4d";
const LITTLE_ENDIAN_BYTE_ALIGN = "4949";
const IDF_ENTRY_BYTES = 12;
const NUM_DIRECTORY_ENTRIES_BYTES = 2;
function isEXIF(input) {
  return toHexString(input, 2, 6) === EXIF_MARKER;
}
function extractSize(input, index) {
  return {
    height: readUInt16BE(input, index),
    width: readUInt16BE(input, index + 2)
  };
}
function extractOrientation(exifBlock, isBigEndian) {
  const idfOffset = 8;
  const offset = EXIF_HEADER_BYTES + idfOffset;
  const idfDirectoryEntries = readUInt(exifBlock, 16, offset, isBigEndian);
  for (let directoryEntryNumber = 0; directoryEntryNumber < idfDirectoryEntries; directoryEntryNumber++) {
    const start = offset + NUM_DIRECTORY_ENTRIES_BYTES + directoryEntryNumber * IDF_ENTRY_BYTES;
    const end = start + IDF_ENTRY_BYTES;
    if (start > exifBlock.length) {
      return;
    }
    const block = exifBlock.slice(start, end);
    const tagNumber = readUInt(block, 16, 0, isBigEndian);
    if (tagNumber === 274) {
      const dataFormat = readUInt(block, 16, 2, isBigEndian);
      if (dataFormat !== 3) {
        return;
      }
      const numberOfComponents = readUInt(block, 32, 4, isBigEndian);
      if (numberOfComponents !== 1) {
        return;
      }
      return readUInt(block, 16, 8, isBigEndian);
    }
  }
}
function validateExifBlock(input, index) {
  const exifBlock = input.slice(APP1_DATA_SIZE_BYTES, index);
  const byteAlign = toHexString(
    exifBlock,
    EXIF_HEADER_BYTES,
    EXIF_HEADER_BYTES + TIFF_BYTE_ALIGN_BYTES
  );
  const isBigEndian = byteAlign === BIG_ENDIAN_BYTE_ALIGN;
  const isLittleEndian = byteAlign === LITTLE_ENDIAN_BYTE_ALIGN;
  if (isBigEndian || isLittleEndian) {
    return extractOrientation(exifBlock, isBigEndian);
  }
}
function validateInput(input, index) {
  if (index > input.length) {
    throw new TypeError("Corrupt JPG, exceeded buffer limits");
  }
}
const JPG = {
  validate: (input) => toHexString(input, 0, 2) === "ffd8",
  calculate(_input) {
    let input = _input.slice(4);
    let orientation;
    let next;
    while (input.length) {
      const i2 = readUInt16BE(input, 0);
      validateInput(input, i2);
      if (input[i2] !== 255) {
        input = input.slice(1);
        continue;
      }
      if (isEXIF(input)) {
        orientation = validateExifBlock(input, i2);
      }
      next = input[i2 + 1];
      if (next === 192 || next === 193 || next === 194) {
        const size = extractSize(input, i2 + 5);
        if (!orientation) {
          return size;
        }
        return {
          height: size.height,
          orientation,
          width: size.width
        };
      }
      input = input.slice(i2 + 2);
    }
    throw new TypeError("Invalid JPG, no size found");
  }
};
class BitReader {
  constructor(input, endianness) {
    this.input = input;
    this.endianness = endianness;
  }
  // Skip the first 16 bits (2 bytes) of signature
  byteOffset = 2;
  bitOffset = 0;
  /** Reads a specified number of bits, and move the offset */
  getBits(length = 1) {
    let result = 0;
    let bitsRead = 0;
    while (bitsRead < length) {
      if (this.byteOffset >= this.input.length) {
        throw new Error("Reached end of input");
      }
      const currentByte = this.input[this.byteOffset];
      const bitsLeft = 8 - this.bitOffset;
      const bitsToRead = Math.min(length - bitsRead, bitsLeft);
      if (this.endianness === "little-endian") {
        const mask = (1 << bitsToRead) - 1;
        const bits = currentByte >> this.bitOffset & mask;
        result |= bits << bitsRead;
      } else {
        const mask = (1 << bitsToRead) - 1 << 8 - this.bitOffset - bitsToRead;
        const bits = (currentByte & mask) >> 8 - this.bitOffset - bitsToRead;
        result = result << bitsToRead | bits;
      }
      bitsRead += bitsToRead;
      this.bitOffset += bitsToRead;
      if (this.bitOffset === 8) {
        this.byteOffset++;
        this.bitOffset = 0;
      }
    }
    return result;
  }
}
function calculateImageDimension(reader, isSmallImage) {
  if (isSmallImage) {
    return 8 * (1 + reader.getBits(5));
  }
  const sizeClass = reader.getBits(2);
  const extraBits = [9, 13, 18, 30][sizeClass];
  return 1 + reader.getBits(extraBits);
}
function calculateImageWidth(reader, isSmallImage, widthMode, height) {
  if (isSmallImage && widthMode === 0) {
    return 8 * (1 + reader.getBits(5));
  }
  if (widthMode === 0) {
    return calculateImageDimension(reader, false);
  }
  const aspectRatios = [1, 1.2, 4 / 3, 1.5, 16 / 9, 5 / 4, 2];
  return Math.floor(height * aspectRatios[widthMode - 1]);
}
const JXLStream = {
  validate: (input) => {
    return toHexString(input, 0, 2) === "ff0a";
  },
  calculate(input) {
    const reader = new BitReader(input, "little-endian");
    const isSmallImage = reader.getBits(1) === 1;
    const height = calculateImageDimension(reader, isSmallImage);
    const widthMode = reader.getBits(3);
    const width = calculateImageWidth(reader, isSmallImage, widthMode, height);
    return { width, height };
  }
};
function extractCodestream(input) {
  const jxlcBox = findBox(input, "jxlc", 0);
  if (jxlcBox) {
    return input.slice(jxlcBox.offset + 8, jxlcBox.offset + jxlcBox.size);
  }
  const partialStreams = extractPartialStreams(input);
  if (partialStreams.length > 0) {
    return concatenateCodestreams(partialStreams);
  }
  return void 0;
}
function extractPartialStreams(input) {
  const partialStreams = [];
  let offset = 0;
  while (offset < input.length) {
    const jxlpBox = findBox(input, "jxlp", offset);
    if (!jxlpBox) break;
    partialStreams.push(
      input.slice(jxlpBox.offset + 12, jxlpBox.offset + jxlpBox.size)
    );
    offset = jxlpBox.offset + jxlpBox.size;
  }
  return partialStreams;
}
function concatenateCodestreams(partialCodestreams) {
  const totalLength = partialCodestreams.reduce(
    (acc, curr) => acc + curr.length,
    0
  );
  const codestream = new Uint8Array(totalLength);
  let position = 0;
  for (const partial of partialCodestreams) {
    codestream.set(partial, position);
    position += partial.length;
  }
  return codestream;
}
const JXL = {
  validate: (input) => {
    const boxType = toUTF8String(input, 4, 8);
    if (boxType !== "JXL ") return false;
    const ftypBox = findBox(input, "ftyp", 0);
    if (!ftypBox) return false;
    const brand = toUTF8String(input, ftypBox.offset + 8, ftypBox.offset + 12);
    return brand === "jxl ";
  },
  calculate(input) {
    const codestream = extractCodestream(input);
    if (codestream) return JXLStream.calculate(codestream);
    throw new Error("No codestream found in JXL container");
  }
};
const KTX = {
  validate: (input) => {
    const signature = toUTF8String(input, 1, 7);
    return ["KTX 11", "KTX 20"].includes(signature);
  },
  calculate: (input) => {
    const type = input[5] === 49 ? "ktx" : "ktx2";
    const offset = type === "ktx" ? 36 : 20;
    return {
      height: readUInt32LE(input, offset + 4),
      width: readUInt32LE(input, offset),
      type
    };
  }
};
const pngSignature = "PNG\r\n\n";
const pngImageHeaderChunkName = "IHDR";
const pngFriedChunkName = "CgBI";
const PNG = {
  validate(input) {
    if (pngSignature === toUTF8String(input, 1, 8)) {
      let chunkName = toUTF8String(input, 12, 16);
      if (chunkName === pngFriedChunkName) {
        chunkName = toUTF8String(input, 28, 32);
      }
      if (chunkName !== pngImageHeaderChunkName) {
        throw new TypeError("Invalid PNG");
      }
      return true;
    }
    return false;
  },
  calculate(input) {
    if (toUTF8String(input, 12, 16) === pngFriedChunkName) {
      return {
        height: readUInt32BE(input, 36),
        width: readUInt32BE(input, 32)
      };
    }
    return {
      height: readUInt32BE(input, 20),
      width: readUInt32BE(input, 16)
    };
  }
};
const PNMTypes = {
  P1: "pbm/ascii",
  P2: "pgm/ascii",
  P3: "ppm/ascii",
  P4: "pbm",
  P5: "pgm",
  P6: "ppm",
  P7: "pam",
  PF: "pfm"
};
const handlers = {
  default: (lines) => {
    let dimensions = [];
    while (lines.length > 0) {
      const line = lines.shift();
      if (line[0] === "#") {
        continue;
      }
      dimensions = line.split(" ");
      break;
    }
    if (dimensions.length === 2) {
      return {
        height: Number.parseInt(dimensions[1], 10),
        width: Number.parseInt(dimensions[0], 10)
      };
    }
    throw new TypeError("Invalid PNM");
  },
  pam: (lines) => {
    const size = {};
    while (lines.length > 0) {
      const line = lines.shift();
      if (line.length > 16 || line.charCodeAt(0) > 128) {
        continue;
      }
      const [key, value] = line.split(" ");
      if (key && value) {
        size[key.toLowerCase()] = Number.parseInt(value, 10);
      }
      if (size.height && size.width) {
        break;
      }
    }
    if (size.height && size.width) {
      return {
        height: size.height,
        width: size.width
      };
    }
    throw new TypeError("Invalid PAM");
  }
};
const PNM = {
  validate: (input) => toUTF8String(input, 0, 2) in PNMTypes,
  calculate(input) {
    const signature = toUTF8String(input, 0, 2);
    const type = PNMTypes[signature];
    const lines = toUTF8String(input, 3).split(/[\r\n]+/);
    const handler = handlers[type] || handlers.default;
    return handler(lines);
  }
};
const PSD = {
  validate: (input) => toUTF8String(input, 0, 4) === "8BPS",
  calculate: (input) => ({
    height: readUInt32BE(input, 14),
    width: readUInt32BE(input, 18)
  })
};
const svgReg = /<svg\s([^>"']|"[^"]*"|'[^']*')*>/;
const extractorRegExps = {
  height: /\sheight=(['"])([^%]+?)\1/,
  root: svgReg,
  viewbox: /\sviewBox=(['"])(.+?)\1/i,
  width: /\swidth=(['"])([^%]+?)\1/
};
const INCH_CM = 2.54;
const units = {
  in: 96,
  cm: 96 / INCH_CM,
  em: 16,
  ex: 8,
  m: 96 / INCH_CM * 100,
  mm: 96 / INCH_CM / 10,
  pc: 96 / 72 / 12,
  pt: 96 / 72,
  px: 1
};
const unitsReg = new RegExp(
  `^([0-9.]+(?:e\\d+)?)(${Object.keys(units).join("|")})?$`
);
function parseLength(len) {
  const m = unitsReg.exec(len);
  if (!m) {
    return void 0;
  }
  return Math.round(Number(m[1]) * (units[m[2]] || 1));
}
function parseViewbox(viewbox) {
  const bounds = viewbox.split(" ");
  return {
    height: parseLength(bounds[3]),
    width: parseLength(bounds[2])
  };
}
function parseAttributes(root) {
  const width = extractorRegExps.width.exec(root);
  const height = extractorRegExps.height.exec(root);
  const viewbox = extractorRegExps.viewbox.exec(root);
  return {
    height: height && parseLength(height[2]),
    viewbox: viewbox && parseViewbox(viewbox[2]),
    width: width && parseLength(width[2])
  };
}
function calculateByDimensions(attrs) {
  return {
    height: attrs.height,
    width: attrs.width
  };
}
function calculateByViewbox(attrs, viewbox) {
  const ratio = viewbox.width / viewbox.height;
  if (attrs.width) {
    return {
      height: Math.floor(attrs.width / ratio),
      width: attrs.width
    };
  }
  if (attrs.height) {
    return {
      height: attrs.height,
      width: Math.floor(attrs.height * ratio)
    };
  }
  return {
    height: viewbox.height,
    width: viewbox.width
  };
}
const SVG = {
  // Scan only the first kilo-byte to speed up the check on larger files
  validate: (input) => svgReg.test(toUTF8String(input, 0, 1e3)),
  calculate(input) {
    const root = extractorRegExps.root.exec(toUTF8String(input));
    if (root) {
      const attrs = parseAttributes(root[0]);
      if (attrs.width && attrs.height) {
        return calculateByDimensions(attrs);
      }
      if (attrs.viewbox) {
        return calculateByViewbox(attrs, attrs.viewbox);
      }
    }
    throw new TypeError("Invalid SVG");
  }
};
const TGA = {
  validate(input) {
    return readUInt16LE(input, 0) === 0 && readUInt16LE(input, 4) === 0;
  },
  calculate(input) {
    return {
      height: readUInt16LE(input, 14),
      width: readUInt16LE(input, 12)
    };
  }
};
const CONSTANTS = {
  TAG: {
    WIDTH: 256,
    HEIGHT: 257,
    COMPRESSION: 259
  },
  TYPE: {
    SHORT: 3,
    LONG: 4,
    LONG8: 16
  },
  ENTRY_SIZE: {
    STANDARD: 12,
    BIG: 20
  },
  COUNT_SIZE: {
    STANDARD: 2,
    BIG: 8
  }
};
function readIFD(input, { isBigEndian, isBigTiff }) {
  const ifdOffset = isBigTiff ? Number(readUInt64(input, 8, isBigEndian)) : readUInt(input, 32, 4, isBigEndian);
  const entryCountSize = isBigTiff ? CONSTANTS.COUNT_SIZE.BIG : CONSTANTS.COUNT_SIZE.STANDARD;
  return input.slice(ifdOffset + entryCountSize);
}
function readTagValue(input, type, offset, isBigEndian) {
  switch (type) {
    case CONSTANTS.TYPE.SHORT:
      return readUInt(input, 16, offset, isBigEndian);
    case CONSTANTS.TYPE.LONG:
      return readUInt(input, 32, offset, isBigEndian);
    case CONSTANTS.TYPE.LONG8: {
      const value = Number(readUInt64(input, offset, isBigEndian));
      if (value > Number.MAX_SAFE_INTEGER) {
        throw new TypeError("Value too large");
      }
      return value;
    }
    default:
      return 0;
  }
}
function nextTag(input, isBigTiff) {
  const entrySize = isBigTiff ? CONSTANTS.ENTRY_SIZE.BIG : CONSTANTS.ENTRY_SIZE.STANDARD;
  if (input.length > entrySize) {
    return input.slice(entrySize);
  }
}
function extractTags(input, { isBigEndian, isBigTiff }) {
  const tags = {};
  let temp = input;
  while (temp?.length) {
    const code = readUInt(temp, 16, 0, isBigEndian);
    const type = readUInt(temp, 16, 2, isBigEndian);
    const length = isBigTiff ? Number(readUInt64(temp, 4, isBigEndian)) : readUInt(temp, 32, 4, isBigEndian);
    if (code === 0) break;
    if (length === 1 && (type === CONSTANTS.TYPE.SHORT || type === CONSTANTS.TYPE.LONG || isBigTiff && type === CONSTANTS.TYPE.LONG8)) {
      const valueOffset = isBigTiff ? 12 : 8;
      tags[code] = readTagValue(temp, type, valueOffset, isBigEndian);
    }
    temp = nextTag(temp, isBigTiff);
  }
  return tags;
}
function determineFormat(input) {
  const signature = toUTF8String(input, 0, 2);
  const version2 = readUInt(input, 16, 2, signature === "MM");
  return {
    isBigEndian: signature === "MM",
    isBigTiff: version2 === 43
  };
}
function validateBigTIFFHeader(input, isBigEndian) {
  const byteSize = readUInt(input, 16, 4, isBigEndian);
  const reserved = readUInt(input, 16, 6, isBigEndian);
  if (byteSize !== 8 || reserved !== 0) {
    throw new TypeError("Invalid BigTIFF header");
  }
}
const signatures = /* @__PURE__ */ new Set([
  "49492a00",
  // Little Endian
  "4d4d002a",
  // Big Endian
  "49492b00",
  // BigTIFF Little Endian
  "4d4d002b"
  // BigTIFF Big Endian
]);
const TIFF = {
  validate: (input) => {
    const signature = toHexString(input, 0, 4);
    return signatures.has(signature);
  },
  calculate(input) {
    const format = determineFormat(input);
    if (format.isBigTiff) {
      validateBigTIFFHeader(input, format.isBigEndian);
    }
    const ifdBuffer = readIFD(input, format);
    const tags = extractTags(ifdBuffer, format);
    const info2 = {
      height: tags[CONSTANTS.TAG.HEIGHT],
      width: tags[CONSTANTS.TAG.WIDTH],
      type: format.isBigTiff ? "bigtiff" : "tiff"
    };
    if (tags[CONSTANTS.TAG.COMPRESSION]) {
      info2.compression = tags[CONSTANTS.TAG.COMPRESSION];
    }
    if (!info2.width || !info2.height) {
      throw new TypeError("Invalid Tiff. Missing tags");
    }
    return info2;
  }
};
function calculateExtended(input) {
  return {
    height: 1 + readUInt24LE(input, 7),
    width: 1 + readUInt24LE(input, 4)
  };
}
function calculateLossless(input) {
  return {
    height: 1 + ((input[4] & 15) << 10 | input[3] << 2 | (input[2] & 192) >> 6),
    width: 1 + ((input[2] & 63) << 8 | input[1])
  };
}
function calculateLossy(input) {
  return {
    height: readInt16LE(input, 8) & 16383,
    width: readInt16LE(input, 6) & 16383
  };
}
const WEBP = {
  validate(input) {
    const riffHeader = "RIFF" === toUTF8String(input, 0, 4);
    const webpHeader = "WEBP" === toUTF8String(input, 8, 12);
    const vp8Header = "VP8" === toUTF8String(input, 12, 15);
    return riffHeader && webpHeader && vp8Header;
  },
  calculate(_input) {
    const chunkHeader = toUTF8String(_input, 12, 16);
    const input = _input.slice(20, 30);
    if (chunkHeader === "VP8X") {
      const extendedHeader = input[0];
      const validStart = (extendedHeader & 192) === 0;
      const validEnd = (extendedHeader & 1) === 0;
      if (validStart && validEnd) {
        return calculateExtended(input);
      }
      throw new TypeError("Invalid WebP");
    }
    if (chunkHeader === "VP8 " && input[0] !== 47) {
      return calculateLossy(input);
    }
    const signature = toHexString(input, 3, 6);
    if (chunkHeader === "VP8L" && signature !== "9d012a") {
      return calculateLossless(input);
    }
    throw new TypeError("Invalid WebP");
  }
};
const typeHandlers = /* @__PURE__ */ new Map([
  ["bmp", BMP],
  ["cur", CUR],
  ["dds", DDS],
  ["gif", GIF],
  ["heif", HEIF],
  ["icns", ICNS],
  ["ico", ICO],
  ["j2c", J2C],
  ["jp2", JP2],
  ["jpg", JPG],
  ["jxl", JXL],
  ["jxl-stream", JXLStream],
  ["ktx", KTX],
  ["png", PNG],
  ["pnm", PNM],
  ["psd", PSD],
  ["svg", SVG],
  ["tga", TGA],
  ["tiff", TIFF],
  ["webp", WEBP]
]);
const types = Array.from(typeHandlers.keys());
function shouldAppendForwardSlash(trailingSlash, buildFormat) {
  switch (trailingSlash) {
    case "always":
      return true;
    case "never":
      return false;
    case "ignore": {
      switch (buildFormat) {
        case "directory":
          return true;
        case "preserve":
        case "file":
          return false;
      }
    }
  }
}
const ASTRO_VERSION = "6.0.4";
const ASTRO_GENERATOR = `Astro v${ASTRO_VERSION}`;
const REROUTE_DIRECTIVE_HEADER = "X-Astro-Reroute";
const REWRITE_DIRECTIVE_HEADER_KEY = "X-Astro-Rewrite";
const REWRITE_DIRECTIVE_HEADER_VALUE = "yes";
const NOOP_MIDDLEWARE_HEADER = "X-Astro-Noop";
const ROUTE_TYPE_HEADER = "X-Astro-Route-Type";
const DEFAULT_404_COMPONENT = "astro-default-404.astro";
const REDIRECT_STATUS_CODES = [301, 302, 303, 307, 308, 300, 304];
const REROUTABLE_STATUS_CODES = [404, 500];
const clientAddressSymbol = /* @__PURE__ */ Symbol.for("astro.clientAddress");
const originPathnameSymbol = /* @__PURE__ */ Symbol.for("astro.originPathname");
const pipelineSymbol = /* @__PURE__ */ Symbol.for("astro.pipeline");
const responseSentSymbol$1 = /* @__PURE__ */ Symbol.for("astro.responseSent");
function computeFallbackRoute(options) {
  const {
    pathname,
    responseStatus,
    fallback,
    fallbackType,
    locales,
    defaultLocale,
    strategy,
    base
  } = options;
  if (responseStatus !== 404) {
    return { type: "none" };
  }
  if (!fallback || Object.keys(fallback).length === 0) {
    return { type: "none" };
  }
  const segments = pathname.split("/");
  const urlLocale = segments.find((segment) => {
    for (const locale of locales) {
      if (typeof locale === "string") {
        if (locale === segment) {
          return true;
        }
      } else if (locale.path === segment) {
        return true;
      }
    }
    return false;
  });
  if (!urlLocale) {
    return { type: "none" };
  }
  const fallbackKeys = Object.keys(fallback);
  if (!fallbackKeys.includes(urlLocale)) {
    return { type: "none" };
  }
  const fallbackLocale = fallback[urlLocale];
  const pathFallbackLocale = getPathByLocale(fallbackLocale, locales);
  let newPathname;
  if (pathFallbackLocale === defaultLocale && strategy === "pathname-prefix-other-locales") {
    if (pathname.includes(`${base}`)) {
      newPathname = pathname.replace(`/${urlLocale}`, ``);
    } else {
      newPathname = pathname.replace(`/${urlLocale}`, `/`);
    }
  } else {
    newPathname = pathname.replace(`/${urlLocale}`, `/${pathFallbackLocale}`);
  }
  return {
    type: fallbackType,
    pathname: newPathname
  };
}
class I18nRouter {
  #strategy;
  #defaultLocale;
  #locales;
  #base;
  #domains;
  constructor(options) {
    this.#strategy = options.strategy;
    this.#defaultLocale = options.defaultLocale;
    this.#locales = options.locales;
    this.#base = options.base === "/" ? "/" : removeTrailingForwardSlash(options.base || "");
    this.#domains = options.domains;
  }
  /**
   * Evaluate routing strategy for a pathname.
   * Returns decision object (not HTTP Response).
   */
  match(pathname, context) {
    if (this.shouldSkipProcessing(pathname, context)) {
      return { type: "continue" };
    }
    switch (this.#strategy) {
      case "manual":
        return { type: "continue" };
      case "pathname-prefix-always":
        return this.matchPrefixAlways(pathname, context);
      case "domains-prefix-always":
        if (this.localeHasntDomain(context.currentLocale, context.currentDomain)) {
          return { type: "continue" };
        }
        return this.matchPrefixAlways(pathname, context);
      case "pathname-prefix-other-locales":
        return this.matchPrefixOtherLocales(pathname, context);
      case "domains-prefix-other-locales":
        if (this.localeHasntDomain(context.currentLocale, context.currentDomain)) {
          return { type: "continue" };
        }
        return this.matchPrefixOtherLocales(pathname, context);
      case "pathname-prefix-always-no-redirect":
        return this.matchPrefixAlwaysNoRedirect(pathname, context);
      case "domains-prefix-always-no-redirect":
        if (this.localeHasntDomain(context.currentLocale, context.currentDomain)) {
          return { type: "continue" };
        }
        return this.matchPrefixAlwaysNoRedirect(pathname, context);
      default:
        return { type: "continue" };
    }
  }
  /**
   * Check if i18n processing should be skipped for this request
   */
  shouldSkipProcessing(pathname, context) {
    if (pathname.includes("/404") || pathname.includes("/500")) {
      return true;
    }
    if (pathname.includes("/_server-islands/")) {
      return true;
    }
    if (context.isReroute) {
      return true;
    }
    if (context.routeType && context.routeType !== "page" && context.routeType !== "fallback") {
      return true;
    }
    return false;
  }
  /**
   * Strategy: pathname-prefix-always
   * All locales must have a prefix, including the default locale.
   */
  matchPrefixAlways(pathname, _context) {
    const isRoot = pathname === this.#base + "/" || pathname === this.#base;
    if (isRoot) {
      const basePrefix = this.#base === "/" ? "" : this.#base;
      return {
        type: "redirect",
        location: `${basePrefix}/${this.#defaultLocale}`
      };
    }
    if (!pathHasLocale(pathname, this.#locales)) {
      return { type: "notFound" };
    }
    return { type: "continue" };
  }
  /**
   * Strategy: pathname-prefix-other-locales
   * Default locale has no prefix, other locales must have a prefix.
   */
  matchPrefixOtherLocales(pathname, _context) {
    let pathnameContainsDefaultLocale = false;
    for (const segment of pathname.split("/")) {
      if (normalizeTheLocale(segment) === normalizeTheLocale(this.#defaultLocale)) {
        pathnameContainsDefaultLocale = true;
        break;
      }
    }
    if (pathnameContainsDefaultLocale) {
      const newLocation = pathname.replace(`/${this.#defaultLocale}`, "");
      return {
        type: "notFound",
        location: newLocation
      };
    }
    return { type: "continue" };
  }
  /**
   * Strategy: pathname-prefix-always-no-redirect
   * Like prefix-always but allows root to serve instead of redirecting
   */
  matchPrefixAlwaysNoRedirect(pathname, _context) {
    const isRoot = pathname === this.#base + "/" || pathname === this.#base;
    if (isRoot) {
      return { type: "continue" };
    }
    if (!pathHasLocale(pathname, this.#locales)) {
      return { type: "notFound" };
    }
    return { type: "continue" };
  }
  /**
   * Check if the current locale doesn't belong to the configured domain.
   * Used for domain-based routing strategies.
   */
  localeHasntDomain(currentLocale, currentDomain) {
    if (!this.#domains || !currentDomain) {
      return false;
    }
    if (!currentLocale) {
      return false;
    }
    const localesForDomain = this.#domains[currentDomain];
    if (!localesForDomain) {
      return true;
    }
    return !localesForDomain.includes(currentLocale);
  }
}
function createI18nMiddleware(i18n, base, trailingSlash, format) {
  if (!i18n) return (_, next) => next();
  const i18nRouter = new I18nRouter({
    strategy: i18n.strategy,
    defaultLocale: i18n.defaultLocale,
    locales: i18n.locales,
    base,
    domains: i18n.domainLookupTable ? Object.keys(i18n.domainLookupTable).reduce(
      (acc, domain) => {
        const locale = i18n.domainLookupTable[domain];
        if (!acc[domain]) {
          acc[domain] = [];
        }
        acc[domain].push(locale);
        return acc;
      },
      {}
    ) : void 0
  });
  return async (context, next) => {
    const response = await next();
    const typeHeader = response.headers.get(ROUTE_TYPE_HEADER);
    const isReroute = response.headers.get(REROUTE_DIRECTIVE_HEADER);
    if (isReroute === "no" && typeof i18n.fallback === "undefined") {
      return response;
    }
    if (typeHeader !== "page" && typeHeader !== "fallback") {
      return response;
    }
    const routerContext = {
      currentLocale: context.currentLocale,
      currentDomain: context.url.hostname,
      routeType: typeHeader,
      isReroute: isReroute === "yes"
    };
    const routeDecision = i18nRouter.match(context.url.pathname, routerContext);
    switch (routeDecision.type) {
      case "redirect": {
        let location = routeDecision.location;
        if (shouldAppendForwardSlash(trailingSlash, format)) {
          location = appendForwardSlash(location);
        }
        return context.redirect(location, routeDecision.status);
      }
      case "notFound": {
        const notFoundRes = new Response(response.body, {
          status: 404,
          headers: response.headers
        });
        notFoundRes.headers.set(REROUTE_DIRECTIVE_HEADER, "no");
        if (routeDecision.location) {
          notFoundRes.headers.set("Location", routeDecision.location);
        }
        return notFoundRes;
      }
    }
    if (i18n.fallback && i18n.fallbackType) {
      const fallbackDecision = computeFallbackRoute({
        pathname: context.url.pathname,
        responseStatus: response.status,
        currentLocale: context.currentLocale,
        fallback: i18n.fallback,
        fallbackType: i18n.fallbackType,
        locales: i18n.locales,
        defaultLocale: i18n.defaultLocale,
        strategy: i18n.strategy,
        base
      });
      switch (fallbackDecision.type) {
        case "redirect":
          return context.redirect(fallbackDecision.pathname + context.url.search);
        case "rewrite":
          return await context.rewrite(fallbackDecision.pathname + context.url.search);
      }
    }
    return response;
  };
}
function pathHasLocale(path, locales) {
  const segments = path.split("/").map(normalizeThePath);
  for (const segment of segments) {
    for (const locale of locales) {
      if (typeof locale === "string") {
        if (normalizeTheLocale(segment) === normalizeTheLocale(locale)) {
          return true;
        }
      } else if (segment === locale.path) {
        return true;
      }
    }
  }
  return false;
}
function getPathByLocale(locale, locales) {
  for (const loopLocale of locales) {
    if (typeof loopLocale === "string") {
      if (loopLocale === locale) {
        return loopLocale;
      }
    } else {
      for (const code of loopLocale.codes) {
        if (code === locale) {
          return loopLocale.path;
        }
      }
    }
  }
  throw new AstroError(i18nNoLocaleFoundInPath);
}
function normalizeTheLocale(locale) {
  return locale.replaceAll("_", "-").toLowerCase();
}
function normalizeThePath(path) {
  return path.endsWith(".html") ? path.slice(0, -5) : path;
}
function getAllCodes(locales) {
  const result = [];
  for (const loopLocale of locales) {
    if (typeof loopLocale === "string") {
      result.push(loopLocale);
    } else {
      result.push(...loopLocale.codes);
    }
  }
  return result;
}
var dist = {};
var hasRequiredDist;
function requireDist() {
  if (hasRequiredDist) return dist;
  hasRequiredDist = 1;
  Object.defineProperty(dist, "__esModule", { value: true });
  dist.parseCookie = parseCookie;
  dist.parse = parseCookie;
  dist.stringifyCookie = stringifyCookie;
  dist.stringifySetCookie = stringifySetCookie;
  dist.serialize = stringifySetCookie;
  dist.parseSetCookie = parseSetCookie;
  dist.stringifySetCookie = stringifySetCookie;
  dist.serialize = stringifySetCookie;
  const cookieNameRegExp = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/;
  const cookieValueRegExp = /^[\u0021-\u003A\u003C-\u007E]*$/;
  const domainValueRegExp = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i;
  const pathValueRegExp = /^[\u0020-\u003A\u003D-\u007E]*$/;
  const maxAgeRegExp = /^-?\d+$/;
  const __toString = Object.prototype.toString;
  const NullObject = /* @__PURE__ */ (() => {
    const C = function() {
    };
    C.prototype = /* @__PURE__ */ Object.create(null);
    return C;
  })();
  function parseCookie(str, options) {
    const obj = new NullObject();
    const len = str.length;
    if (len < 2)
      return obj;
    const dec = options?.decode || decode2;
    let index = 0;
    do {
      const eqIdx = eqIndex(str, index, len);
      if (eqIdx === -1)
        break;
      const endIdx = endIndex(str, index, len);
      if (eqIdx > endIdx) {
        index = str.lastIndexOf(";", eqIdx - 1) + 1;
        continue;
      }
      const key = valueSlice(str, index, eqIdx);
      if (obj[key] === void 0) {
        obj[key] = dec(valueSlice(str, eqIdx + 1, endIdx));
      }
      index = endIdx + 1;
    } while (index < len);
    return obj;
  }
  function stringifyCookie(cookie, options) {
    const enc = options?.encode || encodeURIComponent;
    const cookieStrings = [];
    for (const name of Object.keys(cookie)) {
      const val = cookie[name];
      if (val === void 0)
        continue;
      if (!cookieNameRegExp.test(name)) {
        throw new TypeError(`cookie name is invalid: ${name}`);
      }
      const value = enc(val);
      if (!cookieValueRegExp.test(value)) {
        throw new TypeError(`cookie val is invalid: ${val}`);
      }
      cookieStrings.push(`${name}=${value}`);
    }
    return cookieStrings.join("; ");
  }
  function stringifySetCookie(_name, _val, _opts) {
    const cookie = typeof _name === "object" ? _name : { ..._opts, name: _name, value: String(_val) };
    const options = typeof _val === "object" ? _val : _opts;
    const enc = options?.encode || encodeURIComponent;
    if (!cookieNameRegExp.test(cookie.name)) {
      throw new TypeError(`argument name is invalid: ${cookie.name}`);
    }
    const value = cookie.value ? enc(cookie.value) : "";
    if (!cookieValueRegExp.test(value)) {
      throw new TypeError(`argument val is invalid: ${cookie.value}`);
    }
    let str = cookie.name + "=" + value;
    if (cookie.maxAge !== void 0) {
      if (!Number.isInteger(cookie.maxAge)) {
        throw new TypeError(`option maxAge is invalid: ${cookie.maxAge}`);
      }
      str += "; Max-Age=" + cookie.maxAge;
    }
    if (cookie.domain) {
      if (!domainValueRegExp.test(cookie.domain)) {
        throw new TypeError(`option domain is invalid: ${cookie.domain}`);
      }
      str += "; Domain=" + cookie.domain;
    }
    if (cookie.path) {
      if (!pathValueRegExp.test(cookie.path)) {
        throw new TypeError(`option path is invalid: ${cookie.path}`);
      }
      str += "; Path=" + cookie.path;
    }
    if (cookie.expires) {
      if (!isDate(cookie.expires) || !Number.isFinite(cookie.expires.valueOf())) {
        throw new TypeError(`option expires is invalid: ${cookie.expires}`);
      }
      str += "; Expires=" + cookie.expires.toUTCString();
    }
    if (cookie.httpOnly) {
      str += "; HttpOnly";
    }
    if (cookie.secure) {
      str += "; Secure";
    }
    if (cookie.partitioned) {
      str += "; Partitioned";
    }
    if (cookie.priority) {
      const priority = typeof cookie.priority === "string" ? cookie.priority.toLowerCase() : void 0;
      switch (priority) {
        case "low":
          str += "; Priority=Low";
          break;
        case "medium":
          str += "; Priority=Medium";
          break;
        case "high":
          str += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${cookie.priority}`);
      }
    }
    if (cookie.sameSite) {
      const sameSite = typeof cookie.sameSite === "string" ? cookie.sameSite.toLowerCase() : cookie.sameSite;
      switch (sameSite) {
        case true:
        case "strict":
          str += "; SameSite=Strict";
          break;
        case "lax":
          str += "; SameSite=Lax";
          break;
        case "none":
          str += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${cookie.sameSite}`);
      }
    }
    return str;
  }
  function parseSetCookie(str, options) {
    const dec = options?.decode || decode2;
    const len = str.length;
    const endIdx = endIndex(str, 0, len);
    const eqIdx = eqIndex(str, 0, endIdx);
    const setCookie = eqIdx === -1 ? { name: "", value: dec(valueSlice(str, 0, endIdx)) } : {
      name: valueSlice(str, 0, eqIdx),
      value: dec(valueSlice(str, eqIdx + 1, endIdx))
    };
    let index = endIdx + 1;
    while (index < len) {
      const endIdx2 = endIndex(str, index, len);
      const eqIdx2 = eqIndex(str, index, endIdx2);
      const attr = eqIdx2 === -1 ? valueSlice(str, index, endIdx2) : valueSlice(str, index, eqIdx2);
      const val = eqIdx2 === -1 ? void 0 : valueSlice(str, eqIdx2 + 1, endIdx2);
      switch (attr.toLowerCase()) {
        case "httponly":
          setCookie.httpOnly = true;
          break;
        case "secure":
          setCookie.secure = true;
          break;
        case "partitioned":
          setCookie.partitioned = true;
          break;
        case "domain":
          setCookie.domain = val;
          break;
        case "path":
          setCookie.path = val;
          break;
        case "max-age":
          if (val && maxAgeRegExp.test(val))
            setCookie.maxAge = Number(val);
          break;
        case "expires":
          if (!val)
            break;
          const date = new Date(val);
          if (Number.isFinite(date.valueOf()))
            setCookie.expires = date;
          break;
        case "priority":
          if (!val)
            break;
          const priority = val.toLowerCase();
          if (priority === "low" || priority === "medium" || priority === "high") {
            setCookie.priority = priority;
          }
          break;
        case "samesite":
          if (!val)
            break;
          const sameSite = val.toLowerCase();
          if (sameSite === "lax" || sameSite === "strict" || sameSite === "none") {
            setCookie.sameSite = sameSite;
          }
          break;
      }
      index = endIdx2 + 1;
    }
    return setCookie;
  }
  function endIndex(str, min, len) {
    const index = str.indexOf(";", min);
    return index === -1 ? len : index;
  }
  function eqIndex(str, min, max) {
    const index = str.indexOf("=", min);
    return index < max ? index : -1;
  }
  function valueSlice(str, min, max) {
    let start = min;
    let end = max;
    do {
      const code = str.charCodeAt(start);
      if (code !== 32 && code !== 9)
        break;
    } while (++start < end);
    while (end > start) {
      const code = str.charCodeAt(end - 1);
      if (code !== 32 && code !== 9)
        break;
      end--;
    }
    return str.slice(start, end);
  }
  function decode2(str) {
    if (str.indexOf("%") === -1)
      return str;
    try {
      return decodeURIComponent(str);
    } catch (e2) {
      return str;
    }
  }
  function isDate(val) {
    return __toString.call(val) === "[object Date]";
  }
  return dist;
}
var distExports = /* @__PURE__ */ requireDist();
const DELETED_EXPIRATION = /* @__PURE__ */ new Date(0);
const DELETED_VALUE = "deleted";
const responseSentSymbol = /* @__PURE__ */ Symbol.for("astro.responseSent");
const identity = (value) => value;
class AstroCookie {
  constructor(value) {
    this.value = value;
  }
  json() {
    if (this.value === void 0) {
      throw new Error(`Cannot convert undefined to an object.`);
    }
    return JSON.parse(this.value);
  }
  number() {
    return Number(this.value);
  }
  boolean() {
    if (this.value === "false") return false;
    if (this.value === "0") return false;
    return Boolean(this.value);
  }
}
class AstroCookies {
  #request;
  #requestValues;
  #outgoing;
  #consumed;
  constructor(request) {
    this.#request = request;
    this.#requestValues = null;
    this.#outgoing = null;
    this.#consumed = false;
  }
  /**
   * Astro.cookies.delete(key) is used to delete a cookie. Using this method will result
   * in a Set-Cookie header added to the response.
   * @param key The cookie to delete
   * @param options Options related to this deletion, such as the path of the cookie.
   */
  delete(key, options) {
    const {
      // @ts-expect-error
      maxAge: _ignoredMaxAge,
      // @ts-expect-error
      expires: _ignoredExpires,
      ...sanitizedOptions
    } = options || {};
    const serializeOptions = {
      expires: DELETED_EXPIRATION,
      ...sanitizedOptions
    };
    this.#ensureOutgoingMap().set(key, [
      DELETED_VALUE,
      distExports.serialize(key, DELETED_VALUE, serializeOptions),
      false
    ]);
  }
  /**
   * Astro.cookies.get(key) is used to get a cookie value. The cookie value is read from the
   * request. If you have set a cookie via Astro.cookies.set(key, value), the value will be taken
   * from that set call, overriding any values already part of the request.
   * @param key The cookie to get.
   * @returns An object containing the cookie value as well as convenience methods for converting its value.
   */
  get(key, options = void 0) {
    if (this.#outgoing?.has(key)) {
      let [serializedValue, , isSetValue] = this.#outgoing.get(key);
      if (isSetValue) {
        return new AstroCookie(serializedValue);
      } else {
        return void 0;
      }
    }
    const decode2 = options?.decode ?? decodeURIComponent;
    const values = this.#ensureParsed();
    if (key in values) {
      const value = values[key];
      if (value) {
        let decodedValue;
        try {
          decodedValue = decode2(value);
        } catch (_error) {
          decodedValue = value;
        }
        return new AstroCookie(decodedValue);
      }
    }
  }
  /**
   * Astro.cookies.has(key) returns a boolean indicating whether this cookie is either
   * part of the initial request or set via Astro.cookies.set(key)
   * @param key The cookie to check for.
   * @param _options This parameter is no longer used.
   * @returns
   */
  has(key, _options) {
    if (this.#outgoing?.has(key)) {
      let [, , isSetValue] = this.#outgoing.get(key);
      return isSetValue;
    }
    const values = this.#ensureParsed();
    return values[key] !== void 0;
  }
  /**
   * Astro.cookies.set(key, value) is used to set a cookie's value. If provided
   * an object it will be stringified via JSON.stringify(value). Additionally you
   * can provide options customizing how this cookie will be set, such as setting httpOnly
   * in order to prevent the cookie from being read in client-side JavaScript.
   * @param key The name of the cookie to set.
   * @param value A value, either a string or other primitive or an object.
   * @param options Options for the cookie, such as the path and security settings.
   */
  set(key, value, options) {
    if (this.#consumed) {
      const warning = new Error(
        "Astro.cookies.set() was called after the cookies had already been sent to the browser.\nThis may have happened if this method was called in an imported component.\nPlease make sure that Astro.cookies.set() is only called in the frontmatter of the main page."
      );
      warning.name = "Warning";
      console.warn(warning);
    }
    let serializedValue;
    if (typeof value === "string") {
      serializedValue = value;
    } else {
      let toStringValue = value.toString();
      if (toStringValue === Object.prototype.toString.call(value)) {
        serializedValue = JSON.stringify(value);
      } else {
        serializedValue = toStringValue;
      }
    }
    const serializeOptions = {};
    if (options) {
      Object.assign(serializeOptions, options);
    }
    this.#ensureOutgoingMap().set(key, [
      serializedValue,
      distExports.serialize(key, serializedValue, serializeOptions),
      true
    ]);
    if (this.#request[responseSentSymbol]) {
      throw new AstroError({
        ...ResponseSentError
      });
    }
  }
  /**
   * Merges a new AstroCookies instance into the current instance. Any new cookies
   * will be added to the current instance, overwriting any existing cookies with the same name.
   */
  merge(cookies) {
    const outgoing = cookies.#outgoing;
    if (outgoing) {
      for (const [key, value] of outgoing) {
        this.#ensureOutgoingMap().set(key, value);
      }
    }
  }
  /**
   * Astro.cookies.header() returns an iterator for the cookies that have previously
   * been set by either Astro.cookies.set() or Astro.cookies.delete().
   * This method is primarily used by adapters to set the header on outgoing responses.
   * @returns
   */
  *headers() {
    if (this.#outgoing == null) return;
    for (const [, value] of this.#outgoing) {
      yield value[1];
    }
  }
  /**
   * Behaves the same as AstroCookies.prototype.headers(),
   * but allows a warning when cookies are set after the instance is consumed.
   */
  static consume(cookies) {
    cookies.#consumed = true;
    return cookies.headers();
  }
  #ensureParsed() {
    if (!this.#requestValues) {
      this.#parse();
    }
    if (!this.#requestValues) {
      this.#requestValues = /* @__PURE__ */ Object.create(null);
    }
    return this.#requestValues;
  }
  #ensureOutgoingMap() {
    if (!this.#outgoing) {
      this.#outgoing = /* @__PURE__ */ new Map();
    }
    return this.#outgoing;
  }
  #parse() {
    const raw = this.#request.headers.get("cookie");
    if (!raw) {
      return;
    }
    this.#requestValues = distExports.parse(raw, { decode: identity });
  }
}
const astroCookiesSymbol = /* @__PURE__ */ Symbol.for("astro.cookies");
function attachCookiesToResponse(response, cookies) {
  Reflect.set(response, astroCookiesSymbol, cookies);
}
function getCookiesFromResponse(response) {
  let cookies = Reflect.get(response, astroCookiesSymbol);
  if (cookies != null) {
    return cookies;
  } else {
    return void 0;
  }
}
function* getSetCookiesFromResponse(response) {
  const cookies = getCookiesFromResponse(response);
  if (!cookies) {
    return [];
  }
  for (const headerValue of AstroCookies.consume(cookies)) {
    yield headerValue;
  }
  return [];
}
let e = globalThis.process || {}, t = e.argv || [], n = e.env || {}, r$1 = !(n.NO_COLOR || t.includes(`--no-color`)) && (!!n.FORCE_COLOR || t.includes(`--color`) || e.platform === `win32` || (e.stdout || {}).isTTY && n.TERM !== `dumb` || !!n.CI), i = (e2, t2, n2 = e2) => (r2) => {
  let i2 = `` + r2, o2 = i2.indexOf(t2, e2.length);
  return ~o2 ? e2 + a(i2, t2, n2, o2) + t2 : e2 + i2 + t2;
}, a = (e2, t2, n2, r2) => {
  let i2 = ``, a2 = 0;
  do
    i2 += e2.substring(a2, r2) + n2, a2 = r2 + t2.length, r2 = e2.indexOf(t2, a2);
  while (~r2);
  return i2 + e2.substring(a2);
}, o = (e2 = r$1) => {
  let t2 = e2 ? i : () => String;
  return { isColorSupported: e2, reset: t2(`\x1B[0m`, `\x1B[0m`), bold: t2(`\x1B[1m`, `\x1B[22m`, `\x1B[22m\x1B[1m`), dim: t2(`\x1B[2m`, `\x1B[22m`, `\x1B[22m\x1B[2m`), italic: t2(`\x1B[3m`, `\x1B[23m`), underline: t2(`\x1B[4m`, `\x1B[24m`), inverse: t2(`\x1B[7m`, `\x1B[27m`), hidden: t2(`\x1B[8m`, `\x1B[28m`), strikethrough: t2(`\x1B[9m`, `\x1B[29m`), black: t2(`\x1B[30m`, `\x1B[39m`), red: t2(`\x1B[31m`, `\x1B[39m`), green: t2(`\x1B[32m`, `\x1B[39m`), yellow: t2(`\x1B[33m`, `\x1B[39m`), blue: t2(`\x1B[34m`, `\x1B[39m`), magenta: t2(`\x1B[35m`, `\x1B[39m`), cyan: t2(`\x1B[36m`, `\x1B[39m`), white: t2(`\x1B[37m`, `\x1B[39m`), gray: t2(`\x1B[90m`, `\x1B[39m`), bgBlack: t2(`\x1B[40m`, `\x1B[49m`), bgRed: t2(`\x1B[41m`, `\x1B[49m`), bgGreen: t2(`\x1B[42m`, `\x1B[49m`), bgYellow: t2(`\x1B[43m`, `\x1B[49m`), bgBlue: t2(`\x1B[44m`, `\x1B[49m`), bgMagenta: t2(`\x1B[45m`, `\x1B[49m`), bgCyan: t2(`\x1B[46m`, `\x1B[49m`), bgWhite: t2(`\x1B[47m`, `\x1B[49m`), blackBright: t2(`\x1B[90m`, `\x1B[39m`), redBright: t2(`\x1B[91m`, `\x1B[39m`), greenBright: t2(`\x1B[92m`, `\x1B[39m`), yellowBright: t2(`\x1B[93m`, `\x1B[39m`), blueBright: t2(`\x1B[94m`, `\x1B[39m`), magentaBright: t2(`\x1B[95m`, `\x1B[39m`), cyanBright: t2(`\x1B[96m`, `\x1B[39m`), whiteBright: t2(`\x1B[97m`, `\x1B[39m`), bgBlackBright: t2(`\x1B[100m`, `\x1B[49m`), bgRedBright: t2(`\x1B[101m`, `\x1B[49m`), bgGreenBright: t2(`\x1B[102m`, `\x1B[49m`), bgYellowBright: t2(`\x1B[103m`, `\x1B[49m`), bgBlueBright: t2(`\x1B[104m`, `\x1B[49m`), bgMagentaBright: t2(`\x1B[105m`, `\x1B[49m`), bgCyanBright: t2(`\x1B[106m`, `\x1B[49m`), bgWhiteBright: t2(`\x1B[107m`, `\x1B[49m`) };
};
var s = o();
const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(s.bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return s.red(prefix.join(" "));
  }
  if (level === "warn") {
    return s.yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return s.dim(prefix[0]);
  }
  return s.dim(prefix[0]) + " " + s.blue(prefix.splice(1).join(" "));
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}
const consoleLogDestination = {
  write(event) {
    let dest = console.error;
    if (levels[event.level] < levels["error"]) {
      dest = console.info;
    }
    if (event.label === "SKIP_FORMAT") {
      dest(event.message);
    } else {
      dest(getEventPrefix(event) + " " + event.message);
    }
    return true;
  }
};
class DevalueError extends Error {
  /**
   * @param {string} message
   * @param {string[]} keys
   * @param {any} [value] - The value that failed to be serialized
   * @param {any} [root] - The root value being serialized
   */
  constructor(message, keys, value, root) {
    super(message);
    this.name = "DevalueError";
    this.path = keys.join("");
    this.value = value;
    this.root = root;
  }
}
function is_primitive(thing) {
  return Object(thing) !== thing;
}
const object_proto_names = /* @__PURE__ */ Object.getOwnPropertyNames(
  Object.prototype
).sort().join("\0");
function is_plain_object(thing) {
  const proto = Object.getPrototypeOf(thing);
  return proto === Object.prototype || proto === null || Object.getPrototypeOf(proto) === null || Object.getOwnPropertyNames(proto).sort().join("\0") === object_proto_names;
}
function get_type(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function get_escaped_char(char) {
  switch (char) {
    case '"':
      return '\\"';
    case "<":
      return "\\u003C";
    case "\\":
      return "\\\\";
    case "\n":
      return "\\n";
    case "\r":
      return "\\r";
    case "	":
      return "\\t";
    case "\b":
      return "\\b";
    case "\f":
      return "\\f";
    case "\u2028":
      return "\\u2028";
    case "\u2029":
      return "\\u2029";
    default:
      return char < " " ? `\\u${char.charCodeAt(0).toString(16).padStart(4, "0")}` : "";
  }
}
function stringify_string(str) {
  let result = "";
  let last_pos = 0;
  const len = str.length;
  for (let i2 = 0; i2 < len; i2 += 1) {
    const char = str[i2];
    const replacement = get_escaped_char(char);
    if (replacement) {
      result += str.slice(last_pos, i2) + replacement;
      last_pos = i2 + 1;
    }
  }
  return `"${last_pos === 0 ? str : result + str.slice(last_pos)}"`;
}
function enumerable_symbols(object) {
  return Object.getOwnPropertySymbols(object).filter(
    (symbol) => Object.getOwnPropertyDescriptor(object, symbol).enumerable
  );
}
const is_identifier = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
function stringify_key(key) {
  return is_identifier.test(key) ? "." + key : "[" + JSON.stringify(key) + "]";
}
function is_valid_array_index(s2) {
  if (s2.length === 0) return false;
  if (s2.length > 1 && s2.charCodeAt(0) === 48) return false;
  for (let i2 = 0; i2 < s2.length; i2++) {
    const c = s2.charCodeAt(i2);
    if (c < 48 || c > 57) return false;
  }
  const n2 = +s2;
  if (n2 >= 2 ** 32 - 1) return false;
  if (n2 < 0) return false;
  return true;
}
function valid_array_indices(array2) {
  const keys = Object.keys(array2);
  for (var i2 = keys.length - 1; i2 >= 0; i2--) {
    if (is_valid_array_index(keys[i2])) {
      break;
    }
  }
  keys.length = i2 + 1;
  return keys;
}
function encode64(arraybuffer) {
  const dv = new DataView(arraybuffer);
  let binaryString = "";
  for (let i2 = 0; i2 < arraybuffer.byteLength; i2++) {
    binaryString += String.fromCharCode(dv.getUint8(i2));
  }
  return binaryToAscii(binaryString);
}
function decode64(string) {
  const binaryString = asciiToBinary(string);
  const arraybuffer = new ArrayBuffer(binaryString.length);
  const dv = new DataView(arraybuffer);
  for (let i2 = 0; i2 < arraybuffer.byteLength; i2++) {
    dv.setUint8(i2, binaryString.charCodeAt(i2));
  }
  return arraybuffer;
}
const KEY_STRING = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function asciiToBinary(data) {
  if (data.length % 4 === 0) {
    data = data.replace(/==?$/, "");
  }
  let output = "";
  let buffer = 0;
  let accumulatedBits = 0;
  for (let i2 = 0; i2 < data.length; i2++) {
    buffer <<= 6;
    buffer |= KEY_STRING.indexOf(data[i2]);
    accumulatedBits += 6;
    if (accumulatedBits === 24) {
      output += String.fromCharCode((buffer & 16711680) >> 16);
      output += String.fromCharCode((buffer & 65280) >> 8);
      output += String.fromCharCode(buffer & 255);
      buffer = accumulatedBits = 0;
    }
  }
  if (accumulatedBits === 12) {
    buffer >>= 4;
    output += String.fromCharCode(buffer);
  } else if (accumulatedBits === 18) {
    buffer >>= 2;
    output += String.fromCharCode((buffer & 65280) >> 8);
    output += String.fromCharCode(buffer & 255);
  }
  return output;
}
function binaryToAscii(str) {
  let out = "";
  for (let i2 = 0; i2 < str.length; i2 += 3) {
    const groupsOfSix = [void 0, void 0, void 0, void 0];
    groupsOfSix[0] = str.charCodeAt(i2) >> 2;
    groupsOfSix[1] = (str.charCodeAt(i2) & 3) << 4;
    if (str.length > i2 + 1) {
      groupsOfSix[1] |= str.charCodeAt(i2 + 1) >> 4;
      groupsOfSix[2] = (str.charCodeAt(i2 + 1) & 15) << 2;
    }
    if (str.length > i2 + 2) {
      groupsOfSix[2] |= str.charCodeAt(i2 + 2) >> 6;
      groupsOfSix[3] = str.charCodeAt(i2 + 2) & 63;
    }
    for (let j = 0; j < groupsOfSix.length; j++) {
      if (typeof groupsOfSix[j] === "undefined") {
        out += "=";
      } else {
        out += KEY_STRING[groupsOfSix[j]];
      }
    }
  }
  return out;
}
const UNDEFINED = -1;
const HOLE = -2;
const NAN = -3;
const POSITIVE_INFINITY = -4;
const NEGATIVE_INFINITY = -5;
const NEGATIVE_ZERO = -6;
const SPARSE = -7;
function parse$1(serialized, revivers) {
  return unflatten$1(JSON.parse(serialized), revivers);
}
function unflatten$1(parsed, revivers) {
  if (typeof parsed === "number") return hydrate(parsed, true);
  if (!Array.isArray(parsed) || parsed.length === 0) {
    throw new Error("Invalid input");
  }
  const values = (
    /** @type {any[]} */
    parsed
  );
  const hydrated = Array(values.length);
  let hydrating = null;
  function hydrate(index, standalone = false) {
    if (index === UNDEFINED) return void 0;
    if (index === NAN) return NaN;
    if (index === POSITIVE_INFINITY) return Infinity;
    if (index === NEGATIVE_INFINITY) return -Infinity;
    if (index === NEGATIVE_ZERO) return -0;
    if (standalone || typeof index !== "number") {
      throw new Error(`Invalid input`);
    }
    if (index in hydrated) return hydrated[index];
    const value = values[index];
    if (!value || typeof value !== "object") {
      hydrated[index] = value;
    } else if (Array.isArray(value)) {
      if (typeof value[0] === "string") {
        const type = value[0];
        const reviver = revivers && Object.hasOwn(revivers, type) ? revivers[type] : void 0;
        if (reviver) {
          let i2 = value[1];
          if (typeof i2 !== "number") {
            i2 = values.push(value[1]) - 1;
          }
          hydrating ??= /* @__PURE__ */ new Set();
          if (hydrating.has(i2)) {
            throw new Error("Invalid circular reference");
          }
          hydrating.add(i2);
          hydrated[index] = reviver(hydrate(i2));
          hydrating.delete(i2);
          return hydrated[index];
        }
        switch (type) {
          case "Date":
            hydrated[index] = new Date(value[1]);
            break;
          case "Set":
            const set = /* @__PURE__ */ new Set();
            hydrated[index] = set;
            for (let i2 = 1; i2 < value.length; i2 += 1) {
              set.add(hydrate(value[i2]));
            }
            break;
          case "Map":
            const map = /* @__PURE__ */ new Map();
            hydrated[index] = map;
            for (let i2 = 1; i2 < value.length; i2 += 2) {
              map.set(hydrate(value[i2]), hydrate(value[i2 + 1]));
            }
            break;
          case "RegExp":
            hydrated[index] = new RegExp(value[1], value[2]);
            break;
          case "Object":
            hydrated[index] = Object(value[1]);
            break;
          case "BigInt":
            hydrated[index] = BigInt(value[1]);
            break;
          case "null":
            const obj = /* @__PURE__ */ Object.create(null);
            hydrated[index] = obj;
            for (let i2 = 1; i2 < value.length; i2 += 2) {
              obj[value[i2]] = hydrate(value[i2 + 1]);
            }
            break;
          case "Int8Array":
          case "Uint8Array":
          case "Uint8ClampedArray":
          case "Int16Array":
          case "Uint16Array":
          case "Int32Array":
          case "Uint32Array":
          case "Float32Array":
          case "Float64Array":
          case "BigInt64Array":
          case "BigUint64Array": {
            if (values[value[1]][0] !== "ArrayBuffer") {
              throw new Error("Invalid data");
            }
            const TypedArrayConstructor = globalThis[type];
            const buffer = hydrate(value[1]);
            const typedArray = new TypedArrayConstructor(buffer);
            hydrated[index] = value[2] !== void 0 ? typedArray.subarray(value[2], value[3]) : typedArray;
            break;
          }
          case "ArrayBuffer": {
            const base64 = value[1];
            if (typeof base64 !== "string") {
              throw new Error("Invalid ArrayBuffer encoding");
            }
            const arraybuffer = decode64(base64);
            hydrated[index] = arraybuffer;
            break;
          }
          case "Temporal.Duration":
          case "Temporal.Instant":
          case "Temporal.PlainDate":
          case "Temporal.PlainTime":
          case "Temporal.PlainDateTime":
          case "Temporal.PlainMonthDay":
          case "Temporal.PlainYearMonth":
          case "Temporal.ZonedDateTime": {
            const temporalName = type.slice(9);
            hydrated[index] = Temporal[temporalName].from(value[1]);
            break;
          }
          case "URL": {
            const url = new URL(value[1]);
            hydrated[index] = url;
            break;
          }
          case "URLSearchParams": {
            const url = new URLSearchParams(value[1]);
            hydrated[index] = url;
            break;
          }
          default:
            throw new Error(`Unknown type ${type}`);
        }
      } else if (value[0] === SPARSE) {
        const len = value[1];
        const array2 = new Array(len);
        hydrated[index] = array2;
        for (let i2 = 2; i2 < value.length; i2 += 2) {
          const idx = value[i2];
          array2[idx] = hydrate(value[i2 + 1]);
        }
      } else {
        const array2 = new Array(value.length);
        hydrated[index] = array2;
        for (let i2 = 0; i2 < value.length; i2 += 1) {
          const n2 = value[i2];
          if (n2 === HOLE) continue;
          array2[i2] = hydrate(n2);
        }
      }
    } else {
      const object = {};
      hydrated[index] = object;
      for (const key of Object.keys(value)) {
        if (key === "__proto__") {
          throw new Error("Cannot parse an object with a `__proto__` property");
        }
        const n2 = value[key];
        object[key] = hydrate(n2);
      }
    }
    return hydrated[index];
  }
  return hydrate(0);
}
function stringify$2(value, reducers) {
  const stringified = [];
  const indexes = /* @__PURE__ */ new Map();
  const custom = [];
  if (reducers) {
    for (const key of Object.getOwnPropertyNames(reducers)) {
      custom.push({ key, fn: reducers[key] });
    }
  }
  const keys = [];
  let p = 0;
  function flatten(thing) {
    if (thing === void 0) return UNDEFINED;
    if (Number.isNaN(thing)) return NAN;
    if (thing === Infinity) return POSITIVE_INFINITY;
    if (thing === -Infinity) return NEGATIVE_INFINITY;
    if (thing === 0 && 1 / thing < 0) return NEGATIVE_ZERO;
    if (indexes.has(thing)) return indexes.get(thing);
    const index2 = p++;
    indexes.set(thing, index2);
    for (const { key, fn } of custom) {
      const value2 = fn(thing);
      if (value2) {
        stringified[index2] = `["${key}",${flatten(value2)}]`;
        return index2;
      }
    }
    if (typeof thing === "function") {
      throw new DevalueError(`Cannot stringify a function`, keys, thing, value);
    }
    let str = "";
    if (is_primitive(thing)) {
      str = stringify_primitive(thing);
    } else {
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          str = `["Object",${stringify_primitive(thing)}]`;
          break;
        case "BigInt":
          str = `["BigInt",${thing}]`;
          break;
        case "Date":
          const valid = !isNaN(thing.getDate());
          str = `["Date","${valid ? thing.toISOString() : ""}"]`;
          break;
        case "URL":
          str = `["URL",${stringify_string(thing.toString())}]`;
          break;
        case "URLSearchParams":
          str = `["URLSearchParams",${stringify_string(thing.toString())}]`;
          break;
        case "RegExp":
          const { source, flags } = thing;
          str = flags ? `["RegExp",${stringify_string(source)},"${flags}"]` : `["RegExp",${stringify_string(source)}]`;
          break;
        case "Array": {
          let mostly_dense = false;
          str = "[";
          for (let i2 = 0; i2 < thing.length; i2 += 1) {
            if (i2 > 0) str += ",";
            if (Object.hasOwn(thing, i2)) {
              keys.push(`[${i2}]`);
              str += flatten(thing[i2]);
              keys.pop();
            } else if (mostly_dense) {
              str += HOLE;
            } else {
              const populated_keys = valid_array_indices(
                /** @type {any[]} */
                thing
              );
              const population = populated_keys.length;
              const d = String(thing.length).length;
              const hole_cost = (thing.length - population) * 3;
              const sparse_cost = 4 + d + population * (d + 1);
              if (hole_cost > sparse_cost) {
                str = "[" + SPARSE + "," + thing.length;
                for (let j = 0; j < populated_keys.length; j++) {
                  const key = populated_keys[j];
                  keys.push(`[${key}]`);
                  str += "," + key + "," + flatten(thing[key]);
                  keys.pop();
                }
                break;
              } else {
                mostly_dense = true;
                str += HOLE;
              }
            }
          }
          str += "]";
          break;
        }
        case "Set":
          str = '["Set"';
          for (const value2 of thing) {
            str += `,${flatten(value2)}`;
          }
          str += "]";
          break;
        case "Map":
          str = '["Map"';
          for (const [key, value2] of thing) {
            keys.push(
              `.get(${is_primitive(key) ? stringify_primitive(key) : "..."})`
            );
            str += `,${flatten(key)},${flatten(value2)}`;
            keys.pop();
          }
          str += "]";
          break;
        case "Int8Array":
        case "Uint8Array":
        case "Uint8ClampedArray":
        case "Int16Array":
        case "Uint16Array":
        case "Int32Array":
        case "Uint32Array":
        case "Float32Array":
        case "Float64Array":
        case "BigInt64Array":
        case "BigUint64Array": {
          const typedArray = thing;
          str = '["' + type + '",' + flatten(typedArray.buffer);
          const a2 = thing.byteOffset;
          const b = a2 + thing.byteLength;
          if (a2 > 0 || b !== typedArray.buffer.byteLength) {
            const m = +/(\d+)/.exec(type)[1] / 8;
            str += `,${a2 / m},${b / m}`;
          }
          str += "]";
          break;
        }
        case "ArrayBuffer": {
          const arraybuffer = thing;
          const base64 = encode64(arraybuffer);
          str = `["ArrayBuffer","${base64}"]`;
          break;
        }
        case "Temporal.Duration":
        case "Temporal.Instant":
        case "Temporal.PlainDate":
        case "Temporal.PlainTime":
        case "Temporal.PlainDateTime":
        case "Temporal.PlainMonthDay":
        case "Temporal.PlainYearMonth":
        case "Temporal.ZonedDateTime":
          str = `["${type}",${stringify_string(thing.toString())}]`;
          break;
        default:
          if (!is_plain_object(thing)) {
            throw new DevalueError(
              `Cannot stringify arbitrary non-POJOs`,
              keys,
              thing,
              value
            );
          }
          if (enumerable_symbols(thing).length > 0) {
            throw new DevalueError(
              `Cannot stringify POJOs with symbolic keys`,
              keys,
              thing,
              value
            );
          }
          if (Object.getPrototypeOf(thing) === null) {
            str = '["null"';
            for (const key of Object.keys(thing)) {
              if (key === "__proto__") {
                throw new DevalueError(
                  `Cannot stringify objects with __proto__ keys`,
                  keys,
                  thing,
                  value
                );
              }
              keys.push(stringify_key(key));
              str += `,${stringify_string(key)},${flatten(thing[key])}`;
              keys.pop();
            }
            str += "]";
          } else {
            str = "{";
            let started = false;
            for (const key of Object.keys(thing)) {
              if (key === "__proto__") {
                throw new DevalueError(
                  `Cannot stringify objects with __proto__ keys`,
                  keys,
                  thing,
                  value
                );
              }
              if (started) str += ",";
              started = true;
              keys.push(stringify_key(key));
              str += `${stringify_string(key)}:${flatten(thing[key])}`;
              keys.pop();
            }
            str += "}";
          }
      }
    }
    stringified[index2] = str;
    return index2;
  }
  const index = flatten(value);
  if (index < 0) return `${index}`;
  return `[${stringified.join(",")}]`;
}
function stringify_primitive(thing) {
  const type = typeof thing;
  if (type === "string") return stringify_string(thing);
  if (thing instanceof String) return stringify_string(thing.toString());
  if (thing === void 0) return UNDEFINED.toString();
  if (thing === 0 && 1 / thing < 0) return NEGATIVE_ZERO.toString();
  if (type === "bigint") return `["BigInt","${thing}"]`;
  return String(thing);
}
const ACTION_QUERY_PARAMS = {
  actionName: "_action"
};
const ACTION_RPC_ROUTE_PATTERN = "/_actions/[...path]";
const __vite_import_meta_env__$1 = { "ASSETS_PREFIX": void 0, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": void 0, "SSR": true };
const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
const statusToCodeMap = Object.fromEntries(
  Object.entries(codeToStatusMap).map(([key, value]) => [value, key])
);
class ActionError extends Error {
  type = "AstroActionError";
  code = "INTERNAL_SERVER_ERROR";
  status = 500;
  constructor(params) {
    super(params.message);
    this.code = params.code;
    this.status = ActionError.codeToStatus(params.code);
    if (params.stack) {
      this.stack = params.stack;
    }
  }
  static codeToStatus(code) {
    return codeToStatusMap[code];
  }
  static statusToCode(status) {
    return statusToCodeMap[status] ?? "INTERNAL_SERVER_ERROR";
  }
  static fromJson(body) {
    if (isInputError(body)) {
      return new ActionInputError(body.issues);
    }
    if (isActionError(body)) {
      return new ActionError(body);
    }
    return new ActionError({
      code: "INTERNAL_SERVER_ERROR"
    });
  }
}
function isActionError(error2) {
  return typeof error2 === "object" && error2 != null && "type" in error2 && error2.type === "AstroActionError";
}
function isInputError(error2) {
  return typeof error2 === "object" && error2 != null && "type" in error2 && error2.type === "AstroActionInputError" && "issues" in error2 && Array.isArray(error2.issues);
}
class ActionInputError extends ActionError {
  type = "AstroActionInputError";
  // We don't expose all ZodError properties.
  // Not all properties will serialize from server to client,
  // and we don't want to import the full ZodError object into the client.
  issues;
  fields;
  constructor(issues) {
    super({
      message: `Failed to validate: ${JSON.stringify(issues, null, 2)}`,
      code: "BAD_REQUEST"
    });
    this.issues = issues;
    this.fields = {};
    for (const issue2 of issues) {
      if (issue2.path.length > 0) {
        const key = issue2.path[0].toString();
        this.fields[key] ??= [];
        this.fields[key]?.push(issue2.message);
      }
    }
  }
}
function deserializeActionResult(res) {
  if (res.type === "error") {
    let json;
    try {
      json = JSON.parse(res.body);
    } catch {
      return {
        data: void 0,
        error: new ActionError({
          message: res.body,
          code: "INTERNAL_SERVER_ERROR"
        })
      };
    }
    if (Object.assign(__vite_import_meta_env__$1, { OS: "Windows_NT", Path: "C:\\proyectos\\seo-tools\\node_modules\\.bin;C:\\proyectos\\node_modules\\.bin;C:\\node_modules\\.bin;C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\@npmcli\\run-script\\lib\\node-gyp-bin;C:\\Users\\gasto\\AppData\\Local\\Programs\\Microsoft VS Code;C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\java8path;C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\javapath;C:\\Python314\\Scripts\\;C:\\Python314\\;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\;C:\\WINDOWS\\System32\\OpenSSH\\;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\nodejs\\;C:\\Program Files\\Microsoft SQL Server\\Client SDK\\ODBC\\130\\Tools\\Binn\\;C:\\Program Files (x86)\\Microsoft SQL Server\\140\\Tools\\Binn\\;C:\\Program Files\\Microsoft SQL Server\\140\\Tools\\Binn\\;C:\\Program Files\\Microsoft SQL Server\\140\\DTS\\Binn\\;C:\\Program Files\\Git\\cmd;C:\\Users\\gasto\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\gasto\\AppData\\Roaming\\npm;C:\\Users\\gasto\\AppData\\Local\\Programs\\Microsoft VS Code\\bin" })?.PROD) {
      return { error: ActionError.fromJson(json), data: void 0 };
    } else {
      const error2 = ActionError.fromJson(json);
      error2.stack = actionResultErrorStack.get();
      return {
        error: error2,
        data: void 0
      };
    }
  }
  if (res.type === "empty") {
    return { data: void 0, error: void 0 };
  }
  return {
    data: parse$1(res.body, {
      URL: (href) => new URL(href)
    }),
    error: void 0
  };
}
const actionResultErrorStack = /* @__PURE__ */ (function actionResultErrorStackFn() {
  let errorStack;
  return {
    set(stack) {
      errorStack = stack;
    },
    get() {
      return errorStack;
    }
  };
})();
function getActionQueryString(name) {
  const searchParams = new URLSearchParams({ [ACTION_QUERY_PARAMS.actionName]: name });
  return `?${searchParams.toString()}`;
}
function $constructor(name, initializer2, params) {
  function init(inst, def) {
    if (!inst._zod) {
      Object.defineProperty(inst, "_zod", {
        value: {
          def,
          constr: _,
          traits: /* @__PURE__ */ new Set()
        },
        enumerable: false
      });
    }
    if (inst._zod.traits.has(name)) {
      return;
    }
    inst._zod.traits.add(name);
    initializer2(inst, def);
    const proto = _.prototype;
    const keys = Object.keys(proto);
    for (let i2 = 0; i2 < keys.length; i2++) {
      const k = keys[i2];
      if (!(k in inst)) {
        inst[k] = proto[k].bind(inst);
      }
    }
  }
  const Parent = params?.Parent ?? Object;
  class Definition extends Parent {
  }
  Object.defineProperty(Definition, "name", { value: name });
  function _(def) {
    var _a2;
    const inst = params?.Parent ? new Definition() : this;
    init(inst, def);
    (_a2 = inst._zod).deferred ?? (_a2.deferred = []);
    for (const fn of inst._zod.deferred) {
      fn();
    }
    return inst;
  }
  Object.defineProperty(_, "init", { value: init });
  Object.defineProperty(_, Symbol.hasInstance, {
    value: (inst) => {
      if (params?.Parent && inst instanceof params.Parent)
        return true;
      return inst?._zod?.traits?.has(name);
    }
  });
  Object.defineProperty(_, "name", { value: name });
  return _;
}
class $ZodAsyncError extends Error {
  constructor() {
    super(`Encountered Promise during synchronous parse. Use .parseAsync() instead.`);
  }
}
class $ZodEncodeError extends Error {
  constructor(name) {
    super(`Encountered unidirectional transform during encode: ${name}`);
    this.name = "ZodEncodeError";
  }
}
const globalConfig = {};
function config(newConfig) {
  return globalConfig;
}
function getEnumValues(entries) {
  const numericValues = Object.values(entries).filter((v) => typeof v === "number");
  const values = Object.entries(entries).filter(([k, _]) => numericValues.indexOf(+k) === -1).map(([_, v]) => v);
  return values;
}
function jsonStringifyReplacer(_, value) {
  if (typeof value === "bigint")
    return value.toString();
  return value;
}
function nullish(input) {
  return input === null || input === void 0;
}
function cleanRegex(source) {
  const start = source.startsWith("^") ? 1 : 0;
  const end = source.endsWith("$") ? source.length - 1 : source.length;
  return source.slice(start, end);
}
const EVALUATING = /* @__PURE__ */ Symbol("evaluating");
function defineLazy(object, key, getter) {
  let value = void 0;
  Object.defineProperty(object, key, {
    get() {
      if (value === EVALUATING) {
        return void 0;
      }
      if (value === void 0) {
        value = EVALUATING;
        value = getter();
      }
      return value;
    },
    set(v) {
      Object.defineProperty(object, key, {
        value: v
        // configurable: true,
      });
    },
    configurable: true
  });
}
function mergeDefs(...defs) {
  const mergedDescriptors = {};
  for (const def of defs) {
    const descriptors = Object.getOwnPropertyDescriptors(def);
    Object.assign(mergedDescriptors, descriptors);
  }
  return Object.defineProperties({}, mergedDescriptors);
}
const captureStackTrace = "captureStackTrace" in Error ? Error.captureStackTrace : (..._args) => {
};
function isObject(data) {
  return typeof data === "object" && data !== null && !Array.isArray(data);
}
function isPlainObject(o2) {
  if (isObject(o2) === false)
    return false;
  const ctor = o2.constructor;
  if (ctor === void 0)
    return true;
  if (typeof ctor !== "function")
    return true;
  const prot = ctor.prototype;
  if (isObject(prot) === false)
    return false;
  if (Object.prototype.hasOwnProperty.call(prot, "isPrototypeOf") === false) {
    return false;
  }
  return true;
}
function shallowClone(o2) {
  if (isPlainObject(o2))
    return { ...o2 };
  if (Array.isArray(o2))
    return [...o2];
  return o2;
}
const propertyKeyTypes = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function clone(inst, def, params) {
  const cl = new inst._zod.constr(def ?? inst._zod.def);
  if (!def || params?.parent)
    cl._zod.parent = inst;
  return cl;
}
function normalizeParams(_params) {
  const params = _params;
  if (!params)
    return {};
  if (typeof params === "string")
    return { error: () => params };
  if (params?.message !== void 0) {
    if (params?.error !== void 0)
      throw new Error("Cannot specify both `message` and `error` params");
    params.error = params.message;
  }
  delete params.message;
  if (typeof params.error === "string")
    return { ...params, error: () => params.error };
  return params;
}
function aborted(x, startIndex = 0) {
  if (x.aborted === true)
    return true;
  for (let i2 = startIndex; i2 < x.issues.length; i2++) {
    if (x.issues[i2]?.continue !== true) {
      return true;
    }
  }
  return false;
}
function prefixIssues(path, issues) {
  return issues.map((iss) => {
    var _a2;
    (_a2 = iss).path ?? (_a2.path = []);
    iss.path.unshift(path);
    return iss;
  });
}
function unwrapMessage(message) {
  return typeof message === "string" ? message : message?.message;
}
function finalizeIssue(iss, ctx, config2) {
  const full = { ...iss, path: iss.path ?? [] };
  if (!iss.message) {
    const message = unwrapMessage(iss.inst?._zod.def?.error?.(iss)) ?? unwrapMessage(ctx?.error?.(iss)) ?? unwrapMessage(config2.customError?.(iss)) ?? unwrapMessage(config2.localeError?.(iss)) ?? "Invalid input";
    full.message = message;
  }
  delete full.inst;
  delete full.continue;
  if (!ctx?.reportInput) {
    delete full.input;
  }
  return full;
}
function getLengthableOrigin(input) {
  if (Array.isArray(input))
    return "array";
  if (typeof input === "string")
    return "string";
  return "unknown";
}
function issue(...args) {
  const [iss, input, inst] = args;
  if (typeof iss === "string") {
    return {
      message: iss,
      code: "custom",
      input,
      inst
    };
  }
  return { ...iss };
}
const initializer$1 = (inst, def) => {
  inst.name = "$ZodError";
  Object.defineProperty(inst, "_zod", {
    value: inst._zod,
    enumerable: false
  });
  Object.defineProperty(inst, "issues", {
    value: def,
    enumerable: false
  });
  inst.message = JSON.stringify(def, jsonStringifyReplacer, 2);
  Object.defineProperty(inst, "toString", {
    value: () => inst.message,
    enumerable: false
  });
};
const $ZodError = $constructor("$ZodError", initializer$1);
const $ZodRealError = $constructor("$ZodError", initializer$1, { Parent: Error });
function flattenError(error2, mapper = (issue2) => issue2.message) {
  const fieldErrors = {};
  const formErrors = [];
  for (const sub of error2.issues) {
    if (sub.path.length > 0) {
      fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
      fieldErrors[sub.path[0]].push(mapper(sub));
    } else {
      formErrors.push(mapper(sub));
    }
  }
  return { formErrors, fieldErrors };
}
function formatError(error2, mapper = (issue2) => issue2.message) {
  const fieldErrors = { _errors: [] };
  const processError = (error3) => {
    for (const issue2 of error3.issues) {
      if (issue2.code === "invalid_union" && issue2.errors.length) {
        issue2.errors.map((issues) => processError({ issues }));
      } else if (issue2.code === "invalid_key") {
        processError({ issues: issue2.issues });
      } else if (issue2.code === "invalid_element") {
        processError({ issues: issue2.issues });
      } else if (issue2.path.length === 0) {
        fieldErrors._errors.push(mapper(issue2));
      } else {
        let curr = fieldErrors;
        let i2 = 0;
        while (i2 < issue2.path.length) {
          const el = issue2.path[i2];
          const terminal = i2 === issue2.path.length - 1;
          if (!terminal) {
            curr[el] = curr[el] || { _errors: [] };
          } else {
            curr[el] = curr[el] || { _errors: [] };
            curr[el]._errors.push(mapper(issue2));
          }
          curr = curr[el];
          i2++;
        }
      }
    }
  };
  processError(error2);
  return fieldErrors;
}
const _parse = (_Err) => (schema, value, _ctx, _params) => {
  const ctx = _ctx ? Object.assign(_ctx, { async: false }) : { async: false };
  const result = schema._zod.run({ value, issues: [] }, ctx);
  if (result instanceof Promise) {
    throw new $ZodAsyncError();
  }
  if (result.issues.length) {
    const e2 = new (_params?.Err ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
    captureStackTrace(e2, _params?.callee);
    throw e2;
  }
  return result.value;
};
const _parseAsync = (_Err) => async (schema, value, _ctx, params) => {
  const ctx = _ctx ? Object.assign(_ctx, { async: true }) : { async: true };
  let result = schema._zod.run({ value, issues: [] }, ctx);
  if (result instanceof Promise)
    result = await result;
  if (result.issues.length) {
    const e2 = new (params?.Err ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
    captureStackTrace(e2, params?.callee);
    throw e2;
  }
  return result.value;
};
const _safeParse = (_Err) => (schema, value, _ctx) => {
  const ctx = _ctx ? { ..._ctx, async: false } : { async: false };
  const result = schema._zod.run({ value, issues: [] }, ctx);
  if (result instanceof Promise) {
    throw new $ZodAsyncError();
  }
  return result.issues.length ? {
    success: false,
    error: new (_Err ?? $ZodError)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
  } : { success: true, data: result.value };
};
const safeParse$1 = /* @__PURE__ */ _safeParse($ZodRealError);
const _safeParseAsync = (_Err) => async (schema, value, _ctx) => {
  const ctx = _ctx ? Object.assign(_ctx, { async: true }) : { async: true };
  let result = schema._zod.run({ value, issues: [] }, ctx);
  if (result instanceof Promise)
    result = await result;
  return result.issues.length ? {
    success: false,
    error: new _Err(result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
  } : { success: true, data: result.value };
};
const safeParseAsync$1 = /* @__PURE__ */ _safeParseAsync($ZodRealError);
const _encode = (_Err) => (schema, value, _ctx) => {
  const ctx = _ctx ? Object.assign(_ctx, { direction: "backward" }) : { direction: "backward" };
  return _parse(_Err)(schema, value, ctx);
};
const _decode = (_Err) => (schema, value, _ctx) => {
  return _parse(_Err)(schema, value, _ctx);
};
const _encodeAsync = (_Err) => async (schema, value, _ctx) => {
  const ctx = _ctx ? Object.assign(_ctx, { direction: "backward" }) : { direction: "backward" };
  return _parseAsync(_Err)(schema, value, ctx);
};
const _decodeAsync = (_Err) => async (schema, value, _ctx) => {
  return _parseAsync(_Err)(schema, value, _ctx);
};
const _safeEncode = (_Err) => (schema, value, _ctx) => {
  const ctx = _ctx ? Object.assign(_ctx, { direction: "backward" }) : { direction: "backward" };
  return _safeParse(_Err)(schema, value, ctx);
};
const _safeDecode = (_Err) => (schema, value, _ctx) => {
  return _safeParse(_Err)(schema, value, _ctx);
};
const _safeEncodeAsync = (_Err) => async (schema, value, _ctx) => {
  const ctx = _ctx ? Object.assign(_ctx, { direction: "backward" }) : { direction: "backward" };
  return _safeParseAsync(_Err)(schema, value, ctx);
};
const _safeDecodeAsync = (_Err) => async (schema, value, _ctx) => {
  return _safeParseAsync(_Err)(schema, value, _ctx);
};
const $ZodCheck = /* @__PURE__ */ $constructor("$ZodCheck", (inst, def) => {
  var _a2;
  inst._zod ?? (inst._zod = {});
  inst._zod.def = def;
  (_a2 = inst._zod).onattach ?? (_a2.onattach = []);
});
const $ZodCheckMaxLength = /* @__PURE__ */ $constructor("$ZodCheckMaxLength", (inst, def) => {
  var _a2;
  $ZodCheck.init(inst, def);
  (_a2 = inst._zod.def).when ?? (_a2.when = (payload) => {
    const val = payload.value;
    return !nullish(val) && val.length !== void 0;
  });
  inst._zod.onattach.push((inst2) => {
    const curr = inst2._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    if (def.maximum < curr)
      inst2._zod.bag.maximum = def.maximum;
  });
  inst._zod.check = (payload) => {
    const input = payload.value;
    const length = input.length;
    if (length <= def.maximum)
      return;
    const origin = getLengthableOrigin(input);
    payload.issues.push({
      origin,
      code: "too_big",
      maximum: def.maximum,
      inclusive: true,
      input,
      inst,
      continue: !def.abort
    });
  };
});
const $ZodCheckMinLength = /* @__PURE__ */ $constructor("$ZodCheckMinLength", (inst, def) => {
  var _a2;
  $ZodCheck.init(inst, def);
  (_a2 = inst._zod.def).when ?? (_a2.when = (payload) => {
    const val = payload.value;
    return !nullish(val) && val.length !== void 0;
  });
  inst._zod.onattach.push((inst2) => {
    const curr = inst2._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    if (def.minimum > curr)
      inst2._zod.bag.minimum = def.minimum;
  });
  inst._zod.check = (payload) => {
    const input = payload.value;
    const length = input.length;
    if (length >= def.minimum)
      return;
    const origin = getLengthableOrigin(input);
    payload.issues.push({
      origin,
      code: "too_small",
      minimum: def.minimum,
      inclusive: true,
      input,
      inst,
      continue: !def.abort
    });
  };
});
const $ZodCheckLengthEquals = /* @__PURE__ */ $constructor("$ZodCheckLengthEquals", (inst, def) => {
  var _a2;
  $ZodCheck.init(inst, def);
  (_a2 = inst._zod.def).when ?? (_a2.when = (payload) => {
    const val = payload.value;
    return !nullish(val) && val.length !== void 0;
  });
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    bag.minimum = def.length;
    bag.maximum = def.length;
    bag.length = def.length;
  });
  inst._zod.check = (payload) => {
    const input = payload.value;
    const length = input.length;
    if (length === def.length)
      return;
    const origin = getLengthableOrigin(input);
    const tooBig = length > def.length;
    payload.issues.push({
      origin,
      ...tooBig ? { code: "too_big", maximum: def.length } : { code: "too_small", minimum: def.length },
      inclusive: true,
      exact: true,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
const $ZodCheckOverwrite = /* @__PURE__ */ $constructor("$ZodCheckOverwrite", (inst, def) => {
  $ZodCheck.init(inst, def);
  inst._zod.check = (payload) => {
    payload.value = def.tx(payload.value);
  };
});
const version = {
  major: 4,
  minor: 3,
  patch: 6
};
const $ZodType = /* @__PURE__ */ $constructor("$ZodType", (inst, def) => {
  var _a2;
  inst ?? (inst = {});
  inst._zod.def = def;
  inst._zod.bag = inst._zod.bag || {};
  inst._zod.version = version;
  const checks = [...inst._zod.def.checks ?? []];
  if (inst._zod.traits.has("$ZodCheck")) {
    checks.unshift(inst);
  }
  for (const ch of checks) {
    for (const fn of ch._zod.onattach) {
      fn(inst);
    }
  }
  if (checks.length === 0) {
    (_a2 = inst._zod).deferred ?? (_a2.deferred = []);
    inst._zod.deferred?.push(() => {
      inst._zod.run = inst._zod.parse;
    });
  } else {
    const runChecks = (payload, checks2, ctx) => {
      let isAborted = aborted(payload);
      let asyncResult;
      for (const ch of checks2) {
        if (ch._zod.def.when) {
          const shouldRun = ch._zod.def.when(payload);
          if (!shouldRun)
            continue;
        } else if (isAborted) {
          continue;
        }
        const currLen = payload.issues.length;
        const _ = ch._zod.check(payload);
        if (_ instanceof Promise && ctx?.async === false) {
          throw new $ZodAsyncError();
        }
        if (asyncResult || _ instanceof Promise) {
          asyncResult = (asyncResult ?? Promise.resolve()).then(async () => {
            await _;
            const nextLen = payload.issues.length;
            if (nextLen === currLen)
              return;
            if (!isAborted)
              isAborted = aborted(payload, currLen);
          });
        } else {
          const nextLen = payload.issues.length;
          if (nextLen === currLen)
            continue;
          if (!isAborted)
            isAborted = aborted(payload, currLen);
        }
      }
      if (asyncResult) {
        return asyncResult.then(() => {
          return payload;
        });
      }
      return payload;
    };
    const handleCanaryResult = (canary, payload, ctx) => {
      if (aborted(canary)) {
        canary.aborted = true;
        return canary;
      }
      const checkResult = runChecks(payload, checks, ctx);
      if (checkResult instanceof Promise) {
        if (ctx.async === false)
          throw new $ZodAsyncError();
        return checkResult.then((checkResult2) => inst._zod.parse(checkResult2, ctx));
      }
      return inst._zod.parse(checkResult, ctx);
    };
    inst._zod.run = (payload, ctx) => {
      if (ctx.skipChecks) {
        return inst._zod.parse(payload, ctx);
      }
      if (ctx.direction === "backward") {
        const canary = inst._zod.parse({ value: payload.value, issues: [] }, { ...ctx, skipChecks: true });
        if (canary instanceof Promise) {
          return canary.then((canary2) => {
            return handleCanaryResult(canary2, payload, ctx);
          });
        }
        return handleCanaryResult(canary, payload, ctx);
      }
      const result = inst._zod.parse(payload, ctx);
      if (result instanceof Promise) {
        if (ctx.async === false)
          throw new $ZodAsyncError();
        return result.then((result2) => runChecks(result2, checks, ctx));
      }
      return runChecks(result, checks, ctx);
    };
  }
  defineLazy(inst, "~standard", () => ({
    validate: (value) => {
      try {
        const r2 = safeParse$1(inst, value);
        return r2.success ? { value: r2.data } : { issues: r2.error?.issues };
      } catch (_) {
        return safeParseAsync$1(inst, value).then((r2) => r2.success ? { value: r2.data } : { issues: r2.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  }));
});
function handleArrayResult(result, final, index) {
  if (result.issues.length) {
    final.issues.push(...prefixIssues(index, result.issues));
  }
  final.value[index] = result.value;
}
const $ZodArray = /* @__PURE__ */ $constructor("$ZodArray", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, ctx) => {
    const input = payload.value;
    if (!Array.isArray(input)) {
      payload.issues.push({
        expected: "array",
        code: "invalid_type",
        input,
        inst
      });
      return payload;
    }
    payload.value = Array(input.length);
    const proms = [];
    for (let i2 = 0; i2 < input.length; i2++) {
      const item = input[i2];
      const result = def.element._zod.run({
        value: item,
        issues: []
      }, ctx);
      if (result instanceof Promise) {
        proms.push(result.then((result2) => handleArrayResult(result2, payload, i2)));
      } else {
        handleArrayResult(result, payload, i2);
      }
    }
    if (proms.length) {
      return Promise.all(proms).then(() => payload);
    }
    return payload;
  };
});
function handleUnionResults(results, final, inst, ctx) {
  for (const result of results) {
    if (result.issues.length === 0) {
      final.value = result.value;
      return final;
    }
  }
  const nonaborted = results.filter((r2) => !aborted(r2));
  if (nonaborted.length === 1) {
    final.value = nonaborted[0].value;
    return nonaborted[0];
  }
  final.issues.push({
    code: "invalid_union",
    input: final.value,
    inst,
    errors: results.map((result) => result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
  });
  return final;
}
const $ZodUnion = /* @__PURE__ */ $constructor("$ZodUnion", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazy(inst._zod, "optin", () => def.options.some((o2) => o2._zod.optin === "optional") ? "optional" : void 0);
  defineLazy(inst._zod, "optout", () => def.options.some((o2) => o2._zod.optout === "optional") ? "optional" : void 0);
  defineLazy(inst._zod, "values", () => {
    if (def.options.every((o2) => o2._zod.values)) {
      return new Set(def.options.flatMap((option) => Array.from(option._zod.values)));
    }
    return void 0;
  });
  defineLazy(inst._zod, "pattern", () => {
    if (def.options.every((o2) => o2._zod.pattern)) {
      const patterns = def.options.map((o2) => o2._zod.pattern);
      return new RegExp(`^(${patterns.map((p) => cleanRegex(p.source)).join("|")})$`);
    }
    return void 0;
  });
  const single = def.options.length === 1;
  const first = def.options[0]._zod.run;
  inst._zod.parse = (payload, ctx) => {
    if (single) {
      return first(payload, ctx);
    }
    let async = false;
    const results = [];
    for (const option of def.options) {
      const result = option._zod.run({
        value: payload.value,
        issues: []
      }, ctx);
      if (result instanceof Promise) {
        results.push(result);
        async = true;
      } else {
        if (result.issues.length === 0)
          return result;
        results.push(result);
      }
    }
    if (!async)
      return handleUnionResults(results, payload, inst, ctx);
    return Promise.all(results).then((results2) => {
      return handleUnionResults(results2, payload, inst, ctx);
    });
  };
});
const $ZodIntersection = /* @__PURE__ */ $constructor("$ZodIntersection", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, ctx) => {
    const input = payload.value;
    const left = def.left._zod.run({ value: input, issues: [] }, ctx);
    const right = def.right._zod.run({ value: input, issues: [] }, ctx);
    const async = left instanceof Promise || right instanceof Promise;
    if (async) {
      return Promise.all([left, right]).then(([left2, right2]) => {
        return handleIntersectionResults(payload, left2, right2);
      });
    }
    return handleIntersectionResults(payload, left, right);
  };
});
function mergeValues(a2, b) {
  if (a2 === b) {
    return { valid: true, data: a2 };
  }
  if (a2 instanceof Date && b instanceof Date && +a2 === +b) {
    return { valid: true, data: a2 };
  }
  if (isPlainObject(a2) && isPlainObject(b)) {
    const bKeys = Object.keys(b);
    const sharedKeys = Object.keys(a2).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a2, ...b };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a2[key], b[key]);
      if (!sharedValue.valid) {
        return {
          valid: false,
          mergeErrorPath: [key, ...sharedValue.mergeErrorPath]
        };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  }
  if (Array.isArray(a2) && Array.isArray(b)) {
    if (a2.length !== b.length) {
      return { valid: false, mergeErrorPath: [] };
    }
    const newArray = [];
    for (let index = 0; index < a2.length; index++) {
      const itemA = a2[index];
      const itemB = b[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return {
          valid: false,
          mergeErrorPath: [index, ...sharedValue.mergeErrorPath]
        };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  }
  return { valid: false, mergeErrorPath: [] };
}
function handleIntersectionResults(result, left, right) {
  const unrecKeys = /* @__PURE__ */ new Map();
  let unrecIssue;
  for (const iss of left.issues) {
    if (iss.code === "unrecognized_keys") {
      unrecIssue ?? (unrecIssue = iss);
      for (const k of iss.keys) {
        if (!unrecKeys.has(k))
          unrecKeys.set(k, {});
        unrecKeys.get(k).l = true;
      }
    } else {
      result.issues.push(iss);
    }
  }
  for (const iss of right.issues) {
    if (iss.code === "unrecognized_keys") {
      for (const k of iss.keys) {
        if (!unrecKeys.has(k))
          unrecKeys.set(k, {});
        unrecKeys.get(k).r = true;
      }
    } else {
      result.issues.push(iss);
    }
  }
  const bothKeys = [...unrecKeys].filter(([, f]) => f.l && f.r).map(([k]) => k);
  if (bothKeys.length && unrecIssue) {
    result.issues.push({ ...unrecIssue, keys: bothKeys });
  }
  if (aborted(result))
    return result;
  const merged = mergeValues(left.value, right.value);
  if (!merged.valid) {
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(merged.mergeErrorPath)}`);
  }
  result.value = merged.data;
  return result;
}
const $ZodEnum = /* @__PURE__ */ $constructor("$ZodEnum", (inst, def) => {
  $ZodType.init(inst, def);
  const values = getEnumValues(def.entries);
  const valuesSet = new Set(values);
  inst._zod.values = valuesSet;
  inst._zod.pattern = new RegExp(`^(${values.filter((k) => propertyKeyTypes.has(typeof k)).map((o2) => typeof o2 === "string" ? escapeRegex(o2) : o2.toString()).join("|")})$`);
  inst._zod.parse = (payload, _ctx) => {
    const input = payload.value;
    if (valuesSet.has(input)) {
      return payload;
    }
    payload.issues.push({
      code: "invalid_value",
      values,
      input,
      inst
    });
    return payload;
  };
});
const $ZodTransform = /* @__PURE__ */ $constructor("$ZodTransform", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      throw new $ZodEncodeError(inst.constructor.name);
    }
    const _out = def.transform(payload.value, payload);
    if (ctx.async) {
      const output = _out instanceof Promise ? _out : Promise.resolve(_out);
      return output.then((output2) => {
        payload.value = output2;
        return payload;
      });
    }
    if (_out instanceof Promise) {
      throw new $ZodAsyncError();
    }
    payload.value = _out;
    return payload;
  };
});
function handleOptionalResult(result, input) {
  if (result.issues.length && input === void 0) {
    return { issues: [], value: void 0 };
  }
  return result;
}
const $ZodOptional = /* @__PURE__ */ $constructor("$ZodOptional", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.optin = "optional";
  inst._zod.optout = "optional";
  defineLazy(inst._zod, "values", () => {
    return def.innerType._zod.values ? /* @__PURE__ */ new Set([...def.innerType._zod.values, void 0]) : void 0;
  });
  defineLazy(inst._zod, "pattern", () => {
    const pattern = def.innerType._zod.pattern;
    return pattern ? new RegExp(`^(${cleanRegex(pattern.source)})?$`) : void 0;
  });
  inst._zod.parse = (payload, ctx) => {
    if (def.innerType._zod.optin === "optional") {
      const result = def.innerType._zod.run(payload, ctx);
      if (result instanceof Promise)
        return result.then((r2) => handleOptionalResult(r2, payload.value));
      return handleOptionalResult(result, payload.value);
    }
    if (payload.value === void 0) {
      return payload;
    }
    return def.innerType._zod.run(payload, ctx);
  };
});
const $ZodExactOptional = /* @__PURE__ */ $constructor("$ZodExactOptional", (inst, def) => {
  $ZodOptional.init(inst, def);
  defineLazy(inst._zod, "values", () => def.innerType._zod.values);
  defineLazy(inst._zod, "pattern", () => def.innerType._zod.pattern);
  inst._zod.parse = (payload, ctx) => {
    return def.innerType._zod.run(payload, ctx);
  };
});
const $ZodNullable = /* @__PURE__ */ $constructor("$ZodNullable", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazy(inst._zod, "optin", () => def.innerType._zod.optin);
  defineLazy(inst._zod, "optout", () => def.innerType._zod.optout);
  defineLazy(inst._zod, "pattern", () => {
    const pattern = def.innerType._zod.pattern;
    return pattern ? new RegExp(`^(${cleanRegex(pattern.source)}|null)$`) : void 0;
  });
  defineLazy(inst._zod, "values", () => {
    return def.innerType._zod.values ? /* @__PURE__ */ new Set([...def.innerType._zod.values, null]) : void 0;
  });
  inst._zod.parse = (payload, ctx) => {
    if (payload.value === null)
      return payload;
    return def.innerType._zod.run(payload, ctx);
  };
});
const $ZodDefault = /* @__PURE__ */ $constructor("$ZodDefault", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.optin = "optional";
  defineLazy(inst._zod, "values", () => def.innerType._zod.values);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      return def.innerType._zod.run(payload, ctx);
    }
    if (payload.value === void 0) {
      payload.value = def.defaultValue;
      return payload;
    }
    const result = def.innerType._zod.run(payload, ctx);
    if (result instanceof Promise) {
      return result.then((result2) => handleDefaultResult(result2, def));
    }
    return handleDefaultResult(result, def);
  };
});
function handleDefaultResult(payload, def) {
  if (payload.value === void 0) {
    payload.value = def.defaultValue;
  }
  return payload;
}
const $ZodPrefault = /* @__PURE__ */ $constructor("$ZodPrefault", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.optin = "optional";
  defineLazy(inst._zod, "values", () => def.innerType._zod.values);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      return def.innerType._zod.run(payload, ctx);
    }
    if (payload.value === void 0) {
      payload.value = def.defaultValue;
    }
    return def.innerType._zod.run(payload, ctx);
  };
});
const $ZodNonOptional = /* @__PURE__ */ $constructor("$ZodNonOptional", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazy(inst._zod, "values", () => {
    const v = def.innerType._zod.values;
    return v ? new Set([...v].filter((x) => x !== void 0)) : void 0;
  });
  inst._zod.parse = (payload, ctx) => {
    const result = def.innerType._zod.run(payload, ctx);
    if (result instanceof Promise) {
      return result.then((result2) => handleNonOptionalResult(result2, inst));
    }
    return handleNonOptionalResult(result, inst);
  };
});
function handleNonOptionalResult(payload, inst) {
  if (!payload.issues.length && payload.value === void 0) {
    payload.issues.push({
      code: "invalid_type",
      expected: "nonoptional",
      input: payload.value,
      inst
    });
  }
  return payload;
}
const $ZodCatch = /* @__PURE__ */ $constructor("$ZodCatch", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazy(inst._zod, "optin", () => def.innerType._zod.optin);
  defineLazy(inst._zod, "optout", () => def.innerType._zod.optout);
  defineLazy(inst._zod, "values", () => def.innerType._zod.values);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      return def.innerType._zod.run(payload, ctx);
    }
    const result = def.innerType._zod.run(payload, ctx);
    if (result instanceof Promise) {
      return result.then((result2) => {
        payload.value = result2.value;
        if (result2.issues.length) {
          payload.value = def.catchValue({
            ...payload,
            error: {
              issues: result2.issues.map((iss) => finalizeIssue(iss, ctx, config()))
            },
            input: payload.value
          });
          payload.issues = [];
        }
        return payload;
      });
    }
    payload.value = result.value;
    if (result.issues.length) {
      payload.value = def.catchValue({
        ...payload,
        error: {
          issues: result.issues.map((iss) => finalizeIssue(iss, ctx, config()))
        },
        input: payload.value
      });
      payload.issues = [];
    }
    return payload;
  };
});
const $ZodPipe = /* @__PURE__ */ $constructor("$ZodPipe", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazy(inst._zod, "values", () => def.in._zod.values);
  defineLazy(inst._zod, "optin", () => def.in._zod.optin);
  defineLazy(inst._zod, "optout", () => def.out._zod.optout);
  defineLazy(inst._zod, "propValues", () => def.in._zod.propValues);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      const right = def.out._zod.run(payload, ctx);
      if (right instanceof Promise) {
        return right.then((right2) => handlePipeResult(right2, def.in, ctx));
      }
      return handlePipeResult(right, def.in, ctx);
    }
    const left = def.in._zod.run(payload, ctx);
    if (left instanceof Promise) {
      return left.then((left2) => handlePipeResult(left2, def.out, ctx));
    }
    return handlePipeResult(left, def.out, ctx);
  };
});
function handlePipeResult(left, next, ctx) {
  if (left.issues.length) {
    left.aborted = true;
    return left;
  }
  return next._zod.run({ value: left.value, issues: left.issues }, ctx);
}
const $ZodReadonly = /* @__PURE__ */ $constructor("$ZodReadonly", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazy(inst._zod, "propValues", () => def.innerType._zod.propValues);
  defineLazy(inst._zod, "values", () => def.innerType._zod.values);
  defineLazy(inst._zod, "optin", () => def.innerType?._zod?.optin);
  defineLazy(inst._zod, "optout", () => def.innerType?._zod?.optout);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      return def.innerType._zod.run(payload, ctx);
    }
    const result = def.innerType._zod.run(payload, ctx);
    if (result instanceof Promise) {
      return result.then(handleReadonlyResult);
    }
    return handleReadonlyResult(result);
  };
});
function handleReadonlyResult(payload) {
  payload.value = Object.freeze(payload.value);
  return payload;
}
const $ZodCustom = /* @__PURE__ */ $constructor("$ZodCustom", (inst, def) => {
  $ZodCheck.init(inst, def);
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, _) => {
    return payload;
  };
  inst._zod.check = (payload) => {
    const input = payload.value;
    const r2 = def.fn(input);
    if (r2 instanceof Promise) {
      return r2.then((r3) => handleRefineResult(r3, payload, input, inst));
    }
    handleRefineResult(r2, payload, input, inst);
    return;
  };
});
function handleRefineResult(result, payload, input, inst) {
  if (!result) {
    const _iss = {
      code: "custom",
      input,
      inst,
      // incorporates params.error into issue reporting
      path: [...inst._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !inst._zod.def.abort
      // params: inst._zod.def.params,
    };
    if (inst._zod.def.params)
      _iss.params = inst._zod.def.params;
    payload.issues.push(issue(_iss));
  }
}
var _a;
class $ZodRegistry {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap();
    this._idmap = /* @__PURE__ */ new Map();
  }
  add(schema, ..._meta) {
    const meta = _meta[0];
    this._map.set(schema, meta);
    if (meta && typeof meta === "object" && "id" in meta) {
      this._idmap.set(meta.id, schema);
    }
    return this;
  }
  clear() {
    this._map = /* @__PURE__ */ new WeakMap();
    this._idmap = /* @__PURE__ */ new Map();
    return this;
  }
  remove(schema) {
    const meta = this._map.get(schema);
    if (meta && typeof meta === "object" && "id" in meta) {
      this._idmap.delete(meta.id);
    }
    this._map.delete(schema);
    return this;
  }
  get(schema) {
    const p = schema._zod.parent;
    if (p) {
      const pm = { ...this.get(p) ?? {} };
      delete pm.id;
      const f = { ...pm, ...this._map.get(schema) };
      return Object.keys(f).length ? f : void 0;
    }
    return this._map.get(schema);
  }
  has(schema) {
    return this._map.has(schema);
  }
}
function registry() {
  return new $ZodRegistry();
}
(_a = globalThis).__zod_globalRegistry ?? (_a.__zod_globalRegistry = registry());
const globalRegistry = globalThis.__zod_globalRegistry;
// @__NO_SIDE_EFFECTS__
function _maxLength(maximum, params) {
  const ch = new $ZodCheckMaxLength({
    check: "max_length",
    ...normalizeParams(params),
    maximum
  });
  return ch;
}
// @__NO_SIDE_EFFECTS__
function _minLength(minimum, params) {
  return new $ZodCheckMinLength({
    check: "min_length",
    ...normalizeParams(params),
    minimum
  });
}
// @__NO_SIDE_EFFECTS__
function _length(length, params) {
  return new $ZodCheckLengthEquals({
    check: "length_equals",
    ...normalizeParams(params),
    length
  });
}
// @__NO_SIDE_EFFECTS__
function _overwrite(tx) {
  return new $ZodCheckOverwrite({
    check: "overwrite",
    tx
  });
}
// @__NO_SIDE_EFFECTS__
function _array(Class, element, params) {
  return new Class({
    type: "array",
    element,
    // get element() {
    //   return element;
    // },
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _refine(Class, fn, _params) {
  const schema = new Class({
    type: "custom",
    check: "custom",
    fn,
    ...normalizeParams(_params)
  });
  return schema;
}
// @__NO_SIDE_EFFECTS__
function _superRefine(fn) {
  const ch = /* @__PURE__ */ _check((payload) => {
    payload.addIssue = (issue$1) => {
      if (typeof issue$1 === "string") {
        payload.issues.push(issue(issue$1, payload.value, ch._zod.def));
      } else {
        const _issue = issue$1;
        if (_issue.fatal)
          _issue.continue = false;
        _issue.code ?? (_issue.code = "custom");
        _issue.input ?? (_issue.input = payload.value);
        _issue.inst ?? (_issue.inst = ch);
        _issue.continue ?? (_issue.continue = !ch._zod.def.abort);
        payload.issues.push(issue(_issue));
      }
    };
    return fn(payload.value, payload);
  });
  return ch;
}
// @__NO_SIDE_EFFECTS__
function _check(fn, params) {
  const ch = new $ZodCheck({
    check: "custom",
    ...normalizeParams(params)
  });
  ch._zod.check = fn;
  return ch;
}
function initializeContext(params) {
  let target = params?.target ?? "draft-2020-12";
  if (target === "draft-4")
    target = "draft-04";
  if (target === "draft-7")
    target = "draft-07";
  return {
    processors: params.processors ?? {},
    metadataRegistry: params?.metadata ?? globalRegistry,
    target,
    unrepresentable: params?.unrepresentable ?? "throw",
    override: params?.override ?? (() => {
    }),
    io: params?.io ?? "output",
    counter: 0,
    seen: /* @__PURE__ */ new Map(),
    cycles: params?.cycles ?? "ref",
    reused: params?.reused ?? "inline",
    external: params?.external ?? void 0
  };
}
function process$1(schema, ctx, _params = { path: [], schemaPath: [] }) {
  var _a2;
  const def = schema._zod.def;
  const seen = ctx.seen.get(schema);
  if (seen) {
    seen.count++;
    const isCycle = _params.schemaPath.includes(schema);
    if (isCycle) {
      seen.cycle = _params.path;
    }
    return seen.schema;
  }
  const result = { schema: {}, count: 1, cycle: void 0, path: _params.path };
  ctx.seen.set(schema, result);
  const overrideSchema = schema._zod.toJSONSchema?.();
  if (overrideSchema) {
    result.schema = overrideSchema;
  } else {
    const params = {
      ..._params,
      schemaPath: [..._params.schemaPath, schema],
      path: _params.path
    };
    if (schema._zod.processJSONSchema) {
      schema._zod.processJSONSchema(ctx, result.schema, params);
    } else {
      const _json = result.schema;
      const processor = ctx.processors[def.type];
      if (!processor) {
        throw new Error(`[toJSONSchema]: Non-representable type encountered: ${def.type}`);
      }
      processor(schema, ctx, _json, params);
    }
    const parent = schema._zod.parent;
    if (parent) {
      if (!result.ref)
        result.ref = parent;
      process$1(parent, ctx, params);
      ctx.seen.get(parent).isParent = true;
    }
  }
  const meta = ctx.metadataRegistry.get(schema);
  if (meta)
    Object.assign(result.schema, meta);
  if (ctx.io === "input" && isTransforming(schema)) {
    delete result.schema.examples;
    delete result.schema.default;
  }
  if (ctx.io === "input" && result.schema._prefault)
    (_a2 = result.schema).default ?? (_a2.default = result.schema._prefault);
  delete result.schema._prefault;
  const _result = ctx.seen.get(schema);
  return _result.schema;
}
function extractDefs(ctx, schema) {
  const root = ctx.seen.get(schema);
  if (!root)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const idToSchema = /* @__PURE__ */ new Map();
  for (const entry of ctx.seen.entries()) {
    const id = ctx.metadataRegistry.get(entry[0])?.id;
    if (id) {
      const existing = idToSchema.get(id);
      if (existing && existing !== entry[0]) {
        throw new Error(`Duplicate schema id "${id}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
      }
      idToSchema.set(id, entry[0]);
    }
  }
  const makeURI = (entry) => {
    const defsSegment = ctx.target === "draft-2020-12" ? "$defs" : "definitions";
    if (ctx.external) {
      const externalId = ctx.external.registry.get(entry[0])?.id;
      const uriGenerator = ctx.external.uri ?? ((id2) => id2);
      if (externalId) {
        return { ref: uriGenerator(externalId) };
      }
      const id = entry[1].defId ?? entry[1].schema.id ?? `schema${ctx.counter++}`;
      entry[1].defId = id;
      return { defId: id, ref: `${uriGenerator("__shared")}#/${defsSegment}/${id}` };
    }
    if (entry[1] === root) {
      return { ref: "#" };
    }
    const uriPrefix = `#`;
    const defUriPrefix = `${uriPrefix}/${defsSegment}/`;
    const defId = entry[1].schema.id ?? `__schema${ctx.counter++}`;
    return { defId, ref: defUriPrefix + defId };
  };
  const extractToDef = (entry) => {
    if (entry[1].schema.$ref) {
      return;
    }
    const seen = entry[1];
    const { ref, defId } = makeURI(entry);
    seen.def = { ...seen.schema };
    if (defId)
      seen.defId = defId;
    const schema2 = seen.schema;
    for (const key in schema2) {
      delete schema2[key];
    }
    schema2.$ref = ref;
  };
  if (ctx.cycles === "throw") {
    for (const entry of ctx.seen.entries()) {
      const seen = entry[1];
      if (seen.cycle) {
        throw new Error(`Cycle detected: #/${seen.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
      }
    }
  }
  for (const entry of ctx.seen.entries()) {
    const seen = entry[1];
    if (schema === entry[0]) {
      extractToDef(entry);
      continue;
    }
    if (ctx.external) {
      const ext = ctx.external.registry.get(entry[0])?.id;
      if (schema !== entry[0] && ext) {
        extractToDef(entry);
        continue;
      }
    }
    const id = ctx.metadataRegistry.get(entry[0])?.id;
    if (id) {
      extractToDef(entry);
      continue;
    }
    if (seen.cycle) {
      extractToDef(entry);
      continue;
    }
    if (seen.count > 1) {
      if (ctx.reused === "ref") {
        extractToDef(entry);
        continue;
      }
    }
  }
}
function finalize(ctx, schema) {
  const root = ctx.seen.get(schema);
  if (!root)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const flattenRef = (zodSchema) => {
    const seen = ctx.seen.get(zodSchema);
    if (seen.ref === null)
      return;
    const schema2 = seen.def ?? seen.schema;
    const _cached = { ...schema2 };
    const ref = seen.ref;
    seen.ref = null;
    if (ref) {
      flattenRef(ref);
      const refSeen = ctx.seen.get(ref);
      const refSchema = refSeen.schema;
      if (refSchema.$ref && (ctx.target === "draft-07" || ctx.target === "draft-04" || ctx.target === "openapi-3.0")) {
        schema2.allOf = schema2.allOf ?? [];
        schema2.allOf.push(refSchema);
      } else {
        Object.assign(schema2, refSchema);
      }
      Object.assign(schema2, _cached);
      const isParentRef = zodSchema._zod.parent === ref;
      if (isParentRef) {
        for (const key in schema2) {
          if (key === "$ref" || key === "allOf")
            continue;
          if (!(key in _cached)) {
            delete schema2[key];
          }
        }
      }
      if (refSchema.$ref && refSeen.def) {
        for (const key in schema2) {
          if (key === "$ref" || key === "allOf")
            continue;
          if (key in refSeen.def && JSON.stringify(schema2[key]) === JSON.stringify(refSeen.def[key])) {
            delete schema2[key];
          }
        }
      }
    }
    const parent = zodSchema._zod.parent;
    if (parent && parent !== ref) {
      flattenRef(parent);
      const parentSeen = ctx.seen.get(parent);
      if (parentSeen?.schema.$ref) {
        schema2.$ref = parentSeen.schema.$ref;
        if (parentSeen.def) {
          for (const key in schema2) {
            if (key === "$ref" || key === "allOf")
              continue;
            if (key in parentSeen.def && JSON.stringify(schema2[key]) === JSON.stringify(parentSeen.def[key])) {
              delete schema2[key];
            }
          }
        }
      }
    }
    ctx.override({
      zodSchema,
      jsonSchema: schema2,
      path: seen.path ?? []
    });
  };
  for (const entry of [...ctx.seen.entries()].reverse()) {
    flattenRef(entry[0]);
  }
  const result = {};
  if (ctx.target === "draft-2020-12") {
    result.$schema = "https://json-schema.org/draft/2020-12/schema";
  } else if (ctx.target === "draft-07") {
    result.$schema = "http://json-schema.org/draft-07/schema#";
  } else if (ctx.target === "draft-04") {
    result.$schema = "http://json-schema.org/draft-04/schema#";
  } else if (ctx.target === "openapi-3.0") ;
  else ;
  if (ctx.external?.uri) {
    const id = ctx.external.registry.get(schema)?.id;
    if (!id)
      throw new Error("Schema is missing an `id` property");
    result.$id = ctx.external.uri(id);
  }
  Object.assign(result, root.def ?? root.schema);
  const defs = ctx.external?.defs ?? {};
  for (const entry of ctx.seen.entries()) {
    const seen = entry[1];
    if (seen.def && seen.defId) {
      defs[seen.defId] = seen.def;
    }
  }
  if (ctx.external) ;
  else {
    if (Object.keys(defs).length > 0) {
      if (ctx.target === "draft-2020-12") {
        result.$defs = defs;
      } else {
        result.definitions = defs;
      }
    }
  }
  try {
    const finalized = JSON.parse(JSON.stringify(result));
    Object.defineProperty(finalized, "~standard", {
      value: {
        ...schema["~standard"],
        jsonSchema: {
          input: createStandardJSONSchemaMethod(schema, "input", ctx.processors),
          output: createStandardJSONSchemaMethod(schema, "output", ctx.processors)
        }
      },
      enumerable: false,
      writable: false
    });
    return finalized;
  } catch (_err) {
    throw new Error("Error converting schema to JSON.");
  }
}
function isTransforming(_schema, _ctx) {
  const ctx = _ctx ?? { seen: /* @__PURE__ */ new Set() };
  if (ctx.seen.has(_schema))
    return false;
  ctx.seen.add(_schema);
  const def = _schema._zod.def;
  if (def.type === "transform")
    return true;
  if (def.type === "array")
    return isTransforming(def.element, ctx);
  if (def.type === "set")
    return isTransforming(def.valueType, ctx);
  if (def.type === "lazy")
    return isTransforming(def.getter(), ctx);
  if (def.type === "promise" || def.type === "optional" || def.type === "nonoptional" || def.type === "nullable" || def.type === "readonly" || def.type === "default" || def.type === "prefault") {
    return isTransforming(def.innerType, ctx);
  }
  if (def.type === "intersection") {
    return isTransforming(def.left, ctx) || isTransforming(def.right, ctx);
  }
  if (def.type === "record" || def.type === "map") {
    return isTransforming(def.keyType, ctx) || isTransforming(def.valueType, ctx);
  }
  if (def.type === "pipe") {
    return isTransforming(def.in, ctx) || isTransforming(def.out, ctx);
  }
  if (def.type === "object") {
    for (const key in def.shape) {
      if (isTransforming(def.shape[key], ctx))
        return true;
    }
    return false;
  }
  if (def.type === "union") {
    for (const option of def.options) {
      if (isTransforming(option, ctx))
        return true;
    }
    return false;
  }
  if (def.type === "tuple") {
    for (const item of def.items) {
      if (isTransforming(item, ctx))
        return true;
    }
    if (def.rest && isTransforming(def.rest, ctx))
      return true;
    return false;
  }
  return false;
}
const createToJSONSchemaMethod = (schema, processors = {}) => (params) => {
  const ctx = initializeContext({ ...params, processors });
  process$1(schema, ctx);
  extractDefs(ctx, schema);
  return finalize(ctx, schema);
};
const createStandardJSONSchemaMethod = (schema, io, processors = {}) => (params) => {
  const { libraryOptions, target } = params ?? {};
  const ctx = initializeContext({ ...libraryOptions ?? {}, target, io, processors });
  process$1(schema, ctx);
  extractDefs(ctx, schema);
  return finalize(ctx, schema);
};
const enumProcessor = (schema, _ctx, json, _params) => {
  const def = schema._zod.def;
  const values = getEnumValues(def.entries);
  if (values.every((v) => typeof v === "number"))
    json.type = "number";
  if (values.every((v) => typeof v === "string"))
    json.type = "string";
  json.enum = values;
};
const customProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw") {
    throw new Error("Custom types cannot be represented in JSON Schema");
  }
};
const transformProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw") {
    throw new Error("Transforms cannot be represented in JSON Schema");
  }
};
const arrayProcessor = (schema, ctx, _json, params) => {
  const json = _json;
  const def = schema._zod.def;
  const { minimum, maximum } = schema._zod.bag;
  if (typeof minimum === "number")
    json.minItems = minimum;
  if (typeof maximum === "number")
    json.maxItems = maximum;
  json.type = "array";
  json.items = process$1(def.element, ctx, { ...params, path: [...params.path, "items"] });
};
const unionProcessor = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  const isExclusive = def.inclusive === false;
  const options = def.options.map((x, i2) => process$1(x, ctx, {
    ...params,
    path: [...params.path, isExclusive ? "oneOf" : "anyOf", i2]
  }));
  if (isExclusive) {
    json.oneOf = options;
  } else {
    json.anyOf = options;
  }
};
const intersectionProcessor = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  const a2 = process$1(def.left, ctx, {
    ...params,
    path: [...params.path, "allOf", 0]
  });
  const b = process$1(def.right, ctx, {
    ...params,
    path: [...params.path, "allOf", 1]
  });
  const isSimpleIntersection = (val) => "allOf" in val && Object.keys(val).length === 1;
  const allOf = [
    ...isSimpleIntersection(a2) ? a2.allOf : [a2],
    ...isSimpleIntersection(b) ? b.allOf : [b]
  ];
  json.allOf = allOf;
};
const nullableProcessor = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  const inner = process$1(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  if (ctx.target === "openapi-3.0") {
    seen.ref = def.innerType;
    json.nullable = true;
  } else {
    json.anyOf = [inner, { type: "null" }];
  }
};
const nonoptionalProcessor = (schema, ctx, _json, params) => {
  const def = schema._zod.def;
  process$1(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
};
const defaultProcessor = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  process$1(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
  json.default = JSON.parse(JSON.stringify(def.defaultValue));
};
const prefaultProcessor = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  process$1(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
  if (ctx.io === "input")
    json._prefault = JSON.parse(JSON.stringify(def.defaultValue));
};
const catchProcessor = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  process$1(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
  let catchValue;
  try {
    catchValue = def.catchValue(void 0);
  } catch {
    throw new Error("Dynamic catch values are not supported in JSON Schema");
  }
  json.default = catchValue;
};
const pipeProcessor = (schema, ctx, _json, params) => {
  const def = schema._zod.def;
  const innerType = ctx.io === "input" ? def.in._zod.def.type === "transform" ? def.out : def.in : def.out;
  process$1(innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = innerType;
};
const readonlyProcessor = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  process$1(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
  json.readOnly = true;
};
const optionalProcessor = (schema, ctx, _json, params) => {
  const def = schema._zod.def;
  process$1(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
};
async function readBodyWithLimit(request, limit) {
  const contentLengthHeader = request.headers.get("content-length");
  if (contentLengthHeader) {
    const contentLength = Number.parseInt(contentLengthHeader, 10);
    if (Number.isFinite(contentLength) && contentLength > limit) {
      throw new BodySizeLimitError(limit);
    }
  }
  if (!request.body) return new Uint8Array();
  const reader = request.body.getReader();
  const chunks = [];
  let received = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    if (value) {
      received += value.byteLength;
      if (received > limit) {
        throw new BodySizeLimitError(limit);
      }
      chunks.push(value);
    }
  }
  const buffer = new Uint8Array(received);
  let offset = 0;
  for (const chunk of chunks) {
    buffer.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return buffer;
}
class BodySizeLimitError extends Error {
  limit;
  constructor(limit) {
    super(`Request body exceeds the configured limit of ${limit} bytes`);
    this.name = "BodySizeLimitError";
    this.limit = limit;
  }
}
const __vite_import_meta_env__ = { "ASSETS_PREFIX": void 0, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": void 0, "SSR": true };
function getActionContext(context) {
  const callerInfo = getCallerInfo(context);
  const actionResultAlreadySet = Boolean(context.locals._actionPayload);
  let action = void 0;
  if (callerInfo && context.request.method === "POST" && !actionResultAlreadySet) {
    action = {
      calledFrom: callerInfo.from,
      name: callerInfo.name,
      handler: async () => {
        const pipeline = Reflect.get(context, pipelineSymbol);
        const callerInfoName = shouldAppendForwardSlash(
          pipeline.manifest.trailingSlash,
          pipeline.manifest.buildFormat
        ) ? removeTrailingForwardSlash(callerInfo.name) : callerInfo.name;
        let baseAction;
        try {
          baseAction = await pipeline.getAction(callerInfoName);
        } catch (error2) {
          if (error2 instanceof Error && "name" in error2 && typeof error2.name === "string" && error2.name === ActionNotFoundError.name) {
            return { data: void 0, error: new ActionError({ code: "NOT_FOUND" }) };
          }
          throw error2;
        }
        const bodySizeLimit = pipeline.manifest.actionBodySizeLimit;
        let input;
        try {
          input = await parseRequestBody(context.request, bodySizeLimit);
        } catch (e2) {
          if (e2 instanceof ActionError) {
            return { data: void 0, error: e2 };
          }
          if (e2 instanceof TypeError) {
            return { data: void 0, error: new ActionError({ code: "UNSUPPORTED_MEDIA_TYPE" }) };
          }
          throw e2;
        }
        const omitKeys = ["props", "getActionResult", "callAction", "redirect"];
        const actionAPIContext = Object.create(
          Object.getPrototypeOf(context),
          Object.fromEntries(
            Object.entries(Object.getOwnPropertyDescriptors(context)).filter(
              ([key]) => !omitKeys.includes(key)
            )
          )
        );
        Reflect.set(actionAPIContext, ACTION_API_CONTEXT_SYMBOL, true);
        const handler = baseAction.bind(actionAPIContext);
        return handler(input);
      }
    };
  }
  function setActionResult(actionName, actionResult) {
    context.locals._actionPayload = {
      actionResult,
      actionName
    };
  }
  return {
    action,
    setActionResult,
    serializeActionResult,
    deserializeActionResult
  };
}
function getCallerInfo(ctx) {
  if (ctx.routePattern === ACTION_RPC_ROUTE_PATTERN) {
    return { from: "rpc", name: ctx.url.pathname.replace(/^.*\/_actions\//, "") };
  }
  const queryParam = ctx.url.searchParams.get(ACTION_QUERY_PARAMS.actionName);
  if (queryParam) {
    return { from: "form", name: queryParam };
  }
  return void 0;
}
async function parseRequestBody(request, bodySizeLimit) {
  const contentType = request.headers.get("content-type");
  const contentLengthHeader = request.headers.get("content-length");
  const contentLength = contentLengthHeader ? Number.parseInt(contentLengthHeader, 10) : void 0;
  const hasContentLength = typeof contentLength === "number" && Number.isFinite(contentLength);
  if (!contentType) return void 0;
  if (hasContentLength && contentLength > bodySizeLimit) {
    throw new ActionError({
      code: "CONTENT_TOO_LARGE",
      message: `Request body exceeds ${bodySizeLimit} bytes`
    });
  }
  try {
    if (hasContentType(contentType, formContentTypes)) {
      if (!hasContentLength) {
        const body = await readBodyWithLimit(request.clone(), bodySizeLimit);
        const formRequest = new Request(request.url, {
          method: request.method,
          headers: request.headers,
          body: toArrayBuffer(body)
        });
        return await formRequest.formData();
      }
      return await request.clone().formData();
    }
    if (hasContentType(contentType, ["application/json"])) {
      if (contentLength === 0) return void 0;
      if (!hasContentLength) {
        const body = await readBodyWithLimit(request.clone(), bodySizeLimit);
        if (body.byteLength === 0) return void 0;
        return JSON.parse(new TextDecoder().decode(body));
      }
      return await request.clone().json();
    }
  } catch (e2) {
    if (e2 instanceof BodySizeLimitError) {
      throw new ActionError({
        code: "CONTENT_TOO_LARGE",
        message: `Request body exceeds ${bodySizeLimit} bytes`
      });
    }
    throw e2;
  }
  throw new TypeError("Unsupported content type");
}
const ACTION_API_CONTEXT_SYMBOL = /* @__PURE__ */ Symbol.for("astro.actionAPIContext");
const formContentTypes = ["application/x-www-form-urlencoded", "multipart/form-data"];
function hasContentType(contentType, expected) {
  const type = contentType.split(";")[0].toLowerCase();
  return expected.some((t2) => type === t2);
}
function serializeActionResult(res) {
  if (res.error) {
    if (Object.assign(__vite_import_meta_env__, { OS: "Windows_NT" })?.DEV) {
      actionResultErrorStack.set(res.error.stack);
    }
    let body2;
    if (res.error instanceof ActionInputError) {
      body2 = {
        type: res.error.type,
        issues: res.error.issues,
        fields: res.error.fields
      };
    } else {
      body2 = {
        ...res.error,
        message: res.error.message
      };
    }
    return {
      type: "error",
      status: res.error.status,
      contentType: "application/json",
      body: JSON.stringify(body2)
    };
  }
  if (res.data === void 0) {
    return {
      type: "empty",
      status: 204
    };
  }
  let body;
  try {
    body = stringify$2(res.data, {
      // Add support for URL objects
      URL: (value) => value instanceof URL && value.href
    });
  } catch (e2) {
    let hint = ActionsReturnedInvalidDataError.hint;
    if (res.data instanceof Response) {
      hint = REDIRECT_STATUS_CODES.includes(res.data.status) ? "If you need to redirect when the action succeeds, trigger a redirect where the action is called. See the Actions guide for server and client redirect examples: https://docs.astro.build/en/guides/actions." : "If you need to return a Response object, try using a server endpoint instead. See https://docs.astro.build/en/guides/endpoints/#server-endpoints-api-routes";
    }
    throw new AstroError({
      ...ActionsReturnedInvalidDataError,
      message: ActionsReturnedInvalidDataError.message(String(e2)),
      hint
    });
  }
  return {
    type: "data",
    status: 200,
    contentType: "application/json+devalue",
    body
  };
}
function toArrayBuffer(buffer) {
  const copy = new Uint8Array(buffer.byteLength);
  copy.set(buffer);
  return copy.buffer;
}
var ImportType;
!(function(A) {
  A[A.Static = 1] = "Static", A[A.Dynamic = 2] = "Dynamic", A[A.ImportMeta = 3] = "ImportMeta", A[A.StaticSourcePhase = 4] = "StaticSourcePhase", A[A.DynamicSourcePhase = 5] = "DynamicSourcePhase", A[A.StaticDeferPhase = 6] = "StaticDeferPhase", A[A.DynamicDeferPhase = 7] = "DynamicDeferPhase";
})(ImportType || (ImportType = {}));
1 === new Uint8Array(new Uint16Array([1]).buffer)[0];
const E = () => {
  return A = "AGFzbQEAAAABKwhgAX8Bf2AEf39/fwBgAAF/YAAAYAF/AGADf39/AX9gAn9/AX9gA39/fwADNzYAAQECAgICAgICAgICAgICAgICAgICAgICAwIAAwMDBAQAAAUAAAAAAAMDAwAGAAAABwAGAgUEBQFwAQEBBQMBAAEGDwJ/AUGw8gALfwBBsPIACwedARsGbWVtb3J5AgACc2EAAAFlAAMCaXMABAJpZQAFAnNzAAYCc2UABwJpdAAIAmFpAAkCaWQACgJpcAALAmVzAAwCZWUADQNlbHMADgNlbGUADwJyaQAQAnJlABEBZgASAm1zABMCcmEAFANha3MAFQNha2UAFgNhdnMAFwNhdmUAGANyc2EAGQVwYXJzZQAaC19faGVhcF9iYXNlAwEKkkY2aAEBf0EAIAA2AvQJQQAoAtAJIgEgAEEBdGoiAEEAOwEAQQAgAEECaiIANgL4CUEAIAA2AvwJQQBBADYC1AlBAEEANgLkCUEAQQA2AtwJQQBBADYC2AlBAEEANgLsCUEAQQA2AuAJIAEL0wEBA39BACgC5AkhBEEAQQAoAvwJIgU2AuQJQQAgBDYC6AlBACAFQShqNgL8CSAEQSRqQdQJIAQbIAU2AgBBACgCyAkhBEEAKALECSEGIAUgATYCACAFIAA2AgggBSACIAJBAmpBACAGIANGIgAbIAQgA0YiBBs2AgwgBSADNgIUIAVBADYCECAFIAI2AgQgBUIANwIgIAVBA0EBQQIgABsgBBs2AhwgBUEAKALECSADRiICOgAYAkACQCACDQBBACgCyAkgA0cNAQtBAEEBOgCACgsLXgEBf0EAKALsCSIEQRBqQdgJIAQbQQAoAvwJIgQ2AgBBACAENgLsCUEAIARBFGo2AvwJQQBBAToAgAogBEEANgIQIAQgAzYCDCAEIAI2AgggBCABNgIEIAQgADYCAAsIAEEAKAKECgsVAEEAKALcCSgCAEEAKALQCWtBAXULHgEBf0EAKALcCSgCBCIAQQAoAtAJa0EBdUF/IAAbCxUAQQAoAtwJKAIIQQAoAtAJa0EBdQseAQF/QQAoAtwJKAIMIgBBACgC0AlrQQF1QX8gABsLCwBBACgC3AkoAhwLHgEBf0EAKALcCSgCECIAQQAoAtAJa0EBdUF/IAAbCzsBAX8CQEEAKALcCSgCFCIAQQAoAsQJRw0AQX8PCwJAIABBACgCyAlHDQBBfg8LIABBACgC0AlrQQF1CwsAQQAoAtwJLQAYCxUAQQAoAuAJKAIAQQAoAtAJa0EBdQsVAEEAKALgCSgCBEEAKALQCWtBAXULHgEBf0EAKALgCSgCCCIAQQAoAtAJa0EBdUF/IAAbCx4BAX9BACgC4AkoAgwiAEEAKALQCWtBAXVBfyAAGwslAQF/QQBBACgC3AkiAEEkakHUCSAAGygCACIANgLcCSAAQQBHCyUBAX9BAEEAKALgCSIAQRBqQdgJIAAbKAIAIgA2AuAJIABBAEcLCABBAC0AiAoLCABBAC0AgAoLKwEBf0EAQQAoAowKIgBBEGpBACgC3AlBIGogABsoAgAiADYCjAogAEEARwsVAEEAKAKMCigCAEEAKALQCWtBAXULFQBBACgCjAooAgRBACgC0AlrQQF1CxUAQQAoAowKKAIIQQAoAtAJa0EBdQsVAEEAKAKMCigCDEEAKALQCWtBAXULCgBBAEEANgKMCgvdDQEFfyMAQYDQAGsiACQAQQBBAToAiApBAEEAKALMCTYClApBAEEAKALQCUF+aiIBNgKoCkEAIAFBACgC9AlBAXRqIgI2AqwKQQBBADoAgApBAEEAOwGQCkEAQQA7AZIKQQBBADoAmApBAEEANgKECkEAQQA6APAJQQAgAEGAEGo2ApwKQQAgADYCoApBAEEAOgCkCgJAAkACQAJAA0BBACABQQJqIgM2AqgKIAEgAk8NAQJAIAMvAQAiAkF3akEFSQ0AAkACQAJAAkACQCACQZt/ag4FAQgICAIACyACQSBGDQQgAkEvRg0DIAJBO0YNAgwHC0EALwGSCg0BIAMQG0UNASABQQRqQYIIQQoQNQ0BEBxBAC0AiAoNAUEAQQAoAqgKIgE2ApQKDAcLIAMQG0UNACABQQRqQYwIQQoQNQ0AEB0LQQBBACgCqAo2ApQKDAELAkAgAS8BBCIDQSpGDQAgA0EvRw0EEB4MAQtBARAfC0EAKAKsCiECQQAoAqgKIQEMAAsLQQAhAiADIQFBAC0A8AkNAgwBC0EAIAE2AqgKQQBBADoAiAoLA0BBACABQQJqIgM2AqgKAkACQAJAAkACQAJAAkAgAUEAKAKsCk8NACADLwEAIgJBd2pBBUkNBgJAAkACQAJAAkACQAJAAkACQAJAIAJBYGoOChAPBg8PDw8FAQIACwJAAkACQAJAIAJBoH9qDgoLEhIDEgESEhICAAsgAkGFf2oOAwURBgkLQQAvAZIKDRAgAxAbRQ0QIAFBBGpBgghBChA1DRAQHAwQCyADEBtFDQ8gAUEEakGMCEEKEDUNDxAdDA8LIAMQG0UNDiABKQAEQuyAhIOwjsA5Ug0OIAEvAQwiA0F3aiIBQRdLDQxBASABdEGfgIAEcUUNDAwNC0EAQQAvAZIKIgFBAWo7AZIKQQAoApwKIAFBA3RqIgFBATYCACABQQAoApQKNgIEDA0LQQAvAZIKIgNFDQlBACADQX9qIgM7AZIKQQAvAZAKIgJFDQxBACgCnAogA0H//wNxQQN0aigCAEEFRw0MAkAgAkECdEEAKAKgCmpBfGooAgAiAygCBA0AIANBACgClApBAmo2AgQLQQAgAkF/ajsBkAogAyABQQRqNgIMDAwLAkBBACgClAoiAS8BAEEpRw0AQQAoAuQJIgNFDQAgAygCBCABRw0AQQBBACgC6AkiAzYC5AkCQCADRQ0AIANBADYCJAwBC0EAQQA2AtQJC0EAQQAvAZIKIgNBAWo7AZIKQQAoApwKIANBA3RqIgNBBkECQQAtAKQKGzYCACADIAE2AgRBAEEAOgCkCgwLC0EALwGSCiIBRQ0HQQAgAUF/aiIBOwGSCkEAKAKcCiABQf//A3FBA3RqKAIAQQRGDQQMCgtBJxAgDAkLQSIQIAwICyACQS9HDQcCQAJAIAEvAQQiAUEqRg0AIAFBL0cNARAeDAoLQQEQHwwJCwJAAkACQAJAQQAoApQKIgEvAQAiAxAhRQ0AAkACQCADQVVqDgQACQEDCQsgAUF+ai8BAEErRg0DDAgLIAFBfmovAQBBLUYNAgwHCyADQSlHDQFBACgCnApBAC8BkgoiAkEDdGooAgQQIkUNAgwGCyABQX5qLwEAQVBqQf//A3FBCk8NBQtBAC8BkgohAgsCQAJAIAJB//8DcSICRQ0AIANB5gBHDQBBACgCnAogAkF/akEDdGoiBCgCAEEBRw0AIAFBfmovAQBB7wBHDQEgBCgCBEGWCEEDECNFDQEMBQsgA0H9AEcNAEEAKAKcCiACQQN0aiICKAIEECQNBCACKAIAQQZGDQQLIAEQJQ0DIANFDQMgA0EvRkEALQCYCkEAR3ENAwJAQQAoAuwJIgJFDQAgASACKAIASQ0AIAEgAigCBE0NBAsgAUF+aiEBQQAoAtAJIQICQANAIAFBAmoiBCACTQ0BQQAgATYClAogAS8BACEDIAFBfmoiBCEBIAMQJkUNAAsgBEECaiEECwJAIANB//8DcRAnRQ0AIARBfmohAQJAA0AgAUECaiIDIAJNDQFBACABNgKUCiABLwEAIQMgAUF+aiIEIQEgAxAnDQALIARBAmohAwsgAxAoDQQLQQBBAToAmAoMBwtBACgCnApBAC8BkgoiAUEDdCIDakEAKAKUCjYCBEEAIAFBAWo7AZIKQQAoApwKIANqQQM2AgALECkMBQtBAC0A8AlBAC8BkApBAC8BkgpyckUhAgwHCxAqQQBBADoAmAoMAwsQK0EAIQIMBQsgA0GgAUcNAQtBAEEBOgCkCgtBAEEAKAKoCjYClAoLQQAoAqgKIQEMAAsLIABBgNAAaiQAIAILGgACQEEAKALQCSAARw0AQQEPCyAAQX5qECwL/goBBn9BAEEAKAKoCiIAQQxqIgE2AqgKQQAoAuwJIQJBARAvIQMCQAJAAkACQAJAAkACQAJAAkBBACgCqAoiBCABRw0AIAMQLkUNAQsCQAJAAkACQAJAAkACQCADQSpGDQAgA0H7AEcNAUEAIARBAmo2AqgKQQEQLyEDQQAoAqgKIQQDQAJAAkAgA0H//wNxIgNBIkYNACADQSdGDQAgAxAyGkEAKAKoCiEDDAELIAMQIEEAQQAoAqgKQQJqIgM2AqgKC0EBEC8aAkAgBCADEDMiA0EsRw0AQQBBACgCqApBAmo2AqgKQQEQLyEDCyADQf0ARg0DQQAoAqgKIgUgBEYNDyAFIQQgBUEAKAKsCk0NAAwPCwtBACAEQQJqNgKoCkEBEC8aQQAoAqgKIgMgAxAzGgwCC0EAQQA6AIgKAkACQAJAAkACQAJAIANBn39qDgwCCwQBCwMLCwsLCwUACyADQfYARg0EDAoLQQAgBEEOaiIDNgKoCgJAAkACQEEBEC9Bn39qDgYAEgISEgESC0EAKAKoCiIFKQACQvOA5IPgjcAxUg0RIAUvAQoQJ0UNEUEAIAVBCmo2AqgKQQAQLxoLQQAoAqgKIgVBAmpBsghBDhA1DRAgBS8BECICQXdqIgFBF0sNDUEBIAF0QZ+AgARxRQ0NDA4LQQAoAqgKIgUpAAJC7ICEg7COwDlSDQ8gBS8BCiICQXdqIgFBF00NBgwKC0EAIARBCmo2AqgKQQAQLxpBACgCqAohBAtBACAEQRBqNgKoCgJAQQEQLyIEQSpHDQBBAEEAKAKoCkECajYCqApBARAvIQQLQQAoAqgKIQMgBBAyGiADQQAoAqgKIgQgAyAEEAJBAEEAKAKoCkF+ajYCqAoPCwJAIAQpAAJC7ICEg7COwDlSDQAgBC8BChAmRQ0AQQAgBEEKajYCqApBARAvIQRBACgCqAohAyAEEDIaIANBACgCqAoiBCADIAQQAkEAQQAoAqgKQX5qNgKoCg8LQQAgBEEEaiIENgKoCgtBACAEQQZqNgKoCkEAQQA6AIgKQQEQLyEEQQAoAqgKIQMgBBAyIQRBACgCqAohAiAEQd//A3EiAUHbAEcNA0EAIAJBAmo2AqgKQQEQLyEFQQAoAqgKIQNBACEEDAQLQQBBAToAgApBAEEAKAKoCkECajYCqAoLQQEQLyEEQQAoAqgKIQMCQCAEQeYARw0AIANBAmpBrAhBBhA1DQBBACADQQhqNgKoCiAAQQEQL0EAEDEgAkEQakHYCSACGyEDA0AgAygCACIDRQ0FIANCADcCCCADQRBqIQMMAAsLQQAgA0F+ajYCqAoMAwtBASABdEGfgIAEcUUNAwwEC0EBIQQLA0ACQAJAIAQOAgABAQsgBUH//wNxEDIaQQEhBAwBCwJAAkBBACgCqAoiBCADRg0AIAMgBCADIAQQAkEBEC8hBAJAIAFB2wBHDQAgBEEgckH9AEYNBAtBACgCqAohAwJAIARBLEcNAEEAIANBAmo2AqgKQQEQLyEFQQAoAqgKIQMgBUEgckH7AEcNAgtBACADQX5qNgKoCgsgAUHbAEcNAkEAIAJBfmo2AqgKDwtBACEEDAALCw8LIAJBoAFGDQAgAkH7AEcNBAtBACAFQQpqNgKoCkEBEC8iBUH7AEYNAwwCCwJAIAJBWGoOAwEDAQALIAJBoAFHDQILQQAgBUEQajYCqAoCQEEBEC8iBUEqRw0AQQBBACgCqApBAmo2AqgKQQEQLyEFCyAFQShGDQELQQAoAqgKIQEgBRAyGkEAKAKoCiIFIAFNDQAgBCADIAEgBRACQQBBACgCqApBfmo2AqgKDwsgBCADQQBBABACQQAgBEEMajYCqAoPCxArC4UMAQp/QQBBACgCqAoiAEEMaiIBNgKoCkEBEC8hAkEAKAKoCiEDAkACQAJAAkACQAJAAkACQCACQS5HDQBBACADQQJqNgKoCgJAQQEQLyICQeQARg0AAkAgAkHzAEYNACACQe0ARw0HQQAoAqgKIgJBAmpBnAhBBhA1DQcCQEEAKAKUCiIDEDANACADLwEAQS5GDQgLIAAgACACQQhqQQAoAsgJEAEPC0EAKAKoCiICQQJqQaIIQQoQNQ0GAkBBACgClAoiAxAwDQAgAy8BAEEuRg0HC0EAIQRBACACQQxqNgKoCkEBIQVBBSEGQQEQLyECQQAhB0EBIQgMAgtBACgCqAoiAikAAkLlgJiD0IyAOVINBQJAQQAoApQKIgMQMA0AIAMvAQBBLkYNBgtBACEEQQAgAkEKajYCqApBAiEIQQchBkEBIQdBARAvIQJBASEFDAELAkACQAJAAkAgAkHzAEcNACADIAFNDQAgA0ECakGiCEEKEDUNAAJAIAMvAQwiBEF3aiIHQRdLDQBBASAHdEGfgIAEcQ0CCyAEQaABRg0BC0EAIQdBByEGQQEhBCACQeQARg0BDAILQQAhBEEAIANBDGoiAjYCqApBASEFQQEQLyEJAkBBACgCqAoiBiACRg0AQeYAIQICQCAJQeYARg0AQQUhBkEAIQdBASEIIAkhAgwEC0EAIQdBASEIIAZBAmpBrAhBBhA1DQQgBi8BCBAmRQ0EC0EAIQdBACADNgKoCkEHIQZBASEEQQAhBUEAIQggCSECDAILIAMgAEEKak0NAEEAIQhB5AAhAgJAIAMpAAJC5YCYg9CMgDlSDQACQAJAIAMvAQoiBEF3aiIHQRdLDQBBASAHdEGfgIAEcQ0BC0EAIQggBEGgAUcNAQtBACEFQQAgA0EKajYCqApBKiECQQEhB0ECIQhBARAvIglBKkYNBEEAIAM2AqgKQQEhBEEAIQdBACEIIAkhAgwCCyADIQZBACEHDAILQQAhBUEAIQgLAkAgAkEoRw0AQQAoApwKQQAvAZIKIgJBA3RqIgNBACgCqAo2AgRBACACQQFqOwGSCiADQQU2AgBBACgClAovAQBBLkYNBEEAQQAoAqgKIgNBAmo2AqgKQQEQLyECIABBACgCqApBACADEAECQAJAIAUNAEEAKALkCSEBDAELQQAoAuQJIgEgBjYCHAtBAEEALwGQCiIDQQFqOwGQCkEAKAKgCiADQQJ0aiABNgIAAkAgAkEiRg0AIAJBJ0YNAEEAQQAoAqgKQX5qNgKoCg8LIAIQIEEAQQAoAqgKQQJqIgI2AqgKAkACQAJAQQEQL0FXag4EAQICAAILQQBBACgCqApBAmo2AqgKQQEQLxpBACgC5AkiAyACNgIEIANBAToAGCADQQAoAqgKIgI2AhBBACACQX5qNgKoCg8LQQAoAuQJIgMgAjYCBCADQQE6ABhBAEEALwGSCkF/ajsBkgogA0EAKAKoCkECajYCDEEAQQAvAZAKQX9qOwGQCg8LQQBBACgCqApBfmo2AqgKDwsCQCAEQQFzIAJB+wBHcg0AQQAoAqgKIQJBAC8BkgoNBQNAAkACQAJAIAJBACgCrApPDQBBARAvIgJBIkYNASACQSdGDQEgAkH9AEcNAkEAQQAoAqgKQQJqNgKoCgtBARAvIQNBACgCqAohAgJAIANB5gBHDQAgAkECakGsCEEGEDUNBwtBACACQQhqNgKoCgJAQQEQLyICQSJGDQAgAkEnRw0HCyAAIAJBABAxDwsgAhAgC0EAQQAoAqgKQQJqIgI2AqgKDAALCwJAAkAgAkFZag4EAwEBAwALIAJBIkYNAgtBACgCqAohBgsgBiABRw0AQQAgAEEKajYCqAoPCyACQSpHIAdxDQNBAC8BkgpB//8DcQ0DQQAoAqgKIQJBACgCrAohAQNAIAIgAU8NAQJAAkAgAi8BACIDQSdGDQAgA0EiRw0BCyAAIAMgCBAxDwtBACACQQJqIgI2AqgKDAALCxArCw8LQQAgAkF+ajYCqAoPC0EAQQAoAqgKQX5qNgKoCgtHAQN/QQAoAqgKQQJqIQBBACgCrAohAQJAA0AgACICQX5qIAFPDQEgAkECaiEAIAIvAQBBdmoOBAEAAAEACwtBACACNgKoCguYAQEDf0EAQQAoAqgKIgFBAmo2AqgKIAFBBmohAUEAKAKsCiECA0ACQAJAAkAgAUF8aiACTw0AIAFBfmovAQAhAwJAAkAgAA0AIANBKkYNASADQXZqDgQCBAQCBAsgA0EqRw0DCyABLwEAQS9HDQJBACABQX5qNgKoCgwBCyABQX5qIQELQQAgATYCqAoPCyABQQJqIQEMAAsLiAEBBH9BACgCqAohAUEAKAKsCiECAkACQANAIAEiA0ECaiEBIAMgAk8NASABLwEAIgQgAEYNAgJAIARB3ABGDQAgBEF2ag4EAgEBAgELIANBBGohASADLwEEQQ1HDQAgA0EGaiABIAMvAQZBCkYbIQEMAAsLQQAgATYCqAoQKw8LQQAgATYCqAoLbAEBfwJAAkAgAEFfaiIBQQVLDQBBASABdEExcQ0BCyAAQUZqQf//A3FBBkkNACAAQSlHIABBWGpB//8DcUEHSXENAAJAIABBpX9qDgQBAAABAAsgAEH9AEcgAEGFf2pB//8DcUEESXEPC0EBCy4BAX9BASEBAkAgAEGcCUEFECMNACAAQZYIQQMQIw0AIABBpglBAhAjIQELIAELRgEDf0EAIQMCQCAAIAJBAXQiAmsiBEECaiIAQQAoAtAJIgVJDQAgACABIAIQNQ0AAkAgACAFRw0AQQEPCyAEECwhAwsgAwuDAQECf0EBIQECQAJAAkACQAJAAkAgAC8BACICQUVqDgQFBAQBAAsCQCACQZt/ag4EAwQEAgALIAJBKUYNBCACQfkARw0DIABBfmpBsglBBhAjDwsgAEF+ai8BAEE9Rg8LIABBfmpBqglBBBAjDwsgAEF+akG+CUEDECMPC0EAIQELIAELtAMBAn9BACEBAkACQAJAAkACQAJAAkACQAJAAkAgAC8BAEGcf2oOFAABAgkJCQkDCQkEBQkJBgkHCQkICQsCQAJAIABBfmovAQBBl39qDgQACgoBCgsgAEF8akHACEECECMPCyAAQXxqQcQIQQMQIw8LAkACQAJAIABBfmovAQBBjX9qDgMAAQIKCwJAIABBfGovAQAiAkHhAEYNACACQewARw0KIABBempB5QAQLQ8LIABBempB4wAQLQ8LIABBfGpByghBBBAjDwsgAEF8akHSCEEGECMPCyAAQX5qLwEAQe8ARw0GIABBfGovAQBB5QBHDQYCQCAAQXpqLwEAIgJB8ABGDQAgAkHjAEcNByAAQXhqQd4IQQYQIw8LIABBeGpB6ghBAhAjDwsgAEF+akHuCEEEECMPC0EBIQEgAEF+aiIAQekAEC0NBCAAQfYIQQUQIw8LIABBfmpB5AAQLQ8LIABBfmpBgAlBBxAjDwsgAEF+akGOCUEEECMPCwJAIABBfmovAQAiAkHvAEYNACACQeUARw0BIABBfGpB7gAQLQ8LIABBfGpBlglBAxAjIQELIAELNAEBf0EBIQECQCAAQXdqQf//A3FBBUkNACAAQYABckGgAUYNACAAQS5HIAAQLnEhAQsgAQswAQF/AkACQCAAQXdqIgFBF0sNAEEBIAF0QY2AgARxDQELIABBoAFGDQBBAA8LQQELTgECf0EAIQECQAJAIAAvAQAiAkHlAEYNACACQesARw0BIABBfmpB7ghBBBAjDwsgAEF+ai8BAEH1AEcNACAAQXxqQdIIQQYQIyEBCyABC94BAQR/QQAoAqgKIQBBACgCrAohAQJAAkACQANAIAAiAkECaiEAIAIgAU8NAQJAAkACQCAALwEAIgNBpH9qDgUCAwMDAQALIANBJEcNAiACLwEEQfsARw0CQQAgAkEEaiIANgKoCkEAQQAvAZIKIgJBAWo7AZIKQQAoApwKIAJBA3RqIgJBBDYCACACIAA2AgQPC0EAIAA2AqgKQQBBAC8BkgpBf2oiADsBkgpBACgCnAogAEH//wNxQQN0aigCAEEDRw0DDAQLIAJBBGohAAwACwtBACAANgKoCgsQKwsLcAECfwJAAkADQEEAQQAoAqgKIgBBAmoiATYCqAogAEEAKAKsCk8NAQJAAkACQCABLwEAIgFBpX9qDgIBAgALAkAgAUF2ag4EBAMDBAALIAFBL0cNAgwECxA0GgwBC0EAIABBBGo2AqgKDAALCxArCws1AQF/QQBBAToA8AlBACgCqAohAEEAQQAoAqwKQQJqNgKoCkEAIABBACgC0AlrQQF1NgKECgtDAQJ/QQEhAQJAIAAvAQAiAkF3akH//wNxQQVJDQAgAkGAAXJBoAFGDQBBACEBIAIQLkUNACACQS5HIAAQMHIPCyABCz0BAn9BACECAkBBACgC0AkiAyAASw0AIAAvAQAgAUcNAAJAIAMgAEcNAEEBDwsgAEF+ai8BABAmIQILIAILaAECf0EBIQECQAJAIABBX2oiAkEFSw0AQQEgAnRBMXENAQsgAEH4/wNxQShGDQAgAEFGakH//wNxQQZJDQACQCAAQaV/aiICQQNLDQAgAkEBRw0BCyAAQYV/akH//wNxQQRJIQELIAELnAEBA39BACgCqAohAQJAA0ACQAJAIAEvAQAiAkEvRw0AAkAgAS8BAiIBQSpGDQAgAUEvRw0EEB4MAgsgABAfDAELAkACQCAARQ0AIAJBd2oiAUEXSw0BQQEgAXRBn4CABHFFDQEMAgsgAhAnRQ0DDAELIAJBoAFHDQILQQBBACgCqAoiA0ECaiIBNgKoCiADQQAoAqwKSQ0ACwsgAgsxAQF/QQAhAQJAIAAvAQBBLkcNACAAQX5qLwEAQS5HDQAgAEF8ai8BAEEuRiEBCyABC9sEAQV/AkAgAUEiRg0AIAFBJ0YNABArDwtBACgCqAohAyABECAgACADQQJqQQAoAqgKQQAoAsQJEAECQCACQQFIDQBBACgC5AlBBEEGIAJBAUYbNgIcC0EAQQAoAqgKQQJqNgKoCkEAEC8hAkEAKAKoCiEBAkACQCACQfcARw0AIAEvAQJB6QBHDQAgAS8BBEH0AEcNACABLwEGQegARg0BC0EAIAFBfmo2AqgKDwtBACABQQhqNgKoCgJAQQEQL0H7AEYNAEEAIAE2AqgKDwtBACgCqAoiBCEDQQAhAANAQQAgA0ECajYCqAoCQAJAAkACQEEBEC8iAkEnRw0AQQAoAqgKIQVBJxAgQQAoAqgKQQJqIQMMAQtBACgCqAohBSACQSJHDQFBIhAgQQAoAqgKQQJqIQMLQQAgAzYCqApBARAvIQIMAQsgAhAyIQJBACgCqAohAwsCQCACQTpGDQBBACABNgKoCg8LQQBBACgCqApBAmo2AqgKAkBBARAvIgJBIkYNACACQSdGDQBBACABNgKoCg8LQQAoAqgKIQYgAhAgQQBBACgC/AkiAkEUajYC/AlBACgCqAohByACIAU2AgAgAkEANgIQIAIgBjYCCCACIAM2AgQgAiAHQQJqNgIMQQBBACgCqApBAmo2AqgKIABBEGpBACgC5AlBIGogABsgAjYCAAJAAkBBARAvIgBBLEYNACAAQf0ARg0BQQAgATYCqAoPC0EAQQAoAqgKQQJqIgM2AqgKIAIhAAwBCwtBACgC5AkiASAENgIQIAFBACgCqApBAmo2AgwLbQECfwJAAkADQAJAIABB//8DcSIBQXdqIgJBF0sNAEEBIAJ0QZ+AgARxDQILIAFBoAFGDQEgACECIAEQLg0CQQAhAkEAQQAoAqgKIgBBAmo2AqgKIAAvAQIiAA0ADAILCyAAIQILIAJB//8DcQurAQEEfwJAAkBBACgCqAoiAi8BACIDQeEARg0AIAEhBCAAIQUMAQtBACACQQRqNgKoCkEBEC8hAkEAKAKoCiEFAkACQCACQSJGDQAgAkEnRg0AIAIQMhpBACgCqAohBAwBCyACECBBAEEAKAKoCkECaiIENgKoCgtBARAvIQNBACgCqAohAgsCQCACIAVGDQAgBSAEQQAgACAAIAFGIgIbQQAgASACGxACCyADC3IBBH9BACgCqAohAEEAKAKsCiEBAkACQANAIABBAmohAiAAIAFPDQECQAJAIAIvAQAiA0Gkf2oOAgEEAAsgAiEAIANBdmoOBAIBAQIBCyAAQQRqIQAMAAsLQQAgAjYCqAoQK0EADwtBACACNgKoCkHdAAtJAQN/QQAhAwJAIAJFDQACQANAIAAtAAAiBCABLQAAIgVHDQEgAUEBaiEBIABBAWohACACQX9qIgINAAwCCwsgBCAFayEDCyADCwviAQIAQYAIC8QBAAB4AHAAbwByAHQAbQBwAG8AcgB0AGYAbwByAGUAdABhAG8AdQByAGMAZQByAG8AbQB1AG4AYwB0AGkAbwBuAHYAbwB5AGkAZQBkAGUAbABlAGMAbwBuAHQAaQBuAGkAbgBzAHQAYQBuAHQAeQBiAHIAZQBhAHIAZQB0AHUAcgBkAGUAYgB1AGcAZwBlAGEAdwBhAGkAdABoAHIAdwBoAGkAbABlAGkAZgBjAGEAdABjAGYAaQBuAGEAbABsAGUAbABzAABBxAkLEAEAAAACAAAAAAQAADA5AAA=", "undefined" != typeof Buffer ? Buffer.from(A, "base64") : Uint8Array.from(atob(A), ((A2) => A2.charCodeAt(0)));
  var A;
};
WebAssembly.compile(E()).then(WebAssembly.instantiate).then((({ exports: A }) => {
}));
function hasActionPayload(locals) {
  return "_actionPayload" in locals;
}
function createGetActionResult(locals) {
  return (actionFn) => {
    if (!hasActionPayload(locals) || actionFn.toString() !== getActionQueryString(locals._actionPayload.actionName)) {
      return void 0;
    }
    return deserializeActionResult(locals._actionPayload.actionResult);
  };
}
function createCallAction(context) {
  return (baseAction, input) => {
    Reflect.set(context, ACTION_API_CONTEXT_SYMBOL, true);
    const action = baseAction.bind(context);
    return action(input);
  };
}
function parseLocale(header) {
  if (header === "*") {
    return [{ locale: header, qualityValue: void 0 }];
  }
  const result = [];
  const localeValues = header.split(",").map((str) => str.trim());
  for (const localeValue of localeValues) {
    const split = localeValue.split(";").map((str) => str.trim());
    const localeName = split[0];
    const qualityValue = split[1];
    if (!split) {
      continue;
    }
    if (qualityValue && qualityValue.startsWith("q=")) {
      const qualityValueAsFloat = Number.parseFloat(qualityValue.slice("q=".length));
      if (Number.isNaN(qualityValueAsFloat) || qualityValueAsFloat > 1) {
        result.push({
          locale: localeName,
          qualityValue: void 0
        });
      } else {
        result.push({
          locale: localeName,
          qualityValue: qualityValueAsFloat
        });
      }
    } else {
      result.push({
        locale: localeName,
        qualityValue: void 0
      });
    }
  }
  return result;
}
function sortAndFilterLocales(browserLocaleList, locales) {
  const normalizedLocales = getAllCodes(locales).map(normalizeTheLocale);
  return browserLocaleList.filter((browserLocale) => {
    if (browserLocale.locale !== "*") {
      return normalizedLocales.includes(normalizeTheLocale(browserLocale.locale));
    }
    return true;
  }).sort((a2, b) => {
    if (a2.qualityValue && b.qualityValue) {
      return Math.sign(b.qualityValue - a2.qualityValue);
    }
    return 0;
  });
}
function computePreferredLocale(request, locales) {
  const acceptHeader = request.headers.get("Accept-Language");
  let result = void 0;
  if (acceptHeader) {
    const browserLocaleList = sortAndFilterLocales(parseLocale(acceptHeader), locales);
    const firstResult = browserLocaleList.at(0);
    if (firstResult && firstResult.locale !== "*") {
      for (const currentLocale of locales) {
        if (typeof currentLocale === "string") {
          if (normalizeTheLocale(currentLocale) === normalizeTheLocale(firstResult.locale)) {
            result = currentLocale;
            break;
          }
        } else {
          for (const currentCode of currentLocale.codes) {
            if (normalizeTheLocale(currentCode) === normalizeTheLocale(firstResult.locale)) {
              result = currentCode;
              break;
            }
          }
        }
      }
    }
  }
  return result;
}
function computePreferredLocaleList(request, locales) {
  const acceptHeader = request.headers.get("Accept-Language");
  let result = [];
  if (acceptHeader) {
    const browserLocaleList = sortAndFilterLocales(parseLocale(acceptHeader), locales);
    if (browserLocaleList.length === 1 && browserLocaleList.at(0).locale === "*") {
      return getAllCodes(locales);
    } else if (browserLocaleList.length > 0) {
      for (const browserLocale of browserLocaleList) {
        for (const loopLocale of locales) {
          if (typeof loopLocale === "string") {
            if (normalizeTheLocale(loopLocale) === normalizeTheLocale(browserLocale.locale)) {
              result.push(loopLocale);
            }
          } else {
            for (const code of loopLocale.codes) {
              if (code === browserLocale.locale) {
                result.push(code);
              }
            }
          }
        }
      }
    }
  }
  return result;
}
function computeCurrentLocale(pathname, locales, defaultLocale) {
  for (const segment of pathname.split("/").map(normalizeThePath)) {
    for (const locale of locales) {
      if (typeof locale === "string") {
        if (!segment.includes(locale)) continue;
        if (normalizeTheLocale(locale) === normalizeTheLocale(segment)) {
          return locale;
        }
      } else {
        if (locale.path === segment) {
          return locale.codes.at(0);
        } else {
          for (const code of locale.codes) {
            if (normalizeTheLocale(code) === normalizeTheLocale(segment)) {
              return code;
            }
          }
        }
      }
    }
  }
  for (const locale of locales) {
    if (typeof locale === "string") {
      if (locale === defaultLocale) {
        return locale;
      }
    } else {
      if (locale.path === defaultLocale) {
        return locale.codes.at(0);
      }
    }
  }
}
async function renderEndpoint(mod, context, isPrerendered, logger) {
  const { request, url } = context;
  const method = request.method.toUpperCase();
  let handler = mod[method] ?? mod["ALL"];
  if (!handler && method === "HEAD" && mod["GET"]) {
    handler = mod["GET"];
  }
  if (isPrerendered && !["GET", "HEAD"].includes(method)) {
    logger.warn(
      "router",
      `${url.pathname} ${s.bold(
        method
      )} requests are not available in static endpoints. Mark this page as server-rendered (\`export const prerender = false;\`) or update your config to \`output: 'server'\` to make all your pages server-rendered by default.`
    );
  }
  if (handler === void 0) {
    logger.warn(
      "router",
      `No API Route handler exists for the method "${method}" for the route "${url.pathname}".
Found handlers: ${Object.keys(mod).map((exp) => JSON.stringify(exp)).join(", ")}
` + ("all" in mod ? `One of the exported handlers is "all" (lowercase), did you mean to export 'ALL'?
` : "")
    );
    return new Response(null, { status: 404 });
  }
  if (typeof handler !== "function") {
    logger.error(
      "router",
      `The route "${url.pathname}" exports a value for the method "${method}", but it is of the type ${typeof handler} instead of a function.`
    );
    return new Response(null, { status: 500 });
  }
  let response = await handler.call(mod, context);
  if (!response || response instanceof Response === false) {
    throw new AstroError(EndpointDidNotReturnAResponse);
  }
  if (REROUTABLE_STATUS_CODES.includes(response.status)) {
    try {
      response.headers.set(REROUTE_DIRECTIVE_HEADER, "no");
    } catch (err) {
      if (err.message?.includes("immutable")) {
        response = new Response(response.body, response);
        response.headers.set(REROUTE_DIRECTIVE_HEADER, "no");
      } else {
        throw err;
      }
    }
  }
  if (method === "HEAD") {
    return new Response(null, response);
  }
  return response;
}
const { replace } = "";
const ca = /[&<>'"]/g;
const esca = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "'": "&#39;",
  '"': "&quot;"
};
const pe = (m) => esca[m];
const escape = (es) => replace.call(es, ca, pe);
function isPromise(value) {
  return !!value && typeof value === "object" && "then" in value && typeof value.then === "function";
}
async function* streamAsyncIterator(stream) {
  const reader = stream.getReader();
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) return;
      yield value;
    }
  } finally {
    reader.releaseLock();
  }
}
const escapeHTML = escape;
class HTMLBytes extends Uint8Array {
}
Object.defineProperty(HTMLBytes.prototype, Symbol.toStringTag, {
  get() {
    return "HTMLBytes";
  }
});
class HTMLString extends String {
  get [Symbol.toStringTag]() {
    return "HTMLString";
  }
}
const markHTMLString = (value) => {
  if (value instanceof HTMLString) {
    return value;
  }
  if (typeof value === "string") {
    return new HTMLString(value);
  }
  return value;
};
function isHTMLString(value) {
  return value instanceof HTMLString;
}
function markHTMLBytes(bytes) {
  return new HTMLBytes(bytes);
}
function hasGetReader(obj) {
  return typeof obj.getReader === "function";
}
async function* unescapeChunksAsync(iterable) {
  if (hasGetReader(iterable)) {
    for await (const chunk of streamAsyncIterator(iterable)) {
      yield unescapeHTML(chunk);
    }
  } else {
    for await (const chunk of iterable) {
      yield unescapeHTML(chunk);
    }
  }
}
function* unescapeChunks(iterable) {
  for (const chunk of iterable) {
    yield unescapeHTML(chunk);
  }
}
function unescapeHTML(str) {
  if (!!str && typeof str === "object") {
    if (str instanceof Uint8Array) {
      return markHTMLBytes(str);
    } else if (str instanceof Response && str.body) {
      const body = str.body;
      return unescapeChunksAsync(body);
    } else if (typeof str.then === "function") {
      return Promise.resolve(str).then((value) => {
        return unescapeHTML(value);
      });
    } else if (str[/* @__PURE__ */ Symbol.for("astro:slot-string")]) {
      return str;
    } else if (Symbol.iterator in str) {
      return unescapeChunks(str);
    } else if (Symbol.asyncIterator in str || hasGetReader(str)) {
      return unescapeChunksAsync(str);
    }
  }
  return markHTMLString(str);
}
const AstroJSX = "astro:jsx";
function isVNode(vnode) {
  return vnode && typeof vnode === "object" && vnode[AstroJSX];
}
function isAstroComponentFactory(obj) {
  return obj == null ? false : obj.isAstroComponentFactory === true;
}
function isAPropagatingComponent(result, factory) {
  const hint = getPropagationHint(result, factory);
  return hint === "in-tree" || hint === "self";
}
function getPropagationHint(result, factory) {
  let hint = factory.propagation || "none";
  if (factory.moduleId && result.componentMetadata.has(factory.moduleId) && hint === "none") {
    hint = result.componentMetadata.get(factory.moduleId).propagation;
  }
  return hint;
}
function r(e2) {
  var t2, f, n2 = "";
  if ("string" == typeof e2 || "number" == typeof e2) n2 += e2;
  else if ("object" == typeof e2) if (Array.isArray(e2)) {
    var o2 = e2.length;
    for (t2 = 0; t2 < o2; t2++) e2[t2] && (f = r(e2[t2])) && (n2 && (n2 += " "), n2 += f);
  } else for (f in e2) e2[f] && (n2 && (n2 += " "), n2 += f);
  return n2;
}
function clsx() {
  for (var e2, t2, f = 0, n2 = "", o2 = arguments.length; f < o2; f++) (e2 = arguments[f]) && (t2 = r(e2)) && (n2 && (n2 += " "), n2 += t2);
  return n2;
}
const PROP_TYPE = {
  Value: 0,
  JSON: 1,
  // Actually means Array
  RegExp: 2,
  Date: 3,
  Map: 4,
  Set: 5,
  BigInt: 6,
  URL: 7,
  Uint8Array: 8,
  Uint16Array: 9,
  Uint32Array: 10,
  Infinity: 11
};
function serializeArray(value, metadata = {}, parents = /* @__PURE__ */ new WeakSet()) {
  if (parents.has(value)) {
    throw new Error(`Cyclic reference detected while serializing props for <${metadata.displayName} client:${metadata.hydrate}>!

Cyclic references cannot be safely serialized for client-side usage. Please remove the cyclic reference.`);
  }
  parents.add(value);
  const serialized = value.map((v) => {
    return convertToSerializedForm(v, metadata, parents);
  });
  parents.delete(value);
  return serialized;
}
function serializeObject(value, metadata = {}, parents = /* @__PURE__ */ new WeakSet()) {
  if (parents.has(value)) {
    throw new Error(`Cyclic reference detected while serializing props for <${metadata.displayName} client:${metadata.hydrate}>!

Cyclic references cannot be safely serialized for client-side usage. Please remove the cyclic reference.`);
  }
  parents.add(value);
  const serialized = Object.fromEntries(
    Object.entries(value).map(([k, v]) => {
      return [k, convertToSerializedForm(v, metadata, parents)];
    })
  );
  parents.delete(value);
  return serialized;
}
function convertToSerializedForm(value, metadata = {}, parents = /* @__PURE__ */ new WeakSet()) {
  const tag = Object.prototype.toString.call(value);
  switch (tag) {
    case "[object Date]": {
      return [PROP_TYPE.Date, value.toISOString()];
    }
    case "[object RegExp]": {
      return [PROP_TYPE.RegExp, value.source];
    }
    case "[object Map]": {
      return [PROP_TYPE.Map, serializeArray(Array.from(value), metadata, parents)];
    }
    case "[object Set]": {
      return [PROP_TYPE.Set, serializeArray(Array.from(value), metadata, parents)];
    }
    case "[object BigInt]": {
      return [PROP_TYPE.BigInt, value.toString()];
    }
    case "[object URL]": {
      return [PROP_TYPE.URL, value.toString()];
    }
    case "[object Array]": {
      return [PROP_TYPE.JSON, serializeArray(value, metadata, parents)];
    }
    case "[object Uint8Array]": {
      return [PROP_TYPE.Uint8Array, Array.from(value)];
    }
    case "[object Uint16Array]": {
      return [PROP_TYPE.Uint16Array, Array.from(value)];
    }
    case "[object Uint32Array]": {
      return [PROP_TYPE.Uint32Array, Array.from(value)];
    }
    default: {
      if (value !== null && typeof value === "object") {
        return [PROP_TYPE.Value, serializeObject(value, metadata, parents)];
      }
      if (value === Number.POSITIVE_INFINITY) {
        return [PROP_TYPE.Infinity, 1];
      }
      if (value === Number.NEGATIVE_INFINITY) {
        return [PROP_TYPE.Infinity, -1];
      }
      if (value === void 0) {
        return [PROP_TYPE.Value];
      }
      return [PROP_TYPE.Value, value];
    }
  }
}
function serializeProps(props, metadata) {
  const serialized = JSON.stringify(serializeObject(props, metadata));
  return serialized;
}
const transitionDirectivesToCopyOnIsland = Object.freeze([
  "data-astro-transition-scope",
  "data-astro-transition-persist",
  "data-astro-transition-persist-props"
]);
function extractDirectives(inputProps, clientDirectives) {
  let extracted = {
    isPage: false,
    hydration: null,
    props: {},
    propsWithoutTransitionAttributes: {}
  };
  for (const [key, value] of Object.entries(inputProps)) {
    if (key.startsWith("server:")) {
      if (key === "server:root") {
        extracted.isPage = true;
      }
    }
    if (key.startsWith("client:")) {
      if (!extracted.hydration) {
        extracted.hydration = {
          directive: "",
          value: "",
          componentUrl: "",
          componentExport: { value: "" }
        };
      }
      switch (key) {
        case "client:component-path": {
          extracted.hydration.componentUrl = value;
          break;
        }
        case "client:component-export": {
          extracted.hydration.componentExport.value = value;
          break;
        }
        // This is a special prop added to prove that the client hydration method
        // was added statically.
        case "client:component-hydration": {
          break;
        }
        case "client:display-name": {
          break;
        }
        default: {
          extracted.hydration.directive = key.split(":")[1];
          extracted.hydration.value = value;
          if (!clientDirectives.has(extracted.hydration.directive)) {
            const hydrationMethods = Array.from(clientDirectives.keys()).map((d) => `client:${d}`).join(", ");
            throw new Error(
              `Error: invalid hydration directive "${key}". Supported hydration methods: ${hydrationMethods}`
            );
          }
          if (extracted.hydration.directive === "media" && typeof extracted.hydration.value !== "string") {
            throw new AstroError(MissingMediaQueryDirective);
          }
          break;
        }
      }
    } else {
      extracted.props[key] = value;
      if (!transitionDirectivesToCopyOnIsland.includes(key)) {
        extracted.propsWithoutTransitionAttributes[key] = value;
      }
    }
  }
  for (const sym of Object.getOwnPropertySymbols(inputProps)) {
    extracted.props[sym] = inputProps[sym];
    extracted.propsWithoutTransitionAttributes[sym] = inputProps[sym];
  }
  return extracted;
}
async function generateHydrateScript(scriptOptions, metadata) {
  const { renderer, result, astroId, props, attrs } = scriptOptions;
  const { hydrate, componentUrl, componentExport } = metadata;
  if (!componentExport.value) {
    throw new AstroError({
      ...NoMatchingImport,
      message: NoMatchingImport.message(metadata.displayName)
    });
  }
  const island = {
    children: "",
    props: {
      // This is for HMR, probably can avoid it in prod
      uid: astroId
    }
  };
  if (attrs) {
    for (const [key, value] of Object.entries(attrs)) {
      island.props[key] = escapeHTML(value);
    }
  }
  island.props["component-url"] = await result.resolve(decodeURI(componentUrl));
  if (renderer.clientEntrypoint) {
    island.props["component-export"] = componentExport.value;
    island.props["renderer-url"] = await result.resolve(
      decodeURI(renderer.clientEntrypoint.toString())
    );
    island.props["props"] = escapeHTML(serializeProps(props, metadata));
  }
  island.props["ssr"] = "";
  island.props["client"] = hydrate;
  let beforeHydrationUrl = await result.resolve("astro:scripts/before-hydration.js");
  if (beforeHydrationUrl.length) {
    island.props["before-hydration-url"] = beforeHydrationUrl;
  }
  island.props["opts"] = escapeHTML(
    JSON.stringify({
      name: metadata.displayName,
      value: metadata.hydrateArgs || ""
    })
  );
  transitionDirectivesToCopyOnIsland.forEach((name) => {
    if (typeof props[name] !== "undefined") {
      island.props[name] = props[name];
    }
  });
  return island;
}
const dictionary = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY";
const binary = dictionary.length;
function bitwise(str) {
  let hash = 0;
  if (str.length === 0) return hash;
  for (let i2 = 0; i2 < str.length; i2++) {
    const ch = str.charCodeAt(i2);
    hash = (hash << 5) - hash + ch;
    hash = hash & hash;
  }
  return hash;
}
function shorthash(text) {
  let num;
  let result = "";
  let integer = bitwise(text);
  const sign = integer < 0 ? "Z" : "";
  integer = Math.abs(integer);
  while (integer >= binary) {
    num = integer % binary;
    integer = Math.floor(integer / binary);
    result = dictionary[num] + result;
  }
  if (integer > 0) {
    result = dictionary[integer] + result;
  }
  return sign + result;
}
const headAndContentSym = /* @__PURE__ */ Symbol.for("astro.headAndContent");
function isHeadAndContent(obj) {
  return typeof obj === "object" && obj !== null && !!obj[headAndContentSym];
}
function createThinHead() {
  return {
    [headAndContentSym]: true
  };
}
var astro_island_prebuilt_default = `(()=>{var A=Object.defineProperty;var g=(i,o,a)=>o in i?A(i,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[o]=a;var d=(i,o,a)=>g(i,typeof o!="symbol"?o+"":o,a);{let i={0:t=>m(t),1:t=>a(t),2:t=>new RegExp(t),3:t=>new Date(t),4:t=>new Map(a(t)),5:t=>new Set(a(t)),6:t=>BigInt(t),7:t=>new URL(t),8:t=>new Uint8Array(t),9:t=>new Uint16Array(t),10:t=>new Uint32Array(t),11:t=>Number.POSITIVE_INFINITY*t},o=t=>{let[l,e]=t;return l in i?i[l](e):void 0},a=t=>t.map(o),m=t=>typeof t!="object"||t===null?t:Object.fromEntries(Object.entries(t).map(([l,e])=>[l,o(e)]));class y extends HTMLElement{constructor(){super(...arguments);d(this,"Component");d(this,"hydrator");d(this,"hydrate",async()=>{var b;if(!this.hydrator||!this.isConnected)return;let e=(b=this.parentElement)==null?void 0:b.closest("astro-island[ssr]");if(e){e.addEventListener("astro:hydrate",this.hydrate,{once:!0});return}let c=this.querySelectorAll("astro-slot"),n={},h=this.querySelectorAll("template[data-astro-template]");for(let r of h){let s=r.closest(this.tagName);s!=null&&s.isSameNode(this)&&(n[r.getAttribute("data-astro-template")||"default"]=r.innerHTML,r.remove())}for(let r of c){let s=r.closest(this.tagName);s!=null&&s.isSameNode(this)&&(n[r.getAttribute("name")||"default"]=r.innerHTML)}let p;try{p=this.hasAttribute("props")?m(JSON.parse(this.getAttribute("props"))):{}}catch(r){let s=this.getAttribute("component-url")||"<unknown>",v=this.getAttribute("component-export");throw v&&(s+=\` (export \${v})\`),console.error(\`[hydrate] Error parsing props for component \${s}\`,this.getAttribute("props"),r),r}let u;await this.hydrator(this)(this.Component,p,n,{client:this.getAttribute("client")}),this.removeAttribute("ssr"),this.dispatchEvent(new CustomEvent("astro:hydrate"))});d(this,"unmount",()=>{this.isConnected||this.dispatchEvent(new CustomEvent("astro:unmount"))})}disconnectedCallback(){document.removeEventListener("astro:after-swap",this.unmount),document.addEventListener("astro:after-swap",this.unmount,{once:!0})}connectedCallback(){if(!this.hasAttribute("await-children")||document.readyState==="interactive"||document.readyState==="complete")this.childrenConnectedCallback();else{let e=()=>{document.removeEventListener("DOMContentLoaded",e),c.disconnect(),this.childrenConnectedCallback()},c=new MutationObserver(()=>{var n;((n=this.lastChild)==null?void 0:n.nodeType)===Node.COMMENT_NODE&&this.lastChild.nodeValue==="astro:end"&&(this.lastChild.remove(),e())});c.observe(this,{childList:!0}),document.addEventListener("DOMContentLoaded",e)}}async childrenConnectedCallback(){let e=this.getAttribute("before-hydration-url");e&&await import(e),this.start()}async start(){let e=JSON.parse(this.getAttribute("opts")),c=this.getAttribute("client");if(Astro[c]===void 0){window.addEventListener(\`astro:\${c}\`,()=>this.start(),{once:!0});return}try{await Astro[c](async()=>{let n=this.getAttribute("renderer-url"),[h,{default:p}]=await Promise.all([import(this.getAttribute("component-url")),n?import(n):()=>()=>{}]),u=this.getAttribute("component-export")||"default";if(!u.includes("."))this.Component=h[u];else{this.Component=h;for(let f of u.split("."))this.Component=this.Component[f]}return this.hydrator=p,this.hydrate},e,this)}catch(n){console.error(\`[astro-island] Error hydrating \${this.getAttribute("component-url")}\`,n)}}attributeChangedCallback(){this.hydrate()}}d(y,"observedAttributes",["props"]),customElements.get("astro-island")||customElements.define("astro-island",y)}})();`;
const ISLAND_STYLES = "astro-island,astro-slot,astro-static-slot{display:contents}";
function determineIfNeedsHydrationScript(result) {
  if (result._metadata.hasHydrationScript) {
    return false;
  }
  return result._metadata.hasHydrationScript = true;
}
function determinesIfNeedsDirectiveScript(result, directive) {
  if (result._metadata.hasDirectives.has(directive)) {
    return false;
  }
  result._metadata.hasDirectives.add(directive);
  return true;
}
function getDirectiveScriptText(result, directive) {
  const clientDirectives = result.clientDirectives;
  const clientDirective = clientDirectives.get(directive);
  if (!clientDirective) {
    throw new Error(`Unknown directive: ${directive}`);
  }
  return clientDirective;
}
function getPrescripts(result, type, directive) {
  switch (type) {
    case "both":
      return `<style>${ISLAND_STYLES}</style><script>${getDirectiveScriptText(result, directive)}<\/script><script>${astro_island_prebuilt_default}<\/script>`;
    case "directive":
      return `<script>${getDirectiveScriptText(result, directive)}<\/script>`;
  }
}
function renderCspContent(result) {
  const finalScriptHashes = /* @__PURE__ */ new Set();
  const finalStyleHashes = /* @__PURE__ */ new Set();
  for (const scriptHash of result.scriptHashes) {
    finalScriptHashes.add(`'${scriptHash}'`);
  }
  for (const styleHash of result.styleHashes) {
    finalStyleHashes.add(`'${styleHash}'`);
  }
  for (const styleHash of result._metadata.extraStyleHashes) {
    finalStyleHashes.add(`'${styleHash}'`);
  }
  for (const scriptHash of result._metadata.extraScriptHashes) {
    finalScriptHashes.add(`'${scriptHash}'`);
  }
  let directives;
  if (result.directives.length > 0) {
    directives = result.directives.join(";") + ";";
  }
  let scriptResources = "'self'";
  if (result.scriptResources.length > 0) {
    scriptResources = result.scriptResources.map((r2) => `${r2}`).join(" ");
  }
  let styleResources = "'self'";
  if (result.styleResources.length > 0) {
    styleResources = result.styleResources.map((r2) => `${r2}`).join(" ");
  }
  const strictDynamic = result.isStrictDynamic ? ` 'strict-dynamic'` : "";
  const scriptSrc = `script-src ${scriptResources} ${Array.from(finalScriptHashes).join(" ")}${strictDynamic};`;
  const styleSrc = `style-src ${styleResources} ${Array.from(finalStyleHashes).join(" ")};`;
  return [directives, scriptSrc, styleSrc].filter(Boolean).join(" ");
}
const RenderInstructionSymbol = /* @__PURE__ */ Symbol.for("astro:render");
function createRenderInstruction(instruction) {
  return Object.defineProperty(instruction, RenderInstructionSymbol, {
    value: true
  });
}
function isRenderInstruction(chunk) {
  return chunk && typeof chunk === "object" && chunk[RenderInstructionSymbol];
}
const voidElementNames = /^(area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/i;
const htmlBooleanAttributes = /^(?:allowfullscreen|async|autofocus|autoplay|checked|controls|default|defer|disabled|disablepictureinpicture|disableremoteplayback|formnovalidate|inert|loop|muted|nomodule|novalidate|open|playsinline|readonly|required|reversed|scoped|seamless|selected|itemscope)$/i;
const AMPERSAND_REGEX = /&/g;
const DOUBLE_QUOTE_REGEX = /"/g;
const STATIC_DIRECTIVES = /* @__PURE__ */ new Set(["set:html", "set:text"]);
const toIdent = (k) => k.trim().replace(/(?!^)\b\w|\s+|\W+/g, (match, index) => {
  if (/\W/.test(match)) return "";
  return index === 0 ? match : match.toUpperCase();
});
const toAttributeString = (value, shouldEscape = true) => shouldEscape ? String(value).replace(AMPERSAND_REGEX, "&#38;").replace(DOUBLE_QUOTE_REGEX, "&#34;") : value;
const kebab = (k) => k.toLowerCase() === k ? k : k.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
const toStyleString = (obj) => Object.entries(obj).filter(([_, v]) => typeof v === "string" && v.trim() || typeof v === "number").map(([k, v]) => {
  if (k[0] !== "-" && k[1] !== "-") return `${kebab(k)}:${v}`;
  return `${k}:${v}`;
}).join(";");
function defineScriptVars(vars) {
  let output = "";
  for (const [key, value] of Object.entries(vars)) {
    output += `const ${toIdent(key)} = ${JSON.stringify(value)?.replace(
      /<\/script>/g,
      "\\x3C/script>"
    )};
`;
  }
  return markHTMLString(output);
}
function formatList(values) {
  if (values.length === 1) {
    return values[0];
  }
  return `${values.slice(0, -1).join(", ")} or ${values[values.length - 1]}`;
}
function isCustomElement(tagName) {
  return tagName.includes("-");
}
function handleBooleanAttribute(key, value, shouldEscape, tagName) {
  if (tagName && isCustomElement(tagName)) {
    return markHTMLString(` ${key}="${toAttributeString(value, shouldEscape)}"`);
  }
  return markHTMLString(value ? ` ${key}` : "");
}
function addAttribute(value, key, shouldEscape = true, tagName = "") {
  if (value == null) {
    return "";
  }
  if (STATIC_DIRECTIVES.has(key)) {
    console.warn(`[astro] The "${key}" directive cannot be applied dynamically at runtime. It will not be rendered as an attribute.

Make sure to use the static attribute syntax (\`${key}={value}\`) instead of the dynamic spread syntax (\`{...{ "${key}": value }}\`).`);
    return "";
  }
  if (key === "class:list") {
    const listValue = toAttributeString(clsx(value), shouldEscape);
    if (listValue === "") {
      return "";
    }
    return markHTMLString(` ${key.slice(0, -5)}="${listValue}"`);
  }
  if (key === "style" && !(value instanceof HTMLString)) {
    if (Array.isArray(value) && value.length === 2) {
      return markHTMLString(
        ` ${key}="${toAttributeString(`${toStyleString(value[0])};${value[1]}`, shouldEscape)}"`
      );
    }
    if (typeof value === "object") {
      return markHTMLString(` ${key}="${toAttributeString(toStyleString(value), shouldEscape)}"`);
    }
  }
  if (key === "className") {
    return markHTMLString(` class="${toAttributeString(value, shouldEscape)}"`);
  }
  if (htmlBooleanAttributes.test(key)) {
    return handleBooleanAttribute(key, value, shouldEscape, tagName);
  }
  if (value === "") {
    return markHTMLString(` ${key}`);
  }
  if (key === "popover" && typeof value === "boolean") {
    return handleBooleanAttribute(key, value, shouldEscape, tagName);
  }
  if (key === "download" && typeof value === "boolean") {
    return handleBooleanAttribute(key, value, shouldEscape, tagName);
  }
  if (key === "hidden" && typeof value === "boolean") {
    return handleBooleanAttribute(key, value, shouldEscape, tagName);
  }
  return markHTMLString(` ${key}="${toAttributeString(value, shouldEscape)}"`);
}
function internalSpreadAttributes(values, shouldEscape = true, tagName) {
  let output = "";
  for (const [key, value] of Object.entries(values)) {
    output += addAttribute(value, key, shouldEscape, tagName);
  }
  return markHTMLString(output);
}
function renderElement$1(name, { props: _props, children = "" }, shouldEscape = true) {
  const { lang: _, "data-astro-id": astroId, "define:vars": defineVars, ...props } = _props;
  if (defineVars) {
    if (name === "style") {
      delete props["is:global"];
      delete props["is:scoped"];
    }
    if (name === "script") {
      delete props.hoist;
      children = defineScriptVars(defineVars) + "\n" + children;
    }
  }
  if ((children == null || children === "") && voidElementNames.test(name)) {
    return `<${name}${internalSpreadAttributes(props, shouldEscape, name)}>`;
  }
  return `<${name}${internalSpreadAttributes(props, shouldEscape, name)}>${children}</${name}>`;
}
const noop = () => {
};
class BufferedRenderer {
  chunks = [];
  renderPromise;
  destination;
  /**
   * Determines whether buffer has been flushed
   * to the final destination.
   */
  flushed = false;
  constructor(destination, renderFunction) {
    this.destination = destination;
    this.renderPromise = renderFunction(this);
    if (isPromise(this.renderPromise)) {
      Promise.resolve(this.renderPromise).catch(noop);
    }
  }
  write(chunk) {
    if (this.flushed) {
      this.destination.write(chunk);
    } else {
      this.chunks.push(chunk);
    }
  }
  flush() {
    if (this.flushed) {
      throw new Error("The render buffer has already been flushed.");
    }
    this.flushed = true;
    for (const chunk of this.chunks) {
      this.destination.write(chunk);
    }
    return this.renderPromise;
  }
}
function createBufferedRenderer(destination, renderFunction) {
  return new BufferedRenderer(destination, renderFunction);
}
const isNode = typeof process !== "undefined" && Object.prototype.toString.call(process) === "[object process]";
const isDeno = typeof Deno !== "undefined";
function promiseWithResolvers() {
  let resolve, reject;
  const promise = new Promise((_resolve, _reject) => {
    resolve = _resolve;
    reject = _reject;
  });
  return {
    promise,
    resolve,
    reject
  };
}
function stablePropsKey(props) {
  const keys = Object.keys(props).sort();
  let result = "{";
  for (let i2 = 0; i2 < keys.length; i2++) {
    if (i2 > 0) result += ",";
    result += JSON.stringify(keys[i2]) + ":" + JSON.stringify(props[keys[i2]]);
  }
  result += "}";
  return result;
}
function deduplicateElements(elements) {
  if (elements.length <= 1) return elements;
  const seen = /* @__PURE__ */ new Set();
  return elements.filter((item) => {
    const key = stablePropsKey(item.props) + item.children;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}
function renderAllHeadContent(result) {
  result._metadata.hasRenderedHead = true;
  let content = "";
  if (result.shouldInjectCspMetaTags && result.cspDestination === "meta") {
    content += renderElement$1(
      "meta",
      {
        props: {
          "http-equiv": "content-security-policy",
          content: renderCspContent(result)
        },
        children: ""
      },
      false
    );
  }
  const styles = deduplicateElements(Array.from(result.styles)).map(
    (style) => style.props.rel === "stylesheet" ? renderElement$1("link", style) : renderElement$1("style", style)
  );
  result.styles.clear();
  const scripts = deduplicateElements(Array.from(result.scripts)).map((script) => {
    if (result.userAssetsBase) {
      script.props.src = (result.base === "/" ? "" : result.base) + result.userAssetsBase + script.props.src;
    }
    return renderElement$1("script", script, false);
  });
  const links = deduplicateElements(Array.from(result.links)).map(
    (link) => renderElement$1("link", link, false)
  );
  content += styles.join("\n") + links.join("\n") + scripts.join("\n");
  if (result._metadata.extraHead.length > 0) {
    for (const part of result._metadata.extraHead) {
      content += part;
    }
  }
  return markHTMLString(content);
}
function renderHead() {
  return createRenderInstruction({ type: "head" });
}
function maybeRenderHead() {
  return createRenderInstruction({ type: "maybe-head" });
}
function encodeHexUpperCase(data) {
  let result = "";
  for (let i2 = 0; i2 < data.length; i2++) {
    result += alphabetUpperCase[data[i2] >> 4];
    result += alphabetUpperCase[data[i2] & 15];
  }
  return result;
}
function decodeHex(data) {
  if (data.length % 2 !== 0) {
    throw new Error("Invalid hex string");
  }
  const result = new Uint8Array(data.length / 2);
  for (let i2 = 0; i2 < data.length; i2 += 2) {
    if (!(data[i2] in decodeMap)) {
      throw new Error("Invalid character");
    }
    if (!(data[i2 + 1] in decodeMap)) {
      throw new Error("Invalid character");
    }
    result[i2 / 2] |= decodeMap[data[i2]] << 4;
    result[i2 / 2] |= decodeMap[data[i2 + 1]];
  }
  return result;
}
const alphabetUpperCase = "0123456789ABCDEF";
const decodeMap = {
  "0": 0,
  "1": 1,
  "2": 2,
  "3": 3,
  "4": 4,
  "5": 5,
  "6": 6,
  "7": 7,
  "8": 8,
  "9": 9,
  a: 10,
  A: 10,
  b: 11,
  B: 11,
  c: 12,
  C: 12,
  d: 13,
  D: 13,
  e: 14,
  E: 14,
  f: 15,
  F: 15
};
var EncodingPadding$1;
(function(EncodingPadding2) {
  EncodingPadding2[EncodingPadding2["Include"] = 0] = "Include";
  EncodingPadding2[EncodingPadding2["None"] = 1] = "None";
})(EncodingPadding$1 || (EncodingPadding$1 = {}));
var DecodingPadding$1;
(function(DecodingPadding2) {
  DecodingPadding2[DecodingPadding2["Required"] = 0] = "Required";
  DecodingPadding2[DecodingPadding2["Ignore"] = 1] = "Ignore";
})(DecodingPadding$1 || (DecodingPadding$1 = {}));
function encodeBase64(bytes) {
  return encodeBase64_internal(bytes, base64Alphabet, EncodingPadding.Include);
}
function encodeBase64_internal(bytes, alphabet, padding) {
  let result = "";
  for (let i2 = 0; i2 < bytes.byteLength; i2 += 3) {
    let buffer = 0;
    let bufferBitSize = 0;
    for (let j = 0; j < 3 && i2 + j < bytes.byteLength; j++) {
      buffer = buffer << 8 | bytes[i2 + j];
      bufferBitSize += 8;
    }
    for (let j = 0; j < 4; j++) {
      if (bufferBitSize >= 6) {
        result += alphabet[buffer >> bufferBitSize - 6 & 63];
        bufferBitSize -= 6;
      } else if (bufferBitSize > 0) {
        result += alphabet[buffer << 6 - bufferBitSize & 63];
        bufferBitSize = 0;
      } else if (padding === EncodingPadding.Include) {
        result += "=";
      }
    }
  }
  return result;
}
const base64Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function decodeBase64(encoded) {
  return decodeBase64_internal(encoded, base64DecodeMap, DecodingPadding.Required);
}
function decodeBase64_internal(encoded, decodeMap2, padding) {
  const result = new Uint8Array(Math.ceil(encoded.length / 4) * 3);
  let totalBytes = 0;
  for (let i2 = 0; i2 < encoded.length; i2 += 4) {
    let chunk = 0;
    let bitsRead = 0;
    for (let j = 0; j < 4; j++) {
      if (padding === DecodingPadding.Required && encoded[i2 + j] === "=") {
        continue;
      }
      if (padding === DecodingPadding.Ignore && (i2 + j >= encoded.length || encoded[i2 + j] === "=")) {
        continue;
      }
      if (j > 0 && encoded[i2 + j - 1] === "=") {
        throw new Error("Invalid padding");
      }
      if (!(encoded[i2 + j] in decodeMap2)) {
        throw new Error("Invalid character");
      }
      chunk |= decodeMap2[encoded[i2 + j]] << (3 - j) * 6;
      bitsRead += 6;
    }
    if (bitsRead < 24) {
      let unused;
      if (bitsRead === 12) {
        unused = chunk & 65535;
      } else if (bitsRead === 18) {
        unused = chunk & 255;
      } else {
        throw new Error("Invalid padding");
      }
      if (unused !== 0) {
        throw new Error("Invalid padding");
      }
    }
    const byteLength = Math.floor(bitsRead / 8);
    for (let i3 = 0; i3 < byteLength; i3++) {
      result[totalBytes] = chunk >> 16 - i3 * 8 & 255;
      totalBytes++;
    }
  }
  return result.slice(0, totalBytes);
}
var EncodingPadding;
(function(EncodingPadding2) {
  EncodingPadding2[EncodingPadding2["Include"] = 0] = "Include";
  EncodingPadding2[EncodingPadding2["None"] = 1] = "None";
})(EncodingPadding || (EncodingPadding = {}));
var DecodingPadding;
(function(DecodingPadding2) {
  DecodingPadding2[DecodingPadding2["Required"] = 0] = "Required";
  DecodingPadding2[DecodingPadding2["Ignore"] = 1] = "Ignore";
})(DecodingPadding || (DecodingPadding = {}));
const base64DecodeMap = {
  "0": 52,
  "1": 53,
  "2": 54,
  "3": 55,
  "4": 56,
  "5": 57,
  "6": 58,
  "7": 59,
  "8": 60,
  "9": 61,
  A: 0,
  B: 1,
  C: 2,
  D: 3,
  E: 4,
  F: 5,
  G: 6,
  H: 7,
  I: 8,
  J: 9,
  K: 10,
  L: 11,
  M: 12,
  N: 13,
  O: 14,
  P: 15,
  Q: 16,
  R: 17,
  S: 18,
  T: 19,
  U: 20,
  V: 21,
  W: 22,
  X: 23,
  Y: 24,
  Z: 25,
  a: 26,
  b: 27,
  c: 28,
  d: 29,
  e: 30,
  f: 31,
  g: 32,
  h: 33,
  i: 34,
  j: 35,
  k: 36,
  l: 37,
  m: 38,
  n: 39,
  o: 40,
  p: 41,
  q: 42,
  r: 43,
  s: 44,
  t: 45,
  u: 46,
  v: 47,
  w: 48,
  x: 49,
  y: 50,
  z: 51,
  "+": 62,
  "/": 63
};
const initializer = (inst, issues) => {
  $ZodError.init(inst, issues);
  inst.name = "ZodError";
  Object.defineProperties(inst, {
    format: {
      value: (mapper) => formatError(inst, mapper)
      // enumerable: false,
    },
    flatten: {
      value: (mapper) => flattenError(inst, mapper)
      // enumerable: false,
    },
    addIssue: {
      value: (issue2) => {
        inst.issues.push(issue2);
        inst.message = JSON.stringify(inst.issues, jsonStringifyReplacer, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (issues2) => {
        inst.issues.push(...issues2);
        inst.message = JSON.stringify(inst.issues, jsonStringifyReplacer, 2);
      }
      // enumerable: false,
    },
    isEmpty: {
      get() {
        return inst.issues.length === 0;
      }
      // enumerable: false,
    }
  });
};
const ZodRealError = $constructor("ZodError", initializer, {
  Parent: Error
});
const parse = /* @__PURE__ */ _parse(ZodRealError);
const parseAsync = /* @__PURE__ */ _parseAsync(ZodRealError);
const safeParse = /* @__PURE__ */ _safeParse(ZodRealError);
const safeParseAsync = /* @__PURE__ */ _safeParseAsync(ZodRealError);
const encode = /* @__PURE__ */ _encode(ZodRealError);
const decode = /* @__PURE__ */ _decode(ZodRealError);
const encodeAsync = /* @__PURE__ */ _encodeAsync(ZodRealError);
const decodeAsync = /* @__PURE__ */ _decodeAsync(ZodRealError);
const safeEncode = /* @__PURE__ */ _safeEncode(ZodRealError);
const safeDecode = /* @__PURE__ */ _safeDecode(ZodRealError);
const safeEncodeAsync = /* @__PURE__ */ _safeEncodeAsync(ZodRealError);
const safeDecodeAsync = /* @__PURE__ */ _safeDecodeAsync(ZodRealError);
const ZodType = /* @__PURE__ */ $constructor("ZodType", (inst, def) => {
  $ZodType.init(inst, def);
  Object.assign(inst["~standard"], {
    jsonSchema: {
      input: createStandardJSONSchemaMethod(inst, "input"),
      output: createStandardJSONSchemaMethod(inst, "output")
    }
  });
  inst.toJSONSchema = createToJSONSchemaMethod(inst, {});
  inst.def = def;
  inst.type = def.type;
  Object.defineProperty(inst, "_def", { value: def });
  inst.check = (...checks) => {
    return inst.clone(mergeDefs(def, {
      checks: [
        ...def.checks ?? [],
        ...checks.map((ch) => typeof ch === "function" ? { _zod: { check: ch, def: { check: "custom" }, onattach: [] } } : ch)
      ]
    }), {
      parent: true
    });
  };
  inst.with = inst.check;
  inst.clone = (def2, params) => clone(inst, def2, params);
  inst.brand = () => inst;
  inst.register = ((reg, meta) => {
    reg.add(inst, meta);
    return inst;
  });
  inst.parse = (data, params) => parse(inst, data, params, { callee: inst.parse });
  inst.safeParse = (data, params) => safeParse(inst, data, params);
  inst.parseAsync = async (data, params) => parseAsync(inst, data, params, { callee: inst.parseAsync });
  inst.safeParseAsync = async (data, params) => safeParseAsync(inst, data, params);
  inst.spa = inst.safeParseAsync;
  inst.encode = (data, params) => encode(inst, data, params);
  inst.decode = (data, params) => decode(inst, data, params);
  inst.encodeAsync = async (data, params) => encodeAsync(inst, data, params);
  inst.decodeAsync = async (data, params) => decodeAsync(inst, data, params);
  inst.safeEncode = (data, params) => safeEncode(inst, data, params);
  inst.safeDecode = (data, params) => safeDecode(inst, data, params);
  inst.safeEncodeAsync = async (data, params) => safeEncodeAsync(inst, data, params);
  inst.safeDecodeAsync = async (data, params) => safeDecodeAsync(inst, data, params);
  inst.refine = (check, params) => inst.check(refine(check, params));
  inst.superRefine = (refinement) => inst.check(superRefine(refinement));
  inst.overwrite = (fn) => inst.check(/* @__PURE__ */ _overwrite(fn));
  inst.optional = () => optional(inst);
  inst.exactOptional = () => exactOptional(inst);
  inst.nullable = () => nullable(inst);
  inst.nullish = () => optional(nullable(inst));
  inst.nonoptional = (params) => nonoptional(inst, params);
  inst.array = () => array(inst);
  inst.or = (arg) => union([inst, arg]);
  inst.and = (arg) => intersection(inst, arg);
  inst.transform = (tx) => pipe(inst, transform(tx));
  inst.default = (def2) => _default(inst, def2);
  inst.prefault = (def2) => prefault(inst, def2);
  inst.catch = (params) => _catch(inst, params);
  inst.pipe = (target) => pipe(inst, target);
  inst.readonly = () => readonly(inst);
  inst.describe = (description) => {
    const cl = inst.clone();
    globalRegistry.add(cl, { description });
    return cl;
  };
  Object.defineProperty(inst, "description", {
    get() {
      return globalRegistry.get(inst)?.description;
    },
    configurable: true
  });
  inst.meta = (...args) => {
    if (args.length === 0) {
      return globalRegistry.get(inst);
    }
    const cl = inst.clone();
    globalRegistry.add(cl, args[0]);
    return cl;
  };
  inst.isOptional = () => inst.safeParse(void 0).success;
  inst.isNullable = () => inst.safeParse(null).success;
  inst.apply = (fn) => fn(inst);
  return inst;
});
const ZodArray = /* @__PURE__ */ $constructor("ZodArray", (inst, def) => {
  $ZodArray.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => arrayProcessor(inst, ctx, json, params);
  inst.element = def.element;
  inst.min = (minLength, params) => inst.check(/* @__PURE__ */ _minLength(minLength, params));
  inst.nonempty = (params) => inst.check(/* @__PURE__ */ _minLength(1, params));
  inst.max = (maxLength, params) => inst.check(/* @__PURE__ */ _maxLength(maxLength, params));
  inst.length = (len, params) => inst.check(/* @__PURE__ */ _length(len, params));
  inst.unwrap = () => inst.element;
});
function array(element, params) {
  return /* @__PURE__ */ _array(ZodArray, element, params);
}
const ZodUnion = /* @__PURE__ */ $constructor("ZodUnion", (inst, def) => {
  $ZodUnion.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => unionProcessor(inst, ctx, json, params);
  inst.options = def.options;
});
function union(options, params) {
  return new ZodUnion({
    type: "union",
    options,
    ...normalizeParams(params)
  });
}
const ZodIntersection = /* @__PURE__ */ $constructor("ZodIntersection", (inst, def) => {
  $ZodIntersection.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => intersectionProcessor(inst, ctx, json, params);
});
function intersection(left, right) {
  return new ZodIntersection({
    type: "intersection",
    left,
    right
  });
}
const ZodEnum = /* @__PURE__ */ $constructor("ZodEnum", (inst, def) => {
  $ZodEnum.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => enumProcessor(inst, ctx, json);
  inst.enum = def.entries;
  inst.options = Object.values(def.entries);
  const keys = new Set(Object.keys(def.entries));
  inst.extract = (values, params) => {
    const newEntries = {};
    for (const value of values) {
      if (keys.has(value)) {
        newEntries[value] = def.entries[value];
      } else
        throw new Error(`Key ${value} not found in enum`);
    }
    return new ZodEnum({
      ...def,
      checks: [],
      ...normalizeParams(params),
      entries: newEntries
    });
  };
  inst.exclude = (values, params) => {
    const newEntries = { ...def.entries };
    for (const value of values) {
      if (keys.has(value)) {
        delete newEntries[value];
      } else
        throw new Error(`Key ${value} not found in enum`);
    }
    return new ZodEnum({
      ...def,
      checks: [],
      ...normalizeParams(params),
      entries: newEntries
    });
  };
});
function _enum(values, params) {
  const entries = Array.isArray(values) ? Object.fromEntries(values.map((v) => [v, v])) : values;
  return new ZodEnum({
    type: "enum",
    entries,
    ...normalizeParams(params)
  });
}
const ZodTransform = /* @__PURE__ */ $constructor("ZodTransform", (inst, def) => {
  $ZodTransform.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => transformProcessor(inst, ctx);
  inst._zod.parse = (payload, _ctx) => {
    if (_ctx.direction === "backward") {
      throw new $ZodEncodeError(inst.constructor.name);
    }
    payload.addIssue = (issue$1) => {
      if (typeof issue$1 === "string") {
        payload.issues.push(issue(issue$1, payload.value, def));
      } else {
        const _issue = issue$1;
        if (_issue.fatal)
          _issue.continue = false;
        _issue.code ?? (_issue.code = "custom");
        _issue.input ?? (_issue.input = payload.value);
        _issue.inst ?? (_issue.inst = inst);
        payload.issues.push(issue(_issue));
      }
    };
    const output = def.transform(payload.value, payload);
    if (output instanceof Promise) {
      return output.then((output2) => {
        payload.value = output2;
        return payload;
      });
    }
    payload.value = output;
    return payload;
  };
});
function transform(fn) {
  return new ZodTransform({
    type: "transform",
    transform: fn
  });
}
const ZodOptional = /* @__PURE__ */ $constructor("ZodOptional", (inst, def) => {
  $ZodOptional.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => optionalProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function optional(innerType) {
  return new ZodOptional({
    type: "optional",
    innerType
  });
}
const ZodExactOptional = /* @__PURE__ */ $constructor("ZodExactOptional", (inst, def) => {
  $ZodExactOptional.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => optionalProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function exactOptional(innerType) {
  return new ZodExactOptional({
    type: "optional",
    innerType
  });
}
const ZodNullable = /* @__PURE__ */ $constructor("ZodNullable", (inst, def) => {
  $ZodNullable.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => nullableProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function nullable(innerType) {
  return new ZodNullable({
    type: "nullable",
    innerType
  });
}
const ZodDefault = /* @__PURE__ */ $constructor("ZodDefault", (inst, def) => {
  $ZodDefault.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => defaultProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
  inst.removeDefault = inst.unwrap;
});
function _default(innerType, defaultValue) {
  return new ZodDefault({
    type: "default",
    innerType,
    get defaultValue() {
      return typeof defaultValue === "function" ? defaultValue() : shallowClone(defaultValue);
    }
  });
}
const ZodPrefault = /* @__PURE__ */ $constructor("ZodPrefault", (inst, def) => {
  $ZodPrefault.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => prefaultProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function prefault(innerType, defaultValue) {
  return new ZodPrefault({
    type: "prefault",
    innerType,
    get defaultValue() {
      return typeof defaultValue === "function" ? defaultValue() : shallowClone(defaultValue);
    }
  });
}
const ZodNonOptional = /* @__PURE__ */ $constructor("ZodNonOptional", (inst, def) => {
  $ZodNonOptional.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => nonoptionalProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function nonoptional(innerType, params) {
  return new ZodNonOptional({
    type: "nonoptional",
    innerType,
    ...normalizeParams(params)
  });
}
const ZodCatch = /* @__PURE__ */ $constructor("ZodCatch", (inst, def) => {
  $ZodCatch.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => catchProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
  inst.removeCatch = inst.unwrap;
});
function _catch(innerType, catchValue) {
  return new ZodCatch({
    type: "catch",
    innerType,
    catchValue: typeof catchValue === "function" ? catchValue : () => catchValue
  });
}
const ZodPipe = /* @__PURE__ */ $constructor("ZodPipe", (inst, def) => {
  $ZodPipe.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => pipeProcessor(inst, ctx, json, params);
  inst.in = def.in;
  inst.out = def.out;
});
function pipe(in_, out) {
  return new ZodPipe({
    type: "pipe",
    in: in_,
    out
    // ...util.normalizeParams(params),
  });
}
const ZodReadonly = /* @__PURE__ */ $constructor("ZodReadonly", (inst, def) => {
  $ZodReadonly.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => readonlyProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function readonly(innerType) {
  return new ZodReadonly({
    type: "readonly",
    innerType
  });
}
const ZodCustom = /* @__PURE__ */ $constructor("ZodCustom", (inst, def) => {
  $ZodCustom.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => customProcessor(inst, ctx);
});
function refine(fn, _params = {}) {
  return /* @__PURE__ */ _refine(ZodCustom, fn, _params);
}
function superRefine(fn) {
  return /* @__PURE__ */ _superRefine(fn);
}
const ALGORITHMS = {
  "SHA-256": "sha256-",
  "SHA-384": "sha384-",
  "SHA-512": "sha512-"
};
_enum(Object.keys(ALGORITHMS)).optional().default("SHA-256");
const ALGORITHM = "AES-GCM";
async function decodeKey(encoded) {
  const bytes = decodeBase64(encoded);
  return crypto.subtle.importKey("raw", bytes.buffer, ALGORITHM, true, [
    "encrypt",
    "decrypt"
  ]);
}
const encoder$1 = new TextEncoder();
const decoder$1 = new TextDecoder();
const IV_LENGTH = 24;
async function encryptString(key, raw) {
  const iv = crypto.getRandomValues(new Uint8Array(IV_LENGTH / 2));
  const data = encoder$1.encode(raw);
  const buffer = await crypto.subtle.encrypt(
    {
      name: ALGORITHM,
      iv
    },
    key,
    data
  );
  return encodeHexUpperCase(iv) + encodeBase64(new Uint8Array(buffer));
}
async function decryptString(key, encoded) {
  const iv = decodeHex(encoded.slice(0, IV_LENGTH));
  const dataArray = decodeBase64(encoded.slice(IV_LENGTH));
  const decryptedBuffer = await crypto.subtle.decrypt(
    {
      name: ALGORITHM,
      iv
    },
    key,
    dataArray
  );
  const decryptedString = decoder$1.decode(decryptedBuffer);
  return decryptedString;
}
async function generateCspDigest(data, algorithm) {
  const hashBuffer = await crypto.subtle.digest(algorithm, encoder$1.encode(data));
  const hash = encodeBase64(new Uint8Array(hashBuffer));
  return `${ALGORITHMS[algorithm]}${hash}`;
}
const renderTemplateResultSym = /* @__PURE__ */ Symbol.for("astro.renderTemplateResult");
class RenderTemplateResult {
  [renderTemplateResultSym] = true;
  htmlParts;
  expressions;
  error;
  constructor(htmlParts, expressions) {
    this.htmlParts = htmlParts;
    this.error = void 0;
    this.expressions = expressions.map((expression) => {
      if (isPromise(expression)) {
        return Promise.resolve(expression).catch((err) => {
          if (!this.error) {
            this.error = err;
            throw err;
          }
        });
      }
      return expression;
    });
  }
  render(destination) {
    const { htmlParts, expressions } = this;
    for (let i2 = 0; i2 < htmlParts.length; i2++) {
      const html = htmlParts[i2];
      if (html) {
        destination.write(markHTMLString(html));
      }
      if (i2 >= expressions.length) break;
      const exp = expressions[i2];
      if (!(exp || exp === 0)) continue;
      const result = renderChild(destination, exp);
      if (isPromise(result)) {
        const startIdx = i2 + 1;
        const remaining = expressions.length - startIdx;
        const flushers = new Array(remaining);
        for (let j = 0; j < remaining; j++) {
          const rExp = expressions[startIdx + j];
          flushers[j] = createBufferedRenderer(destination, (bufferDestination) => {
            if (rExp || rExp === 0) {
              return renderChild(bufferDestination, rExp);
            }
          });
        }
        return result.then(() => {
          let k = 0;
          const iterate = () => {
            while (k < flushers.length) {
              const rHtml = htmlParts[startIdx + k];
              if (rHtml) {
                destination.write(markHTMLString(rHtml));
              }
              const flushResult = flushers[k++].flush();
              if (isPromise(flushResult)) {
                return flushResult.then(iterate);
              }
            }
            const lastHtml = htmlParts[htmlParts.length - 1];
            if (lastHtml) {
              destination.write(markHTMLString(lastHtml));
            }
          };
          return iterate();
        });
      }
    }
  }
}
function isRenderTemplateResult(obj) {
  return typeof obj === "object" && obj !== null && !!obj[renderTemplateResultSym];
}
function renderTemplate(htmlParts, ...expressions) {
  return new RenderTemplateResult(htmlParts, expressions);
}
const slotString = /* @__PURE__ */ Symbol.for("astro:slot-string");
class SlotString extends HTMLString {
  instructions;
  [slotString];
  constructor(content, instructions) {
    super(content);
    this.instructions = instructions;
    this[slotString] = true;
  }
}
function isSlotString(str) {
  return !!str[slotString];
}
function mergeSlotInstructions(target, source) {
  if (source.instructions?.length) {
    target ??= [];
    target.push(...source.instructions);
  }
  return target;
}
function renderSlot(result, slotted, fallback) {
  if (!slotted && fallback) {
    return renderSlot(result, fallback);
  }
  return {
    async render(destination) {
      await renderChild(destination, typeof slotted === "function" ? slotted(result) : slotted);
    }
  };
}
async function renderSlotToString(result, slotted, fallback) {
  let content = "";
  let instructions = null;
  const temporaryDestination = {
    write(chunk) {
      if (chunk instanceof SlotString) {
        content += chunk;
        instructions = mergeSlotInstructions(instructions, chunk);
      } else if (chunk instanceof Response) return;
      else if (typeof chunk === "object" && "type" in chunk && typeof chunk.type === "string") {
        if (instructions === null) {
          instructions = [];
        }
        instructions.push(chunk);
      } else {
        content += chunkToString(result, chunk);
      }
    }
  };
  const renderInstance = renderSlot(result, slotted, fallback);
  await renderInstance.render(temporaryDestination);
  return markHTMLString(new SlotString(content, instructions));
}
async function renderSlots(result, slots = {}) {
  let slotInstructions = null;
  let children = {};
  if (slots) {
    await Promise.all(
      Object.entries(slots).map(
        ([key, value]) => renderSlotToString(result, value).then((output) => {
          if (output.instructions) {
            if (slotInstructions === null) {
              slotInstructions = [];
            }
            slotInstructions.push(...output.instructions);
          }
          children[key] = output;
        })
      )
    );
  }
  return { slotInstructions, children };
}
function createSlotValueFromString(content) {
  return function() {
    return renderTemplate`${unescapeHTML(content)}`;
  };
}
const internalProps = /* @__PURE__ */ new Set([
  "server:component-path",
  "server:component-export",
  "server:component-directive",
  "server:defer"
]);
function containsServerDirective(props) {
  return "server:component-directive" in props;
}
const SCRIPT_RE = /<\/script/giu;
const COMMENT_RE = /<!--/gu;
const SCRIPT_REPLACER = "<\\/script";
const COMMENT_REPLACER = "\\u003C!--";
function safeJsonStringify(obj) {
  return JSON.stringify(obj).replace(SCRIPT_RE, SCRIPT_REPLACER).replace(COMMENT_RE, COMMENT_REPLACER);
}
function createSearchParams(encryptedComponentExport, encryptedProps, slots) {
  const params = new URLSearchParams();
  params.set("e", encryptedComponentExport);
  params.set("p", encryptedProps);
  params.set("s", slots);
  return params;
}
function isWithinURLLimit(pathname, params) {
  const url = pathname + "?" + params.toString();
  const chars = url.length;
  return chars < 2048;
}
class ServerIslandComponent {
  result;
  props;
  slots;
  displayName;
  hostId;
  islandContent;
  componentPath;
  componentExport;
  componentId;
  constructor(result, props, slots, displayName) {
    this.result = result;
    this.props = props;
    this.slots = slots;
    this.displayName = displayName;
  }
  async init() {
    const content = await this.getIslandContent();
    if (this.result.cspDestination) {
      this.result._metadata.extraScriptHashes.push(
        await generateCspDigest(SERVER_ISLAND_REPLACER, this.result.cspAlgorithm)
      );
      const contentDigest = await generateCspDigest(content, this.result.cspAlgorithm);
      this.result._metadata.extraScriptHashes.push(contentDigest);
    }
    return createThinHead();
  }
  async render(destination) {
    const hostId = await this.getHostId();
    const islandContent = await this.getIslandContent();
    destination.write(createRenderInstruction({ type: "server-island-runtime" }));
    destination.write("<!--[if astro]>server-island-start<![endif]-->");
    for (const name in this.slots) {
      if (name === "fallback") {
        await renderChild(destination, this.slots.fallback(this.result));
      }
    }
    destination.write(
      `<script type="module" data-astro-rerun data-island-id="${hostId}">${islandContent}<\/script>`
    );
  }
  getComponentPath() {
    if (this.componentPath) {
      return this.componentPath;
    }
    const componentPath = this.props["server:component-path"];
    if (!componentPath) {
      throw new Error(`Could not find server component path`);
    }
    this.componentPath = componentPath;
    return componentPath;
  }
  getComponentExport() {
    if (this.componentExport) {
      return this.componentExport;
    }
    const componentExport = this.props["server:component-export"];
    if (!componentExport) {
      throw new Error(`Could not find server component export`);
    }
    this.componentExport = componentExport;
    return componentExport;
  }
  async getHostId() {
    if (!this.hostId) {
      this.hostId = await crypto.randomUUID();
    }
    return this.hostId;
  }
  async getIslandContent() {
    if (this.islandContent) {
      return this.islandContent;
    }
    const componentPath = this.getComponentPath();
    const componentExport = this.getComponentExport();
    let componentId = this.result.serverIslandNameMap.get(componentPath);
    if (!componentId) {
      throw new Error(`Could not find server component name ${componentPath}`);
    }
    for (const key2 of Object.keys(this.props)) {
      if (internalProps.has(key2)) {
        delete this.props[key2];
      }
    }
    const renderedSlots = {};
    for (const name in this.slots) {
      if (name !== "fallback") {
        const content = await renderSlotToString(this.result, this.slots[name]);
        let slotHtml = content.toString();
        const slotContent = content;
        if (Array.isArray(slotContent.instructions)) {
          for (const instruction of slotContent.instructions) {
            if (instruction.type === "script") {
              slotHtml += instruction.content;
            }
          }
        }
        renderedSlots[name] = slotHtml;
      }
    }
    const key = await this.result.key;
    const componentExportEncrypted = await encryptString(key, componentExport);
    const propsEncrypted = Object.keys(this.props).length === 0 ? "" : await encryptString(key, JSON.stringify(this.props));
    const slotsEncrypted = Object.keys(renderedSlots).length === 0 ? "" : await encryptString(key, JSON.stringify(renderedSlots));
    const hostId = await this.getHostId();
    const slash2 = this.result.base.endsWith("/") ? "" : "/";
    let serverIslandUrl = `${this.result.base}${slash2}_server-islands/${componentId}${this.result.trailingSlash === "always" ? "/" : ""}`;
    const potentialSearchParams = createSearchParams(
      componentExportEncrypted,
      propsEncrypted,
      slotsEncrypted
    );
    const useGETRequest = isWithinURLLimit(serverIslandUrl, potentialSearchParams);
    if (useGETRequest) {
      serverIslandUrl += "?" + potentialSearchParams.toString();
      this.result._metadata.extraHead.push(
        markHTMLString(
          `<link rel="preload" as="fetch" href="${serverIslandUrl}" crossorigin="anonymous">`
        )
      );
    }
    const adapterHeaders = this.result.internalFetchHeaders || {};
    const headersJson = safeJsonStringify(adapterHeaders);
    const method = useGETRequest ? (
      // GET request
      `const headers = new Headers(${headersJson});
let response = await fetch('${serverIslandUrl}', { headers });`
    ) : (
      // POST request
      `let data = {
	encryptedComponentExport: ${safeJsonStringify(componentExportEncrypted)},
	encryptedProps: ${safeJsonStringify(propsEncrypted)},
	encryptedSlots: ${safeJsonStringify(slotsEncrypted)},
};
const headers = new Headers({ 'Content-Type': 'application/json', ...${headersJson} });
let response = await fetch('${serverIslandUrl}', {
	method: 'POST',
	body: JSON.stringify(data),
	headers,
});`
    );
    this.islandContent = `${method}replaceServerIsland('${hostId}', response);`;
    return this.islandContent;
  }
}
const renderServerIslandRuntime = () => {
  return `<script>${SERVER_ISLAND_REPLACER}<\/script>`;
};
const SERVER_ISLAND_REPLACER = markHTMLString(
  `async function replaceServerIsland(id, r) {
	let s = document.querySelector(\`script[data-island-id="\${id}"]\`);
	// If there's no matching script, or the request fails then return
	if (!s || r.status !== 200 || r.headers.get('content-type')?.split(';')[0].trim() !== 'text/html') return;
	// Load the HTML before modifying the DOM in case of errors
	let html = await r.text();
	// Remove any placeholder content before the island script
	while (s.previousSibling && s.previousSibling.nodeType !== 8 && s.previousSibling.data !== '[if astro]>server-island-start<![endif]')
		s.previousSibling.remove();
	s.previousSibling?.remove();
	// Insert the new HTML
	s.before(document.createRange().createContextualFragment(html));
	// Remove the script. Prior to v5.4.2, this was the trick to force rerun of scripts.  Keeping it to minimize change to the existing behavior.
	s.remove();
}`.split("\n").map((line) => line.trim()).filter((line) => line && !line.startsWith("//")).join(" ")
);
const Fragment = /* @__PURE__ */ Symbol.for("astro:fragment");
const Renderer = /* @__PURE__ */ Symbol.for("astro:renderer");
const encoder = new TextEncoder();
const decoder = new TextDecoder();
function stringifyChunk(result, chunk) {
  if (isRenderInstruction(chunk)) {
    const instruction = chunk;
    switch (instruction.type) {
      case "directive": {
        const { hydration } = instruction;
        let needsHydrationScript = hydration && determineIfNeedsHydrationScript(result);
        let needsDirectiveScript = hydration && determinesIfNeedsDirectiveScript(result, hydration.directive);
        if (needsHydrationScript) {
          let prescripts = getPrescripts(result, "both", hydration.directive);
          return markHTMLString(prescripts);
        } else if (needsDirectiveScript) {
          let prescripts = getPrescripts(result, "directive", hydration.directive);
          return markHTMLString(prescripts);
        } else {
          return "";
        }
      }
      case "head": {
        if (result._metadata.hasRenderedHead || result.partial) {
          return "";
        }
        return renderAllHeadContent(result);
      }
      case "maybe-head": {
        if (result._metadata.hasRenderedHead || result._metadata.headInTree || result.partial) {
          return "";
        }
        return renderAllHeadContent(result);
      }
      case "renderer-hydration-script": {
        const { rendererSpecificHydrationScripts } = result._metadata;
        const { rendererName } = instruction;
        if (!rendererSpecificHydrationScripts.has(rendererName)) {
          rendererSpecificHydrationScripts.add(rendererName);
          return instruction.render();
        }
        return "";
      }
      case "server-island-runtime": {
        if (result._metadata.hasRenderedServerIslandRuntime) {
          return "";
        }
        result._metadata.hasRenderedServerIslandRuntime = true;
        return renderServerIslandRuntime();
      }
      case "script": {
        const { id, content } = instruction;
        if (result._metadata.renderedScripts.has(id)) {
          return "";
        }
        result._metadata.renderedScripts.add(id);
        return content;
      }
      default: {
        throw new Error(`Unknown chunk type: ${chunk.type}`);
      }
    }
  } else if (chunk instanceof Response) {
    return "";
  } else if (isSlotString(chunk)) {
    let out = "";
    const c = chunk;
    if (c.instructions) {
      for (const instr of c.instructions) {
        out += stringifyChunk(result, instr);
      }
    }
    out += chunk.toString();
    return out;
  }
  return chunk.toString();
}
function chunkToString(result, chunk) {
  if (ArrayBuffer.isView(chunk)) {
    return decoder.decode(chunk);
  } else {
    return stringifyChunk(result, chunk);
  }
}
function chunkToByteArray(result, chunk) {
  if (ArrayBuffer.isView(chunk)) {
    return chunk;
  } else {
    const stringified = stringifyChunk(result, chunk);
    return encoder.encode(stringified.toString());
  }
}
function chunkToByteArrayOrString(result, chunk) {
  if (ArrayBuffer.isView(chunk)) {
    return chunk;
  } else {
    return stringifyChunk(result, chunk).toString();
  }
}
function isRenderInstance(obj) {
  return !!obj && typeof obj === "object" && "render" in obj && typeof obj.render === "function";
}
function renderChild(destination, child) {
  if (typeof child === "string") {
    destination.write(markHTMLString(escapeHTML(child)));
    return;
  }
  if (isPromise(child)) {
    return child.then((x) => renderChild(destination, x));
  }
  if (child instanceof SlotString) {
    destination.write(child);
    return;
  }
  if (isHTMLString(child)) {
    destination.write(child);
    return;
  }
  if (!child && child !== 0) {
    return;
  }
  if (Array.isArray(child)) {
    return renderArray(destination, child);
  }
  if (typeof child === "function") {
    return renderChild(destination, child());
  }
  if (isRenderInstance(child)) {
    return child.render(destination);
  }
  if (isRenderTemplateResult(child)) {
    return child.render(destination);
  }
  if (isAstroComponentInstance(child)) {
    return child.render(destination);
  }
  if (ArrayBuffer.isView(child)) {
    destination.write(child);
    return;
  }
  if (typeof child === "object" && (Symbol.asyncIterator in child || Symbol.iterator in child)) {
    if (Symbol.asyncIterator in child) {
      return renderAsyncIterable(destination, child);
    }
    return renderIterable(destination, child);
  }
  destination.write(child);
}
function renderArray(destination, children) {
  for (let i2 = 0; i2 < children.length; i2++) {
    const result = renderChild(destination, children[i2]);
    if (isPromise(result)) {
      if (i2 + 1 >= children.length) {
        return result;
      }
      const remaining = children.length - i2 - 1;
      const flushers = new Array(remaining);
      for (let j = 0; j < remaining; j++) {
        flushers[j] = createBufferedRenderer(destination, (bufferDestination) => {
          return renderChild(bufferDestination, children[i2 + 1 + j]);
        });
      }
      return result.then(() => {
        let k = 0;
        const iterate = () => {
          while (k < flushers.length) {
            const flushResult = flushers[k++].flush();
            if (isPromise(flushResult)) {
              return flushResult.then(iterate);
            }
          }
        };
        return iterate();
      });
    }
  }
}
function renderIterable(destination, children) {
  const iterator = children[Symbol.iterator]();
  const iterate = () => {
    for (; ; ) {
      const { value, done } = iterator.next();
      if (done) {
        break;
      }
      const result = renderChild(destination, value);
      if (isPromise(result)) {
        return result.then(iterate);
      }
    }
  };
  return iterate();
}
async function renderAsyncIterable(destination, children) {
  for await (const value of children) {
    await renderChild(destination, value);
  }
}
const astroComponentInstanceSym = /* @__PURE__ */ Symbol.for("astro.componentInstance");
class AstroComponentInstance {
  [astroComponentInstanceSym] = true;
  result;
  props;
  slotValues;
  factory;
  returnValue;
  constructor(result, props, slots, factory) {
    this.result = result;
    this.props = props;
    this.factory = factory;
    this.slotValues = {};
    for (const name in slots) {
      let didRender = false;
      let value = slots[name](result);
      this.slotValues[name] = () => {
        if (!didRender) {
          didRender = true;
          return value;
        }
        return slots[name](result);
      };
    }
  }
  init(result) {
    if (this.returnValue !== void 0) {
      return this.returnValue;
    }
    this.returnValue = this.factory(result, this.props, this.slotValues);
    if (isPromise(this.returnValue)) {
      this.returnValue.then((resolved) => {
        this.returnValue = resolved;
      }).catch(() => {
      });
    }
    return this.returnValue;
  }
  render(destination) {
    const returnValue = this.init(this.result);
    if (isPromise(returnValue)) {
      return returnValue.then((x) => this.renderImpl(destination, x));
    }
    return this.renderImpl(destination, returnValue);
  }
  renderImpl(destination, returnValue) {
    if (isHeadAndContent(returnValue)) {
      return returnValue.content.render(destination);
    } else {
      return renderChild(destination, returnValue);
    }
  }
}
function validateComponentProps(props, clientDirectives, displayName) {
  if (props != null) {
    const directives = [...clientDirectives.keys()].map((directive) => `client:${directive}`);
    for (const prop of Object.keys(props)) {
      if (directives.includes(prop)) {
        console.warn(
          `You are attempting to render <${displayName} ${prop} />, but ${displayName} is an Astro component. Astro components do not render in the client and should not have a hydration directive. Please use a framework component for client rendering.`
        );
      }
    }
  }
}
function createAstroComponentInstance(result, displayName, factory, props, slots = {}) {
  validateComponentProps(props, result.clientDirectives, displayName);
  const instance = new AstroComponentInstance(result, props, slots, factory);
  if (isAPropagatingComponent(result, factory)) {
    result._metadata.propagators.add(instance);
  }
  return instance;
}
function isAstroComponentInstance(obj) {
  return typeof obj === "object" && obj !== null && !!obj[astroComponentInstanceSym];
}
const DOCTYPE_EXP = /<!doctype html/i;
async function renderToString(result, componentFactory, props, children, isPage = false, route) {
  const templateResult = await callComponentAsTemplateResultOrResponse(
    result,
    componentFactory,
    props,
    children,
    route
  );
  if (templateResult instanceof Response) return templateResult;
  let str = "";
  let renderedFirstPageChunk = false;
  if (isPage) {
    await bufferHeadContent(result);
  }
  const destination = {
    write(chunk) {
      if (isPage && !renderedFirstPageChunk) {
        renderedFirstPageChunk = true;
        if (!result.partial && !DOCTYPE_EXP.test(String(chunk))) {
          const doctype = result.compressHTML ? "<!DOCTYPE html>" : "<!DOCTYPE html>\n";
          str += doctype;
        }
      }
      if (chunk instanceof Response) return;
      str += chunkToString(result, chunk);
    }
  };
  await templateResult.render(destination);
  return str;
}
async function renderToReadableStream(result, componentFactory, props, children, isPage = false, route) {
  const templateResult = await callComponentAsTemplateResultOrResponse(
    result,
    componentFactory,
    props,
    children,
    route
  );
  if (templateResult instanceof Response) return templateResult;
  let renderedFirstPageChunk = false;
  if (isPage) {
    await bufferHeadContent(result);
  }
  return new ReadableStream({
    start(controller) {
      const destination = {
        write(chunk) {
          if (isPage && !renderedFirstPageChunk) {
            renderedFirstPageChunk = true;
            if (!result.partial && !DOCTYPE_EXP.test(String(chunk))) {
              const doctype = result.compressHTML ? "<!DOCTYPE html>" : "<!DOCTYPE html>\n";
              controller.enqueue(encoder.encode(doctype));
            }
          }
          if (chunk instanceof Response) {
            throw new AstroError({
              ...ResponseSentError
            });
          }
          const bytes = chunkToByteArray(result, chunk);
          controller.enqueue(bytes);
        }
      };
      (async () => {
        try {
          await templateResult.render(destination);
          controller.close();
        } catch (e2) {
          if (AstroError.is(e2) && !e2.loc) {
            e2.setLocation({
              file: route?.component
            });
          }
          setTimeout(() => controller.error(e2), 0);
        }
      })();
    },
    cancel() {
      result.cancelled = true;
    }
  });
}
async function callComponentAsTemplateResultOrResponse(result, componentFactory, props, children, route) {
  const factoryResult = await componentFactory(result, props, children);
  if (factoryResult instanceof Response) {
    return factoryResult;
  } else if (isHeadAndContent(factoryResult)) {
    if (!isRenderTemplateResult(factoryResult.content)) {
      throw new AstroError({
        ...OnlyResponseCanBeReturned,
        message: OnlyResponseCanBeReturned.message(
          route?.route,
          typeof factoryResult
        ),
        location: {
          file: route?.component
        }
      });
    }
    return factoryResult.content;
  } else if (!isRenderTemplateResult(factoryResult)) {
    throw new AstroError({
      ...OnlyResponseCanBeReturned,
      message: OnlyResponseCanBeReturned.message(route?.route, typeof factoryResult),
      location: {
        file: route?.component
      }
    });
  }
  return factoryResult;
}
async function bufferHeadContent(result) {
  const iterator = result._metadata.propagators.values();
  while (true) {
    const { value, done } = iterator.next();
    if (done) {
      break;
    }
    const returnValue = await value.init(result);
    if (isHeadAndContent(returnValue) && returnValue.head) {
      result._metadata.extraHead.push(returnValue.head);
    }
  }
}
async function renderToAsyncIterable(result, componentFactory, props, children, isPage = false, route) {
  const templateResult = await callComponentAsTemplateResultOrResponse(
    result,
    componentFactory,
    props,
    children,
    route
  );
  if (templateResult instanceof Response) return templateResult;
  let renderedFirstPageChunk = false;
  if (isPage) {
    await bufferHeadContent(result);
  }
  let error2 = null;
  let next = null;
  const buffer = [];
  let renderingComplete = false;
  const iterator = {
    async next() {
      if (result.cancelled) return { done: true, value: void 0 };
      if (next !== null) {
        await next.promise;
      } else if (!renderingComplete && !buffer.length) {
        next = promiseWithResolvers();
        await next.promise;
      }
      if (!renderingComplete) {
        next = promiseWithResolvers();
      }
      if (error2) {
        throw error2;
      }
      let length = 0;
      let stringToEncode = "";
      for (let i2 = 0, len = buffer.length; i2 < len; i2++) {
        const bufferEntry = buffer[i2];
        if (typeof bufferEntry === "string") {
          const nextIsString = i2 + 1 < len && typeof buffer[i2 + 1] === "string";
          stringToEncode += bufferEntry;
          if (!nextIsString) {
            const encoded = encoder.encode(stringToEncode);
            length += encoded.length;
            stringToEncode = "";
            buffer[i2] = encoded;
          } else {
            buffer[i2] = "";
          }
        } else {
          length += bufferEntry.length;
        }
      }
      let mergedArray = new Uint8Array(length);
      let offset = 0;
      for (let i2 = 0, len = buffer.length; i2 < len; i2++) {
        const item = buffer[i2];
        if (item === "") {
          continue;
        }
        mergedArray.set(item, offset);
        offset += item.length;
      }
      buffer.length = 0;
      const returnValue = {
        // The iterator is done when rendering has finished
        // and there are no more chunks to return.
        done: length === 0 && renderingComplete,
        value: mergedArray
      };
      return returnValue;
    },
    async return() {
      result.cancelled = true;
      return { done: true, value: void 0 };
    }
  };
  const destination = {
    write(chunk) {
      if (isPage && !renderedFirstPageChunk) {
        renderedFirstPageChunk = true;
        if (!result.partial && !DOCTYPE_EXP.test(String(chunk))) {
          const doctype = result.compressHTML ? "<!DOCTYPE html>" : "<!DOCTYPE html>\n";
          buffer.push(encoder.encode(doctype));
        }
      }
      if (chunk instanceof Response) {
        throw new AstroError(ResponseSentError);
      }
      const bytes = chunkToByteArrayOrString(result, chunk);
      if (bytes.length > 0) {
        buffer.push(bytes);
        next?.resolve();
      } else if (buffer.length > 0) {
        next?.resolve();
      }
    }
  };
  const renderResult = toPromise(() => templateResult.render(destination));
  renderResult.catch((err) => {
    error2 = err;
  }).finally(() => {
    renderingComplete = true;
    next?.resolve();
  });
  return {
    [Symbol.asyncIterator]() {
      return iterator;
    }
  };
}
function toPromise(fn) {
  try {
    const result = fn();
    return isPromise(result) ? result : Promise.resolve(result);
  } catch (err) {
    return Promise.reject(err);
  }
}
function componentIsHTMLElement(Component) {
  return typeof HTMLElement !== "undefined" && HTMLElement.isPrototypeOf(Component);
}
async function renderHTMLElement$1(result, constructor, props, slots) {
  const name = getHTMLElementName(constructor);
  let attrHTML = "";
  for (const attr in props) {
    attrHTML += ` ${attr}="${toAttributeString(await props[attr])}"`;
  }
  return markHTMLString(
    `<${name}${attrHTML}>${await renderSlotToString(result, slots?.default)}</${name}>`
  );
}
function getHTMLElementName(constructor) {
  const definedName = customElements.getName(constructor);
  if (definedName) return definedName;
  const assignedName = constructor.name.replace(/^HTML|Element$/g, "").replace(/[A-Z]/g, "-$&").toLowerCase().replace(/^-/, "html-");
  return assignedName;
}
const needsHeadRenderingSymbol = /* @__PURE__ */ Symbol.for("astro.needsHeadRendering");
const rendererAliases = /* @__PURE__ */ new Map([["solid", "solid-js"]]);
const clientOnlyValues = /* @__PURE__ */ new Set(["solid-js", "react", "preact", "vue", "svelte"]);
function guessRenderers(componentUrl) {
  const extname = componentUrl?.split(".").pop();
  switch (extname) {
    case "svelte":
      return ["@astrojs/svelte"];
    case "vue":
      return ["@astrojs/vue"];
    case "jsx":
    case "tsx":
      return ["@astrojs/react", "@astrojs/preact", "@astrojs/solid-js", "@astrojs/vue (jsx)"];
    case void 0:
    default:
      return [
        "@astrojs/react",
        "@astrojs/preact",
        "@astrojs/solid-js",
        "@astrojs/vue",
        "@astrojs/svelte"
      ];
  }
}
function isFragmentComponent(Component) {
  return Component === Fragment;
}
function isHTMLComponent(Component) {
  return Component && Component["astro:html"] === true;
}
const ASTRO_SLOT_EXP = /<\/?astro-slot\b[^>]*>/g;
const ASTRO_STATIC_SLOT_EXP = /<\/?astro-static-slot\b[^>]*>/g;
function removeStaticAstroSlot(html, supportsAstroStaticSlot = true) {
  const exp = supportsAstroStaticSlot ? ASTRO_STATIC_SLOT_EXP : ASTRO_SLOT_EXP;
  return html.replace(exp, "");
}
async function renderFrameworkComponent(result, displayName, Component, _props, slots = {}) {
  if (!Component && "client:only" in _props === false) {
    throw new Error(
      `Unable to render ${displayName} because it is ${Component}!
Did you forget to import the component or is it possible there is a typo?`
    );
  }
  const { renderers: renderers2, clientDirectives } = result;
  const metadata = {
    astroStaticSlot: true,
    displayName
  };
  const { hydration, isPage, props, propsWithoutTransitionAttributes } = extractDirectives(
    _props,
    clientDirectives
  );
  let html = "";
  let attrs = void 0;
  if (hydration) {
    metadata.hydrate = hydration.directive;
    metadata.hydrateArgs = hydration.value;
    metadata.componentExport = hydration.componentExport;
    metadata.componentUrl = hydration.componentUrl;
  }
  const probableRendererNames = guessRenderers(metadata.componentUrl);
  const validRenderers = renderers2.filter((r2) => r2.name !== "astro:jsx");
  const { children, slotInstructions } = await renderSlots(result, slots);
  let renderer;
  if (metadata.hydrate !== "only") {
    let isTagged = false;
    try {
      isTagged = Component && Component[Renderer];
    } catch {
    }
    if (isTagged) {
      const rendererName = Component[Renderer];
      renderer = renderers2.find(({ name }) => name === rendererName);
    }
    if (!renderer) {
      let error2;
      for (const r2 of renderers2) {
        try {
          if (await r2.ssr.check.call({ result }, Component, props, children, metadata)) {
            renderer = r2;
            break;
          }
        } catch (e2) {
          error2 ??= e2;
        }
      }
      if (!renderer && error2) {
        throw error2;
      }
    }
    if (!renderer && typeof HTMLElement === "function" && componentIsHTMLElement(Component)) {
      const output = await renderHTMLElement$1(
        result,
        Component,
        _props,
        slots
      );
      return {
        render(destination) {
          destination.write(output);
        }
      };
    }
  } else {
    if (metadata.hydrateArgs) {
      const rendererName = rendererAliases.has(metadata.hydrateArgs) ? rendererAliases.get(metadata.hydrateArgs) : metadata.hydrateArgs;
      if (clientOnlyValues.has(rendererName)) {
        renderer = renderers2.find(
          ({ name }) => name === `@astrojs/${rendererName}` || name === rendererName
        );
      }
    }
    if (!renderer && validRenderers.length === 1) {
      renderer = validRenderers[0];
    }
    if (!renderer) {
      const extname = metadata.componentUrl?.split(".").pop();
      renderer = renderers2.find(({ name }) => name === `@astrojs/${extname}` || name === extname);
    }
    if (!renderer && metadata.hydrateArgs) {
      const rendererName = metadata.hydrateArgs;
      if (typeof rendererName === "string") {
        renderer = renderers2.find(({ name }) => name === rendererName);
      }
    }
  }
  if (!renderer) {
    if (metadata.hydrate === "only") {
      const rendererName = rendererAliases.has(metadata.hydrateArgs) ? rendererAliases.get(metadata.hydrateArgs) : metadata.hydrateArgs;
      if (clientOnlyValues.has(rendererName)) {
        const plural = validRenderers.length > 1;
        throw new AstroError({
          ...NoMatchingRenderer,
          message: NoMatchingRenderer.message(
            metadata.displayName,
            metadata?.componentUrl?.split(".").pop(),
            plural,
            validRenderers.length
          ),
          hint: NoMatchingRenderer.hint(
            formatList(probableRendererNames.map((r2) => "`" + r2 + "`"))
          )
        });
      } else {
        throw new AstroError({
          ...NoClientOnlyHint,
          message: NoClientOnlyHint.message(metadata.displayName),
          hint: NoClientOnlyHint.hint(
            probableRendererNames.map((r2) => r2.replace("@astrojs/", "")).join("|")
          )
        });
      }
    } else if (typeof Component !== "string") {
      const matchingRenderers = validRenderers.filter(
        (r2) => probableRendererNames.includes(r2.name)
      );
      const plural = validRenderers.length > 1;
      if (matchingRenderers.length === 0) {
        throw new AstroError({
          ...NoMatchingRenderer,
          message: NoMatchingRenderer.message(
            metadata.displayName,
            metadata?.componentUrl?.split(".").pop(),
            plural,
            validRenderers.length
          ),
          hint: NoMatchingRenderer.hint(
            formatList(probableRendererNames.map((r2) => "`" + r2 + "`"))
          )
        });
      } else if (matchingRenderers.length === 1) {
        renderer = matchingRenderers[0];
        ({ html, attrs } = await renderer.ssr.renderToStaticMarkup.call(
          { result },
          Component,
          propsWithoutTransitionAttributes,
          children,
          metadata
        ));
      } else {
        throw new Error(`Unable to render ${metadata.displayName}!

This component likely uses ${formatList(probableRendererNames)},
but Astro encountered an error during server-side rendering.

Please ensure that ${metadata.displayName}:
1. Does not unconditionally access browser-specific globals like \`window\` or \`document\`.
   If this is unavoidable, use the \`client:only\` hydration directive.
2. Does not conditionally return \`null\` or \`undefined\` when rendered on the server.
3. If using multiple JSX frameworks at the same time (e.g. React + Preact), pass the correct \`include\`/\`exclude\` options to integrations.

If you're still stuck, please open an issue on GitHub or join us at https://astro.build/chat.`);
      }
    }
  } else {
    if (metadata.hydrate === "only") {
      html = await renderSlotToString(result, slots?.fallback);
    } else {
      performance.now();
      ({ html, attrs } = await renderer.ssr.renderToStaticMarkup.call(
        { result },
        Component,
        propsWithoutTransitionAttributes,
        children,
        metadata
      ));
    }
  }
  if (!html && typeof Component === "string") {
    const Tag = sanitizeElementName(Component);
    const childSlots = Object.values(children).join("");
    const renderTemplateResult = renderTemplate`<${Tag}${internalSpreadAttributes(
      props,
      true,
      Tag
    )}${markHTMLString(
      childSlots === "" && voidElementNames.test(Tag) ? `/>` : `>${childSlots}</${Tag}>`
    )}`;
    html = "";
    const destination = {
      write(chunk) {
        if (chunk instanceof Response) return;
        html += chunkToString(result, chunk);
      }
    };
    await renderTemplateResult.render(destination);
  }
  if (!hydration) {
    return {
      render(destination) {
        if (slotInstructions) {
          for (const instruction of slotInstructions) {
            destination.write(instruction);
          }
        }
        if (isPage || renderer?.name === "astro:jsx") {
          destination.write(html);
        } else if (html && html.length > 0) {
          destination.write(
            markHTMLString(removeStaticAstroSlot(html, renderer?.ssr?.supportsAstroStaticSlot))
          );
        }
      }
    };
  }
  const astroId = shorthash(
    `<!--${metadata.componentExport.value}:${metadata.componentUrl}-->
${html}
${serializeProps(
      props,
      metadata
    )}`
  );
  const island = await generateHydrateScript(
    { renderer, result, astroId, props, attrs },
    metadata
  );
  let unrenderedSlots = [];
  if (html) {
    if (Object.keys(children).length > 0) {
      for (const key of Object.keys(children)) {
        let tagName = renderer?.ssr?.supportsAstroStaticSlot ? !!metadata.hydrate ? "astro-slot" : "astro-static-slot" : "astro-slot";
        let expectedHTML = key === "default" ? `<${tagName}>` : `<${tagName} name="${key}">`;
        if (!html.includes(expectedHTML)) {
          unrenderedSlots.push(key);
        }
      }
    }
  } else {
    unrenderedSlots = Object.keys(children);
  }
  const template2 = unrenderedSlots.length > 0 ? unrenderedSlots.map(
    (key) => `<template data-astro-template${key !== "default" ? `="${key}"` : ""}>${children[key]}</template>`
  ).join("") : "";
  island.children = `${html ?? ""}${template2}`;
  if (island.children) {
    island.props["await-children"] = "";
    island.children += `<!--astro:end-->`;
  }
  return {
    render(destination) {
      if (slotInstructions) {
        for (const instruction of slotInstructions) {
          destination.write(instruction);
        }
      }
      destination.write(createRenderInstruction({ type: "directive", hydration }));
      if (hydration.directive !== "only" && renderer?.ssr.renderHydrationScript) {
        destination.write(
          createRenderInstruction({
            type: "renderer-hydration-script",
            rendererName: renderer.name,
            render: renderer.ssr.renderHydrationScript
          })
        );
      }
      const renderedElement = renderElement$1("astro-island", island, false);
      destination.write(markHTMLString(renderedElement));
    }
  };
}
function sanitizeElementName(tag) {
  const unsafe = /[&<>'"\s]+/;
  if (!unsafe.test(tag)) return tag;
  return tag.trim().split(unsafe)[0].trim();
}
async function renderFragmentComponent(result, slots = {}) {
  const children = await renderSlotToString(result, slots?.default);
  return {
    render(destination) {
      if (children == null) return;
      destination.write(children);
    }
  };
}
async function renderHTMLComponent(result, Component, _props, slots = {}) {
  const { slotInstructions, children } = await renderSlots(result, slots);
  const html = Component({ slots: children });
  const hydrationHtml = slotInstructions ? slotInstructions.map((instr) => chunkToString(result, instr)).join("") : "";
  return {
    render(destination) {
      destination.write(markHTMLString(hydrationHtml + html));
    }
  };
}
function renderAstroComponent(result, displayName, Component, props, slots = {}) {
  if (containsServerDirective(props)) {
    const serverIslandComponent = new ServerIslandComponent(result, props, slots, displayName);
    result._metadata.propagators.add(serverIslandComponent);
    return serverIslandComponent;
  }
  const instance = createAstroComponentInstance(result, displayName, Component, props, slots);
  return {
    render(destination) {
      return instance.render(destination);
    }
  };
}
function renderComponent(result, displayName, Component, props, slots = {}) {
  if (isPromise(Component)) {
    return Component.catch(handleCancellation).then((x) => {
      return renderComponent(result, displayName, x, props, slots);
    });
  }
  if (isFragmentComponent(Component)) {
    return renderFragmentComponent(result, slots).catch(handleCancellation);
  }
  props = normalizeProps(props);
  if (isHTMLComponent(Component)) {
    return renderHTMLComponent(result, Component, props, slots).catch(handleCancellation);
  }
  if (isAstroComponentFactory(Component)) {
    return renderAstroComponent(result, displayName, Component, props, slots);
  }
  return renderFrameworkComponent(result, displayName, Component, props, slots).catch(
    handleCancellation
  );
  function handleCancellation(e2) {
    if (result.cancelled)
      return {
        render() {
        }
      };
    throw e2;
  }
}
function normalizeProps(props) {
  if (props["class:list"] !== void 0) {
    const value = props["class:list"];
    delete props["class:list"];
    props["class"] = clsx(props["class"], value);
    if (props["class"] === "") {
      delete props["class"];
    }
  }
  return props;
}
async function renderComponentToString(result, displayName, Component, props, slots = {}, isPage = false, route) {
  let str = "";
  let renderedFirstPageChunk = false;
  let head = "";
  if (isPage && !result.partial && nonAstroPageNeedsHeadInjection(Component)) {
    head += chunkToString(result, maybeRenderHead());
  }
  try {
    const destination = {
      write(chunk) {
        if (isPage && !result.partial && !renderedFirstPageChunk) {
          renderedFirstPageChunk = true;
          if (!/<!doctype html/i.test(String(chunk))) {
            const doctype = result.compressHTML ? "<!DOCTYPE html>" : "<!DOCTYPE html>\n";
            str += doctype + head;
          }
        }
        if (chunk instanceof Response) return;
        str += chunkToString(result, chunk);
      }
    };
    const renderInstance = await renderComponent(result, displayName, Component, props, slots);
    if (containsServerDirective(props)) {
      await bufferHeadContent(result);
    }
    await renderInstance.render(destination);
  } catch (e2) {
    if (AstroError.is(e2) && !e2.loc) {
      e2.setLocation({
        file: route?.component
      });
    }
    throw e2;
  }
  return str;
}
function nonAstroPageNeedsHeadInjection(pageComponent) {
  return !!pageComponent?.[needsHeadRenderingSymbol];
}
const ClientOnlyPlaceholder$1 = "astro-client-only";
const hasTriedRenderComponentSymbol = /* @__PURE__ */ Symbol("hasTriedRenderComponent");
async function renderJSX(result, vnode) {
  switch (true) {
    case vnode instanceof HTMLString:
      if (vnode.toString().trim() === "") {
        return "";
      }
      return vnode;
    case typeof vnode === "string":
      return markHTMLString(escapeHTML(vnode));
    case typeof vnode === "function":
      return vnode;
    case (!vnode && vnode !== 0):
      return "";
    case Array.isArray(vnode): {
      const renderedItems = await Promise.all(vnode.map((v) => renderJSX(result, v)));
      let instructions = null;
      let content = "";
      for (const item of renderedItems) {
        if (item instanceof SlotString) {
          content += item;
          instructions = mergeSlotInstructions(instructions, item);
        } else {
          content += item;
        }
      }
      if (instructions) {
        return markHTMLString(new SlotString(content, instructions));
      }
      return markHTMLString(content);
    }
  }
  return renderJSXVNode(result, vnode);
}
async function renderJSXVNode(result, vnode) {
  if (isVNode(vnode)) {
    switch (true) {
      case !vnode.type: {
        throw new Error(`Unable to render ${result.pathname} because it contains an undefined Component!
Did you forget to import the component or is it possible there is a typo?`);
      }
      case vnode.type === /* @__PURE__ */ Symbol.for("astro:fragment"):
        return renderJSX(result, vnode.props.children);
      case isAstroComponentFactory(vnode.type): {
        let props = {};
        let slots = {};
        for (const [key, value] of Object.entries(vnode.props ?? {})) {
          if (key === "children" || value && typeof value === "object" && value["$$slot"]) {
            slots[key === "children" ? "default" : key] = () => renderJSX(result, value);
          } else {
            props[key] = value;
          }
        }
        const str = await renderComponentToString(
          result,
          vnode.type.name,
          vnode.type,
          props,
          slots
        );
        const html = markHTMLString(str);
        return html;
      }
      case (!vnode.type && vnode.type !== 0):
        return "";
      case (typeof vnode.type === "string" && vnode.type !== ClientOnlyPlaceholder$1):
        return markHTMLString(await renderElement(result, vnode.type, vnode.props ?? {}));
    }
    if (vnode.type) {
      let extractSlots2 = function(child) {
        if (Array.isArray(child)) {
          return child.map((c) => extractSlots2(c));
        }
        if (!isVNode(child)) {
          _slots.default.push(child);
          return;
        }
        if ("slot" in child.props) {
          _slots[child.props.slot] = [..._slots[child.props.slot] ?? [], child];
          delete child.props.slot;
          return;
        }
        _slots.default.push(child);
      };
      if (typeof vnode.type === "function" && vnode.props["server:root"]) {
        const output2 = await vnode.type(vnode.props ?? {});
        return await renderJSX(result, output2);
      }
      if (typeof vnode.type === "function") {
        if (vnode.props[hasTriedRenderComponentSymbol]) {
          delete vnode.props[hasTriedRenderComponentSymbol];
          const output2 = await vnode.type(vnode.props ?? {});
          if (output2?.[AstroJSX] || !output2) {
            return await renderJSXVNode(result, output2);
          } else {
            return;
          }
        } else {
          vnode.props[hasTriedRenderComponentSymbol] = true;
        }
      }
      const { children = null, ...props } = vnode.props ?? {};
      const _slots = {
        default: []
      };
      extractSlots2(children);
      for (const [key, value] of Object.entries(props)) {
        if (value?.["$$slot"]) {
          _slots[key] = value;
          delete props[key];
        }
      }
      const slotPromises = [];
      const slots = {};
      for (const [key, value] of Object.entries(_slots)) {
        slotPromises.push(
          renderJSX(result, value).then((output2) => {
            if (output2.toString().trim().length === 0) return;
            slots[key] = () => output2;
          })
        );
      }
      await Promise.all(slotPromises);
      let output;
      if (vnode.type === ClientOnlyPlaceholder$1 && vnode.props["client:only"]) {
        output = await renderComponentToString(
          result,
          vnode.props["client:display-name"] ?? "",
          null,
          props,
          slots
        );
      } else {
        output = await renderComponentToString(
          result,
          typeof vnode.type === "function" ? vnode.type.name : vnode.type,
          vnode.type,
          props,
          slots
        );
      }
      return markHTMLString(output);
    }
  }
  return markHTMLString(`${vnode}`);
}
async function renderElement(result, tag, { children, ...props }) {
  return markHTMLString(
    `<${tag}${spreadAttributes(props)}${markHTMLString(
      (children == null || children === "") && voidElementNames.test(tag) ? `/>` : `>${children == null ? "" : await renderJSX(result, prerenderElementChildren$1(tag, children))}</${tag}>`
    )}`
  );
}
function prerenderElementChildren$1(tag, children) {
  if (typeof children === "string" && (tag === "style" || tag === "script")) {
    return markHTMLString(children);
  } else {
    return children;
  }
}
const ClientOnlyPlaceholder = "astro-client-only";
function renderJSXToQueue(vnode, result, queue, pool, stack, parent, metadata) {
  if (vnode instanceof HTMLString) {
    const html = vnode.toString();
    if (html.trim() === "") return;
    const node = pool.acquire("html-string", html);
    node.html = html;
    queue.nodes.push(node);
    return;
  }
  if (typeof vnode === "string") {
    const node = pool.acquire("text", vnode);
    node.content = vnode;
    queue.nodes.push(node);
    return;
  }
  if (typeof vnode === "number" || typeof vnode === "boolean") {
    const str = String(vnode);
    const node = pool.acquire("text", str);
    node.content = str;
    queue.nodes.push(node);
    return;
  }
  if (vnode == null || vnode === false) {
    return;
  }
  if (Array.isArray(vnode)) {
    for (let i2 = vnode.length - 1; i2 >= 0; i2 = i2 - 1) {
      stack.push({ node: vnode[i2], parent, metadata });
    }
    return;
  }
  if (!isVNode(vnode)) {
    const str = String(vnode);
    const node = pool.acquire("text", str);
    node.content = str;
    queue.nodes.push(node);
    return;
  }
  handleVNode(vnode, result, queue, pool, stack, parent, metadata);
}
function handleVNode(vnode, result, queue, pool, stack, parent, metadata) {
  if (!vnode.type) {
    throw new Error(
      `Unable to render ${result.pathname} because it contains an undefined Component!
Did you forget to import the component or is it possible there is a typo?`
    );
  }
  if (vnode.type === /* @__PURE__ */ Symbol.for("astro:fragment")) {
    stack.push({ node: vnode.props?.children, parent, metadata });
    return;
  }
  if (isAstroComponentFactory(vnode.type)) {
    const factory = vnode.type;
    let props = {};
    let slots = {};
    for (const [key, value] of Object.entries(vnode.props ?? {})) {
      if (key === "children" || value && typeof value === "object" && value["$$slot"]) {
        slots[key === "children" ? "default" : key] = () => renderJSX(result, value);
      } else {
        props[key] = value;
      }
    }
    const displayName = metadata?.displayName || factory.name || "Anonymous";
    const instance = createAstroComponentInstance(result, displayName, factory, props, slots);
    const queueNode = pool.acquire("component");
    queueNode.instance = instance;
    queue.nodes.push(queueNode);
    return;
  }
  if (typeof vnode.type === "string" && vnode.type !== ClientOnlyPlaceholder) {
    renderHTMLElement(vnode, result, queue, pool, stack, parent, metadata);
    return;
  }
  if (typeof vnode.type === "function") {
    if (vnode.props?.["server:root"]) {
      const output3 = vnode.type(vnode.props ?? {});
      stack.push({ node: output3, parent, metadata });
      return;
    }
    const output2 = vnode.type(vnode.props ?? {});
    stack.push({ node: output2, parent, metadata });
    return;
  }
  const output = renderJSX(result, vnode);
  stack.push({ node: output, parent, metadata });
}
function renderHTMLElement(vnode, _result, queue, pool, stack, parent, metadata) {
  const tag = vnode.type;
  const { children, ...props } = vnode.props ?? {};
  const attrs = spreadAttributes(props);
  const isVoidElement = (children == null || children === "") && voidElementNames.test(tag);
  if (isVoidElement) {
    const html = `<${tag}${attrs}/>`;
    const node = pool.acquire("html-string", html);
    node.html = html;
    queue.nodes.push(node);
    return;
  }
  const openTag = `<${tag}${attrs}>`;
  const openTagHtml = queue.htmlStringCache ? queue.htmlStringCache.getOrCreate(openTag) : markHTMLString(openTag);
  stack.push({ node: openTagHtml, parent, metadata });
  if (children != null && children !== "") {
    const processedChildren = prerenderElementChildren(tag, children, queue.htmlStringCache);
    stack.push({ node: processedChildren, parent, metadata });
  }
  const closeTag = `</${tag}>`;
  const closeTagHtml = queue.htmlStringCache ? queue.htmlStringCache.getOrCreate(closeTag) : markHTMLString(closeTag);
  stack.push({ node: closeTagHtml, parent, metadata });
}
function prerenderElementChildren(tag, children, htmlStringCache) {
  if (typeof children === "string" && (tag === "style" || tag === "script")) {
    return htmlStringCache ? htmlStringCache.getOrCreate(children) : markHTMLString(children);
  }
  return children;
}
async function buildRenderQueue(root, result, pool) {
  const queue = {
    nodes: [],
    result,
    pool,
    htmlStringCache: result._experimentalQueuedRendering?.htmlStringCache
  };
  const stack = [{ node: root, parent: null }];
  while (stack.length > 0) {
    const item = stack.pop();
    if (!item) {
      continue;
    }
    let { node, parent } = item;
    if (isPromise(node)) {
      try {
        const resolved = await node;
        stack.push({ node: resolved, parent, metadata: item.metadata });
      } catch (error2) {
        throw error2;
      }
      continue;
    }
    if (node == null || node === false) {
      continue;
    }
    if (typeof node === "string") {
      const queueNode = pool.acquire("text", node);
      queueNode.content = node;
      queue.nodes.push(queueNode);
      continue;
    }
    if (typeof node === "number" || typeof node === "boolean") {
      const str = String(node);
      const queueNode = pool.acquire("text", str);
      queueNode.content = str;
      queue.nodes.push(queueNode);
      continue;
    }
    if (isHTMLString(node)) {
      const html = node.toString();
      const queueNode = pool.acquire("html-string", html);
      queueNode.html = html;
      queue.nodes.push(queueNode);
      continue;
    }
    if (node instanceof SlotString) {
      const html = node.toString();
      const queueNode = pool.acquire("html-string", html);
      queueNode.html = html;
      queue.nodes.push(queueNode);
      continue;
    }
    if (isVNode(node)) {
      renderJSXToQueue(node, result, queue, pool, stack, parent, item.metadata);
      continue;
    }
    if (Array.isArray(node)) {
      for (const n2 of node) {
        stack.push({ node: n2, parent, metadata: item.metadata });
      }
      continue;
    }
    if (isRenderInstruction(node)) {
      const queueNode = pool.acquire("instruction");
      queueNode.instruction = node;
      queue.nodes.push(queueNode);
      continue;
    }
    if (isRenderTemplateResult(node)) {
      const htmlParts = node["htmlParts"];
      const expressions = node["expressions"];
      if (htmlParts[0]) {
        const htmlString = queue.htmlStringCache ? queue.htmlStringCache.getOrCreate(htmlParts[0]) : markHTMLString(htmlParts[0]);
        stack.push({
          node: htmlString,
          parent,
          metadata: item.metadata
        });
      }
      for (let i2 = 0; i2 < expressions.length; i2 = i2 + 1) {
        stack.push({ node: expressions[i2], parent, metadata: item.metadata });
        if (htmlParts[i2 + 1]) {
          const htmlString = queue.htmlStringCache ? queue.htmlStringCache.getOrCreate(htmlParts[i2 + 1]) : markHTMLString(htmlParts[i2 + 1]);
          stack.push({
            node: htmlString,
            parent,
            metadata: item.metadata
          });
        }
      }
      continue;
    }
    if (isAstroComponentInstance(node)) {
      const queueNode = pool.acquire("component");
      queueNode.instance = node;
      queue.nodes.push(queueNode);
      continue;
    }
    if (isAstroComponentFactory(node)) {
      const factory = node;
      const props = item.metadata?.props || {};
      const slots = item.metadata?.slots || {};
      const displayName = item.metadata?.displayName || factory.name || "Anonymous";
      const instance = createAstroComponentInstance(result, displayName, factory, props, slots);
      const queueNode = pool.acquire("component");
      queueNode.instance = instance;
      if (isAPropagatingComponent(result, factory)) {
        try {
          const returnValue = await instance.init(result);
          if (isHeadAndContent(returnValue) && returnValue.head) {
            result._metadata.extraHead.push(returnValue.head);
          }
        } catch (error2) {
          throw error2;
        }
      }
      queue.nodes.push(queueNode);
      continue;
    }
    if (isRenderInstance(node)) {
      const queueNode = pool.acquire("component");
      queueNode.instance = node;
      queue.nodes.push(queueNode);
      continue;
    }
    if (typeof node === "object" && Symbol.iterator in node) {
      const items = Array.from(node);
      for (const iterItem of items) {
        stack.push({ node: iterItem, parent, metadata: item.metadata });
      }
      continue;
    }
    if (typeof node === "object" && Symbol.asyncIterator in node) {
      try {
        const items = [];
        for await (const asyncItem of node) {
          items.push(asyncItem);
        }
        for (const iterItem of items) {
          stack.push({ node: iterItem, parent, metadata: item.metadata });
        }
      } catch (error2) {
        throw error2;
      }
      continue;
    }
    if (node instanceof Response) {
      const queueNode = pool.acquire("html-string", "");
      queueNode.html = "";
      queue.nodes.push(queueNode);
      continue;
    }
    if (isHTMLString(node)) {
      const html = String(node);
      const queueNode = pool.acquire("html-string", html);
      queueNode.html = html;
      queue.nodes.push(queueNode);
    } else {
      const str = String(node);
      const queueNode = pool.acquire("text", str);
      queueNode.content = str;
      queue.nodes.push(queueNode);
    }
  }
  queue.nodes.reverse();
  return queue;
}
async function renderQueue(queue, destination) {
  const result = queue.result;
  const pool = queue.pool;
  const cache = queue.htmlStringCache;
  let batchBuffer = "";
  let i2 = 0;
  while (i2 < queue.nodes.length) {
    const node = queue.nodes[i2];
    try {
      if (canBatch(node)) {
        const batchStart = i2;
        while (i2 < queue.nodes.length && canBatch(queue.nodes[i2])) {
          batchBuffer += renderNodeToString(queue.nodes[i2]);
          i2 = i2 + 1;
        }
        if (batchBuffer) {
          const htmlString = cache ? cache.getOrCreate(batchBuffer) : markHTMLString(batchBuffer);
          destination.write(htmlString);
          batchBuffer = "";
        }
        if (pool) {
          for (let j = batchStart; j < i2; j++) {
            pool.release(queue.nodes[j]);
          }
        }
      } else {
        await renderNode(node, destination, result);
        if (pool) {
          pool.release(node);
        }
        i2 = i2 + 1;
      }
    } catch (error2) {
      throw error2;
    }
  }
  if (batchBuffer) {
    const htmlString = cache ? cache.getOrCreate(batchBuffer) : markHTMLString(batchBuffer);
    destination.write(htmlString);
  }
}
function canBatch(node) {
  return node.type === "text" || node.type === "html-string";
}
function renderNodeToString(node) {
  switch (node.type) {
    case "text":
      return node.content ? escapeHTML(node.content) : "";
    case "html-string":
      return node.html || "";
    case "component":
    case "instruction": {
      return "";
    }
  }
}
async function renderNode(node, destination, result) {
  const cache = result._experimentalQueuedRendering?.htmlStringCache;
  switch (node.type) {
    case "text": {
      if (node.content) {
        const escaped = escapeHTML(node.content);
        const htmlString = cache ? cache.getOrCreate(escaped) : markHTMLString(escaped);
        destination.write(htmlString);
      }
      break;
    }
    case "html-string": {
      if (node.html) {
        const htmlString = cache ? cache.getOrCreate(node.html) : markHTMLString(node.html);
        destination.write(htmlString);
      }
      break;
    }
    case "instruction": {
      if (node.instruction) {
        destination.write(node.instruction);
      }
      break;
    }
    case "component": {
      if (node.instance) {
        let componentHtml = "";
        const componentDestination = {
          write(chunk) {
            if (chunk instanceof Response) return;
            componentHtml += chunkToString(result, chunk);
          }
        };
        await node.instance.render(componentDestination);
        if (componentHtml) {
          destination.write(componentHtml);
        }
      }
      break;
    }
  }
}
async function renderPage(result, componentFactory, props, children, streaming, route) {
  if (!isAstroComponentFactory(componentFactory)) {
    result._metadata.headInTree = result.componentMetadata.get(componentFactory.moduleId)?.containsHead ?? false;
    const pageProps = { ...props ?? {}, "server:root": true };
    let str;
    if (result._experimentalQueuedRendering && result._experimentalQueuedRendering.enabled) {
      const vnode = await componentFactory(pageProps);
      const queue = await buildRenderQueue(
        vnode,
        result,
        result._experimentalQueuedRendering.pool
      );
      let html = "";
      let renderedFirst = false;
      const destination = {
        write(chunk) {
          if (chunk instanceof Response) return;
          if (!renderedFirst && !result.partial) {
            renderedFirst = true;
            const chunkStr = String(chunk);
            if (!/<!doctype html/i.test(chunkStr)) {
              const doctype = result.compressHTML ? "<!DOCTYPE html>" : "<!DOCTYPE html>\n";
              html += doctype;
            }
          }
          html += chunkToString(result, chunk);
        }
      };
      await renderQueue(queue, destination);
      str = html;
    } else {
      str = await renderComponentToString(
        result,
        componentFactory.name,
        componentFactory,
        pageProps,
        {},
        true,
        route
      );
    }
    const bytes = encoder.encode(str);
    const headers2 = new Headers([
      ["Content-Type", "text/html"],
      ["Content-Length", bytes.byteLength.toString()]
    ]);
    if (result.shouldInjectCspMetaTags && (result.cspDestination === "header" || result.cspDestination === "adapter")) {
      headers2.set("content-security-policy", renderCspContent(result));
    }
    return new Response(bytes, {
      headers: headers2,
      status: result.response.status
    });
  }
  result._metadata.headInTree = result.componentMetadata.get(componentFactory.moduleId)?.containsHead ?? false;
  let body;
  if (streaming) {
    if (isNode && !isDeno) {
      const nodeBody = await renderToAsyncIterable(
        result,
        componentFactory,
        props,
        children,
        true,
        route
      );
      body = nodeBody;
    } else {
      body = await renderToReadableStream(result, componentFactory, props, children, true, route);
    }
  } else {
    body = await renderToString(result, componentFactory, props, children, true, route);
  }
  if (body instanceof Response) return body;
  const init = result.response;
  const headers = new Headers(init.headers);
  if (result.shouldInjectCspMetaTags && result.cspDestination === "header" || result.cspDestination === "adapter") {
    headers.set("content-security-policy", renderCspContent(result));
  }
  if (!streaming && typeof body === "string") {
    body = encoder.encode(body);
    headers.set("Content-Length", body.byteLength.toString());
  }
  let status = init.status;
  let statusText = init.statusText;
  if (route?.route === "/404") {
    status = 404;
    if (statusText === "OK") {
      statusText = "Not Found";
    }
  } else if (route?.route === "/500") {
    status = 500;
    if (statusText === "OK") {
      statusText = "Internal Server Error";
    }
  }
  if (status) {
    return new Response(body, { ...init, headers, status, statusText });
  } else {
    return new Response(body, { ...init, headers });
  }
}
"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_".split("").reduce((v, c) => (v[c.charCodeAt(0)] = c, v), []);
"-0123456789_".split("").reduce((v, c) => (v[c.charCodeAt(0)] = c, v), []);
function spreadAttributes(values = {}, _name, { class: scopedClassName } = {}) {
  let output = "";
  if (scopedClassName) {
    if (typeof values.class !== "undefined") {
      values.class += ` ${scopedClassName}`;
    } else if (typeof values["class:list"] !== "undefined") {
      values["class:list"] = [values["class:list"], scopedClassName];
    } else {
      values.class = scopedClassName;
    }
  }
  for (const [key, value] of Object.entries(values)) {
    output += addAttribute(value, key, true, _name);
  }
  return markHTMLString(output);
}
function deduplicateDirectiveValues(existingDirective, newDirective) {
  const [directiveName, ...existingValues] = existingDirective.split(/\s+/).filter(Boolean);
  const [newDirectiveName, ...newValues] = newDirective.split(/\s+/).filter(Boolean);
  if (directiveName !== newDirectiveName) {
    return void 0;
  }
  const finalDirectives = Array.from(/* @__PURE__ */ new Set([...existingValues, ...newValues]));
  return `${directiveName} ${finalDirectives.join(" ")}`;
}
function pushDirective(directives, newDirective) {
  let deduplicated = false;
  if (directives.length === 0) {
    return [newDirective];
  }
  const finalDirectives = [];
  for (const directive of directives) {
    if (deduplicated) {
      finalDirectives.push(directive);
      continue;
    }
    const result = deduplicateDirectiveValues(directive, newDirective);
    if (result) {
      finalDirectives.push(result);
      deduplicated = true;
    } else {
      finalDirectives.push(directive);
      finalDirectives.push(newDirective);
    }
  }
  return finalDirectives;
}
async function callMiddleware(onRequest, apiContext, responseFunction) {
  let nextCalled = false;
  let responseFunctionPromise = void 0;
  const next = async (payload) => {
    nextCalled = true;
    responseFunctionPromise = responseFunction(apiContext, payload);
    return responseFunctionPromise;
  };
  const middlewarePromise = onRequest(apiContext, next);
  return await Promise.resolve(middlewarePromise).then(async (value) => {
    if (nextCalled) {
      if (typeof value !== "undefined") {
        if (value instanceof Response === false) {
          throw new AstroError(MiddlewareNotAResponse);
        }
        return value;
      } else {
        if (responseFunctionPromise) {
          return responseFunctionPromise;
        } else {
          throw new AstroError(MiddlewareNotAResponse);
        }
      }
    } else if (typeof value === "undefined") {
      throw new AstroError(MiddlewareNoDataOrNextCalled);
    } else if (value instanceof Response === false) {
      throw new AstroError(MiddlewareNotAResponse);
    } else {
      return value;
    }
  });
}
const EMPTY_OPTIONS = Object.freeze({ tags: [] });
class NoopAstroCache {
  enabled = false;
  set() {
  }
  get tags() {
    return [];
  }
  get options() {
    return EMPTY_OPTIONS;
  }
  async invalidate() {
  }
}
let hasWarned = false;
class DisabledAstroCache {
  enabled = false;
  #logger;
  constructor(logger) {
    this.#logger = logger;
  }
  #warn() {
    if (!hasWarned) {
      hasWarned = true;
      this.#logger?.warn(
        "cache",
        "`cache.set()` was called but caching is not enabled. Configure a cache provider in your Astro config under `experimental.cache` to enable caching."
      );
    }
  }
  set() {
    this.#warn();
  }
  get tags() {
    return [];
  }
  get options() {
    return EMPTY_OPTIONS;
  }
  async invalidate() {
    throw new AstroError(CacheNotEnabled);
  }
}
function createRequest({
  url,
  headers,
  method = "GET",
  body = void 0,
  logger,
  isPrerendered = false,
  routePattern,
  init
}) {
  const headersObj = isPrerendered ? void 0 : headers instanceof Headers ? headers : new Headers(
    // Filter out HTTP/2 pseudo-headers. These are internally-generated headers added to all HTTP/2 requests with trusted metadata about the request.
    // Examples include `:method`, `:scheme`, `:authority`, and `:path`.
    // They are always prefixed with a colon to distinguish them from other headers, and it is an error to add the to a Headers object manually.
    // See https://httpwg.org/specs/rfc7540.html#HttpRequest
    Object.entries(headers).filter(([name]) => !name.startsWith(":"))
  );
  if (typeof url === "string") url = new URL(url);
  if (isPrerendered) {
    url.search = "";
  }
  const request = new Request(url, {
    method,
    headers: headersObj,
    // body is made available only if the request is for a page that will be on-demand rendered
    body: isPrerendered ? null : body,
    ...init
  });
  if (isPrerendered) {
    let _headers = request.headers;
    const { value, writable, ...headersDesc } = Object.getOwnPropertyDescriptor(request, "headers") || {};
    Object.defineProperty(request, "headers", {
      ...headersDesc,
      get() {
        logger.warn(
          null,
          `\`Astro.request.headers\` was used when rendering the route \`${routePattern}'\`. \`Astro.request.headers\` is not available on prerendered pages. If you need access to request headers, make sure that the page is server-rendered using \`export const prerender = false;\` or by setting \`output\` to \`"server"\` in your Astro config to make all your pages server-rendered by default.`
        );
        return _headers;
      },
      set(newHeaders) {
        _headers = newHeaders;
      }
    });
  }
  return request;
}
function template({
  title,
  pathname,
  statusCode = 404,
  tabTitle,
  body
}) {
  return `<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>${tabTitle}</title>
		<style>
			:root {
				--gray-10: hsl(258, 7%, 10%);
				--gray-20: hsl(258, 7%, 20%);
				--gray-30: hsl(258, 7%, 30%);
				--gray-40: hsl(258, 7%, 40%);
				--gray-50: hsl(258, 7%, 50%);
				--gray-60: hsl(258, 7%, 60%);
				--gray-70: hsl(258, 7%, 70%);
				--gray-80: hsl(258, 7%, 80%);
				--gray-90: hsl(258, 7%, 90%);
				--black: #13151A;
				--accent-light: #E0CCFA;
			}

			* {
				box-sizing: border-box;
			}

			html {
				background: var(--black);
				color-scheme: dark;
				accent-color: var(--accent-light);
			}

			body {
				background-color: var(--gray-10);
				color: var(--gray-80);
				font-family: ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace;
				line-height: 1.5;
				margin: 0;
			}

			a {
				color: var(--accent-light);
			}

			.center {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				height: 100vh;
				width: 100vw;
			}

			h1 {
				margin-bottom: 8px;
				color: white;
				font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
				font-weight: 700;
				margin-top: 1rem;
				margin-bottom: 0;
			}

			.statusCode {
				color: var(--accent-light);
			}

			.astro-icon {
				height: 124px;
				width: 124px;
			}

			pre, code {
				padding: 2px 8px;
				background: rgba(0,0,0, 0.25);
				border: 1px solid rgba(255,255,255, 0.25);
				border-radius: 4px;
				font-size: 1.2em;
				margin-top: 0;
				max-width: 60em;
			}
		</style>
	</head>
	<body>
		<main class="center">
			<svg class="astro-icon" xmlns="http://www.w3.org/2000/svg" width="64" height="80" viewBox="0 0 64 80" fill="none"> <path d="M20.5253 67.6322C16.9291 64.3531 15.8793 57.4632 17.3776 52.4717C19.9755 55.6188 23.575 56.6157 27.3035 57.1784C33.0594 58.0468 38.7122 57.722 44.0592 55.0977C44.6709 54.7972 45.2362 54.3978 45.9045 53.9931C46.4062 55.4451 46.5368 56.9109 46.3616 58.4028C45.9355 62.0362 44.1228 64.8429 41.2397 66.9705C40.0868 67.8215 38.8669 68.5822 37.6762 69.3846C34.0181 71.8508 33.0285 74.7426 34.403 78.9491C34.4357 79.0516 34.4649 79.1541 34.5388 79.4042C32.6711 78.5705 31.3069 77.3565 30.2674 75.7604C29.1694 74.0757 28.6471 72.2121 28.6196 70.1957C28.6059 69.2144 28.6059 68.2244 28.4736 67.257C28.1506 64.8985 27.0406 63.8425 24.9496 63.7817C22.8036 63.7192 21.106 65.0426 20.6559 67.1268C20.6215 67.2865 20.5717 67.4446 20.5218 67.6304L20.5253 67.6322Z" fill="white"/> <path d="M20.5253 67.6322C16.9291 64.3531 15.8793 57.4632 17.3776 52.4717C19.9755 55.6188 23.575 56.6157 27.3035 57.1784C33.0594 58.0468 38.7122 57.722 44.0592 55.0977C44.6709 54.7972 45.2362 54.3978 45.9045 53.9931C46.4062 55.4451 46.5368 56.9109 46.3616 58.4028C45.9355 62.0362 44.1228 64.8429 41.2397 66.9705C40.0868 67.8215 38.8669 68.5822 37.6762 69.3846C34.0181 71.8508 33.0285 74.7426 34.403 78.9491C34.4357 79.0516 34.4649 79.1541 34.5388 79.4042C32.6711 78.5705 31.3069 77.3565 30.2674 75.7604C29.1694 74.0757 28.6471 72.2121 28.6196 70.1957C28.6059 69.2144 28.6059 68.2244 28.4736 67.257C28.1506 64.8985 27.0406 63.8425 24.9496 63.7817C22.8036 63.7192 21.106 65.0426 20.6559 67.1268C20.6215 67.2865 20.5717 67.4446 20.5218 67.6304L20.5253 67.6322Z" fill="url(#paint0_linear_738_686)"/> <path d="M0 51.6401C0 51.6401 10.6488 46.4654 21.3274 46.4654L29.3786 21.6102C29.6801 20.4082 30.5602 19.5913 31.5538 19.5913C32.5474 19.5913 33.4275 20.4082 33.7289 21.6102L41.7802 46.4654C54.4274 46.4654 63.1076 51.6401 63.1076 51.6401C63.1076 51.6401 45.0197 2.48776 44.9843 2.38914C44.4652 0.935933 43.5888 0 42.4073 0H20.7022C19.5206 0 18.6796 0.935933 18.1251 2.38914C18.086 2.4859 0 51.6401 0 51.6401Z" fill="white"/> <defs> <linearGradient id="paint0_linear_738_686" x1="31.554" y1="75.4423" x2="39.7462" y2="48.376" gradientUnits="userSpaceOnUse"> <stop stop-color="#D83333"/> <stop offset="1" stop-color="#F041FF"/> </linearGradient> </defs> </svg>
			<h1>${statusCode ? `<span class="statusCode">${statusCode}: </span> ` : ""}<span class="statusMessage">${title}</span></h1>
			${body || `
				<pre>Path: ${escape(pathname)}</pre>
			`}
			</main>
	</body>
</html>`;
}
const DEFAULT_404_ROUTE = {
  component: DEFAULT_404_COMPONENT,
  params: [],
  pattern: /^\/404\/?$/,
  prerender: false,
  pathname: "/404",
  segments: [[{ content: "404", dynamic: false, spread: false }]],
  type: "page",
  route: "/404",
  fallbackRoutes: [],
  isIndex: false,
  origin: "internal",
  distURL: []
};
async function default404Page({ pathname }) {
  return new Response(
    template({
      statusCode: 404,
      title: "Not found",
      tabTitle: "404: Not Found",
      pathname
    }),
    { status: 404, headers: { "Content-Type": "text/html" } }
  );
}
default404Page.isAstroComponentFactory = true;
const default404Instance = {
  default: default404Page
};
function findRouteToRewrite({
  payload,
  routes,
  request,
  trailingSlash,
  buildFormat,
  base,
  outDir
}) {
  let newUrl = void 0;
  if (payload instanceof URL) {
    newUrl = payload;
  } else if (payload instanceof Request) {
    newUrl = new URL(payload.url);
  } else {
    newUrl = new URL(payload, new URL(request.url).origin);
  }
  let pathname = newUrl.pathname;
  const shouldAppendSlash = shouldAppendForwardSlash(trailingSlash, buildFormat);
  if (base !== "/") {
    const isBasePathRequest = newUrl.pathname === base || newUrl.pathname === removeTrailingForwardSlash(base);
    if (isBasePathRequest) {
      pathname = shouldAppendSlash ? "/" : "";
    } else if (newUrl.pathname.startsWith(base)) {
      pathname = shouldAppendSlash ? appendForwardSlash(newUrl.pathname) : removeTrailingForwardSlash(newUrl.pathname);
      pathname = pathname.slice(base.length);
    }
  }
  if (!pathname.startsWith("/") && shouldAppendSlash && newUrl.pathname.endsWith("/")) {
    pathname = prependForwardSlash(pathname);
  }
  if (pathname === "/" && base !== "/" && !shouldAppendSlash) {
    pathname = "";
  }
  if (buildFormat === "file") {
    pathname = pathname.replace(/\.html$/, "");
  }
  if (base !== "/" && (pathname === "" || pathname === "/") && !shouldAppendSlash) {
    newUrl.pathname = removeTrailingForwardSlash(base);
  } else {
    newUrl.pathname = joinPaths(...[base, pathname].filter(Boolean));
  }
  const decodedPathname = decodeURI(pathname);
  let foundRoute;
  for (const route of routes) {
    if (route.pattern.test(decodedPathname)) {
      if (route.params && route.params.length !== 0 && route.distURL && route.distURL.length !== 0) {
        if (!route.distURL.find(
          (url) => url.href.replace(outDir.toString(), "").replace(/(?:\/index\.html|\.html)$/, "") === trimSlashes(pathname)
        )) {
          continue;
        }
      }
      foundRoute = route;
      break;
    }
  }
  if (foundRoute) {
    return {
      routeData: foundRoute,
      newUrl,
      pathname: decodedPathname
    };
  } else {
    const custom404 = routes.find((route) => route.route === "/404");
    if (custom404) {
      return { routeData: custom404, newUrl, pathname };
    } else {
      return { routeData: DEFAULT_404_ROUTE, newUrl, pathname };
    }
  }
}
function copyRequest(newUrl, oldRequest, isPrerendered, logger, routePattern) {
  if (oldRequest.bodyUsed) {
    throw new AstroError(RewriteWithBodyUsed);
  }
  return createRequest({
    url: newUrl,
    method: oldRequest.method,
    body: oldRequest.body,
    isPrerendered,
    logger,
    headers: isPrerendered ? {} : oldRequest.headers,
    routePattern,
    init: {
      referrer: oldRequest.referrer,
      referrerPolicy: oldRequest.referrerPolicy,
      mode: oldRequest.mode,
      credentials: oldRequest.credentials,
      cache: oldRequest.cache,
      redirect: oldRequest.redirect,
      integrity: oldRequest.integrity,
      signal: oldRequest.signal,
      keepalive: oldRequest.keepalive,
      // https://fetch.spec.whatwg.org/#dom-request-duplex
      // @ts-expect-error It isn't part of the types, but undici accepts it and it allows to carry over the body to a new request
      duplex: "half"
    }
  });
}
function setOriginPathname(request, pathname, trailingSlash, buildFormat) {
  if (!pathname) {
    pathname = "/";
  }
  const shouldAppendSlash = shouldAppendForwardSlash(trailingSlash, buildFormat);
  let finalPathname;
  if (pathname === "/") {
    finalPathname = "/";
  } else if (shouldAppendSlash) {
    finalPathname = appendForwardSlash(pathname);
  } else {
    finalPathname = removeTrailingForwardSlash(pathname);
  }
  Reflect.set(request, originPathnameSymbol, encodeURIComponent(finalPathname));
}
function getOriginPathname(request) {
  const origin = Reflect.get(request, originPathnameSymbol);
  if (origin) {
    return decodeURIComponent(origin);
  }
  return new URL(request.url).pathname;
}
const NOOP_ACTIONS_MOD = {
  server: {}
};
function defineMiddleware(fn) {
  return fn;
}
const FORM_CONTENT_TYPES = [
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
];
const SAFE_METHODS = ["GET", "HEAD", "OPTIONS"];
function createOriginCheckMiddleware() {
  return defineMiddleware((context, next) => {
    const { request, url, isPrerendered } = context;
    if (isPrerendered) {
      return next();
    }
    if (SAFE_METHODS.includes(request.method)) {
      return next();
    }
    const isSameOrigin = request.headers.get("origin") === url.origin;
    const hasContentType2 = request.headers.has("content-type");
    if (hasContentType2) {
      const formLikeHeader = hasFormLikeHeader(request.headers.get("content-type"));
      if (formLikeHeader && !isSameOrigin) {
        return new Response(`Cross-site ${request.method} form submissions are forbidden`, {
          status: 403
        });
      }
    } else {
      if (!isSameOrigin) {
        return new Response(`Cross-site ${request.method} form submissions are forbidden`, {
          status: 403
        });
      }
    }
    return next();
  });
}
function hasFormLikeHeader(contentType) {
  if (contentType) {
    for (const FORM_CONTENT_TYPE of FORM_CONTENT_TYPES) {
      if (contentType.toLowerCase().includes(FORM_CONTENT_TYPE)) {
        return true;
      }
    }
  }
  return false;
}
const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};
const RedirectComponentInstance = {
  default() {
    return new Response(null, {
      status: 301
    });
  }
};
const RedirectSinglePageBuiltModule = {
  page: () => Promise.resolve(RedirectComponentInstance),
  onRequest: (_, next) => next()
};
function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? collapseDuplicateLeadingSlashes("/" + segmentPath) : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}
const VALID_PARAM_TYPES = ["string", "undefined"];
function validateGetStaticPathsParameter([key, value], route) {
  if (!VALID_PARAM_TYPES.includes(typeof value)) {
    throw new AstroError({
      ...GetStaticPathsInvalidRouteParam,
      message: GetStaticPathsInvalidRouteParam.message(key, value, typeof value),
      location: {
        file: route
      }
    });
  }
}
function stringifyParams(params, route, trailingSlash) {
  const validatedParams = {};
  for (const [key, value] of Object.entries(params)) {
    validateGetStaticPathsParameter([key, value], route.component);
    if (value !== void 0) {
      validatedParams[key] = trimSlashes(value);
    }
  }
  return getRouteGenerator(route.segments, trailingSlash)(validatedParams);
}
function validateDynamicRouteModule(mod, {
  ssr,
  route
}) {
  if ((!ssr || route.prerender) && !mod.getStaticPaths) {
    throw new AstroError({
      ...GetStaticPathsRequired,
      location: { file: route.component }
    });
  }
}
function validateGetStaticPathsResult(result, route) {
  if (!Array.isArray(result)) {
    throw new AstroError({
      ...InvalidGetStaticPathsReturn,
      message: InvalidGetStaticPathsReturn.message(typeof result),
      location: {
        file: route.component
      }
    });
  }
  result.forEach((pathObject) => {
    if (typeof pathObject === "object" && Array.isArray(pathObject) || pathObject === null) {
      throw new AstroError({
        ...InvalidGetStaticPathsEntry,
        message: InvalidGetStaticPathsEntry.message(
          Array.isArray(pathObject) ? "array" : typeof pathObject
        )
      });
    }
    if (pathObject.params === void 0 || pathObject.params === null || pathObject.params && Object.keys(pathObject.params).length === 0) {
      throw new AstroError({
        ...GetStaticPathsExpectedParams,
        location: {
          file: route.component
        }
      });
    }
  });
}
function generatePaginateFunction(routeMatch, base, trailingSlash) {
  return function paginateUtility(data, args = {}) {
    const generate = getRouteGenerator(routeMatch.segments, trailingSlash);
    let { pageSize: _pageSize, params: _params, props: _props } = args;
    const pageSize = _pageSize || 10;
    const paramName = "page";
    const additionalParams = _params || {};
    const additionalProps = _props || {};
    let includesFirstPageNumber;
    if (routeMatch.params.includes(`...${paramName}`)) {
      includesFirstPageNumber = false;
    } else if (routeMatch.params.includes(`${paramName}`)) {
      includesFirstPageNumber = true;
    } else {
      throw new AstroError({
        ...PageNumberParamNotFound,
        message: PageNumberParamNotFound.message(paramName)
      });
    }
    const lastPage = Math.max(1, Math.ceil(data.length / pageSize));
    const result = [...Array(lastPage).keys()].map((num) => {
      const pageNum = num + 1;
      const start = pageSize === Number.POSITIVE_INFINITY ? 0 : (pageNum - 1) * pageSize;
      const end = Math.min(start + pageSize, data.length);
      const params = {
        ...additionalParams,
        [paramName]: includesFirstPageNumber || pageNum > 1 ? String(pageNum) : void 0
      };
      const current = addRouteBase(generate({ ...params }), base);
      const next = pageNum === lastPage ? void 0 : addRouteBase(generate({ ...params, page: String(pageNum + 1) }), base);
      const prev = pageNum === 1 ? void 0 : addRouteBase(
        generate({
          ...params,
          page: !includesFirstPageNumber && pageNum - 1 === 1 ? void 0 : String(pageNum - 1)
        }),
        base
      );
      const first = pageNum === 1 ? void 0 : addRouteBase(
        generate({
          ...params,
          page: includesFirstPageNumber ? "1" : void 0
        }),
        base
      );
      const last = pageNum === lastPage ? void 0 : addRouteBase(generate({ ...params, page: String(lastPage) }), base);
      return {
        params,
        props: {
          ...additionalProps,
          page: {
            data: data.slice(start, end),
            start,
            end: end - 1,
            size: pageSize,
            total: data.length,
            currentPage: pageNum,
            lastPage,
            url: { current, next, prev, first, last }
          }
        }
      };
    });
    return result;
  };
}
function addRouteBase(route, base) {
  let routeWithBase = joinPaths(base, route);
  if (routeWithBase === "") routeWithBase = "/";
  return routeWithBase;
}
async function callGetStaticPaths({
  mod,
  route,
  routeCache,
  ssr,
  base,
  trailingSlash
}) {
  const cached = routeCache.get(route);
  if (!mod) {
    throw new Error("This is an error caused by Astro and not your code. Please file an issue.");
  }
  if (cached?.staticPaths) {
    return cached.staticPaths;
  }
  validateDynamicRouteModule(mod, { ssr, route });
  if (ssr && !route.prerender) {
    const entry = Object.assign([], { keyed: /* @__PURE__ */ new Map() });
    routeCache.set(route, { ...cached, staticPaths: entry });
    return entry;
  }
  let staticPaths = [];
  if (!mod.getStaticPaths) {
    throw new Error("Unexpected Error.");
  }
  staticPaths = await mod.getStaticPaths({
    // Q: Why the cast?
    // A: So users downstream can have nicer typings, we have to make some sacrifice in our internal typings, which necessitate a cast here
    paginate: generatePaginateFunction(route, base, trailingSlash),
    routePattern: route.route
  });
  validateGetStaticPathsResult(staticPaths, route);
  const keyedStaticPaths = staticPaths;
  keyedStaticPaths.keyed = /* @__PURE__ */ new Map();
  for (const sp of keyedStaticPaths) {
    const paramsKey = stringifyParams(sp.params, route, trailingSlash);
    keyedStaticPaths.keyed.set(paramsKey, sp);
  }
  routeCache.set(route, { ...cached, staticPaths: keyedStaticPaths });
  return keyedStaticPaths;
}
class RouteCache {
  logger;
  cache = {};
  runtimeMode;
  constructor(logger, runtimeMode = "production") {
    this.logger = logger;
    this.runtimeMode = runtimeMode;
  }
  /** Clear the cache. */
  clearAll() {
    this.cache = {};
  }
  set(route, entry) {
    const key = this.key(route);
    if (this.runtimeMode === "production" && this.cache[key]?.staticPaths) {
      this.logger.warn(null, `Internal Warning: route cache overwritten. (${key})`);
    }
    this.cache[key] = entry;
  }
  get(route) {
    return this.cache[this.key(route)];
  }
  key(route) {
    return `${route.route}_${route.component}`;
  }
}
function findPathItemByKey(staticPaths, params, route, logger, trailingSlash) {
  const paramsKey = stringifyParams(params, route, trailingSlash);
  const matchedStaticPath = staticPaths.keyed.get(paramsKey);
  if (matchedStaticPath) {
    return matchedStaticPath;
  }
  logger.debug("router", `findPathItemByKey() - Unexpected cache miss looking for ${paramsKey}`);
}
function getPattern(segments, base, addTrailingSlash) {
  const pathname = segments.map((segment) => {
    if (segment.length === 1 && segment[0].spread) {
      return "(?:\\/(.*?))?";
    } else {
      return "\\/" + segment.map((part) => {
        if (part.spread) {
          return "(.*?)";
        } else if (part.dynamic) {
          return "([^/]+?)";
        } else {
          return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        }
      }).join("");
    }
  }).join("");
  const trailing = addTrailingSlash && segments.length ? getTrailingSlashPattern(addTrailingSlash) : "$";
  let initial = "\\/";
  if (addTrailingSlash === "never" && base !== "/") {
    initial = "";
  }
  return new RegExp(`^${pathname || initial}${trailing}`);
}
function getTrailingSlashPattern(addTrailingSlash) {
  if (addTrailingSlash === "always") {
    return "\\/$";
  }
  if (addTrailingSlash === "never") {
    return "$";
  }
  return "\\/?$";
}
const SERVER_ISLAND_ROUTE = "/_server-islands/[name]";
const SERVER_ISLAND_COMPONENT = "_server-islands.astro";
function badRequest(reason) {
  return new Response(null, {
    status: 400,
    statusText: "Bad request: " + reason
  });
}
const DEFAULT_BODY_SIZE_LIMIT = 1024 * 1024;
async function getRequestData(request, bodySizeLimit = DEFAULT_BODY_SIZE_LIMIT) {
  switch (request.method) {
    case "GET": {
      const url = new URL(request.url);
      const params = url.searchParams;
      if (!params.has("s") || !params.has("e") || !params.has("p")) {
        return badRequest("Missing required query parameters.");
      }
      const encryptedSlots = params.get("s");
      return {
        encryptedComponentExport: params.get("e"),
        encryptedProps: params.get("p"),
        encryptedSlots
      };
    }
    case "POST": {
      try {
        const body = await readBodyWithLimit(request, bodySizeLimit);
        const raw = new TextDecoder().decode(body);
        const data = JSON.parse(raw);
        if (Object.hasOwn(data, "slots") && typeof data.slots === "object") {
          return badRequest("Plaintext slots are not allowed. Slots must be encrypted.");
        }
        if (Object.hasOwn(data, "componentExport") && typeof data.componentExport === "string") {
          return badRequest(
            "Plaintext componentExport is not allowed. componentExport must be encrypted."
          );
        }
        return data;
      } catch (e2) {
        if (e2 instanceof BodySizeLimitError) {
          return new Response(null, {
            status: 413,
            statusText: e2.message
          });
        }
        if (e2 instanceof SyntaxError) {
          return badRequest("Request format is invalid.");
        }
        throw e2;
      }
    }
    default: {
      return new Response(null, { status: 405 });
    }
  }
}
function createEndpoint(manifest2) {
  const page = async (result) => {
    const params = result.params;
    if (!params.name) {
      return new Response(null, {
        status: 400,
        statusText: "Bad request"
      });
    }
    const componentId = params.name;
    const data = await getRequestData(result.request, manifest2.serverIslandBodySizeLimit);
    if (data instanceof Response) {
      return data;
    }
    const serverIslandMappings = await manifest2.serverIslandMappings?.();
    const serverIslandMap = await serverIslandMappings?.serverIslandMap;
    let imp = serverIslandMap?.get(componentId);
    if (!imp) {
      return new Response(null, {
        status: 404,
        statusText: "Not found"
      });
    }
    const key = await manifest2.key;
    let componentExport;
    try {
      componentExport = await decryptString(key, data.encryptedComponentExport);
    } catch (_e) {
      return badRequest("Encrypted componentExport value is invalid.");
    }
    const encryptedProps = data.encryptedProps;
    let props = {};
    if (encryptedProps !== "") {
      try {
        const propString = await decryptString(key, encryptedProps);
        props = JSON.parse(propString);
      } catch (_e) {
        return badRequest("Encrypted props value is invalid.");
      }
    }
    let decryptedSlots = {};
    const encryptedSlots = data.encryptedSlots;
    if (encryptedSlots !== "") {
      try {
        const slotsString = await decryptString(key, encryptedSlots);
        decryptedSlots = JSON.parse(slotsString);
      } catch (_e) {
        return badRequest("Encrypted slots value is invalid.");
      }
    }
    const componentModule = await imp();
    let Component = componentModule[componentExport];
    const slots = {};
    for (const prop in decryptedSlots) {
      slots[prop] = createSlotValueFromString(decryptedSlots[prop]);
    }
    result.response.headers.set("X-Robots-Tag", "noindex");
    if (isAstroComponentFactory(Component)) {
      const ServerIsland = Component;
      Component = function(...args) {
        return ServerIsland.apply(this, args);
      };
      Object.assign(Component, ServerIsland);
      Component.propagation = "self";
    }
    return renderTemplate`${renderComponent(result, "Component", Component, props, slots)}`;
  };
  page.isAstroComponentFactory = true;
  const instance = {
    default: page,
    partial: true
  };
  return instance;
}
function createDefaultRoutes(manifest2) {
  const root = new URL(manifest2.rootDir);
  return [
    {
      instance: default404Instance,
      matchesComponent: (filePath) => filePath.href === new URL(DEFAULT_404_COMPONENT, root).href,
      route: DEFAULT_404_ROUTE.route,
      component: DEFAULT_404_COMPONENT
    },
    {
      instance: createEndpoint(manifest2),
      matchesComponent: (filePath) => filePath.href === new URL(SERVER_ISLAND_COMPONENT, root).href,
      route: SERVER_ISLAND_ROUTE,
      component: SERVER_ISLAND_COMPONENT
    }
  ];
}
function deserializeManifest(serializedManifest, routesList) {
  const routes = [];
  if (serializedManifest.routes) {
    for (const serializedRoute of serializedManifest.routes) {
      routes.push({
        ...serializedRoute,
        routeData: deserializeRouteData(serializedRoute.routeData)
      });
      const route = serializedRoute;
      route.routeData = deserializeRouteData(serializedRoute.routeData);
    }
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    rootDir: new URL(serializedManifest.rootDir),
    srcDir: new URL(serializedManifest.srcDir),
    publicDir: new URL(serializedManifest.publicDir),
    outDir: new URL(serializedManifest.outDir),
    cacheDir: new URL(serializedManifest.cacheDir),
    buildClientDir: new URL(serializedManifest.buildClientDir),
    buildServerDir: new URL(serializedManifest.buildServerDir),
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    key
  };
}
function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin,
    distURL: rawRouteData.distURL
  };
}
function deserializeRouteInfo(rawRouteInfo) {
  return {
    styles: rawRouteInfo.styles,
    file: rawRouteInfo.file,
    links: rawRouteInfo.links,
    scripts: rawRouteInfo.scripts,
    routeData: deserializeRouteData(rawRouteInfo.routeData)
  };
}
class NodePool {
  textPool = [];
  htmlStringPool = [];
  componentPool = [];
  instructionPool = [];
  maxSize;
  enableStats;
  stats = {
    acquireFromPool: 0,
    acquireNew: 0,
    released: 0,
    releasedDropped: 0
  };
  /**
   * Creates a new object pool for queue nodes.
   *
   * @param maxSize - Maximum number of nodes to keep in the pool (default: 1000).
   *   The cap is shared across all typed sub-pools.
   * @param enableStats - Enable statistics tracking (default: false for performance)
   */
  constructor(maxSize = 1e3, enableStats = false) {
    this.maxSize = maxSize;
    this.enableStats = enableStats;
  }
  /**
   * Acquires a queue node from the pool or creates a new one if the pool is empty.
   * Pops from the type-specific sub-pool to reuse an existing object when available.
   *
   * @param type - The type of queue node to acquire
   * @param content - Optional content to set on the node (for text or html-string types)
   * @returns A queue node ready to be populated with data
   */
  acquire(type, content) {
    const pooledNode = this.popFromTypedPool(type);
    if (pooledNode) {
      if (this.enableStats) {
        this.stats.acquireFromPool = this.stats.acquireFromPool + 1;
      }
      this.resetNodeContent(pooledNode, type, content);
      return pooledNode;
    }
    if (this.enableStats) {
      this.stats.acquireNew = this.stats.acquireNew + 1;
    }
    return this.createNode(type, content);
  }
  /**
   * Creates a new node of the specified type with the given content.
   * Helper method to reduce branching in acquire().
   */
  createNode(type, content = "") {
    switch (type) {
      case "text":
        return { type: "text", content };
      case "html-string":
        return { type: "html-string", html: content };
      case "component":
        return { type: "component", instance: void 0 };
      case "instruction":
        return { type: "instruction", instruction: void 0 };
    }
  }
  /**
   * Pops a node from the type-specific sub-pool.
   * Returns undefined if the sub-pool for the requested type is empty.
   */
  popFromTypedPool(type) {
    switch (type) {
      case "text":
        return this.textPool.pop();
      case "html-string":
        return this.htmlStringPool.pop();
      case "component":
        return this.componentPool.pop();
      case "instruction":
        return this.instructionPool.pop();
    }
  }
  /**
   * Resets the content/value field on a reused pooled node.
   * The type discriminant is already correct since we pop from the matching sub-pool.
   */
  resetNodeContent(node, type, content) {
    switch (type) {
      case "text":
        node.content = content ?? "";
        break;
      case "html-string":
        node.html = content ?? "";
        break;
      case "component":
        node.instance = void 0;
        break;
      case "instruction":
        node.instruction = void 0;
        break;
    }
  }
  /**
   * Returns the total number of nodes across all typed sub-pools.
   */
  totalPoolSize() {
    return this.textPool.length + this.htmlStringPool.length + this.componentPool.length + this.instructionPool.length;
  }
  /**
   * Releases a queue node back to the pool for reuse.
   * If the pool is at max capacity, the node is discarded (will be GC'd).
   *
   * @param node - The node to release back to the pool
   */
  release(node) {
    if (this.totalPoolSize() >= this.maxSize) {
      if (this.enableStats) {
        this.stats.releasedDropped = this.stats.releasedDropped + 1;
      }
      return;
    }
    switch (node.type) {
      case "text":
        node.content = "";
        this.textPool.push(node);
        break;
      case "html-string":
        node.html = "";
        this.htmlStringPool.push(node);
        break;
      case "component":
        node.instance = void 0;
        this.componentPool.push(node);
        break;
      case "instruction":
        node.instruction = void 0;
        this.instructionPool.push(node);
        break;
    }
    if (this.enableStats) {
      this.stats.released = this.stats.released + 1;
    }
  }
  /**
   * Releases all nodes in an array back to the pool.
   * This is a convenience method for releasing multiple nodes at once.
   *
   * @param nodes - Array of nodes to release
   */
  releaseAll(nodes) {
    for (const node of nodes) {
      this.release(node);
    }
  }
  /**
   * Clears all typed sub-pools, discarding all cached nodes.
   * This can be useful if you want to free memory after a large render.
   */
  clear() {
    this.textPool.length = 0;
    this.htmlStringPool.length = 0;
    this.componentPool.length = 0;
    this.instructionPool.length = 0;
  }
  /**
   * Gets the current total number of nodes across all typed sub-pools.
   * Useful for monitoring pool usage and tuning maxSize.
   *
   * @returns Number of nodes currently available in the pool
   */
  size() {
    return this.totalPoolSize();
  }
  /**
   * Gets pool statistics for debugging.
   *
   * @returns Pool usage statistics including computed metrics
   */
  getStats() {
    return {
      ...this.stats,
      poolSize: this.totalPoolSize(),
      maxSize: this.maxSize,
      hitRate: this.stats.acquireFromPool + this.stats.acquireNew > 0 ? this.stats.acquireFromPool / (this.stats.acquireFromPool + this.stats.acquireNew) * 100 : 0
    };
  }
  /**
   * Resets pool statistics.
   */
  resetStats() {
    this.stats = {
      acquireFromPool: 0,
      acquireNew: 0,
      released: 0,
      releasedDropped: 0
    };
  }
}
class HTMLStringCache {
  cache = /* @__PURE__ */ new Map();
  maxSize;
  constructor(maxSize = 1e3) {
    this.maxSize = maxSize;
    this.warm(COMMON_HTML_PATTERNS);
  }
  /**
   * Get or create an HTMLString for the given content.
   * If cached, the existing object is returned and moved to end (most recently used).
   * If not cached, a new HTMLString is created, cached, and returned.
   *
   * @param content - The HTML string content
   * @returns HTMLString object (cached or newly created)
   */
  getOrCreate(content) {
    const cached = this.cache.get(content);
    if (cached) {
      this.cache.delete(content);
      this.cache.set(content, cached);
      return cached;
    }
    const htmlString = new HTMLString(content);
    this.cache.set(content, htmlString);
    if (this.cache.size > this.maxSize) {
      const firstKey = this.cache.keys().next().value;
      if (firstKey !== void 0) {
        this.cache.delete(firstKey);
      }
    }
    return htmlString;
  }
  /**
   * Get current cache size
   */
  size() {
    return this.cache.size;
  }
  /**
   * Pre-warms the cache with common HTML patterns.
   * This ensures first-render cache hits for frequently used tags.
   *
   * @param patterns - Array of HTML strings to pre-cache
   */
  warm(patterns) {
    for (const pattern of patterns) {
      if (!this.cache.has(pattern)) {
        this.cache.set(pattern, new HTMLString(pattern));
      }
    }
  }
  /**
   * Clear the entire cache
   */
  clear() {
    this.cache.clear();
  }
}
const COMMON_HTML_PATTERNS = [
  // Structural elements
  "<div>",
  "</div>",
  "<span>",
  "</span>",
  "<p>",
  "</p>",
  "<section>",
  "</section>",
  "<article>",
  "</article>",
  "<header>",
  "</header>",
  "<footer>",
  "</footer>",
  "<nav>",
  "</nav>",
  "<main>",
  "</main>",
  "<aside>",
  "</aside>",
  // List elements
  "<ul>",
  "</ul>",
  "<ol>",
  "</ol>",
  "<li>",
  "</li>",
  // Void/self-closing elements
  "<br>",
  "<hr>",
  "<br/>",
  "<hr/>",
  // Heading elements
  "<h1>",
  "</h1>",
  "<h2>",
  "</h2>",
  "<h3>",
  "</h3>",
  "<h4>",
  "</h4>",
  // Inline elements
  "<a>",
  "</a>",
  "<strong>",
  "</strong>",
  "<em>",
  "</em>",
  "<code>",
  "</code>",
  // Common whitespace
  " ",
  "\n"
];
class Pipeline {
  constructor(logger, manifest2, runtimeMode, renderers2, resolve, streaming, adapterName = manifest2.adapterName, clientDirectives = manifest2.clientDirectives, inlinedScripts = manifest2.inlinedScripts, compressHTML = manifest2.compressHTML, i18n = manifest2.i18n, middleware = manifest2.middleware, routeCache = new RouteCache(logger, runtimeMode), site = manifest2.site ? new URL(manifest2.site) : void 0, defaultRoutes = createDefaultRoutes(manifest2), actions = manifest2.actions, sessionDriver = manifest2.sessionDriver, cacheProvider = manifest2.cacheProvider, cacheConfig = manifest2.cacheConfig, serverIslands = manifest2.serverIslandMappings) {
    this.logger = logger;
    this.manifest = manifest2;
    this.runtimeMode = runtimeMode;
    this.renderers = renderers2;
    this.resolve = resolve;
    this.streaming = streaming;
    this.adapterName = adapterName;
    this.clientDirectives = clientDirectives;
    this.inlinedScripts = inlinedScripts;
    this.compressHTML = compressHTML;
    this.i18n = i18n;
    this.middleware = middleware;
    this.routeCache = routeCache;
    this.site = site;
    this.defaultRoutes = defaultRoutes;
    this.actions = actions;
    this.sessionDriver = sessionDriver;
    this.cacheProvider = cacheProvider;
    this.cacheConfig = cacheConfig;
    this.serverIslands = serverIslands;
    this.internalMiddleware = [];
    if (i18n?.strategy !== "manual") {
      this.internalMiddleware.push(
        createI18nMiddleware(i18n, manifest2.base, manifest2.trailingSlash, manifest2.buildFormat)
      );
    }
    if (manifest2.experimentalQueuedRendering.enabled) {
      this.nodePool = this.createNodePool(
        manifest2.experimentalQueuedRendering.poolSize ?? 1e3,
        false
      );
      if (manifest2.experimentalQueuedRendering.contentCache) {
        this.htmlStringCache = this.createStringCache();
      }
    }
  }
  internalMiddleware;
  resolvedMiddleware = void 0;
  resolvedActions = void 0;
  resolvedSessionDriver = void 0;
  resolvedCacheProvider = void 0;
  compiledCacheRoutes = void 0;
  nodePool;
  htmlStringCache;
  /**
   * Resolves the middleware from the manifest, and returns the `onRequest` function. If `onRequest` isn't there,
   * it returns a no-op function
   */
  async getMiddleware() {
    if (this.resolvedMiddleware) {
      return this.resolvedMiddleware;
    }
    if (this.middleware) {
      const middlewareInstance = await this.middleware();
      const onRequest = middlewareInstance.onRequest ?? NOOP_MIDDLEWARE_FN;
      const internalMiddlewares = [onRequest];
      if (this.manifest.checkOrigin) {
        internalMiddlewares.unshift(createOriginCheckMiddleware());
      }
      this.resolvedMiddleware = sequence(...internalMiddlewares);
      return this.resolvedMiddleware;
    } else {
      this.resolvedMiddleware = NOOP_MIDDLEWARE_FN;
      return this.resolvedMiddleware;
    }
  }
  async getActions() {
    if (this.resolvedActions) {
      return this.resolvedActions;
    } else if (this.actions) {
      return this.actions();
    }
    return NOOP_ACTIONS_MOD;
  }
  async getSessionDriver() {
    if (this.resolvedSessionDriver !== void 0) {
      return this.resolvedSessionDriver;
    }
    if (this.sessionDriver) {
      const driverModule = await this.sessionDriver();
      this.resolvedSessionDriver = driverModule?.default || null;
      return this.resolvedSessionDriver;
    }
    this.resolvedSessionDriver = null;
    return null;
  }
  async getCacheProvider() {
    if (this.resolvedCacheProvider !== void 0) {
      return this.resolvedCacheProvider;
    }
    if (this.cacheProvider) {
      const mod = await this.cacheProvider();
      const factory = mod?.default || null;
      this.resolvedCacheProvider = factory ? factory(this.cacheConfig?.options) : null;
      return this.resolvedCacheProvider;
    }
    this.resolvedCacheProvider = null;
    return null;
  }
  async getServerIslands() {
    if (this.serverIslands) {
      return this.serverIslands();
    }
    return {
      serverIslandMap: /* @__PURE__ */ new Map(),
      serverIslandNameMap: /* @__PURE__ */ new Map()
    };
  }
  async getAction(path) {
    const pathKeys = path.split(".").map((key) => decodeURIComponent(key));
    let { server } = await this.getActions();
    if (!server || !(typeof server === "object")) {
      throw new TypeError(
        `Expected \`server\` export in actions file to be an object. Received ${typeof server}.`
      );
    }
    for (const key of pathKeys) {
      if (!Object.hasOwn(server, key)) {
        throw new AstroError({
          ...ActionNotFoundError,
          message: ActionNotFoundError.message(pathKeys.join("."))
        });
      }
      server = server[key];
    }
    if (typeof server !== "function") {
      throw new TypeError(
        `Expected handler for action ${pathKeys.join(".")} to be a function. Received ${typeof server}.`
      );
    }
    return server;
  }
  async getModuleForRoute(route) {
    for (const defaultRoute of this.defaultRoutes) {
      if (route.component === defaultRoute.component) {
        return {
          page: () => Promise.resolve(defaultRoute.instance)
        };
      }
    }
    if (route.type === "redirect") {
      return RedirectSinglePageBuiltModule;
    } else {
      if (this.manifest.pageMap) {
        const importComponentInstance = this.manifest.pageMap.get(route.component);
        if (!importComponentInstance) {
          throw new Error(
            `Unexpectedly unable to find a component instance for route ${route.route}`
          );
        }
        return await importComponentInstance();
      } else if (this.manifest.pageModule) {
        return this.manifest.pageModule;
      }
      throw new Error(
        "Astro couldn't find the correct page to render, probably because it wasn't correctly mapped for SSR usage. This is an internal error, please file an issue."
      );
    }
  }
  createNodePool(poolSize, stats) {
    return new NodePool(poolSize, stats);
  }
  createStringCache() {
    return new HTMLStringCache(1e3);
  }
}
const ROUTE404_RE = /^\/404\/?$/;
const ROUTE500_RE = /^\/500\/?$/;
function isRoute404(route) {
  return ROUTE404_RE.test(route);
}
function isRoute500(route) {
  return ROUTE500_RE.test(route);
}
function routeIsRedirect(route) {
  return route?.type === "redirect";
}
function routeIsFallback(route) {
  return route?.type === "fallback";
}
function getFallbackRoute(route, routeList) {
  const fallbackRoute = routeList.find((r2) => {
    if (route.route === "/" && r2.routeData.route === "/") {
      return true;
    }
    return r2.routeData.fallbackRoutes.find((f) => {
      return f.route === route.route;
    });
  });
  if (!fallbackRoute) {
    throw new Error(`No fallback route found for route ${route.route}`);
  }
  return fallbackRoute.routeData;
}
async function getProps(opts) {
  const {
    logger,
    mod,
    routeData: route,
    routeCache,
    pathname,
    serverLike,
    base,
    trailingSlash
  } = opts;
  if (!route || route.pathname) {
    return {};
  }
  if (routeIsRedirect(route) || routeIsFallback(route) || route.component === DEFAULT_404_COMPONENT) {
    return {};
  }
  const staticPaths = await callGetStaticPaths({
    mod,
    route,
    routeCache,
    ssr: serverLike,
    base,
    trailingSlash
  });
  const params = getParams(route, pathname);
  const matchedStaticPath = findPathItemByKey(staticPaths, params, route, logger, trailingSlash);
  if (!matchedStaticPath && (serverLike ? route.prerender : true)) {
    throw new AstroError({
      ...NoMatchingStaticPathFound,
      message: NoMatchingStaticPathFound.message(pathname),
      hint: NoMatchingStaticPathFound.hint([route.component])
    });
  }
  if (mod) {
    validatePrerenderEndpointCollision(route, mod, params);
  }
  const props = matchedStaticPath?.props ? { ...matchedStaticPath.props } : {};
  return props;
}
function getParams(route, pathname) {
  if (!route.params.length) return {};
  let path = pathname;
  if (pathname.endsWith(".html")) {
    path = path.slice(0, -5);
  }
  const paramsMatch = route.pattern.exec(path) || route.fallbackRoutes.map((fallbackRoute) => fallbackRoute.pattern.exec(path)).find((x) => x);
  if (!paramsMatch) return {};
  const params = {};
  route.params.forEach((key, i2) => {
    if (key.startsWith("...")) {
      params[key.slice(3)] = paramsMatch[i2 + 1] ? paramsMatch[i2 + 1] : void 0;
    } else {
      params[key] = paramsMatch[i2 + 1];
    }
  });
  return params;
}
function validatePrerenderEndpointCollision(route, mod, params) {
  if (route.type === "endpoint" && mod.getStaticPaths) {
    const lastSegment = route.segments[route.segments.length - 1];
    const paramValues = Object.values(params);
    const lastParam = paramValues[paramValues.length - 1];
    if (lastSegment.length === 1 && lastSegment[0].dynamic && lastParam === void 0) {
      throw new AstroError({
        ...PrerenderDynamicEndpointPathCollide,
        message: PrerenderDynamicEndpointPathCollide.message(route.route),
        hint: PrerenderDynamicEndpointPathCollide.hint(route.component),
        location: {
          file: route.component
        }
      });
    }
  }
}
function getFunctionExpression(slot) {
  if (!slot) return;
  const expressions = slot?.expressions?.filter((e2) => isRenderInstruction(e2) === false);
  if (expressions?.length !== 1) return;
  return expressions[0];
}
class Slots {
  #result;
  #slots;
  #logger;
  constructor(result, slots, logger) {
    this.#result = result;
    this.#slots = slots;
    this.#logger = logger;
    if (slots) {
      for (const key of Object.keys(slots)) {
        if (this[key] !== void 0) {
          throw new AstroError({
            ...ReservedSlotName,
            message: ReservedSlotName.message(key)
          });
        }
        Object.defineProperty(this, key, {
          get() {
            return true;
          },
          enumerable: true
        });
      }
    }
  }
  has(name) {
    if (!this.#slots) return false;
    return Boolean(this.#slots[name]);
  }
  async render(name, args = []) {
    if (!this.#slots || !this.has(name)) return;
    const result = this.#result;
    if (!Array.isArray(args)) {
      this.#logger.warn(
        null,
        `Expected second parameter to be an array, received a ${typeof args}. If you're trying to pass an array as a single argument and getting unexpected results, make sure you're passing your array as an item of an array. Ex: Astro.slots.render('default', [["Hello", "World"]])`
      );
    } else if (args.length > 0) {
      const slotValue = this.#slots[name];
      const component = typeof slotValue === "function" ? await slotValue(result) : await slotValue;
      const expression = getFunctionExpression(component);
      if (expression) {
        const slot = async () => typeof expression === "function" ? expression(...args) : expression;
        return await renderSlotToString(result, slot).then((res) => {
          return res;
        });
      }
      if (typeof component === "function") {
        return await renderJSX(result, component(...args)).then(
          (res) => res != null ? String(res) : res
        );
      }
    }
    const content = await renderSlotToString(result, this.#slots[name]);
    const outHTML = chunkToString(result, content);
    return outHTML;
  }
}
function sequence(...handlers2) {
  const filtered = handlers2.filter((h) => !!h);
  const length = filtered.length;
  if (!length) {
    return defineMiddleware((_context, next) => {
      return next();
    });
  }
  return defineMiddleware((context, next) => {
    let carriedPayload = void 0;
    return applyHandle(0, context);
    function applyHandle(i2, handleContext) {
      const handle2 = filtered[i2];
      const result = handle2(handleContext, async (payload) => {
        if (i2 < length - 1) {
          if (payload) {
            let newRequest;
            if (payload instanceof Request) {
              newRequest = payload;
            } else if (payload instanceof URL) {
              newRequest = new Request(payload, handleContext.request.clone());
            } else {
              newRequest = new Request(
                new URL(payload, handleContext.url.origin),
                handleContext.request.clone()
              );
            }
            const oldPathname = handleContext.url.pathname;
            const pipeline = Reflect.get(handleContext, pipelineSymbol);
            const { routeData, pathname } = await pipeline.tryRewrite(
              payload,
              handleContext.request
            );
            if (pipeline.manifest.serverLike === true && handleContext.isPrerendered === false && routeData.prerender === true) {
              throw new AstroError({
                ...ForbiddenRewrite,
                message: ForbiddenRewrite.message(
                  handleContext.url.pathname,
                  pathname,
                  routeData.component
                ),
                hint: ForbiddenRewrite.hint(routeData.component)
              });
            }
            carriedPayload = payload;
            handleContext.request = newRequest;
            handleContext.url = new URL(newRequest.url);
            handleContext.params = getParams(routeData, pathname);
            handleContext.routePattern = routeData.route;
            setOriginPathname(
              handleContext.request,
              oldPathname,
              pipeline.manifest.trailingSlash,
              pipeline.manifest.buildFormat
            );
          }
          return applyHandle(i2 + 1, handleContext);
        } else {
          return next(payload ?? carriedPayload);
        }
      });
      return result;
    }
  });
}
function isExternalURL(url) {
  return url.startsWith("http://") || url.startsWith("https://") || url.startsWith("//");
}
function redirectIsExternal(redirect) {
  if (typeof redirect === "string") {
    return isExternalURL(redirect);
  } else {
    return isExternalURL(redirect.destination);
  }
}
async function renderRedirect(renderContext) {
  const {
    request: { method },
    routeData
  } = renderContext;
  const { redirect, redirectRoute } = routeData;
  const status = redirectRoute && typeof redirect === "object" ? redirect.status : method === "GET" ? 301 : 308;
  const headers = { location: encodeURI(redirectRouteGenerate(renderContext)) };
  if (redirect && redirectIsExternal(redirect)) {
    if (typeof redirect === "string") {
      return Response.redirect(redirect, status);
    } else {
      return Response.redirect(redirect.destination, status);
    }
  }
  return new Response(null, { status, headers });
}
function redirectRouteGenerate(renderContext) {
  const {
    params,
    routeData: { redirect, redirectRoute },
    pipeline
  } = renderContext;
  if (typeof redirectRoute !== "undefined") {
    const generate = getRouteGenerator(redirectRoute.segments, pipeline.manifest.trailingSlash);
    return generate(params);
  } else if (typeof redirect === "string") {
    if (redirectIsExternal(redirect)) {
      return redirect;
    } else {
      let target = redirect;
      for (const param of Object.keys(params)) {
        const paramValue = params[param];
        target = target.replace(`[${param}]`, paramValue).replace(`[...${param}]`, paramValue);
      }
      return target;
    }
  } else if (typeof redirect === "undefined") {
    return "/";
  }
  return redirect.destination;
}
function matchRoute(pathname, manifest2) {
  return manifest2.routes.find((route) => {
    return route.pattern.test(pathname) || route.fallbackRoutes.some((fallbackRoute) => fallbackRoute.pattern.test(pathname));
  });
}
function isRoute404or500(route) {
  return isRoute404(route.route) || isRoute500(route.route);
}
function isRouteServerIsland(route) {
  return route.component === SERVER_ISLAND_COMPONENT;
}
function isRouteExternalRedirect(route) {
  return !!(route.type === "redirect" && route.redirect && redirectIsExternal(route.redirect));
}
function defaultSetHeaders(options) {
  const headers = new Headers();
  const directives = [];
  if (options.maxAge !== void 0) {
    directives.push(`max-age=${options.maxAge}`);
  }
  if (options.swr !== void 0) {
    directives.push(`stale-while-revalidate=${options.swr}`);
  }
  if (directives.length > 0) {
    headers.set("CDN-Cache-Control", directives.join(", "));
  }
  if (options.tags && options.tags.length > 0) {
    headers.set("Cache-Tag", options.tags.join(", "));
  }
  if (options.lastModified) {
    headers.set("Last-Modified", options.lastModified.toUTCString());
  }
  if (options.etag) {
    headers.set("ETag", options.etag);
  }
  return headers;
}
function isLiveDataEntry(value) {
  return value != null && typeof value === "object" && "id" in value && "data" in value && "cacheHint" in value;
}
const APPLY_HEADERS = /* @__PURE__ */ Symbol.for("astro:cache:apply");
const IS_ACTIVE = /* @__PURE__ */ Symbol.for("astro:cache:active");
class AstroCache {
  #options = {};
  #tags = /* @__PURE__ */ new Set();
  #disabled = false;
  #provider;
  enabled = true;
  constructor(provider) {
    this.#provider = provider;
  }
  set(input) {
    if (input === false) {
      this.#disabled = true;
      this.#tags.clear();
      this.#options = {};
      return;
    }
    this.#disabled = false;
    let options;
    if (isLiveDataEntry(input)) {
      if (!input.cacheHint) return;
      options = input.cacheHint;
    } else {
      options = input;
    }
    if ("maxAge" in options && options.maxAge !== void 0) this.#options.maxAge = options.maxAge;
    if ("swr" in options && options.swr !== void 0)
      this.#options.swr = options.swr;
    if ("etag" in options && options.etag !== void 0)
      this.#options.etag = options.etag;
    if (options.lastModified !== void 0) {
      if (!this.#options.lastModified || options.lastModified > this.#options.lastModified) {
        this.#options.lastModified = options.lastModified;
      }
    }
    if (options.tags) {
      for (const tag of options.tags) this.#tags.add(tag);
    }
  }
  get tags() {
    return [...this.#tags];
  }
  /**
   * Get the current cache options (read-only snapshot).
   * Includes all accumulated options: maxAge, swr, tags, etag, lastModified.
   */
  get options() {
    return {
      ...this.#options,
      tags: this.tags
    };
  }
  async invalidate(input) {
    if (!this.#provider) {
      throw new AstroError(CacheNotEnabled);
    }
    let options;
    if (isLiveDataEntry(input)) {
      options = { tags: input.cacheHint?.tags ?? [] };
    } else {
      options = input;
    }
    return this.#provider.invalidate(options);
  }
  /** @internal */
  [APPLY_HEADERS](response) {
    if (this.#disabled) return;
    const finalOptions = { ...this.#options, tags: this.tags };
    if (finalOptions.maxAge === void 0 && !finalOptions.tags?.length) return;
    const headers = this.#provider?.setHeaders?.(finalOptions) ?? defaultSetHeaders(finalOptions);
    for (const [key, value] of headers) {
      response.headers.set(key, value);
    }
  }
  /** @internal */
  get [IS_ACTIVE]() {
    return !this.#disabled && (this.#options.maxAge !== void 0 || this.#tags.size > 0);
  }
}
function applyCacheHeaders(cache, response) {
  if (APPLY_HEADERS in cache) {
    cache[APPLY_HEADERS](response);
  }
}
const ROUTE_DYNAMIC_SPLIT = /\[(.+?\(.+?\)|.+?)\]/;
const ROUTE_SPREAD = /^\.{3}.+$/;
function getParts(part, file) {
  const result = [];
  part.split(ROUTE_DYNAMIC_SPLIT).map((str, i2) => {
    if (!str) return;
    const dynamic = i2 % 2 === 1;
    const [, content] = dynamic ? /([^(]+)$/.exec(str) || [null, null] : [null, str];
    if (!content || dynamic && !/^(?:\.\.\.)?[\w$]+$/.test(content)) {
      throw new Error(`Invalid route ${file} — parameter name must match /^[a-zA-Z0-9_$]+$/`);
    }
    result.push({
      content,
      dynamic,
      spread: dynamic && ROUTE_SPREAD.test(content)
    });
  });
  return result;
}
function routeComparator(a2, b) {
  const commonLength = Math.min(a2.segments.length, b.segments.length);
  for (let index = 0; index < commonLength; index++) {
    const aSegment = a2.segments[index];
    const bSegment = b.segments[index];
    const aIsStatic = aSegment.every((part) => !part.dynamic && !part.spread);
    const bIsStatic = bSegment.every((part) => !part.dynamic && !part.spread);
    if (aIsStatic && bIsStatic) {
      const aContent = aSegment.map((part) => part.content).join("");
      const bContent = bSegment.map((part) => part.content).join("");
      if (aContent !== bContent) {
        return aContent.localeCompare(bContent);
      }
    }
    if (aIsStatic !== bIsStatic) {
      return aIsStatic ? -1 : 1;
    }
    const aAllDynamic = aSegment.every((part) => part.dynamic);
    const bAllDynamic = bSegment.every((part) => part.dynamic);
    if (aAllDynamic !== bAllDynamic) {
      return aAllDynamic ? 1 : -1;
    }
    const aHasSpread = aSegment.some((part) => part.spread);
    const bHasSpread = bSegment.some((part) => part.spread);
    if (aHasSpread !== bHasSpread) {
      return aHasSpread ? 1 : -1;
    }
  }
  const aLength = a2.segments.length;
  const bLength = b.segments.length;
  if (aLength !== bLength) {
    const aEndsInRest = a2.segments.at(-1)?.some((part) => part.spread);
    const bEndsInRest = b.segments.at(-1)?.some((part) => part.spread);
    if (aEndsInRest !== bEndsInRest && Math.abs(aLength - bLength) === 1) {
      if (aLength > bLength && aEndsInRest) {
        return 1;
      }
      if (bLength > aLength && bEndsInRest) {
        return -1;
      }
    }
    return aLength > bLength ? -1 : 1;
  }
  if (a2.type === "endpoint" !== (b.type === "endpoint")) {
    return a2.type === "endpoint" ? -1 : 1;
  }
  return a2.route.localeCompare(b.route);
}
function compileCacheRoutes(routes, base, trailingSlash) {
  const compiled = Object.entries(routes).map(([path, options]) => {
    const segments = removeLeadingForwardSlash(path).split("/").filter(Boolean).map((s2) => getParts(s2, path));
    const pattern = getPattern(segments, base, trailingSlash);
    return { pattern, options, segments, route: path };
  });
  compiled.sort(
    (a2, b) => routeComparator(
      { segments: a2.segments, route: a2.route, type: "page" },
      { segments: b.segments, route: b.route, type: "page" }
    )
  );
  return compiled;
}
function matchCacheRoute(pathname, compiledRoutes) {
  for (const route of compiledRoutes) {
    if (route.pattern.test(pathname)) return route.options;
  }
  return null;
}
const suspectProtoRx = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
const suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
const JsonSigRx = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function jsonParseTransform(key, value) {
  if (key === "__proto__" || key === "constructor" && value && typeof value === "object" && "prototype" in value) {
    warnKeyDropped(key);
    return;
  }
  return value;
}
function warnKeyDropped(key) {
  console.warn(`[destr] Dropping "${key}" key to prevent prototype pollution.`);
}
function destr(value, options = {}) {
  if (typeof value !== "string") {
    return value;
  }
  if (value[0] === '"' && value[value.length - 1] === '"' && value.indexOf("\\") === -1) {
    return value.slice(1, -1);
  }
  const _value = value.trim();
  if (_value.length <= 9) {
    switch (_value.toLowerCase()) {
      case "true": {
        return true;
      }
      case "false": {
        return false;
      }
      case "undefined": {
        return void 0;
      }
      case "null": {
        return null;
      }
      case "nan": {
        return Number.NaN;
      }
      case "infinity": {
        return Number.POSITIVE_INFINITY;
      }
      case "-infinity": {
        return Number.NEGATIVE_INFINITY;
      }
    }
  }
  if (!JsonSigRx.test(value)) {
    if (options.strict) {
      throw new SyntaxError("[destr] Invalid JSON");
    }
    return value;
  }
  try {
    if (suspectProtoRx.test(value) || suspectConstructorRx.test(value)) {
      if (options.strict) {
        throw new Error("[destr] Possible prototype pollution");
      }
      return JSON.parse(value, jsonParseTransform);
    }
    return JSON.parse(value);
  } catch (error2) {
    if (options.strict) {
      throw error2;
    }
    return value;
  }
}
function wrapToPromise(value) {
  if (!value || typeof value.then !== "function") {
    return Promise.resolve(value);
  }
  return value;
}
function asyncCall(function_, ...arguments_) {
  try {
    return wrapToPromise(function_(...arguments_));
  } catch (error2) {
    return Promise.reject(error2);
  }
}
function isPrimitive(value) {
  const type = typeof value;
  return value === null || type !== "object" && type !== "function";
}
function isPureObject(value) {
  const proto = Object.getPrototypeOf(value);
  return !proto || proto.isPrototypeOf(Object);
}
function stringify$1(value) {
  if (isPrimitive(value)) {
    return String(value);
  }
  if (isPureObject(value) || Array.isArray(value)) {
    return JSON.stringify(value);
  }
  if (typeof value.toJSON === "function") {
    return stringify$1(value.toJSON());
  }
  throw new Error("[unstorage] Cannot stringify value!");
}
const BASE64_PREFIX = "base64:";
function serializeRaw(value) {
  if (typeof value === "string") {
    return value;
  }
  return BASE64_PREFIX + base64Encode(value);
}
function deserializeRaw(value) {
  if (typeof value !== "string") {
    return value;
  }
  if (!value.startsWith(BASE64_PREFIX)) {
    return value;
  }
  return base64Decode(value.slice(BASE64_PREFIX.length));
}
function base64Decode(input) {
  if (globalThis.Buffer) {
    return Buffer.from(input, "base64");
  }
  return Uint8Array.from(
    globalThis.atob(input),
    (c) => c.codePointAt(0)
  );
}
function base64Encode(input) {
  if (globalThis.Buffer) {
    return Buffer.from(input).toString("base64");
  }
  return globalThis.btoa(String.fromCodePoint(...input));
}
function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0]?.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") || "";
}
function joinKeys(...keys) {
  return normalizeKey(keys.join(":"));
}
function normalizeBaseKey(base) {
  base = normalizeKey(base);
  return base ? base + ":" : "";
}
function filterKeyByDepth(key, depth) {
  if (depth === void 0) {
    return true;
  }
  let substrCount = 0;
  let index = key.indexOf(":");
  while (index > -1) {
    substrCount++;
    index = key.indexOf(":", index + 1);
  }
  return substrCount <= depth;
}
function filterKeyByBase(key, base) {
  if (base) {
    return key.startsWith(base) && key[key.length - 1] !== "$";
  }
  return key[key.length - 1] !== "$";
}
function defineDriver(factory) {
  return factory;
}
const DRIVER_NAME = "memory";
const memory = defineDriver(() => {
  const data = /* @__PURE__ */ new Map();
  return {
    name: DRIVER_NAME,
    getInstance: () => data,
    hasItem(key) {
      return data.has(key);
    },
    getItem(key) {
      return data.get(key) ?? null;
    },
    getItemRaw(key) {
      return data.get(key) ?? null;
    },
    setItem(key, value) {
      data.set(key, value);
    },
    setItemRaw(key, value) {
      data.set(key, value);
    },
    removeItem(key) {
      data.delete(key);
    },
    getKeys() {
      return [...data.keys()];
    },
    clear() {
      data.clear();
    },
    dispose() {
      data.clear();
    }
  };
});
function createStorage(options = {}) {
  const context = {
    mounts: { "": options.driver || memory() },
    mountpoints: [""],
    watching: false,
    watchListeners: [],
    unwatch: {}
  };
  const getMount = (key) => {
    for (const base of context.mountpoints) {
      if (key.startsWith(base)) {
        return {
          base,
          relativeKey: key.slice(base.length),
          driver: context.mounts[base]
        };
      }
    }
    return {
      base: "",
      relativeKey: key,
      driver: context.mounts[""]
    };
  };
  const getMounts = (base, includeParent) => {
    return context.mountpoints.filter(
      (mountpoint) => mountpoint.startsWith(base) || includeParent && base.startsWith(mountpoint)
    ).map((mountpoint) => ({
      relativeBase: base.length > mountpoint.length ? base.slice(mountpoint.length) : void 0,
      mountpoint,
      driver: context.mounts[mountpoint]
    }));
  };
  const onChange = (event, key) => {
    if (!context.watching) {
      return;
    }
    key = normalizeKey(key);
    for (const listener of context.watchListeners) {
      listener(event, key);
    }
  };
  const startWatch = async () => {
    if (context.watching) {
      return;
    }
    context.watching = true;
    for (const mountpoint in context.mounts) {
      context.unwatch[mountpoint] = await watch(
        context.mounts[mountpoint],
        onChange,
        mountpoint
      );
    }
  };
  const stopWatch = async () => {
    if (!context.watching) {
      return;
    }
    for (const mountpoint in context.unwatch) {
      await context.unwatch[mountpoint]();
    }
    context.unwatch = {};
    context.watching = false;
  };
  const runBatch = (items, commonOptions, cb) => {
    const batches = /* @__PURE__ */ new Map();
    const getBatch = (mount) => {
      let batch = batches.get(mount.base);
      if (!batch) {
        batch = {
          driver: mount.driver,
          base: mount.base,
          items: []
        };
        batches.set(mount.base, batch);
      }
      return batch;
    };
    for (const item of items) {
      const isStringItem = typeof item === "string";
      const key = normalizeKey(isStringItem ? item : item.key);
      const value = isStringItem ? void 0 : item.value;
      const options2 = isStringItem || !item.options ? commonOptions : { ...commonOptions, ...item.options };
      const mount = getMount(key);
      getBatch(mount).items.push({
        key,
        value,
        relativeKey: mount.relativeKey,
        options: options2
      });
    }
    return Promise.all([...batches.values()].map((batch) => cb(batch))).then(
      (r2) => r2.flat()
    );
  };
  const storage = {
    // Item
    hasItem(key, opts = {}) {
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.hasItem, relativeKey, opts);
    },
    getItem(key, opts = {}) {
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => destr(value)
      );
    },
    getItems(items, commonOptions = {}) {
      return runBatch(items, commonOptions, (batch) => {
        if (batch.driver.getItems) {
          return asyncCall(
            batch.driver.getItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              options: item.options
            })),
            commonOptions
          ).then(
            (r2) => r2.map((item) => ({
              key: joinKeys(batch.base, item.key),
              value: destr(item.value)
            }))
          );
        }
        return Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.getItem,
              item.relativeKey,
              item.options
            ).then((value) => ({
              key: item.key,
              value: destr(value)
            }));
          })
        );
      });
    },
    getItemRaw(key, opts = {}) {
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.getItemRaw) {
        return asyncCall(driver.getItemRaw, relativeKey, opts);
      }
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => deserializeRaw(value)
      );
    },
    async setItem(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key);
      }
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.setItem) {
        return;
      }
      await asyncCall(driver.setItem, relativeKey, stringify$1(value), opts);
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async setItems(items, commonOptions) {
      await runBatch(items, commonOptions, async (batch) => {
        if (batch.driver.setItems) {
          return asyncCall(
            batch.driver.setItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              value: stringify$1(item.value),
              options: item.options
            })),
            commonOptions
          );
        }
        if (!batch.driver.setItem) {
          return;
        }
        await Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.setItem,
              item.relativeKey,
              stringify$1(item.value),
              item.options
            );
          })
        );
      });
    },
    async setItemRaw(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key, opts);
      }
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.setItemRaw) {
        await asyncCall(driver.setItemRaw, relativeKey, value, opts);
      } else if (driver.setItem) {
        await asyncCall(driver.setItem, relativeKey, serializeRaw(value), opts);
      } else {
        return;
      }
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async removeItem(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { removeMeta: opts };
      }
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.removeItem) {
        return;
      }
      await asyncCall(driver.removeItem, relativeKey, opts);
      if (opts.removeMeta || opts.removeMata) {
        await asyncCall(driver.removeItem, relativeKey + "$", opts);
      }
      if (!driver.watch) {
        onChange("remove", key);
      }
    },
    // Meta
    async getMeta(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { nativeOnly: opts };
      }
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      const meta = /* @__PURE__ */ Object.create(null);
      if (driver.getMeta) {
        Object.assign(meta, await asyncCall(driver.getMeta, relativeKey, opts));
      }
      if (!opts.nativeOnly) {
        const value = await asyncCall(
          driver.getItem,
          relativeKey + "$",
          opts
        ).then((value_) => destr(value_));
        if (value && typeof value === "object") {
          if (typeof value.atime === "string") {
            value.atime = new Date(value.atime);
          }
          if (typeof value.mtime === "string") {
            value.mtime = new Date(value.mtime);
          }
          Object.assign(meta, value);
        }
      }
      return meta;
    },
    setMeta(key, value, opts = {}) {
      return this.setItem(key + "$", value, opts);
    },
    removeMeta(key, opts = {}) {
      return this.removeItem(key + "$", opts);
    },
    // Keys
    async getKeys(base, opts = {}) {
      base = normalizeBaseKey(base);
      const mounts = getMounts(base, true);
      let maskedMounts = [];
      const allKeys = [];
      let allMountsSupportMaxDepth = true;
      for (const mount of mounts) {
        if (!mount.driver.flags?.maxDepth) {
          allMountsSupportMaxDepth = false;
        }
        const rawKeys = await asyncCall(
          mount.driver.getKeys,
          mount.relativeBase,
          opts
        );
        for (const key of rawKeys) {
          const fullKey = mount.mountpoint + normalizeKey(key);
          if (!maskedMounts.some((p) => fullKey.startsWith(p))) {
            allKeys.push(fullKey);
          }
        }
        maskedMounts = [
          mount.mountpoint,
          ...maskedMounts.filter((p) => !p.startsWith(mount.mountpoint))
        ];
      }
      const shouldFilterByDepth = opts.maxDepth !== void 0 && !allMountsSupportMaxDepth;
      return allKeys.filter(
        (key) => (!shouldFilterByDepth || filterKeyByDepth(key, opts.maxDepth)) && filterKeyByBase(key, base)
      );
    },
    // Utils
    async clear(base, opts = {}) {
      base = normalizeBaseKey(base);
      await Promise.all(
        getMounts(base, false).map(async (m) => {
          if (m.driver.clear) {
            return asyncCall(m.driver.clear, m.relativeBase, opts);
          }
          if (m.driver.removeItem) {
            const keys = await m.driver.getKeys(m.relativeBase || "", opts);
            return Promise.all(
              keys.map((key) => m.driver.removeItem(key, opts))
            );
          }
        })
      );
    },
    async dispose() {
      await Promise.all(
        Object.values(context.mounts).map((driver) => dispose(driver))
      );
    },
    async watch(callback) {
      await startWatch();
      context.watchListeners.push(callback);
      return async () => {
        context.watchListeners = context.watchListeners.filter(
          (listener) => listener !== callback
        );
        if (context.watchListeners.length === 0) {
          await stopWatch();
        }
      };
    },
    async unwatch() {
      context.watchListeners = [];
      await stopWatch();
    },
    // Mount
    mount(base, driver) {
      base = normalizeBaseKey(base);
      if (base && context.mounts[base]) {
        throw new Error(`already mounted at ${base}`);
      }
      if (base) {
        context.mountpoints.push(base);
        context.mountpoints.sort((a2, b) => b.length - a2.length);
      }
      context.mounts[base] = driver;
      if (context.watching) {
        Promise.resolve(watch(driver, onChange, base)).then((unwatcher) => {
          context.unwatch[base] = unwatcher;
        }).catch(console.error);
      }
      return storage;
    },
    async unmount(base, _dispose = true) {
      base = normalizeBaseKey(base);
      if (!base || !context.mounts[base]) {
        return;
      }
      if (context.watching && base in context.unwatch) {
        context.unwatch[base]?.();
        delete context.unwatch[base];
      }
      if (_dispose) {
        await dispose(context.mounts[base]);
      }
      context.mountpoints = context.mountpoints.filter((key) => key !== base);
      delete context.mounts[base];
    },
    getMount(key = "") {
      key = normalizeKey(key) + ":";
      const m = getMount(key);
      return {
        driver: m.driver,
        base: m.base
      };
    },
    getMounts(base = "", opts = {}) {
      base = normalizeKey(base);
      const mounts = getMounts(base, opts.parents);
      return mounts.map((m) => ({
        driver: m.driver,
        base: m.mountpoint
      }));
    },
    // Aliases
    keys: (base, opts = {}) => storage.getKeys(base, opts),
    get: (key, opts = {}) => storage.getItem(key, opts),
    set: (key, value, opts = {}) => storage.setItem(key, value, opts),
    has: (key, opts = {}) => storage.hasItem(key, opts),
    del: (key, opts = {}) => storage.removeItem(key, opts),
    remove: (key, opts = {}) => storage.removeItem(key, opts)
  };
  return storage;
}
function watch(driver, onChange, base) {
  return driver.watch ? driver.watch((event, key) => onChange(event, base + key)) : () => {
  };
}
async function dispose(driver) {
  if (typeof driver.dispose === "function") {
    await asyncCall(driver.dispose);
  }
}
const PERSIST_SYMBOL = /* @__PURE__ */ Symbol();
const DEFAULT_COOKIE_NAME = "astro-session";
const VALID_COOKIE_REGEX = /^[\w-]+$/;
const unflatten = (parsed, _) => {
  return unflatten$1(parsed, {
    URL: (href) => new URL(href)
  });
};
const stringify = (data, _) => {
  return stringify$2(data, {
    // Support URL objects
    URL: (val) => val instanceof URL && val.href
  });
};
class AstroSession {
  // The cookies object.
  #cookies;
  // The session configuration.
  #config;
  // The cookie config
  #cookieConfig;
  // The cookie name
  #cookieName;
  // The unstorage object for the session driver.
  #storage;
  #data;
  // The session ID. A v4 UUID.
  #sessionID;
  // Sessions to destroy. Needed because we won't have the old session ID after it's destroyed locally.
  #toDestroy = /* @__PURE__ */ new Set();
  // Session keys to delete. Used for partial data sets to avoid overwriting the deleted value.
  #toDelete = /* @__PURE__ */ new Set();
  // Whether the session is dirty and needs to be saved.
  #dirty = false;
  // Whether the session cookie has been set.
  #cookieSet = false;
  // Whether the session ID was sourced from a client cookie rather than freshly generated.
  #sessionIDFromCookie = false;
  // The local data is "partial" if it has not been loaded from storage yet and only
  // contains values that have been set or deleted in-memory locally.
  // We do this to avoid the need to block on loading data when it is only being set.
  // When we load the data from storage, we need to merge it with the local partial data,
  // preserving in-memory changes and deletions.
  #partial = true;
  // The driver factory function provided by the pipeline
  #driverFactory;
  static #sharedStorage = /* @__PURE__ */ new Map();
  constructor({
    cookies,
    config: config2,
    runtimeMode,
    driverFactory,
    mockStorage
  }) {
    if (!config2) {
      throw new AstroError({
        ...SessionStorageInitError,
        message: SessionStorageInitError.message(
          "No driver was defined in the session configuration and the adapter did not provide a default driver."
        )
      });
    }
    this.#cookies = cookies;
    this.#driverFactory = driverFactory;
    const { cookie: cookieConfig = DEFAULT_COOKIE_NAME, ...configRest } = config2;
    let cookieConfigObject;
    if (typeof cookieConfig === "object") {
      const { name = DEFAULT_COOKIE_NAME, ...rest } = cookieConfig;
      this.#cookieName = name;
      cookieConfigObject = rest;
    } else {
      this.#cookieName = cookieConfig || DEFAULT_COOKIE_NAME;
    }
    this.#cookieConfig = {
      sameSite: "lax",
      secure: runtimeMode === "production",
      path: "/",
      ...cookieConfigObject,
      httpOnly: true
    };
    this.#config = configRest;
    if (mockStorage) {
      this.#storage = mockStorage;
    }
  }
  /**
   * Gets a session value. Returns `undefined` if the session or value does not exist.
   */
  async get(key) {
    return (await this.#ensureData()).get(key)?.data;
  }
  /**
   * Checks if a session value exists.
   */
  async has(key) {
    return (await this.#ensureData()).has(key);
  }
  /**
   * Gets all session values.
   */
  async keys() {
    return (await this.#ensureData()).keys();
  }
  /**
   * Gets all session values.
   */
  async values() {
    return [...(await this.#ensureData()).values()].map((entry) => entry.data);
  }
  /**
   * Gets all session entries.
   */
  async entries() {
    return [...(await this.#ensureData()).entries()].map(([key, entry]) => [key, entry.data]);
  }
  /**
   * Deletes a session value.
   */
  delete(key) {
    this.#data?.delete(key);
    if (this.#partial) {
      this.#toDelete.add(key);
    }
    this.#dirty = true;
  }
  /**
   * Sets a session value. The session is created if it does not exist.
   */
  set(key, value, { ttl } = {}) {
    if (!key) {
      throw new AstroError({
        ...SessionStorageSaveError,
        message: "The session key was not provided."
      });
    }
    let cloned;
    try {
      cloned = unflatten(JSON.parse(stringify(value)));
    } catch (err) {
      throw new AstroError(
        {
          ...SessionStorageSaveError,
          message: `The session data for ${key} could not be serialized.`,
          hint: "See the devalue library for all supported types: https://github.com/rich-harris/devalue"
        },
        { cause: err }
      );
    }
    if (!this.#cookieSet) {
      this.#setCookie();
      this.#cookieSet = true;
    }
    this.#data ??= /* @__PURE__ */ new Map();
    const lifetime = ttl ?? this.#config.ttl;
    const expires = typeof lifetime === "number" ? Date.now() + lifetime * 1e3 : lifetime;
    this.#data.set(key, {
      data: cloned,
      expires
    });
    this.#dirty = true;
  }
  /**
   * Destroys the session, clearing the cookie and storage if it exists.
   */
  destroy() {
    const sessionId = this.#sessionID ?? this.#cookies.get(this.#cookieName)?.value;
    if (sessionId) {
      this.#toDestroy.add(sessionId);
    }
    this.#cookies.delete(this.#cookieName, this.#cookieConfig);
    this.#sessionID = void 0;
    this.#data = void 0;
    this.#dirty = true;
  }
  /**
   * Regenerates the session, creating a new session ID. The existing session data is preserved.
   */
  async regenerate() {
    let data = /* @__PURE__ */ new Map();
    try {
      data = await this.#ensureData();
    } catch (err) {
      console.error("Failed to load session data during regeneration:", err);
    }
    const oldSessionId = this.#sessionID;
    this.#sessionID = crypto.randomUUID();
    this.#sessionIDFromCookie = false;
    this.#data = data;
    this.#dirty = true;
    await this.#setCookie();
    if (oldSessionId && this.#storage) {
      this.#storage.removeItem(oldSessionId).catch((err) => {
        console.error("Failed to remove old session data:", err);
      });
    }
  }
  // Persists the session data to storage.
  // This is called automatically at the end of the request.
  // Uses a symbol to prevent users from calling it directly.
  async [PERSIST_SYMBOL]() {
    if (!this.#dirty && !this.#toDestroy.size) {
      return;
    }
    const storage = await this.#ensureStorage();
    if (this.#dirty && this.#data) {
      const data = await this.#ensureData();
      this.#toDelete.forEach((key2) => data.delete(key2));
      const key = this.#ensureSessionID();
      let serialized;
      try {
        serialized = stringify(data);
      } catch (err) {
        throw new AstroError(
          {
            ...SessionStorageSaveError,
            message: SessionStorageSaveError.message(
              "The session data could not be serialized.",
              this.#config.driver
            )
          },
          { cause: err }
        );
      }
      await storage.setItem(key, serialized);
      this.#dirty = false;
    }
    if (this.#toDestroy.size > 0) {
      const cleanupPromises = [...this.#toDestroy].map(
        (sessionId) => storage.removeItem(sessionId).catch((err) => {
          console.error(`Failed to clean up session ${sessionId}:`, err);
        })
      );
      await Promise.all(cleanupPromises);
      this.#toDestroy.clear();
    }
  }
  get sessionID() {
    return this.#sessionID;
  }
  /**
   * Loads a session from storage with the given ID, and replaces the current session.
   * Any changes made to the current session will be lost.
   * This is not normally needed, as the session is automatically loaded using the cookie.
   * However it can be used to restore a session where the ID has been recorded somewhere
   * else (e.g. in a database).
   */
  async load(sessionID) {
    this.#sessionID = sessionID;
    this.#data = void 0;
    await this.#setCookie();
    await this.#ensureData();
  }
  /**
   * Sets the session cookie.
   */
  async #setCookie() {
    if (!VALID_COOKIE_REGEX.test(this.#cookieName)) {
      throw new AstroError({
        ...SessionStorageSaveError,
        message: "Invalid cookie name. Cookie names can only contain letters, numbers, and dashes."
      });
    }
    const value = this.#ensureSessionID();
    this.#cookies.set(this.#cookieName, value, this.#cookieConfig);
  }
  /**
   * Attempts to load the session data from storage, or creates a new data object if none exists.
   * If there is existing partial data, it will be merged into the new data object.
   */
  async #ensureData() {
    const storage = await this.#ensureStorage();
    if (this.#data && !this.#partial) {
      return this.#data;
    }
    this.#data ??= /* @__PURE__ */ new Map();
    const raw = await storage.get(this.#ensureSessionID());
    if (!raw) {
      if (this.#sessionIDFromCookie) {
        this.#sessionID = crypto.randomUUID();
        this.#sessionIDFromCookie = false;
        if (this.#cookieSet) {
          await this.#setCookie();
        }
      }
      return this.#data;
    }
    try {
      const storedMap = unflatten(raw);
      if (!(storedMap instanceof Map)) {
        await this.destroy();
        throw new AstroError({
          ...SessionStorageInitError,
          message: SessionStorageInitError.message(
            "The session data was an invalid type.",
            this.#config.driver
          )
        });
      }
      const now = Date.now();
      for (const [key, value] of storedMap) {
        const expired = typeof value.expires === "number" && value.expires < now;
        if (!this.#data.has(key) && !this.#toDelete.has(key) && !expired) {
          this.#data.set(key, value);
        }
      }
      this.#partial = false;
      return this.#data;
    } catch (err) {
      await this.destroy();
      if (err instanceof AstroError) {
        throw err;
      }
      throw new AstroError(
        {
          ...SessionStorageInitError,
          message: SessionStorageInitError.message(
            "The session data could not be parsed.",
            this.#config.driver
          )
        },
        { cause: err }
      );
    }
  }
  /**
   * Returns the session ID, generating a new one if it does not exist.
   */
  #ensureSessionID() {
    if (!this.#sessionID) {
      const cookieValue = this.#cookies.get(this.#cookieName)?.value;
      if (cookieValue) {
        this.#sessionID = cookieValue;
        this.#sessionIDFromCookie = true;
      } else {
        this.#sessionID = crypto.randomUUID();
      }
    }
    return this.#sessionID;
  }
  /**
   * Ensures the storage is initialized.
   * This is called automatically when a storage operation is needed.
   */
  async #ensureStorage() {
    if (this.#storage) {
      return this.#storage;
    }
    if (AstroSession.#sharedStorage.has(this.#config.driver)) {
      this.#storage = AstroSession.#sharedStorage.get(this.#config.driver);
      return this.#storage;
    }
    if (!this.#driverFactory) {
      throw new AstroError({
        ...SessionStorageInitError,
        message: SessionStorageInitError.message(
          "Astro could not load the driver correctly. Does it exist?",
          this.#config.driver
        )
      });
    }
    const driver = this.#driverFactory;
    try {
      this.#storage = createStorage({
        driver: {
          ...driver(this.#config.options),
          // Unused methods
          hasItem() {
            return false;
          },
          getKeys() {
            return [];
          }
        }
      });
      AstroSession.#sharedStorage.set(this.#config.driver, this.#storage);
      return this.#storage;
    } catch (err) {
      throw new AstroError(
        {
          ...SessionStorageInitError,
          message: SessionStorageInitError.message("Unknown error", this.#config.driver)
        },
        { cause: err }
      );
    }
  }
}
function validateAndDecodePathname(pathname) {
  let decoded;
  try {
    decoded = decodeURI(pathname);
  } catch (_e) {
    throw new Error("Invalid URL encoding");
  }
  const hasDecoding = decoded !== pathname;
  const decodedStillHasEncoding = /%[0-9a-fA-F]{2}/.test(decoded);
  if (hasDecoding && decodedStillHasEncoding) {
    throw new Error("Multi-level URL encoding is not allowed");
  }
  return decoded;
}
class RenderContext {
  constructor(pipeline, locals, middleware, actions, serverIslands, pathname, request, routeData, status, clientAddress, cookies = new AstroCookies(request), params = getParams(routeData, pathname), url = RenderContext.#createNormalizedUrl(request.url), props = {}, partial = void 0, shouldInjectCspMetaTags = pipeline.manifest.shouldInjectCspMetaTags, session = void 0, cache, skipMiddleware = false) {
    this.pipeline = pipeline;
    this.locals = locals;
    this.middleware = middleware;
    this.actions = actions;
    this.serverIslands = serverIslands;
    this.pathname = pathname;
    this.request = request;
    this.routeData = routeData;
    this.status = status;
    this.clientAddress = clientAddress;
    this.cookies = cookies;
    this.params = params;
    this.url = url;
    this.props = props;
    this.partial = partial;
    this.shouldInjectCspMetaTags = shouldInjectCspMetaTags;
    this.session = session;
    this.cache = cache;
    this.skipMiddleware = skipMiddleware;
  }
  static #createNormalizedUrl(requestUrl) {
    const url = new URL(requestUrl);
    try {
      url.pathname = validateAndDecodePathname(url.pathname);
    } catch {
      try {
        url.pathname = decodeURI(url.pathname);
      } catch {
      }
    }
    url.pathname = collapseDuplicateSlashes(url.pathname);
    return url;
  }
  /**
   * A flag that tells the render content if the rewriting was triggered
   */
  isRewriting = false;
  /**
   * A safety net in case of loops
   */
  counter = 0;
  result = void 0;
  static async create({
    locals = {},
    pathname,
    pipeline,
    request,
    routeData,
    clientAddress,
    status = 200,
    props,
    partial = void 0,
    shouldInjectCspMetaTags,
    skipMiddleware = false
  }) {
    const pipelineMiddleware = await pipeline.getMiddleware();
    const pipelineActions = await pipeline.getActions();
    const pipelineSessionDriver = await pipeline.getSessionDriver();
    const serverIslands = await pipeline.getServerIslands();
    setOriginPathname(
      request,
      pathname,
      pipeline.manifest.trailingSlash,
      pipeline.manifest.buildFormat
    );
    const cookies = new AstroCookies(request);
    const session = pipeline.manifest.sessionConfig && pipelineSessionDriver ? new AstroSession({
      cookies,
      config: pipeline.manifest.sessionConfig,
      runtimeMode: pipeline.runtimeMode,
      driverFactory: pipelineSessionDriver,
      mockStorage: null
    }) : void 0;
    let cache;
    if (!pipeline.cacheConfig) {
      cache = new DisabledAstroCache(pipeline.logger);
    } else if (pipeline.runtimeMode === "development") {
      cache = new NoopAstroCache();
    } else {
      const cacheProvider = await pipeline.getCacheProvider();
      cache = new AstroCache(cacheProvider);
      if (pipeline.cacheConfig?.routes) {
        if (!pipeline.compiledCacheRoutes) {
          pipeline.compiledCacheRoutes = compileCacheRoutes(
            pipeline.cacheConfig.routes,
            pipeline.manifest.base,
            pipeline.manifest.trailingSlash
          );
        }
        const matched = matchCacheRoute(pathname, pipeline.compiledCacheRoutes);
        if (matched) {
          cache.set(matched);
        }
      }
    }
    return new RenderContext(
      pipeline,
      locals,
      sequence(...pipeline.internalMiddleware, pipelineMiddleware),
      pipelineActions,
      serverIslands,
      pathname,
      request,
      routeData,
      status,
      clientAddress,
      cookies,
      void 0,
      void 0,
      props,
      partial,
      shouldInjectCspMetaTags ?? pipeline.manifest.shouldInjectCspMetaTags,
      session,
      cache,
      skipMiddleware
    );
  }
  /**
   * The main function of the RenderContext.
   *
   * Use this function to render any route known to Astro.
   * It attempts to render a route. A route can be a:
   *
   * - page
   * - redirect
   * - endpoint
   * - fallback
   */
  async render(componentInstance, slots = {}) {
    const { middleware, pipeline } = this;
    const { logger, streaming, manifest: manifest2 } = pipeline;
    const props = Object.keys(this.props).length > 0 ? this.props : await getProps({
      mod: componentInstance,
      routeData: this.routeData,
      routeCache: this.pipeline.routeCache,
      pathname: this.pathname,
      logger,
      serverLike: manifest2.serverLike,
      base: manifest2.base,
      trailingSlash: manifest2.trailingSlash
    });
    const actionApiContext = this.createActionAPIContext();
    const apiContext = this.createAPIContext(props, actionApiContext);
    this.counter++;
    if (this.counter === 4) {
      return new Response("Loop Detected", {
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/508
        status: 508,
        statusText: "Astro detected a loop where you tried to call the rewriting logic more than four times."
      });
    }
    const lastNext = async (ctx, payload) => {
      if (payload) {
        const oldPathname = this.pathname;
        pipeline.logger.debug("router", "Called rewriting to:", payload);
        const {
          routeData,
          componentInstance: newComponent,
          pathname,
          newUrl
        } = await pipeline.tryRewrite(payload, this.request);
        if (this.pipeline.manifest.serverLike === true && this.routeData.prerender === false && routeData.prerender === true) {
          throw new AstroError({
            ...ForbiddenRewrite,
            message: ForbiddenRewrite.message(this.pathname, pathname, routeData.component),
            hint: ForbiddenRewrite.hint(routeData.component)
          });
        }
        this.routeData = routeData;
        componentInstance = newComponent;
        if (payload instanceof Request) {
          this.request = payload;
        } else {
          this.request = copyRequest(
            newUrl,
            this.request,
            // need to send the flag of the previous routeData
            routeData.prerender,
            this.pipeline.logger,
            this.routeData.route
          );
        }
        this.isRewriting = true;
        this.url = RenderContext.#createNormalizedUrl(this.request.url);
        this.params = getParams(routeData, pathname);
        this.pathname = pathname;
        this.status = 200;
        setOriginPathname(
          this.request,
          oldPathname,
          this.pipeline.manifest.trailingSlash,
          this.pipeline.manifest.buildFormat
        );
      }
      let response2;
      if (!ctx.isPrerendered && !this.skipMiddleware) {
        const { action, setActionResult, serializeActionResult: serializeActionResult2 } = getActionContext(ctx);
        if (action?.calledFrom === "form") {
          const actionResult = await action.handler();
          setActionResult(action.name, serializeActionResult2(actionResult));
        }
      }
      switch (this.routeData.type) {
        case "endpoint": {
          response2 = await renderEndpoint(
            componentInstance,
            ctx,
            this.routeData.prerender,
            logger
          );
          break;
        }
        case "redirect":
          return renderRedirect(this);
        case "page": {
          this.result = await this.createResult(componentInstance, actionApiContext);
          try {
            response2 = await renderPage(
              this.result,
              componentInstance?.default,
              props,
              slots,
              streaming,
              this.routeData
            );
          } catch (e2) {
            this.result.cancelled = true;
            throw e2;
          }
          response2.headers.set(ROUTE_TYPE_HEADER, "page");
          if (this.routeData.route === "/404" || this.routeData.route === "/500") {
            response2.headers.set(REROUTE_DIRECTIVE_HEADER, "no");
          }
          if (this.isRewriting) {
            response2.headers.set(REWRITE_DIRECTIVE_HEADER_KEY, REWRITE_DIRECTIVE_HEADER_VALUE);
          }
          break;
        }
        case "fallback": {
          return new Response(null, { status: 500, headers: { [ROUTE_TYPE_HEADER]: "fallback" } });
        }
      }
      const responseCookies = getCookiesFromResponse(response2);
      if (responseCookies) {
        this.cookies.merge(responseCookies);
      }
      return response2;
    };
    if (isRouteExternalRedirect(this.routeData)) {
      return renderRedirect(this);
    }
    const response = this.skipMiddleware ? await lastNext(apiContext) : await callMiddleware(middleware, apiContext, lastNext);
    if (response.headers.get(ROUTE_TYPE_HEADER)) {
      response.headers.delete(ROUTE_TYPE_HEADER);
    }
    attachCookiesToResponse(response, this.cookies);
    return response;
  }
  createAPIContext(props, context) {
    const redirect = (path, status = 302) => new Response(null, { status, headers: { Location: path } });
    const rewrite = async (reroutePayload) => {
      return await this.#executeRewrite(reroutePayload);
    };
    Reflect.set(context, pipelineSymbol, this.pipeline);
    return Object.assign(context, {
      props,
      redirect,
      rewrite,
      getActionResult: createGetActionResult(context.locals),
      callAction: createCallAction(context)
    });
  }
  async #executeRewrite(reroutePayload) {
    this.pipeline.logger.debug("router", "Calling rewrite: ", reroutePayload);
    const oldPathname = this.pathname;
    const { routeData, componentInstance, newUrl, pathname } = await this.pipeline.tryRewrite(
      reroutePayload,
      this.request
    );
    const isI18nFallback = routeData.fallbackRoutes && routeData.fallbackRoutes.length > 0;
    if (this.pipeline.manifest.serverLike && !this.routeData.prerender && routeData.prerender && !isI18nFallback) {
      throw new AstroError({
        ...ForbiddenRewrite,
        message: ForbiddenRewrite.message(this.pathname, pathname, routeData.component),
        hint: ForbiddenRewrite.hint(routeData.component)
      });
    }
    this.routeData = routeData;
    if (reroutePayload instanceof Request) {
      this.request = reroutePayload;
    } else {
      this.request = copyRequest(
        newUrl,
        this.request,
        // need to send the flag of the previous routeData
        routeData.prerender,
        this.pipeline.logger,
        this.routeData.route
      );
    }
    this.url = RenderContext.#createNormalizedUrl(this.request.url);
    const newCookies = new AstroCookies(this.request);
    if (this.cookies) {
      newCookies.merge(this.cookies);
    }
    this.cookies = newCookies;
    this.params = getParams(routeData, pathname);
    this.pathname = pathname;
    this.isRewriting = true;
    this.status = 200;
    setOriginPathname(
      this.request,
      oldPathname,
      this.pipeline.manifest.trailingSlash,
      this.pipeline.manifest.buildFormat
    );
    return await this.render(componentInstance);
  }
  createActionAPIContext() {
    const renderContext = this;
    const { params, pipeline, url } = this;
    return {
      // Don't allow reassignment of cookies because it doesn't work
      get cookies() {
        return renderContext.cookies;
      },
      routePattern: this.routeData.route,
      isPrerendered: this.routeData.prerender,
      get clientAddress() {
        return renderContext.getClientAddress();
      },
      get currentLocale() {
        return renderContext.computeCurrentLocale();
      },
      generator: ASTRO_GENERATOR,
      get locals() {
        return renderContext.locals;
      },
      set locals(_) {
        throw new AstroError(LocalsReassigned);
      },
      params,
      get preferredLocale() {
        return renderContext.computePreferredLocale();
      },
      get preferredLocaleList() {
        return renderContext.computePreferredLocaleList();
      },
      request: this.request,
      site: pipeline.site,
      url,
      get originPathname() {
        return getOriginPathname(renderContext.request);
      },
      get session() {
        if (this.isPrerendered) {
          pipeline.logger.warn(
            "session",
            `context.session was used when rendering the route ${s.green(this.routePattern)}, but it is not available on prerendered routes. If you need access to sessions, make sure that the route is server-rendered using \`export const prerender = false;\` or by setting \`output\` to \`"server"\` in your Astro config to make all your routes server-rendered by default. For more information, see https://docs.astro.build/en/guides/sessions/`
          );
          return void 0;
        }
        if (!renderContext.session) {
          pipeline.logger.warn(
            "session",
            `context.session was used when rendering the route ${s.green(this.routePattern)}, but no storage configuration was provided. Either configure the storage manually or use an adapter that provides session storage. For more information, see https://docs.astro.build/en/guides/sessions/`
          );
          return void 0;
        }
        return renderContext.session;
      },
      get cache() {
        return renderContext.cache;
      },
      get csp() {
        if (!pipeline.manifest.csp) {
          if (pipeline.runtimeMode === "production") {
            pipeline.logger.warn(
              "csp",
              `context.csp was used when rendering the route ${s.green(this.routePattern)}, but CSP was not configured. For more information, see https://docs.astro.build/en/reference/experimental-flags/csp/`
            );
          }
          return void 0;
        }
        return {
          insertDirective(payload) {
            if (renderContext?.result?.directives) {
              renderContext.result.directives = pushDirective(
                renderContext.result.directives,
                payload
              );
            } else {
              renderContext?.result?.directives.push(payload);
            }
          },
          insertScriptResource(resource) {
            renderContext.result?.scriptResources.push(resource);
          },
          insertStyleResource(resource) {
            renderContext.result?.styleResources.push(resource);
          },
          insertStyleHash(hash) {
            renderContext.result?.styleHashes.push(hash);
          },
          insertScriptHash(hash) {
            renderContext.result?.scriptHashes.push(hash);
          }
        };
      }
    };
  }
  async createResult(mod, ctx) {
    const { cookies, pathname, pipeline, routeData, status } = this;
    const { clientDirectives, inlinedScripts, compressHTML, manifest: manifest2, renderers: renderers2, resolve } = pipeline;
    const { links, scripts, styles } = await pipeline.headElements(routeData);
    const extraStyleHashes = [];
    const extraScriptHashes = [];
    const shouldInjectCspMetaTags = this.shouldInjectCspMetaTags;
    const cspAlgorithm = manifest2.csp?.algorithm ?? "SHA-256";
    if (shouldInjectCspMetaTags) {
      for (const style of styles) {
        extraStyleHashes.push(await generateCspDigest(style.children, cspAlgorithm));
      }
      for (const script of scripts) {
        extraScriptHashes.push(await generateCspDigest(script.children, cspAlgorithm));
      }
    }
    const componentMetadata = await pipeline.componentMetadata(routeData) ?? manifest2.componentMetadata;
    const headers = new Headers({ "Content-Type": "text/html" });
    const partial = typeof this.partial === "boolean" ? this.partial : Boolean(mod.partial);
    const actionResult = hasActionPayload(this.locals) ? deserializeActionResult(this.locals._actionPayload.actionResult) : void 0;
    const response = {
      status: actionResult?.error ? actionResult?.error.status : status,
      statusText: actionResult?.error ? actionResult?.error.type : "OK",
      get headers() {
        return headers;
      },
      // Disallow `Astro.response.headers = new Headers`
      set headers(_) {
        throw new AstroError(AstroResponseHeadersReassigned);
      }
    };
    const result = {
      base: manifest2.base,
      userAssetsBase: manifest2.userAssetsBase,
      cancelled: false,
      clientDirectives,
      inlinedScripts,
      componentMetadata,
      compressHTML,
      cookies,
      /** This function returns the `Astro` faux-global */
      createAstro: (props, slots) => this.createAstro(result, props, slots, ctx),
      links,
      params: this.params,
      partial,
      pathname,
      renderers: renderers2,
      resolve,
      response,
      request: this.request,
      scripts,
      styles,
      actionResult,
      serverIslandNameMap: this.serverIslands.serverIslandNameMap ?? /* @__PURE__ */ new Map(),
      key: manifest2.key,
      trailingSlash: manifest2.trailingSlash,
      _experimentalQueuedRendering: {
        pool: pipeline.nodePool,
        htmlStringCache: pipeline.htmlStringCache,
        enabled: manifest2.experimentalQueuedRendering?.enabled,
        poolSize: manifest2.experimentalQueuedRendering?.poolSize,
        contentCache: manifest2.experimentalQueuedRendering?.contentCache
      },
      _metadata: {
        hasHydrationScript: false,
        rendererSpecificHydrationScripts: /* @__PURE__ */ new Set(),
        hasRenderedHead: false,
        renderedScripts: /* @__PURE__ */ new Set(),
        hasDirectives: /* @__PURE__ */ new Set(),
        hasRenderedServerIslandRuntime: false,
        headInTree: false,
        extraHead: [],
        extraStyleHashes,
        extraScriptHashes,
        propagators: /* @__PURE__ */ new Set()
      },
      cspDestination: manifest2.csp?.cspDestination ?? (routeData.prerender ? "meta" : "header"),
      shouldInjectCspMetaTags,
      cspAlgorithm,
      // The following arrays must be cloned; otherwise, they become mutable across routes.
      scriptHashes: manifest2.csp?.scriptHashes ? [...manifest2.csp.scriptHashes] : [],
      scriptResources: manifest2.csp?.scriptResources ? [...manifest2.csp.scriptResources] : [],
      styleHashes: manifest2.csp?.styleHashes ? [...manifest2.csp.styleHashes] : [],
      styleResources: manifest2.csp?.styleResources ? [...manifest2.csp.styleResources] : [],
      directives: manifest2.csp?.directives ? [...manifest2.csp.directives] : [],
      isStrictDynamic: manifest2.csp?.isStrictDynamic ?? false,
      internalFetchHeaders: manifest2.internalFetchHeaders
    };
    return result;
  }
  #astroPagePartial;
  /**
   * The Astro global is sourced in 3 different phases:
   * - **Static**: `.generator` and `.glob` is printed by the compiler, instantiated once per process per astro file
   * - **Page-level**: `.request`, `.cookies`, `.locals` etc. These remain the same for the duration of the request.
   * - **Component-level**: `.props`, `.slots`, and `.self` are unique to each _use_ of each component.
   *
   * The page level partial is used as the prototype of the user-visible `Astro` global object, which is instantiated once per use of a component.
   */
  createAstro(result, props, slotValues, apiContext) {
    let astroPagePartial;
    if (this.isRewriting) {
      astroPagePartial = this.#astroPagePartial = this.createAstroPagePartial(result, apiContext);
    } else {
      astroPagePartial = this.#astroPagePartial ??= this.createAstroPagePartial(result, apiContext);
    }
    const astroComponentPartial = { props, self: null };
    const Astro = Object.assign(
      Object.create(astroPagePartial),
      astroComponentPartial
    );
    let _slots;
    Object.defineProperty(Astro, "slots", {
      get: () => {
        if (!_slots) {
          _slots = new Slots(
            result,
            slotValues,
            this.pipeline.logger
          );
        }
        return _slots;
      }
    });
    return Astro;
  }
  createAstroPagePartial(result, apiContext) {
    const renderContext = this;
    const { cookies, locals, params, pipeline, url } = this;
    const { response } = result;
    const redirect = (path, status = 302) => {
      if (this.request[responseSentSymbol$1]) {
        throw new AstroError({
          ...ResponseSentError
        });
      }
      return new Response(null, { status, headers: { Location: path } });
    };
    const rewrite = async (reroutePayload) => {
      return await this.#executeRewrite(reroutePayload);
    };
    const callAction = createCallAction(apiContext);
    return {
      generator: ASTRO_GENERATOR,
      routePattern: this.routeData.route,
      isPrerendered: this.routeData.prerender,
      cookies,
      get session() {
        if (this.isPrerendered) {
          pipeline.logger.warn(
            "session",
            `Astro.session was used when rendering the route ${s.green(this.routePattern)}, but it is not available on prerendered pages. If you need access to sessions, make sure that the page is server-rendered using \`export const prerender = false;\` or by setting \`output\` to \`"server"\` in your Astro config to make all your pages server-rendered by default. For more information, see https://docs.astro.build/en/guides/sessions/`
          );
          return void 0;
        }
        if (!renderContext.session) {
          pipeline.logger.warn(
            "session",
            `Astro.session was used when rendering the route ${s.green(this.routePattern)}, but no storage configuration was provided. Either configure the storage manually or use an adapter that provides session storage. For more information, see https://docs.astro.build/en/guides/sessions/`
          );
          return void 0;
        }
        return renderContext.session;
      },
      get cache() {
        return renderContext.cache;
      },
      get clientAddress() {
        return renderContext.getClientAddress();
      },
      get currentLocale() {
        return renderContext.computeCurrentLocale();
      },
      params,
      get preferredLocale() {
        return renderContext.computePreferredLocale();
      },
      get preferredLocaleList() {
        return renderContext.computePreferredLocaleList();
      },
      locals,
      redirect,
      rewrite,
      request: this.request,
      response,
      site: pipeline.site,
      getActionResult: createGetActionResult(locals),
      get callAction() {
        return callAction;
      },
      url,
      get originPathname() {
        return getOriginPathname(renderContext.request);
      },
      get csp() {
        if (!pipeline.manifest.csp) {
          if (pipeline.runtimeMode === "production") {
            pipeline.logger.warn(
              "csp",
              `Astro.csp was used when rendering the route ${s.green(this.routePattern)}, but CSP was not configured. For more information, see https://docs.astro.build/en/reference/experimental-flags/csp/`
            );
          }
          return void 0;
        }
        return {
          insertDirective(payload) {
            if (renderContext?.result?.directives) {
              renderContext.result.directives = pushDirective(
                renderContext.result.directives,
                payload
              );
            } else {
              renderContext?.result?.directives.push(payload);
            }
          },
          insertScriptResource(resource) {
            renderContext.result?.scriptResources.push(resource);
          },
          insertStyleResource(resource) {
            renderContext.result?.styleResources.push(resource);
          },
          insertStyleHash(hash) {
            renderContext.result?.styleHashes.push(hash);
          },
          insertScriptHash(hash) {
            renderContext.result?.scriptHashes.push(hash);
          }
        };
      }
    };
  }
  getClientAddress() {
    const { pipeline, routeData, clientAddress } = this;
    if (routeData.prerender) {
      throw new AstroError({
        ...PrerenderClientAddressNotAvailable,
        message: PrerenderClientAddressNotAvailable.message(routeData.component)
      });
    }
    if (clientAddress) {
      return clientAddress;
    }
    if (pipeline.adapterName) {
      throw new AstroError({
        ...ClientAddressNotAvailable,
        message: ClientAddressNotAvailable.message(pipeline.adapterName)
      });
    }
    throw new AstroError(StaticClientAddressNotAvailable);
  }
  /**
   * API Context may be created multiple times per request, i18n data needs to be computed only once.
   * So, it is computed and saved here on creation of the first APIContext and reused for later ones.
   */
  #currentLocale;
  computeCurrentLocale() {
    const {
      url,
      pipeline: { i18n },
      routeData
    } = this;
    if (!i18n) return;
    const { defaultLocale, locales, strategy } = i18n;
    const fallbackTo = strategy === "pathname-prefix-other-locales" || strategy === "domains-prefix-other-locales" ? defaultLocale : void 0;
    if (this.#currentLocale) {
      return this.#currentLocale;
    }
    let computedLocale;
    if (isRouteServerIsland(routeData)) {
      let referer = this.request.headers.get("referer");
      if (referer) {
        if (URL.canParse(referer)) {
          referer = new URL(referer).pathname;
        }
        computedLocale = computeCurrentLocale(referer, locales, defaultLocale);
      }
    } else {
      let pathname = routeData.pathname;
      if (!routeData.pattern.test(url.pathname)) {
        for (const fallbackRoute of routeData.fallbackRoutes) {
          if (fallbackRoute.pattern.test(url.pathname)) {
            pathname = fallbackRoute.pathname;
            break;
          }
        }
      }
      pathname = pathname && !isRoute404or500(routeData) ? pathname : url.pathname;
      computedLocale = computeCurrentLocale(pathname, locales, defaultLocale);
    }
    this.#currentLocale = computedLocale ?? fallbackTo;
    return this.#currentLocale;
  }
  #preferredLocale;
  computePreferredLocale() {
    const {
      pipeline: { i18n },
      request
    } = this;
    if (!i18n) return;
    return this.#preferredLocale ??= computePreferredLocale(request, i18n.locales);
  }
  #preferredLocaleList;
  computePreferredLocaleList() {
    const {
      pipeline: { i18n },
      request
    } = this;
    if (!i18n) return;
    return this.#preferredLocaleList ??= computePreferredLocaleList(request, i18n.locales);
  }
}
function redirectTemplate({
  status,
  absoluteLocation,
  relativeLocation,
  from
}) {
  const delay = status === 302 ? 2 : 0;
  return `<!doctype html>
<title>Redirecting to: ${relativeLocation}</title>
<meta http-equiv="refresh" content="${delay};url=${relativeLocation}">
<meta name="robots" content="noindex">
<link rel="canonical" href="${absoluteLocation}">
<body>
	<a href="${relativeLocation}">Redirecting ${from ? `from <code>${from}</code> ` : ""}to <code>${relativeLocation}</code></a>
</body>`;
}
function ensure404Route(manifest2) {
  if (!manifest2.routes.some((route) => route.route === "/404")) {
    manifest2.routes.push(DEFAULT_404_ROUTE);
  }
  return manifest2;
}
class Router {
  #routes;
  #base;
  #baseWithoutTrailingSlash;
  #buildFormat;
  #trailingSlash;
  constructor(routes, options) {
    this.#routes = [...routes].sort(routeComparator);
    this.#base = normalizeBase(options.base);
    this.#baseWithoutTrailingSlash = removeTrailingForwardSlash(this.#base);
    this.#buildFormat = options.buildFormat;
    this.#trailingSlash = options.trailingSlash;
  }
  /**
   * Match an input pathname against the route list.
   * If allowWithoutBase is true, a non-base-prefixed path is still considered.
   */
  match(inputPathname, { allowWithoutBase = false } = {}) {
    const normalized = getRedirectForPathname(inputPathname);
    if (normalized.redirect) {
      return { type: "redirect", location: normalized.redirect, status: 301 };
    }
    if (this.#base !== "/") {
      const baseWithSlash = `${this.#baseWithoutTrailingSlash}/`;
      if (this.#trailingSlash === "always" && (normalized.pathname === this.#baseWithoutTrailingSlash || normalized.pathname === this.#base)) {
        return { type: "redirect", location: baseWithSlash, status: 301 };
      }
      if (this.#trailingSlash === "never" && normalized.pathname === baseWithSlash) {
        return { type: "redirect", location: this.#baseWithoutTrailingSlash, status: 301 };
      }
    }
    const baseResult = stripBase(
      normalized.pathname,
      this.#base,
      this.#baseWithoutTrailingSlash,
      this.#trailingSlash
    );
    if (!baseResult) {
      if (!allowWithoutBase) {
        return { type: "none", reason: "outside-base" };
      }
    }
    let pathname = baseResult ?? normalized.pathname;
    if (this.#buildFormat === "file") {
      pathname = normalizeFileFormatPathname(pathname);
    }
    const route = this.#routes.find((candidate) => {
      if (candidate.pattern.test(pathname)) return true;
      return candidate.fallbackRoutes.some((fallbackRoute) => fallbackRoute.pattern.test(pathname));
    });
    if (!route) {
      return { type: "none", reason: "no-match" };
    }
    const params = getParams(route, pathname);
    return { type: "match", route, params, pathname };
  }
}
function normalizeBase(base) {
  if (!base) return "/";
  if (base === "/") return base;
  return prependForwardSlash(base);
}
function getRedirectForPathname(pathname) {
  let value = prependForwardSlash(pathname);
  if (value.startsWith("//")) {
    const collapsed = `/${value.replace(/^\/+/, "")}`;
    return { pathname: value, redirect: collapsed };
  }
  return { pathname: value };
}
function stripBase(pathname, base, baseWithoutTrailingSlash, trailingSlash) {
  if (base === "/") return pathname;
  const baseWithSlash = `${baseWithoutTrailingSlash}/`;
  if (pathname === baseWithoutTrailingSlash || pathname === base) {
    return trailingSlash === "always" ? null : "/";
  }
  if (pathname === baseWithSlash) {
    return trailingSlash === "never" ? null : "/";
  }
  if (pathname.startsWith(baseWithSlash)) {
    return pathname.slice(baseWithoutTrailingSlash.length);
  }
  return null;
}
function normalizeFileFormatPathname(pathname) {
  if (pathname.endsWith("/index.html")) {
    const trimmed = pathname.slice(0, -"/index.html".length);
    return trimmed === "" ? "/" : trimmed;
  }
  if (pathname.endsWith(".html")) {
    const trimmed = pathname.slice(0, -".html".length);
    return trimmed === "" ? "/" : trimmed;
  }
  return pathname;
}
class BaseApp {
  manifest;
  manifestData;
  pipeline;
  adapterLogger;
  baseWithoutTrailingSlash;
  logger;
  #router;
  constructor(manifest2, streaming = true, ...args) {
    this.manifest = manifest2;
    this.manifestData = { routes: manifest2.routes.map((route) => route.routeData) };
    this.baseWithoutTrailingSlash = removeTrailingForwardSlash(manifest2.base);
    this.pipeline = this.createPipeline(streaming, manifest2, ...args);
    this.logger = new Logger({
      dest: consoleLogDestination,
      level: manifest2.logLevel
    });
    this.adapterLogger = new AstroIntegrationLogger(this.logger.options, manifest2.adapterName);
    ensure404Route(this.manifestData);
    this.#router = this.createRouter(this.manifestData);
  }
  async createRenderContext(payload) {
    return RenderContext.create(payload);
  }
  getAdapterLogger() {
    return this.adapterLogger;
  }
  getAllowedDomains() {
    return this.manifest.allowedDomains;
  }
  matchesAllowedDomains(forwardedHost, protocol) {
    return BaseApp.validateForwardedHost(forwardedHost, this.manifest.allowedDomains, protocol);
  }
  static validateForwardedHost(forwardedHost, allowedDomains, protocol) {
    if (!allowedDomains || allowedDomains.length === 0) {
      return false;
    }
    try {
      const testUrl = new URL(`${protocol || "https"}://${forwardedHost}`);
      return allowedDomains.some((pattern) => {
        return matchPattern(testUrl, pattern);
      });
    } catch {
      return false;
    }
  }
  set setManifestData(newManifestData) {
    this.manifestData = newManifestData;
    this.#router = this.createRouter(this.manifestData);
  }
  removeBase(pathname) {
    pathname = collapseDuplicateLeadingSlashes(pathname);
    if (pathname.startsWith(this.manifest.base)) {
      return pathname.slice(this.baseWithoutTrailingSlash.length + 1);
    }
    return pathname;
  }
  /**
   * It removes the base from the request URL, prepends it with a forward slash and attempts to decoded it.
   *
   * If the decoding fails, it logs the error and return the pathname as is.
   * @param request
   */
  getPathnameFromRequest(request) {
    const url = new URL(request.url);
    const pathname = prependForwardSlash(this.removeBase(url.pathname));
    try {
      return decodeURI(pathname);
    } catch (e2) {
      this.getAdapterLogger().error(e2.toString());
      return pathname;
    }
  }
  /**
   * Given a `Request`, it returns the `RouteData` that matches its `pathname`. By default, prerendered
   * routes aren't returned, even if they are matched.
   *
   * When `allowPrerenderedRoutes` is `true`, the function returns matched prerendered routes too.
   * @param request
   * @param allowPrerenderedRoutes
   */
  match(request, allowPrerenderedRoutes = false) {
    const url = new URL(request.url);
    if (this.manifest.assets.has(url.pathname)) return void 0;
    let pathname = this.computePathnameFromDomain(request);
    if (!pathname) {
      pathname = prependForwardSlash(this.removeBase(url.pathname));
    }
    const match = this.#router.match(decodeURI(pathname), { allowWithoutBase: true });
    if (match.type !== "match") return void 0;
    const routeData = match.route;
    if (allowPrerenderedRoutes) {
      return routeData;
    } else if (routeData.prerender) {
      return void 0;
    }
    return routeData;
  }
  createRouter(manifestData) {
    return new Router(manifestData.routes, {
      base: this.manifest.base,
      trailingSlash: this.manifest.trailingSlash,
      buildFormat: this.manifest.buildFormat
    });
  }
  /**
   * A matching route function to use in the development server.
   * Contrary to the `.match` function, this function resolves props and params, returning the correct
   * route based on the priority, segments. It also returns the correct, resolved pathname.
   * @param pathname
   */
  devMatch(pathname) {
    return void 0;
  }
  computePathnameFromDomain(request) {
    let pathname = void 0;
    const url = new URL(request.url);
    if (this.manifest.i18n && (this.manifest.i18n.strategy === "domains-prefix-always" || this.manifest.i18n.strategy === "domains-prefix-other-locales" || this.manifest.i18n.strategy === "domains-prefix-always-no-redirect")) {
      let host = request.headers.get("X-Forwarded-Host");
      let protocol = request.headers.get("X-Forwarded-Proto");
      if (protocol) {
        protocol = protocol + ":";
      } else {
        protocol = url.protocol;
      }
      if (!host) {
        host = request.headers.get("Host");
      }
      if (host && protocol) {
        host = host.split(":")[0];
        try {
          let locale;
          const hostAsUrl = new URL(`${protocol}//${host}`);
          for (const [domainKey, localeValue] of Object.entries(
            this.manifest.i18n.domainLookupTable
          )) {
            const domainKeyAsUrl = new URL(domainKey);
            if (hostAsUrl.host === domainKeyAsUrl.host && hostAsUrl.protocol === domainKeyAsUrl.protocol) {
              locale = localeValue;
              break;
            }
          }
          if (locale) {
            pathname = prependForwardSlash(
              joinPaths(normalizeTheLocale(locale), this.removeBase(url.pathname))
            );
            if (url.pathname.endsWith("/")) {
              pathname = appendForwardSlash(pathname);
            }
          }
        } catch (e2) {
          this.logger.error(
            "router",
            `Astro tried to parse ${protocol}//${host} as an URL, but it threw a parsing error. Check the X-Forwarded-Host and X-Forwarded-Proto headers.`
          );
          this.logger.error("router", `Error: ${e2}`);
        }
      }
    }
    return pathname;
  }
  redirectTrailingSlash(pathname) {
    const { trailingSlash } = this.manifest;
    if (pathname === "/" || isInternalPath(pathname)) {
      return pathname;
    }
    const path = collapseDuplicateTrailingSlashes(pathname, trailingSlash !== "never");
    if (path !== pathname) {
      return path;
    }
    if (trailingSlash === "ignore") {
      return pathname;
    }
    if (trailingSlash === "always" && !hasFileExtension(pathname)) {
      return appendForwardSlash(pathname);
    }
    if (trailingSlash === "never") {
      return removeTrailingForwardSlash(pathname);
    }
    return pathname;
  }
  async render(request, {
    addCookieHeader = false,
    clientAddress = Reflect.get(request, clientAddressSymbol),
    locals,
    prerenderedErrorPageFetch = fetch,
    routeData
  } = {}) {
    const timeStart = performance.now();
    const url = new URL(request.url);
    const redirect = this.redirectTrailingSlash(url.pathname);
    if (redirect !== url.pathname) {
      const status = request.method === "GET" ? 301 : 308;
      const response2 = new Response(
        redirectTemplate({
          status,
          relativeLocation: url.pathname,
          absoluteLocation: redirect,
          from: request.url
        }),
        {
          status,
          headers: {
            location: redirect + url.search
          }
        }
      );
      this.#prepareResponse(response2, { addCookieHeader });
      return response2;
    }
    if (routeData) {
      this.logger.debug(
        "router",
        "The adapter " + this.manifest.adapterName + " provided a custom RouteData for ",
        request.url
      );
      this.logger.debug("router", "RouteData");
      this.logger.debug("router", routeData);
    }
    const resolvedRenderOptions = {
      addCookieHeader,
      clientAddress,
      prerenderedErrorPageFetch,
      locals,
      routeData
    };
    if (locals) {
      if (typeof locals !== "object") {
        const error2 = new AstroError(LocalsNotAnObject);
        this.logger.error(null, error2.stack);
        return this.renderError(request, {
          ...resolvedRenderOptions,
          // If locals are invalid, we don't want to include them when
          // rendering the error page
          locals: void 0,
          status: 500,
          error: error2
        });
      }
    }
    if (!routeData) {
      if (this.isDev()) {
        const result = await this.devMatch(this.getPathnameFromRequest(request));
        if (result) {
          routeData = result.routeData;
        }
      } else {
        routeData = this.match(request);
      }
      this.logger.debug("router", "Astro matched the following route for " + request.url);
      this.logger.debug("router", "RouteData:\n" + routeData);
    }
    if (!routeData) {
      routeData = this.manifestData.routes.find(
        (route) => route.component === "404.astro" || route.component === DEFAULT_404_COMPONENT
      );
    }
    if (!routeData) {
      this.logger.debug("router", "Astro hasn't found routes that match " + request.url);
      this.logger.debug("router", "Here's the available routes:\n", this.manifestData);
      return this.renderError(request, {
        ...resolvedRenderOptions,
        status: 404
      });
    }
    let pathname = this.getPathnameFromRequest(request);
    if (this.isDev()) {
      pathname = pathname.replace(/\/index\.html$/, "/").replace(/\.html$/, "");
    }
    const defaultStatus = this.getDefaultStatusCode(routeData, pathname);
    let response;
    let session;
    let cache;
    try {
      const componentInstance = await this.pipeline.getComponentByRoute(routeData);
      const renderContext = await this.createRenderContext({
        pipeline: this.pipeline,
        locals,
        pathname,
        request,
        routeData,
        status: defaultStatus,
        clientAddress
      });
      session = renderContext.session;
      cache = renderContext.cache;
      if (this.pipeline.cacheProvider) {
        const cacheProvider = await this.pipeline.getCacheProvider();
        if (cacheProvider?.onRequest) {
          response = await cacheProvider.onRequest(
            {
              request,
              url: new URL(request.url)
            },
            async () => {
              const res = await renderContext.render(componentInstance);
              applyCacheHeaders(cache, res);
              return res;
            }
          );
          response.headers.delete("CDN-Cache-Control");
          response.headers.delete("Cache-Tag");
        } else {
          response = await renderContext.render(componentInstance);
          applyCacheHeaders(cache, response);
        }
      } else {
        response = await renderContext.render(componentInstance);
      }
      const isRewrite = response.headers.has(REWRITE_DIRECTIVE_HEADER_KEY);
      this.logThisRequest({
        pathname,
        method: request.method,
        statusCode: response.status,
        isRewrite,
        timeStart
      });
    } catch (err) {
      this.logger.error(null, err.stack || err.message || String(err));
      return this.renderError(request, {
        ...resolvedRenderOptions,
        status: 500,
        error: err
      });
    } finally {
      await session?.[PERSIST_SYMBOL]();
    }
    if (REROUTABLE_STATUS_CODES.includes(response.status) && // If the body isn't null, that means the user sets the 404 status
    // but uses the current route to handle the 404
    response.body === null && response.headers.get(REROUTE_DIRECTIVE_HEADER) !== "no") {
      return this.renderError(request, {
        ...resolvedRenderOptions,
        response,
        status: response.status,
        // We don't have an error to report here. Passing null means we pass nothing intentionally
        // while undefined means there's no error
        error: response.status === 500 ? null : void 0
      });
    }
    this.#prepareResponse(response, { addCookieHeader });
    return response;
  }
  #prepareResponse(response, { addCookieHeader }) {
    for (const headerName of [
      REROUTE_DIRECTIVE_HEADER,
      REWRITE_DIRECTIVE_HEADER_KEY,
      NOOP_MIDDLEWARE_HEADER,
      ROUTE_TYPE_HEADER
    ]) {
      if (response.headers.has(headerName)) {
        response.headers.delete(headerName);
      }
    }
    if (addCookieHeader) {
      for (const setCookieHeaderValue of getSetCookiesFromResponse(response)) {
        response.headers.append("set-cookie", setCookieHeaderValue);
      }
    }
    Reflect.set(response, responseSentSymbol$1, true);
  }
  setCookieHeaders(response) {
    return getSetCookiesFromResponse(response);
  }
  /**
   * Reads all the cookies written by `Astro.cookie.set()` onto the passed response.
   * For example,
   * ```ts
   * for (const cookie_ of App.getSetCookieFromResponse(response)) {
   *     const cookie: string = cookie_
   * }
   * ```
   * @param response The response to read cookies from.
   * @returns An iterator that yields key-value pairs as equal-sign-separated strings.
   */
  static getSetCookieFromResponse = getSetCookiesFromResponse;
  /**
   * If it is a known error code, try sending the according page (e.g. 404.astro / 500.astro).
   * This also handles pre-rendered /404 or /500 routes
   */
  async renderError(request, {
    status,
    response: originalResponse,
    skipMiddleware = false,
    error: error2,
    ...resolvedRenderOptions
  }) {
    const errorRoutePath = `/${status}${this.manifest.trailingSlash === "always" ? "/" : ""}`;
    const errorRouteData = matchRoute(errorRoutePath, this.manifestData);
    const url = new URL(request.url);
    if (errorRouteData) {
      if (errorRouteData.prerender) {
        const maybeDotHtml = errorRouteData.route.endsWith(`/${status}`) ? ".html" : "";
        const statusURL = new URL(`${this.baseWithoutTrailingSlash}/${status}${maybeDotHtml}`, url);
        if (statusURL.toString() !== request.url && resolvedRenderOptions.prerenderedErrorPageFetch) {
          const response2 = await resolvedRenderOptions.prerenderedErrorPageFetch(
            statusURL.toString()
          );
          const override = { status, removeContentEncodingHeaders: true };
          const newResponse = this.mergeResponses(response2, originalResponse, override);
          this.#prepareResponse(newResponse, resolvedRenderOptions);
          return newResponse;
        }
      }
      const mod = await this.pipeline.getComponentByRoute(errorRouteData);
      let session;
      try {
        const renderContext = await this.createRenderContext({
          locals: resolvedRenderOptions.locals,
          pipeline: this.pipeline,
          skipMiddleware,
          pathname: this.getPathnameFromRequest(request),
          request,
          routeData: errorRouteData,
          status,
          props: { error: error2 },
          clientAddress: resolvedRenderOptions.clientAddress
        });
        session = renderContext.session;
        const response2 = await renderContext.render(mod);
        const newResponse = this.mergeResponses(response2, originalResponse);
        this.#prepareResponse(newResponse, resolvedRenderOptions);
        return newResponse;
      } catch {
        if (skipMiddleware === false) {
          return this.renderError(request, {
            ...resolvedRenderOptions,
            status,
            response: originalResponse,
            skipMiddleware: true
          });
        }
      } finally {
        await session?.[PERSIST_SYMBOL]();
      }
    }
    const response = this.mergeResponses(new Response(null, { status }), originalResponse);
    this.#prepareResponse(response, resolvedRenderOptions);
    return response;
  }
  mergeResponses(newResponse, originalResponse, override) {
    let newResponseHeaders = newResponse.headers;
    if (override?.removeContentEncodingHeaders) {
      newResponseHeaders = new Headers(newResponseHeaders);
      newResponseHeaders.delete("Content-Encoding");
      newResponseHeaders.delete("Content-Length");
    }
    if (!originalResponse) {
      if (override !== void 0) {
        return new Response(newResponse.body, {
          status: override.status,
          statusText: newResponse.statusText,
          headers: newResponseHeaders
        });
      }
      return newResponse;
    }
    const status = override?.status ? override.status : originalResponse.status === 200 ? newResponse.status : originalResponse.status;
    try {
      originalResponse.headers.delete("Content-type");
      originalResponse.headers.delete("Content-Length");
      originalResponse.headers.delete("Transfer-Encoding");
    } catch {
    }
    const newHeaders = new Headers();
    const seen = /* @__PURE__ */ new Set();
    for (const [name, value] of originalResponse.headers) {
      newHeaders.append(name, value);
      seen.add(name.toLowerCase());
    }
    for (const [name, value] of newResponseHeaders) {
      if (!seen.has(name.toLowerCase())) {
        newHeaders.append(name, value);
      }
    }
    const mergedResponse = new Response(newResponse.body, {
      status,
      statusText: status === 200 ? newResponse.statusText : originalResponse.statusText,
      // If you're looking at here for possible bugs, it means that it's not a bug.
      // With the middleware, users can meddle with headers, and we should pass to the 404/500.
      // If users see something weird, it's because they are setting some headers they should not.
      //
      // Although, we don't want it to replace the content-type, because the error page must return `text/html`
      headers: newHeaders
    });
    const originalCookies = getCookiesFromResponse(originalResponse);
    const newCookies = getCookiesFromResponse(newResponse);
    if (originalCookies) {
      if (newCookies) {
        for (const cookieValue of AstroCookies.consume(newCookies)) {
          originalResponse.headers.append("set-cookie", cookieValue);
        }
      }
      attachCookiesToResponse(mergedResponse, originalCookies);
    } else if (newCookies) {
      attachCookiesToResponse(mergedResponse, newCookies);
    }
    return mergedResponse;
  }
  getDefaultStatusCode(routeData, pathname) {
    if (!routeData.pattern.test(pathname)) {
      for (const fallbackRoute of routeData.fallbackRoutes) {
        if (fallbackRoute.pattern.test(pathname)) {
          return 302;
        }
      }
    }
    const route = removeTrailingForwardSlash(routeData.route);
    if (route.endsWith("/404")) return 404;
    if (route.endsWith("/500")) return 500;
    return 200;
  }
  getManifest() {
    return this.pipeline.manifest;
  }
  logThisRequest({
    pathname,
    method,
    statusCode,
    isRewrite,
    timeStart
  }) {
    const timeEnd = performance.now();
    this.logRequest({
      pathname,
      method,
      statusCode,
      isRewrite,
      reqTime: timeEnd - timeStart
    });
  }
}
function getAssetsPrefix(fileExtension2, assetsPrefix) {
  let prefix = "";
  if (!assetsPrefix) {
    prefix = "";
  } else if (typeof assetsPrefix === "string") {
    prefix = assetsPrefix;
  } else {
    const dotLessFileExtension = fileExtension2.slice(1);
    prefix = assetsPrefix[dotLessFileExtension] || assetsPrefix.fallback;
  }
  return prefix;
}
function createAssetLink(href, base, assetsPrefix, queryParams) {
  let url = "";
  if (assetsPrefix) {
    const pf = getAssetsPrefix(fileExtension(href), assetsPrefix);
    url = joinPaths(pf, slash(href));
  } else if (base) {
    url = prependForwardSlash(joinPaths(base, slash(href)));
  } else {
    url = href;
  }
  return url;
}
function createStylesheetElement(stylesheet, base, assetsPrefix, queryParams) {
  if (stylesheet.type === "inline") {
    return {
      props: {},
      children: stylesheet.content
    };
  } else {
    return {
      props: {
        rel: "stylesheet",
        href: createAssetLink(stylesheet.src, base, assetsPrefix)
      },
      children: ""
    };
  }
}
function createStylesheetElementSet(stylesheets, base, assetsPrefix, queryParams) {
  return new Set(
    stylesheets.map((s2) => createStylesheetElement(s2, base, assetsPrefix))
  );
}
function createModuleScriptElement(script, base, assetsPrefix, queryParams) {
  if (script.type === "external") {
    return createModuleScriptElementWithSrc(script.value, base, assetsPrefix);
  } else {
    return {
      props: {
        type: "module"
      },
      children: script.value
    };
  }
}
function createModuleScriptElementWithSrc(src, base, assetsPrefix, queryParams) {
  return {
    props: {
      type: "module",
      src: createAssetLink(src, base, assetsPrefix)
    },
    children: ""
  };
}
function createConsoleLogger(level) {
  return new Logger({
    dest: consoleLogDestination,
    level: level ?? "info"
  });
}
class AppPipeline extends Pipeline {
  getName() {
    return "AppPipeline";
  }
  static create({ manifest: manifest2, streaming }) {
    const resolve = async function resolve2(specifier) {
      if (!(specifier in manifest2.entryModules)) {
        throw new Error(`Unable to resolve [${specifier}]`);
      }
      const bundlePath = manifest2.entryModules[specifier];
      if (bundlePath.startsWith("data:") || bundlePath.length === 0) {
        return bundlePath;
      } else {
        return createAssetLink(bundlePath, manifest2.base, manifest2.assetsPrefix);
      }
    };
    const logger = createConsoleLogger(manifest2.logLevel);
    const pipeline = new AppPipeline(
      logger,
      manifest2,
      "production",
      manifest2.renderers,
      resolve,
      streaming,
      void 0,
      void 0,
      void 0,
      void 0,
      void 0,
      void 0,
      void 0,
      void 0
    );
    return pipeline;
  }
  async headElements(routeData) {
    const { assetsPrefix, base } = this.manifest;
    const routeInfo = this.manifest.routes.find(
      (route) => route.routeData.route === routeData.route
    );
    const links = /* @__PURE__ */ new Set();
    const scripts = /* @__PURE__ */ new Set();
    const styles = createStylesheetElementSet(routeInfo?.styles ?? [], base, assetsPrefix);
    for (const script of routeInfo?.scripts ?? []) {
      if ("stage" in script) {
        if (script.stage === "head-inline") {
          scripts.add({
            props: {},
            children: script.children
          });
        }
      } else {
        scripts.add(createModuleScriptElement(script, base, assetsPrefix));
      }
    }
    return { links, styles, scripts };
  }
  componentMetadata() {
  }
  async getComponentByRoute(routeData) {
    const module = await this.getModuleForRoute(routeData);
    return module.page();
  }
  async getModuleForRoute(route) {
    for (const defaultRoute of this.defaultRoutes) {
      if (route.component === defaultRoute.component) {
        return {
          page: () => Promise.resolve(defaultRoute.instance)
        };
      }
    }
    let routeToProcess = route;
    if (routeIsRedirect(route)) {
      if (route.redirectRoute) {
        routeToProcess = route.redirectRoute;
      } else {
        return RedirectSinglePageBuiltModule;
      }
    } else if (routeIsFallback(route)) {
      routeToProcess = getFallbackRoute(route, this.manifest.routes);
    }
    if (this.manifest.pageMap) {
      const importComponentInstance = this.manifest.pageMap.get(routeToProcess.component);
      if (!importComponentInstance) {
        throw new Error(
          `Unexpectedly unable to find a component instance for route ${route.route}`
        );
      }
      return await importComponentInstance();
    } else if (this.manifest.pageModule) {
      return this.manifest.pageModule;
    }
    throw new Error(
      "Astro couldn't find the correct page to render, probably because it wasn't correctly mapped for SSR usage. This is an internal error, please file an issue."
    );
  }
  async tryRewrite(payload, request) {
    const { newUrl, pathname, routeData } = findRouteToRewrite({
      payload,
      request,
      routes: this.manifest?.routes.map((r2) => r2.routeData),
      trailingSlash: this.manifest.trailingSlash,
      buildFormat: this.manifest.buildFormat,
      base: this.manifest.base,
      outDir: this.manifest?.serverLike ? this.manifest.buildClientDir : this.manifest.outDir
    });
    const componentInstance = await this.getComponentByRoute(routeData);
    return { newUrl, pathname, componentInstance, routeData };
  }
}
class App extends BaseApp {
  createPipeline(streaming) {
    return AppPipeline.create({
      manifest: this.manifest,
      streaming
    });
  }
  isDev() {
    return false;
  }
  // Should we log something for our users?
  logRequest(_options) {
  }
}
const renderers = [];
const serializedData = [{ "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "type": "page", "component": "_server-islands.astro", "params": ["name"], "segments": [[{ "content": "_server-islands", "dynamic": false, "spread": false }], [{ "content": "name", "dynamic": true, "spread": false }]], "pattern": "^\\/_server-islands\\/([^/]+?)\\/$", "prerender": false, "isIndex": false, "fallbackRoutes": [], "route": "/_server-islands/[name]", "origin": "internal", "distURL": [], "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/_image", "component": "node_modules/astro/dist/assets/endpoint/generic.js", "params": [], "pathname": "/_image", "pattern": "^\\/_image\\/$", "segments": [[{ "content": "_image", "dynamic": false, "spread": false }]], "type": "endpoint", "prerender": false, "fallbackRoutes": [], "distURL": [], "isIndex": false, "origin": "internal", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/contacto", "isIndex": false, "type": "page", "pattern": "^\\/contacto\\/$", "segments": [[{ "content": "contacto", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/contacto.astro", "pathname": "/contacto", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/finanzas/aguinaldo", "isIndex": false, "type": "page", "pattern": "^\\/finanzas\\/aguinaldo\\/$", "segments": [[{ "content": "finanzas", "dynamic": false, "spread": false }], [{ "content": "aguinaldo", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/finanzas/aguinaldo.astro", "pathname": "/finanzas/aguinaldo", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/finanzas/ahorro-jubilacion", "isIndex": false, "type": "page", "pattern": "^\\/finanzas\\/ahorro-jubilacion\\/$", "segments": [[{ "content": "finanzas", "dynamic": false, "spread": false }], [{ "content": "ahorro-jubilacion", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/finanzas/ahorro-jubilacion.astro", "pathname": "/finanzas/ahorro-jubilacion", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/finanzas/amortizacion-prestamo", "isIndex": false, "type": "page", "pattern": "^\\/finanzas\\/amortizacion-prestamo\\/$", "segments": [[{ "content": "finanzas", "dynamic": false, "spread": false }], [{ "content": "amortizacion-prestamo", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/finanzas/amortizacion-prestamo.astro", "pathname": "/finanzas/amortizacion-prestamo", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/finanzas/calculadora-dividendos", "isIndex": false, "type": "page", "pattern": "^\\/finanzas\\/calculadora-dividendos\\/$", "segments": [[{ "content": "finanzas", "dynamic": false, "spread": false }], [{ "content": "calculadora-dividendos", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/finanzas/calculadora-dividendos.astro", "pathname": "/finanzas/calculadora-dividendos", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/finanzas/comprar-vs-alquilar", "isIndex": false, "type": "page", "pattern": "^\\/finanzas\\/comprar-vs-alquilar\\/$", "segments": [[{ "content": "finanzas", "dynamic": false, "spread": false }], [{ "content": "comprar-vs-alquilar", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/finanzas/comprar-vs-alquilar.astro", "pathname": "/finanzas/comprar-vs-alquilar", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/finanzas/costo-auto", "isIndex": false, "type": "page", "pattern": "^\\/finanzas\\/costo-auto\\/$", "segments": [[{ "content": "finanzas", "dynamic": false, "spread": false }], [{ "content": "costo-auto", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/finanzas/costo-auto.astro", "pathname": "/finanzas/costo-auto", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/finanzas/cuota-maxima", "isIndex": false, "type": "page", "pattern": "^\\/finanzas\\/cuota-maxima\\/$", "segments": [[{ "content": "finanzas", "dynamic": false, "spread": false }], [{ "content": "cuota-maxima", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/finanzas/cuota-maxima.astro", "pathname": "/finanzas/cuota-maxima", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/finanzas/cuotas", "isIndex": false, "type": "page", "pattern": "^\\/finanzas\\/cuotas\\/$", "segments": [[{ "content": "finanzas", "dynamic": false, "spread": false }], [{ "content": "cuotas", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/finanzas/cuotas.astro", "pathname": "/finanzas/cuotas", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/finanzas/dolar-tarjeta", "isIndex": false, "type": "page", "pattern": "^\\/finanzas\\/dolar-tarjeta\\/$", "segments": [[{ "content": "finanzas", "dynamic": false, "spread": false }], [{ "content": "dolar-tarjeta", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/finanzas/dolar-tarjeta.astro", "pathname": "/finanzas/dolar-tarjeta", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/finanzas/ganancias", "isIndex": false, "type": "page", "pattern": "^\\/finanzas\\/ganancias\\/$", "segments": [[{ "content": "finanzas", "dynamic": false, "spread": false }], [{ "content": "ganancias", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/finanzas/ganancias.astro", "pathname": "/finanzas/ganancias", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/finanzas/indemnizacion", "isIndex": false, "type": "page", "pattern": "^\\/finanzas\\/indemnizacion\\/$", "segments": [[{ "content": "finanzas", "dynamic": false, "spread": false }], [{ "content": "indemnizacion", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/finanzas/indemnizacion.astro", "pathname": "/finanzas/indemnizacion", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/finanzas/inflacion", "isIndex": false, "type": "page", "pattern": "^\\/finanzas\\/inflacion\\/$", "segments": [[{ "content": "finanzas", "dynamic": false, "spread": false }], [{ "content": "inflacion", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/finanzas/inflacion.astro", "pathname": "/finanzas/inflacion", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/finanzas/inflacion-acumulada", "isIndex": false, "type": "page", "pattern": "^\\/finanzas\\/inflacion-acumulada\\/$", "segments": [[{ "content": "finanzas", "dynamic": false, "spread": false }], [{ "content": "inflacion-acumulada", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/finanzas/inflacion-acumulada.astro", "pathname": "/finanzas/inflacion-acumulada", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/finanzas/interes-compuesto", "isIndex": false, "type": "page", "pattern": "^\\/finanzas\\/interes-compuesto\\/$", "segments": [[{ "content": "finanzas", "dynamic": false, "spread": false }], [{ "content": "interes-compuesto", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/finanzas/interes-compuesto.astro", "pathname": "/finanzas/interes-compuesto", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/finanzas/interes-mora", "isIndex": false, "type": "page", "pattern": "^\\/finanzas\\/interes-mora\\/$", "segments": [[{ "content": "finanzas", "dynamic": false, "spread": false }], [{ "content": "interes-mora", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/finanzas/interes-mora.astro", "pathname": "/finanzas/interes-mora", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/finanzas/interes-simple", "isIndex": false, "type": "page", "pattern": "^\\/finanzas\\/interes-simple\\/$", "segments": [[{ "content": "finanzas", "dynamic": false, "spread": false }], [{ "content": "interes-simple", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/finanzas/interes-simple.astro", "pathname": "/finanzas/interes-simple", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/finanzas/iva", "isIndex": false, "type": "page", "pattern": "^\\/finanzas\\/iva\\/$", "segments": [[{ "content": "finanzas", "dynamic": false, "spread": false }], [{ "content": "iva", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/finanzas/iva.astro", "pathname": "/finanzas/iva", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/finanzas/meta-ahorro", "isIndex": false, "type": "page", "pattern": "^\\/finanzas\\/meta-ahorro\\/$", "segments": [[{ "content": "finanzas", "dynamic": false, "spread": false }], [{ "content": "meta-ahorro", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/finanzas/meta-ahorro.astro", "pathname": "/finanzas/meta-ahorro", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/finanzas/perdida-poder-adquisitivo", "isIndex": false, "type": "page", "pattern": "^\\/finanzas\\/perdida-poder-adquisitivo\\/$", "segments": [[{ "content": "finanzas", "dynamic": false, "spread": false }], [{ "content": "perdida-poder-adquisitivo", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/finanzas/perdida-poder-adquisitivo.astro", "pathname": "/finanzas/perdida-poder-adquisitivo", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/finanzas/plazo-fijo", "isIndex": false, "type": "page", "pattern": "^\\/finanzas\\/plazo-fijo\\/$", "segments": [[{ "content": "finanzas", "dynamic": false, "spread": false }], [{ "content": "plazo-fijo", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/finanzas/plazo-fijo.astro", "pathname": "/finanzas/plazo-fijo", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/finanzas/porcentaje", "isIndex": false, "type": "page", "pattern": "^\\/finanzas\\/porcentaje\\/$", "segments": [[{ "content": "finanzas", "dynamic": false, "spread": false }], [{ "content": "porcentaje", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/finanzas/porcentaje.astro", "pathname": "/finanzas/porcentaje", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/finanzas/prestamo", "isIndex": false, "type": "page", "pattern": "^\\/finanzas\\/prestamo\\/$", "segments": [[{ "content": "finanzas", "dynamic": false, "spread": false }], [{ "content": "prestamo", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/finanzas/prestamo.astro", "pathname": "/finanzas/prestamo", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/finanzas/regla-50-30-20", "isIndex": false, "type": "page", "pattern": "^\\/finanzas\\/regla-50-30-20\\/$", "segments": [[{ "content": "finanzas", "dynamic": false, "spread": false }], [{ "content": "regla-50-30-20", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/finanzas/regla-50-30-20.astro", "pathname": "/finanzas/regla-50-30-20", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/finanzas/regla-del-72", "isIndex": false, "type": "page", "pattern": "^\\/finanzas\\/regla-del-72\\/$", "segments": [[{ "content": "finanzas", "dynamic": false, "spread": false }], [{ "content": "regla-del-72", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/finanzas/regla-del-72.astro", "pathname": "/finanzas/regla-del-72", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/finanzas/rendimiento-inversion", "isIndex": false, "type": "page", "pattern": "^\\/finanzas\\/rendimiento-inversion\\/$", "segments": [[{ "content": "finanzas", "dynamic": false, "spread": false }], [{ "content": "rendimiento-inversion", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/finanzas/rendimiento-inversion.astro", "pathname": "/finanzas/rendimiento-inversion", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/finanzas/retiro-fire", "isIndex": false, "type": "page", "pattern": "^\\/finanzas\\/retiro-fire\\/$", "segments": [[{ "content": "finanzas", "dynamic": false, "spread": false }], [{ "content": "retiro-fire", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/finanzas/retiro-fire.astro", "pathname": "/finanzas/retiro-fire", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/finanzas/tasa-de-retorno", "isIndex": false, "type": "page", "pattern": "^\\/finanzas\\/tasa-de-retorno\\/$", "segments": [[{ "content": "finanzas", "dynamic": false, "spread": false }], [{ "content": "tasa-de-retorno", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/finanzas/tasa-de-retorno.astro", "pathname": "/finanzas/tasa-de-retorno", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/finanzas/tasas-tna-tea", "isIndex": false, "type": "page", "pattern": "^\\/finanzas\\/tasas-tna-tea\\/$", "segments": [[{ "content": "finanzas", "dynamic": false, "spread": false }], [{ "content": "tasas-tna-tea", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/finanzas/tasas-tna-tea.astro", "pathname": "/finanzas/tasas-tna-tea", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/finanzas/vacaciones", "isIndex": false, "type": "page", "pattern": "^\\/finanzas\\/vacaciones\\/$", "segments": [[{ "content": "finanzas", "dynamic": false, "spread": false }], [{ "content": "vacaciones", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/finanzas/vacaciones.astro", "pathname": "/finanzas/vacaciones", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/finanzas/valor-futuro", "isIndex": false, "type": "page", "pattern": "^\\/finanzas\\/valor-futuro\\/$", "segments": [[{ "content": "finanzas", "dynamic": false, "spread": false }], [{ "content": "valor-futuro", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/finanzas/valor-futuro.astro", "pathname": "/finanzas/valor-futuro", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/finanzas/valor-presente", "isIndex": false, "type": "page", "pattern": "^\\/finanzas\\/valor-presente\\/$", "segments": [[{ "content": "finanzas", "dynamic": false, "spread": false }], [{ "content": "valor-presente", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/finanzas/valor-presente.astro", "pathname": "/finanzas/valor-presente", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/hogar/aire-acondicionado", "isIndex": false, "type": "page", "pattern": "^\\/hogar\\/aire-acondicionado\\/$", "segments": [[{ "content": "hogar", "dynamic": false, "spread": false }], [{ "content": "aire-acondicionado", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/hogar/aire-acondicionado.astro", "pathname": "/hogar/aire-acondicionado", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/hogar/consumo-electrico", "isIndex": false, "type": "page", "pattern": "^\\/hogar\\/consumo-electrico\\/$", "segments": [[{ "content": "hogar", "dynamic": false, "spread": false }], [{ "content": "consumo-electrico", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/hogar/consumo-electrico.astro", "pathname": "/hogar/consumo-electrico", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/hogar/hormigon", "isIndex": false, "type": "page", "pattern": "^\\/hogar\\/hormigon\\/$", "segments": [[{ "content": "hogar", "dynamic": false, "spread": false }], [{ "content": "hormigon", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/hogar/hormigon.astro", "pathname": "/hogar/hormigon", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/hogar/ladrillos", "isIndex": false, "type": "page", "pattern": "^\\/hogar\\/ladrillos\\/$", "segments": [[{ "content": "hogar", "dynamic": false, "spread": false }], [{ "content": "ladrillos", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/hogar/ladrillos.astro", "pathname": "/hogar/ladrillos", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/hogar/luz", "isIndex": false, "type": "page", "pattern": "^\\/hogar\\/luz\\/$", "segments": [[{ "content": "hogar", "dynamic": false, "spread": false }], [{ "content": "luz", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/hogar/luz.astro", "pathname": "/hogar/luz", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/hogar/metros-cuadrados", "isIndex": false, "type": "page", "pattern": "^\\/hogar\\/metros-cuadrados\\/$", "segments": [[{ "content": "hogar", "dynamic": false, "spread": false }], [{ "content": "metros-cuadrados", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/hogar/metros-cuadrados.astro", "pathname": "/hogar/metros-cuadrados", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/hogar/pintura", "isIndex": false, "type": "page", "pattern": "^\\/hogar\\/pintura\\/$", "segments": [[{ "content": "hogar", "dynamic": false, "spread": false }], [{ "content": "pintura", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/hogar/pintura.astro", "pathname": "/hogar/pintura", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/matematica/areas", "isIndex": false, "type": "page", "pattern": "^\\/matematica\\/areas\\/$", "segments": [[{ "content": "matematica", "dynamic": false, "spread": false }], [{ "content": "areas", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/matematica/areas.astro", "pathname": "/matematica/areas", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/matematica/calculadora-binomial", "isIndex": false, "type": "page", "pattern": "^\\/matematica\\/calculadora-binomial\\/$", "segments": [[{ "content": "matematica", "dynamic": false, "spread": false }], [{ "content": "calculadora-binomial", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/matematica/calculadora-binomial.astro", "pathname": "/matematica/calculadora-binomial", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/matematica/calculadora-combinatoria", "isIndex": false, "type": "page", "pattern": "^\\/matematica\\/calculadora-combinatoria\\/$", "segments": [[{ "content": "matematica", "dynamic": false, "spread": false }], [{ "content": "calculadora-combinatoria", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/matematica/calculadora-combinatoria.astro", "pathname": "/matematica/calculadora-combinatoria", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/matematica/calculadora-de-angulos", "isIndex": false, "type": "page", "pattern": "^\\/matematica\\/calculadora-de-angulos\\/$", "segments": [[{ "content": "matematica", "dynamic": false, "spread": false }], [{ "content": "calculadora-de-angulos", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/matematica/calculadora-de-angulos.astro", "pathname": "/matematica/calculadora-de-angulos", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/matematica/calculadora-de-volumenes", "isIndex": false, "type": "page", "pattern": "^\\/matematica\\/calculadora-de-volumenes\\/$", "segments": [[{ "content": "matematica", "dynamic": false, "spread": false }], [{ "content": "calculadora-de-volumenes", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/matematica/calculadora-de-volumenes.astro", "pathname": "/matematica/calculadora-de-volumenes", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/matematica/calculadora-divisores", "isIndex": false, "type": "page", "pattern": "^\\/matematica\\/calculadora-divisores\\/$", "segments": [[{ "content": "matematica", "dynamic": false, "spread": false }], [{ "content": "calculadora-divisores", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/matematica/calculadora-divisores.astro", "pathname": "/matematica/calculadora-divisores", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/matematica/calculadora-matrices", "isIndex": false, "type": "page", "pattern": "^\\/matematica\\/calculadora-matrices\\/$", "segments": [[{ "content": "matematica", "dynamic": false, "spread": false }], [{ "content": "calculadora-matrices", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/matematica/calculadora-matrices.astro", "pathname": "/matematica/calculadora-matrices", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/matematica/calculadora-numeros-primos", "isIndex": false, "type": "page", "pattern": "^\\/matematica\\/calculadora-numeros-primos\\/$", "segments": [[{ "content": "matematica", "dynamic": false, "spread": false }], [{ "content": "calculadora-numeros-primos", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/matematica/calculadora-numeros-primos.astro", "pathname": "/matematica/calculadora-numeros-primos", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/matematica/calculadora-percentil", "isIndex": false, "type": "page", "pattern": "^\\/matematica\\/calculadora-percentil\\/$", "segments": [[{ "content": "matematica", "dynamic": false, "spread": false }], [{ "content": "calculadora-percentil", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/matematica/calculadora-percentil.astro", "pathname": "/matematica/calculadora-percentil", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/matematica/calculadora-porcentil", "isIndex": false, "type": "page", "pattern": "^\\/matematica\\/calculadora-porcentil\\/$", "segments": [[{ "content": "matematica", "dynamic": false, "spread": false }], [{ "content": "calculadora-porcentil", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/matematica/calculadora-porcentil.astro", "pathname": "/matematica/calculadora-porcentil", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/matematica/calculadora-potencia", "isIndex": false, "type": "page", "pattern": "^\\/matematica\\/calculadora-potencia\\/$", "segments": [[{ "content": "matematica", "dynamic": false, "spread": false }], [{ "content": "calculadora-potencia", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/matematica/calculadora-potencia.astro", "pathname": "/matematica/calculadora-potencia", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/matematica/calculadora-probabilidad", "isIndex": false, "type": "page", "pattern": "^\\/matematica\\/calculadora-probabilidad\\/$", "segments": [[{ "content": "matematica", "dynamic": false, "spread": false }], [{ "content": "calculadora-probabilidad", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/matematica/calculadora-probabilidad.astro", "pathname": "/matematica/calculadora-probabilidad", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/matematica/calculadora-proporcion", "isIndex": false, "type": "page", "pattern": "^\\/matematica\\/calculadora-proporcion\\/$", "segments": [[{ "content": "matematica", "dynamic": false, "spread": false }], [{ "content": "calculadora-proporcion", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/matematica/calculadora-proporcion.astro", "pathname": "/matematica/calculadora-proporcion", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/matematica/calculadora-raiz-cuadrada", "isIndex": false, "type": "page", "pattern": "^\\/matematica\\/calculadora-raiz-cuadrada\\/$", "segments": [[{ "content": "matematica", "dynamic": false, "spread": false }], [{ "content": "calculadora-raiz-cuadrada", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/matematica/calculadora-raiz-cuadrada.astro", "pathname": "/matematica/calculadora-raiz-cuadrada", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/matematica/calculadora-raiz-cubica", "isIndex": false, "type": "page", "pattern": "^\\/matematica\\/calculadora-raiz-cubica\\/$", "segments": [[{ "content": "matematica", "dynamic": false, "spread": false }], [{ "content": "calculadora-raiz-cubica", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/matematica/calculadora-raiz-cubica.astro", "pathname": "/matematica/calculadora-raiz-cubica", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/matematica/circulo", "isIndex": false, "type": "page", "pattern": "^\\/matematica\\/circulo\\/$", "segments": [[{ "content": "matematica", "dynamic": false, "spread": false }], [{ "content": "circulo", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/matematica/circulo.astro", "pathname": "/matematica/circulo", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/matematica/combinaciones-permutaciones", "isIndex": false, "type": "page", "pattern": "^\\/matematica\\/combinaciones-permutaciones\\/$", "segments": [[{ "content": "matematica", "dynamic": false, "spread": false }], [{ "content": "combinaciones-permutaciones", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/matematica/combinaciones-permutaciones.astro", "pathname": "/matematica/combinaciones-permutaciones", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/matematica/conversor-bases", "isIndex": false, "type": "page", "pattern": "^\\/matematica\\/conversor-bases\\/$", "segments": [[{ "content": "matematica", "dynamic": false, "spread": false }], [{ "content": "conversor-bases", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/matematica/conversor-bases.astro", "pathname": "/matematica/conversor-bases", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/matematica/decimal-a-fraccion", "isIndex": false, "type": "page", "pattern": "^\\/matematica\\/decimal-a-fraccion\\/$", "segments": [[{ "content": "matematica", "dynamic": false, "spread": false }], [{ "content": "decimal-a-fraccion", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/matematica/decimal-a-fraccion.astro", "pathname": "/matematica/decimal-a-fraccion", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/matematica/decremento-porcentual", "isIndex": false, "type": "page", "pattern": "^\\/matematica\\/decremento-porcentual\\/$", "segments": [[{ "content": "matematica", "dynamic": false, "spread": false }], [{ "content": "decremento-porcentual", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/matematica/decremento-porcentual.astro", "pathname": "/matematica/decremento-porcentual", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/matematica/desviacion-media", "isIndex": false, "type": "page", "pattern": "^\\/matematica\\/desviacion-media\\/$", "segments": [[{ "content": "matematica", "dynamic": false, "spread": false }], [{ "content": "desviacion-media", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/matematica/desviacion-media.astro", "pathname": "/matematica/desviacion-media", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/matematica/ecuaciones-segundo-grado", "isIndex": false, "type": "page", "pattern": "^\\/matematica\\/ecuaciones-segundo-grado\\/$", "segments": [[{ "content": "matematica", "dynamic": false, "spread": false }], [{ "content": "ecuaciones-segundo-grado", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/matematica/ecuaciones-segundo-grado.astro", "pathname": "/matematica/ecuaciones-segundo-grado", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/matematica/factorial", "isIndex": false, "type": "page", "pattern": "^\\/matematica\\/factorial\\/$", "segments": [[{ "content": "matematica", "dynamic": false, "spread": false }], [{ "content": "factorial", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/matematica/factorial.astro", "pathname": "/matematica/factorial", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/matematica/fraccion-a-decimal", "isIndex": false, "type": "page", "pattern": "^\\/matematica\\/fraccion-a-decimal\\/$", "segments": [[{ "content": "matematica", "dynamic": false, "spread": false }], [{ "content": "fraccion-a-decimal", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/matematica/fraccion-a-decimal.astro", "pathname": "/matematica/fraccion-a-decimal", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/matematica/incremento-porcentual", "isIndex": false, "type": "page", "pattern": "^\\/matematica\\/incremento-porcentual\\/$", "segments": [[{ "content": "matematica", "dynamic": false, "spread": false }], [{ "content": "incremento-porcentual", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/matematica/incremento-porcentual.astro", "pathname": "/matematica/incremento-porcentual", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/matematica/logaritmos", "isIndex": false, "type": "page", "pattern": "^\\/matematica\\/logaritmos\\/$", "segments": [[{ "content": "matematica", "dynamic": false, "spread": false }], [{ "content": "logaritmos", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/matematica/logaritmos.astro", "pathname": "/matematica/logaritmos", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/matematica/mcm-mcd", "isIndex": false, "type": "page", "pattern": "^\\/matematica\\/mcm-mcd\\/$", "segments": [[{ "content": "matematica", "dynamic": false, "spread": false }], [{ "content": "mcm-mcd", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/matematica/mcm-mcd.astro", "pathname": "/matematica/mcm-mcd", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/matematica/media-ponderada", "isIndex": false, "type": "page", "pattern": "^\\/matematica\\/media-ponderada\\/$", "segments": [[{ "content": "matematica", "dynamic": false, "spread": false }], [{ "content": "media-ponderada", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/matematica/media-ponderada.astro", "pathname": "/matematica/media-ponderada", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/matematica/notacion-cientifica", "isIndex": false, "type": "page", "pattern": "^\\/matematica\\/notacion-cientifica\\/$", "segments": [[{ "content": "matematica", "dynamic": false, "spread": false }], [{ "content": "notacion-cientifica", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/matematica/notacion-cientifica.astro", "pathname": "/matematica/notacion-cientifica", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/matematica/pitagoras", "isIndex": false, "type": "page", "pattern": "^\\/matematica\\/pitagoras\\/$", "segments": [[{ "content": "matematica", "dynamic": false, "spread": false }], [{ "content": "pitagoras", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/matematica/pitagoras.astro", "pathname": "/matematica/pitagoras", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/matematica/porcentaje-inverso", "isIndex": false, "type": "page", "pattern": "^\\/matematica\\/porcentaje-inverso\\/$", "segments": [[{ "content": "matematica", "dynamic": false, "spread": false }], [{ "content": "porcentaje-inverso", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/matematica/porcentaje-inverso.astro", "pathname": "/matematica/porcentaje-inverso", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/matematica/promedio-mediana-moda", "isIndex": false, "type": "page", "pattern": "^\\/matematica\\/promedio-mediana-moda\\/$", "segments": [[{ "content": "matematica", "dynamic": false, "spread": false }], [{ "content": "promedio-mediana-moda", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/matematica/promedio-mediana-moda.astro", "pathname": "/matematica/promedio-mediana-moda", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/matematica/rango-estadistico", "isIndex": false, "type": "page", "pattern": "^\\/matematica\\/rango-estadistico\\/$", "segments": [[{ "content": "matematica", "dynamic": false, "spread": false }], [{ "content": "rango-estadistico", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/matematica/rango-estadistico.astro", "pathname": "/matematica/rango-estadistico", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/matematica/regla-de-tres", "isIndex": false, "type": "page", "pattern": "^\\/matematica\\/regla-de-tres\\/$", "segments": [[{ "content": "matematica", "dynamic": false, "spread": false }], [{ "content": "regla-de-tres", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/matematica/regla-de-tres.astro", "pathname": "/matematica/regla-de-tres", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/matematica/sistemas-ecuaciones", "isIndex": false, "type": "page", "pattern": "^\\/matematica\\/sistemas-ecuaciones\\/$", "segments": [[{ "content": "matematica", "dynamic": false, "spread": false }], [{ "content": "sistemas-ecuaciones", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/matematica/sistemas-ecuaciones.astro", "pathname": "/matematica/sistemas-ecuaciones", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/matematica/triangulo", "isIndex": false, "type": "page", "pattern": "^\\/matematica\\/triangulo\\/$", "segments": [[{ "content": "matematica", "dynamic": false, "spread": false }], [{ "content": "triangulo", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/matematica/triangulo.astro", "pathname": "/matematica/triangulo", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/matematica/varianza-desviacion-estandar", "isIndex": false, "type": "page", "pattern": "^\\/matematica\\/varianza-desviacion-estandar\\/$", "segments": [[{ "content": "matematica", "dynamic": false, "spread": false }], [{ "content": "varianza-desviacion-estandar", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/matematica/varianza-desviacion-estandar.astro", "pathname": "/matematica/varianza-desviacion-estandar", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/negocios/comisiones", "isIndex": false, "type": "page", "pattern": "^\\/negocios\\/comisiones\\/$", "segments": [[{ "content": "negocios", "dynamic": false, "spread": false }], [{ "content": "comisiones", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/negocios/comisiones.astro", "pathname": "/negocios/comisiones", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/negocios/margen", "isIndex": false, "type": "page", "pattern": "^\\/negocios\\/margen\\/$", "segments": [[{ "content": "negocios", "dynamic": false, "spread": false }], [{ "content": "margen", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/negocios/margen.astro", "pathname": "/negocios/margen", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/negocios/markup-margen", "isIndex": false, "type": "page", "pattern": "^\\/negocios\\/markup-margen\\/$", "segments": [[{ "content": "negocios", "dynamic": false, "spread": false }], [{ "content": "markup-margen", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/negocios/markup-margen.astro", "pathname": "/negocios/markup-margen", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/negocios/precio-venta", "isIndex": false, "type": "page", "pattern": "^\\/negocios\\/precio-venta\\/$", "segments": [[{ "content": "negocios", "dynamic": false, "spread": false }], [{ "content": "precio-venta", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/negocios/precio-venta.astro", "pathname": "/negocios/precio-venta", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/negocios/punto-equilibrio", "isIndex": false, "type": "page", "pattern": "^\\/negocios\\/punto-equilibrio\\/$", "segments": [[{ "content": "negocios", "dynamic": false, "spread": false }], [{ "content": "punto-equilibrio", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/negocios/punto-equilibrio.astro", "pathname": "/negocios/punto-equilibrio", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/negocios/tarifa-freelance", "isIndex": false, "type": "page", "pattern": "^\\/negocios\\/tarifa-freelance\\/$", "segments": [[{ "content": "negocios", "dynamic": false, "spread": false }], [{ "content": "tarifa-freelance", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/negocios/tarifa-freelance.astro", "pathname": "/negocios/tarifa-freelance", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/negocios/valor-de-tu-hora", "isIndex": false, "type": "page", "pattern": "^\\/negocios\\/valor-de-tu-hora\\/$", "segments": [[{ "content": "negocios", "dynamic": false, "spread": false }], [{ "content": "valor-de-tu-hora", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/negocios/valor-de-tu-hora.astro", "pathname": "/negocios/valor-de-tu-hora", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/privacidad", "isIndex": false, "type": "page", "pattern": "^\\/privacidad\\/$", "segments": [[{ "content": "privacidad", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/privacidad.astro", "pathname": "/privacidad", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/salud/agua", "isIndex": false, "type": "page", "pattern": "^\\/salud\\/agua\\/$", "segments": [[{ "content": "salud", "dynamic": false, "spread": false }], [{ "content": "agua", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/salud/agua.astro", "pathname": "/salud/agua", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/salud/calorias", "isIndex": false, "type": "page", "pattern": "^\\/salud\\/calorias\\/$", "segments": [[{ "content": "salud", "dynamic": false, "spread": false }], [{ "content": "calorias", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/salud/calorias.astro", "pathname": "/salud/calorias", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/salud/dejar-de-fumar", "isIndex": false, "type": "page", "pattern": "^\\/salud\\/dejar-de-fumar\\/$", "segments": [[{ "content": "salud", "dynamic": false, "spread": false }], [{ "content": "dejar-de-fumar", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/salud/dejar-de-fumar.astro", "pathname": "/salud/dejar-de-fumar", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/salud/embarazo", "isIndex": false, "type": "page", "pattern": "^\\/salud\\/embarazo\\/$", "segments": [[{ "content": "salud", "dynamic": false, "spread": false }], [{ "content": "embarazo", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/salud/embarazo.astro", "pathname": "/salud/embarazo", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/salud/frecuencia-cardiaca", "isIndex": false, "type": "page", "pattern": "^\\/salud\\/frecuencia-cardiaca\\/$", "segments": [[{ "content": "salud", "dynamic": false, "spread": false }], [{ "content": "frecuencia-cardiaca", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/salud/frecuencia-cardiaca.astro", "pathname": "/salud/frecuencia-cardiaca", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/salud/imc", "isIndex": false, "type": "page", "pattern": "^\\/salud\\/imc\\/$", "segments": [[{ "content": "salud", "dynamic": false, "spread": false }], [{ "content": "imc", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/salud/imc.astro", "pathname": "/salud/imc", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/salud/keto", "isIndex": false, "type": "page", "pattern": "^\\/salud\\/keto\\/$", "segments": [[{ "content": "salud", "dynamic": false, "spread": false }], [{ "content": "keto", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/salud/keto.astro", "pathname": "/salud/keto", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/salud/ovulacion", "isIndex": false, "type": "page", "pattern": "^\\/salud\\/ovulacion\\/$", "segments": [[{ "content": "salud", "dynamic": false, "spread": false }], [{ "content": "ovulacion", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/salud/ovulacion.astro", "pathname": "/salud/ovulacion", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/salud/proteina", "isIndex": false, "type": "page", "pattern": "^\\/salud\\/proteina\\/$", "segments": [[{ "content": "salud", "dynamic": false, "spread": false }], [{ "content": "proteina", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/salud/proteina.astro", "pathname": "/salud/proteina", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/salud/volumen-definicion", "isIndex": false, "type": "page", "pattern": "^\\/salud\\/volumen-definicion\\/$", "segments": [[{ "content": "salud", "dynamic": false, "spread": false }], [{ "content": "volumen-definicion", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/salud/volumen-definicion.astro", "pathname": "/salud/volumen-definicion", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/seo/analizador-parrafos", "isIndex": false, "type": "page", "pattern": "^\\/seo\\/analizador-parrafos\\/$", "segments": [[{ "content": "seo", "dynamic": false, "spread": false }], [{ "content": "analizador-parrafos", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/seo/analizador-parrafos.astro", "pathname": "/seo/analizador-parrafos", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/seo/analizador-repeticion", "isIndex": false, "type": "page", "pattern": "^\\/seo\\/analizador-repeticion\\/$", "segments": [[{ "content": "seo", "dynamic": false, "spread": false }], [{ "content": "analizador-repeticion", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/seo/analizador-repeticion.astro", "pathname": "/seo/analizador-repeticion", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/seo/analizador-titulos", "isIndex": false, "type": "page", "pattern": "^\\/seo\\/analizador-titulos\\/$", "segments": [[{ "content": "seo", "dynamic": false, "spread": false }], [{ "content": "analizador-titulos", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/seo/analizador-titulos.astro", "pathname": "/seo/analizador-titulos", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/seo/anchor-text-ratio", "isIndex": false, "type": "page", "pattern": "^\\/seo\\/anchor-text-ratio\\/$", "segments": [[{ "content": "seo", "dynamic": false, "spread": false }], [{ "content": "anchor-text-ratio", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/seo/anchor-text-ratio.astro", "pathname": "/seo/anchor-text-ratio", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/seo/calculadora-alcance", "isIndex": false, "type": "page", "pattern": "^\\/seo\\/calculadora-alcance\\/$", "segments": [[{ "content": "seo", "dynamic": false, "spread": false }], [{ "content": "calculadora-alcance", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/seo/calculadora-alcance.astro", "pathname": "/seo/calculadora-alcance", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/seo/calculadora-cpa", "isIndex": false, "type": "page", "pattern": "^\\/seo\\/calculadora-cpa\\/$", "segments": [[{ "content": "seo", "dynamic": false, "spread": false }], [{ "content": "calculadora-cpa", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/seo/calculadora-cpa.astro", "pathname": "/seo/calculadora-cpa", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/seo/calculadora-cpc", "isIndex": false, "type": "page", "pattern": "^\\/seo\\/calculadora-cpc\\/$", "segments": [[{ "content": "seo", "dynamic": false, "spread": false }], [{ "content": "calculadora-cpc", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/seo/calculadora-cpc.astro", "pathname": "/seo/calculadora-cpc", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/seo/calculadora-cpl", "isIndex": false, "type": "page", "pattern": "^\\/seo\\/calculadora-cpl\\/$", "segments": [[{ "content": "seo", "dynamic": false, "spread": false }], [{ "content": "calculadora-cpl", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/seo/calculadora-cpl.astro", "pathname": "/seo/calculadora-cpl", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/seo/calculadora-cpm", "isIndex": false, "type": "page", "pattern": "^\\/seo\\/calculadora-cpm\\/$", "segments": [[{ "content": "seo", "dynamic": false, "spread": false }], [{ "content": "calculadora-cpm", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/seo/calculadora-cpm.astro", "pathname": "/seo/calculadora-cpm", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/seo/calculadora-ctr", "isIndex": false, "type": "page", "pattern": "^\\/seo\\/calculadora-ctr\\/$", "segments": [[{ "content": "seo", "dynamic": false, "spread": false }], [{ "content": "calculadora-ctr", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/seo/calculadora-ctr.astro", "pathname": "/seo/calculadora-ctr", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/seo/contador-caracteres", "isIndex": false, "type": "page", "pattern": "^\\/seo\\/contador-caracteres\\/$", "segments": [[{ "content": "seo", "dynamic": false, "spread": false }], [{ "content": "contador-caracteres", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/seo/contador-caracteres.astro", "pathname": "/seo/contador-caracteres", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/seo/contador-caracteres-sin-espacios", "isIndex": false, "type": "page", "pattern": "^\\/seo\\/contador-caracteres-sin-espacios\\/$", "segments": [[{ "content": "seo", "dynamic": false, "spread": false }], [{ "content": "contador-caracteres-sin-espacios", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/seo/contador-caracteres-sin-espacios.astro", "pathname": "/seo/contador-caracteres-sin-espacios", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/seo/contador-encabezados", "isIndex": false, "type": "page", "pattern": "^\\/seo\\/contador-encabezados\\/$", "segments": [[{ "content": "seo", "dynamic": false, "spread": false }], [{ "content": "contador-encabezados", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/seo/contador-encabezados.astro", "pathname": "/seo/contador-encabezados", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/seo/contador-frases", "isIndex": false, "type": "page", "pattern": "^\\/seo\\/contador-frases\\/$", "segments": [[{ "content": "seo", "dynamic": false, "spread": false }], [{ "content": "contador-frases", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/seo/contador-frases.astro", "pathname": "/seo/contador-frases", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/seo/contador-hashtags", "isIndex": false, "type": "page", "pattern": "^\\/seo\\/contador-hashtags\\/$", "segments": [[{ "content": "seo", "dynamic": false, "spread": false }], [{ "content": "contador-hashtags", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/seo/contador-hashtags.astro", "pathname": "/seo/contador-hashtags", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/seo/contador-keywords", "isIndex": false, "type": "page", "pattern": "^\\/seo\\/contador-keywords\\/$", "segments": [[{ "content": "seo", "dynamic": false, "spread": false }], [{ "content": "contador-keywords", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/seo/contador-keywords.astro", "pathname": "/seo/contador-keywords", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/seo/contador-palabras", "isIndex": false, "type": "page", "pattern": "^\\/seo\\/contador-palabras\\/$", "segments": [[{ "content": "seo", "dynamic": false, "spread": false }], [{ "content": "contador-palabras", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/seo/contador-palabras.astro", "pathname": "/seo/contador-palabras", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/seo/densidad-enlaces-internos", "isIndex": false, "type": "page", "pattern": "^\\/seo\\/densidad-enlaces-internos\\/$", "segments": [[{ "content": "seo", "dynamic": false, "spread": false }], [{ "content": "densidad-enlaces-internos", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/seo/densidad-enlaces-internos.astro", "pathname": "/seo/densidad-enlaces-internos", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/seo/densidad-keyword", "isIndex": false, "type": "page", "pattern": "^\\/seo\\/densidad-keyword\\/$", "segments": [[{ "content": "seo", "dynamic": false, "spread": false }], [{ "content": "densidad-keyword", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/seo/densidad-keyword.astro", "pathname": "/seo/densidad-keyword", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/seo/engagement-rate", "isIndex": false, "type": "page", "pattern": "^\\/seo\\/engagement-rate\\/$", "segments": [[{ "content": "seo", "dynamic": false, "spread": false }], [{ "content": "engagement-rate", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/seo/engagement-rate.astro", "pathname": "/seo/engagement-rate", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/seo/frecuencia-palabras", "isIndex": false, "type": "page", "pattern": "^\\/seo\\/frecuencia-palabras\\/$", "segments": [[{ "content": "seo", "dynamic": false, "spread": false }], [{ "content": "frecuencia-palabras", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/seo/frecuencia-palabras.astro", "pathname": "/seo/frecuencia-palabras", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/seo/frecuencia-publicitaria", "isIndex": false, "type": "page", "pattern": "^\\/seo\\/frecuencia-publicitaria\\/$", "segments": [[{ "content": "seo", "dynamic": false, "spread": false }], [{ "content": "frecuencia-publicitaria", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/seo/frecuencia-publicitaria.astro", "pathname": "/seo/frecuencia-publicitaria", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/seo/generador-slug", "isIndex": false, "type": "page", "pattern": "^\\/seo\\/generador-slug\\/$", "segments": [[{ "content": "seo", "dynamic": false, "spread": false }], [{ "content": "generador-slug", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/seo/generador-slug.astro", "pathname": "/seo/generador-slug", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/seo/longitud-meta-description", "isIndex": false, "type": "page", "pattern": "^\\/seo\\/longitud-meta-description\\/$", "segments": [[{ "content": "seo", "dynamic": false, "spread": false }], [{ "content": "longitud-meta-description", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/seo/longitud-meta-description.astro", "pathname": "/seo/longitud-meta-description", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/seo/longitud-titulo-seo", "isIndex": false, "type": "page", "pattern": "^\\/seo\\/longitud-titulo-seo\\/$", "segments": [[{ "content": "seo", "dynamic": false, "spread": false }], [{ "content": "longitud-titulo-seo", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/seo/longitud-titulo-seo.astro", "pathname": "/seo/longitud-titulo-seo", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/seo/radio-texto-html-", "isIndex": false, "type": "page", "pattern": "^\\/seo\\/radio-texto-html-\\/$", "segments": [[{ "content": "seo", "dynamic": false, "spread": false }], [{ "content": "radio-texto-html-", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/seo/radio-texto-html-.astro", "pathname": "/seo/radio-texto-html-", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/seo/roi-marketing", "isIndex": false, "type": "page", "pattern": "^\\/seo\\/roi-marketing\\/$", "segments": [[{ "content": "seo", "dynamic": false, "spread": false }], [{ "content": "roi-marketing", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/seo/roi-marketing.astro", "pathname": "/seo/roi-marketing", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/seo/tasa-conversion", "isIndex": false, "type": "page", "pattern": "^\\/seo\\/tasa-conversion\\/$", "segments": [[{ "content": "seo", "dynamic": false, "spread": false }], [{ "content": "tasa-conversion", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/seo/tasa-conversion.astro", "pathname": "/seo/tasa-conversion", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/seo/tiempo-de-lectura", "isIndex": false, "type": "page", "pattern": "^\\/seo\\/tiempo-de-lectura\\/$", "segments": [[{ "content": "seo", "dynamic": false, "spread": false }], [{ "content": "tiempo-de-lectura", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/seo/tiempo-de-lectura.astro", "pathname": "/seo/tiempo-de-lectura", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/seo/tiempo-lectura", "isIndex": false, "type": "page", "pattern": "^\\/seo\\/tiempo-lectura\\/$", "segments": [[{ "content": "seo", "dynamic": false, "spread": false }], [{ "content": "tiempo-lectura", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/seo/tiempo-lectura.astro", "pathname": "/seo/tiempo-lectura", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/seo/tiempo-ranking-seo", "isIndex": false, "type": "page", "pattern": "^\\/seo\\/tiempo-ranking-seo\\/$", "segments": [[{ "content": "seo", "dynamic": false, "spread": false }], [{ "content": "tiempo-ranking-seo", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/seo/tiempo-ranking-seo.astro", "pathname": "/seo/tiempo-ranking-seo", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/unidades/bytes-a-mb", "isIndex": false, "type": "page", "pattern": "^\\/unidades\\/bytes-a-mb\\/$", "segments": [[{ "content": "unidades", "dynamic": false, "spread": false }], [{ "content": "bytes-a-mb", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/unidades/bytes-a-mb.astro", "pathname": "/unidades/bytes-a-mb", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/unidades/cm-a-pulgadas", "isIndex": false, "type": "page", "pattern": "^\\/unidades\\/cm-a-pulgadas\\/$", "segments": [[{ "content": "unidades", "dynamic": false, "spread": false }], [{ "content": "cm-a-pulgadas", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/unidades/cm-a-pulgadas.astro", "pathname": "/unidades/cm-a-pulgadas", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/unidades/conversor-temperatura", "isIndex": false, "type": "page", "pattern": "^\\/unidades\\/conversor-temperatura\\/$", "segments": [[{ "content": "unidades", "dynamic": false, "spread": false }], [{ "content": "conversor-temperatura", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/unidades/conversor-temperatura.astro", "pathname": "/unidades/conversor-temperatura", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/unidades/conversor-velocidad", "isIndex": false, "type": "page", "pattern": "^\\/unidades\\/conversor-velocidad\\/$", "segments": [[{ "content": "unidades", "dynamic": false, "spread": false }], [{ "content": "conversor-velocidad", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/unidades/conversor-velocidad.astro", "pathname": "/unidades/conversor-velocidad", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/unidades/gal-to-l", "isIndex": false, "type": "page", "pattern": "^\\/unidades\\/gal-to-l\\/$", "segments": [[{ "content": "unidades", "dynamic": false, "spread": false }], [{ "content": "gal-to-l", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/unidades/gal-to-l.astro", "pathname": "/unidades/gal-to-l", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/unidades/horas-a-dias", "isIndex": false, "type": "page", "pattern": "^\\/unidades\\/horas-a-dias\\/$", "segments": [[{ "content": "unidades", "dynamic": false, "spread": false }], [{ "content": "horas-a-dias", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/unidades/horas-a-dias.astro", "pathname": "/unidades/horas-a-dias", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/unidades/kg-to-lb", "isIndex": false, "type": "page", "pattern": "^\\/unidades\\/kg-to-lb\\/$", "segments": [[{ "content": "unidades", "dynamic": false, "spread": false }], [{ "content": "kg-to-lb", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/unidades/kg-to-lb.astro", "pathname": "/unidades/kg-to-lb", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/unidades/km-a-millas", "isIndex": false, "type": "page", "pattern": "^\\/unidades\\/km-a-millas\\/$", "segments": [[{ "content": "unidades", "dynamic": false, "spread": false }], [{ "content": "km-a-millas", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/unidades/km-a-millas.astro", "pathname": "/unidades/km-a-millas", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/unidades/lb-to-kg", "isIndex": false, "type": "page", "pattern": "^\\/unidades\\/lb-to-kg\\/$", "segments": [[{ "content": "unidades", "dynamic": false, "spread": false }], [{ "content": "lb-to-kg", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/unidades/lb-to-kg.astro", "pathname": "/unidades/lb-to-kg", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/unidades/litros-a-galones", "isIndex": false, "type": "page", "pattern": "^\\/unidades\\/litros-a-galones\\/$", "segments": [[{ "content": "unidades", "dynamic": false, "spread": false }], [{ "content": "litros-a-galones", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/unidades/litros-a-galones.astro", "pathname": "/unidades/litros-a-galones", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/unidades/m2-a-ft2", "isIndex": false, "type": "page", "pattern": "^\\/unidades\\/m2-a-ft2\\/$", "segments": [[{ "content": "unidades", "dynamic": false, "spread": false }], [{ "content": "m2-a-ft2", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/unidades/m2-a-ft2.astro", "pathname": "/unidades/m2-a-ft2", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/unidades/mb-a-gb", "isIndex": false, "type": "page", "pattern": "^\\/unidades\\/mb-a-gb\\/$", "segments": [[{ "content": "unidades", "dynamic": false, "spread": false }], [{ "content": "mb-a-gb", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/unidades/mb-a-gb.astro", "pathname": "/unidades/mb-a-gb", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/unidades/metros-a-pies", "isIndex": false, "type": "page", "pattern": "^\\/unidades\\/metros-a-pies\\/$", "segments": [[{ "content": "unidades", "dynamic": false, "spread": false }], [{ "content": "metros-a-pies", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/unidades/metros-a-pies.astro", "pathname": "/unidades/metros-a-pies", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/unidades/miles-to-km", "isIndex": false, "type": "page", "pattern": "^\\/unidades\\/miles-to-km\\/$", "segments": [[{ "content": "unidades", "dynamic": false, "spread": false }], [{ "content": "miles-to-km", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/unidades/miles-to-km.astro", "pathname": "/unidades/miles-to-km", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/unidades/minutos-a-horas", "isIndex": false, "type": "page", "pattern": "^\\/unidades\\/minutos-a-horas\\/$", "segments": [[{ "content": "unidades", "dynamic": false, "spread": false }], [{ "content": "minutos-a-horas", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/unidades/minutos-a-horas.astro", "pathname": "/unidades/minutos-a-horas", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/unidades/pies-a-metros", "isIndex": false, "type": "page", "pattern": "^\\/unidades\\/pies-a-metros\\/$", "segments": [[{ "content": "unidades", "dynamic": false, "spread": false }], [{ "content": "pies-a-metros", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/unidades/pies-a-metros.astro", "pathname": "/unidades/pies-a-metros", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/unidades/pies-cuadrados-a-metros-cuadrados", "isIndex": false, "type": "page", "pattern": "^\\/unidades\\/pies-cuadrados-a-metros-cuadrados\\/$", "segments": [[{ "content": "unidades", "dynamic": false, "spread": false }], [{ "content": "pies-cuadrados-a-metros-cuadrados", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/unidades/pies-cuadrados-a-metros-cuadrados.astro", "pathname": "/unidades/pies-cuadrados-a-metros-cuadrados", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/unidades/pulgadas-a-cm", "isIndex": false, "type": "page", "pattern": "^\\/unidades\\/pulgadas-a-cm\\/$", "segments": [[{ "content": "unidades", "dynamic": false, "spread": false }], [{ "content": "pulgadas-a-cm", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/unidades/pulgadas-a-cm.astro", "pathname": "/unidades/pulgadas-a-cm", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/unidades/segundos-a-horas", "isIndex": false, "type": "page", "pattern": "^\\/unidades\\/segundos-a-horas\\/$", "segments": [[{ "content": "unidades", "dynamic": false, "spread": false }], [{ "content": "segundos-a-horas", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/unidades/segundos-a-horas.astro", "pathname": "/unidades/segundos-a-horas", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/unidades/semanas-a-meses", "isIndex": false, "type": "page", "pattern": "^\\/unidades\\/semanas-a-meses\\/$", "segments": [[{ "content": "unidades", "dynamic": false, "spread": false }], [{ "content": "semanas-a-meses", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/unidades/semanas-a-meses.astro", "pathname": "/unidades/semanas-a-meses", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/utiles/asado", "isIndex": false, "type": "page", "pattern": "^\\/utiles\\/asado\\/$", "segments": [[{ "content": "utiles", "dynamic": false, "spread": false }], [{ "content": "asado", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/utiles/asado.astro", "pathname": "/utiles/asado", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/utiles/bebidas", "isIndex": false, "type": "page", "pattern": "^\\/utiles\\/bebidas\\/$", "segments": [[{ "content": "utiles", "dynamic": false, "spread": false }], [{ "content": "bebidas", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/utiles/bebidas.astro", "pathname": "/utiles/bebidas", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/utiles/calculadora-beneficio-unidad", "isIndex": false, "type": "page", "pattern": "^\\/utiles\\/calculadora-beneficio-unidad\\/$", "segments": [[{ "content": "utiles", "dynamic": false, "spread": false }], [{ "content": "calculadora-beneficio-unidad", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/utiles/calculadora-beneficio-unidad.astro", "pathname": "/utiles/calculadora-beneficio-unidad", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/utiles/calculadora-costos-fijos-variables", "isIndex": false, "type": "page", "pattern": "^\\/utiles\\/calculadora-costos-fijos-variables\\/$", "segments": [[{ "content": "utiles", "dynamic": false, "spread": false }], [{ "content": "calculadora-costos-fijos-variables", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/utiles/calculadora-costos-fijos-variables.astro", "pathname": "/utiles/calculadora-costos-fijos-variables", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/utiles/calculadora-crecimiento-ventas", "isIndex": false, "type": "page", "pattern": "^\\/utiles\\/calculadora-crecimiento-ventas\\/$", "segments": [[{ "content": "utiles", "dynamic": false, "spread": false }], [{ "content": "calculadora-crecimiento-ventas", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/utiles/calculadora-crecimiento-ventas.astro", "pathname": "/utiles/calculadora-crecimiento-ventas", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/utiles/calculadora-de-escalas", "isIndex": false, "type": "page", "pattern": "^\\/utiles\\/calculadora-de-escalas\\/$", "segments": [[{ "content": "utiles", "dynamic": false, "spread": false }], [{ "content": "calculadora-de-escalas", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/utiles/calculadora-de-escalas.astro", "pathname": "/utiles/calculadora-de-escalas", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/utiles/calculadora-de-markup", "isIndex": false, "type": "page", "pattern": "^\\/utiles\\/calculadora-de-markup\\/$", "segments": [[{ "content": "utiles", "dynamic": false, "spread": false }], [{ "content": "calculadora-de-markup", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/utiles/calculadora-de-markup.astro", "pathname": "/utiles/calculadora-de-markup", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/utiles/calculadora-de-proporciones", "isIndex": false, "type": "page", "pattern": "^\\/utiles\\/calculadora-de-proporciones\\/$", "segments": [[{ "content": "utiles", "dynamic": false, "spread": false }], [{ "content": "calculadora-de-proporciones", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/utiles/calculadora-de-proporciones.astro", "pathname": "/utiles/calculadora-de-proporciones", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/utiles/calculadora-desviacion-estandar", "isIndex": false, "type": "page", "pattern": "^\\/utiles\\/calculadora-desviacion-estandar\\/$", "segments": [[{ "content": "utiles", "dynamic": false, "spread": false }], [{ "content": "calculadora-desviacion-estandar", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/utiles/calculadora-desviacion-estandar.astro", "pathname": "/utiles/calculadora-desviacion-estandar", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/utiles/calculadora-fecha-futura", "isIndex": false, "type": "page", "pattern": "^\\/utiles\\/calculadora-fecha-futura\\/$", "segments": [[{ "content": "utiles", "dynamic": false, "spread": false }], [{ "content": "calculadora-fecha-futura", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/utiles/calculadora-fecha-futura.astro", "pathname": "/utiles/calculadora-fecha-futura", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/utiles/calculadora-fecha-pasada", "isIndex": false, "type": "page", "pattern": "^\\/utiles\\/calculadora-fecha-pasada\\/$", "segments": [[{ "content": "utiles", "dynamic": false, "spread": false }], [{ "content": "calculadora-fecha-pasada", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/utiles/calculadora-fecha-pasada.astro", "pathname": "/utiles/calculadora-fecha-pasada", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/utiles/calculadora-flujo-de-caja", "isIndex": false, "type": "page", "pattern": "^\\/utiles\\/calculadora-flujo-de-caja\\/$", "segments": [[{ "content": "utiles", "dynamic": false, "spread": false }], [{ "content": "calculadora-flujo-de-caja", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/utiles/calculadora-flujo-de-caja.astro", "pathname": "/utiles/calculadora-flujo-de-caja", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/utiles/calculadora-impuestos-ventas", "isIndex": false, "type": "page", "pattern": "^\\/utiles\\/calculadora-impuestos-ventas\\/$", "segments": [[{ "content": "utiles", "dynamic": false, "spread": false }], [{ "content": "calculadora-impuestos-ventas", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/utiles/calculadora-impuestos-ventas.astro", "pathname": "/utiles/calculadora-impuestos-ventas", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/utiles/calculadora-inventario-ideal", "isIndex": false, "type": "page", "pattern": "^\\/utiles\\/calculadora-inventario-ideal\\/$", "segments": [[{ "content": "utiles", "dynamic": false, "spread": false }], [{ "content": "calculadora-inventario-ideal", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/utiles/calculadora-inventario-ideal.astro", "pathname": "/utiles/calculadora-inventario-ideal", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/utiles/calculadora-inversion-aportes-periodicos", "isIndex": false, "type": "page", "pattern": "^\\/utiles\\/calculadora-inversion-aportes-periodicos\\/$", "segments": [[{ "content": "utiles", "dynamic": false, "spread": false }], [{ "content": "calculadora-inversion-aportes-periodicos", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/utiles/calculadora-inversion-aportes-periodicos.astro", "pathname": "/utiles/calculadora-inversion-aportes-periodicos", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/utiles/calculadora-ltv", "isIndex": false, "type": "page", "pattern": "^\\/utiles\\/calculadora-ltv\\/$", "segments": [[{ "content": "utiles", "dynamic": false, "spread": false }], [{ "content": "calculadora-ltv", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/utiles/calculadora-ltv.astro", "pathname": "/utiles/calculadora-ltv", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/utiles/calculadora-margen-bruto", "isIndex": false, "type": "page", "pattern": "^\\/utiles\\/calculadora-margen-bruto\\/$", "segments": [[{ "content": "utiles", "dynamic": false, "spread": false }], [{ "content": "calculadora-margen-bruto", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/utiles/calculadora-margen-bruto.astro", "pathname": "/utiles/calculadora-margen-bruto", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/utiles/calculadora-margen-neto", "isIndex": false, "type": "page", "pattern": "^\\/utiles\\/calculadora-margen-neto\\/$", "segments": [[{ "content": "utiles", "dynamic": false, "spread": false }], [{ "content": "calculadora-margen-neto", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/utiles/calculadora-margen-neto.astro", "pathname": "/utiles/calculadora-margen-neto", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/utiles/calculadora-percentil", "isIndex": false, "type": "page", "pattern": "^\\/utiles\\/calculadora-percentil\\/$", "segments": [[{ "content": "utiles", "dynamic": false, "spread": false }], [{ "content": "calculadora-percentil", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/utiles/calculadora-percentil.astro", "pathname": "/utiles/calculadora-percentil", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/utiles/calculadora-rentabilidad-ecommerce", "isIndex": false, "type": "page", "pattern": "^\\/utiles\\/calculadora-rentabilidad-ecommerce\\/$", "segments": [[{ "content": "utiles", "dynamic": false, "spread": false }], [{ "content": "calculadora-rentabilidad-ecommerce", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/utiles/calculadora-rentabilidad-ecommerce.astro", "pathname": "/utiles/calculadora-rentabilidad-ecommerce", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/utiles/calculadora-rentabilidad-negocio", "isIndex": false, "type": "page", "pattern": "^\\/utiles\\/calculadora-rentabilidad-negocio\\/$", "segments": [[{ "content": "utiles", "dynamic": false, "spread": false }], [{ "content": "calculadora-rentabilidad-negocio", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/utiles/calculadora-rentabilidad-negocio.astro", "pathname": "/utiles/calculadora-rentabilidad-negocio", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/utiles/calculadora-rentabilidad-producto", "isIndex": false, "type": "page", "pattern": "^\\/utiles\\/calculadora-rentabilidad-producto\\/$", "segments": [[{ "content": "utiles", "dynamic": false, "spread": false }], [{ "content": "calculadora-rentabilidad-producto", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/utiles/calculadora-rentabilidad-producto.astro", "pathname": "/utiles/calculadora-rentabilidad-producto", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/utiles/calculadora-roas", "isIndex": false, "type": "page", "pattern": "^\\/utiles\\/calculadora-roas\\/$", "segments": [[{ "content": "utiles", "dynamic": false, "spread": false }], [{ "content": "calculadora-roas", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/utiles/calculadora-roas.astro", "pathname": "/utiles/calculadora-roas", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/utiles/calculadora-ticket-promedio", "isIndex": false, "type": "page", "pattern": "^\\/utiles\\/calculadora-ticket-promedio\\/$", "segments": [[{ "content": "utiles", "dynamic": false, "spread": false }], [{ "content": "calculadora-ticket-promedio", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/utiles/calculadora-ticket-promedio.astro", "pathname": "/utiles/calculadora-ticket-promedio", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/utiles/combustible", "isIndex": false, "type": "page", "pattern": "^\\/utiles\\/combustible\\/$", "segments": [[{ "content": "utiles", "dynamic": false, "spread": false }], [{ "content": "combustible", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/utiles/combustible.astro", "pathname": "/utiles/combustible", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/utiles/contador-de-caracteres", "isIndex": false, "type": "page", "pattern": "^\\/utiles\\/contador-de-caracteres\\/$", "segments": [[{ "content": "utiles", "dynamic": false, "spread": false }], [{ "content": "contador-de-caracteres", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/utiles/contador-de-caracteres.astro", "pathname": "/utiles/contador-de-caracteres", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/utiles/contador-de-letras", "isIndex": false, "type": "page", "pattern": "^\\/utiles\\/contador-de-letras\\/$", "segments": [[{ "content": "utiles", "dynamic": false, "spread": false }], [{ "content": "contador-de-letras", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/utiles/contador-de-letras.astro", "pathname": "/utiles/contador-de-letras", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/utiles/contador-de-palabras-unicas", "isIndex": false, "type": "page", "pattern": "^\\/utiles\\/contador-de-palabras-unicas\\/$", "segments": [[{ "content": "utiles", "dynamic": false, "spread": false }], [{ "content": "contador-de-palabras-unicas", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/utiles/contador-de-palabras-unicas.astro", "pathname": "/utiles/contador-de-palabras-unicas", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/utiles/contador-de-vocales", "isIndex": false, "type": "page", "pattern": "^\\/utiles\\/contador-de-vocales\\/$", "segments": [[{ "content": "utiles", "dynamic": false, "spread": false }], [{ "content": "contador-de-vocales", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/utiles/contador-de-vocales.astro", "pathname": "/utiles/contador-de-vocales", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/utiles/contador-dias-cumpleanos", "isIndex": false, "type": "page", "pattern": "^\\/utiles\\/contador-dias-cumpleanos\\/$", "segments": [[{ "content": "utiles", "dynamic": false, "spread": false }], [{ "content": "contador-dias-cumpleanos", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/utiles/contador-dias-cumpleanos.astro", "pathname": "/utiles/contador-dias-cumpleanos", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/utiles/contador-dias-navidad", "isIndex": false, "type": "page", "pattern": "^\\/utiles\\/contador-dias-navidad\\/$", "segments": [[{ "content": "utiles", "dynamic": false, "spread": false }], [{ "content": "contador-dias-navidad", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/utiles/contador-dias-navidad.astro", "pathname": "/utiles/contador-dias-navidad", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/utiles/costo-por-uso", "isIndex": false, "type": "page", "pattern": "^\\/utiles\\/costo-por-uso\\/$", "segments": [[{ "content": "utiles", "dynamic": false, "spread": false }], [{ "content": "costo-por-uso", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/utiles/costo-por-uso.astro", "pathname": "/utiles/costo-por-uso", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/utiles/descuento-doble", "isIndex": false, "type": "page", "pattern": "^\\/utiles\\/descuento-doble\\/$", "segments": [[{ "content": "utiles", "dynamic": false, "spread": false }], [{ "content": "descuento-doble", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/utiles/descuento-doble.astro", "pathname": "/utiles/descuento-doble", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/utiles/descuentos", "isIndex": false, "type": "page", "pattern": "^\\/utiles\\/descuentos\\/$", "segments": [[{ "content": "utiles", "dynamic": false, "spread": false }], [{ "content": "descuentos", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/utiles/descuentos.astro", "pathname": "/utiles/descuentos", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/utiles/dias-habiles", "isIndex": false, "type": "page", "pattern": "^\\/utiles\\/dias-habiles\\/$", "segments": [[{ "content": "utiles", "dynamic": false, "spread": false }], [{ "content": "dias-habiles", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/utiles/dias-habiles.astro", "pathname": "/utiles/dias-habiles", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/utiles/diezmo", "isIndex": false, "type": "page", "pattern": "^\\/utiles\\/diezmo\\/$", "segments": [[{ "content": "utiles", "dynamic": false, "spread": false }], [{ "content": "diezmo", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/utiles/diezmo.astro", "pathname": "/utiles/diezmo", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/utiles/diferencia-entre-fechas", "isIndex": false, "type": "page", "pattern": "^\\/utiles\\/diferencia-entre-fechas\\/$", "segments": [[{ "content": "utiles", "dynamic": false, "spread": false }], [{ "content": "diferencia-entre-fechas", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/utiles/diferencia-entre-fechas.astro", "pathname": "/utiles/diferencia-entre-fechas", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/utiles/dividir-cuenta", "isIndex": false, "type": "page", "pattern": "^\\/utiles\\/dividir-cuenta\\/$", "segments": [[{ "content": "utiles", "dynamic": false, "spread": false }], [{ "content": "dividir-cuenta", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/utiles/dividir-cuenta.astro", "pathname": "/utiles/dividir-cuenta", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/utiles/ecuaciones", "isIndex": false, "type": "page", "pattern": "^\\/utiles\\/ecuaciones\\/$", "segments": [[{ "content": "utiles", "dynamic": false, "spread": false }], [{ "content": "ecuaciones", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/utiles/ecuaciones.astro", "pathname": "/utiles/ecuaciones", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/utiles/edad-mascotas", "isIndex": false, "type": "page", "pattern": "^\\/utiles\\/edad-mascotas\\/$", "segments": [[{ "content": "utiles", "dynamic": false, "spread": false }], [{ "content": "edad-mascotas", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/utiles/edad-mascotas.astro", "pathname": "/utiles/edad-mascotas", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/utiles/fracciones", "isIndex": false, "type": "page", "pattern": "^\\/utiles\\/fracciones\\/$", "segments": [[{ "content": "utiles", "dynamic": false, "spread": false }], [{ "content": "fracciones", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/utiles/fracciones.astro", "pathname": "/utiles/fracciones", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/utiles/gastos-compartidos", "isIndex": false, "type": "page", "pattern": "^\\/utiles\\/gastos-compartidos\\/$", "segments": [[{ "content": "utiles", "dynamic": false, "spread": false }], [{ "content": "gastos-compartidos", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/utiles/gastos-compartidos.astro", "pathname": "/utiles/gastos-compartidos", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/utiles/generador-contrasenas", "isIndex": false, "type": "page", "pattern": "^\\/utiles\\/generador-contrasenas\\/$", "segments": [[{ "content": "utiles", "dynamic": false, "spread": false }], [{ "content": "generador-contrasenas", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/utiles/generador-contrasenas.astro", "pathname": "/utiles/generador-contrasenas", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/utiles/horas", "isIndex": false, "type": "page", "pattern": "^\\/utiles\\/horas\\/$", "segments": [[{ "content": "utiles", "dynamic": false, "spread": false }], [{ "content": "horas", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/utiles/horas.astro", "pathname": "/utiles/horas", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/utiles/millas-a-km", "isIndex": false, "type": "page", "pattern": "^\\/utiles\\/millas-a-km\\/$", "segments": [[{ "content": "utiles", "dynamic": false, "spread": false }], [{ "content": "millas-a-km", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/utiles/millas-a-km.astro", "pathname": "/utiles/millas-a-km", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/utiles/propina", "isIndex": false, "type": "page", "pattern": "^\\/utiles\\/propina\\/$", "segments": [[{ "content": "utiles", "dynamic": false, "spread": false }], [{ "content": "propina", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/utiles/propina.astro", "pathname": "/utiles/propina", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/utiles/tiempo", "isIndex": false, "type": "page", "pattern": "^\\/utiles\\/tiempo\\/$", "segments": [[{ "content": "utiles", "dynamic": false, "spread": false }], [{ "content": "tiempo", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/utiles/tiempo.astro", "pathname": "/utiles/tiempo", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/utiles/[slug]", "isIndex": false, "type": "page", "pattern": "^\\/utiles\\/([^/]+?)\\/$", "segments": [[{ "content": "utiles", "dynamic": false, "spread": false }], [{ "content": "slug", "dynamic": true, "spread": false }]], "params": ["slug"], "component": "src/pages/utiles/[slug].astro", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/utiles", "isIndex": true, "type": "page", "pattern": "^\\/utiles\\/$", "segments": [[{ "content": "utiles", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/utiles/index.astro", "pathname": "/utiles", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/varios/edad", "isIndex": false, "type": "page", "pattern": "^\\/varios\\/edad\\/$", "segments": [[{ "content": "varios", "dynamic": false, "spread": false }], [{ "content": "edad", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/varios/edad.astro", "pathname": "/varios/edad", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/", "isIndex": true, "type": "page", "pattern": "^\\/$", "segments": [], "params": [], "component": "src/pages/index.astro", "pathname": "/", "prerender": false, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "always" } } }];
serializedData.map(deserializeRouteInfo);
const _page0 = () => import("./generic_CQNM1VGf.mjs").then((n2) => n2.g);
const _page1 = () => import("./contacto_BXL_ZAQm.mjs");
const _page2 = () => import("./aguinaldo_ZNApt2Dr.mjs");
const _page3 = () => import("./ahorro-jubilacion_Cmwk3Hwn.mjs");
const _page4 = () => import("./amortizacion-prestamo_DxwheGBS.mjs");
const _page5 = () => import("./calculadora-dividendos_DftPQeOP.mjs");
const _page6 = () => import("./comprar-vs-alquilar_D798bRia.mjs");
const _page7 = () => import("./costo-auto_BprfZUMK.mjs");
const _page8 = () => import("./cuota-maxima_BcB1Ibm4.mjs");
const _page9 = () => import("./cuotas_DWMyHzR1.mjs");
const _page10 = () => import("./dolar-tarjeta_BAYI7dPd.mjs");
const _page11 = () => import("./ganancias_UmajRfv2.mjs");
const _page12 = () => import("./indemnizacion_Djrok2gE.mjs");
const _page13 = () => import("./inflacion_e3NnNzx4.mjs");
const _page14 = () => import("./inflacion-acumulada_B8qGzAGD.mjs");
const _page15 = () => import("./interes-compuesto_By3e-20o.mjs");
const _page16 = () => import("./interes-mora_D_GZ4FlW.mjs");
const _page17 = () => import("./interes-simple_BjpLC8KF.mjs");
const _page18 = () => import("./iva_BilLXZYx.mjs");
const _page19 = () => import("./meta-ahorro_DWLax5n_.mjs");
const _page20 = () => import("./perdida-poder-adquisitivo_Cbv2RO6c.mjs");
const _page21 = () => import("./plazo-fijo_0Jv7ZZGU.mjs");
const _page22 = () => import("./porcentaje_B7_EDevP.mjs");
const _page23 = () => import("./prestamo_DaeGowwE.mjs");
const _page24 = () => import("./regla-50-30-20_D3gI2V6e.mjs");
const _page25 = () => import("./regla-del-72_CYk3j2dQ.mjs");
const _page26 = () => import("./rendimiento-inversion_C-A9XOgV.mjs");
const _page27 = () => import("./retiro-fire_C70Fa4Q8.mjs");
const _page28 = () => import("./tasa-de-retorno_CHq522r2.mjs");
const _page29 = () => import("./tasas-tna-tea_Bo5YC-5P.mjs");
const _page30 = () => import("./vacaciones_amXFOqff.mjs");
const _page31 = () => import("./valor-futuro_Bu9_08yO.mjs");
const _page32 = () => import("./valor-presente_D7hkfRxF.mjs");
const _page33 = () => import("./aire-acondicionado_C1dE5mfY.mjs");
const _page34 = () => import("./consumo-electrico_Cd2aqYo4.mjs");
const _page35 = () => import("./hormigon_BZmezCZm.mjs");
const _page36 = () => import("./ladrillos_DMUnyMzD.mjs");
const _page37 = () => import("./luz_CL4DTZvB.mjs");
const _page38 = () => import("./metros-cuadrados_DPt9gO-6.mjs");
const _page39 = () => import("./pintura_DR1fvcUL.mjs");
const _page40 = () => import("./areas_BjlJK7ib.mjs");
const _page41 = () => import("./calculadora-binomial_CFtxK7he.mjs");
const _page42 = () => import("./calculadora-combinatoria_DYVaRlwY.mjs");
const _page43 = () => import("./calculadora-de-angulos_DfgAp6dp.mjs");
const _page44 = () => import("./calculadora-de-volumenes_DvPSvrUc.mjs");
const _page45 = () => import("./calculadora-divisores_C0wJ-Zsl.mjs");
const _page46 = () => import("./calculadora-matrices_Cfjb6zaA.mjs");
const _page47 = () => import("./calculadora-numeros-primos_ss6QEm9d.mjs");
const _page48 = () => import("./calculadora-percentil_CYEfOGhq.mjs");
const _page49 = () => import("./calculadora-porcentil_CXO-FPim.mjs");
const _page50 = () => import("./calculadora-potencia_Ds72TAE9.mjs");
const _page51 = () => import("./calculadora-probabilidad_BQi4_6Ln.mjs");
const _page52 = () => import("./calculadora-proporcion_BxpMFgid.mjs");
const _page53 = () => import("./calculadora-raiz-cuadrada_BO1H94vq.mjs");
const _page54 = () => import("./calculadora-raiz-cubica_CyEy6roT.mjs");
const _page55 = () => import("./circulo_kGZyqDlW.mjs");
const _page56 = () => import("./combinaciones-permutaciones_C0wl4gNc.mjs");
const _page57 = () => import("./conversor-bases_qlB_orE6.mjs");
const _page58 = () => import("./decimal-a-fraccion_DqqOLxrO.mjs");
const _page59 = () => import("./decremento-porcentual_Dl0R9cje.mjs");
const _page60 = () => import("./desviacion-media_BYeR6tX9.mjs");
const _page61 = () => import("./ecuaciones-segundo-grado_CdTQtgOy.mjs");
const _page62 = () => import("./factorial_a2e9iNc6.mjs");
const _page63 = () => import("./fraccion-a-decimal_C9RcN0sP.mjs");
const _page64 = () => import("./incremento-porcentual_DdCSFFnk.mjs");
const _page65 = () => import("./logaritmos_CNtRNUGd.mjs");
const _page66 = () => import("./mcm-mcd_TLp8yddd.mjs");
const _page67 = () => import("./media-ponderada_Berf6kQm.mjs");
const _page68 = () => import("./notacion-cientifica_DKsIoIpj.mjs");
const _page69 = () => import("./pitagoras_D8Bh4gs6.mjs");
const _page70 = () => import("./porcentaje-inverso_BKcUqYBS.mjs");
const _page71 = () => import("./promedio-mediana-moda_zGq5-1oa.mjs");
const _page72 = () => import("./rango-estadistico_CX-e-tuR.mjs");
const _page73 = () => import("./regla-de-tres_nxE9tFtS.mjs");
const _page74 = () => import("./sistemas-ecuaciones_Dap6-LpD.mjs");
const _page75 = () => import("./triangulo_9zqQG6Me.mjs");
const _page76 = () => import("./varianza-desviacion-estandar_DSnjskJG.mjs");
const _page77 = () => import("./comisiones_BU8dmTqY.mjs");
const _page78 = () => import("./margen_Z1Zf1LgY.mjs");
const _page79 = () => import("./markup-margen_Be6cdTux.mjs");
const _page80 = () => import("./precio-venta_BeT80rgE.mjs");
const _page81 = () => import("./punto-equilibrio_CsBBgZ40.mjs");
const _page82 = () => import("./tarifa-freelance_C5BqBZuE.mjs");
const _page83 = () => import("./valor-de-tu-hora_BVMfQ1FW.mjs");
const _page84 = () => import("./privacidad_B2I8cTrc.mjs");
const _page85 = () => import("./agua_KQ-1Mo3p.mjs");
const _page86 = () => import("./calorias_Bnc_sbAT.mjs");
const _page87 = () => import("./dejar-de-fumar_RFJp3C90.mjs");
const _page88 = () => import("./embarazo_UBA8MdDx.mjs");
const _page89 = () => import("./frecuencia-cardiaca_ByVT-55k.mjs");
const _page90 = () => import("./imc_BcZOCmhO.mjs");
const _page91 = () => import("./keto_c8_ocLlt.mjs");
const _page92 = () => import("./ovulacion_Btr8Fu8o.mjs");
const _page93 = () => import("./proteina_CvlKzol1.mjs");
const _page94 = () => import("./volumen-definicion_BV2o01Bd.mjs");
const _page95 = () => import("./analizador-parrafos_Cc5bzesr.mjs");
const _page96 = () => import("./analizador-repeticion_CDEv4pwY.mjs");
const _page97 = () => import("./analizador-titulos_HPw_3Pnp.mjs");
const _page98 = () => import("./anchor-text-ratio_CQJJMTNu.mjs");
const _page99 = () => import("./calculadora-alcance_CViRxgsB.mjs");
const _page100 = () => import("./calculadora-cpa_Cnp3DXc6.mjs");
const _page101 = () => import("./calculadora-cpc_Cep776O1.mjs");
const _page102 = () => import("./calculadora-cpl_CFMGVEwr.mjs");
const _page103 = () => import("./calculadora-cpm_DK9eb0ET.mjs");
const _page104 = () => import("./calculadora-ctr_B73IPHV7.mjs");
const _page105 = () => import("./contador-caracteres_CLqzhYk1.mjs");
const _page106 = () => import("./contador-caracteres-sin-espacios_Bx_lIt-H.mjs");
const _page107 = () => import("./contador-encabezados_DFyKy1ha.mjs");
const _page108 = () => import("./contador-frases_BU0L1VG3.mjs");
const _page109 = () => import("./contador-hashtags_C6j3oQyS.mjs");
const _page110 = () => import("./contador-keywords_DBol08dS.mjs");
const _page111 = () => import("./contador-palabras_BN3PUxaQ.mjs");
const _page112 = () => import("./densidad-enlaces-internos_DFmQ--5w.mjs");
const _page113 = () => import("./densidad-keyword_BGe4h-yK.mjs");
const _page114 = () => import("./engagement-rate_Cx3sGoKO.mjs");
const _page115 = () => import("./frecuencia-palabras_TmOxYIlD.mjs");
const _page116 = () => import("./frecuencia-publicitaria_DrGjfC5D.mjs");
const _page117 = () => import("./generador-slug_C-1CdZ1q.mjs");
const _page118 = () => import("./longitud-meta-description_CeAb__ot.mjs");
const _page119 = () => import("./longitud-titulo-seo_C__ihR2F.mjs");
const _page120 = () => import("./radio-texto-html-_CpYFIxP2.mjs");
const _page121 = () => import("./roi-marketing_DE1On-za.mjs");
const _page122 = () => import("./tasa-conversion_BFMIda51.mjs");
const _page123 = () => import("./tiempo-de-lectura_CMTkEsnN.mjs");
const _page124 = () => import("./tiempo-lectura_Cz5pFrmF.mjs");
const _page125 = () => import("./tiempo-ranking-seo_CgE7liKY.mjs");
const _page126 = () => import("./bytes-a-mb_Dy0CRDeh.mjs");
const _page127 = () => import("./cm-a-pulgadas_BkBUVQ7m.mjs");
const _page128 = () => import("./conversor-temperatura_C6EYldSW.mjs");
const _page129 = () => import("./conversor-velocidad_BmOB5ANP.mjs");
const _page130 = () => import("./gal-to-l_zpquuWN2.mjs");
const _page131 = () => import("./horas-a-dias_hCbua-f6.mjs");
const _page132 = () => import("./kg-to-lb_DdZy39LS.mjs");
const _page133 = () => import("./km-a-millas_CywAe4nM.mjs");
const _page134 = () => import("./lb-to-kg_CrPYZmXn.mjs");
const _page135 = () => import("./litros-a-galones_C38lKTCa.mjs");
const _page136 = () => import("./m2-a-ft2_ClgHeyT_.mjs");
const _page137 = () => import("./mb-a-gb_DyFg61Gv.mjs");
const _page138 = () => import("./metros-a-pies_CTmFhSk4.mjs");
const _page139 = () => import("./miles-to-km_D2boa9QI.mjs");
const _page140 = () => import("./minutos-a-horas_D_psYAlO.mjs");
const _page141 = () => import("./pies-a-metros_CLP41U5J.mjs");
const _page142 = () => import("./pies-cuadrados-a-metros-cuadrados_CESYHYfO.mjs");
const _page143 = () => import("./pulgadas-a-cm_3luFZ8f-.mjs");
const _page144 = () => import("./segundos-a-horas_B5187azZ.mjs");
const _page145 = () => import("./semanas-a-meses_vLMOxHZ3.mjs");
const _page146 = () => import("./asado_sg1PzGjR.mjs");
const _page147 = () => import("./bebidas_Dbbb4NmC.mjs");
const _page148 = () => import("./calculadora-beneficio-unidad_u4yM74f6.mjs");
const _page149 = () => import("./calculadora-costos-fijos-variables_DuldACgX.mjs");
const _page150 = () => import("./calculadora-crecimiento-ventas_Dq88KVAM.mjs");
const _page151 = () => import("./calculadora-de-escalas_DIcKIoxP.mjs");
const _page152 = () => import("./calculadora-de-markup_DP_jJY12.mjs");
const _page153 = () => import("./calculadora-de-proporciones_COK1kjTA.mjs");
const _page154 = () => import("./calculadora-desviacion-estandar_jovixchW.mjs");
const _page155 = () => import("./calculadora-fecha-futura_BmSuJz-l.mjs");
const _page156 = () => import("./calculadora-fecha-pasada_dGDpReEz.mjs");
const _page157 = () => import("./calculadora-flujo-de-caja_BrYS9991.mjs");
const _page158 = () => import("./calculadora-impuestos-ventas_BmzGltlI.mjs");
const _page159 = () => import("./calculadora-inventario-ideal_ngPP12Eo.mjs");
const _page160 = () => import("./calculadora-inversion-aportes-periodicos_BuNNQkRF.mjs");
const _page161 = () => import("./calculadora-ltv_NKavKNoE.mjs");
const _page162 = () => import("./calculadora-margen-bruto_CcBc__Jj.mjs");
const _page163 = () => import("./calculadora-margen-neto_MxPzkVxa.mjs");
const _page164 = () => import("./calculadora-percentil_16I_fmwn.mjs");
const _page165 = () => import("./calculadora-rentabilidad-ecommerce_7_YRUu2S.mjs");
const _page166 = () => import("./calculadora-rentabilidad-negocio_ChaJnKOS.mjs");
const _page167 = () => import("./calculadora-rentabilidad-producto_8BPccddI.mjs");
const _page168 = () => import("./calculadora-roas_11jC35oW.mjs");
const _page169 = () => import("./calculadora-ticket-promedio_BtuVjouH.mjs");
const _page170 = () => import("./combustible_rDUizmEn.mjs");
const _page171 = () => import("./contador-de-caracteres_Dm0kRYDQ.mjs");
const _page172 = () => import("./contador-de-letras_DJ2tYhGS.mjs");
const _page173 = () => import("./contador-de-palabras-unicas__eF0p3LU.mjs");
const _page174 = () => import("./contador-de-vocales_DxFQ9T_S.mjs");
const _page175 = () => import("./contador-dias-cumpleanos_CmOs_DgR.mjs");
const _page176 = () => import("./contador-dias-navidad_CuKHYfzA.mjs");
const _page177 = () => import("./costo-por-uso_CCTvAQu6.mjs");
const _page178 = () => import("./descuento-doble_BLR3pvcl.mjs");
const _page179 = () => import("./descuentos_fqkOL54G.mjs");
const _page180 = () => import("./dias-habiles_BGHvoV9q.mjs");
const _page181 = () => import("./diezmo_DE0wzjxM.mjs");
const _page182 = () => import("./diferencia-entre-fechas_BgS-OAgu.mjs");
const _page183 = () => import("./dividir-cuenta_B42En45F.mjs");
const _page184 = () => import("./ecuaciones_BIL8gvQo.mjs");
const _page185 = () => import("./edad-mascotas_DRXiOThj.mjs");
const _page186 = () => import("./fracciones_D59Vy5iF.mjs");
const _page187 = () => import("./gastos-compartidos_CPar4fhH.mjs");
const _page188 = () => import("./generador-contrasenas_CyZl0ds5.mjs");
const _page189 = () => import("./horas_CpUHUSuh.mjs");
const _page190 = () => import("./millas-a-km_BP97mVKJ.mjs");
const _page191 = () => import("./propina_CY7M_jbP.mjs");
const _page192 = () => import("./tiempo_BE-jLxiv.mjs");
const _page193 = () => import("./_slug__DZcczHdE.mjs");
const _page194 = () => import("./index_B8kp-aqE.mjs");
const _page195 = () => import("./edad_C2TQod9g.mjs");
const _page196 = () => import("./index_D8bGbXUv.mjs");
const pageMap = /* @__PURE__ */ new Map([
  ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
  ["src/pages/contacto.astro", _page1],
  ["src/pages/finanzas/aguinaldo.astro", _page2],
  ["src/pages/finanzas/ahorro-jubilacion.astro", _page3],
  ["src/pages/finanzas/amortizacion-prestamo.astro", _page4],
  ["src/pages/finanzas/calculadora-dividendos.astro", _page5],
  ["src/pages/finanzas/comprar-vs-alquilar.astro", _page6],
  ["src/pages/finanzas/costo-auto.astro", _page7],
  ["src/pages/finanzas/cuota-maxima.astro", _page8],
  ["src/pages/finanzas/cuotas.astro", _page9],
  ["src/pages/finanzas/dolar-tarjeta.astro", _page10],
  ["src/pages/finanzas/ganancias.astro", _page11],
  ["src/pages/finanzas/indemnizacion.astro", _page12],
  ["src/pages/finanzas/inflacion.astro", _page13],
  ["src/pages/finanzas/inflacion-acumulada.astro", _page14],
  ["src/pages/finanzas/interes-compuesto.astro", _page15],
  ["src/pages/finanzas/interes-mora.astro", _page16],
  ["src/pages/finanzas/interes-simple.astro", _page17],
  ["src/pages/finanzas/iva.astro", _page18],
  ["src/pages/finanzas/meta-ahorro.astro", _page19],
  ["src/pages/finanzas/perdida-poder-adquisitivo.astro", _page20],
  ["src/pages/finanzas/plazo-fijo.astro", _page21],
  ["src/pages/finanzas/porcentaje.astro", _page22],
  ["src/pages/finanzas/prestamo.astro", _page23],
  ["src/pages/finanzas/regla-50-30-20.astro", _page24],
  ["src/pages/finanzas/regla-del-72.astro", _page25],
  ["src/pages/finanzas/rendimiento-inversion.astro", _page26],
  ["src/pages/finanzas/retiro-fire.astro", _page27],
  ["src/pages/finanzas/tasa-de-retorno.astro", _page28],
  ["src/pages/finanzas/tasas-tna-tea.astro", _page29],
  ["src/pages/finanzas/vacaciones.astro", _page30],
  ["src/pages/finanzas/valor-futuro.astro", _page31],
  ["src/pages/finanzas/valor-presente.astro", _page32],
  ["src/pages/hogar/aire-acondicionado.astro", _page33],
  ["src/pages/hogar/consumo-electrico.astro", _page34],
  ["src/pages/hogar/hormigon.astro", _page35],
  ["src/pages/hogar/ladrillos.astro", _page36],
  ["src/pages/hogar/luz.astro", _page37],
  ["src/pages/hogar/metros-cuadrados.astro", _page38],
  ["src/pages/hogar/pintura.astro", _page39],
  ["src/pages/matematica/areas.astro", _page40],
  ["src/pages/matematica/calculadora-binomial.astro", _page41],
  ["src/pages/matematica/calculadora-combinatoria.astro", _page42],
  ["src/pages/matematica/calculadora-de-angulos.astro", _page43],
  ["src/pages/matematica/calculadora-de-volumenes.astro", _page44],
  ["src/pages/matematica/calculadora-divisores.astro", _page45],
  ["src/pages/matematica/calculadora-matrices.astro", _page46],
  ["src/pages/matematica/calculadora-numeros-primos.astro", _page47],
  ["src/pages/matematica/calculadora-percentil.astro", _page48],
  ["src/pages/matematica/calculadora-porcentil.astro", _page49],
  ["src/pages/matematica/calculadora-potencia.astro", _page50],
  ["src/pages/matematica/calculadora-probabilidad.astro", _page51],
  ["src/pages/matematica/calculadora-proporcion.astro", _page52],
  ["src/pages/matematica/calculadora-raiz-cuadrada.astro", _page53],
  ["src/pages/matematica/calculadora-raiz-cubica.astro", _page54],
  ["src/pages/matematica/circulo.astro", _page55],
  ["src/pages/matematica/combinaciones-permutaciones.astro", _page56],
  ["src/pages/matematica/conversor-bases.astro", _page57],
  ["src/pages/matematica/decimal-a-fraccion.astro", _page58],
  ["src/pages/matematica/decremento-porcentual.astro", _page59],
  ["src/pages/matematica/desviacion-media.astro", _page60],
  ["src/pages/matematica/ecuaciones-segundo-grado.astro", _page61],
  ["src/pages/matematica/factorial.astro", _page62],
  ["src/pages/matematica/fraccion-a-decimal.astro", _page63],
  ["src/pages/matematica/incremento-porcentual.astro", _page64],
  ["src/pages/matematica/logaritmos.astro", _page65],
  ["src/pages/matematica/mcm-mcd.astro", _page66],
  ["src/pages/matematica/media-ponderada.astro", _page67],
  ["src/pages/matematica/notacion-cientifica.astro", _page68],
  ["src/pages/matematica/pitagoras.astro", _page69],
  ["src/pages/matematica/porcentaje-inverso.astro", _page70],
  ["src/pages/matematica/promedio-mediana-moda.astro", _page71],
  ["src/pages/matematica/rango-estadistico.astro", _page72],
  ["src/pages/matematica/regla-de-tres.astro", _page73],
  ["src/pages/matematica/sistemas-ecuaciones.astro", _page74],
  ["src/pages/matematica/triangulo.astro", _page75],
  ["src/pages/matematica/varianza-desviacion-estandar.astro", _page76],
  ["src/pages/negocios/comisiones.astro", _page77],
  ["src/pages/negocios/margen.astro", _page78],
  ["src/pages/negocios/markup-margen.astro", _page79],
  ["src/pages/negocios/precio-venta.astro", _page80],
  ["src/pages/negocios/punto-equilibrio.astro", _page81],
  ["src/pages/negocios/tarifa-freelance.astro", _page82],
  ["src/pages/negocios/valor-de-tu-hora.astro", _page83],
  ["src/pages/privacidad.astro", _page84],
  ["src/pages/salud/agua.astro", _page85],
  ["src/pages/salud/calorias.astro", _page86],
  ["src/pages/salud/dejar-de-fumar.astro", _page87],
  ["src/pages/salud/embarazo.astro", _page88],
  ["src/pages/salud/frecuencia-cardiaca.astro", _page89],
  ["src/pages/salud/imc.astro", _page90],
  ["src/pages/salud/keto.astro", _page91],
  ["src/pages/salud/ovulacion.astro", _page92],
  ["src/pages/salud/proteina.astro", _page93],
  ["src/pages/salud/volumen-definicion.astro", _page94],
  ["src/pages/seo/analizador-parrafos.astro", _page95],
  ["src/pages/seo/analizador-repeticion.astro", _page96],
  ["src/pages/seo/analizador-titulos.astro", _page97],
  ["src/pages/seo/anchor-text-ratio.astro", _page98],
  ["src/pages/seo/calculadora-alcance.astro", _page99],
  ["src/pages/seo/calculadora-cpa.astro", _page100],
  ["src/pages/seo/calculadora-cpc.astro", _page101],
  ["src/pages/seo/calculadora-cpl.astro", _page102],
  ["src/pages/seo/calculadora-cpm.astro", _page103],
  ["src/pages/seo/calculadora-ctr.astro", _page104],
  ["src/pages/seo/contador-caracteres.astro", _page105],
  ["src/pages/seo/contador-caracteres-sin-espacios.astro", _page106],
  ["src/pages/seo/contador-encabezados.astro", _page107],
  ["src/pages/seo/contador-frases.astro", _page108],
  ["src/pages/seo/contador-hashtags.astro", _page109],
  ["src/pages/seo/contador-keywords.astro", _page110],
  ["src/pages/seo/contador-palabras.astro", _page111],
  ["src/pages/seo/densidad-enlaces-internos.astro", _page112],
  ["src/pages/seo/densidad-keyword.astro", _page113],
  ["src/pages/seo/engagement-rate.astro", _page114],
  ["src/pages/seo/frecuencia-palabras.astro", _page115],
  ["src/pages/seo/frecuencia-publicitaria.astro", _page116],
  ["src/pages/seo/generador-slug.astro", _page117],
  ["src/pages/seo/longitud-meta-description.astro", _page118],
  ["src/pages/seo/longitud-titulo-seo.astro", _page119],
  ["src/pages/seo/radio-texto-html-.astro", _page120],
  ["src/pages/seo/roi-marketing.astro", _page121],
  ["src/pages/seo/tasa-conversion.astro", _page122],
  ["src/pages/seo/tiempo-de-lectura.astro", _page123],
  ["src/pages/seo/tiempo-lectura.astro", _page124],
  ["src/pages/seo/tiempo-ranking-seo.astro", _page125],
  ["src/pages/unidades/bytes-a-mb.astro", _page126],
  ["src/pages/unidades/cm-a-pulgadas.astro", _page127],
  ["src/pages/unidades/conversor-temperatura.astro", _page128],
  ["src/pages/unidades/conversor-velocidad.astro", _page129],
  ["src/pages/unidades/gal-to-l.astro", _page130],
  ["src/pages/unidades/horas-a-dias.astro", _page131],
  ["src/pages/unidades/kg-to-lb.astro", _page132],
  ["src/pages/unidades/km-a-millas.astro", _page133],
  ["src/pages/unidades/lb-to-kg.astro", _page134],
  ["src/pages/unidades/litros-a-galones.astro", _page135],
  ["src/pages/unidades/m2-a-ft2.astro", _page136],
  ["src/pages/unidades/mb-a-gb.astro", _page137],
  ["src/pages/unidades/metros-a-pies.astro", _page138],
  ["src/pages/unidades/miles-to-km.astro", _page139],
  ["src/pages/unidades/minutos-a-horas.astro", _page140],
  ["src/pages/unidades/pies-a-metros.astro", _page141],
  ["src/pages/unidades/pies-cuadrados-a-metros-cuadrados.astro", _page142],
  ["src/pages/unidades/pulgadas-a-cm.astro", _page143],
  ["src/pages/unidades/segundos-a-horas.astro", _page144],
  ["src/pages/unidades/semanas-a-meses.astro", _page145],
  ["src/pages/utiles/asado.astro", _page146],
  ["src/pages/utiles/bebidas.astro", _page147],
  ["src/pages/utiles/calculadora-beneficio-unidad.astro", _page148],
  ["src/pages/utiles/calculadora-costos-fijos-variables.astro", _page149],
  ["src/pages/utiles/calculadora-crecimiento-ventas.astro", _page150],
  ["src/pages/utiles/calculadora-de-escalas.astro", _page151],
  ["src/pages/utiles/calculadora-de-markup.astro", _page152],
  ["src/pages/utiles/calculadora-de-proporciones.astro", _page153],
  ["src/pages/utiles/calculadora-desviacion-estandar.astro", _page154],
  ["src/pages/utiles/calculadora-fecha-futura.astro", _page155],
  ["src/pages/utiles/calculadora-fecha-pasada.astro", _page156],
  ["src/pages/utiles/calculadora-flujo-de-caja.astro", _page157],
  ["src/pages/utiles/calculadora-impuestos-ventas.astro", _page158],
  ["src/pages/utiles/calculadora-inventario-ideal.astro", _page159],
  ["src/pages/utiles/calculadora-inversion-aportes-periodicos.astro", _page160],
  ["src/pages/utiles/calculadora-ltv.astro", _page161],
  ["src/pages/utiles/calculadora-margen-bruto.astro", _page162],
  ["src/pages/utiles/calculadora-margen-neto.astro", _page163],
  ["src/pages/utiles/calculadora-percentil.astro", _page164],
  ["src/pages/utiles/calculadora-rentabilidad-ecommerce.astro", _page165],
  ["src/pages/utiles/calculadora-rentabilidad-negocio.astro", _page166],
  ["src/pages/utiles/calculadora-rentabilidad-producto.astro", _page167],
  ["src/pages/utiles/calculadora-roas.astro", _page168],
  ["src/pages/utiles/calculadora-ticket-promedio.astro", _page169],
  ["src/pages/utiles/combustible.astro", _page170],
  ["src/pages/utiles/contador-de-caracteres.astro", _page171],
  ["src/pages/utiles/contador-de-letras.astro", _page172],
  ["src/pages/utiles/contador-de-palabras-unicas.astro", _page173],
  ["src/pages/utiles/contador-de-vocales.astro", _page174],
  ["src/pages/utiles/contador-dias-cumpleanos.astro", _page175],
  ["src/pages/utiles/contador-dias-navidad.astro", _page176],
  ["src/pages/utiles/costo-por-uso.astro", _page177],
  ["src/pages/utiles/descuento-doble.astro", _page178],
  ["src/pages/utiles/descuentos.astro", _page179],
  ["src/pages/utiles/dias-habiles.astro", _page180],
  ["src/pages/utiles/diezmo.astro", _page181],
  ["src/pages/utiles/diferencia-entre-fechas.astro", _page182],
  ["src/pages/utiles/dividir-cuenta.astro", _page183],
  ["src/pages/utiles/ecuaciones.astro", _page184],
  ["src/pages/utiles/edad-mascotas.astro", _page185],
  ["src/pages/utiles/fracciones.astro", _page186],
  ["src/pages/utiles/gastos-compartidos.astro", _page187],
  ["src/pages/utiles/generador-contrasenas.astro", _page188],
  ["src/pages/utiles/horas.astro", _page189],
  ["src/pages/utiles/millas-a-km.astro", _page190],
  ["src/pages/utiles/propina.astro", _page191],
  ["src/pages/utiles/tiempo.astro", _page192],
  ["src/pages/utiles/[slug].astro", _page193],
  ["src/pages/utiles/index.astro", _page194],
  ["src/pages/varios/edad.astro", _page195],
  ["src/pages/index.astro", _page196]
]);
const _manifest = deserializeManifest({"rootDir":"file:///C:/proyectos/seo-tools/","cacheDir":"file:///C:/proyectos/seo-tools/node_modules/.astro/","outDir":"file:///C:/proyectos/seo-tools/dist/","srcDir":"file:///C:/proyectos/seo-tools/src/","publicDir":"file:///C:/proyectos/seo-tools/public/","buildClientDir":"file:///C:/proyectos/seo-tools/dist/client/","buildServerDir":"file:///C:/proyectos/seo-tools/dist/server/","adapterName":"@astrojs/cloudflare","assetsDir":"_astro","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","distURL":[],"_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/_image","component":"node_modules/astro/dist/assets/endpoint/generic.js","params":[],"pathname":"/_image","pattern":"^\\/_image\\/$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"type":"endpoint","prerender":false,"fallbackRoutes":[],"distURL":[],"isIndex":false,"origin":"internal","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/contacto","isIndex":false,"type":"page","pattern":"^\\/contacto\\/$","segments":[[{"content":"contacto","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contacto.astro","pathname":"/contacto","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/finanzas/aguinaldo","isIndex":false,"type":"page","pattern":"^\\/finanzas\\/aguinaldo\\/$","segments":[[{"content":"finanzas","dynamic":false,"spread":false}],[{"content":"aguinaldo","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/finanzas/aguinaldo.astro","pathname":"/finanzas/aguinaldo","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/finanzas/ahorro-jubilacion","isIndex":false,"type":"page","pattern":"^\\/finanzas\\/ahorro-jubilacion\\/$","segments":[[{"content":"finanzas","dynamic":false,"spread":false}],[{"content":"ahorro-jubilacion","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/finanzas/ahorro-jubilacion.astro","pathname":"/finanzas/ahorro-jubilacion","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/finanzas/amortizacion-prestamo","isIndex":false,"type":"page","pattern":"^\\/finanzas\\/amortizacion-prestamo\\/$","segments":[[{"content":"finanzas","dynamic":false,"spread":false}],[{"content":"amortizacion-prestamo","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/finanzas/amortizacion-prestamo.astro","pathname":"/finanzas/amortizacion-prestamo","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/finanzas/calculadora-dividendos","isIndex":false,"type":"page","pattern":"^\\/finanzas\\/calculadora-dividendos\\/$","segments":[[{"content":"finanzas","dynamic":false,"spread":false}],[{"content":"calculadora-dividendos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/finanzas/calculadora-dividendos.astro","pathname":"/finanzas/calculadora-dividendos","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/finanzas/comprar-vs-alquilar","isIndex":false,"type":"page","pattern":"^\\/finanzas\\/comprar-vs-alquilar\\/$","segments":[[{"content":"finanzas","dynamic":false,"spread":false}],[{"content":"comprar-vs-alquilar","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/finanzas/comprar-vs-alquilar.astro","pathname":"/finanzas/comprar-vs-alquilar","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/finanzas/costo-auto","isIndex":false,"type":"page","pattern":"^\\/finanzas\\/costo-auto\\/$","segments":[[{"content":"finanzas","dynamic":false,"spread":false}],[{"content":"costo-auto","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/finanzas/costo-auto.astro","pathname":"/finanzas/costo-auto","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/finanzas/cuota-maxima","isIndex":false,"type":"page","pattern":"^\\/finanzas\\/cuota-maxima\\/$","segments":[[{"content":"finanzas","dynamic":false,"spread":false}],[{"content":"cuota-maxima","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/finanzas/cuota-maxima.astro","pathname":"/finanzas/cuota-maxima","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/finanzas/cuotas","isIndex":false,"type":"page","pattern":"^\\/finanzas\\/cuotas\\/$","segments":[[{"content":"finanzas","dynamic":false,"spread":false}],[{"content":"cuotas","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/finanzas/cuotas.astro","pathname":"/finanzas/cuotas","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/finanzas/dolar-tarjeta","isIndex":false,"type":"page","pattern":"^\\/finanzas\\/dolar-tarjeta\\/$","segments":[[{"content":"finanzas","dynamic":false,"spread":false}],[{"content":"dolar-tarjeta","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/finanzas/dolar-tarjeta.astro","pathname":"/finanzas/dolar-tarjeta","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/finanzas/ganancias","isIndex":false,"type":"page","pattern":"^\\/finanzas\\/ganancias\\/$","segments":[[{"content":"finanzas","dynamic":false,"spread":false}],[{"content":"ganancias","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/finanzas/ganancias.astro","pathname":"/finanzas/ganancias","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/finanzas/indemnizacion","isIndex":false,"type":"page","pattern":"^\\/finanzas\\/indemnizacion\\/$","segments":[[{"content":"finanzas","dynamic":false,"spread":false}],[{"content":"indemnizacion","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/finanzas/indemnizacion.astro","pathname":"/finanzas/indemnizacion","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/finanzas/inflacion","isIndex":false,"type":"page","pattern":"^\\/finanzas\\/inflacion\\/$","segments":[[{"content":"finanzas","dynamic":false,"spread":false}],[{"content":"inflacion","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/finanzas/inflacion.astro","pathname":"/finanzas/inflacion","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/finanzas/inflacion-acumulada","isIndex":false,"type":"page","pattern":"^\\/finanzas\\/inflacion-acumulada\\/$","segments":[[{"content":"finanzas","dynamic":false,"spread":false}],[{"content":"inflacion-acumulada","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/finanzas/inflacion-acumulada.astro","pathname":"/finanzas/inflacion-acumulada","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"},{"type":"inline","content":".animate-fade-in[data-astro-cid-d5dnce4h]{animation:fadeIn .5s ease-out forwards}@keyframes fadeIn{0%{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}\n"}],"routeData":{"route":"/finanzas/interes-compuesto","isIndex":false,"type":"page","pattern":"^\\/finanzas\\/interes-compuesto\\/$","segments":[[{"content":"finanzas","dynamic":false,"spread":false}],[{"content":"interes-compuesto","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/finanzas/interes-compuesto.astro","pathname":"/finanzas/interes-compuesto","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/finanzas/interes-mora","isIndex":false,"type":"page","pattern":"^\\/finanzas\\/interes-mora\\/$","segments":[[{"content":"finanzas","dynamic":false,"spread":false}],[{"content":"interes-mora","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/finanzas/interes-mora.astro","pathname":"/finanzas/interes-mora","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/finanzas/interes-simple","isIndex":false,"type":"page","pattern":"^\\/finanzas\\/interes-simple\\/$","segments":[[{"content":"finanzas","dynamic":false,"spread":false}],[{"content":"interes-simple","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/finanzas/interes-simple.astro","pathname":"/finanzas/interes-simple","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/finanzas/iva","isIndex":false,"type":"page","pattern":"^\\/finanzas\\/iva\\/$","segments":[[{"content":"finanzas","dynamic":false,"spread":false}],[{"content":"iva","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/finanzas/iva.astro","pathname":"/finanzas/iva","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/finanzas/meta-ahorro","isIndex":false,"type":"page","pattern":"^\\/finanzas\\/meta-ahorro\\/$","segments":[[{"content":"finanzas","dynamic":false,"spread":false}],[{"content":"meta-ahorro","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/finanzas/meta-ahorro.astro","pathname":"/finanzas/meta-ahorro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/finanzas/perdida-poder-adquisitivo","isIndex":false,"type":"page","pattern":"^\\/finanzas\\/perdida-poder-adquisitivo\\/$","segments":[[{"content":"finanzas","dynamic":false,"spread":false}],[{"content":"perdida-poder-adquisitivo","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/finanzas/perdida-poder-adquisitivo.astro","pathname":"/finanzas/perdida-poder-adquisitivo","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/finanzas/plazo-fijo","isIndex":false,"type":"page","pattern":"^\\/finanzas\\/plazo-fijo\\/$","segments":[[{"content":"finanzas","dynamic":false,"spread":false}],[{"content":"plazo-fijo","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/finanzas/plazo-fijo.astro","pathname":"/finanzas/plazo-fijo","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/finanzas/porcentaje","isIndex":false,"type":"page","pattern":"^\\/finanzas\\/porcentaje\\/$","segments":[[{"content":"finanzas","dynamic":false,"spread":false}],[{"content":"porcentaje","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/finanzas/porcentaje.astro","pathname":"/finanzas/porcentaje","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/finanzas/prestamo","isIndex":false,"type":"page","pattern":"^\\/finanzas\\/prestamo\\/$","segments":[[{"content":"finanzas","dynamic":false,"spread":false}],[{"content":"prestamo","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/finanzas/prestamo.astro","pathname":"/finanzas/prestamo","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/finanzas/regla-50-30-20","isIndex":false,"type":"page","pattern":"^\\/finanzas\\/regla-50-30-20\\/$","segments":[[{"content":"finanzas","dynamic":false,"spread":false}],[{"content":"regla-50-30-20","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/finanzas/regla-50-30-20.astro","pathname":"/finanzas/regla-50-30-20","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/finanzas/regla-del-72","isIndex":false,"type":"page","pattern":"^\\/finanzas\\/regla-del-72\\/$","segments":[[{"content":"finanzas","dynamic":false,"spread":false}],[{"content":"regla-del-72","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/finanzas/regla-del-72.astro","pathname":"/finanzas/regla-del-72","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/finanzas/rendimiento-inversion","isIndex":false,"type":"page","pattern":"^\\/finanzas\\/rendimiento-inversion\\/$","segments":[[{"content":"finanzas","dynamic":false,"spread":false}],[{"content":"rendimiento-inversion","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/finanzas/rendimiento-inversion.astro","pathname":"/finanzas/rendimiento-inversion","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/finanzas/retiro-fire","isIndex":false,"type":"page","pattern":"^\\/finanzas\\/retiro-fire\\/$","segments":[[{"content":"finanzas","dynamic":false,"spread":false}],[{"content":"retiro-fire","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/finanzas/retiro-fire.astro","pathname":"/finanzas/retiro-fire","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/finanzas/tasa-de-retorno","isIndex":false,"type":"page","pattern":"^\\/finanzas\\/tasa-de-retorno\\/$","segments":[[{"content":"finanzas","dynamic":false,"spread":false}],[{"content":"tasa-de-retorno","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/finanzas/tasa-de-retorno.astro","pathname":"/finanzas/tasa-de-retorno","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/finanzas/tasas-tna-tea","isIndex":false,"type":"page","pattern":"^\\/finanzas\\/tasas-tna-tea\\/$","segments":[[{"content":"finanzas","dynamic":false,"spread":false}],[{"content":"tasas-tna-tea","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/finanzas/tasas-tna-tea.astro","pathname":"/finanzas/tasas-tna-tea","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/finanzas/vacaciones","isIndex":false,"type":"page","pattern":"^\\/finanzas\\/vacaciones\\/$","segments":[[{"content":"finanzas","dynamic":false,"spread":false}],[{"content":"vacaciones","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/finanzas/vacaciones.astro","pathname":"/finanzas/vacaciones","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/finanzas/valor-futuro","isIndex":false,"type":"page","pattern":"^\\/finanzas\\/valor-futuro\\/$","segments":[[{"content":"finanzas","dynamic":false,"spread":false}],[{"content":"valor-futuro","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/finanzas/valor-futuro.astro","pathname":"/finanzas/valor-futuro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/finanzas/valor-presente","isIndex":false,"type":"page","pattern":"^\\/finanzas\\/valor-presente\\/$","segments":[[{"content":"finanzas","dynamic":false,"spread":false}],[{"content":"valor-presente","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/finanzas/valor-presente.astro","pathname":"/finanzas/valor-presente","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/hogar/aire-acondicionado","isIndex":false,"type":"page","pattern":"^\\/hogar\\/aire-acondicionado\\/$","segments":[[{"content":"hogar","dynamic":false,"spread":false}],[{"content":"aire-acondicionado","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/hogar/aire-acondicionado.astro","pathname":"/hogar/aire-acondicionado","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/hogar/consumo-electrico","isIndex":false,"type":"page","pattern":"^\\/hogar\\/consumo-electrico\\/$","segments":[[{"content":"hogar","dynamic":false,"spread":false}],[{"content":"consumo-electrico","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/hogar/consumo-electrico.astro","pathname":"/hogar/consumo-electrico","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/hogar/hormigon","isIndex":false,"type":"page","pattern":"^\\/hogar\\/hormigon\\/$","segments":[[{"content":"hogar","dynamic":false,"spread":false}],[{"content":"hormigon","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/hogar/hormigon.astro","pathname":"/hogar/hormigon","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/hogar/ladrillos","isIndex":false,"type":"page","pattern":"^\\/hogar\\/ladrillos\\/$","segments":[[{"content":"hogar","dynamic":false,"spread":false}],[{"content":"ladrillos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/hogar/ladrillos.astro","pathname":"/hogar/ladrillos","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/hogar/luz","isIndex":false,"type":"page","pattern":"^\\/hogar\\/luz\\/$","segments":[[{"content":"hogar","dynamic":false,"spread":false}],[{"content":"luz","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/hogar/luz.astro","pathname":"/hogar/luz","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/hogar/metros-cuadrados","isIndex":false,"type":"page","pattern":"^\\/hogar\\/metros-cuadrados\\/$","segments":[[{"content":"hogar","dynamic":false,"spread":false}],[{"content":"metros-cuadrados","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/hogar/metros-cuadrados.astro","pathname":"/hogar/metros-cuadrados","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/hogar/pintura","isIndex":false,"type":"page","pattern":"^\\/hogar\\/pintura\\/$","segments":[[{"content":"hogar","dynamic":false,"spread":false}],[{"content":"pintura","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/hogar/pintura.astro","pathname":"/hogar/pintura","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/matematica/areas","isIndex":false,"type":"page","pattern":"^\\/matematica\\/areas\\/$","segments":[[{"content":"matematica","dynamic":false,"spread":false}],[{"content":"areas","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/matematica/areas.astro","pathname":"/matematica/areas","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/matematica/calculadora-binomial","isIndex":false,"type":"page","pattern":"^\\/matematica\\/calculadora-binomial\\/$","segments":[[{"content":"matematica","dynamic":false,"spread":false}],[{"content":"calculadora-binomial","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/matematica/calculadora-binomial.astro","pathname":"/matematica/calculadora-binomial","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/matematica/calculadora-combinatoria","isIndex":false,"type":"page","pattern":"^\\/matematica\\/calculadora-combinatoria\\/$","segments":[[{"content":"matematica","dynamic":false,"spread":false}],[{"content":"calculadora-combinatoria","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/matematica/calculadora-combinatoria.astro","pathname":"/matematica/calculadora-combinatoria","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/matematica/calculadora-de-angulos","isIndex":false,"type":"page","pattern":"^\\/matematica\\/calculadora-de-angulos\\/$","segments":[[{"content":"matematica","dynamic":false,"spread":false}],[{"content":"calculadora-de-angulos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/matematica/calculadora-de-angulos.astro","pathname":"/matematica/calculadora-de-angulos","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/matematica/calculadora-de-volumenes","isIndex":false,"type":"page","pattern":"^\\/matematica\\/calculadora-de-volumenes\\/$","segments":[[{"content":"matematica","dynamic":false,"spread":false}],[{"content":"calculadora-de-volumenes","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/matematica/calculadora-de-volumenes.astro","pathname":"/matematica/calculadora-de-volumenes","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/matematica/calculadora-divisores","isIndex":false,"type":"page","pattern":"^\\/matematica\\/calculadora-divisores\\/$","segments":[[{"content":"matematica","dynamic":false,"spread":false}],[{"content":"calculadora-divisores","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/matematica/calculadora-divisores.astro","pathname":"/matematica/calculadora-divisores","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/matematica/calculadora-matrices","isIndex":false,"type":"page","pattern":"^\\/matematica\\/calculadora-matrices\\/$","segments":[[{"content":"matematica","dynamic":false,"spread":false}],[{"content":"calculadora-matrices","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/matematica/calculadora-matrices.astro","pathname":"/matematica/calculadora-matrices","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/matematica/calculadora-numeros-primos","isIndex":false,"type":"page","pattern":"^\\/matematica\\/calculadora-numeros-primos\\/$","segments":[[{"content":"matematica","dynamic":false,"spread":false}],[{"content":"calculadora-numeros-primos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/matematica/calculadora-numeros-primos.astro","pathname":"/matematica/calculadora-numeros-primos","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/matematica/calculadora-percentil","isIndex":false,"type":"page","pattern":"^\\/matematica\\/calculadora-percentil\\/$","segments":[[{"content":"matematica","dynamic":false,"spread":false}],[{"content":"calculadora-percentil","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/matematica/calculadora-percentil.astro","pathname":"/matematica/calculadora-percentil","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/matematica/calculadora-porcentil","isIndex":false,"type":"page","pattern":"^\\/matematica\\/calculadora-porcentil\\/$","segments":[[{"content":"matematica","dynamic":false,"spread":false}],[{"content":"calculadora-porcentil","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/matematica/calculadora-porcentil.astro","pathname":"/matematica/calculadora-porcentil","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/matematica/calculadora-potencia","isIndex":false,"type":"page","pattern":"^\\/matematica\\/calculadora-potencia\\/$","segments":[[{"content":"matematica","dynamic":false,"spread":false}],[{"content":"calculadora-potencia","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/matematica/calculadora-potencia.astro","pathname":"/matematica/calculadora-potencia","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/matematica/calculadora-probabilidad","isIndex":false,"type":"page","pattern":"^\\/matematica\\/calculadora-probabilidad\\/$","segments":[[{"content":"matematica","dynamic":false,"spread":false}],[{"content":"calculadora-probabilidad","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/matematica/calculadora-probabilidad.astro","pathname":"/matematica/calculadora-probabilidad","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/matematica/calculadora-proporcion","isIndex":false,"type":"page","pattern":"^\\/matematica\\/calculadora-proporcion\\/$","segments":[[{"content":"matematica","dynamic":false,"spread":false}],[{"content":"calculadora-proporcion","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/matematica/calculadora-proporcion.astro","pathname":"/matematica/calculadora-proporcion","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/matematica/calculadora-raiz-cuadrada","isIndex":false,"type":"page","pattern":"^\\/matematica\\/calculadora-raiz-cuadrada\\/$","segments":[[{"content":"matematica","dynamic":false,"spread":false}],[{"content":"calculadora-raiz-cuadrada","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/matematica/calculadora-raiz-cuadrada.astro","pathname":"/matematica/calculadora-raiz-cuadrada","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/matematica/calculadora-raiz-cubica","isIndex":false,"type":"page","pattern":"^\\/matematica\\/calculadora-raiz-cubica\\/$","segments":[[{"content":"matematica","dynamic":false,"spread":false}],[{"content":"calculadora-raiz-cubica","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/matematica/calculadora-raiz-cubica.astro","pathname":"/matematica/calculadora-raiz-cubica","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/matematica/circulo","isIndex":false,"type":"page","pattern":"^\\/matematica\\/circulo\\/$","segments":[[{"content":"matematica","dynamic":false,"spread":false}],[{"content":"circulo","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/matematica/circulo.astro","pathname":"/matematica/circulo","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/matematica/combinaciones-permutaciones","isIndex":false,"type":"page","pattern":"^\\/matematica\\/combinaciones-permutaciones\\/$","segments":[[{"content":"matematica","dynamic":false,"spread":false}],[{"content":"combinaciones-permutaciones","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/matematica/combinaciones-permutaciones.astro","pathname":"/matematica/combinaciones-permutaciones","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/matematica/conversor-bases","isIndex":false,"type":"page","pattern":"^\\/matematica\\/conversor-bases\\/$","segments":[[{"content":"matematica","dynamic":false,"spread":false}],[{"content":"conversor-bases","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/matematica/conversor-bases.astro","pathname":"/matematica/conversor-bases","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/matematica/decimal-a-fraccion","isIndex":false,"type":"page","pattern":"^\\/matematica\\/decimal-a-fraccion\\/$","segments":[[{"content":"matematica","dynamic":false,"spread":false}],[{"content":"decimal-a-fraccion","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/matematica/decimal-a-fraccion.astro","pathname":"/matematica/decimal-a-fraccion","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/matematica/decremento-porcentual","isIndex":false,"type":"page","pattern":"^\\/matematica\\/decremento-porcentual\\/$","segments":[[{"content":"matematica","dynamic":false,"spread":false}],[{"content":"decremento-porcentual","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/matematica/decremento-porcentual.astro","pathname":"/matematica/decremento-porcentual","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/matematica/desviacion-media","isIndex":false,"type":"page","pattern":"^\\/matematica\\/desviacion-media\\/$","segments":[[{"content":"matematica","dynamic":false,"spread":false}],[{"content":"desviacion-media","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/matematica/desviacion-media.astro","pathname":"/matematica/desviacion-media","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/matematica/ecuaciones-segundo-grado","isIndex":false,"type":"page","pattern":"^\\/matematica\\/ecuaciones-segundo-grado\\/$","segments":[[{"content":"matematica","dynamic":false,"spread":false}],[{"content":"ecuaciones-segundo-grado","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/matematica/ecuaciones-segundo-grado.astro","pathname":"/matematica/ecuaciones-segundo-grado","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/matematica/factorial","isIndex":false,"type":"page","pattern":"^\\/matematica\\/factorial\\/$","segments":[[{"content":"matematica","dynamic":false,"spread":false}],[{"content":"factorial","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/matematica/factorial.astro","pathname":"/matematica/factorial","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/matematica/fraccion-a-decimal","isIndex":false,"type":"page","pattern":"^\\/matematica\\/fraccion-a-decimal\\/$","segments":[[{"content":"matematica","dynamic":false,"spread":false}],[{"content":"fraccion-a-decimal","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/matematica/fraccion-a-decimal.astro","pathname":"/matematica/fraccion-a-decimal","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/matematica/incremento-porcentual","isIndex":false,"type":"page","pattern":"^\\/matematica\\/incremento-porcentual\\/$","segments":[[{"content":"matematica","dynamic":false,"spread":false}],[{"content":"incremento-porcentual","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/matematica/incremento-porcentual.astro","pathname":"/matematica/incremento-porcentual","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/matematica/logaritmos","isIndex":false,"type":"page","pattern":"^\\/matematica\\/logaritmos\\/$","segments":[[{"content":"matematica","dynamic":false,"spread":false}],[{"content":"logaritmos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/matematica/logaritmos.astro","pathname":"/matematica/logaritmos","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/matematica/mcm-mcd","isIndex":false,"type":"page","pattern":"^\\/matematica\\/mcm-mcd\\/$","segments":[[{"content":"matematica","dynamic":false,"spread":false}],[{"content":"mcm-mcd","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/matematica/mcm-mcd.astro","pathname":"/matematica/mcm-mcd","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/matematica/media-ponderada","isIndex":false,"type":"page","pattern":"^\\/matematica\\/media-ponderada\\/$","segments":[[{"content":"matematica","dynamic":false,"spread":false}],[{"content":"media-ponderada","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/matematica/media-ponderada.astro","pathname":"/matematica/media-ponderada","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/matematica/notacion-cientifica","isIndex":false,"type":"page","pattern":"^\\/matematica\\/notacion-cientifica\\/$","segments":[[{"content":"matematica","dynamic":false,"spread":false}],[{"content":"notacion-cientifica","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/matematica/notacion-cientifica.astro","pathname":"/matematica/notacion-cientifica","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/matematica/pitagoras","isIndex":false,"type":"page","pattern":"^\\/matematica\\/pitagoras\\/$","segments":[[{"content":"matematica","dynamic":false,"spread":false}],[{"content":"pitagoras","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/matematica/pitagoras.astro","pathname":"/matematica/pitagoras","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/matematica/porcentaje-inverso","isIndex":false,"type":"page","pattern":"^\\/matematica\\/porcentaje-inverso\\/$","segments":[[{"content":"matematica","dynamic":false,"spread":false}],[{"content":"porcentaje-inverso","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/matematica/porcentaje-inverso.astro","pathname":"/matematica/porcentaje-inverso","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/matematica/promedio-mediana-moda","isIndex":false,"type":"page","pattern":"^\\/matematica\\/promedio-mediana-moda\\/$","segments":[[{"content":"matematica","dynamic":false,"spread":false}],[{"content":"promedio-mediana-moda","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/matematica/promedio-mediana-moda.astro","pathname":"/matematica/promedio-mediana-moda","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/matematica/rango-estadistico","isIndex":false,"type":"page","pattern":"^\\/matematica\\/rango-estadistico\\/$","segments":[[{"content":"matematica","dynamic":false,"spread":false}],[{"content":"rango-estadistico","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/matematica/rango-estadistico.astro","pathname":"/matematica/rango-estadistico","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/matematica/regla-de-tres","isIndex":false,"type":"page","pattern":"^\\/matematica\\/regla-de-tres\\/$","segments":[[{"content":"matematica","dynamic":false,"spread":false}],[{"content":"regla-de-tres","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/matematica/regla-de-tres.astro","pathname":"/matematica/regla-de-tres","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/matematica/sistemas-ecuaciones","isIndex":false,"type":"page","pattern":"^\\/matematica\\/sistemas-ecuaciones\\/$","segments":[[{"content":"matematica","dynamic":false,"spread":false}],[{"content":"sistemas-ecuaciones","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/matematica/sistemas-ecuaciones.astro","pathname":"/matematica/sistemas-ecuaciones","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/matematica/triangulo","isIndex":false,"type":"page","pattern":"^\\/matematica\\/triangulo\\/$","segments":[[{"content":"matematica","dynamic":false,"spread":false}],[{"content":"triangulo","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/matematica/triangulo.astro","pathname":"/matematica/triangulo","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/matematica/varianza-desviacion-estandar","isIndex":false,"type":"page","pattern":"^\\/matematica\\/varianza-desviacion-estandar\\/$","segments":[[{"content":"matematica","dynamic":false,"spread":false}],[{"content":"varianza-desviacion-estandar","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/matematica/varianza-desviacion-estandar.astro","pathname":"/matematica/varianza-desviacion-estandar","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/negocios/comisiones","isIndex":false,"type":"page","pattern":"^\\/negocios\\/comisiones\\/$","segments":[[{"content":"negocios","dynamic":false,"spread":false}],[{"content":"comisiones","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/negocios/comisiones.astro","pathname":"/negocios/comisiones","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/negocios/margen","isIndex":false,"type":"page","pattern":"^\\/negocios\\/margen\\/$","segments":[[{"content":"negocios","dynamic":false,"spread":false}],[{"content":"margen","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/negocios/margen.astro","pathname":"/negocios/margen","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/negocios/markup-margen","isIndex":false,"type":"page","pattern":"^\\/negocios\\/markup-margen\\/$","segments":[[{"content":"negocios","dynamic":false,"spread":false}],[{"content":"markup-margen","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/negocios/markup-margen.astro","pathname":"/negocios/markup-margen","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/negocios/precio-venta","isIndex":false,"type":"page","pattern":"^\\/negocios\\/precio-venta\\/$","segments":[[{"content":"negocios","dynamic":false,"spread":false}],[{"content":"precio-venta","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/negocios/precio-venta.astro","pathname":"/negocios/precio-venta","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/negocios/punto-equilibrio","isIndex":false,"type":"page","pattern":"^\\/negocios\\/punto-equilibrio\\/$","segments":[[{"content":"negocios","dynamic":false,"spread":false}],[{"content":"punto-equilibrio","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/negocios/punto-equilibrio.astro","pathname":"/negocios/punto-equilibrio","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/negocios/tarifa-freelance","isIndex":false,"type":"page","pattern":"^\\/negocios\\/tarifa-freelance\\/$","segments":[[{"content":"negocios","dynamic":false,"spread":false}],[{"content":"tarifa-freelance","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/negocios/tarifa-freelance.astro","pathname":"/negocios/tarifa-freelance","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/negocios/valor-de-tu-hora","isIndex":false,"type":"page","pattern":"^\\/negocios\\/valor-de-tu-hora\\/$","segments":[[{"content":"negocios","dynamic":false,"spread":false}],[{"content":"valor-de-tu-hora","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/negocios/valor-de-tu-hora.astro","pathname":"/negocios/valor-de-tu-hora","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/privacidad","isIndex":false,"type":"page","pattern":"^\\/privacidad\\/$","segments":[[{"content":"privacidad","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/privacidad.astro","pathname":"/privacidad","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/salud/agua","isIndex":false,"type":"page","pattern":"^\\/salud\\/agua\\/$","segments":[[{"content":"salud","dynamic":false,"spread":false}],[{"content":"agua","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/salud/agua.astro","pathname":"/salud/agua","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/salud/calorias","isIndex":false,"type":"page","pattern":"^\\/salud\\/calorias\\/$","segments":[[{"content":"salud","dynamic":false,"spread":false}],[{"content":"calorias","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/salud/calorias.astro","pathname":"/salud/calorias","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/salud/dejar-de-fumar","isIndex":false,"type":"page","pattern":"^\\/salud\\/dejar-de-fumar\\/$","segments":[[{"content":"salud","dynamic":false,"spread":false}],[{"content":"dejar-de-fumar","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/salud/dejar-de-fumar.astro","pathname":"/salud/dejar-de-fumar","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/salud/embarazo","isIndex":false,"type":"page","pattern":"^\\/salud\\/embarazo\\/$","segments":[[{"content":"salud","dynamic":false,"spread":false}],[{"content":"embarazo","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/salud/embarazo.astro","pathname":"/salud/embarazo","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/salud/frecuencia-cardiaca","isIndex":false,"type":"page","pattern":"^\\/salud\\/frecuencia-cardiaca\\/$","segments":[[{"content":"salud","dynamic":false,"spread":false}],[{"content":"frecuencia-cardiaca","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/salud/frecuencia-cardiaca.astro","pathname":"/salud/frecuencia-cardiaca","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/salud/imc","isIndex":false,"type":"page","pattern":"^\\/salud\\/imc\\/$","segments":[[{"content":"salud","dynamic":false,"spread":false}],[{"content":"imc","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/salud/imc.astro","pathname":"/salud/imc","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/salud/keto","isIndex":false,"type":"page","pattern":"^\\/salud\\/keto\\/$","segments":[[{"content":"salud","dynamic":false,"spread":false}],[{"content":"keto","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/salud/keto.astro","pathname":"/salud/keto","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/salud/ovulacion","isIndex":false,"type":"page","pattern":"^\\/salud\\/ovulacion\\/$","segments":[[{"content":"salud","dynamic":false,"spread":false}],[{"content":"ovulacion","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/salud/ovulacion.astro","pathname":"/salud/ovulacion","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/salud/proteina","isIndex":false,"type":"page","pattern":"^\\/salud\\/proteina\\/$","segments":[[{"content":"salud","dynamic":false,"spread":false}],[{"content":"proteina","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/salud/proteina.astro","pathname":"/salud/proteina","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/salud/volumen-definicion","isIndex":false,"type":"page","pattern":"^\\/salud\\/volumen-definicion\\/$","segments":[[{"content":"salud","dynamic":false,"spread":false}],[{"content":"volumen-definicion","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/salud/volumen-definicion.astro","pathname":"/salud/volumen-definicion","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/seo/analizador-parrafos","isIndex":false,"type":"page","pattern":"^\\/seo\\/analizador-parrafos\\/$","segments":[[{"content":"seo","dynamic":false,"spread":false}],[{"content":"analizador-parrafos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/seo/analizador-parrafos.astro","pathname":"/seo/analizador-parrafos","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/seo/analizador-repeticion","isIndex":false,"type":"page","pattern":"^\\/seo\\/analizador-repeticion\\/$","segments":[[{"content":"seo","dynamic":false,"spread":false}],[{"content":"analizador-repeticion","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/seo/analizador-repeticion.astro","pathname":"/seo/analizador-repeticion","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/seo/analizador-titulos","isIndex":false,"type":"page","pattern":"^\\/seo\\/analizador-titulos\\/$","segments":[[{"content":"seo","dynamic":false,"spread":false}],[{"content":"analizador-titulos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/seo/analizador-titulos.astro","pathname":"/seo/analizador-titulos","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/seo/anchor-text-ratio","isIndex":false,"type":"page","pattern":"^\\/seo\\/anchor-text-ratio\\/$","segments":[[{"content":"seo","dynamic":false,"spread":false}],[{"content":"anchor-text-ratio","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/seo/anchor-text-ratio.astro","pathname":"/seo/anchor-text-ratio","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/seo/calculadora-alcance","isIndex":false,"type":"page","pattern":"^\\/seo\\/calculadora-alcance\\/$","segments":[[{"content":"seo","dynamic":false,"spread":false}],[{"content":"calculadora-alcance","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/seo/calculadora-alcance.astro","pathname":"/seo/calculadora-alcance","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/seo/calculadora-cpa","isIndex":false,"type":"page","pattern":"^\\/seo\\/calculadora-cpa\\/$","segments":[[{"content":"seo","dynamic":false,"spread":false}],[{"content":"calculadora-cpa","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/seo/calculadora-cpa.astro","pathname":"/seo/calculadora-cpa","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/seo/calculadora-cpc","isIndex":false,"type":"page","pattern":"^\\/seo\\/calculadora-cpc\\/$","segments":[[{"content":"seo","dynamic":false,"spread":false}],[{"content":"calculadora-cpc","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/seo/calculadora-cpc.astro","pathname":"/seo/calculadora-cpc","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/seo/calculadora-cpl","isIndex":false,"type":"page","pattern":"^\\/seo\\/calculadora-cpl\\/$","segments":[[{"content":"seo","dynamic":false,"spread":false}],[{"content":"calculadora-cpl","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/seo/calculadora-cpl.astro","pathname":"/seo/calculadora-cpl","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/seo/calculadora-cpm","isIndex":false,"type":"page","pattern":"^\\/seo\\/calculadora-cpm\\/$","segments":[[{"content":"seo","dynamic":false,"spread":false}],[{"content":"calculadora-cpm","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/seo/calculadora-cpm.astro","pathname":"/seo/calculadora-cpm","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/seo/calculadora-ctr","isIndex":false,"type":"page","pattern":"^\\/seo\\/calculadora-ctr\\/$","segments":[[{"content":"seo","dynamic":false,"spread":false}],[{"content":"calculadora-ctr","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/seo/calculadora-ctr.astro","pathname":"/seo/calculadora-ctr","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/seo/contador-caracteres","isIndex":false,"type":"page","pattern":"^\\/seo\\/contador-caracteres\\/$","segments":[[{"content":"seo","dynamic":false,"spread":false}],[{"content":"contador-caracteres","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/seo/contador-caracteres.astro","pathname":"/seo/contador-caracteres","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/seo/contador-caracteres-sin-espacios","isIndex":false,"type":"page","pattern":"^\\/seo\\/contador-caracteres-sin-espacios\\/$","segments":[[{"content":"seo","dynamic":false,"spread":false}],[{"content":"contador-caracteres-sin-espacios","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/seo/contador-caracteres-sin-espacios.astro","pathname":"/seo/contador-caracteres-sin-espacios","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/seo/contador-encabezados","isIndex":false,"type":"page","pattern":"^\\/seo\\/contador-encabezados\\/$","segments":[[{"content":"seo","dynamic":false,"spread":false}],[{"content":"contador-encabezados","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/seo/contador-encabezados.astro","pathname":"/seo/contador-encabezados","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/seo/contador-frases","isIndex":false,"type":"page","pattern":"^\\/seo\\/contador-frases\\/$","segments":[[{"content":"seo","dynamic":false,"spread":false}],[{"content":"contador-frases","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/seo/contador-frases.astro","pathname":"/seo/contador-frases","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/seo/contador-hashtags","isIndex":false,"type":"page","pattern":"^\\/seo\\/contador-hashtags\\/$","segments":[[{"content":"seo","dynamic":false,"spread":false}],[{"content":"contador-hashtags","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/seo/contador-hashtags.astro","pathname":"/seo/contador-hashtags","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/seo/contador-keywords","isIndex":false,"type":"page","pattern":"^\\/seo\\/contador-keywords\\/$","segments":[[{"content":"seo","dynamic":false,"spread":false}],[{"content":"contador-keywords","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/seo/contador-keywords.astro","pathname":"/seo/contador-keywords","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/seo/contador-palabras","isIndex":false,"type":"page","pattern":"^\\/seo\\/contador-palabras\\/$","segments":[[{"content":"seo","dynamic":false,"spread":false}],[{"content":"contador-palabras","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/seo/contador-palabras.astro","pathname":"/seo/contador-palabras","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/seo/densidad-enlaces-internos","isIndex":false,"type":"page","pattern":"^\\/seo\\/densidad-enlaces-internos\\/$","segments":[[{"content":"seo","dynamic":false,"spread":false}],[{"content":"densidad-enlaces-internos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/seo/densidad-enlaces-internos.astro","pathname":"/seo/densidad-enlaces-internos","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/seo/densidad-keyword","isIndex":false,"type":"page","pattern":"^\\/seo\\/densidad-keyword\\/$","segments":[[{"content":"seo","dynamic":false,"spread":false}],[{"content":"densidad-keyword","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/seo/densidad-keyword.astro","pathname":"/seo/densidad-keyword","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/seo/engagement-rate","isIndex":false,"type":"page","pattern":"^\\/seo\\/engagement-rate\\/$","segments":[[{"content":"seo","dynamic":false,"spread":false}],[{"content":"engagement-rate","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/seo/engagement-rate.astro","pathname":"/seo/engagement-rate","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/seo/frecuencia-palabras","isIndex":false,"type":"page","pattern":"^\\/seo\\/frecuencia-palabras\\/$","segments":[[{"content":"seo","dynamic":false,"spread":false}],[{"content":"frecuencia-palabras","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/seo/frecuencia-palabras.astro","pathname":"/seo/frecuencia-palabras","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/seo/frecuencia-publicitaria","isIndex":false,"type":"page","pattern":"^\\/seo\\/frecuencia-publicitaria\\/$","segments":[[{"content":"seo","dynamic":false,"spread":false}],[{"content":"frecuencia-publicitaria","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/seo/frecuencia-publicitaria.astro","pathname":"/seo/frecuencia-publicitaria","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/seo/generador-slug","isIndex":false,"type":"page","pattern":"^\\/seo\\/generador-slug\\/$","segments":[[{"content":"seo","dynamic":false,"spread":false}],[{"content":"generador-slug","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/seo/generador-slug.astro","pathname":"/seo/generador-slug","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/seo/longitud-meta-description","isIndex":false,"type":"page","pattern":"^\\/seo\\/longitud-meta-description\\/$","segments":[[{"content":"seo","dynamic":false,"spread":false}],[{"content":"longitud-meta-description","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/seo/longitud-meta-description.astro","pathname":"/seo/longitud-meta-description","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/seo/longitud-titulo-seo","isIndex":false,"type":"page","pattern":"^\\/seo\\/longitud-titulo-seo\\/$","segments":[[{"content":"seo","dynamic":false,"spread":false}],[{"content":"longitud-titulo-seo","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/seo/longitud-titulo-seo.astro","pathname":"/seo/longitud-titulo-seo","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/seo/radio-texto-html-","isIndex":false,"type":"page","pattern":"^\\/seo\\/radio-texto-html-\\/$","segments":[[{"content":"seo","dynamic":false,"spread":false}],[{"content":"radio-texto-html-","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/seo/radio-texto-html-.astro","pathname":"/seo/radio-texto-html-","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/seo/roi-marketing","isIndex":false,"type":"page","pattern":"^\\/seo\\/roi-marketing\\/$","segments":[[{"content":"seo","dynamic":false,"spread":false}],[{"content":"roi-marketing","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/seo/roi-marketing.astro","pathname":"/seo/roi-marketing","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/seo/tasa-conversion","isIndex":false,"type":"page","pattern":"^\\/seo\\/tasa-conversion\\/$","segments":[[{"content":"seo","dynamic":false,"spread":false}],[{"content":"tasa-conversion","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/seo/tasa-conversion.astro","pathname":"/seo/tasa-conversion","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/seo/tiempo-de-lectura","isIndex":false,"type":"page","pattern":"^\\/seo\\/tiempo-de-lectura\\/$","segments":[[{"content":"seo","dynamic":false,"spread":false}],[{"content":"tiempo-de-lectura","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/seo/tiempo-de-lectura.astro","pathname":"/seo/tiempo-de-lectura","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/seo/tiempo-lectura","isIndex":false,"type":"page","pattern":"^\\/seo\\/tiempo-lectura\\/$","segments":[[{"content":"seo","dynamic":false,"spread":false}],[{"content":"tiempo-lectura","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/seo/tiempo-lectura.astro","pathname":"/seo/tiempo-lectura","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/seo/tiempo-ranking-seo","isIndex":false,"type":"page","pattern":"^\\/seo\\/tiempo-ranking-seo\\/$","segments":[[{"content":"seo","dynamic":false,"spread":false}],[{"content":"tiempo-ranking-seo","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/seo/tiempo-ranking-seo.astro","pathname":"/seo/tiempo-ranking-seo","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/unidades/bytes-a-mb","isIndex":false,"type":"page","pattern":"^\\/unidades\\/bytes-a-mb\\/$","segments":[[{"content":"unidades","dynamic":false,"spread":false}],[{"content":"bytes-a-mb","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/unidades/bytes-a-mb.astro","pathname":"/unidades/bytes-a-mb","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/unidades/cm-a-pulgadas","isIndex":false,"type":"page","pattern":"^\\/unidades\\/cm-a-pulgadas\\/$","segments":[[{"content":"unidades","dynamic":false,"spread":false}],[{"content":"cm-a-pulgadas","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/unidades/cm-a-pulgadas.astro","pathname":"/unidades/cm-a-pulgadas","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/unidades/conversor-temperatura","isIndex":false,"type":"page","pattern":"^\\/unidades\\/conversor-temperatura\\/$","segments":[[{"content":"unidades","dynamic":false,"spread":false}],[{"content":"conversor-temperatura","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/unidades/conversor-temperatura.astro","pathname":"/unidades/conversor-temperatura","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/unidades/conversor-velocidad","isIndex":false,"type":"page","pattern":"^\\/unidades\\/conversor-velocidad\\/$","segments":[[{"content":"unidades","dynamic":false,"spread":false}],[{"content":"conversor-velocidad","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/unidades/conversor-velocidad.astro","pathname":"/unidades/conversor-velocidad","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/unidades/gal-to-l","isIndex":false,"type":"page","pattern":"^\\/unidades\\/gal-to-l\\/$","segments":[[{"content":"unidades","dynamic":false,"spread":false}],[{"content":"gal-to-l","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/unidades/gal-to-l.astro","pathname":"/unidades/gal-to-l","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/unidades/horas-a-dias","isIndex":false,"type":"page","pattern":"^\\/unidades\\/horas-a-dias\\/$","segments":[[{"content":"unidades","dynamic":false,"spread":false}],[{"content":"horas-a-dias","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/unidades/horas-a-dias.astro","pathname":"/unidades/horas-a-dias","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/unidades/kg-to-lb","isIndex":false,"type":"page","pattern":"^\\/unidades\\/kg-to-lb\\/$","segments":[[{"content":"unidades","dynamic":false,"spread":false}],[{"content":"kg-to-lb","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/unidades/kg-to-lb.astro","pathname":"/unidades/kg-to-lb","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/unidades/km-a-millas","isIndex":false,"type":"page","pattern":"^\\/unidades\\/km-a-millas\\/$","segments":[[{"content":"unidades","dynamic":false,"spread":false}],[{"content":"km-a-millas","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/unidades/km-a-millas.astro","pathname":"/unidades/km-a-millas","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/unidades/lb-to-kg","isIndex":false,"type":"page","pattern":"^\\/unidades\\/lb-to-kg\\/$","segments":[[{"content":"unidades","dynamic":false,"spread":false}],[{"content":"lb-to-kg","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/unidades/lb-to-kg.astro","pathname":"/unidades/lb-to-kg","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/unidades/litros-a-galones","isIndex":false,"type":"page","pattern":"^\\/unidades\\/litros-a-galones\\/$","segments":[[{"content":"unidades","dynamic":false,"spread":false}],[{"content":"litros-a-galones","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/unidades/litros-a-galones.astro","pathname":"/unidades/litros-a-galones","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/unidades/m2-a-ft2","isIndex":false,"type":"page","pattern":"^\\/unidades\\/m2-a-ft2\\/$","segments":[[{"content":"unidades","dynamic":false,"spread":false}],[{"content":"m2-a-ft2","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/unidades/m2-a-ft2.astro","pathname":"/unidades/m2-a-ft2","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/unidades/mb-a-gb","isIndex":false,"type":"page","pattern":"^\\/unidades\\/mb-a-gb\\/$","segments":[[{"content":"unidades","dynamic":false,"spread":false}],[{"content":"mb-a-gb","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/unidades/mb-a-gb.astro","pathname":"/unidades/mb-a-gb","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/unidades/metros-a-pies","isIndex":false,"type":"page","pattern":"^\\/unidades\\/metros-a-pies\\/$","segments":[[{"content":"unidades","dynamic":false,"spread":false}],[{"content":"metros-a-pies","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/unidades/metros-a-pies.astro","pathname":"/unidades/metros-a-pies","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/unidades/miles-to-km","isIndex":false,"type":"page","pattern":"^\\/unidades\\/miles-to-km\\/$","segments":[[{"content":"unidades","dynamic":false,"spread":false}],[{"content":"miles-to-km","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/unidades/miles-to-km.astro","pathname":"/unidades/miles-to-km","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/unidades/minutos-a-horas","isIndex":false,"type":"page","pattern":"^\\/unidades\\/minutos-a-horas\\/$","segments":[[{"content":"unidades","dynamic":false,"spread":false}],[{"content":"minutos-a-horas","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/unidades/minutos-a-horas.astro","pathname":"/unidades/minutos-a-horas","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/unidades/pies-a-metros","isIndex":false,"type":"page","pattern":"^\\/unidades\\/pies-a-metros\\/$","segments":[[{"content":"unidades","dynamic":false,"spread":false}],[{"content":"pies-a-metros","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/unidades/pies-a-metros.astro","pathname":"/unidades/pies-a-metros","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/unidades/pies-cuadrados-a-metros-cuadrados","isIndex":false,"type":"page","pattern":"^\\/unidades\\/pies-cuadrados-a-metros-cuadrados\\/$","segments":[[{"content":"unidades","dynamic":false,"spread":false}],[{"content":"pies-cuadrados-a-metros-cuadrados","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/unidades/pies-cuadrados-a-metros-cuadrados.astro","pathname":"/unidades/pies-cuadrados-a-metros-cuadrados","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/unidades/pulgadas-a-cm","isIndex":false,"type":"page","pattern":"^\\/unidades\\/pulgadas-a-cm\\/$","segments":[[{"content":"unidades","dynamic":false,"spread":false}],[{"content":"pulgadas-a-cm","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/unidades/pulgadas-a-cm.astro","pathname":"/unidades/pulgadas-a-cm","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/unidades/segundos-a-horas","isIndex":false,"type":"page","pattern":"^\\/unidades\\/segundos-a-horas\\/$","segments":[[{"content":"unidades","dynamic":false,"spread":false}],[{"content":"segundos-a-horas","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/unidades/segundos-a-horas.astro","pathname":"/unidades/segundos-a-horas","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/unidades/semanas-a-meses","isIndex":false,"type":"page","pattern":"^\\/unidades\\/semanas-a-meses\\/$","segments":[[{"content":"unidades","dynamic":false,"spread":false}],[{"content":"semanas-a-meses","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/unidades/semanas-a-meses.astro","pathname":"/unidades/semanas-a-meses","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/utiles/asado","isIndex":false,"type":"page","pattern":"^\\/utiles\\/asado\\/$","segments":[[{"content":"utiles","dynamic":false,"spread":false}],[{"content":"asado","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/utiles/asado.astro","pathname":"/utiles/asado","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/utiles/bebidas","isIndex":false,"type":"page","pattern":"^\\/utiles\\/bebidas\\/$","segments":[[{"content":"utiles","dynamic":false,"spread":false}],[{"content":"bebidas","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/utiles/bebidas.astro","pathname":"/utiles/bebidas","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/utiles/calculadora-beneficio-unidad","isIndex":false,"type":"page","pattern":"^\\/utiles\\/calculadora-beneficio-unidad\\/$","segments":[[{"content":"utiles","dynamic":false,"spread":false}],[{"content":"calculadora-beneficio-unidad","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/utiles/calculadora-beneficio-unidad.astro","pathname":"/utiles/calculadora-beneficio-unidad","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/utiles/calculadora-costos-fijos-variables","isIndex":false,"type":"page","pattern":"^\\/utiles\\/calculadora-costos-fijos-variables\\/$","segments":[[{"content":"utiles","dynamic":false,"spread":false}],[{"content":"calculadora-costos-fijos-variables","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/utiles/calculadora-costos-fijos-variables.astro","pathname":"/utiles/calculadora-costos-fijos-variables","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/utiles/calculadora-crecimiento-ventas","isIndex":false,"type":"page","pattern":"^\\/utiles\\/calculadora-crecimiento-ventas\\/$","segments":[[{"content":"utiles","dynamic":false,"spread":false}],[{"content":"calculadora-crecimiento-ventas","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/utiles/calculadora-crecimiento-ventas.astro","pathname":"/utiles/calculadora-crecimiento-ventas","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/utiles/calculadora-de-escalas","isIndex":false,"type":"page","pattern":"^\\/utiles\\/calculadora-de-escalas\\/$","segments":[[{"content":"utiles","dynamic":false,"spread":false}],[{"content":"calculadora-de-escalas","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/utiles/calculadora-de-escalas.astro","pathname":"/utiles/calculadora-de-escalas","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/utiles/calculadora-de-markup","isIndex":false,"type":"page","pattern":"^\\/utiles\\/calculadora-de-markup\\/$","segments":[[{"content":"utiles","dynamic":false,"spread":false}],[{"content":"calculadora-de-markup","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/utiles/calculadora-de-markup.astro","pathname":"/utiles/calculadora-de-markup","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/utiles/calculadora-de-proporciones","isIndex":false,"type":"page","pattern":"^\\/utiles\\/calculadora-de-proporciones\\/$","segments":[[{"content":"utiles","dynamic":false,"spread":false}],[{"content":"calculadora-de-proporciones","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/utiles/calculadora-de-proporciones.astro","pathname":"/utiles/calculadora-de-proporciones","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/utiles/calculadora-desviacion-estandar","isIndex":false,"type":"page","pattern":"^\\/utiles\\/calculadora-desviacion-estandar\\/$","segments":[[{"content":"utiles","dynamic":false,"spread":false}],[{"content":"calculadora-desviacion-estandar","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/utiles/calculadora-desviacion-estandar.astro","pathname":"/utiles/calculadora-desviacion-estandar","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/utiles/calculadora-fecha-futura","isIndex":false,"type":"page","pattern":"^\\/utiles\\/calculadora-fecha-futura\\/$","segments":[[{"content":"utiles","dynamic":false,"spread":false}],[{"content":"calculadora-fecha-futura","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/utiles/calculadora-fecha-futura.astro","pathname":"/utiles/calculadora-fecha-futura","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/utiles/calculadora-fecha-pasada","isIndex":false,"type":"page","pattern":"^\\/utiles\\/calculadora-fecha-pasada\\/$","segments":[[{"content":"utiles","dynamic":false,"spread":false}],[{"content":"calculadora-fecha-pasada","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/utiles/calculadora-fecha-pasada.astro","pathname":"/utiles/calculadora-fecha-pasada","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/utiles/calculadora-flujo-de-caja","isIndex":false,"type":"page","pattern":"^\\/utiles\\/calculadora-flujo-de-caja\\/$","segments":[[{"content":"utiles","dynamic":false,"spread":false}],[{"content":"calculadora-flujo-de-caja","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/utiles/calculadora-flujo-de-caja.astro","pathname":"/utiles/calculadora-flujo-de-caja","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/utiles/calculadora-impuestos-ventas","isIndex":false,"type":"page","pattern":"^\\/utiles\\/calculadora-impuestos-ventas\\/$","segments":[[{"content":"utiles","dynamic":false,"spread":false}],[{"content":"calculadora-impuestos-ventas","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/utiles/calculadora-impuestos-ventas.astro","pathname":"/utiles/calculadora-impuestos-ventas","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/utiles/calculadora-inventario-ideal","isIndex":false,"type":"page","pattern":"^\\/utiles\\/calculadora-inventario-ideal\\/$","segments":[[{"content":"utiles","dynamic":false,"spread":false}],[{"content":"calculadora-inventario-ideal","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/utiles/calculadora-inventario-ideal.astro","pathname":"/utiles/calculadora-inventario-ideal","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/utiles/calculadora-inversion-aportes-periodicos","isIndex":false,"type":"page","pattern":"^\\/utiles\\/calculadora-inversion-aportes-periodicos\\/$","segments":[[{"content":"utiles","dynamic":false,"spread":false}],[{"content":"calculadora-inversion-aportes-periodicos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/utiles/calculadora-inversion-aportes-periodicos.astro","pathname":"/utiles/calculadora-inversion-aportes-periodicos","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/utiles/calculadora-ltv","isIndex":false,"type":"page","pattern":"^\\/utiles\\/calculadora-ltv\\/$","segments":[[{"content":"utiles","dynamic":false,"spread":false}],[{"content":"calculadora-ltv","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/utiles/calculadora-ltv.astro","pathname":"/utiles/calculadora-ltv","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/utiles/calculadora-margen-bruto","isIndex":false,"type":"page","pattern":"^\\/utiles\\/calculadora-margen-bruto\\/$","segments":[[{"content":"utiles","dynamic":false,"spread":false}],[{"content":"calculadora-margen-bruto","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/utiles/calculadora-margen-bruto.astro","pathname":"/utiles/calculadora-margen-bruto","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/utiles/calculadora-margen-neto","isIndex":false,"type":"page","pattern":"^\\/utiles\\/calculadora-margen-neto\\/$","segments":[[{"content":"utiles","dynamic":false,"spread":false}],[{"content":"calculadora-margen-neto","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/utiles/calculadora-margen-neto.astro","pathname":"/utiles/calculadora-margen-neto","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/utiles/calculadora-percentil","isIndex":false,"type":"page","pattern":"^\\/utiles\\/calculadora-percentil\\/$","segments":[[{"content":"utiles","dynamic":false,"spread":false}],[{"content":"calculadora-percentil","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/utiles/calculadora-percentil.astro","pathname":"/utiles/calculadora-percentil","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/utiles/calculadora-rentabilidad-ecommerce","isIndex":false,"type":"page","pattern":"^\\/utiles\\/calculadora-rentabilidad-ecommerce\\/$","segments":[[{"content":"utiles","dynamic":false,"spread":false}],[{"content":"calculadora-rentabilidad-ecommerce","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/utiles/calculadora-rentabilidad-ecommerce.astro","pathname":"/utiles/calculadora-rentabilidad-ecommerce","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/utiles/calculadora-rentabilidad-negocio","isIndex":false,"type":"page","pattern":"^\\/utiles\\/calculadora-rentabilidad-negocio\\/$","segments":[[{"content":"utiles","dynamic":false,"spread":false}],[{"content":"calculadora-rentabilidad-negocio","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/utiles/calculadora-rentabilidad-negocio.astro","pathname":"/utiles/calculadora-rentabilidad-negocio","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/utiles/calculadora-rentabilidad-producto","isIndex":false,"type":"page","pattern":"^\\/utiles\\/calculadora-rentabilidad-producto\\/$","segments":[[{"content":"utiles","dynamic":false,"spread":false}],[{"content":"calculadora-rentabilidad-producto","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/utiles/calculadora-rentabilidad-producto.astro","pathname":"/utiles/calculadora-rentabilidad-producto","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/utiles/calculadora-roas","isIndex":false,"type":"page","pattern":"^\\/utiles\\/calculadora-roas\\/$","segments":[[{"content":"utiles","dynamic":false,"spread":false}],[{"content":"calculadora-roas","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/utiles/calculadora-roas.astro","pathname":"/utiles/calculadora-roas","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/utiles/calculadora-ticket-promedio","isIndex":false,"type":"page","pattern":"^\\/utiles\\/calculadora-ticket-promedio\\/$","segments":[[{"content":"utiles","dynamic":false,"spread":false}],[{"content":"calculadora-ticket-promedio","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/utiles/calculadora-ticket-promedio.astro","pathname":"/utiles/calculadora-ticket-promedio","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/utiles/combustible","isIndex":false,"type":"page","pattern":"^\\/utiles\\/combustible\\/$","segments":[[{"content":"utiles","dynamic":false,"spread":false}],[{"content":"combustible","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/utiles/combustible.astro","pathname":"/utiles/combustible","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/utiles/contador-de-caracteres","isIndex":false,"type":"page","pattern":"^\\/utiles\\/contador-de-caracteres\\/$","segments":[[{"content":"utiles","dynamic":false,"spread":false}],[{"content":"contador-de-caracteres","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/utiles/contador-de-caracteres.astro","pathname":"/utiles/contador-de-caracteres","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/utiles/contador-de-letras","isIndex":false,"type":"page","pattern":"^\\/utiles\\/contador-de-letras\\/$","segments":[[{"content":"utiles","dynamic":false,"spread":false}],[{"content":"contador-de-letras","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/utiles/contador-de-letras.astro","pathname":"/utiles/contador-de-letras","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/utiles/contador-de-palabras-unicas","isIndex":false,"type":"page","pattern":"^\\/utiles\\/contador-de-palabras-unicas\\/$","segments":[[{"content":"utiles","dynamic":false,"spread":false}],[{"content":"contador-de-palabras-unicas","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/utiles/contador-de-palabras-unicas.astro","pathname":"/utiles/contador-de-palabras-unicas","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/utiles/contador-de-vocales","isIndex":false,"type":"page","pattern":"^\\/utiles\\/contador-de-vocales\\/$","segments":[[{"content":"utiles","dynamic":false,"spread":false}],[{"content":"contador-de-vocales","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/utiles/contador-de-vocales.astro","pathname":"/utiles/contador-de-vocales","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/utiles/contador-dias-cumpleanos","isIndex":false,"type":"page","pattern":"^\\/utiles\\/contador-dias-cumpleanos\\/$","segments":[[{"content":"utiles","dynamic":false,"spread":false}],[{"content":"contador-dias-cumpleanos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/utiles/contador-dias-cumpleanos.astro","pathname":"/utiles/contador-dias-cumpleanos","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/utiles/contador-dias-navidad","isIndex":false,"type":"page","pattern":"^\\/utiles\\/contador-dias-navidad\\/$","segments":[[{"content":"utiles","dynamic":false,"spread":false}],[{"content":"contador-dias-navidad","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/utiles/contador-dias-navidad.astro","pathname":"/utiles/contador-dias-navidad","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/utiles/costo-por-uso","isIndex":false,"type":"page","pattern":"^\\/utiles\\/costo-por-uso\\/$","segments":[[{"content":"utiles","dynamic":false,"spread":false}],[{"content":"costo-por-uso","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/utiles/costo-por-uso.astro","pathname":"/utiles/costo-por-uso","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/utiles/descuento-doble","isIndex":false,"type":"page","pattern":"^\\/utiles\\/descuento-doble\\/$","segments":[[{"content":"utiles","dynamic":false,"spread":false}],[{"content":"descuento-doble","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/utiles/descuento-doble.astro","pathname":"/utiles/descuento-doble","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/utiles/descuentos","isIndex":false,"type":"page","pattern":"^\\/utiles\\/descuentos\\/$","segments":[[{"content":"utiles","dynamic":false,"spread":false}],[{"content":"descuentos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/utiles/descuentos.astro","pathname":"/utiles/descuentos","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/utiles/dias-habiles","isIndex":false,"type":"page","pattern":"^\\/utiles\\/dias-habiles\\/$","segments":[[{"content":"utiles","dynamic":false,"spread":false}],[{"content":"dias-habiles","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/utiles/dias-habiles.astro","pathname":"/utiles/dias-habiles","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/utiles/diezmo","isIndex":false,"type":"page","pattern":"^\\/utiles\\/diezmo\\/$","segments":[[{"content":"utiles","dynamic":false,"spread":false}],[{"content":"diezmo","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/utiles/diezmo.astro","pathname":"/utiles/diezmo","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/utiles/diferencia-entre-fechas","isIndex":false,"type":"page","pattern":"^\\/utiles\\/diferencia-entre-fechas\\/$","segments":[[{"content":"utiles","dynamic":false,"spread":false}],[{"content":"diferencia-entre-fechas","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/utiles/diferencia-entre-fechas.astro","pathname":"/utiles/diferencia-entre-fechas","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/utiles/dividir-cuenta","isIndex":false,"type":"page","pattern":"^\\/utiles\\/dividir-cuenta\\/$","segments":[[{"content":"utiles","dynamic":false,"spread":false}],[{"content":"dividir-cuenta","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/utiles/dividir-cuenta.astro","pathname":"/utiles/dividir-cuenta","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/utiles/ecuaciones","isIndex":false,"type":"page","pattern":"^\\/utiles\\/ecuaciones\\/$","segments":[[{"content":"utiles","dynamic":false,"spread":false}],[{"content":"ecuaciones","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/utiles/ecuaciones.astro","pathname":"/utiles/ecuaciones","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/utiles/edad-mascotas","isIndex":false,"type":"page","pattern":"^\\/utiles\\/edad-mascotas\\/$","segments":[[{"content":"utiles","dynamic":false,"spread":false}],[{"content":"edad-mascotas","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/utiles/edad-mascotas.astro","pathname":"/utiles/edad-mascotas","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/utiles/fracciones","isIndex":false,"type":"page","pattern":"^\\/utiles\\/fracciones\\/$","segments":[[{"content":"utiles","dynamic":false,"spread":false}],[{"content":"fracciones","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/utiles/fracciones.astro","pathname":"/utiles/fracciones","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/utiles/gastos-compartidos","isIndex":false,"type":"page","pattern":"^\\/utiles\\/gastos-compartidos\\/$","segments":[[{"content":"utiles","dynamic":false,"spread":false}],[{"content":"gastos-compartidos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/utiles/gastos-compartidos.astro","pathname":"/utiles/gastos-compartidos","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/utiles/generador-contrasenas","isIndex":false,"type":"page","pattern":"^\\/utiles\\/generador-contrasenas\\/$","segments":[[{"content":"utiles","dynamic":false,"spread":false}],[{"content":"generador-contrasenas","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/utiles/generador-contrasenas.astro","pathname":"/utiles/generador-contrasenas","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/utiles/horas","isIndex":false,"type":"page","pattern":"^\\/utiles\\/horas\\/$","segments":[[{"content":"utiles","dynamic":false,"spread":false}],[{"content":"horas","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/utiles/horas.astro","pathname":"/utiles/horas","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/utiles/millas-a-km","isIndex":false,"type":"page","pattern":"^\\/utiles\\/millas-a-km\\/$","segments":[[{"content":"utiles","dynamic":false,"spread":false}],[{"content":"millas-a-km","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/utiles/millas-a-km.astro","pathname":"/utiles/millas-a-km","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/utiles/propina","isIndex":false,"type":"page","pattern":"^\\/utiles\\/propina\\/$","segments":[[{"content":"utiles","dynamic":false,"spread":false}],[{"content":"propina","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/utiles/propina.astro","pathname":"/utiles/propina","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/utiles/tiempo","isIndex":false,"type":"page","pattern":"^\\/utiles\\/tiempo\\/$","segments":[[{"content":"utiles","dynamic":false,"spread":false}],[{"content":"tiempo","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/utiles/tiempo.astro","pathname":"/utiles/tiempo","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/utiles/[slug]","isIndex":false,"type":"page","pattern":"^\\/utiles\\/([^/]+?)\\/$","segments":[[{"content":"utiles","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/utiles/[slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/utiles","isIndex":true,"type":"page","pattern":"^\\/utiles\\/$","segments":[[{"content":"utiles","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/utiles/index.astro","pathname":"/utiles","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/varios/edad","isIndex":false,"type":"page","pattern":"^\\/varios\\/edad\\/$","segments":[[{"content":"varios","dynamic":false,"spread":false}],[{"content":"edad","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/varios/edad.astro","pathname":"/varios/edad","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/_categoria_@_@astro.P2hmQy0J.css"}],"routeData":{"route":"/[categoria]","isIndex":false,"type":"page","pattern":"^\\/([^/]+?)\\/$","segments":[[{"content":"categoria","dynamic":true,"spread":false}]],"params":["categoria"],"component":"src/pages/[categoria].astro","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/base.P2hmQy0J.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}}],"serverLike":true,"middlewareMode":"classic","base":"/","trailingSlash":"always","compressHTML":true,"experimentalQueuedRendering":{"enabled":false,"poolSize":0,"contentCache":false},"componentMetadata":[["C:/proyectos/seo-tools/src/pages/contacto.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/finanzas/aguinaldo.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/finanzas/ahorro-jubilacion.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/finanzas/amortizacion-prestamo.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/finanzas/calculadora-dividendos.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/finanzas/comprar-vs-alquilar.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/finanzas/costo-auto.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/finanzas/cuota-maxima.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/finanzas/cuotas.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/finanzas/dolar-tarjeta.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/finanzas/ganancias.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/finanzas/indemnizacion.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/finanzas/inflacion-acumulada.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/finanzas/inflacion.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/finanzas/interes-compuesto.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/finanzas/interes-mora.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/finanzas/interes-simple.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/finanzas/iva.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/finanzas/meta-ahorro.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/finanzas/perdida-poder-adquisitivo.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/finanzas/plazo-fijo.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/finanzas/porcentaje.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/finanzas/prestamo.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/finanzas/regla-50-30-20.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/finanzas/regla-del-72.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/finanzas/rendimiento-inversion.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/finanzas/retiro-fire.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/finanzas/tasa-de-retorno.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/finanzas/tasas-tna-tea.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/finanzas/vacaciones.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/finanzas/valor-futuro.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/finanzas/valor-presente.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/hogar/aire-acondicionado.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/hogar/consumo-electrico.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/hogar/hormigon.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/hogar/ladrillos.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/hogar/luz.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/hogar/metros-cuadrados.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/hogar/pintura.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/matematica/areas.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/matematica/calculadora-binomial.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/matematica/calculadora-combinatoria.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/matematica/calculadora-de-angulos.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/matematica/calculadora-de-volumenes.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/matematica/calculadora-divisores.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/matematica/calculadora-matrices.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/matematica/calculadora-numeros-primos.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/matematica/calculadora-percentil.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/matematica/calculadora-porcentil.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/matematica/calculadora-potencia.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/matematica/calculadora-probabilidad.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/matematica/calculadora-proporcion.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/matematica/calculadora-raiz-cuadrada.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/matematica/calculadora-raiz-cubica.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/matematica/circulo.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/matematica/combinaciones-permutaciones.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/matematica/conversor-bases.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/matematica/decimal-a-fraccion.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/matematica/decremento-porcentual.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/matematica/desviacion-media.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/matematica/ecuaciones-segundo-grado.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/matematica/factorial.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/matematica/fraccion-a-decimal.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/matematica/incremento-porcentual.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/matematica/logaritmos.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/matematica/mcm-mcd.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/matematica/media-ponderada.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/matematica/notacion-cientifica.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/matematica/pitagoras.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/matematica/porcentaje-inverso.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/matematica/promedio-mediana-moda.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/matematica/rango-estadistico.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/matematica/regla-de-tres.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/matematica/sistemas-ecuaciones.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/matematica/triangulo.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/matematica/varianza-desviacion-estandar.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/negocios/comisiones.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/negocios/margen.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/negocios/markup-margen.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/negocios/precio-venta.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/negocios/punto-equilibrio.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/negocios/tarifa-freelance.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/negocios/valor-de-tu-hora.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/privacidad.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/salud/agua.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/salud/calorias.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/salud/dejar-de-fumar.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/salud/embarazo.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/salud/frecuencia-cardiaca.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/salud/imc.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/salud/keto.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/salud/ovulacion.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/salud/proteina.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/salud/volumen-definicion.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/seo/analizador-parrafos.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/seo/analizador-repeticion.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/seo/analizador-titulos.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/seo/anchor-text-ratio.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/seo/calculadora-alcance.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/seo/calculadora-cpa.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/seo/calculadora-cpc.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/seo/calculadora-cpl.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/seo/calculadora-cpm.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/seo/calculadora-ctr.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/seo/contador-caracteres-sin-espacios.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/seo/contador-caracteres.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/seo/contador-encabezados.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/seo/contador-frases.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/seo/contador-hashtags.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/seo/contador-keywords.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/seo/contador-palabras.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/seo/densidad-enlaces-internos.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/seo/densidad-keyword.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/seo/engagement-rate.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/seo/frecuencia-palabras.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/seo/frecuencia-publicitaria.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/seo/generador-slug.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/seo/longitud-meta-description.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/seo/longitud-titulo-seo.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/seo/radio-texto-html-.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/seo/roi-marketing.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/seo/tasa-conversion.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/seo/tiempo-de-lectura.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/seo/tiempo-lectura.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/seo/tiempo-ranking-seo.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/unidades/bytes-a-mb.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/unidades/cm-a-pulgadas.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/unidades/conversor-temperatura.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/unidades/conversor-velocidad.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/unidades/gal-to-l.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/unidades/horas-a-dias.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/unidades/kg-to-lb.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/unidades/km-a-millas.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/unidades/lb-to-kg.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/unidades/litros-a-galones.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/unidades/m2-a-ft2.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/unidades/mb-a-gb.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/unidades/metros-a-pies.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/unidades/miles-to-km.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/unidades/minutos-a-horas.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/unidades/pies-a-metros.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/unidades/pies-cuadrados-a-metros-cuadrados.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/unidades/pulgadas-a-cm.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/unidades/segundos-a-horas.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/unidades/semanas-a-meses.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/utiles/[slug].astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/utiles/asado.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/utiles/bebidas.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/utiles/calculadora-beneficio-unidad.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/utiles/calculadora-costos-fijos-variables.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/utiles/calculadora-crecimiento-ventas.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/utiles/calculadora-de-escalas.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/utiles/calculadora-de-markup.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/utiles/calculadora-de-proporciones.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/utiles/calculadora-desviacion-estandar.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/utiles/calculadora-fecha-futura.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/utiles/calculadora-fecha-pasada.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/utiles/calculadora-flujo-de-caja.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/utiles/calculadora-impuestos-ventas.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/utiles/calculadora-inventario-ideal.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/utiles/calculadora-inversion-aportes-periodicos.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/utiles/calculadora-ltv.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/utiles/calculadora-margen-bruto.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/utiles/calculadora-margen-neto.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/utiles/calculadora-rentabilidad-ecommerce.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/utiles/calculadora-rentabilidad-negocio.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/utiles/calculadora-rentabilidad-producto.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/utiles/calculadora-roas.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/utiles/calculadora-ticket-promedio.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/utiles/combustible.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/utiles/contador-de-caracteres.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/utiles/contador-de-letras.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/utiles/contador-de-palabras-unicas.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/utiles/contador-de-vocales.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/utiles/contador-dias-cumpleanos.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/utiles/contador-dias-navidad.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/utiles/costo-por-uso.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/utiles/descuento-doble.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/utiles/descuentos.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/utiles/dias-habiles.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/utiles/diezmo.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/utiles/diferencia-entre-fechas.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/utiles/dividir-cuenta.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/utiles/ecuaciones.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/utiles/edad-mascotas.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/utiles/fracciones.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/utiles/gastos-compartidos.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/utiles/generador-contrasenas.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/utiles/horas.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/utiles/index.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/utiles/millas-a-km.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/utiles/propina.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/utiles/tiempo.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/varios/edad.astro",{"propagation":"none","containsHead":true}],["C:/proyectos/seo-tools/src/pages/[categoria].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"chunks/_noop-middleware_rBEj3WFf.mjs","virtual:cloudflare/worker-entry":"prerender-entry.DmADmm7p.mjs","\u0000virtual:astro:actions/noop-entrypoint":"chunks/noop-entrypoint_DsBX4kaI.mjs","\u0000virtual:astro:session-driver":"chunks/_virtual_astro_session-driver_Csu6PJY6.mjs","\u0000virtual:astro:server-island-manifest":"chunks/_virtual_astro_server-island-manifest_zfG9aQW0.mjs","\u0000virtual:astro:page:src/pages/contacto@_@astro":"chunks/contacto_BXL_ZAQm.mjs","\u0000virtual:astro:page:src/pages/finanzas/aguinaldo@_@astro":"chunks/aguinaldo_ZNApt2Dr.mjs","\u0000virtual:astro:page:src/pages/finanzas/ahorro-jubilacion@_@astro":"chunks/ahorro-jubilacion_Cmwk3Hwn.mjs","\u0000virtual:astro:page:src/pages/finanzas/amortizacion-prestamo@_@astro":"chunks/amortizacion-prestamo_DxwheGBS.mjs","\u0000virtual:astro:page:src/pages/finanzas/calculadora-dividendos@_@astro":"chunks/calculadora-dividendos_DftPQeOP.mjs","\u0000virtual:astro:page:src/pages/finanzas/comprar-vs-alquilar@_@astro":"chunks/comprar-vs-alquilar_D798bRia.mjs","\u0000virtual:astro:page:src/pages/finanzas/costo-auto@_@astro":"chunks/costo-auto_BprfZUMK.mjs","\u0000virtual:astro:page:src/pages/finanzas/cuota-maxima@_@astro":"chunks/cuota-maxima_BcB1Ibm4.mjs","\u0000virtual:astro:page:src/pages/finanzas/cuotas@_@astro":"chunks/cuotas_DWMyHzR1.mjs","\u0000virtual:astro:page:src/pages/finanzas/dolar-tarjeta@_@astro":"chunks/dolar-tarjeta_BAYI7dPd.mjs","\u0000virtual:astro:page:src/pages/finanzas/ganancias@_@astro":"chunks/ganancias_UmajRfv2.mjs","\u0000virtual:astro:page:src/pages/finanzas/indemnizacion@_@astro":"chunks/indemnizacion_Djrok2gE.mjs","\u0000virtual:astro:page:src/pages/finanzas/inflacion@_@astro":"chunks/inflacion_e3NnNzx4.mjs","\u0000virtual:astro:page:src/pages/finanzas/inflacion-acumulada@_@astro":"chunks/inflacion-acumulada_B8qGzAGD.mjs","\u0000virtual:astro:page:src/pages/finanzas/interes-compuesto@_@astro":"chunks/interes-compuesto_By3e-20o.mjs","\u0000virtual:astro:page:src/pages/finanzas/interes-mora@_@astro":"chunks/interes-mora_D_GZ4FlW.mjs","\u0000virtual:astro:page:src/pages/finanzas/interes-simple@_@astro":"chunks/interes-simple_BjpLC8KF.mjs","\u0000virtual:astro:page:src/pages/finanzas/iva@_@astro":"chunks/iva_BilLXZYx.mjs","\u0000virtual:astro:page:src/pages/finanzas/meta-ahorro@_@astro":"chunks/meta-ahorro_DWLax5n_.mjs","\u0000virtual:astro:page:src/pages/finanzas/perdida-poder-adquisitivo@_@astro":"chunks/perdida-poder-adquisitivo_Cbv2RO6c.mjs","\u0000virtual:astro:page:src/pages/finanzas/plazo-fijo@_@astro":"chunks/plazo-fijo_0Jv7ZZGU.mjs","\u0000virtual:astro:page:src/pages/finanzas/porcentaje@_@astro":"chunks/porcentaje_B7_EDevP.mjs","\u0000virtual:astro:page:src/pages/finanzas/prestamo@_@astro":"chunks/prestamo_DaeGowwE.mjs","\u0000virtual:astro:page:src/pages/finanzas/regla-50-30-20@_@astro":"chunks/regla-50-30-20_D3gI2V6e.mjs","\u0000virtual:astro:page:src/pages/finanzas/regla-del-72@_@astro":"chunks/regla-del-72_CYk3j2dQ.mjs","\u0000virtual:astro:page:src/pages/finanzas/rendimiento-inversion@_@astro":"chunks/rendimiento-inversion_C-A9XOgV.mjs","\u0000virtual:astro:page:src/pages/finanzas/retiro-fire@_@astro":"chunks/retiro-fire_C70Fa4Q8.mjs","\u0000virtual:astro:page:src/pages/finanzas/tasa-de-retorno@_@astro":"chunks/tasa-de-retorno_CHq522r2.mjs","\u0000virtual:astro:page:src/pages/finanzas/tasas-tna-tea@_@astro":"chunks/tasas-tna-tea_Bo5YC-5P.mjs","\u0000virtual:astro:page:src/pages/finanzas/vacaciones@_@astro":"chunks/vacaciones_amXFOqff.mjs","\u0000virtual:astro:page:src/pages/finanzas/valor-futuro@_@astro":"chunks/valor-futuro_Bu9_08yO.mjs","\u0000virtual:astro:page:src/pages/finanzas/valor-presente@_@astro":"chunks/valor-presente_D7hkfRxF.mjs","\u0000virtual:astro:page:src/pages/hogar/aire-acondicionado@_@astro":"chunks/aire-acondicionado_C1dE5mfY.mjs","\u0000virtual:astro:page:src/pages/hogar/consumo-electrico@_@astro":"chunks/consumo-electrico_Cd2aqYo4.mjs","\u0000virtual:astro:page:src/pages/hogar/hormigon@_@astro":"chunks/hormigon_BZmezCZm.mjs","\u0000virtual:astro:page:src/pages/hogar/ladrillos@_@astro":"chunks/ladrillos_DMUnyMzD.mjs","\u0000virtual:astro:page:src/pages/hogar/luz@_@astro":"chunks/luz_CL4DTZvB.mjs","\u0000virtual:astro:page:src/pages/hogar/metros-cuadrados@_@astro":"chunks/metros-cuadrados_DPt9gO-6.mjs","\u0000virtual:astro:page:src/pages/hogar/pintura@_@astro":"chunks/pintura_DR1fvcUL.mjs","\u0000virtual:astro:page:src/pages/matematica/areas@_@astro":"chunks/areas_BjlJK7ib.mjs","\u0000virtual:astro:page:src/pages/matematica/calculadora-binomial@_@astro":"chunks/calculadora-binomial_CFtxK7he.mjs","\u0000virtual:astro:page:src/pages/matematica/calculadora-combinatoria@_@astro":"chunks/calculadora-combinatoria_DYVaRlwY.mjs","\u0000virtual:astro:page:src/pages/matematica/calculadora-de-angulos@_@astro":"chunks/calculadora-de-angulos_DfgAp6dp.mjs","\u0000virtual:astro:page:src/pages/matematica/calculadora-de-volumenes@_@astro":"chunks/calculadora-de-volumenes_DvPSvrUc.mjs","\u0000virtual:astro:page:src/pages/matematica/calculadora-divisores@_@astro":"chunks/calculadora-divisores_C0wJ-Zsl.mjs","\u0000virtual:astro:page:src/pages/matematica/calculadora-matrices@_@astro":"chunks/calculadora-matrices_Cfjb6zaA.mjs","\u0000virtual:astro:page:src/pages/matematica/calculadora-numeros-primos@_@astro":"chunks/calculadora-numeros-primos_ss6QEm9d.mjs","\u0000virtual:astro:page:src/pages/matematica/calculadora-percentil@_@astro":"chunks/calculadora-percentil_CYEfOGhq.mjs","\u0000virtual:astro:page:src/pages/matematica/calculadora-porcentil@_@astro":"chunks/calculadora-porcentil_CXO-FPim.mjs","\u0000virtual:astro:page:src/pages/matematica/calculadora-potencia@_@astro":"chunks/calculadora-potencia_Ds72TAE9.mjs","\u0000virtual:astro:page:src/pages/matematica/calculadora-probabilidad@_@astro":"chunks/calculadora-probabilidad_BQi4_6Ln.mjs","\u0000virtual:astro:page:src/pages/matematica/calculadora-proporcion@_@astro":"chunks/calculadora-proporcion_BxpMFgid.mjs","\u0000virtual:astro:page:src/pages/matematica/calculadora-raiz-cuadrada@_@astro":"chunks/calculadora-raiz-cuadrada_BO1H94vq.mjs","\u0000virtual:astro:page:src/pages/matematica/calculadora-raiz-cubica@_@astro":"chunks/calculadora-raiz-cubica_CyEy6roT.mjs","\u0000virtual:astro:page:src/pages/matematica/circulo@_@astro":"chunks/circulo_kGZyqDlW.mjs","\u0000virtual:astro:page:src/pages/matematica/combinaciones-permutaciones@_@astro":"chunks/combinaciones-permutaciones_C0wl4gNc.mjs","\u0000virtual:astro:page:src/pages/matematica/conversor-bases@_@astro":"chunks/conversor-bases_qlB_orE6.mjs","\u0000virtual:astro:page:src/pages/matematica/decimal-a-fraccion@_@astro":"chunks/decimal-a-fraccion_DqqOLxrO.mjs","\u0000virtual:astro:page:src/pages/matematica/decremento-porcentual@_@astro":"chunks/decremento-porcentual_Dl0R9cje.mjs","\u0000virtual:astro:page:src/pages/matematica/desviacion-media@_@astro":"chunks/desviacion-media_BYeR6tX9.mjs","\u0000virtual:astro:page:src/pages/matematica/ecuaciones-segundo-grado@_@astro":"chunks/ecuaciones-segundo-grado_CdTQtgOy.mjs","\u0000virtual:astro:page:src/pages/matematica/factorial@_@astro":"chunks/factorial_a2e9iNc6.mjs","\u0000virtual:astro:page:src/pages/matematica/fraccion-a-decimal@_@astro":"chunks/fraccion-a-decimal_C9RcN0sP.mjs","\u0000virtual:astro:page:src/pages/matematica/incremento-porcentual@_@astro":"chunks/incremento-porcentual_DdCSFFnk.mjs","\u0000virtual:astro:page:src/pages/matematica/logaritmos@_@astro":"chunks/logaritmos_CNtRNUGd.mjs","\u0000virtual:astro:page:src/pages/matematica/mcm-mcd@_@astro":"chunks/mcm-mcd_TLp8yddd.mjs","\u0000virtual:astro:page:src/pages/matematica/media-ponderada@_@astro":"chunks/media-ponderada_Berf6kQm.mjs","\u0000virtual:astro:page:src/pages/matematica/notacion-cientifica@_@astro":"chunks/notacion-cientifica_DKsIoIpj.mjs","\u0000virtual:astro:page:src/pages/matematica/pitagoras@_@astro":"chunks/pitagoras_D8Bh4gs6.mjs","\u0000virtual:astro:page:src/pages/matematica/porcentaje-inverso@_@astro":"chunks/porcentaje-inverso_BKcUqYBS.mjs","\u0000virtual:astro:page:src/pages/matematica/promedio-mediana-moda@_@astro":"chunks/promedio-mediana-moda_zGq5-1oa.mjs","\u0000virtual:astro:page:src/pages/matematica/rango-estadistico@_@astro":"chunks/rango-estadistico_CX-e-tuR.mjs","\u0000virtual:astro:page:src/pages/matematica/regla-de-tres@_@astro":"chunks/regla-de-tres_nxE9tFtS.mjs","\u0000virtual:astro:page:src/pages/matematica/sistemas-ecuaciones@_@astro":"chunks/sistemas-ecuaciones_Dap6-LpD.mjs","\u0000virtual:astro:page:src/pages/matematica/triangulo@_@astro":"chunks/triangulo_9zqQG6Me.mjs","\u0000virtual:astro:page:src/pages/matematica/varianza-desviacion-estandar@_@astro":"chunks/varianza-desviacion-estandar_DSnjskJG.mjs","\u0000virtual:astro:page:src/pages/negocios/comisiones@_@astro":"chunks/comisiones_BU8dmTqY.mjs","\u0000virtual:astro:page:src/pages/negocios/margen@_@astro":"chunks/margen_Z1Zf1LgY.mjs","\u0000virtual:astro:page:src/pages/negocios/markup-margen@_@astro":"chunks/markup-margen_Be6cdTux.mjs","\u0000virtual:astro:page:src/pages/negocios/precio-venta@_@astro":"chunks/precio-venta_BeT80rgE.mjs","\u0000virtual:astro:page:src/pages/negocios/punto-equilibrio@_@astro":"chunks/punto-equilibrio_CsBBgZ40.mjs","\u0000virtual:astro:page:src/pages/negocios/tarifa-freelance@_@astro":"chunks/tarifa-freelance_C5BqBZuE.mjs","\u0000virtual:astro:page:src/pages/negocios/valor-de-tu-hora@_@astro":"chunks/valor-de-tu-hora_BVMfQ1FW.mjs","\u0000virtual:astro:page:src/pages/privacidad@_@astro":"chunks/privacidad_B2I8cTrc.mjs","\u0000virtual:astro:page:src/pages/salud/agua@_@astro":"chunks/agua_KQ-1Mo3p.mjs","\u0000virtual:astro:page:src/pages/salud/calorias@_@astro":"chunks/calorias_Bnc_sbAT.mjs","\u0000virtual:astro:page:src/pages/salud/dejar-de-fumar@_@astro":"chunks/dejar-de-fumar_RFJp3C90.mjs","\u0000virtual:astro:page:src/pages/salud/embarazo@_@astro":"chunks/embarazo_UBA8MdDx.mjs","\u0000virtual:astro:page:src/pages/salud/frecuencia-cardiaca@_@astro":"chunks/frecuencia-cardiaca_ByVT-55k.mjs","\u0000virtual:astro:page:src/pages/salud/imc@_@astro":"chunks/imc_BcZOCmhO.mjs","\u0000virtual:astro:page:src/pages/salud/keto@_@astro":"chunks/keto_c8_ocLlt.mjs","\u0000virtual:astro:page:src/pages/salud/ovulacion@_@astro":"chunks/ovulacion_Btr8Fu8o.mjs","\u0000virtual:astro:page:src/pages/salud/proteina@_@astro":"chunks/proteina_CvlKzol1.mjs","\u0000virtual:astro:page:src/pages/salud/volumen-definicion@_@astro":"chunks/volumen-definicion_BV2o01Bd.mjs","\u0000virtual:astro:page:src/pages/seo/analizador-parrafos@_@astro":"chunks/analizador-parrafos_Cc5bzesr.mjs","\u0000virtual:astro:page:src/pages/seo/analizador-repeticion@_@astro":"chunks/analizador-repeticion_CDEv4pwY.mjs","\u0000virtual:astro:page:src/pages/seo/analizador-titulos@_@astro":"chunks/analizador-titulos_HPw_3Pnp.mjs","\u0000virtual:astro:page:src/pages/seo/anchor-text-ratio@_@astro":"chunks/anchor-text-ratio_CQJJMTNu.mjs","\u0000virtual:astro:page:src/pages/seo/calculadora-alcance@_@astro":"chunks/calculadora-alcance_CViRxgsB.mjs","\u0000virtual:astro:page:src/pages/seo/calculadora-cpa@_@astro":"chunks/calculadora-cpa_Cnp3DXc6.mjs","\u0000virtual:astro:page:src/pages/seo/calculadora-cpc@_@astro":"chunks/calculadora-cpc_Cep776O1.mjs","\u0000virtual:astro:page:src/pages/seo/calculadora-cpl@_@astro":"chunks/calculadora-cpl_CFMGVEwr.mjs","\u0000virtual:astro:page:src/pages/seo/calculadora-cpm@_@astro":"chunks/calculadora-cpm_DK9eb0ET.mjs","\u0000virtual:astro:page:src/pages/seo/calculadora-ctr@_@astro":"chunks/calculadora-ctr_B73IPHV7.mjs","\u0000virtual:astro:page:src/pages/seo/contador-caracteres@_@astro":"chunks/contador-caracteres_CLqzhYk1.mjs","\u0000virtual:astro:page:src/pages/seo/contador-caracteres-sin-espacios@_@astro":"chunks/contador-caracteres-sin-espacios_Bx_lIt-H.mjs","\u0000virtual:astro:page:src/pages/seo/contador-encabezados@_@astro":"chunks/contador-encabezados_DFyKy1ha.mjs","\u0000virtual:astro:page:src/pages/seo/contador-frases@_@astro":"chunks/contador-frases_BU0L1VG3.mjs","\u0000virtual:astro:page:src/pages/seo/contador-hashtags@_@astro":"chunks/contador-hashtags_C6j3oQyS.mjs","\u0000virtual:astro:page:src/pages/seo/contador-keywords@_@astro":"chunks/contador-keywords_DBol08dS.mjs","\u0000virtual:astro:page:src/pages/seo/contador-palabras@_@astro":"chunks/contador-palabras_BN3PUxaQ.mjs","\u0000virtual:astro:page:src/pages/seo/densidad-enlaces-internos@_@astro":"chunks/densidad-enlaces-internos_DFmQ--5w.mjs","\u0000virtual:astro:page:src/pages/seo/densidad-keyword@_@astro":"chunks/densidad-keyword_BGe4h-yK.mjs","\u0000virtual:astro:page:src/pages/seo/engagement-rate@_@astro":"chunks/engagement-rate_Cx3sGoKO.mjs","\u0000virtual:astro:page:src/pages/seo/frecuencia-palabras@_@astro":"chunks/frecuencia-palabras_TmOxYIlD.mjs","\u0000virtual:astro:page:src/pages/seo/frecuencia-publicitaria@_@astro":"chunks/frecuencia-publicitaria_DrGjfC5D.mjs","\u0000virtual:astro:page:src/pages/seo/generador-slug@_@astro":"chunks/generador-slug_C-1CdZ1q.mjs","\u0000virtual:astro:page:src/pages/seo/longitud-meta-description@_@astro":"chunks/longitud-meta-description_CeAb__ot.mjs","\u0000virtual:astro:page:src/pages/seo/longitud-titulo-seo@_@astro":"chunks/longitud-titulo-seo_C__ihR2F.mjs","\u0000virtual:astro:page:src/pages/seo/radio-texto-html-@_@astro":"chunks/radio-texto-html-_CpYFIxP2.mjs","\u0000virtual:astro:page:src/pages/seo/roi-marketing@_@astro":"chunks/roi-marketing_DE1On-za.mjs","\u0000virtual:astro:page:src/pages/seo/tasa-conversion@_@astro":"chunks/tasa-conversion_BFMIda51.mjs","\u0000virtual:astro:page:src/pages/seo/tiempo-de-lectura@_@astro":"chunks/tiempo-de-lectura_CMTkEsnN.mjs","\u0000virtual:astro:page:src/pages/seo/tiempo-lectura@_@astro":"chunks/tiempo-lectura_Cz5pFrmF.mjs","\u0000virtual:astro:page:src/pages/seo/tiempo-ranking-seo@_@astro":"chunks/tiempo-ranking-seo_CgE7liKY.mjs","\u0000virtual:astro:page:src/pages/unidades/bytes-a-mb@_@astro":"chunks/bytes-a-mb_Dy0CRDeh.mjs","\u0000virtual:astro:page:src/pages/unidades/cm-a-pulgadas@_@astro":"chunks/cm-a-pulgadas_BkBUVQ7m.mjs","\u0000virtual:astro:page:src/pages/unidades/conversor-temperatura@_@astro":"chunks/conversor-temperatura_C6EYldSW.mjs","\u0000virtual:astro:page:src/pages/unidades/conversor-velocidad@_@astro":"chunks/conversor-velocidad_BmOB5ANP.mjs","\u0000virtual:astro:page:src/pages/unidades/gal-to-l@_@astro":"chunks/gal-to-l_zpquuWN2.mjs","\u0000virtual:astro:page:src/pages/unidades/horas-a-dias@_@astro":"chunks/horas-a-dias_hCbua-f6.mjs","\u0000virtual:astro:page:src/pages/unidades/kg-to-lb@_@astro":"chunks/kg-to-lb_DdZy39LS.mjs","\u0000virtual:astro:page:src/pages/unidades/km-a-millas@_@astro":"chunks/km-a-millas_CywAe4nM.mjs","\u0000virtual:astro:page:src/pages/unidades/lb-to-kg@_@astro":"chunks/lb-to-kg_CrPYZmXn.mjs","\u0000virtual:astro:page:src/pages/unidades/litros-a-galones@_@astro":"chunks/litros-a-galones_C38lKTCa.mjs","\u0000virtual:astro:page:src/pages/unidades/m2-a-ft2@_@astro":"chunks/m2-a-ft2_ClgHeyT_.mjs","\u0000virtual:astro:page:src/pages/unidades/mb-a-gb@_@astro":"chunks/mb-a-gb_DyFg61Gv.mjs","\u0000virtual:astro:page:src/pages/unidades/metros-a-pies@_@astro":"chunks/metros-a-pies_CTmFhSk4.mjs","\u0000virtual:astro:page:src/pages/unidades/miles-to-km@_@astro":"chunks/miles-to-km_D2boa9QI.mjs","\u0000virtual:astro:page:src/pages/unidades/minutos-a-horas@_@astro":"chunks/minutos-a-horas_D_psYAlO.mjs","\u0000virtual:astro:page:src/pages/unidades/pies-a-metros@_@astro":"chunks/pies-a-metros_CLP41U5J.mjs","\u0000virtual:astro:page:src/pages/unidades/pies-cuadrados-a-metros-cuadrados@_@astro":"chunks/pies-cuadrados-a-metros-cuadrados_CESYHYfO.mjs","\u0000virtual:astro:page:src/pages/unidades/pulgadas-a-cm@_@astro":"chunks/pulgadas-a-cm_3luFZ8f-.mjs","\u0000virtual:astro:page:src/pages/unidades/segundos-a-horas@_@astro":"chunks/segundos-a-horas_B5187azZ.mjs","\u0000virtual:astro:page:src/pages/unidades/semanas-a-meses@_@astro":"chunks/semanas-a-meses_vLMOxHZ3.mjs","\u0000virtual:astro:page:src/pages/utiles/asado@_@astro":"chunks/asado_sg1PzGjR.mjs","\u0000virtual:astro:page:src/pages/utiles/bebidas@_@astro":"chunks/bebidas_Dbbb4NmC.mjs","\u0000virtual:astro:page:src/pages/utiles/calculadora-beneficio-unidad@_@astro":"chunks/calculadora-beneficio-unidad_u4yM74f6.mjs","\u0000virtual:astro:page:src/pages/utiles/calculadora-costos-fijos-variables@_@astro":"chunks/calculadora-costos-fijos-variables_DuldACgX.mjs","\u0000virtual:astro:page:src/pages/utiles/calculadora-crecimiento-ventas@_@astro":"chunks/calculadora-crecimiento-ventas_Dq88KVAM.mjs","\u0000virtual:astro:page:src/pages/utiles/calculadora-de-escalas@_@astro":"chunks/calculadora-de-escalas_DIcKIoxP.mjs","\u0000virtual:astro:page:src/pages/utiles/calculadora-de-markup@_@astro":"chunks/calculadora-de-markup_DP_jJY12.mjs","\u0000virtual:astro:page:src/pages/utiles/calculadora-de-proporciones@_@astro":"chunks/calculadora-de-proporciones_COK1kjTA.mjs","\u0000virtual:astro:page:src/pages/utiles/calculadora-desviacion-estandar@_@astro":"chunks/calculadora-desviacion-estandar_jovixchW.mjs","\u0000virtual:astro:page:src/pages/utiles/calculadora-fecha-futura@_@astro":"chunks/calculadora-fecha-futura_BmSuJz-l.mjs","\u0000virtual:astro:page:src/pages/utiles/calculadora-fecha-pasada@_@astro":"chunks/calculadora-fecha-pasada_dGDpReEz.mjs","\u0000virtual:astro:page:src/pages/utiles/calculadora-flujo-de-caja@_@astro":"chunks/calculadora-flujo-de-caja_BrYS9991.mjs","\u0000virtual:astro:page:src/pages/utiles/calculadora-impuestos-ventas@_@astro":"chunks/calculadora-impuestos-ventas_BmzGltlI.mjs","\u0000virtual:astro:page:src/pages/utiles/calculadora-inventario-ideal@_@astro":"chunks/calculadora-inventario-ideal_ngPP12Eo.mjs","\u0000virtual:astro:page:src/pages/utiles/calculadora-inversion-aportes-periodicos@_@astro":"chunks/calculadora-inversion-aportes-periodicos_BuNNQkRF.mjs","\u0000virtual:astro:page:src/pages/utiles/calculadora-ltv@_@astro":"chunks/calculadora-ltv_NKavKNoE.mjs","\u0000virtual:astro:page:src/pages/utiles/calculadora-margen-bruto@_@astro":"chunks/calculadora-margen-bruto_CcBc__Jj.mjs","\u0000virtual:astro:page:src/pages/utiles/calculadora-margen-neto@_@astro":"chunks/calculadora-margen-neto_MxPzkVxa.mjs","\u0000virtual:astro:page:src/pages/utiles/calculadora-percentil@_@astro":"chunks/calculadora-percentil_16I_fmwn.mjs","\u0000virtual:astro:page:src/pages/utiles/calculadora-rentabilidad-ecommerce@_@astro":"chunks/calculadora-rentabilidad-ecommerce_7_YRUu2S.mjs","\u0000virtual:astro:page:src/pages/utiles/calculadora-rentabilidad-negocio@_@astro":"chunks/calculadora-rentabilidad-negocio_ChaJnKOS.mjs","\u0000virtual:astro:page:src/pages/utiles/calculadora-rentabilidad-producto@_@astro":"chunks/calculadora-rentabilidad-producto_8BPccddI.mjs","\u0000virtual:astro:page:src/pages/utiles/calculadora-roas@_@astro":"chunks/calculadora-roas_11jC35oW.mjs","\u0000virtual:astro:page:src/pages/utiles/calculadora-ticket-promedio@_@astro":"chunks/calculadora-ticket-promedio_BtuVjouH.mjs","\u0000virtual:astro:page:src/pages/utiles/combustible@_@astro":"chunks/combustible_rDUizmEn.mjs","\u0000virtual:astro:page:src/pages/utiles/contador-de-caracteres@_@astro":"chunks/contador-de-caracteres_Dm0kRYDQ.mjs","\u0000virtual:astro:page:src/pages/utiles/contador-de-letras@_@astro":"chunks/contador-de-letras_DJ2tYhGS.mjs","\u0000virtual:astro:page:src/pages/utiles/contador-de-palabras-unicas@_@astro":"chunks/contador-de-palabras-unicas__eF0p3LU.mjs","\u0000virtual:astro:page:src/pages/utiles/contador-de-vocales@_@astro":"chunks/contador-de-vocales_DxFQ9T_S.mjs","\u0000virtual:astro:page:src/pages/utiles/contador-dias-cumpleanos@_@astro":"chunks/contador-dias-cumpleanos_CmOs_DgR.mjs","\u0000virtual:astro:page:src/pages/utiles/contador-dias-navidad@_@astro":"chunks/contador-dias-navidad_CuKHYfzA.mjs","\u0000virtual:astro:page:src/pages/utiles/costo-por-uso@_@astro":"chunks/costo-por-uso_CCTvAQu6.mjs","\u0000virtual:astro:page:src/pages/utiles/descuento-doble@_@astro":"chunks/descuento-doble_BLR3pvcl.mjs","\u0000virtual:astro:page:src/pages/utiles/descuentos@_@astro":"chunks/descuentos_fqkOL54G.mjs","\u0000virtual:astro:page:src/pages/utiles/dias-habiles@_@astro":"chunks/dias-habiles_BGHvoV9q.mjs","\u0000virtual:astro:page:src/pages/utiles/diezmo@_@astro":"chunks/diezmo_DE0wzjxM.mjs","\u0000virtual:astro:page:src/pages/utiles/diferencia-entre-fechas@_@astro":"chunks/diferencia-entre-fechas_BgS-OAgu.mjs","\u0000virtual:astro:page:src/pages/utiles/dividir-cuenta@_@astro":"chunks/dividir-cuenta_B42En45F.mjs","\u0000virtual:astro:page:src/pages/utiles/ecuaciones@_@astro":"chunks/ecuaciones_BIL8gvQo.mjs","\u0000virtual:astro:page:src/pages/utiles/edad-mascotas@_@astro":"chunks/edad-mascotas_DRXiOThj.mjs","\u0000virtual:astro:page:src/pages/utiles/fracciones@_@astro":"chunks/fracciones_D59Vy5iF.mjs","\u0000virtual:astro:page:src/pages/utiles/gastos-compartidos@_@astro":"chunks/gastos-compartidos_CPar4fhH.mjs","\u0000virtual:astro:page:src/pages/utiles/generador-contrasenas@_@astro":"chunks/generador-contrasenas_CyZl0ds5.mjs","\u0000virtual:astro:page:src/pages/utiles/horas@_@astro":"chunks/horas_CpUHUSuh.mjs","\u0000virtual:astro:page:src/pages/utiles/millas-a-km@_@astro":"chunks/millas-a-km_BP97mVKJ.mjs","\u0000virtual:astro:page:src/pages/utiles/propina@_@astro":"chunks/propina_CY7M_jbP.mjs","\u0000virtual:astro:page:src/pages/utiles/tiempo@_@astro":"chunks/tiempo_BE-jLxiv.mjs","\u0000virtual:astro:page:src/pages/utiles/[slug]@_@astro":"chunks/_slug__DZcczHdE.mjs","\u0000virtual:astro:page:src/pages/utiles/index@_@astro":"chunks/index_B8kp-aqE.mjs","\u0000virtual:astro:page:src/pages/varios/edad@_@astro":"chunks/edad_C2TQod9g.mjs","\u0000virtual:astro:page:src/pages/index@_@astro":"chunks/index_D8bGbXUv.mjs","C:/proyectos/seo-tools/node_modules/@astrojs/cloudflare/dist/entrypoints/image-service-external.js":"chunks/image-service-external_BtW26o1M.mjs","\u0000virtual:astro:page:src/pages/[categoria]@_@astro":"chunks/_categoria__ByxnfcSj.mjs","C:/proyectos/seo-tools/src/pages/finanzas/aguinaldo.astro?astro&type=script&index=0&lang.ts":"_astro/aguinaldo.astro_astro_type_script_index_0_lang.BOoKPCXR.js","C:/proyectos/seo-tools/src/pages/finanzas/ahorro-jubilacion.astro?astro&type=script&index=0&lang.ts":"_astro/ahorro-jubilacion.astro_astro_type_script_index_0_lang.BwxnG6VH.js","C:/proyectos/seo-tools/src/pages/finanzas/calculadora-dividendos.astro?astro&type=script&index=0&lang.ts":"_astro/calculadora-dividendos.astro_astro_type_script_index_0_lang.BsfRbD2n.js","C:/proyectos/seo-tools/src/pages/finanzas/amortizacion-prestamo.astro?astro&type=script&index=0&lang.ts":"_astro/amortizacion-prestamo.astro_astro_type_script_index_0_lang.DVXi6rpT.js","C:/proyectos/seo-tools/src/pages/finanzas/costo-auto.astro?astro&type=script&index=0&lang.ts":"_astro/costo-auto.astro_astro_type_script_index_0_lang.BTy1_zvQ.js","C:/proyectos/seo-tools/src/pages/finanzas/cuotas.astro?astro&type=script&index=0&lang.ts":"_astro/cuotas.astro_astro_type_script_index_0_lang.B9IsOSND.js","C:/proyectos/seo-tools/src/pages/finanzas/dolar-tarjeta.astro?astro&type=script&index=0&lang.ts":"_astro/dolar-tarjeta.astro_astro_type_script_index_0_lang.Cu1KUWWd.js","C:/proyectos/seo-tools/src/pages/finanzas/cuota-maxima.astro?astro&type=script&index=0&lang.ts":"_astro/cuota-maxima.astro_astro_type_script_index_0_lang.CUuDkpPo.js","C:/proyectos/seo-tools/src/pages/finanzas/indemnizacion.astro?astro&type=script&index=0&lang.ts":"_astro/indemnizacion.astro_astro_type_script_index_0_lang.DXi_qvSL.js","C:/proyectos/seo-tools/src/pages/finanzas/inflacion.astro?astro&type=script&index=0&lang.ts":"_astro/inflacion.astro_astro_type_script_index_0_lang.BQZ_R6Kc.js","C:/proyectos/seo-tools/src/pages/finanzas/ganancias.astro?astro&type=script&index=0&lang.ts":"_astro/ganancias.astro_astro_type_script_index_0_lang.C_UmlwbJ.js","C:/proyectos/seo-tools/src/pages/finanzas/interes-mora.astro?astro&type=script&index=0&lang.ts":"_astro/interes-mora.astro_astro_type_script_index_0_lang.BjOqRF-9.js","C:/proyectos/seo-tools/src/pages/finanzas/interes-simple.astro?astro&type=script&index=0&lang.ts":"_astro/interes-simple.astro_astro_type_script_index_0_lang.LPNu0QLK.js","C:/proyectos/seo-tools/src/pages/finanzas/iva.astro?astro&type=script&index=0&lang.ts":"_astro/iva.astro_astro_type_script_index_0_lang.BB6tb58v.js","C:/proyectos/seo-tools/src/pages/finanzas/meta-ahorro.astro?astro&type=script&index=0&lang.ts":"_astro/meta-ahorro.astro_astro_type_script_index_0_lang.J2j1mH8M.js","C:/proyectos/seo-tools/src/pages/finanzas/perdida-poder-adquisitivo.astro?astro&type=script&index=0&lang.ts":"_astro/perdida-poder-adquisitivo.astro_astro_type_script_index_0_lang.CYyn3TyH.js","C:/proyectos/seo-tools/src/pages/finanzas/plazo-fijo.astro?astro&type=script&index=0&lang.ts":"_astro/plazo-fijo.astro_astro_type_script_index_0_lang.D4ZlalGF.js","C:/proyectos/seo-tools/src/pages/finanzas/porcentaje.astro?astro&type=script&index=0&lang.ts":"_astro/porcentaje.astro_astro_type_script_index_0_lang.CqjMNw5J.js","C:/proyectos/seo-tools/src/pages/finanzas/prestamo.astro?astro&type=script&index=0&lang.ts":"_astro/prestamo.astro_astro_type_script_index_0_lang.IRX7TDTS.js","C:/proyectos/seo-tools/src/pages/finanzas/regla-50-30-20.astro?astro&type=script&index=0&lang.ts":"_astro/regla-50-30-20.astro_astro_type_script_index_0_lang.D0rO3nu-.js","C:/proyectos/seo-tools/src/pages/finanzas/regla-del-72.astro?astro&type=script&index=0&lang.ts":"_astro/regla-del-72.astro_astro_type_script_index_0_lang.Bmil8D03.js","C:/proyectos/seo-tools/src/pages/finanzas/rendimiento-inversion.astro?astro&type=script&index=0&lang.ts":"_astro/rendimiento-inversion.astro_astro_type_script_index_0_lang.Dk3sit6M.js","C:/proyectos/seo-tools/src/pages/finanzas/retiro-fire.astro?astro&type=script&index=0&lang.ts":"_astro/retiro-fire.astro_astro_type_script_index_0_lang.CiK4I3bD.js","C:/proyectos/seo-tools/src/pages/finanzas/tasa-de-retorno.astro?astro&type=script&index=0&lang.ts":"_astro/tasa-de-retorno.astro_astro_type_script_index_0_lang.CAQ3nY55.js","C:/proyectos/seo-tools/src/pages/finanzas/vacaciones.astro?astro&type=script&index=0&lang.ts":"_astro/vacaciones.astro_astro_type_script_index_0_lang.RtkD5OVp.js","C:/proyectos/seo-tools/src/pages/finanzas/valor-presente.astro?astro&type=script&index=0&lang.ts":"_astro/valor-presente.astro_astro_type_script_index_0_lang.vhnnrlMo.js","C:/proyectos/seo-tools/src/pages/finanzas/valor-futuro.astro?astro&type=script&index=0&lang.ts":"_astro/valor-futuro.astro_astro_type_script_index_0_lang.D-_cXcwH.js","C:/proyectos/seo-tools/src/pages/hogar/aire-acondicionado.astro?astro&type=script&index=0&lang.ts":"_astro/aire-acondicionado.astro_astro_type_script_index_0_lang.7iNbjeHq.js","C:/proyectos/seo-tools/src/pages/hogar/consumo-electrico.astro?astro&type=script&index=0&lang.ts":"_astro/consumo-electrico.astro_astro_type_script_index_0_lang.CcoBtrW3.js","C:/proyectos/seo-tools/src/pages/hogar/hormigon.astro?astro&type=script&index=0&lang.ts":"_astro/hormigon.astro_astro_type_script_index_0_lang.BSckpsht.js","C:/proyectos/seo-tools/src/pages/hogar/ladrillos.astro?astro&type=script&index=0&lang.ts":"_astro/ladrillos.astro_astro_type_script_index_0_lang.SrYijveu.js","C:/proyectos/seo-tools/src/pages/hogar/luz.astro?astro&type=script&index=0&lang.ts":"_astro/luz.astro_astro_type_script_index_0_lang.XTePeUek.js","C:/proyectos/seo-tools/src/pages/hogar/metros-cuadrados.astro?astro&type=script&index=0&lang.ts":"_astro/metros-cuadrados.astro_astro_type_script_index_0_lang.BVw_q0VV.js","C:/proyectos/seo-tools/src/pages/hogar/pintura.astro?astro&type=script&index=0&lang.ts":"_astro/pintura.astro_astro_type_script_index_0_lang.Bi8wvpNx.js","C:/proyectos/seo-tools/src/pages/matematica/areas.astro?astro&type=script&index=0&lang.ts":"_astro/areas.astro_astro_type_script_index_0_lang.Cn00jhGk.js","C:/proyectos/seo-tools/src/pages/matematica/calculadora-binomial.astro?astro&type=script&index=0&lang.ts":"_astro/calculadora-binomial.astro_astro_type_script_index_0_lang.Dsh6egoe.js","C:/proyectos/seo-tools/src/pages/matematica/calculadora-combinatoria.astro?astro&type=script&index=0&lang.ts":"_astro/calculadora-combinatoria.astro_astro_type_script_index_0_lang.CdQb1LKd.js","C:/proyectos/seo-tools/src/pages/matematica/calculadora-de-angulos.astro?astro&type=script&index=0&lang.ts":"_astro/calculadora-de-angulos.astro_astro_type_script_index_0_lang.DLctZB0N.js","C:/proyectos/seo-tools/src/pages/matematica/calculadora-de-volumenes.astro?astro&type=script&index=0&lang.ts":"_astro/calculadora-de-volumenes.astro_astro_type_script_index_0_lang.Dx8FNRCk.js","C:/proyectos/seo-tools/src/pages/matematica/calculadora-divisores.astro?astro&type=script&index=0&lang.ts":"_astro/calculadora-divisores.astro_astro_type_script_index_0_lang.Dm5QdkC1.js","C:/proyectos/seo-tools/src/pages/matematica/calculadora-matrices.astro?astro&type=script&index=0&lang.ts":"_astro/calculadora-matrices.astro_astro_type_script_index_0_lang.B7gP94it.js","C:/proyectos/seo-tools/src/pages/matematica/calculadora-numeros-primos.astro?astro&type=script&index=0&lang.ts":"_astro/calculadora-numeros-primos.astro_astro_type_script_index_0_lang.DGLd_Rn-.js","C:/proyectos/seo-tools/src/pages/matematica/calculadora-percentil.astro?astro&type=script&index=0&lang.ts":"_astro/calculadora-percentil.astro_astro_type_script_index_0_lang.DAZ526WH.js","C:/proyectos/seo-tools/src/pages/matematica/calculadora-porcentil.astro?astro&type=script&index=0&lang.ts":"_astro/calculadora-porcentil.astro_astro_type_script_index_0_lang.lRDxdjC2.js","C:/proyectos/seo-tools/src/pages/matematica/calculadora-probabilidad.astro?astro&type=script&index=0&lang.ts":"_astro/calculadora-probabilidad.astro_astro_type_script_index_0_lang.DTe8f1K1.js","C:/proyectos/seo-tools/src/pages/matematica/calculadora-proporcion.astro?astro&type=script&index=0&lang.ts":"_astro/calculadora-proporcion.astro_astro_type_script_index_0_lang.DTSLXGX7.js","C:/proyectos/seo-tools/src/pages/matematica/circulo.astro?astro&type=script&index=0&lang.ts":"_astro/circulo.astro_astro_type_script_index_0_lang.BjmtgwbG.js","C:/proyectos/seo-tools/src/pages/matematica/combinaciones-permutaciones.astro?astro&type=script&index=0&lang.ts":"_astro/combinaciones-permutaciones.astro_astro_type_script_index_0_lang.DHcs3fDn.js","C:/proyectos/seo-tools/src/pages/matematica/conversor-bases.astro?astro&type=script&index=0&lang.ts":"_astro/conversor-bases.astro_astro_type_script_index_0_lang.rg6ciyzy.js","C:/proyectos/seo-tools/src/pages/matematica/decremento-porcentual.astro?astro&type=script&index=0&lang.ts":"_astro/decremento-porcentual.astro_astro_type_script_index_0_lang.BANdaTFf.js","C:/proyectos/seo-tools/src/pages/matematica/ecuaciones-segundo-grado.astro?astro&type=script&index=0&lang.ts":"_astro/ecuaciones-segundo-grado.astro_astro_type_script_index_0_lang.C4DNcqMp.js","C:/proyectos/seo-tools/src/pages/matematica/factorial.astro?astro&type=script&index=0&lang.ts":"_astro/factorial.astro_astro_type_script_index_0_lang.mT7OFPJf.js","C:/proyectos/seo-tools/src/pages/matematica/fraccion-a-decimal.astro?astro&type=script&index=0&lang.ts":"_astro/fraccion-a-decimal.astro_astro_type_script_index_0_lang.8xQoRiRQ.js","C:/proyectos/seo-tools/src/pages/matematica/incremento-porcentual.astro?astro&type=script&index=0&lang.ts":"_astro/incremento-porcentual.astro_astro_type_script_index_0_lang.FvOEMEbS.js","C:/proyectos/seo-tools/src/pages/matematica/logaritmos.astro?astro&type=script&index=0&lang.ts":"_astro/logaritmos.astro_astro_type_script_index_0_lang.BSDzSO9q.js","C:/proyectos/seo-tools/src/pages/matematica/mcm-mcd.astro?astro&type=script&index=0&lang.ts":"_astro/mcm-mcd.astro_astro_type_script_index_0_lang.C7ivxGYk.js","C:/proyectos/seo-tools/src/pages/matematica/notacion-cientifica.astro?astro&type=script&index=0&lang.ts":"_astro/notacion-cientifica.astro_astro_type_script_index_0_lang.p7JOLL6s.js","C:/proyectos/seo-tools/src/pages/matematica/pitagoras.astro?astro&type=script&index=0&lang.ts":"_astro/pitagoras.astro_astro_type_script_index_0_lang.Hxcxs9ws.js","C:/proyectos/seo-tools/src/pages/matematica/porcentaje-inverso.astro?astro&type=script&index=0&lang.ts":"_astro/porcentaje-inverso.astro_astro_type_script_index_0_lang.D8tICia0.js","C:/proyectos/seo-tools/src/pages/matematica/promedio-mediana-moda.astro?astro&type=script&index=0&lang.ts":"_astro/promedio-mediana-moda.astro_astro_type_script_index_0_lang.CzEnwOR8.js","C:/proyectos/seo-tools/src/pages/matematica/rango-estadistico.astro?astro&type=script&index=0&lang.ts":"_astro/rango-estadistico.astro_astro_type_script_index_0_lang.UpJImaKT.js","C:/proyectos/seo-tools/src/pages/matematica/regla-de-tres.astro?astro&type=script&index=0&lang.ts":"_astro/regla-de-tres.astro_astro_type_script_index_0_lang.BwuQUp85.js","C:/proyectos/seo-tools/src/pages/matematica/triangulo.astro?astro&type=script&index=0&lang.ts":"_astro/triangulo.astro_astro_type_script_index_0_lang.CGfH9ha2.js","C:/proyectos/seo-tools/src/pages/matematica/varianza-desviacion-estandar.astro?astro&type=script&index=0&lang.ts":"_astro/varianza-desviacion-estandar.astro_astro_type_script_index_0_lang.BOG2bxNM.js","C:/proyectos/seo-tools/src/pages/negocios/comisiones.astro?astro&type=script&index=0&lang.ts":"_astro/comisiones.astro_astro_type_script_index_0_lang.DZSL_KYe.js","C:/proyectos/seo-tools/src/pages/negocios/margen.astro?astro&type=script&index=0&lang.ts":"_astro/margen.astro_astro_type_script_index_0_lang.CeHLJZxD.js","C:/proyectos/seo-tools/src/pages/negocios/markup-margen.astro?astro&type=script&index=0&lang.ts":"_astro/markup-margen.astro_astro_type_script_index_0_lang.D8hZ5hlQ.js","C:/proyectos/seo-tools/src/pages/negocios/precio-venta.astro?astro&type=script&index=0&lang.ts":"_astro/precio-venta.astro_astro_type_script_index_0_lang.Dk8s76Nf.js","C:/proyectos/seo-tools/src/pages/negocios/punto-equilibrio.astro?astro&type=script&index=0&lang.ts":"_astro/punto-equilibrio.astro_astro_type_script_index_0_lang.CMSxiTRq.js","C:/proyectos/seo-tools/src/pages/negocios/tarifa-freelance.astro?astro&type=script&index=0&lang.ts":"_astro/tarifa-freelance.astro_astro_type_script_index_0_lang.BHEo4vc6.js","C:/proyectos/seo-tools/src/pages/negocios/valor-de-tu-hora.astro?astro&type=script&index=0&lang.ts":"_astro/valor-de-tu-hora.astro_astro_type_script_index_0_lang.BFSjWdwL.js","C:/proyectos/seo-tools/src/pages/salud/agua.astro?astro&type=script&index=0&lang.ts":"_astro/agua.astro_astro_type_script_index_0_lang.1njbItI0.js","C:/proyectos/seo-tools/src/pages/salud/calorias.astro?astro&type=script&index=0&lang.ts":"_astro/calorias.astro_astro_type_script_index_0_lang.BHBF13PB.js","C:/proyectos/seo-tools/src/pages/salud/dejar-de-fumar.astro?astro&type=script&index=0&lang.ts":"_astro/dejar-de-fumar.astro_astro_type_script_index_0_lang.UpyoSulc.js","C:/proyectos/seo-tools/src/pages/salud/embarazo.astro?astro&type=script&index=0&lang.ts":"_astro/embarazo.astro_astro_type_script_index_0_lang.p_UL806f.js","C:/proyectos/seo-tools/src/pages/salud/frecuencia-cardiaca.astro?astro&type=script&index=0&lang.ts":"_astro/frecuencia-cardiaca.astro_astro_type_script_index_0_lang.-HG4Xmmh.js","C:/proyectos/seo-tools/src/pages/salud/imc.astro?astro&type=script&index=0&lang.ts":"_astro/imc.astro_astro_type_script_index_0_lang.RknxlDYj.js","C:/proyectos/seo-tools/src/pages/salud/keto.astro?astro&type=script&index=0&lang.ts":"_astro/keto.astro_astro_type_script_index_0_lang.C-lAimMa.js","C:/proyectos/seo-tools/src/pages/salud/ovulacion.astro?astro&type=script&index=0&lang.ts":"_astro/ovulacion.astro_astro_type_script_index_0_lang.OEwQ8Zbi.js","C:/proyectos/seo-tools/src/pages/salud/proteina.astro?astro&type=script&index=0&lang.ts":"_astro/proteina.astro_astro_type_script_index_0_lang.CjOZ6U6g.js","C:/proyectos/seo-tools/src/pages/salud/volumen-definicion.astro?astro&type=script&index=0&lang.ts":"_astro/volumen-definicion.astro_astro_type_script_index_0_lang.xshJOsqM.js","C:/proyectos/seo-tools/src/pages/seo/analizador-parrafos.astro?astro&type=script&index=0&lang.ts":"_astro/analizador-parrafos.astro_astro_type_script_index_0_lang.BGQQZU9_.js","C:/proyectos/seo-tools/src/pages/seo/analizador-repeticion.astro?astro&type=script&index=0&lang.ts":"_astro/analizador-repeticion.astro_astro_type_script_index_0_lang.DvO2Yykg.js","C:/proyectos/seo-tools/src/pages/seo/analizador-titulos.astro?astro&type=script&index=0&lang.ts":"_astro/analizador-titulos.astro_astro_type_script_index_0_lang.nGwoZtGq.js","C:/proyectos/seo-tools/src/pages/seo/anchor-text-ratio.astro?astro&type=script&index=0&lang.ts":"_astro/anchor-text-ratio.astro_astro_type_script_index_0_lang.pJ87CwH_.js","C:/proyectos/seo-tools/src/pages/seo/calculadora-alcance.astro?astro&type=script&index=0&lang.ts":"_astro/calculadora-alcance.astro_astro_type_script_index_0_lang.B6P7NM5T.js","C:/proyectos/seo-tools/src/pages/seo/calculadora-cpa.astro?astro&type=script&index=0&lang.ts":"_astro/calculadora-cpa.astro_astro_type_script_index_0_lang.PoHkM7xn.js","C:/proyectos/seo-tools/src/pages/seo/calculadora-cpc.astro?astro&type=script&index=0&lang.ts":"_astro/calculadora-cpc.astro_astro_type_script_index_0_lang.BVJjj416.js","C:/proyectos/seo-tools/src/pages/seo/calculadora-cpl.astro?astro&type=script&index=0&lang.ts":"_astro/calculadora-cpl.astro_astro_type_script_index_0_lang.bgMcC4rD.js","C:/proyectos/seo-tools/src/pages/seo/calculadora-cpm.astro?astro&type=script&index=0&lang.ts":"_astro/calculadora-cpm.astro_astro_type_script_index_0_lang.CEt4XAqg.js","C:/proyectos/seo-tools/src/pages/seo/calculadora-ctr.astro?astro&type=script&index=0&lang.ts":"_astro/calculadora-ctr.astro_astro_type_script_index_0_lang.-XvsYgPv.js","C:/proyectos/seo-tools/src/pages/seo/contador-caracteres.astro?astro&type=script&index=0&lang.ts":"_astro/contador-caracteres.astro_astro_type_script_index_0_lang.jBDrnZaY.js","C:/proyectos/seo-tools/src/pages/seo/contador-caracteres-sin-espacios.astro?astro&type=script&index=0&lang.ts":"_astro/contador-caracteres-sin-espacios.astro_astro_type_script_index_0_lang.g-3tHwZS.js","C:/proyectos/seo-tools/src/pages/seo/contador-encabezados.astro?astro&type=script&index=0&lang.ts":"_astro/contador-encabezados.astro_astro_type_script_index_0_lang.DcqUws7g.js","C:/proyectos/seo-tools/src/pages/seo/contador-frases.astro?astro&type=script&index=0&lang.ts":"_astro/contador-frases.astro_astro_type_script_index_0_lang.D9bcpeqy.js","C:/proyectos/seo-tools/src/pages/seo/contador-hashtags.astro?astro&type=script&index=0&lang.ts":"_astro/contador-hashtags.astro_astro_type_script_index_0_lang.B-eD8Vo-.js","C:/proyectos/seo-tools/src/pages/seo/contador-keywords.astro?astro&type=script&index=0&lang.ts":"_astro/contador-keywords.astro_astro_type_script_index_0_lang.Bs5Un2-L.js","C:/proyectos/seo-tools/src/pages/seo/contador-palabras.astro?astro&type=script&index=0&lang.ts":"_astro/contador-palabras.astro_astro_type_script_index_0_lang.C8kbe07C.js","C:/proyectos/seo-tools/src/pages/seo/densidad-enlaces-internos.astro?astro&type=script&index=0&lang.ts":"_astro/densidad-enlaces-internos.astro_astro_type_script_index_0_lang.Dyf9WgGP.js","C:/proyectos/seo-tools/src/pages/seo/densidad-keyword.astro?astro&type=script&index=0&lang.ts":"_astro/densidad-keyword.astro_astro_type_script_index_0_lang.BfgFjYlB.js","C:/proyectos/seo-tools/src/pages/seo/engagement-rate.astro?astro&type=script&index=0&lang.ts":"_astro/engagement-rate.astro_astro_type_script_index_0_lang.GZZMrKlG.js","C:/proyectos/seo-tools/src/pages/seo/frecuencia-palabras.astro?astro&type=script&index=0&lang.ts":"_astro/frecuencia-palabras.astro_astro_type_script_index_0_lang.BtCayzZi.js","C:/proyectos/seo-tools/src/pages/seo/frecuencia-publicitaria.astro?astro&type=script&index=0&lang.ts":"_astro/frecuencia-publicitaria.astro_astro_type_script_index_0_lang.Cwv_G6AU.js","C:/proyectos/seo-tools/src/pages/seo/generador-slug.astro?astro&type=script&index=0&lang.ts":"_astro/generador-slug.astro_astro_type_script_index_0_lang.Cx7-A94O.js","C:/proyectos/seo-tools/src/pages/seo/longitud-meta-description.astro?astro&type=script&index=0&lang.ts":"_astro/longitud-meta-description.astro_astro_type_script_index_0_lang.BiTvJfSR.js","C:/proyectos/seo-tools/src/pages/seo/longitud-titulo-seo.astro?astro&type=script&index=0&lang.ts":"_astro/longitud-titulo-seo.astro_astro_type_script_index_0_lang.aFLOYOJg.js","C:/proyectos/seo-tools/src/pages/seo/radio-texto-html-.astro?astro&type=script&index=0&lang.ts":"_astro/radio-texto-html-.astro_astro_type_script_index_0_lang.xMY0z25n.js","C:/proyectos/seo-tools/src/pages/seo/roi-marketing.astro?astro&type=script&index=0&lang.ts":"_astro/roi-marketing.astro_astro_type_script_index_0_lang.DKA-utax.js","C:/proyectos/seo-tools/src/pages/seo/tasa-conversion.astro?astro&type=script&index=0&lang.ts":"_astro/tasa-conversion.astro_astro_type_script_index_0_lang.Cv7LINqQ.js","C:/proyectos/seo-tools/src/pages/seo/tiempo-de-lectura.astro?astro&type=script&index=0&lang.ts":"_astro/tiempo-de-lectura.astro_astro_type_script_index_0_lang.GolKC4cG.js","C:/proyectos/seo-tools/src/pages/seo/tiempo-lectura.astro?astro&type=script&index=0&lang.ts":"_astro/tiempo-lectura.astro_astro_type_script_index_0_lang.JM99sKmA.js","C:/proyectos/seo-tools/src/pages/seo/tiempo-ranking-seo.astro?astro&type=script&index=0&lang.ts":"_astro/tiempo-ranking-seo.astro_astro_type_script_index_0_lang.J1P2SJUO.js","C:/proyectos/seo-tools/src/pages/unidades/bytes-a-mb.astro?astro&type=script&index=0&lang.ts":"_astro/bytes-a-mb.astro_astro_type_script_index_0_lang.BSarFEMW.js","C:/proyectos/seo-tools/src/pages/unidades/cm-a-pulgadas.astro?astro&type=script&index=0&lang.ts":"_astro/cm-a-pulgadas.astro_astro_type_script_index_0_lang.DTWWxyp6.js","C:/proyectos/seo-tools/src/pages/unidades/conversor-temperatura.astro?astro&type=script&index=0&lang.ts":"_astro/conversor-temperatura.astro_astro_type_script_index_0_lang.YZ21EmXU.js","C:/proyectos/seo-tools/src/pages/unidades/conversor-velocidad.astro?astro&type=script&index=0&lang.ts":"_astro/conversor-velocidad.astro_astro_type_script_index_0_lang.Cplz2VI3.js","C:/proyectos/seo-tools/src/pages/unidades/gal-to-l.astro?astro&type=script&index=0&lang.ts":"_astro/gal-to-l.astro_astro_type_script_index_0_lang.DOYOUGIm.js","C:/proyectos/seo-tools/src/pages/unidades/horas-a-dias.astro?astro&type=script&index=0&lang.ts":"_astro/horas-a-dias.astro_astro_type_script_index_0_lang.Cd0eQiQm.js","C:/proyectos/seo-tools/src/pages/unidades/kg-to-lb.astro?astro&type=script&index=0&lang.ts":"_astro/kg-to-lb.astro_astro_type_script_index_0_lang.Dix2WdYB.js","C:/proyectos/seo-tools/src/pages/unidades/km-a-millas.astro?astro&type=script&index=0&lang.ts":"_astro/km-a-millas.astro_astro_type_script_index_0_lang.BfEwBxGL.js","C:/proyectos/seo-tools/src/pages/unidades/lb-to-kg.astro?astro&type=script&index=0&lang.ts":"_astro/lb-to-kg.astro_astro_type_script_index_0_lang.BYTdkEJ2.js","C:/proyectos/seo-tools/src/pages/unidades/litros-a-galones.astro?astro&type=script&index=0&lang.ts":"_astro/litros-a-galones.astro_astro_type_script_index_0_lang.CpzdXKwr.js","C:/proyectos/seo-tools/src/pages/unidades/m2-a-ft2.astro?astro&type=script&index=0&lang.ts":"_astro/m2-a-ft2.astro_astro_type_script_index_0_lang.DfdRuAX4.js","C:/proyectos/seo-tools/src/pages/unidades/mb-a-gb.astro?astro&type=script&index=0&lang.ts":"_astro/mb-a-gb.astro_astro_type_script_index_0_lang.bZlntFXp.js","C:/proyectos/seo-tools/src/pages/unidades/miles-to-km.astro?astro&type=script&index=0&lang.ts":"_astro/miles-to-km.astro_astro_type_script_index_0_lang.Cr1w5YVc.js","C:/proyectos/seo-tools/src/pages/unidades/metros-a-pies.astro?astro&type=script&index=0&lang.ts":"_astro/metros-a-pies.astro_astro_type_script_index_0_lang.lB9odfTx.js","C:/proyectos/seo-tools/src/pages/unidades/minutos-a-horas.astro?astro&type=script&index=0&lang.ts":"_astro/minutos-a-horas.astro_astro_type_script_index_0_lang.Bu6dZPYV.js","C:/proyectos/seo-tools/src/pages/unidades/pies-a-metros.astro?astro&type=script&index=0&lang.ts":"_astro/pies-a-metros.astro_astro_type_script_index_0_lang.BI4XRgBX.js","C:/proyectos/seo-tools/src/pages/unidades/pies-cuadrados-a-metros-cuadrados.astro?astro&type=script&index=0&lang.ts":"_astro/pies-cuadrados-a-metros-cuadrados.astro_astro_type_script_index_0_lang.BUMow53e.js","C:/proyectos/seo-tools/src/pages/unidades/pulgadas-a-cm.astro?astro&type=script&index=0&lang.ts":"_astro/pulgadas-a-cm.astro_astro_type_script_index_0_lang.YP3l7rjd.js","C:/proyectos/seo-tools/src/pages/unidades/segundos-a-horas.astro?astro&type=script&index=0&lang.ts":"_astro/segundos-a-horas.astro_astro_type_script_index_0_lang.lmBgqCL-.js","C:/proyectos/seo-tools/src/pages/unidades/semanas-a-meses.astro?astro&type=script&index=0&lang.ts":"_astro/semanas-a-meses.astro_astro_type_script_index_0_lang.BArI1Af1.js","C:/proyectos/seo-tools/src/pages/utiles/asado.astro?astro&type=script&index=0&lang.ts":"_astro/asado.astro_astro_type_script_index_0_lang.EqDU1jK3.js","C:/proyectos/seo-tools/src/pages/utiles/calculadora-costos-fijos-variables.astro?astro&type=script&index=0&lang.ts":"_astro/calculadora-costos-fijos-variables.astro_astro_type_script_index_0_lang.Cwi6GQLk.js","C:/proyectos/seo-tools/src/pages/utiles/calculadora-de-escalas.astro?astro&type=script&index=0&lang.ts":"_astro/calculadora-de-escalas.astro_astro_type_script_index_0_lang.B0CeTEo-.js","C:/proyectos/seo-tools/src/pages/utiles/calculadora-de-markup.astro?astro&type=script&index=0&lang.ts":"_astro/calculadora-de-markup.astro_astro_type_script_index_0_lang.DFDPzUvX.js","C:/proyectos/seo-tools/src/pages/utiles/calculadora-de-proporciones.astro?astro&type=script&index=0&lang.ts":"_astro/calculadora-de-proporciones.astro_astro_type_script_index_0_lang.-tJxp1Ku.js","C:/proyectos/seo-tools/src/pages/utiles/calculadora-desviacion-estandar.astro?astro&type=script&index=0&lang.ts":"_astro/calculadora-desviacion-estandar.astro_astro_type_script_index_0_lang.L43idBNm.js","C:/proyectos/seo-tools/src/pages/utiles/calculadora-fecha-futura.astro?astro&type=script&index=0&lang.ts":"_astro/calculadora-fecha-futura.astro_astro_type_script_index_0_lang.KS_ox-rg.js","C:/proyectos/seo-tools/src/pages/utiles/calculadora-fecha-pasada.astro?astro&type=script&index=0&lang.ts":"_astro/calculadora-fecha-pasada.astro_astro_type_script_index_0_lang.B_hd4E3F.js","C:/proyectos/seo-tools/src/pages/utiles/calculadora-flujo-de-caja.astro?astro&type=script&index=0&lang.ts":"_astro/calculadora-flujo-de-caja.astro_astro_type_script_index_0_lang.Cl9JV2wZ.js","C:/proyectos/seo-tools/src/pages/utiles/calculadora-impuestos-ventas.astro?astro&type=script&index=0&lang.ts":"_astro/calculadora-impuestos-ventas.astro_astro_type_script_index_0_lang.LALMDylw.js","C:/proyectos/seo-tools/src/pages/utiles/calculadora-inventario-ideal.astro?astro&type=script&index=0&lang.ts":"_astro/calculadora-inventario-ideal.astro_astro_type_script_index_0_lang.TuMD1Kjb.js","C:/proyectos/seo-tools/src/pages/utiles/calculadora-inversion-aportes-periodicos.astro?astro&type=script&index=0&lang.ts":"_astro/calculadora-inversion-aportes-periodicos.astro_astro_type_script_index_0_lang.DUogpU7S.js","C:/proyectos/seo-tools/src/pages/utiles/calculadora-ltv.astro?astro&type=script&index=0&lang.ts":"_astro/calculadora-ltv.astro_astro_type_script_index_0_lang.DyI8PPIw.js","C:/proyectos/seo-tools/src/pages/utiles/calculadora-margen-bruto.astro?astro&type=script&index=0&lang.ts":"_astro/calculadora-margen-bruto.astro_astro_type_script_index_0_lang.B7MGdqGc.js","C:/proyectos/seo-tools/src/pages/utiles/calculadora-margen-neto.astro?astro&type=script&index=0&lang.ts":"_astro/calculadora-margen-neto.astro_astro_type_script_index_0_lang.rJQ7Ectp.js","C:/proyectos/seo-tools/src/pages/utiles/calculadora-rentabilidad-ecommerce.astro?astro&type=script&index=0&lang.ts":"_astro/calculadora-rentabilidad-ecommerce.astro_astro_type_script_index_0_lang.BGEB5wib.js","C:/proyectos/seo-tools/src/pages/utiles/calculadora-rentabilidad-negocio.astro?astro&type=script&index=0&lang.ts":"_astro/calculadora-rentabilidad-negocio.astro_astro_type_script_index_0_lang.Br24skx5.js","C:/proyectos/seo-tools/src/pages/utiles/calculadora-rentabilidad-producto.astro?astro&type=script&index=0&lang.ts":"_astro/calculadora-rentabilidad-producto.astro_astro_type_script_index_0_lang.CBDdrVTm.js","C:/proyectos/seo-tools/src/pages/utiles/calculadora-ticket-promedio.astro?astro&type=script&index=0&lang.ts":"_astro/calculadora-ticket-promedio.astro_astro_type_script_index_0_lang.C_4fO7-w.js","C:/proyectos/seo-tools/src/pages/utiles/combustible.astro?astro&type=script&index=0&lang.ts":"_astro/combustible.astro_astro_type_script_index_0_lang.C5UkA96K.js","C:/proyectos/seo-tools/src/pages/utiles/contador-de-caracteres.astro?astro&type=script&index=0&lang.ts":"_astro/contador-de-caracteres.astro_astro_type_script_index_0_lang.BchHeAaK.js","C:/proyectos/seo-tools/src/pages/utiles/contador-de-letras.astro?astro&type=script&index=0&lang.ts":"_astro/contador-de-letras.astro_astro_type_script_index_0_lang.CVrF4vpe.js","C:/proyectos/seo-tools/src/pages/utiles/contador-de-palabras-unicas.astro?astro&type=script&index=0&lang.ts":"_astro/contador-de-palabras-unicas.astro_astro_type_script_index_0_lang.B7Alnx7z.js","C:/proyectos/seo-tools/src/pages/utiles/contador-de-vocales.astro?astro&type=script&index=0&lang.ts":"_astro/contador-de-vocales.astro_astro_type_script_index_0_lang.C5xgfnHE.js","C:/proyectos/seo-tools/src/pages/utiles/contador-dias-cumpleanos.astro?astro&type=script&index=0&lang.ts":"_astro/contador-dias-cumpleanos.astro_astro_type_script_index_0_lang.BWLsYJjC.js","C:/proyectos/seo-tools/src/pages/utiles/contador-dias-navidad.astro?astro&type=script&index=0&lang.ts":"_astro/contador-dias-navidad.astro_astro_type_script_index_0_lang.-dWbSmlz.js","C:/proyectos/seo-tools/src/pages/utiles/costo-por-uso.astro?astro&type=script&index=0&lang.ts":"_astro/costo-por-uso.astro_astro_type_script_index_0_lang.A62DBYby.js","C:/proyectos/seo-tools/src/pages/utiles/descuento-doble.astro?astro&type=script&index=0&lang.ts":"_astro/descuento-doble.astro_astro_type_script_index_0_lang.4LNfLm2y.js","C:/proyectos/seo-tools/src/pages/utiles/descuentos.astro?astro&type=script&index=0&lang.ts":"_astro/descuentos.astro_astro_type_script_index_0_lang.Bc4W0Gps.js","C:/proyectos/seo-tools/src/pages/utiles/dias-habiles.astro?astro&type=script&index=0&lang.ts":"_astro/dias-habiles.astro_astro_type_script_index_0_lang.BmmyHIS3.js","C:/proyectos/seo-tools/src/pages/utiles/diezmo.astro?astro&type=script&index=0&lang.ts":"_astro/diezmo.astro_astro_type_script_index_0_lang.Cc-nVRRo.js","C:/proyectos/seo-tools/src/pages/utiles/diferencia-entre-fechas.astro?astro&type=script&index=0&lang.ts":"_astro/diferencia-entre-fechas.astro_astro_type_script_index_0_lang.C9k2lMfG.js","C:/proyectos/seo-tools/src/pages/utiles/dividir-cuenta.astro?astro&type=script&index=0&lang.ts":"_astro/dividir-cuenta.astro_astro_type_script_index_0_lang.B2i0I1CW.js","C:/proyectos/seo-tools/src/pages/utiles/ecuaciones.astro?astro&type=script&index=0&lang.ts":"_astro/ecuaciones.astro_astro_type_script_index_0_lang.BFX4VnFd.js","C:/proyectos/seo-tools/src/pages/utiles/edad-mascotas.astro?astro&type=script&index=0&lang.ts":"_astro/edad-mascotas.astro_astro_type_script_index_0_lang.DrRXYdEm.js","C:/proyectos/seo-tools/src/pages/utiles/fracciones.astro?astro&type=script&index=0&lang.ts":"_astro/fracciones.astro_astro_type_script_index_0_lang.CXz9YFPQ.js","C:/proyectos/seo-tools/src/pages/utiles/gastos-compartidos.astro?astro&type=script&index=0&lang.ts":"_astro/gastos-compartidos.astro_astro_type_script_index_0_lang.CW3d1jf7.js","C:/proyectos/seo-tools/src/pages/utiles/generador-contrasenas.astro?astro&type=script&index=0&lang.ts":"_astro/generador-contrasenas.astro_astro_type_script_index_0_lang.CtVAEfmY.js","C:/proyectos/seo-tools/src/pages/utiles/horas.astro?astro&type=script&index=0&lang.ts":"_astro/horas.astro_astro_type_script_index_0_lang.CTeWC6Nj.js","C:/proyectos/seo-tools/src/pages/utiles/propina.astro?astro&type=script&index=0&lang.ts":"_astro/propina.astro_astro_type_script_index_0_lang.Bc4W0Gps.js","C:/proyectos/seo-tools/src/pages/utiles/tiempo.astro?astro&type=script&index=0&lang.ts":"_astro/tiempo.astro_astro_type_script_index_0_lang.DQ5EREu5.js","C:/proyectos/seo-tools/src/pages/utiles/[slug].astro?astro&type=script&index=0&lang.ts":"_astro/_slug_.astro_astro_type_script_index_0_lang.D92my25s.js","C:/proyectos/seo-tools/src/pages/varios/edad.astro?astro&type=script&index=0&lang.ts":"_astro/edad.astro_astro_type_script_index_0_lang.CginHwvI.js","C:/proyectos/seo-tools/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.B8TDfmKm.js","C:/proyectos/seo-tools/src/components/MenuMovil.astro?astro&type=script&index=0&lang.ts":"_astro/MenuMovil.astro_astro_type_script_index_0_lang.CW4nuF4f.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/proyectos/seo-tools/src/pages/finanzas/aguinaldo.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const a=document.getElementById(\"btnCalcAguinaldo\");a?.addEventListener(\"click\",()=>{const e=parseFloat(document.getElementById(\"mejorSueldo\").value)||0,o=parseFloat(document.getElementById(\"diasTrabajados\").value)||0,t=document.getElementById(\"resAguinaldo\"),n=document.getElementById(\"montoAguinaldo\");if(e>0&&o>0&&t&&n){const s=e/2*(o/180);n.textContent=\"$\"+s.toLocaleString(\"es-AR\",{maximumFractionDigits:0}),t.classList.remove(\"hidden\")}else alert(\"Completá los campos con valores correctos.\")});"],["C:/proyectos/seo-tools/src/pages/finanzas/ahorro-jubilacion.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const E=document.getElementById(\"btnCalcRetiro\");function N(){const o=document.getElementById(\"currentAge\"),a=document.getElementById(\"retirementAge\"),s=document.getElementById(\"monthlySpend\"),r=document.getElementById(\"currentSavings\"),c=document.getElementById(\"annualReturn\"),u=document.getElementById(\"targetFund\"),l=document.getElementById(\"monthlyNeed\"),d=document.getElementById(\"yearsLeft\");if(!o||!a||!s||!r||!c)return;const e=parseFloat(o.value),n=parseFloat(a.value),i=parseFloat(s.value),v=parseFloat(r.value)||0,g=parseFloat(c.value)/100;if(isNaN(e)||isNaN(n)||isNaN(i)||isNaN(g)||n<=e)return;const m=i*12/.04,p=n-e,t=g/12,y=p*12,f=v*Math.pow(1+t,y),I=m-f;let h=0;I>0&&t>0&&(h=I/((Math.pow(1+t,y)-1)/t)),u&&(u.innerText=\"$\"+Math.round(m).toLocaleString()),l&&(l.innerText=\"$\"+Math.round(h).toLocaleString()),d&&(d.innerText=p.toString())}E?.addEventListener(\"click\",N);"],["C:/proyectos/seo-tools/src/pages/finanzas/calculadora-dividendos.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const e=document.getElementById(\"sharesInput\"),n=document.getElementById(\"priceInput\"),o=document.getElementById(\"divInput\"),c=document.getElementById(\"annualOutput\"),u=document.getElementById(\"monthlyOutput\"),d=document.getElementById(\"yieldOutput\"),p=()=>{if(!e||!n||!o)return;const t=parseFloat(e.value)||0,l=parseFloat(n.value)||0,a=parseFloat(o.value)||0,s=t*a,i=s/12;c&&(c.innerText=\"$\"+Math.round(s).toLocaleString()),u&&(u.innerText=\"$\"+Math.round(i).toLocaleString());const r=l>0?a/l*100:0;d&&(d.innerText=r.toFixed(2)+\"%\")};[e,n,o].forEach(t=>t?.addEventListener(\"input\",p));"],["C:/proyectos/seo-tools/src/pages/finanzas/amortizacion-prestamo.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const g=document.getElementById(\"montoInput\"),I=document.getElementById(\"tasaInput\"),h=document.getElementById(\"plazoInput\"),i=document.getElementById(\"cuotaOutput\"),p=document.getElementById(\"totalInteresOutput\"),m=document.getElementById(\"tablaCuerpo\"),M=document.getElementById(\"btnCalcular\");M?.addEventListener(\"click\",()=>{const e=parseFloat(g.value),c=parseFloat(I.value)/100,t=parseInt(h.value);if(isNaN(e)||isNaN(c)||isNaN(t)||t<=0)return;const o=c/12,n=e*o/(1-Math.pow(1,-t)*Math.pow(1+o,-t));i&&(i.innerText=\"$\"+Math.round(n).toLocaleString());let a=e,d=0,r=\"\";for(let l=1;l<=t;l++){const s=a*o,u=n-s;a-=u,d+=s,r+=`\n        <tr class=\"hover:bg-indigo-50/30 transition-colors\">\n          <td class=\"p-6 font-bold text-slate-900\">${l}</td>\n          <td class=\"p-6 font-bold text-indigo-600\">$${Math.round(n).toLocaleString()}</td>\n          <td class=\"p-6 text-rose-500\">$${Math.round(s).toLocaleString()}</td>\n          <td class=\"p-6 text-emerald-600\">$${Math.round(u).toLocaleString()}</td>\n          <td class=\"p-6 font-bold text-slate-400\">$${Math.max(0,Math.round(a)).toLocaleString()}</td>\n        </tr>\n      `}p&&(p.innerText=\"$\"+Math.round(d).toLocaleString()),m&&(m.innerHTML=r)});"],["C:/proyectos/seo-tools/src/pages/finanzas/costo-auto.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const r=document.getElementById(\"btnCalcAuto\");r?.addEventListener(\"click\",()=>{const o=parseFloat(document.getElementById(\"seguro\").value)||0,s=parseFloat(document.getElementById(\"patente\").value)||0,l=parseFloat(document.getElementById(\"cochera\").value)||0,c=parseFloat(document.getElementById(\"nafta\").value)||0,m=parseFloat(document.getElementById(\"service\").value)||0,t=document.getElementById(\"resAuto\"),n=document.getElementById(\"gastoTotal\"),a=document.getElementById(\"gastoAnual\"),e=o+s+l+c+m;e>0&&t&&n&&a?(n.textContent=\"$\"+e.toLocaleString(\"es-AR\",{maximumFractionDigits:0}),a.textContent=\"$\"+(e*12).toLocaleString(\"es-AR\",{maximumFractionDigits:0}),t.classList.remove(\"hidden\")):alert(\"Ingresá al menos un valor para calcular.\")});"],["C:/proyectos/seo-tools/src/pages/finanzas/cuotas.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const m=document.getElementById(\"btnCalcCuotas\");m?.addEventListener(\"click\",()=>{const t=parseFloat(document.getElementById(\"precioContado\").value)||0,e=parseInt(document.getElementById(\"cantCuotas\").value)||1,o=parseFloat(document.getElementById(\"tnaCuotas\").value)||0,a=document.getElementById(\"resCuotas\"),n=document.getElementById(\"valorCuotaIndividual\"),c=document.getElementById(\"totalFinanciado\");if(t>0&&o>0&&a&&n&&c){const s=o/100/12,l=Math.pow(1+s,e),i=t*(s*l/(l-1)),d=i*e;n.textContent=\"$\"+i.toLocaleString(\"es-AR\",{maximumFractionDigits:2}),c.textContent=\"$\"+d.toLocaleString(\"es-AR\",{maximumFractionDigits:2}),a.classList.remove(\"hidden\")}else alert(\"Completá el precio y la tasa para calcular.\")});"],["C:/proyectos/seo-tools/src/pages/finanzas/dolar-tarjeta.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const c=document.getElementById(\"btnCalcDolar\");c?.addEventListener(\"click\",()=>{const e=parseFloat(document.getElementById(\"dolarOficial\").value),o=parseFloat(document.getElementById(\"montoCompra\").value),t=document.getElementById(\"resDolar\"),l=document.getElementById(\"pesosFinal\"),n=document.getElementById(\"valorDolarFinal\");if(e>0&&o>0&&t&&l&&n){const a=e*o*1.6,s=e*1.6;l.textContent=\"$\"+a.toLocaleString(\"es-AR\",{maximumFractionDigits:2}),n.textContent=`1 USD = $${s.toLocaleString(\"es-AR\")}`,t.classList.remove(\"hidden\")}else alert(\"Por favor, completá los campos con valores válidos.\")});"],["C:/proyectos/seo-tools/src/pages/finanzas/cuota-maxima.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const n=document.getElementById(\"incomeInput\"),t=document.getElementById(\"maxQuotaOutput\"),o=document.getElementById(\"barSafe\"),a=document.getElementById(\"barWarning\"),l=document.getElementById(\"barDanger\"),c=document.getElementById(\"labelSafe\"),r=document.getElementById(\"labelWarning\"),s=document.getElementById(\"labelDanger\"),u=()=>{const e=parseFloat(n.value);if(isNaN(e)||e<=0){t&&(t.innerText=\"$0\"),g();return}const d=e*.3;t&&(t.innerText=\"$\"+Math.round(d).toLocaleString()),e>0&&(o.style.backgroundColor=\"#10b981\",c.style.color=\"#10b981\",a.style.backgroundColor=\"#f59e0b\",r.style.color=\"#f59e0b\",l.style.backgroundColor=\"#f43f5e\",s.style.color=\"#f43f5e\")},g=()=>{[o,a,l].forEach(e=>e.style.backgroundColor=\"#e2e8f0\"),[c,r,s].forEach(e=>e.style.color=\"#cbd5e1\")};n?.addEventListener(\"input\",u);"],["C:/proyectos/seo-tools/src/pages/finanzas/indemnizacion.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const c=document.getElementById(\"btnCalcIndem\");c?.addEventListener(\"click\",()=>{const e=parseFloat(document.getElementById(\"sueldoBruto\").value)||0,t=parseInt(document.getElementById(\"anios\").value)||0,n=parseInt(document.getElementById(\"meses\").value)||0,s=document.getElementById(\"resIndem\"),o=document.getElementById(\"montoIndem\");if(e>0&&(t>0||n>3)&&s&&o){let a=t;n>3&&(a+=1);const d=e*a,l=t<5?e:e*2,m=d+l;o.textContent=\"$\"+m.toLocaleString(\"es-AR\",{maximumFractionDigits:0}),s.classList.remove(\"hidden\")}else alert(\"Ingresá tu sueldo y antigüedad mayor a 3 meses.\")});"],["C:/proyectos/seo-tools/src/pages/finanzas/inflacion.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const r=()=>{document.getElementById(\"btnInf\")?.addEventListener(\"click\",()=>{const c=document.getElementById(\"montoI\"),a=document.getElementById(\"pctI\"),e=parseFloat(c.value),n=parseFloat(a.value)/100;if(e>0&&!isNaN(n)){const o=e*(1+n),l=o-e,i=document.getElementById(\"valInf\"),s=document.getElementById(\"msgPerdida\"),t=document.getElementById(\"resInf\");i&&s&&t&&(i.innerText=\"$\"+o.toLocaleString(\"es-AR\",{minimumFractionDigits:2,maximumFractionDigits:2}),s.innerText=`Tu dinero perdió $${l.toLocaleString(\"es-AR\",{minimumFractionDigits:2})} de valor real.`,t.classList.remove(\"hidden\"),t.scrollIntoView({behavior:\"smooth\",block:\"center\"}))}else alert(\"Ingresá un monto y el porcentaje de inflación para calcular.\")})};r();"],["C:/proyectos/seo-tools/src/pages/finanzas/ganancias.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const l=document.getElementById(\"btnCalcGan\");l?.addEventListener(\"click\",()=>{const e=parseFloat(document.getElementById(\"brutoGan\").value)||0,n=parseFloat(document.getElementById(\"pisoGan\").value)||0,o=document.getElementById(\"resGan\"),s=document.getElementById(\"montoRetencion\"),a=document.getElementById(\"sueldoNetoGan\");if(e>0&&o&&s&&a){let t=0;e>n&&(t=(e-n)*.2);const c=e*.83-t;s.textContent=\"$\"+t.toLocaleString(\"es-AR\",{maximumFractionDigits:0}),a.textContent=\"$\"+(c>0?c:0).toLocaleString(\"es-AR\",{maximumFractionDigits:0}),o.classList.remove(\"hidden\")}else alert(\"Ingresá tu sueldo bruto para calcular.\")});"],["C:/proyectos/seo-tools/src/pages/finanzas/interes-mora.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const r=document.getElementById(\"btnCalcMora\");r?.addEventListener(\"click\",()=>{const t=parseFloat(document.getElementById(\"montoBase\").value)||0,e=parseFloat(document.getElementById(\"tasaMensual\").value)||0,o=parseFloat(document.getElementById(\"diasMora\").value)||0,n=document.getElementById(\"resMora\"),a=document.getElementById(\"montoInteres\"),s=document.getElementById(\"totalConMora\");if(t>0&&e>0&&o>0&&n&&a&&s){const l=t*(e/100)/30*o,c=t+l;a.textContent=\"$\"+l.toLocaleString(\"es-AR\",{maximumFractionDigits:2}),s.textContent=\"$\"+c.toLocaleString(\"es-AR\",{maximumFractionDigits:2}),n.classList.remove(\"hidden\")}else alert(\"Por favor, ingresá valores válidos para el cálculo.\")});"],["C:/proyectos/seo-tools/src/pages/finanzas/interes-simple.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const d=()=>{document.getElementById(\"btnIS\")?.addEventListener(\"click\",()=>{const a=document.getElementById(\"capI\"),l=document.getElementById(\"tasaI\"),m=document.getElementById(\"tiempoI\"),t=parseFloat(a.value),o=parseFloat(l.value)/100,n=parseFloat(m.value);if(t>0&&o>0&&n>0){const s=t*o*n,r=t+s,c=document.getElementById(\"valIS\"),i=document.getElementById(\"valTotal\"),e=document.getElementById(\"resIS\");c&&i&&e&&(c.innerText=\"$\"+s.toLocaleString(\"es-AR\",{minimumFractionDigits:2,maximumFractionDigits:2}),i.innerText=\"$\"+r.toLocaleString(\"es-AR\",{minimumFractionDigits:2,maximumFractionDigits:2}),e.classList.remove(\"hidden\"),e.scrollIntoView({behavior:\"smooth\",block:\"center\"}))}else alert(\"Por favor, completá todos los campos con valores positivos.\")})};d();"],["C:/proyectos/seo-tools/src/pages/finanzas/iva.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const v=()=>{const m=document.getElementById(\"ivaMonto\"),o=document.getElementById(\"ivaTasa\"),d=document.getElementById(\"btnCalcularIVA\"),n=document.getElementById(\"resultBoxIVA\"),s=document.getElementById(\"resNeto\"),a=document.getElementById(\"resIVA\"),c=document.getElementById(\"resTotal\"),t=e=>new Intl.NumberFormat(\"es-AR\",{style:\"currency\",currency:\"ARS\"}).format(e);d?.addEventListener(\"click\",()=>{const e=parseFloat(m.value);if(isNaN(e)||e<=0)return;let l=parseFloat(o.value);if(o.value===\"custom\"){const i=prompt(\"Ingresá la tasa de IVA personalizada:\");l=i?parseFloat(i):21}const u=l/100,r=e*u,I=e+r;s&&(s.innerText=t(e)),a&&(a.innerText=t(r)),c&&(c.innerText=t(I)),n?.classList.remove(\"hidden\"),n?.scrollIntoView({behavior:\"smooth\",block:\"center\"})})};v();"],["C:/proyectos/seo-tools/src/pages/finanzas/meta-ahorro.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const m=document.getElementById(\"btnCalcMeta\");m?.addEventListener(\"click\",()=>{const t=parseFloat(document.getElementById(\"montoMeta\").value)||0,n=parseFloat(document.getElementById(\"plazoMeses\").value)||0,l=parseFloat(document.getElementById(\"ahorroPrevio\").value)||0,o=document.getElementById(\"resMeta\"),a=document.getElementById(\"ahorroMensual\"),s=document.getElementById(\"montoFaltante\");if(t>0&&n>0&&o&&a&&s){const e=t-l,c=e>0?e/n:0;a.textContent=\"$\"+c.toLocaleString(\"es-AR\",{maximumFractionDigits:0}),s.textContent=\"$\"+(e>0?e:0).toLocaleString(\"es-AR\",{maximumFractionDigits:0}),o.classList.remove(\"hidden\")}else alert(\"Completá el monto y los meses para calcular tu plan.\")});"],["C:/proyectos/seo-tools/src/pages/finanzas/perdida-poder-adquisitivo.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const s=document.getElementById(\"amountInput\"),l=document.getElementById(\"inflationInput\"),e=document.getElementById(\"realValueOutput\"),n=document.getElementById(\"lossOutput\"),u=()=>{const t=parseFloat(s.value),o=parseFloat(l.value)/100;if(isNaN(t)||isNaN(o)||o<-1){e&&(e.innerText=\"$0\"),n&&(n.innerText=\"0%\");return}const a=t/(1+o),i=(1-a/t)*100;e&&(e.innerText=\"$\"+Math.round(a).toLocaleString()),n&&(n.innerText=i.toFixed(1)+\"%\")};[s,l].forEach(t=>t?.addEventListener(\"input\",u));"],["C:/proyectos/seo-tools/src/pages/finanzas/plazo-fijo.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const i=document.getElementById(\"btnCalcPlazo\");i?.addEventListener(\"click\",()=>{const t=parseFloat(document.getElementById(\"capital\").value),e=parseFloat(document.getElementById(\"tasa\").value),o=parseFloat(document.getElementById(\"plazo\").value),n=document.getElementById(\"resPlazo\"),a=document.getElementById(\"interesGanado\"),s=document.getElementById(\"montoTotal\");if(t>0&&e>0&&o>0&&n&&a&&s){const l=t*e*o/36500,c=t+l;a.textContent=\"$\"+l.toLocaleString(\"es-AR\",{maximumFractionDigits:2}),s.textContent=\"$\"+c.toLocaleString(\"es-AR\",{maximumFractionDigits:2}),n.classList.remove(\"hidden\")}else alert(\"Por favor, ingresá valores válidos.\")});"],["C:/proyectos/seo-tools/src/pages/finanzas/porcentaje.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const o=()=>{document.getElementById(\"btnCalc1\")?.addEventListener(\"click\",()=>{const t=parseFloat(document.getElementById(\"percInput1\").value),e=parseFloat(document.getElementById(\"valInput1\").value),n=document.getElementById(\"resBox1\");if(!isNaN(t)&&!isNaN(e)){const s=t/100*e;n&&(n.innerText=`El ${t}% de ${e} es: ${s.toLocaleString()}`,n.classList.remove(\"hidden\"))}}),document.getElementById(\"btnCalc2\")?.addEventListener(\"click\",()=>{const t=parseFloat(document.getElementById(\"valInput2A\").value),e=parseFloat(document.getElementById(\"valInput2B\").value),n=document.getElementById(\"resBox2\");if(!isNaN(t)&&!isNaN(e)&&e!==0){const s=t/e*100;n&&(n.innerText=`${t} es el ${s.toFixed(2)}% de ${e}`,n.classList.remove(\"hidden\"))}})};o();"],["C:/proyectos/seo-tools/src/pages/finanzas/prestamo.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const d=document.getElementById(\"btnCalcular\");d?.addEventListener(\"click\",()=>{const t=parseFloat(document.getElementById(\"monto\").value),s=parseFloat(document.getElementById(\"tasa\").value)/100,e=parseInt(document.getElementById(\"plazo\").value);if(t&&s&&e){const n=s/12,c=t*(n*Math.pow(1+n,e)/(Math.pow(1+n,e)-1)),a=c*e,l=a-t,o=r=>r.toLocaleString(\"es-AR\",{style:\"currency\",currency:\"ARS\"});document.getElementById(\"cuotaVal\").innerText=o(c),document.getElementById(\"totalPagar\").innerText=o(a),document.getElementById(\"totalInteres\").innerText=o(l),document.getElementById(\"resCredito\")?.classList.remove(\"hidden\"),window.scrollTo({top:300,behavior:\"smooth\"})}});"],["C:/proyectos/seo-tools/src/pages/finanzas/regla-50-30-20.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const m=document.getElementById(\"btnPresupuesto\");m?.addEventListener(\"click\",()=>{const e=parseFloat(document.getElementById(\"ingresoTotal\").value)||0,t=document.getElementById(\"resPresupuesto\"),o=document.getElementById(\"montoNec\"),n=document.getElementById(\"montoDes\"),s=document.getElementById(\"montoAho\");e>0&&t&&o&&n&&s?(o.textContent=\"$\"+(e*.5).toLocaleString(\"es-AR\",{maximumFractionDigits:0}),n.textContent=\"$\"+(e*.3).toLocaleString(\"es-AR\",{maximumFractionDigits:0}),s.textContent=\"$\"+(e*.2).toLocaleString(\"es-AR\",{maximumFractionDigits:0}),t.classList.remove(\"hidden\")):alert(\"Ingresá un monto válido.\")});"],["C:/proyectos/seo-tools/src/pages/finanzas/regla-del-72.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const i=document.getElementById(\"rateInput\"),u=document.getElementById(\"yearsInput\"),t=document.getElementById(\"resultOutput\"),n=document.getElementById(\"resultLabel\"),a=document.getElementById(\"unitLabel\"),s=document.getElementById(\"calcStep\"),o=()=>{const e=parseFloat(i.value);if(!e||e<=0)return;const r=72/e;t&&(t.innerText=r.toFixed(1)),n&&(n.innerText=\"Tiempo para duplicar\"),a&&(a.innerText=\"Años\"),s&&(s.innerText=`Con una tasa del ${e}%`),u.value=\"\"},l=()=>{const e=parseFloat(u.value);if(!e||e<=0)return;const r=72/e;t&&(t.innerText=r.toFixed(1)),n&&(n.innerText=\"Tasa necesaria\"),a&&(a.innerText=\"% Anual\"),s&&(s.innerText=`Para duplicar en ${e} años`),i.value=\"\"};i?.addEventListener(\"input\",o);u?.addEventListener(\"input\",l);"],["C:/proyectos/seo-tools/src/pages/finanzas/rendimiento-inversion.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const o=document.getElementById(\"initialInput\"),i=document.getElementById(\"finalInput\"),r=document.getElementById(\"roiOutput\"),e=document.getElementById(\"profitOutput\"),n=document.getElementById(\"roiCard\");function d(){if(!o||!i||!r||!e||!n)return;const t=parseFloat(o.value),a=parseFloat(i.value);if(isNaN(t)||isNaN(a)||t===0){r.innerText=\"0%\",e.innerText=\"$0\";return}const s=a-t,l=s/t*100;r.innerText=l.toFixed(2)+\"%\",e.innerText=\"$\"+Math.round(s).toLocaleString(),l>0?(n.className=\"text-center p-10 bg-emerald-50 rounded-[2.5rem] border border-emerald-100 transition-all duration-500 relative overflow-hidden h-full flex flex-col justify-center min-h-[250px]\",e.className=\"text-2xl font-bold text-emerald-600\"):l<0?(n.className=\"text-center p-10 bg-rose-50 rounded-[2.5rem] border border-rose-100 transition-all duration-500 relative overflow-hidden h-full flex flex-col justify-center min-h-[250px]\",e.className=\"text-2xl font-bold text-rose-600\"):(n.className=\"text-center p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 transition-all duration-500 relative overflow-hidden h-full flex flex-col justify-center min-h-[250px]\",e.className=\"text-2xl font-bold text-slate-600\")}o?.addEventListener(\"input\",d);i?.addEventListener(\"input\",d);"],["C:/proyectos/seo-tools/src/pages/finanzas/retiro-fire.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const i=()=>{document.getElementById(\"btnFire\")?.addEventListener(\"click\",()=>{const n=document.getElementById(\"gastoFire\"),t=parseFloat(n.value);if(t>0){const s=t*12*25,o=document.getElementById(\"valFire\"),e=document.getElementById(\"resFire\");o&&e&&(o.innerText=\"$\"+s.toLocaleString(\"es-AR\",{maximumFractionDigits:0}),e.classList.remove(\"hidden\"),e.scrollIntoView({behavior:\"smooth\",block:\"center\"}))}else alert(\"Por favor, ingresá un monto de gasto mensual válido.\")})};i();"],["C:/proyectos/seo-tools/src/pages/finanzas/tasa-de-retorno.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const d=document.getElementById(\"initialValue\"),i=document.getElementById(\"finalValue\"),c=document.getElementById(\"yearsInput\"),o=document.getElementById(\"cagrOutput\"),t=document.getElementById(\"totalReturnOutput\"),n=document.getElementById(\"resultCard\"),s=document.getElementById(\"statusLabel\");function x(){if(!d||!i||!c||!o||!t||!n||!s)return;const e=parseFloat(d.value),l=parseFloat(i.value),a=parseFloat(c.value);if(isNaN(e)||isNaN(l)||isNaN(a)||e<=0||a<=0){o.innerText=\"0%\",t.innerText=\"0%\",s.innerText=\"Esperando datos...\",n.className=\"text-center p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 transition-all duration-500 relative overflow-hidden h-full flex flex-col justify-center min-h-[350px]\";return}const r=(Math.pow(l/e,1/a)-1)*100,u=(l-e)/e*100;o.innerText=r.toFixed(2)+\"%\",t.innerText=u.toFixed(1)+\"%\",s.innerText=\"Tasa Anual (CAGR)\",r>0?(n.className=\"text-center p-10 bg-emerald-50 rounded-[2.5rem] border border-emerald-100 transition-all duration-500 relative overflow-hidden h-full flex flex-col justify-center min-h-[350px]\",t.className=\"text-2xl font-bold text-emerald-600\"):r<0?(n.className=\"text-center p-10 bg-rose-50 rounded-[2.5rem] border border-rose-100 transition-all duration-500 relative overflow-hidden h-full flex flex-col justify-center min-h-[350px]\",t.className=\"text-2xl font-bold text-rose-600\"):(n.className=\"text-center p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 transition-all duration-500 relative overflow-hidden h-full flex flex-col justify-center min-h-[350px]\",t.className=\"text-2xl font-bold text-slate-600\")}[d,i,c].forEach(e=>e?.addEventListener(\"input\",x));"],["C:/proyectos/seo-tools/src/pages/finanzas/vacaciones.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const i=document.getElementById(\"btnCalcVac\");i?.addEventListener(\"click\",()=>{const t=parseFloat(document.getElementById(\"sueldoVac\").value)||0,o=parseInt(document.getElementById(\"antiguedadVac\").value)||0,s=document.getElementById(\"resVac\"),a=document.getElementById(\"diasCorresp\"),n=document.getElementById(\"montoPlus\");if(t>0&&s&&a&&n){let e=14;o>=20?e=35:o>=10?e=28:o>=5&&(e=21);const l=t/30,c=(t/25-l)*e;a.textContent=`${e} Días`,n.textContent=\"$\"+c.toLocaleString(\"es-AR\",{maximumFractionDigits:0}),s.classList.remove(\"hidden\")}else alert(\"Completá los datos correctamente.\")});"],["C:/proyectos/seo-tools/src/pages/finanzas/valor-presente.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const o=document.getElementById(\"fvInput\"),a=document.getElementById(\"rateInput\"),c=document.getElementById(\"yearsInput\"),e=document.getElementById(\"pvOutput\"),n=document.getElementById(\"discountLabel\"),d=()=>{if(!o||!a||!c||!e||!n)return;const t=parseFloat(o.value)||0,u=(parseFloat(a.value)||0)/100,s=parseFloat(c.value)||0;if(t===0||s<0){e.innerText=\"$0\",n.innerText=\"Descuento aplicado: $0\";return}const r=t/Math.pow(1+u,s),l=t-r;e.innerText=\"$\"+Math.round(r).toLocaleString(),n.innerText=`Descuento aplicado: $${Math.round(l).toLocaleString()}`};[o,a,c].forEach(t=>t?.addEventListener(\"input\",d));"],["C:/proyectos/seo-tools/src/pages/finanzas/valor-futuro.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const l=document.getElementById(\"pvInput\"),u=document.getElementById(\"rateInput\"),p=document.getElementById(\"yearsInput\"),i=document.getElementById(\"pmtInput\"),r=document.getElementById(\"fvOutput\"),c=document.getElementById(\"interestEarned\"),v=()=>{if(!l||!u||!p||!i||!r||!c)return;const t=parseFloat(l.value)||0,d=(parseFloat(u.value)||0)/100,o=parseFloat(p.value)||0,e=parseFloat(i.value)||0;if(o===0&&t===0&&e===0){r.innerText=\"$0\",c.innerText=\"Ganancia por intereses: $0\";return}const a=d/12,s=o*12;let n=t*Math.pow(1+d,o);a>0?n+=e*((Math.pow(1+a,s)-1)/a):n+=e*s;const I=t+e*s,m=n-I;r.innerText=\"$\"+Math.round(n).toLocaleString(),c.innerText=`Ganancia por intereses: $${Math.round(m).toLocaleString()}`};[l,u,p,i].forEach(t=>t?.addEventListener(\"input\",v));"],["C:/proyectos/seo-tools/src/pages/hogar/aire-acondicionado.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const i=document.getElementById(\"btnCalcFrig\");i?.addEventListener(\"click\",()=>{const e=parseFloat(document.getElementById(\"ancho\").value)||0,t=parseFloat(document.getElementById(\"largo\").value)||0,s=parseFloat(document.getElementById(\"exposicion\").value)||1,c=parseInt(document.getElementById(\"personas\").value)||1,n=document.getElementById(\"resFrig\"),o=document.getElementById(\"totalFrig\"),a=document.getElementById(\"totalBTU\");if(e>0&&t>0&&n&&o&&a){let d=e*t*100,r=(c-1)*150,l=(d+r)*s;o.textContent=Math.ceil(l).toString();const m=l*4;a.textContent=`Equivale aproximadamente a ${Math.ceil(m)} BTU`,n.classList.remove(\"hidden\")}else alert(\"Ingresá las medidas del ambiente.\")});"],["C:/proyectos/seo-tools/src/pages/hogar/consumo-electrico.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const i=document.getElementById(\"btnCalcLuz\");i?.addEventListener(\"click\",()=>{const e=parseFloat(document.getElementById(\"potenciaW\").value)||0,t=parseFloat(document.getElementById(\"horasDia\").value)||0,c=parseFloat(document.getElementById(\"diasMes\").value)||0,l=parseFloat(document.getElementById(\"costoKwh\").value)||0,o=document.getElementById(\"resLuz\"),n=document.getElementById(\"costoMensualLuz\"),s=document.getElementById(\"kwhTotales\");if(e>0&&t>0&&o&&n&&s){const a=e*t*c/1e3,d=a*l;n.textContent=\"$\"+d.toLocaleString(\"es-AR\",{maximumFractionDigits:2}),s.textContent=a.toFixed(2),o.classList.remove(\"hidden\")}else alert(\"Ingresá la potencia y las horas de uso.\")});"],["C:/proyectos/seo-tools/src/pages/hogar/hormigon.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const g=document.getElementById(\"btnCalcH\");g?.addEventListener(\"click\",()=>{const t=parseFloat(document.getElementById(\"largoH\").value)||0,n=parseFloat(document.getElementById(\"anchoH\").value)||0,o=parseFloat(document.getElementById(\"espesorH\").value)||0,s=document.getElementById(\"resH\"),a=document.getElementById(\"volumenH\"),c=document.getElementById(\"cantCemento\"),l=document.getElementById(\"cantArena\"),d=document.getElementById(\"cantPiedra\");if(t>0&&n>0&&o>0&&s&&a&&c&&l&&d){const e=t*n*o,m=e*7.5,r=e*.65,i=e*.65;a.textContent=e.toFixed(2)+\" m³\",c.textContent=Math.ceil(m).toString(),l.textContent=r.toFixed(2),d.textContent=i.toFixed(2),s.classList.remove(\"hidden\")}else alert(\"Ingresá todas las dimensiones.\")});"],["C:/proyectos/seo-tools/src/pages/hogar/ladrillos.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const M=()=>{const g=document.getElementById(\"muroLargo\"),L=document.getElementById(\"muroAlto\"),e=document.getElementById(\"tipoLadrillo\"),l=document.getElementById(\"customLadrilloGroup\"),p=document.getElementById(\"ladrilloL\"),v=document.getElementById(\"ladrilloH\"),E=document.getElementById(\"btnCalcularLadrillos\"),B=document.getElementById(\"resultadoLadrillosBox\"),s=document.getElementById(\"resTotalLadrillos\"),a=document.getElementById(\"resAreaMuro\"),n=document.getElementById(\"resPorM2\");e?.addEventListener(\"change\",()=>{e.value===\"custom\"?l?.classList.remove(\"hidden\"):l?.classList.add(\"hidden\")}),E?.addEventListener(\"click\",()=>{const r=parseFloat(g.value),c=parseFloat(L.value),d=.015;let t,o;if(e.value===\"custom\")t=parseFloat(p.value),o=parseFloat(v.value);else{const m=e.value.split(\",\");t=parseFloat(m[0]),o=parseFloat(m[1])}if(isNaN(r)||isNaN(c)||isNaN(t)||isNaN(o)){alert(\"Por favor completá todos los datos.\");return}const i=r*c,u=1/((t+d)*(o+d)),y=i*u,I=Math.ceil(y*1.1);s&&(s.innerText=I.toLocaleString()),a&&(a.innerText=`${i.toFixed(2)} m²`),n&&(n.innerText=Math.round(u).toString()),B?.classList.remove(\"hidden\")})};M();"],["C:/proyectos/seo-tools/src/pages/hogar/luz.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};document.getElementById(\"btnLuz\")?.addEventListener(\"click\",()=>{const e=parseFloat(document.getElementById(\"aparato\").value),t=parseFloat(document.getElementById(\"horas\").value);if(e&&t){const n=e*t*30/1e3;document.getElementById(\"luzVal\").innerText=n.toFixed(1)+\" kWh\",document.getElementById(\"resLuz\")?.classList.remove(\"hidden\")}});"],["C:/proyectos/seo-tools/src/pages/hogar/metros-cuadrados.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const d=document.getElementById(\"btnCalcM2\");d?.addEventListener(\"click\",()=>{const t=parseFloat(document.getElementById(\"largoM2\").value)||0,o=parseFloat(document.getElementById(\"anchoM2\").value)||0,n=parseFloat(document.getElementById(\"precioM2\").value)||0,s=document.getElementById(\"resM2\"),c=document.getElementById(\"valorM2\"),e=document.getElementById(\"contenedorCostoM2\"),a=document.getElementById(\"costoFinalM2\");if(t>0&&o>0&&s&&c){const l=t*o;c.textContent=l.toFixed(2)+\" m²\",n>0&&e&&a?(e.classList.remove(\"hidden\"),a.textContent=\"$\"+(l*n).toLocaleString(\"es-AR\",{maximumFractionDigits:0})):e&&e.classList.add(\"hidden\"),s.classList.remove(\"hidden\")}else alert(\"Ingresá las medidas para calcular.\")});"],["C:/proyectos/seo-tools/src/pages/hogar/pintura.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};document.getElementById(\"btnPintura\")?.addEventListener(\"click\",()=>{const e=parseFloat(document.getElementById(\"ancho\").value),t=parseFloat(document.getElementById(\"alto\").value),n=parseInt(document.getElementById(\"manos\").value);if(e&&t){const o=e*t/10*n;document.getElementById(\"litrosVal\").innerText=o.toFixed(1)+\" L\",document.getElementById(\"resPintura\")?.classList.remove(\"hidden\")}});"],["C:/proyectos/seo-tools/src/pages/matematica/areas.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const l=document.getElementById(\"btnCalcularArea\");l?.addEventListener(\"click\",()=>{const e=parseFloat(document.getElementById(\"base\").value)||0,t=parseFloat(document.getElementById(\"altura\").value)||0,n=document.getElementById(\"resultadoM2\"),s=document.getElementById(\"resultadoM2-container\"),o=document.getElementById(\"resBoxArea\");if(e>0&&t>0&&n&&s&&o){const a=(e*t).toFixed(2);n.innerText=`${a} m²`,o.classList.remove(\"hidden\"),s.classList.remove(\"hidden\")}else alert(\"Ingresá valores válidos.\")});"],["C:/proyectos/seo-tools/src/pages/matematica/calculadora-binomial.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const f=()=>{const a=document.getElementById(\"inputNBin\"),l=document.getElementById(\"inputKBin\"),d=document.getElementById(\"inputPBin\"),m=document.getElementById(\"btnCalcularBinomial\"),u=document.getElementById(\"boxResultadoBinomial\"),i=document.getElementById(\"resValorBinomial\"),s=document.getElementById(\"resCombinaciones\"),r=document.getElementById(\"resMediaBin\"),o=t=>{if(t<0)return 0;if(t===0)return 1;let e=1;for(let n=1;n<=t;n++)e*=n;return e},p=(t,e)=>e<0||e>t?0:o(t)/(o(e)*o(t-e));m?.addEventListener(\"click\",()=>{const t=parseInt(a.value),e=parseInt(l.value),n=parseFloat(d.value);if(isNaN(t)||isNaN(e)||isNaN(n)||n<0||n>1||e>t||e<0){alert(\"Por favor verifica los datos: 0 ≤ p ≤ 1 y 0 ≤ k ≤ n.\");return}const c=p(t,e),B=c*Math.pow(n,e)*Math.pow(1-n,t-e),b=t*n;i&&(i.innerText=(B*100).toFixed(4)+\"%\"),s&&(s.innerText=c.toLocaleString()),r&&(r.innerText=b.toFixed(2)),u?.classList.remove(\"hidden\")})};f();"],["C:/proyectos/seo-tools/src/pages/matematica/calculadora-combinatoria.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const d=document.getElementById(\"nInput\"),x=document.getElementById(\"rInput\"),s=document.getElementById(\"resultOutput\"),o=document.getElementById(\"resultLabel\"),r=document.getElementById(\"formulaText\"),a=document.getElementById(\"btnComb\"),i=document.getElementById(\"btnVar\");let c=\"comb\";const l=e=>{if(e<0)return 0;if(e===0||e===1)return 1;let t=1;for(let n=2;n<=e;n++)t*=n;return t},u=()=>{const e=parseInt(d.value),t=parseInt(x.value);if(isNaN(e)||isNaN(t)||e<t||e<0||t<0){s&&(s.innerText=\"0\");return}let n=0;c===\"comb\"?n=l(e)/(l(t)*l(e-t)):n=l(e)/l(e-t),s&&(s.innerText=Math.round(n).toLocaleString())};a?.addEventListener(\"click\",()=>{c=\"comb\",a.className=\"flex-1 py-2 px-4 rounded-xl text-[10px] font-bold transition-all bg-white shadow-sm text-fuchsia-600 uppercase\",i.className=\"flex-1 py-2 px-4 rounded-xl text-[10px] font-bold transition-all text-slate-400 hover:text-slate-600 uppercase\",o&&(o.innerText=\"Combinaciones Posibles\"),r&&(r.innerText=\"n! / (r!(n-r)!)\"),u()});i?.addEventListener(\"click\",()=>{c=\"var\",i.className=\"flex-1 py-2 px-4 rounded-xl text-[10px] font-bold transition-all bg-white shadow-sm text-fuchsia-600 uppercase\",a.className=\"flex-1 py-2 px-4 rounded-xl text-[10px] font-bold transition-all text-slate-400 hover:text-slate-600 uppercase\",o&&(o.innerText=\"Variaciones Posibles\"),r&&(r.innerText=\"n! / (n-r)!\"),u()});[d,x].forEach(e=>e?.addEventListener(\"input\",u));"],["C:/proyectos/seo-tools/src/pages/matematica/calculadora-de-angulos.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const a=document.getElementById(\"btnCalcAng\");a?.addEventListener(\"click\",()=>{const e=parseFloat(document.getElementById(\"grados\").value)||0,n=document.getElementById(\"resRelacionados\"),t=document.getElementById(\"totalRad\"),o=document.getElementById(\"resBoxAng\"),s=document.getElementById(\"resRelacionados-container\");if(e>=0&&e<=360&&n&&t&&o&&s){const d=e<=90?90-e:\"N/A\",c=180-e,l=(e*(Math.PI/180)).toFixed(4);n.innerText=`Comp: ${d}° | Sup: ${c}°`,t.innerText=`${l} rad`,o.classList.remove(\"hidden\"),s.classList.remove(\"hidden\")}else alert(\"Ingresá un ángulo válido entre 0 y 360.\")});"],["C:/proyectos/seo-tools/src/pages/matematica/calculadora-de-volumenes.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const c=document.getElementById(\"btnCalcVol\");c?.addEventListener(\"click\",()=>{const t=parseFloat(document.getElementById(\"largo\").value)||0,o=parseFloat(document.getElementById(\"ancho\").value)||0,n=parseFloat(document.getElementById(\"alto\").value)||0,s=document.getElementById(\"resultadoM3\"),l=document.getElementById(\"totalLitros\"),e=document.getElementById(\"resBoxVol\"),a=document.getElementById(\"resultadoM3-container\");if(t>0&&o>0&&n>0&&s&&l&&e&&a){const r=t*o*n;s.innerText=`${r.toFixed(2)} m³`,l.innerText=`${(r*1e3).toLocaleString(\"es-AR\")} Litros`,e.classList.remove(\"hidden\"),a.classList.remove(\"hidden\"),e.scrollIntoView({behavior:\"smooth\",block:\"center\"})}else alert(\"Por favor, ingresá todas las medidas.\")});"],["C:/proyectos/seo-tools/src/pages/matematica/calculadora-divisores.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const r=document.getElementById(\"numInput\"),s=document.getElementById(\"divisorsList\"),i=document.getElementById(\"countOutput\"),o=document.getElementById(\"primeOutput\"),l=()=>{const n=Math.abs(parseInt(r.value));if(isNaN(n)||n===0){s&&(s.innerHTML='<span class=\"text-slate-300 italic text-sm\">Esperando número...</span>');return}const e=[];for(let t=1;t<=Math.sqrt(n);t++)n%t===0&&(e.push(t),t!==n/t&&e.push(n/t));e.sort((t,a)=>t-a),s&&(s.innerHTML=e.map(t=>`<span class=\"px-3 py-1 bg-white border border-amber-200 text-amber-700 rounded-lg font-mono font-bold shadow-sm\">${t}</span>`).join(\"\")),i&&(i.innerText=e.length.toString()),o&&(o.innerText=e.length===2?\"SÍ\":\"NO\",o.className=e.length===2?\"text-xl font-black text-emerald-600\":\"text-xl font-black text-slate-700\")};r?.addEventListener(\"input\",l);"],["C:/proyectos/seo-tools/src/pages/matematica/calculadora-matrices.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const e=n=>Number(document.getElementById(n).value||0),s=(n,r)=>{const t=document.getElementById(n);t&&(t.innerText=r.toString())},o=n=>{const r=document.getElementById(\"resBox\"),t=n===\"sumar\"?1:-1,c=e(\"a11\")+e(\"b11\")*t,a=e(\"a12\")+e(\"b12\")*t,l=e(\"a21\")+e(\"b21\")*t,d=e(\"a22\")+e(\"b22\")*t;s(\"r11\",c),s(\"r12\",a),s(\"r21\",l),s(\"r22\",d),r?.classList.remove(\"hidden\")};document.getElementById(\"btnSumar\")?.addEventListener(\"click\",()=>o(\"sumar\"));document.getElementById(\"btnRestar\")?.addEventListener(\"click\",()=>o(\"restar\"));"],["C:/proyectos/seo-tools/src/pages/matematica/calculadora-numeros-primos.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const s=document.getElementById(\"primeInput\"),t=document.getElementById(\"primeResult\"),o=document.getElementById(\"primeDesc\"),n=document.getElementById(\"statusCard\"),i=document.getElementById(\"nextPrime\"),d=e=>{if(e<=1)return!1;for(let r=2;r<=Math.sqrt(e);r++)if(e%r===0)return!1;return!0},l=e=>{let r=e+1;for(;!d(r);)r++;return r},a=()=>{const e=parseInt(s.value);if(isNaN(e)){t&&(t.innerText=\"Esperando...\"),n&&(n.className=\"text-center p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 transition-colors duration-500 relative overflow-hidden\");return}d(e)?(t&&(t.innerText=\"ES PRIMO\"),o&&(o.innerText=`${e} solo es divisible por 1 y por sí mismo.`),n&&(n.className=\"text-center p-10 bg-emerald-50 rounded-[2.5rem] border border-emerald-100 transition-colors duration-500 relative overflow-hidden text-emerald-700\")):(t&&(t.innerText=\"COMPUESTO\"),o&&(o.innerText=e<=1?\"Los números menores o iguales a 1 no son primos.\":`${e} tiene más de dos divisores.`),n&&(n.className=\"text-center p-10 bg-rose-50 rounded-[2.5rem] border border-rose-100 transition-colors duration-500 relative overflow-hidden text-rose-700\")),i&&(i.innerText=e>=0?l(e).toString():\"-\")};s?.addEventListener(\"input\",a);"],["C:/proyectos/seo-tools/src/pages/matematica/calculadora-percentil.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const f=()=>{const u=document.getElementById(\"inputDatosPercentil\"),m=document.getElementById(\"inputKPercentil\"),g=document.getElementById(\"btnCalcularPercentil\"),p=document.getElementById(\"resultadoPercentilBox\"),l=document.getElementById(\"resValorPercentil\"),c=document.getElementById(\"resNTotal\"),i=document.getElementById(\"resOrdenado\");g?.addEventListener(\"click\",()=>{const a=u.value.split(\",\").map(e=>parseFloat(e.trim())).filter(e=>!isNaN(e)),r=parseFloat(m.value);if(a.length===0||isNaN(r)||r<=0||r>=100){alert(\"Por favor ingresá un conjunto de datos válido y un percentil k entre 1 y 99.\");return}const t=[...a].sort((e,s)=>e-s),d=t.length,n=r/100*(d-1);let o;if(Number.isInteger(n))o=t[n];else{const e=Math.floor(n),s=Math.ceil(n),I=n-e;o=t[e]+I*(t[s]-t[e])}l&&(l.innerText=o%1===0?o.toString():o.toFixed(2)),c&&(c.innerText=d.toString()),i&&(i.innerText=t.join(\", \")),p?.classList.remove(\"hidden\")})};f();"],["C:/proyectos/seo-tools/src/pages/matematica/calculadora-porcentil.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const u=document.getElementById(\"dataInput\"),d=document.getElementById(\"percentileInput\"),s=document.getElementById(\"resultOutput\"),p=document.getElementById(\"calcStep\"),m=()=>{const n=u.value.split(\",\").map(e=>parseFloat(e.trim())).filter(e=>!isNaN(e)),o=parseFloat(d.value);if(n.length===0||isNaN(o)||o<0||o>100){s&&(s.innerText=\"0\");return}const t=[...n].sort((e,g)=>e-g),l=o/100*(t.length-1),c=Math.floor(l),i=Math.ceil(l),r=l-c;let a;i>=t.length?a=t[t.length-1]:a=t[c]*(1-r)+t[i]*r,s&&(s.innerText=a.toLocaleString(void 0,{maximumFractionDigits:2})),p&&(p.innerText=`N = ${t.length} datos procesados`)};[u,d].forEach(n=>n?.addEventListener(\"input\",m));"],["C:/proyectos/seo-tools/src/pages/matematica/calculadora-probabilidad.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const s=document.getElementById(\"favInput\"),l=document.getElementById(\"totalInput\"),n=document.getElementById(\"resultPerc\"),r=document.getElementById(\"resultDec\"),o=document.getElementById(\"calcStep\"),i=()=>{const e=parseFloat(s.value),t=parseFloat(l.value);if(isNaN(e)||isNaN(t)||t<=0){n&&(n.innerText=\"0%\");return}if(e>t){o&&(o.innerText=\"Error: Favorables > Totales\");return}const c=e/t,a=c*100;n&&(n.innerText=a.toFixed(2)+\"%\"),r&&(r.innerText=`Decimal: ${c.toFixed(4)}`),o&&(o.innerText=`Evento: ${e} de ${t}`)};[s,l].forEach(e=>e?.addEventListener(\"input\",i));"],["C:/proyectos/seo-tools/src/pages/matematica/calculadora-proporcion.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const a=[\"valA\",\"valB\",\"valC\",\"valD\"].map(t=>document.getElementById(t)),l=document.getElementById(\"resultOutput\"),r=()=>{const[t,i,n,s]=a.map(o=>parseFloat(o.value));if([t,i,n,s].filter(o=>!isNaN(o)).length!==3){l&&(l.innerText=\"?\");return}let e=0;isNaN(t)&&(e=i*n/s),isNaN(i)&&(e=t*s/n),isNaN(n)&&(e=t*s/i),isNaN(s)&&(e=i*n/t),l&&(l.innerText=Number.isInteger(e)?e.toString():e.toFixed(2))};a.forEach(t=>t.addEventListener(\"input\",r));"],["C:/proyectos/seo-tools/src/pages/matematica/circulo.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};document.getElementById(\"btnCirculo\")?.addEventListener(\"click\",()=>{const e=parseFloat(document.getElementById(\"radio\").value);e&&(document.getElementById(\"resArea\").innerText=(Math.PI*Math.pow(e,2)).toFixed(2),document.getElementById(\"resPerim\").innerText=(2*Math.PI*e).toFixed(2),document.getElementById(\"resCirculo\")?.classList.remove(\"hidden\"))});"],["C:/proyectos/seo-tools/src/pages/matematica/combinaciones-permutaciones.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const o=e=>e<=1?1:e*o(e-1),l=document.getElementById(\"btnCalc\"),n=document.getElementById(\"resBox\"),s=document.getElementById(\"resC\"),r=document.getElementById(\"resP\");l?.addEventListener(\"click\",()=>{const e=Number(document.getElementById(\"n\").value),t=Number(document.getElementById(\"r\").value);if(isNaN(e)||isNaN(t)||t>e||e<0||t<0){alert(\"Por favor, ingresá valores válidos. n debe ser mayor o igual a r.\");return}const c=o(e)/(o(t)*o(e-t)),a=o(e)/o(e-t);n&&s&&r&&(n.classList.remove(\"hidden\"),s.innerText=Math.round(c).toLocaleString(),r.innerText=Math.round(a).toLocaleString(),window.scrollTo({top:n.offsetTop+100,behavior:\"smooth\"}))});"],["C:/proyectos/seo-tools/src/pages/matematica/conversor-bases.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const t={dec:document.getElementById(\"dec\"),bin:document.getElementById(\"bin\"),hex:document.getElementById(\"hex\"),oct:document.getElementById(\"oct\")},n=e=>{if(isNaN(e)){Object.values(t).forEach(i=>{document.activeElement!==i&&(i.value=\"\")});return}document.activeElement!==t.dec&&(t.dec.value=e.toString(10)),document.activeElement!==t.bin&&(t.bin.value=e.toString(2)),document.activeElement!==t.hex&&(t.hex.value=e.toString(16).toUpperCase()),document.activeElement!==t.oct&&(t.oct.value=e.toString(8))};t.dec?.addEventListener(\"input\",e=>n(parseInt(e.target.value,10)));t.bin?.addEventListener(\"input\",e=>n(parseInt(e.target.value,2)));t.hex?.addEventListener(\"input\",e=>n(parseInt(e.target.value,16)));t.oct?.addEventListener(\"input\",e=>n(parseInt(e.target.value,8)));"],["C:/proyectos/seo-tools/src/pages/matematica/decremento-porcentual.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const c=document.getElementById(\"val1\"),o=document.getElementById(\"val2\"),s=document.getElementById(\"resultOutput\"),t=document.getElementById(\"calcStep\"),a=()=>{const e=parseFloat(c.value),l=parseFloat(o.value);if(isNaN(e)||isNaN(l)||e===0)return;const n=(e-l)/e*100;s&&(s.innerText=n.toFixed(2)+\"%\"),t&&(n>0?(t.innerText=\"Reducción detectada\",t.className=\"text-[10px] text-rose-500 mt-6 font-bold uppercase tracking-widest bg-white/50 inline-block px-4 py-1 rounded-full\"):n<0&&(t.innerText=\"¡Es un incremento!\",t.className=\"text-[10px] text-emerald-500 mt-6 font-bold uppercase tracking-widest bg-white/50 inline-block px-4 py-1 rounded-full\"))};[c,o].forEach(e=>e?.addEventListener(\"input\",a));"],["C:/proyectos/seo-tools/src/pages/matematica/ecuaciones-segundo-grado.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const d=document.getElementById(\"btnCalcular\"),e=document.getElementById(\"resultado\");d?.addEventListener(\"click\",()=>{const c=document.getElementById(\"valA\"),l=document.getElementById(\"valB\"),a=document.getElementById(\"valC\"),t=parseFloat(c.value),n=parseFloat(l.value),i=parseFloat(a.value);if(isNaN(t)||isNaN(n)||isNaN(i)){alert(\"Por favor, completa todos los campos con números.\");return}if(t===0){e&&(e.innerHTML=\"Error: El coeficiente 'a' no puede ser 0.\",e.className=\"mt-8 p-6 rounded-2xl bg-red-50 text-red-700 block\",e.classList.remove(\"hidden\"));return}const o=n*n-4*t*i;if(e)if(e.classList.remove(\"hidden\"),e.className=\"mt-8 p-6 rounded-2xl bg-indigo-50 text-indigo-900 block border border-indigo-100\",o>0){const s=(-n+Math.sqrt(o))/(2*t),r=(-n-Math.sqrt(o))/(2*t);e.innerHTML=\"Soluciones Reales: x₁ = \"+s.toFixed(2)+\" | x₂ = \"+r.toFixed(2)}else if(o===0){const s=-n/(2*t);e.innerHTML=\"Solución Única: x = \"+s.toFixed(2)}else e.innerHTML=\"Sin soluciones reales (Discriminante: \"+o.toFixed(2)+\")\"});"],["C:/proyectos/seo-tools/src/pages/matematica/factorial.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const i=document.getElementById(\"btnFact\"),c=document.getElementById(\"numN\"),r=document.getElementById(\"resBox\"),a=document.getElementById(\"resTotal\"),l=document.getElementById(\"resPasos\");i?.addEventListener(\"click\",()=>{const e=parseInt(c.value);if(isNaN(e)||e<0){alert(\"Por favor, ingresá un número entero positivo.\");return}if(e>170){alert(\"El número es demasiado grande para calcularlo aquí (supera el límite de memoria).\");return}let t=1,o=\"\";if(e===0)t=1,o=\"0! = 1 (Por definición)\";else{let s=[];for(let n=e;n>=1;n--)t*=n,s.push(n);o=s.join(\" × \")+\" = \"+t.toLocaleString()}r&&a&&l&&(r.classList.remove(\"hidden\"),a.innerText=e>20?t.toExponential(4):t.toLocaleString(),l.innerText=o)});"],["C:/proyectos/seo-tools/src/pages/matematica/fraccion-a-decimal.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const i=document.getElementById(\"numInput\"),s=document.getElementById(\"denInput\"),e=document.getElementById(\"resultOutput\"),r=document.getElementById(\"typeDesc\"),c=()=>{const t=parseFloat(i.value),o=parseFloat(s.value);if(isNaN(t)||isNaN(o)){e&&(e.innerText=\"0\");return}if(o===0){e&&(e.innerText=\"∞\"),r&&(r.innerText=\"Error: División por cero\");return}const n=t/o;e&&(e.innerText=Number.isInteger(n)?n.toString():n.toFixed(4).replace(/\\.?0+$/,\"\")),r&&(r.innerText=n%1===0?\"Número Entero\":\"Valor Decimal\")};[i,s].forEach(t=>t?.addEventListener(\"input\",c));"],["C:/proyectos/seo-tools/src/pages/matematica/incremento-porcentual.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const c=document.getElementById(\"val1\"),d=document.getElementById(\"val2\"),n=document.getElementById(\"resultOutput\"),r=document.getElementById(\"resultCard\"),t=document.getElementById(\"resultLabel\"),o=document.getElementById(\"calcStep\"),i=()=>{const e=parseFloat(c.value),s=parseFloat(d.value);if(isNaN(e)||isNaN(s)||e===0){e===0&&(o.innerText=\"V1 no puede ser 0\");return}const a=(s-e)/e*100,l=a>=0;n&&(n.innerText=(l?\"+\":\"\")+a.toFixed(2)+\"%\"),r&&t&&o&&(l?(r.className=\"text-center p-10 bg-emerald-50 rounded-[2.5rem] border border-emerald-100 transition-colors duration-500 relative overflow-hidden\",t.className=\"block text-[10px] font-bold uppercase text-emerald-600 mb-2 tracking-widest\",t.innerText=\"Incremento\",n.className=\"text-6xl font-black text-emerald-700 leading-none\",o.innerText=\"Crecimiento positivo\"):(r.className=\"text-center p-10 bg-rose-50 rounded-[2.5rem] border border-rose-100 transition-colors duration-500 relative overflow-hidden\",t.className=\"block text-[10px] font-bold uppercase text-rose-600 mb-2 tracking-widest\",t.innerText=\"Disminución\",n.className=\"text-6xl font-black text-rose-700 leading-none\",o.innerText=\"Pérdida de valor\"))};[c,d].forEach(e=>e?.addEventListener(\"input\",i));"],["C:/proyectos/seo-tools/src/pages/matematica/logaritmos.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const n=document.getElementById(\"btnCalcular\"),a=document.getElementById(\"resultado\");n?.addEventListener(\"click\",()=>{const s=document.getElementById(\"baseInput\").value,e=parseFloat(document.getElementById(\"argInput\").value);if(isNaN(e)||e<=0){alert(\"El argumento debe ser un número positivo.\");return}let o,l;if(s===\"\"||s.toLowerCase()===\"e\")o=Math.log(e),l=\"ln(\"+e+\")\";else{const t=parseFloat(s);if(t<=0||t===1){alert(\"La base debe ser positiva y distinta de 1.\");return}o=Math.log(e)/Math.log(t),l=\"log en base \"+t+\" de \"+e}a&&(a.classList.remove(\"hidden\"),a.className=\"mt-8 p-6 rounded-2xl bg-orange-50 text-orange-900 border border-orange-100 text-center\",a.innerHTML=\"<p class='text-lg'>El resultado de <strong>\"+l+\"</strong> es:</p><p class='text-4xl font-black mt-2'>\"+o.toFixed(6)+\"</p>\")});"],["C:/proyectos/seo-tools/src/pages/matematica/mcm-mcd.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const i=document.getElementById(\"btnCalcular\"),m=document.getElementById(\"resultado\"),d=document.getElementById(\"numInput\"),r=(n,e)=>e===0?n:r(e,n%e),a=(n,e)=>n===0||e===0?0:Math.abs(n*e)/r(n,e);i?.addEventListener(\"click\",()=>{const e=d.value.split(/[\\s,]+/).map(t=>parseInt(t)).filter(t=>!isNaN(t)&&t>0);if(e.length<2){alert(\"Por favor, ingresá al menos dos números válidos.\");return}let s=e[0],o=e[0];for(let t=1;t<e.length;t++)s=r(s,e[t]),o=a(o,e[t]);const l=document.getElementById(\"mcmRes\"),c=document.getElementById(\"mcdRes\");l&&c&&m&&(l.innerText=o.toString(),c.innerText=s.toString(),m.classList.remove(\"hidden\"))});"],["C:/proyectos/seo-tools/src/pages/matematica/notacion-cientifica.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const p=()=>{const c=document.getElementById(\"inputNumeroCientifico\"),r=document.getElementById(\"btnConvertirCientifica\"),l=document.getElementById(\"resultadoCientificaBox\"),n=document.getElementById(\"resCientifica\"),i=document.getElementById(\"resDecimal\"),o=document.getElementById(\"infoExponente\");r?.addEventListener(\"click\",()=>{const a=c.value.trim().replace(\",\",\".\");if(!a)return;const t=Number(a);if(isNaN(t)){alert(\"Por favor, ingresa un número válido.\");return}const m=t.toExponential(),[d,s]=m.split(\"e\"),u=`${parseFloat(d).toFixed(4)} × 10^${parseInt(s)}`,f=t.toLocaleString(\"fullwide\",{useGrouping:!1,maximumFractionDigits:20});if(n&&(n.innerText=u),i&&(i.innerText=f),o){const e=parseInt(s);o.innerText=e>=0?`El exponente ${e} indica que movemos la coma ${e} lugares a la derecha.`:`El exponente ${e} indica que movemos la coma ${Math.abs(e)} lugares a la izquierda.`}l?.classList.remove(\"hidden\")})};p();"],["C:/proyectos/seo-tools/src/pages/matematica/pitagoras.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};document.getElementById(\"btnPit\")?.addEventListener(\"click\",()=>{const e=parseFloat(document.getElementById(\"catA\").value),t=parseFloat(document.getElementById(\"catB\").value);if(e>0&&t>0){const a=Math.sqrt(Math.pow(e,2)+Math.pow(t,2));document.getElementById(\"valPit\").innerText=a.toLocaleString(\"es-AR\",{maximumFractionDigits:2}),document.getElementById(\"resPit\")?.classList.remove(\"hidden\")}else alert(\"Por favor, ingresá valores mayores a cero.\")});"],["C:/proyectos/seo-tools/src/pages/matematica/porcentaje-inverso.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const i=document.getElementById(\"finalValue\"),r=document.getElementById(\"percentage\"),c=document.getElementById(\"resultOutput\"),d=document.getElementById(\"calcStep\"),s=document.getElementById(\"btnDescuento\"),o=document.getElementById(\"btnAumento\");let t=\"desc\";const a=()=>{const e=parseFloat(i.value),n=parseFloat(r.value);if(isNaN(e)||isNaN(n))return;let l;t===\"desc\"?l=e/(1-n/100):l=e/(1+n/100),c&&(c.innerText=l.toLocaleString(void 0,{maximumFractionDigits:2})),d&&(d.innerText=t===\"desc\"?\"Antes del descuento\":\"Antes del aumento\")};s?.addEventListener(\"click\",()=>{t=\"desc\",s.className=\"flex-1 py-2 px-4 rounded-xl text-xs font-bold transition-all bg-white shadow-sm text-amber-600\",o.className=\"flex-1 py-2 px-4 rounded-xl text-xs font-bold transition-all text-slate-400 hover:text-slate-600\",a()});o?.addEventListener(\"click\",()=>{t=\"aum\",o.className=\"flex-1 py-2 px-4 rounded-xl text-xs font-bold transition-all bg-white shadow-sm text-amber-600\",s.className=\"flex-1 py-2 px-4 rounded-xl text-xs font-bold transition-all text-slate-400 hover:text-slate-600\",a()});[i,r].forEach(e=>e?.addEventListener(\"input\",a));"],["C:/proyectos/seo-tools/src/pages/matematica/promedio-mediana-moda.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const E=document.getElementById(\"btnCalcular\"),u=document.getElementById(\"resultado\"),h=document.getElementById(\"dataInput\");E?.addEventListener(\"click\",()=>{const n=h.value.split(/[\\s,]+/).map(e=>parseFloat(e)).filter(e=>!isNaN(e));if(n.length===0){alert(\"Por favor, ingresá algunos números.\");return}const g=n.reduce((e,m)=>e+m,0)/n.length,o=[...n].sort((e,m)=>e-m),a=Math.floor(o.length/2);let i;o.length%2===0?i=(o[a-1]+o[a])/2:i=o[a];const t={};n.forEach(e=>t[e]=(t[e]||0)+1);let s=0,l=[];for(const e in t)t[e]>s?(s=t[e],l=[Number(e)]):t[e]===s&&l.push(Number(e));const f=s===1?\"N/A\":l.join(\", \"),r=document.getElementById(\"mediaRes\"),c=document.getElementById(\"medianaRes\"),d=document.getElementById(\"modaRes\");r&&c&&d&&u&&(r.innerText=g.toLocaleString(void 0,{maximumFractionDigits:2}),c.innerText=i.toString(),d.innerText=f,u.classList.remove(\"hidden\"))});"],["C:/proyectos/seo-tools/src/pages/matematica/rango-estadistico.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const m=document.getElementById(\"dataInput\"),e=document.getElementById(\"resultOutput\"),n=document.getElementById(\"minOutput\"),i=document.getElementById(\"maxOutput\"),a=document.getElementById(\"calcStep\"),l=()=>{const t=m.value.split(\",\").map(o=>parseFloat(o.trim())).filter(o=>!isNaN(o));if(t.length<2){e&&(e.innerText=\"0\"),n&&(n.innerText=\"-\"),i&&(i.innerText=\"-\"),a&&(a.innerText=\"Ingresá al menos 2 números\");return}const s=Math.max(...t),r=Math.min(...t),c=s-r;e&&(e.innerText=c.toLocaleString(void 0,{maximumFractionDigits:3})),n&&(n.innerText=r.toString()),i&&(i.innerText=s.toString()),a&&(a.innerText=`Calculado sobre ${t.length} datos`)};m?.addEventListener(\"input\",l);"],["C:/proyectos/seo-tools/src/pages/matematica/regla-de-tres.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const i=()=>{const l=document.getElementById(\"valA\"),a=document.getElementById(\"valB\"),c=document.getElementById(\"valC\"),r=document.getElementById(\"btnCalcRegla3\"),d=document.getElementById(\"resRegla3Box\"),n=document.getElementById(\"resX\");r?.addEventListener(\"click\",()=>{const e=parseFloat(l.value),s=parseFloat(a.value),o=parseFloat(c.value);if(isNaN(e)||isNaN(s)||isNaN(o)||e===0){alert(\"Por favor ingresá valores válidos. A no puede ser cero.\");return}const t=s*o/e;n&&(n.innerText=Number.isInteger(t)?t.toString():t.toFixed(2).replace(\".\",\",\")),d?.classList.remove(\"hidden\")})};i();"],["C:/proyectos/seo-tools/src/pages/matematica/triangulo.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const o=document.getElementById(\"baseT\"),a=document.getElementById(\"alturaT\"),c=document.getElementById(\"btnTri\"),l=document.getElementById(\"resTri\"),n=document.getElementById(\"valTri\");c?.addEventListener(\"click\",()=>{const e=parseFloat(o.value),t=parseFloat(a.value);if(e>0&&t>0){const s=e*t/2;n&&(n.innerText=s.toString()),l?.classList.remove(\"hidden\")}});"],["C:/proyectos/seo-tools/src/pages/matematica/varianza-desviacion-estandar.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const i=document.getElementById(\"resultado\"),o=document.getElementById(\"dataInput\");btn?.addEventListener(\"click\",()=>{const a=o.value.split(/[\\s,]+/).map(n=>parseFloat(n)).filter(n=>!isNaN(n));if(a.length<2){alert(\"Por favor, ingresá al menos dos números para calcular la dispersión.\");return}const e=calcularDispersion(a),s=document.getElementById(\"varianzaRes\"),t=document.getElementById(\"desviacionRes\");s&&t&&i&&e&&(s.innerText=e.varianza,t.innerText=e.desviacion,i.classList.remove(\"hidden\"))});"],["C:/proyectos/seo-tools/src/pages/negocios/comisiones.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const l=document.getElementById(\"btnCalcComision\");l?.addEventListener(\"click\",()=>{const e=parseFloat(document.getElementById(\"precioVenta\").value)||0,i=parseFloat(document.getElementById(\"porcentajeComision\").value)||0,a=parseFloat(document.getElementById(\"costoFijo\").value)||0,m=parseFloat(document.getElementById(\"costoEnvio\").value)||0,t=document.getElementById(\"resComision\"),o=document.getElementById(\"montoNeto\"),n=document.getElementById(\"montoDescuento\");if(e>0&&t&&o&&n){const s=e*(i/100)+a+m,c=e-s;o.textContent=\"$\"+(c>0?c:0).toLocaleString(\"es-AR\",{maximumFractionDigits:2}),n.textContent=\"$\"+s.toLocaleString(\"es-AR\",{maximumFractionDigits:2}),t.classList.remove(\"hidden\")}else alert(\"Ingresá el precio de venta para calcular.\")});"],["C:/proyectos/seo-tools/src/pages/negocios/margen.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const g=()=>{const c=document.getElementById(\"btnCalcularMargen\"),l=document.getElementById(\"costoProducto\"),i=document.getElementById(\"precioVenta\"),o=document.getElementById(\"resultadoMargenBox\"),a=document.getElementById(\"resMargenPorcentaje\"),s=document.getElementById(\"resGananciaAbsoluta\"),r=document.getElementById(\"resMarkupPorcentaje\");c?.addEventListener(\"click\",()=>{const t=parseFloat(l.value),e=parseFloat(i.value);if(isNaN(t)||isNaN(e)||e<=0){alert(\"Por favor, ingresá valores válidos.\");return}const n=e-t,d=n/e*100,u=n/t*100;a&&(a.innerText=`${d.toFixed(2)}%`),s&&(s.innerText=`$ ${n.toLocaleString()}`),r&&(r.innerText=`${u.toFixed(2)}%`),o?.classList.remove(\"hidden\"),o?.scrollIntoView({behavior:\"smooth\",block:\"center\"})})};g();"],["C:/proyectos/seo-tools/src/pages/negocios/markup-margen.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const d=document.getElementById(\"btnCalcM\");d?.addEventListener(\"click\",()=>{const e=parseFloat(document.getElementById(\"costoProd\").value)||0,t=parseFloat(document.getElementById(\"ventaProd\").value)||0,o=document.getElementById(\"resM\"),a=document.getElementById(\"valMarkup\"),s=document.getElementById(\"valMargen\"),c=document.getElementById(\"gananciaBruta\");if(e>0&&t>e&&o&&a&&s&&c){const n=t-e,l=n/e*100,r=n/t*100;a.textContent=l.toFixed(1)+\"%\",s.textContent=r.toFixed(1)+\"%\",c.textContent=\"$\"+n.toLocaleString(\"es-AR\",{maximumFractionDigits:0}),o.classList.remove(\"hidden\")}else alert(\"El precio de venta debe ser mayor al costo.\")});"],["C:/proyectos/seo-tools/src/pages/negocios/precio-venta.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};document.getElementById(\"btnPrecio\")?.addEventListener(\"click\",()=>{const e=parseFloat(document.getElementById(\"costoV\").value),t=parseFloat(document.getElementById(\"margenDeseado\").value)/100;if(e&&t<1){const o=e/(1-t);document.getElementById(\"valPrecio\").innerText=\"$\"+o.toLocaleString(\"es-AR\",{maximumFractionDigits:2}),document.getElementById(\"resPrecio\")?.classList.remove(\"hidden\")}});"],["C:/proyectos/seo-tools/src/pages/negocios/punto-equilibrio.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const r=document.getElementById(\"btnEquilibrio\");r?.addEventListener(\"click\",()=>{const t=parseFloat(document.getElementById(\"fijos\").value),e=parseFloat(document.getElementById(\"precio\").value),o=parseFloat(document.getElementById(\"variable\").value);if(t>=0&&e>o){const n=Math.ceil(t/(e-o)),l=n*e,i=document.getElementById(\"unidadesVal\"),s=document.getElementById(\"dineroVal\"),a=document.getElementById(\"resEquilibrio\");i&&s&&a&&(i.innerText=n.toLocaleString(\"es-AR\"),s.innerText=\"$\"+l.toLocaleString(\"es-AR\",{maximumFractionDigits:0}),a.classList.remove(\"hidden\"),window.scrollTo({top:350,behavior:\"smooth\"}))}else e<=o?alert(\"¡Error! El precio de venta debe ser mayor al costo variable, sino nunca alcanzarás el equilibrio.\"):alert(\"Por favor, completá los campos con valores válidos.\")});"],["C:/proyectos/seo-tools/src/pages/negocios/tarifa-freelance.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const i=()=>{document.getElementById(\"btnFreelance\")?.addEventListener(\"click\",()=>{const n=document.getElementById(\"sueldoD\"),a=document.getElementById(\"gastosF\"),l=document.getElementById(\"horasM\"),t=parseFloat(n.value),c=parseFloat(a.value)||0,s=parseFloat(l.value);if(t>0&&s>0){const r=(t+c)/s,o=document.getElementById(\"valFreelance\"),e=document.getElementById(\"resFreelance\");o&&e&&(o.innerText=\"$\"+r.toLocaleString(\"es-AR\",{minimumFractionDigits:2,maximumFractionDigits:2}),e.classList.remove(\"hidden\"),e.scrollIntoView({behavior:\"smooth\",block:\"center\"}))}else alert(\"Por favor, completá el sueldo deseado y las horas mensuales.\")})};i();"],["C:/proyectos/seo-tools/src/pages/negocios/valor-de-tu-hora.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const d=document.getElementById(\"btnCalcularHora\");d?.addEventListener(\"click\",()=>{const e=parseFloat(document.getElementById(\"sueldo\").value)||0,n=parseFloat(document.getElementById(\"gastos\").value)||0,o=parseFloat(document.getElementById(\"horas\").value)||0,t=parseFloat(document.getElementById(\"dias\").value)||0,s=document.getElementById(\"resultadoHora\"),a=document.getElementById(\"montoHora\");if(e>0&&o>0&&t>0&&s&&a){const l=e+n,c=o*t,r=l/c;a.textContent=\"$\"+r.toLocaleString(\"es-AR\",{maximumFractionDigits:0}),s.classList.remove(\"hidden\")}else alert(\"Por favor, completá los datos básicos (Sueldo, Horas y Días).\")});"],["C:/proyectos/seo-tools/src/pages/salud/agua.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};document.getElementById(\"btnAgua\")?.addEventListener(\"click\",()=>{const e=parseFloat(document.getElementById(\"pesoAgua\").value),n=parseFloat(document.getElementById(\"actividad\").value);if(e){const t=e*.035+n,o=Math.round(t*1e3/250);document.getElementById(\"aguaVal\").innerText=t.toFixed(1)+\" L\",document.getElementById(\"vasosVal\").innerText=o.toString(),document.getElementById(\"resAgua\")?.classList.remove(\"hidden\")}});"],["C:/proyectos/seo-tools/src/pages/salud/calorias.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const c=()=>{document.getElementById(\"btnCal\")?.addEventListener(\"click\",()=>{const a=document.getElementById(\"sexoC\").value,t=parseFloat(document.getElementById(\"pesoC\").value),n=parseFloat(document.getElementById(\"alturaC\").value),l=parseFloat(document.getElementById(\"edadC\").value);if(t&&n&&l){let e=10*t+6.25*n-5*l;e=a===\"H\"?e+5:e-161;const o=document.getElementById(\"valCal\"),s=document.getElementById(\"resCal\");o&&s&&(o.innerText=Math.round(e).toLocaleString(\"es-AR\"),s.classList.remove(\"hidden\"))}})};c();"],["C:/proyectos/seo-tools/src/pages/salud/dejar-de-fumar.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const d=()=>{document.getElementById(\"btnFumar\")?.addEventListener(\"click\",()=>{const r=document.getElementById(\"cigarrillosD\"),a=document.getElementById(\"precioPack\"),e=parseFloat(r.value),t=parseFloat(a.value);if(e>0&&t>0){const i=e/20*t*365,l=e*11*365,n=Math.round(l/1440),s=document.getElementById(\"dineroA\"),c=document.getElementById(\"vidaA\"),o=document.getElementById(\"resFumar\");s&&c&&o&&(s.innerText=\"$\"+Math.round(i).toLocaleString(\"es-AR\"),c.innerText=n+(n===1?\" día\":\" días\"),o.classList.remove(\"hidden\"),o.scrollIntoView({behavior:\"smooth\",block:\"center\"}))}else alert(\"Por favor, completá ambos campos con valores válidos.\")})};d();"],["C:/proyectos/seo-tools/src/pages/salud/embarazo.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const d=()=>{document.getElementById(\"btnEmbarazo\")?.addEventListener(\"click\",()=>{const s=document.getElementById(\"fum\").value;if(s){const e=new Date(s);e.setMinutes(e.getMinutes()+e.getTimezoneOffset());const l=new Date,a=new Date(e);a.setDate(e.getDate()+280);const r=l.getTime()-e.getTime(),t=Math.floor(r/(1e3*60*60*24*7));let n=\"1º\";t>=13&&t<27&&(n=\"2º\"),t>=27&&(n=\"3º\");const i=document.getElementById(\"fpp\"),m=document.getElementById(\"semGen\"),c=document.getElementById(\"trimGen\"),o=document.getElementById(\"resEmbarazo\");i&&m&&c&&o&&(i.innerText=a.toLocaleDateString(\"es-ES\",{day:\"numeric\",month:\"long\",year:\"numeric\"}),m.innerText=t.toString(),c.innerText=n,o.classList.remove(\"hidden\"),o.scrollIntoView({behavior:\"smooth\",block:\"center\"}))}else alert(\"Por favor, seleccioná la fecha de tu última regla.\")})};d();"],["C:/proyectos/seo-tools/src/pages/salud/frecuencia-cardiaca.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};(function(){(()=>{const o=document.getElementById(\"btnFC\"),s=document.getElementById(\"edadFC\");o?.addEventListener(\"click\",()=>{const e=parseFloat(s.value);if(e>0&&e<120){const d=208-.7*e,n=document.getElementById(\"valFC\"),t=document.getElementById(\"resFC\");n&&t&&(n.innerText=Math.round(d).toString(),t.classList.remove(\"hidden\"),t.scrollIntoView({behavior:\"smooth\",block:\"center\"}))}else alert(\"Por favor, ingresá una edad válida.\")})})()})();"],["C:/proyectos/seo-tools/src/pages/salud/imc.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};document.getElementById(\"btnIMC\")?.addEventListener(\"click\",()=>{const l=parseFloat(document.getElementById(\"peso\").value),s=parseFloat(document.getElementById(\"altura\").value)/100;if(l>0&&s>0){const t=l/(s*s);let e=\"\";t<18.5?e=\"Bajo peso\":t<25?e=\"Peso Saludable\":t<30?e=\"Sobrepeso\":e=\"Obesidad\",document.getElementById(\"valIMC\").innerText=t.toFixed(1),document.getElementById(\"descIMC\").innerText=e,document.getElementById(\"resIMC\")?.classList.remove(\"hidden\")}});"],["C:/proyectos/seo-tools/src/pages/salud/keto.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const a=()=>{document.getElementById(\"btnKeto\")?.addEventListener(\"click\",()=>{const c=document.getElementById(\"caloriasK\"),e=parseFloat(c.value);if(e>0){const r=Math.round(e*.7/9),l=Math.round(e*.25/4),d=Math.round(e*.05/4),n=document.getElementById(\"gKeto\"),o=document.getElementById(\"pKeto\"),s=document.getElementById(\"cKeto\"),t=document.getElementById(\"resKeto\");n&&o&&s&&t&&(n.innerText=`${r}g`,o.innerText=`${l}g`,s.innerText=`${d}g`,t.classList.remove(\"hidden\"),t.scrollIntoView({behavior:\"smooth\",block:\"center\"}))}else alert(\"Por favor, ingresá un número de calorías válido.\")})};a();"],["C:/proyectos/seo-tools/src/pages/salud/ovulacion.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const l=()=>{document.getElementById(\"btnOvulacion\")?.addEventListener(\"click\",()=>{const n=document.getElementById(\"fechaPeriodo\").value,i=document.getElementById(\"duracionCiclo\").value,s=parseInt(i)||28;if(n){const e=new Date(n);e.setMinutes(e.getMinutes()+e.getTimezoneOffset());const o=new Date(e);o.setDate(e.getDate()+(s-14));const a={day:\"numeric\",month:\"long\",year:\"numeric\"},c=document.getElementById(\"diaFertil\"),t=document.getElementById(\"resOvulacion\");c&&t&&(c.innerText=o.toLocaleDateString(\"es-ES\",a),t.classList.remove(\"hidden\"),t.scrollIntoView({behavior:\"smooth\",block:\"center\"}))}else alert(\"Por favor, seleccioná la fecha de tu último período.\")})};l();"],["C:/proyectos/seo-tools/src/pages/salud/proteina.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};document.getElementById(\"btnProt\")?.addEventListener(\"click\",()=>{const e=parseFloat(document.getElementById(\"pesoP\").value),t=parseFloat(document.getElementById(\"actividadP\").value);if(e>0){const n=e*t;document.getElementById(\"valProt\").innerText=Math.round(n).toString(),document.getElementById(\"resProt\")?.classList.remove(\"hidden\")}});"],["C:/proyectos/seo-tools/src/pages/salud/volumen-definicion.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const r=n=>{const m=document.getElementById(\"sexoV\").value,e=parseFloat(document.getElementById(\"pesoV\").value),o=parseFloat(document.getElementById(\"alturaV\").value),l=parseFloat(document.getElementById(\"edadV\").value),u=parseFloat(document.getElementById(\"actividadV\").value);if(e&&o&&l){let t=10*e+6.25*o-5*l;t=m===\"H\"?t+5:t-161;let a=t*u,d=n===\"vol\"?a+400:a*.8;const c=e*2.1,s=e*.9,i=(d-c*4-s*9)/4;document.getElementById(\"metaLabel\").innerText=n===\"vol\"?\"Meta: Ganar Músculo\":\"Meta: Perder Grasa\",document.getElementById(\"caloriasFinal\").innerText=Math.round(d).toString(),document.getElementById(\"protVal\").innerText=Math.round(c)+\"g\",document.getElementById(\"grasVal\").innerText=Math.round(s)+\"g\",document.getElementById(\"carbVal\").innerText=Math.round(i)+\"g\",document.getElementById(\"resFit\")?.classList.remove(\"hidden\"),window.scrollTo({top:400,behavior:\"smooth\"})}else alert(\"Completá todos los campos.\")};document.getElementById(\"btnVol\")?.addEventListener(\"click\",()=>r(\"vol\"));document.getElementById(\"btnDef\")?.addEventListener(\"click\",()=>r(\"def\"));"],["C:/proyectos/seo-tools/src/pages/seo/analizador-parrafos.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const i=document.getElementById(\"paragraphInput\"),p=document.getElementById(\"totalParagraphs\"),d=document.getElementById(\"longParagraphs\"),c=document.getElementById(\"avgWords\"),g=document.getElementById(\"paragraphFeedback\");i?.addEventListener(\"input\",()=>{const r=i.value.trim();if(!r)return;const a=r.split(/\\n+/).filter(e=>e.trim().length>0);let o=0,l=0;const b=a.map((e,m)=>{const t=e.split(/\\s+/).length;l+=t;let n=\"border-teal-200 bg-teal-50 text-teal-700\",s=\"Óptimo\";return t>70?(n=\"border-rose-200 bg-rose-50 text-rose-700\",s=\"Demasiado Largo\",o++):t>45&&(n=\"border-amber-200 bg-amber-50 text-amber-700\",s=\"Aceptable\"),`\n        <div class=\"p-3 border-l-4 rounded-r-xl text-xs font-medium ${n}\">\n          <div class=\"flex justify-between mb-1\">\n            <span class=\"uppercase font-bold text-[9px]\">Párrafo ${m+1}</span>\n            <span class=\"uppercase font-bold text-[9px]\">${t} palabras - ${s}</span>\n          </div>\n          <p class=\"line-clamp-1 opacity-70\">${e}</p>\n        </div>\n      `}).join(\"\");p&&(p.innerText=a.length.toString()),d&&(d.innerText=o.toString()),c&&(c.innerText=Math.round(l/(a.length||1)).toString()),g&&(g.innerHTML=b)});"],["C:/proyectos/seo-tools/src/pages/seo/analizador-repeticion.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const l=document.getElementById(\"textInput\"),c=document.getElementById(\"diversityScore\"),n=document.getElementById(\"adviceText\"),u=document.getElementById(\"repeatList\"),m=[\"el\",\"la\",\"los\",\"las\",\"un\",\"una\",\"unos\",\"unas\",\"de\",\"del\",\"en\",\"y\",\"o\",\"que\",\"es\",\"con\",\"por\",\"para\",\"como\",\"su\",\"sus\"];l?.addEventListener(\"input\",()=>{const r=l.value.toLowerCase().trim();if(r.length<10)return;const s=r.match(/\\b\\w+\\b/g)||[],a=s.length,d=new Set(s).size,o=a>0?d/a*100:0;c&&(c.innerText=Math.round(o)+\"%\"),n&&(o>70?n.innerText=\"¡Excelente variedad! Tu vocabulario es rico y profesional.\":o>50?n.innerText=\"Buen equilibrio, aunque podrías usar algunos sinónimos extra.\":n.innerText=\"Cuidado: el texto es muy repetitivo. Intentá variar tus términos clave.\");const i={};s.forEach(e=>{!m.includes(e)&&e.length>3&&(i[e]=(i[e]||0)+1)});const p=Object.entries(i).filter(([e,t])=>t>2).sort((e,t)=>t[1]-e[1]).slice(0,8);u&&(u.innerHTML=p.map(([e,t])=>`\n        <span class=\"px-3 py-1 bg-white border border-lime-200 text-lime-700 rounded-full text-xs font-bold\">\n          ${e}: ${t}\n        </span>\n      `).join(\"\"))});"],["C:/proyectos/seo-tools/src/pages/seo/analizador-titulos.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const n=document.getElementById(\"headlineInput\"),o=document.getElementById(\"charCount\"),i=document.getElementById(\"scoreDisplay\"),l=document.getElementById(\"readingLevel\"),r=document.getElementById(\"feedbackList\"),p=[\"mejor\",\"guia\",\"definitivo\",\"increible\",\"secreto\",\"gratis\",\"facil\",\"nuevo\",\"paso a paso\"];n?.addEventListener(\"input\",()=>{const a=n.value,s=a.length;let e=0,t=[];s>=40&&s<=60?(e+=40,t.push('<span class=\"text-emerald-500\">✓ Longitud perfecta para SEO.</span>')):s>60?(e+=15,t.push('<span class=\"text-red-500\">⚠ Demasiado largo, Google lo cortará.</span>')):(e+=10,t.push('<span class=\"text-amber-500\">⚠ Título muy corto, aprovechá más espacio.</span>')),/\\d/.test(a)&&(e+=20,t.push('<span class=\"text-emerald-500\">✓ Incluís números, esto atrae más clics.</span>')),p.some(c=>a.toLowerCase().includes(c))&&(e+=20,t.push('<span class=\"text-emerald-500\">✓ Usás palabras de poder emocionales.</span>')),a.split(\" \").length>4&&(e+=20),o&&(o.innerText=s.toString()),i&&(i.innerText=`${e}/100`),l&&(l.innerText=s>0?s<50?\"Muy Simple\":\"Complejo\":\"Esperando...\"),r&&(r.innerHTML=t.join(\"\"))});"],["C:/proyectos/seo-tools/src/pages/seo/anchor-text-ratio.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const r=[\"brandAnchors\",\"exactAnchors\",\"genericAnchors\",\"nakedAnchors\"],a=r.map(s=>document.getElementById(s)),o=document.getElementById(\"exactRatio\"),t=document.getElementById(\"riskLevel\"),i=()=>{const s=a.map(e=>parseFloat(e.value)||0),n=s.reduce((e,l)=>e+l,0),c=s[1];if(n>0){const e=c/n*100;o&&(o.innerText=e.toFixed(1)+\"%\"),t&&(e<=5?(t.innerText=\"Seguro (Perfil Natural)\",t.className=\"text-sm font-bold text-emerald-500 uppercase mt-2\"):e<=15?(t.innerText=\"Riesgo Moderado\",t.className=\"text-sm font-bold text-amber-500 uppercase mt-2\"):(t.innerText=\"Alto Riesgo de Penalización\",t.className=\"text-sm font-bold text-rose-500 uppercase mt-2\"))}};a.forEach(s=>s?.addEventListener(\"input\",i));"],["C:/proyectos/seo-tools/src/pages/seo/calculadora-alcance.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const l=document.getElementById(\"reachInput\"),c=document.getElementById(\"followersInput\"),t=document.getElementById(\"reachResult\"),e=document.getElementById(\"reachLabel\"),o=()=>{const a=parseFloat(l.value),s=parseFloat(c.value);if(s>0&&a>=0){const n=a/s*100;t&&(t.innerText=`${n.toFixed(1)}%`),e&&(n>100?(e.innerText=\"Viralidad Positiva\",e.className=\"text-[10px] text-emerald-500 mt-4 font-bold uppercase tracking-widest\"):n>20?(e.innerText=\"Alcance Saludable\",e.className=\"text-[10px] text-blue-500 mt-4 font-bold uppercase tracking-widest\"):(e.innerText=\"Alcance Limitado\",e.className=\"text-[10px] text-amber-500 mt-4 font-bold uppercase tracking-widest\"))}else t&&(t.innerText=\"0%\")};l?.addEventListener(\"input\",o);c?.addEventListener(\"input\",o);"],["C:/proyectos/seo-tools/src/pages/seo/calculadora-cpa.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const n=document.getElementById(\"costIn\"),o=document.getElementById(\"salesIn\"),e=document.getElementById(\"cpaResult\"),a=()=>{const t=parseFloat(n.value),s=parseFloat(o.value);if(s>0&&t>=0){const c=t/s;e&&(e.innerText=`$${c.toFixed(2)}`)}else e&&(e.innerText=\"$0.00\")};n?.addEventListener(\"input\",a);o?.addEventListener(\"input\",a);"],["C:/proyectos/seo-tools/src/pages/seo/calculadora-cpc.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const s=document.getElementById(\"cost\"),c=document.getElementById(\"clicks\"),e=document.getElementById(\"cpcResult\"),o=()=>{const t=parseFloat(s.value),n=parseFloat(c.value);if(n>0&&t>=0){const l=t/n;e&&(e.innerText=`$${l.toFixed(2)}`)}else e&&(e.innerText=\"$0.00\")};s?.addEventListener(\"input\",o);c?.addEventListener(\"input\",o);"],["C:/proyectos/seo-tools/src/pages/seo/calculadora-cpl.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const s=document.getElementById(\"costIn\"),o=document.getElementById(\"leadsIn\"),e=document.getElementById(\"cplResult\"),l=()=>{const t=parseFloat(s.value),n=parseFloat(o.value);if(n>0&&t>=0){const c=t/n;e&&(e.innerText=`$${c.toFixed(2)}`)}else e&&(e.innerText=\"$0.00\")};s?.addEventListener(\"input\",l);o?.addEventListener(\"input\",l);"],["C:/proyectos/seo-tools/src/pages/seo/calculadora-cpm.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const s=document.getElementById(\"cost\"),o=document.getElementById(\"impressions\"),e=document.getElementById(\"cpmResult\"),c=()=>{const t=parseFloat(s.value),n=parseFloat(o.value);if(n>0&&t>=0){const i=t/n*1e3;e&&(e.innerText=`$${i.toFixed(2)}`)}else e&&(e.innerText=\"$0.00\")};s?.addEventListener(\"input\",c);o?.addEventListener(\"input\",c);"],["C:/proyectos/seo-tools/src/pages/seo/calculadora-ctr.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const l=document.getElementById(\"impressions\"),c=document.getElementById(\"clicks\"),t=document.getElementById(\"ctrResult\"),e=document.getElementById(\"ctrStatus\"),a=()=>{const i=parseFloat(l.value),s=parseFloat(c.value);if(i>0&&s>=0){const n=s/i*100;t&&(t.innerText=`${n.toFixed(2)}%`),e&&(n<1?(e.innerText=\"Bajo - Necesita optimización\",e.className=\"mt-4 inline-block px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-red-100 text-red-600\"):n<3?(e.innerText=\"Normal - Promedio industria\",e.className=\"mt-4 inline-block px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-amber-100 text-amber-600\"):(e.innerText=\"Excelente - Muy atractivo\",e.className=\"mt-4 inline-block px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-emerald-100 text-emerald-600\"))}else t&&(t.innerText=\"0%\")};l?.addEventListener(\"input\",a);c?.addEventListener(\"input\",a);"],["C:/proyectos/seo-tools/src/pages/seo/contador-caracteres.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const c=(l,d,n,e)=>{const t=l.value.length;if(d&&(d.innerText=`${t} / ${e}`),n){const u=Math.min(t/e*100,100);n.style.width=`${u}%`,n.style.backgroundColor=t>e?\"#ef4444\":t>e*.8?\"#10b981\":\"#3b82f6\"}},o=document.getElementById(\"inputTitle\"),s=document.getElementById(\"inputDesc\");o?.addEventListener(\"input\",()=>c(o,document.getElementById(\"metaTitleCount\"),document.getElementById(\"barTitle\"),60));s?.addEventListener(\"input\",()=>c(s,document.getElementById(\"metaDescCount\"),document.getElementById(\"barDesc\"),155));"],["C:/proyectos/seo-tools/src/pages/seo/contador-caracteres-sin-espacios.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const t=document.getElementById(\"inputContador\"),e=document.getElementById(\"conEspacios\"),o=document.getElementById(\"sinEspacios\");t?.addEventListener(\"input\",()=>{const n=t.value,s=n.length,c=n.replace(/\\s+/g,\"\").length;e&&(e.innerText=s.toString()),o&&(o.innerText=c.toString())});"],["C:/proyectos/seo-tools/src/pages/seo/contador-encabezados.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const c=document.getElementById(\"headerInput\"),o={h1:document.getElementById(\"h1Count\"),h2:document.getElementById(\"h2Count\"),h3:document.getElementById(\"h3Count\"),h4:document.getElementById(\"h4Count\"),h5:document.getElementById(\"h5Count\"),h6:document.getElementById(\"h6Count\")},d=()=>{const n=c.value;for(let t=1;t<=6;t++){const e=`h${t}`,h=new RegExp(`<${e}[^>]*>`,\"gi\"),m=t===1?/^#\\s/gm:new RegExp(`^${\"#\".repeat(t)}\\\\s`,\"gm\"),g=(n.match(h)||[]).length,s=(n.match(m)||[]).length;o[e]&&(o[e].innerText=(g+s).toString())}};c?.addEventListener(\"input\",d);"],["C:/proyectos/seo-tools/src/pages/seo/contador-frases.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const l=document.getElementById(\"sentenceInput\"),g=document.getElementById(\"totalSentences\"),c=document.getElementById(\"avgSentenceLength\"),r=document.getElementById(\"longSentences\"),d=document.getElementById(\"dotCount\");l?.addEventListener(\"input\",()=>{const e=l.value.trim();if(!e)return;const t=e.split(/[.!?]+/).filter(n=>n.trim().length>0),m=(e.match(/\\./g)||[]).length;let o=0,s=0;t.forEach(n=>{const i=n.trim().split(/\\s+/).length;s+=i,i>25&&o++});const a=t.length>0?Math.round(s/t.length):0;g&&(g.innerText=t.length.toString()),c&&(c.innerText=a.toString()),r&&(r.innerText=o.toString()),d&&(d.innerText=m.toString())});"],["C:/proyectos/seo-tools/src/pages/seo/contador-hashtags.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const a=document.getElementById(\"hashtagInput\"),o=document.getElementById(\"hashtagCount\"),n=document.getElementById(\"hashtagBar\"),s=document.getElementById(\"hashtagList\");a?.addEventListener(\"input\",()=>{const t=a.value.match(/#[a-z0-9_áéíóúñ]+/gi)||[],e=t.length;o&&(o.innerText=e.toString());const c=Math.min(e/30*100,100);n&&(n.style.width=`${c}%`,n.style.backgroundColor=e>30?\"#ef4444\":\"#0ea5e9\"),s&&(t.length>0?s.innerHTML=t.map(i=>`\n          <span class=\"px-2 py-1 bg-white shadow-sm border border-sky-100 text-sky-600 rounded-lg text-xs font-bold\">\n            ${i}\n          </span>\n        `).join(\"\"):s.innerHTML='<p class=\"text-xs text-slate-400 italic\">Los hashtags aparecerán aquí...</p>')});"],["C:/proyectos/seo-tools/src/pages/seo/contador-keywords.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const x=()=>{const b=document.getElementById(\"areaTextoKeywords\"),m=document.getElementById(\"btnAnalizarKeywords\"),g=document.getElementById(\"contenedorResultadosK\"),a=document.getElementById(\"statTotalPalabras\"),l=document.getElementById(\"statUnicas\"),s=document.getElementById(\"tablaKeywordsBody\");m?.addEventListener(\"click\",()=>{const r=b.value.toLowerCase().trim();if(!r)return;const d=r.replace(/[.,/#!$%^&*;:{}=\\-_`~()]/g,\"\").split(/\\s+/).filter(e=>e.length>2),c=d.length,t={};d.forEach(e=>{t[e]=(t[e]||0)+1});const u=Object.entries(t).sort(([,e],[,n])=>n-e).slice(0,15);a&&(a.innerText=c.toString()),l&&(l.innerText=Object.keys(t).length.toString()),s&&(s.innerHTML=\"\",u.forEach(([e,n])=>{const i=(n/c*100).toFixed(2),o=document.createElement(\"tr\");o.className=\"border-b border-slate-50 hover:bg-slate-50 transition-colors\",o.innerHTML=`\n              <td class=\"p-4 font-bold text-slate-900\">${e}</td>\n              <td class=\"p-4 text-slate-500\">${n} veces</td>\n              <td class=\"p-4 text-right\">\n                <span class=\"px-3 py-1 rounded-full text-xs font-black ${Number(i)>3?\"bg-red-100 text-red-600\":\"bg-emerald-100 text-emerald-600\"}\">\n                  ${i}%\n                </span>\n              </td>\n            `,s.appendChild(o)})),g?.classList.remove(\"hidden\")})};x();"],["C:/proyectos/seo-tools/src/pages/seo/contador-palabras.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const u=()=>{const l=document.getElementById(\"seoTextInput\"),i=document.getElementById(\"btnContarSeo\"),a=document.getElementById(\"seoResultBox\"),n=document.getElementById(\"resPalabras\"),s=document.getElementById(\"resCaracteres\"),o=document.getElementById(\"resLectura\"),r=document.getElementById(\"resParrafos\");i?.addEventListener(\"click\",()=>{const e=l.value.trim();if(!e)return;const c=e.split(/\\s+/).filter(t=>t.length>0).length,d=e.length,g=e.split(/\\n\\s*\\n/).filter(t=>t.trim().length>0).length,m=Math.ceil(c/200);n&&(n.innerText=c.toLocaleString()),s&&(s.innerText=d.toLocaleString()),o&&(o.innerText=`${m} min`),r&&(r.innerText=g.toLocaleString()),a?.classList.remove(\"hidden\")})};u();"],["C:/proyectos/seo-tools/src/pages/seo/densidad-enlaces-internos.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const a=document.getElementById(\"linkInput\"),o=document.getElementById(\"totalLinks\"),l=document.getElementById(\"linkRatio\"),t=document.getElementById(\"linkStatus\");a?.addEventListener(\"input\",()=>{const n=a.value,s=n.trim().split(/\\s+/).filter(e=>e.length>0).length,i=(n.match(/<a\\s+(?:[^>]*?\\s+)?href=\"([^\"]*)\"/gi)||[]).length;if(o&&(o.innerText=i.toString()),s>0){const e=i/s*100;l&&(l.innerText=e.toFixed(2)+\"%\"),t&&(e===0?(t.innerText=\"Página Huérfana\",t.className=\"text-xs font-bold text-red-500 uppercase\"):e<1?(t.innerText=\"Baja Densidad\",t.className=\"text-xs font-bold text-amber-500 uppercase\"):e<=3?(t.innerText=\"Optimizado\",t.className=\"text-xs font-bold text-emerald-500 uppercase\"):(t.innerText=\"Excesivo\",t.className=\"text-xs font-bold text-rose-500 uppercase\"))}});"],["C:/proyectos/seo-tools/src/pages/seo/densidad-keyword.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const d=new Set([\"el\",\"la\",\"los\",\"las\",\"un\",\"una\",\"unos\",\"unas\",\"y\",\"o\",\"pero\",\"si\",\"no\",\"del\",\"al\",\"en\",\"por\",\"con\",\"para\",\"que\",\"como\",\"su\",\"sus\",\"es\",\"son\",\"de\"]),i=document.getElementById(\"btnAnalizar\"),n=document.getElementById(\"inputText\"),l=document.getElementById(\"resBox\"),r=document.getElementById(\"tableBody\");i?.addEventListener(\"click\",()=>{const a=n.value.toLowerCase().replace(/[.,\\/#!$%\\^&\\*;:{}=\\-_`~()]/g,\"\").split(/\\s+/).filter(t=>t.length>2&&!d.has(t)),s=n.value.split(/\\s+/).filter(t=>t.length>0).length;if(s===0)return alert(\"Por favor, ingresá algún texto.\");const o={};a.forEach(t=>o[t]=(o[t]||0)+1);const c=Object.entries(o).sort((t,e)=>e[1]-t[1]).slice(0,10);r&&(r.innerHTML=c.map(([t,e])=>`\n        <tr class=\"border-t border-slate-50 hover:bg-slate-50 transition-colors\">\n          <td class=\"p-4 font-bold text-slate-800\">${t}</td>\n          <td class=\"p-4\">${e}</td>\n          <td class=\"p-4 font-mono text-amber-600\">${(e/s*100).toFixed(2)}%</td>\n        </tr>\n      `).join(\"\")),l?.classList.remove(\"hidden\"),l?.scrollIntoView({behavior:\"smooth\"})});"],["C:/proyectos/seo-tools/src/pages/seo/engagement-rate.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const i=document.getElementById(\"interactions\"),o=document.getElementById(\"reach\"),t=document.getElementById(\"engResult\"),e=document.getElementById(\"engLevel\"),s=()=>{const l=parseFloat(i.value),a=parseFloat(o.value);if(a>0&&l>=0){const n=l/a*100;t&&(t.innerText=`${n.toFixed(2)}%`),e&&(n<1?(e.innerText=\"Bajo - Contenido poco relevante\",e.className=\"mt-4 inline-block px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-red-100 text-red-600\"):n<3.5?(e.innerText=\"Bueno - Promedio saludable\",e.className=\"mt-4 inline-block px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-blue-100 text-blue-600\"):(e.innerText=\"¡Excelente! - Comunidad muy activa\",e.className=\"mt-4 inline-block px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-emerald-100 text-emerald-600\"))}else t&&(t.innerText=\"0%\")};i?.addEventListener(\"input\",s);o?.addEventListener(\"input\",s);"],["C:/proyectos/seo-tools/src/pages/seo/frecuencia-palabras.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const d=document.getElementById(\"freqInput\"),c=document.getElementById(\"totalWords\"),l=document.getElementById(\"uniqueWords\"),e=document.getElementById(\"freqResults\");d?.addEventListener(\"input\",()=>{const o=d.value.toLowerCase().trim();if(!o){e&&(e.innerHTML='<p class=\"text-xs text-indigo-300 italic\">Esperando contenido...</p>');return}const i=o.match(/\\b\\w+\\b/g)||[],n={};i.forEach(t=>{n[t]=(n[t]||0)+1});const r=Object.entries(n).sort((t,s)=>s[1]-t[1]);c&&(c.innerText=i.length.toString()),l&&(l.innerText=r.length.toString()),e&&(e.innerHTML=r.map(([t,s])=>`\n        <div class=\"flex justify-between items-center text-xs\">\n          <span class=\"font-medium text-indigo-900\">${t}</span>\n          <span class=\"bg-indigo-200 text-indigo-700 px-2 py-0.5 rounded-md font-black\">${s}</span>\n        </div>\n      `).join(\"\"))});"],["C:/proyectos/seo-tools/src/pages/seo/frecuencia-publicitaria.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const s=document.getElementById(\"impressions\"),i=document.getElementById(\"reach\"),t=document.getElementById(\"freqResult\"),e=document.getElementById(\"freqStatus\"),c=()=>{const l=parseFloat(s.value),a=parseFloat(i.value);if(a>0&&l>=0){const n=l/a;t&&(t.innerText=n.toFixed(1)),e&&(n<1.5?(e.innerText=\"Alcance nuevo - Explorando\",e.className=\"mt-4 inline-block px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-blue-100 text-blue-600\"):n<=4?(e.innerText=\"Frecuencia Saludable\",e.className=\"mt-4 inline-block px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-emerald-100 text-emerald-600\"):(e.innerText=\"¡Alerta! Fatiga publicitaria\",e.className=\"mt-4 inline-block px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-red-100 text-red-600\"))}else t&&(t.innerText=\"0.0\")};s?.addEventListener(\"input\",c);i?.addEventListener(\"input\",c);"],["C:/proyectos/seo-tools/src/pages/seo/generador-slug.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const n=document.getElementById(\"inputTitle\"),t=document.getElementById(\"outputSlug\"),o=document.getElementById(\"btnCopy\"),r=e=>e.toString().normalize(\"NFD\").replace(/[\\u0300-\\u036f]/g,\"\").toLowerCase().trim().replace(/\\s+/g,\"-\").replace(/[^\\w-]+/g,\"\").replace(/--+/g,\"-\");n?.addEventListener(\"input\",()=>{const e=r(n.value);t&&(t.innerText=e||\"esperando-input...\")});o?.addEventListener(\"click\",()=>{const e=t?.innerText;e&&e!==\"esperando-input...\"&&(navigator.clipboard.writeText(e),alert(\"¡Slug copiado!\"))});"],["C:/proyectos/seo-tools/src/pages/seo/longitud-meta-description.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const o=document.getElementById(\"descriptionInput\"),s=document.getElementById(\"charCount\"),e=document.getElementById(\"statusLabel\"),t=document.getElementById(\"progressBar\");o?.addEventListener(\"input\",()=>{const n=o.value.length;s&&(s.innerText=n.toString());const a=Math.min(n/160*100,100);t&&(t.style.width=`${a}%`,n<120?(t.style.backgroundColor=\"#fbbf24\",e.innerText=\"Muy corta\",e.className=\"text-[10px] font-bold uppercase mt-2 text-amber-500\"):n<=155?(t.style.backgroundColor=\"#10b981\",e.innerText=\"Longitud Ideal\",e.className=\"text-[10px] font-bold uppercase mt-2 text-emerald-500\"):(t.style.backgroundColor=\"#ef4444\",e.innerText=\"Demasiado larga\",e.className=\"text-[10px] font-bold uppercase mt-2 text-red-500\"))});"],["C:/proyectos/seo-tools/src/pages/seo/longitud-titulo-seo.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const s=document.getElementById(\"titleInput\"),r=document.getElementById(\"charCount\"),l=document.getElementById(\"googleTitle\"),n=document.getElementById(\"progressBar\"),e=document.getElementById(\"statusText\");s?.addEventListener(\"input\",()=>{const o=s.value,t=o.length;r&&(r.innerText=t.toString()),l&&(l.innerText=t>0?o:\"Escribí un título arriba...\");const a=Math.min(t/60*100,100);n&&(n.style.width=`${a}%`),e&&(t===0?(e.innerText=\"Esperando texto...\",n.style.backgroundColor=\"#06b6d4\"):t<40?(e.innerText=\"Muy corto\",e.className=\"text-[10px] font-bold uppercase text-amber-500\",n.style.backgroundColor=\"#fbbf24\"):t<=60?(e.innerText=\"Perfecto\",e.className=\"text-[10px] font-bold uppercase text-emerald-500\",n.style.backgroundColor=\"#10b981\"):(e.innerText=\"Demasiado largo\",e.className=\"text-[10px] font-bold uppercase text-red-500\",n.style.backgroundColor=\"#ef4444\"))});"],["C:/proyectos/seo-tools/src/pages/seo/radio-texto-html-.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const l=document.getElementById(\"htmlInput\"),a=document.getElementById(\"textSize\"),c=document.getElementById(\"htmlSize\"),r=document.getElementById(\"ratioResult\"),t=document.getElementById(\"ratioStatus\"),d=document.getElementById(\"textBar\");l?.addEventListener(\"input\",()=>{const n=l.value;if(!n)return;const o=new Blob([n]).size,i=document.createElement(\"div\");i.innerHTML=n;const m=i.textContent||i.innerText||\"\",s=new Blob([m]).size,e=s/o*100;a&&(a.innerText=(s/1024).toFixed(2)+\" KB\"),c&&(c.innerText=(o/1024).toFixed(2)+\" KB\"),r&&(r.innerText=e.toFixed(1)+\"%\"),d&&(d.style.width=e+\"%\"),t&&(e<10?(t.innerText=\"Ratio Muy Bajo\",t.className=\"text-[10px] text-red-500 mt-4 font-bold uppercase tracking-widest\"):e<25?(t.innerText=\"Ratio Saludable\",t.className=\"text-[10px] text-emerald-500 mt-4 font-bold uppercase tracking-widest\"):(t.innerText=\"Excelente Contenido\",t.className=\"text-[10px] text-blue-500 mt-4 font-bold uppercase tracking-widest\"))});"],["C:/proyectos/seo-tools/src/pages/seo/roi-marketing.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const l=document.getElementById(\"investment\"),s=document.getElementById(\"revenue\"),t=document.getElementById(\"roiResult\"),e=document.getElementById(\"roiBadge\"),a=()=>{const n=parseFloat(l.value),r=parseFloat(s.value);if(n>0){const i=(r-n)/n*100;t&&(t.innerText=`${i.toFixed(0)}%`),e&&(i<0?(e.innerText=\"Pérdida de inversión\",e.className=\"mt-4 inline-block px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-red-100 text-red-600\"):i===0?(e.innerText=\"Punto de equilibrio\",e.className=\"mt-4 inline-block px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-slate-100 text-slate-600\"):(e.innerText=\"Campaña Rentable\",e.className=\"mt-4 inline-block px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-emerald-100 text-emerald-600\"))}else t&&(t.innerText=\"0%\")};l?.addEventListener(\"input\",a);s?.addEventListener(\"input\",a);"],["C:/proyectos/seo-tools/src/pages/seo/tasa-conversion.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const s=document.getElementById(\"visits\"),o=document.getElementById(\"conversions\"),e=document.getElementById(\"crResult\"),i=()=>{const t=parseFloat(s.value),n=parseFloat(o.value);if(t>0&&n>=0){const c=n/t*100;e&&(e.innerText=`${c.toFixed(2)}%`)}else e&&(e.innerText=\"0%\")};s?.addEventListener(\"input\",i);o?.addEventListener(\"input\",i);"],["C:/proyectos/seo-tools/src/pages/seo/tiempo-de-lectura.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const p=()=>{const l=document.getElementById(\"txtRead\"),a=document.getElementById(\"wpmInput\"),d=document.getElementById(\"btnCalcRead\"),i=document.getElementById(\"resBoxRead\"),t=document.getElementById(\"resMinutes\"),n=document.getElementById(\"resTotalWords\"),s=document.getElementById(\"resTotalSecs\");d?.addEventListener(\"click\",()=>{const o=l.value.trim(),m=parseInt(a.value)||200;if(!o){alert(\"Por favor, ingresa el texto a analizar.\");return}const c=o.split(/\\s+/).filter(g=>g.length>0).length,e=Math.round(c/m*60),r=Math.floor(e/60),u=e%60;t&&(t.innerText=r.toString()),n&&(n.innerText=c.toLocaleString()),s&&(s.innerText=`${e} segundos (${r}m ${u}s)`),i?.classList.remove(\"hidden\")})};p();"],["C:/proyectos/seo-tools/src/pages/seo/tiempo-lectura.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const t=document.getElementById(\"textInput\"),l=document.getElementById(\"speedSelect\"),n=document.getElementById(\"readTime\"),s=document.getElementById(\"wordCount\"),o=()=>{const e=t.value.trim()?t.value.trim().split(/\\s+/).length:0,c=parseInt(l.value),d=Math.ceil(e/c);n&&(n.innerText=`${e===0?0:d} min`),s&&(s.innerText=`${e} palabras`)};t?.addEventListener(\"input\",o);l?.addEventListener(\"change\",o);"],["C:/proyectos/seo-tools/src/pages/seo/tiempo-ranking-seo.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const o=document.getElementById(\"kdInput\"),a=document.getElementById(\"daInput\"),l=document.getElementById(\"contentQuality\"),n=document.getElementById(\"timeResult\"),d=()=>{const e=parseFloat(o.value)||0,s=parseFloat(a.value)||1,c=parseFloat(l.value);let t=e/(s*.5+1)*2*c;e<10&&(t=t*.5),t<1&&(t=1),t>24&&(t=24),n&&(n.innerText=Math.round(t).toString())};[o,a,l].forEach(e=>e?.addEventListener(\"input\",d));"],["C:/proyectos/seo-tools/src/pages/unidades/bytes-a-mb.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const u=()=>{const a=document.getElementById(\"inputBytesFix\"),d=document.getElementById(\"btnToMB\"),r=document.getElementById(\"btnToMiB\"),n=document.getElementById(\"resBoxStorageFix\"),o=document.getElementById(\"outputValFix\"),s=document.getElementById(\"labelResFix\"),c=document.getElementById(\"detailFix\"),i=e=>{const t=parseFloat(a.value);if(isNaN(t)||t<0){alert(\"Ingresa una cantidad de bytes válida.\");return}const l=t/(e?1048576:1e6),m=e?\"MiB (Binario)\":\"MB (Decimal)\";o&&s&&c&&n&&(o.innerText=l.toLocaleString(\"en-US\",{maximumFractionDigits:4})+(e?\" MiB\":\" MB\"),s.innerText=`Conversión a ${m}`,c.innerText=`${t.toLocaleString()} bytes son exactamente ${l.toFixed(6)} ${e?\"Mebibytes\":\"Megabytes\"}.`,n.classList.remove(\"hidden\"),n.scrollIntoView({behavior:\"smooth\",block:\"center\"}))};d?.addEventListener(\"click\",()=>i(!1)),r?.addEventListener(\"click\",()=>i(!0))};u();"],["C:/proyectos/seo-tools/src/pages/unidades/cm-a-pulgadas.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const s=document.getElementById(\"cmInput\"),n=document.getElementById(\"inchesOutput\");s?.addEventListener(\"input\",()=>{if(!n)return;const e=parseFloat(s.value);if(isNaN(e)||e<=0){n.innerText=\"0\";return}const t=e/2.54;n.innerText=Number.isInteger(t)?t.toString():t.toFixed(2)});"],["C:/proyectos/seo-tools/src/pages/unidades/conversor-temperatura.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const m=()=>{const r=document.getElementById(\"valIn\"),d=document.getElementById(\"unitIn\"),a=document.getElementById(\"btnCalcTemp\"),l=document.getElementById(\"boxRes\"),e=document.getElementById(\"lab1\"),n=document.getElementById(\"res1\"),t=document.getElementById(\"lab2\"),i=document.getElementById(\"res2\");a?.addEventListener(\"click\",()=>{const o=parseFloat(r.value);if(isNaN(o))return alert(\"Ingresa un valor numérico\");const c=d.value;if(c===\"C\")e&&n&&t&&i&&(e.innerText=\"Fahrenheit\",n.innerText=(o*1.8+32).toFixed(2)+\" F\",t.innerText=\"Kelvin\",i.innerText=(o+273.15).toFixed(2)+\" K\");else if(c===\"F\"){const s=(o-32)/1.8;e&&n&&t&&i&&(e.innerText=\"Celsius\",n.innerText=s.toFixed(2)+\" C\",t.innerText=\"Kelvin\",i.innerText=(s+273.15).toFixed(2)+\" K\")}else{const s=o-273.15;e&&n&&t&&i&&(e.innerText=\"Celsius\",n.innerText=s.toFixed(2)+\" C\",t.innerText=\"Fahrenheit\",i.innerText=(s*1.8+32).toFixed(2)+\" F\")}l?.classList.remove(\"hidden\"),l?.scrollIntoView({behavior:\"smooth\",block:\"center\"})})};m();"],["C:/proyectos/seo-tools/src/pages/unidades/conversor-velocidad.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const r=()=>{const i=document.getElementById(\"speedValue\"),m=document.getElementById(\"speedUnit\"),u=document.getElementById(\"calcBtn\"),s=document.getElementById(\"resultsGrid\"),o=document.getElementById(\"vKmh\"),c=document.getElementById(\"vMs\"),l=document.getElementById(\"vMph\"),d=document.getElementById(\"vKn\");u?.addEventListener(\"click\",()=>{const t=parseFloat(i.value);if(isNaN(t))return;const n=m.value;let e=0;n===\"kmh\"?e=t:n===\"ms\"?e=t*3.6:n===\"mph\"?e=t*1.60934:n===\"knots\"&&(e=t*1.852),o&&c&&l&&d&&(o.innerText=e.toFixed(2),c.innerText=(e/3.6).toFixed(2),l.innerText=(e/1.60934).toFixed(2),d.innerText=(e/1.852).toFixed(2)),s?.classList.remove(\"hidden\"),s?.scrollIntoView({behavior:\"smooth\",block:\"center\"})})};r();"],["C:/proyectos/seo-tools/src/pages/unidades/gal-to-l.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const t=document.getElementById(\"galInput\"),n=document.getElementById(\"lInput\"),l=document.getElementById(\"infoText\"),s=3.78541178,o=()=>{if(!t||!n)return;const e=parseFloat(t.value);if(isNaN(e))n.value=\"\";else{const a=e*s;n.value=a.toFixed(2).replace(/\\.00$/,\"\"),l&&(l.innerText=`${e} galones equivalen a ${n.value} litros.`)}},i=()=>{if(!t||!n)return;const e=parseFloat(n.value);if(isNaN(e))t.value=\"\";else{const a=e/s;t.value=a.toFixed(2).replace(/\\.00$/,\"\"),l&&(l.innerText=`${e} litros equivalen a ${t.value} galones.`)}};t?.addEventListener(\"input\",o);n?.addEventListener(\"input\",i);"],["C:/proyectos/seo-tools/src/pages/unidades/horas-a-dias.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const c=()=>{const a=document.getElementById(\"inputHoursFix\"),r=document.getElementById(\"btnCalcFix\"),t=document.getElementById(\"resBoxFix\"),n=document.getElementById(\"outputValFix\"),s=document.getElementById(\"detailFix\");r?.addEventListener(\"click\",()=>{const e=parseFloat(a.value);if(!isNaN(e)&&e>=0){const o=e/24;if(n&&s&&t){n.innerText=o.toLocaleString(\"en-US\",{maximumFractionDigits:3})+\" d\";const i=Math.floor(o),l=Math.round((o-i)*24);s.innerText=`${e.toLocaleString()} horas equivalen a ${i} día(s) y ${l} h.`,t.classList.remove(\"hidden\"),t.scrollIntoView({behavior:\"smooth\",block:\"center\"})}}else alert(\"Por favor, ingresa un número de horas válido.\")})};c();"],["C:/proyectos/seo-tools/src/pages/unidades/kg-to-lb.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const t=document.getElementById(\"kgInput\"),n=document.getElementById(\"lbInput\"),l=document.getElementById(\"infoText\"),s=2.20462262,o=()=>{if(!t||!n)return;const e=parseFloat(t.value);if(isNaN(e))n.value=\"\";else{const a=e*s;n.value=a.toFixed(2).replace(/\\.00$/,\"\"),l&&(l.innerText=`${e} kilogramos equivalen a ${n.value} libras.`)}},i=()=>{if(!t||!n)return;const e=parseFloat(n.value);if(isNaN(e))t.value=\"\";else{const a=e/s;t.value=a.toFixed(2).replace(/\\.00$/,\"\"),l&&(l.innerText=`${e} libras equivalen a ${t.value} kilogramos.`)}};t?.addEventListener(\"input\",o);n?.addEventListener(\"input\",i);"],["C:/proyectos/seo-tools/src/pages/unidades/km-a-millas.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const a=()=>{const t=document.getElementById(\"inputKilometros\"),n=document.getElementById(\"inputMillasRes\"),i=document.getElementById(\"btnConvertirKtoM\"),d=document.getElementById(\"btnLimpiarKtoM\"),o=document.getElementById(\"boxResultadoKm\"),s=document.getElementById(\"labelResultadoKm\"),c=.621371192;i?.addEventListener(\"click\",()=>{const e=parseFloat(t.value);if(!isNaN(e)){const l=e*c;n.value=l.toFixed(4),s&&(s.innerText=`${e} km = ${l.toFixed(4)} mi`),o?.classList.remove(\"hidden\")}}),d?.addEventListener(\"click\",()=>{t.value=\"\",n.value=\"\",o?.classList.add(\"hidden\")})};a();"],["C:/proyectos/seo-tools/src/pages/unidades/lb-to-kg.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const t=document.getElementById(\"lbInput\"),n=document.getElementById(\"kgInput\"),l=document.getElementById(\"infoText\"),s=.45359237,o=()=>{if(!t||!n)return;const e=parseFloat(t.value);if(isNaN(e))n.value=\"\";else{const a=e*s;n.value=a.toFixed(2).replace(/\\.00$/,\"\"),l&&(l.innerText=`${e} libras equivalen a ${n.value} kilogramos.`)}},i=()=>{if(!t||!n)return;const e=parseFloat(n.value);if(isNaN(e))t.value=\"\";else{const a=e/s;t.value=a.toFixed(2).replace(/\\.00$/,\"\"),l&&(l.innerText=`${e} kilogramos equivalen a ${t.value} libras.`)}};t?.addEventListener(\"input\",o);n?.addEventListener(\"input\",i);"],["C:/proyectos/seo-tools/src/pages/unidades/litros-a-galones.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const t=document.getElementById(\"lInput\"),n=document.getElementById(\"galInput\"),l=document.getElementById(\"infoText\"),s=3.78541178,o=()=>{if(!t||!n)return;const e=parseFloat(t.value);if(isNaN(e))n.value=\"\";else{const a=e/s;n.value=a.toFixed(2).replace(/\\.00$/,\"\"),l&&(l.innerText=`${e} litros equivalen a ${n.value} galones (US).`)}},i=()=>{if(!t||!n)return;const e=parseFloat(n.value);if(isNaN(e))t.value=\"\";else{const a=e*s;t.value=a.toFixed(2).replace(/\\.00$/,\"\"),l&&(l.innerText=`${e} galones equivalen a ${t.value} litros.`)}};t?.addEventListener(\"input\",o);n?.addEventListener(\"input\",i);"],["C:/proyectos/seo-tools/src/pages/unidades/m2-a-ft2.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const l=()=>{const i=document.getElementById(\"btnCalcM2Ft\"),c=document.getElementById(\"m2InputFix\"),e=document.getElementById(\"resBoxM2Ft\"),o=document.getElementById(\"ft2OutputVal\"),n=document.getElementById(\"detailTxtM2Ft\"),a=10.7639104;i?.addEventListener(\"click\",()=>{const t=parseFloat(c.value);if(!isNaN(t)&&t>=0){const s=t*a;o&&n&&e&&(o.innerText=`${s.toLocaleString(\"en-US\",{maximumFractionDigits:2})} ft²`,n.innerText=`${t} metros cuadrados equivalen a ${s.toFixed(4)} pies cuadrados.`,e.classList.remove(\"hidden\"),e.scrollIntoView({behavior:\"smooth\",block:\"center\"}))}else alert(\"Por favor, ingresá una superficie válida (número positivo).\")})};l();"],["C:/proyectos/seo-tools/src/pages/unidades/mb-a-gb.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const B=()=>{const l=document.getElementById(\"inputMBFix\"),r=document.getElementById(\"btnToGBDec\"),d=document.getElementById(\"btnToGBBin\"),t=document.getElementById(\"resBoxMBGBFix\"),n=document.getElementById(\"outputValFix\"),o=document.getElementById(\"labelResFix\"),i=document.getElementById(\"detailFix\"),c=s=>{const e=parseFloat(l.value);if(isNaN(e)||e<0){alert(\"Por favor, ingresa un valor de MB válido.\");return}const a=e/(s?1024:1e3),m=s?\"GB Binario (GiB)\":\"GB Decimal (SI)\";n&&o&&i&&t&&(n.innerText=a.toLocaleString(\"en-US\",{maximumFractionDigits:5})+\" GB\",o.innerText=`Conversión a ${m}`,i.innerText=`${e.toLocaleString()} Megabytes equivalen a exactamente ${a.toFixed(6)} Gigabytes.`,t.classList.remove(\"hidden\"),t.scrollIntoView({behavior:\"smooth\",block:\"center\"}))};r?.addEventListener(\"click\",()=>c(!1)),d?.addEventListener(\"click\",()=>c(!0))};B();"],["C:/proyectos/seo-tools/src/pages/unidades/miles-to-km.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const m=()=>{const o=document.getElementById(\"inputMillas\"),s=document.getElementById(\"inputKm\"),d=document.getElementById(\"btnConvMtoK\"),l=document.getElementById(\"btnConvKtoM\"),i=document.getElementById(\"resBoxDistancia\"),n=document.getElementById(\"textResultado\"),c=1.609344;d?.addEventListener(\"click\",()=>{const t=parseFloat(o.value);if(!isNaN(t)){const e=t*c;s.value=e.toFixed(2),n&&(n.innerText=`${t} mi = ${e.toFixed(4)} km`),i?.classList.remove(\"hidden\")}}),l?.addEventListener(\"click\",()=>{const t=parseFloat(s.value);if(!isNaN(t)){const e=t/c;o.value=e.toFixed(2),n&&(n.innerText=`${t} km = ${e.toFixed(4)} mi`),i?.classList.remove(\"hidden\")}})};m();"],["C:/proyectos/seo-tools/src/pages/unidades/metros-a-pies.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const a=()=>{const i=document.getElementById(\"calcBtn\"),c=document.getElementById(\"mInput\"),e=document.getElementById(\"resBox\"),n=document.getElementById(\"ftVal\"),o=document.getElementById(\"ftDetail\"),l=3.2808399;i?.addEventListener(\"click\",()=>{const t=parseFloat(c.value);if(t>=0){const s=t*l;n&&o&&e&&(n.innerText=`${s.toLocaleString(\"es-AR\",{maximumFractionDigits:3})} ft`,o.innerText=`${t} metros equivalen exactamente a ${s.toFixed(5)} pies.`,e.classList.remove(\"hidden\"),e.scrollIntoView({behavior:\"smooth\",block:\"center\"}))}else alert(\"Por favor, ingresá un número positivo válido.\")})};a();"],["C:/proyectos/seo-tools/src/pages/unidades/minutos-a-horas.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const r=()=>{const a=document.getElementById(\"inputMinFix\"),c=document.getElementById(\"btnCalcFix\"),e=document.getElementById(\"resBoxFix\"),o=document.getElementById(\"outputValFix\"),i=document.getElementById(\"detailFix\");c?.addEventListener(\"click\",()=>{const t=parseFloat(a.value);if(!isNaN(t)&&t>=0){const n=t/60,s=Math.floor(n),l=Math.round((n-s)*60);o&&i&&e&&(o.innerText=n.toLocaleString(\"en-US\",{maximumFractionDigits:2})+\" h\",i.innerText=`${t} minutos equivalen a ${s} hora(s) y ${l} minuto(s).`,e.classList.remove(\"hidden\"),e.scrollIntoView({behavior:\"smooth\",block:\"center\"}))}else alert(\"Por favor, introduce una cantidad de minutos válida.\")})};r();"],["C:/proyectos/seo-tools/src/pages/unidades/pies-a-metros.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const a=()=>{const i=document.getElementById(\"btnCalculateFt\"),c=document.getElementById(\"ftInput\"),t=document.getElementById(\"resultContainerFt\"),n=document.getElementById(\"mOutputVal\"),o=document.getElementById(\"ftToMDescription\"),l=.3048;i?.addEventListener(\"click\",()=>{const e=parseFloat(c.value);if(e>=0){const s=e*l;n&&o&&t&&(n.innerText=`${s.toLocaleString(\"es-AR\",{maximumFractionDigits:4})} m`,o.innerText=`${e} pies equivalen exactamente a ${s.toFixed(4)} metros.`,t.classList.remove(\"hidden\"),t.scrollIntoView({behavior:\"smooth\",block:\"center\"}))}else alert(\"Por favor, ingresá un valor numérico positivo.\")})};a();"],["C:/proyectos/seo-tools/src/pages/unidades/pies-cuadrados-a-metros-cuadrados.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const l=()=>{const i=document.getElementById(\"btnCalcFt2M2Fix\"),c=document.getElementById(\"inputFt2Fix\"),t=document.getElementById(\"resBoxFtM2Fix\"),o=document.getElementById(\"m2OutputValFix\"),n=document.getElementById(\"descFtM2Fix\"),a=.09290304;i?.addEventListener(\"click\",()=>{const e=parseFloat(c.value);if(!isNaN(e)&&e>=0){const s=e*a;o&&n&&t&&(o.innerText=`${s.toLocaleString(\"en-US\",{maximumFractionDigits:2})} m²`,n.innerText=`${e} pies cuadrados son equivalentes a aproximadamente ${s.toFixed(4)} metros cuadrados.`,t.classList.remove(\"hidden\"),t.scrollIntoView({behavior:\"smooth\",block:\"center\"}))}else alert(\"Por favor, ingresa un valor de superficie válido.\")})};l();"],["C:/proyectos/seo-tools/src/pages/unidades/pulgadas-a-cm.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const t=document.getElementById(\"inchInput\"),a=document.getElementById(\"cmInput\"),e=document.getElementById(\"equivalenceText\"),i=()=>{if(!t||!a)return;const n=parseFloat(t.value);if(isNaN(n))a.value=\"\",e&&(e.innerText=\"1 pulgada equivale exactamente a 2.54 centímetros\");else{const c=n*2.54;a.value=c.toFixed(2).replace(/\\.00$/,\"\"),e&&(e.innerText=`${n}\" pulgadas son ${a.value} cm`)}},s=()=>{if(!t||!a)return;const n=parseFloat(a.value);if(isNaN(n))t.value=\"\",e&&(e.innerText=\"1 pulgada equivale exactamente a 2.54 centímetros\");else{const c=n/2.54;t.value=c.toFixed(2).replace(/\\.00$/,\"\"),e&&(e.innerText=`${n} cm equivalen a ${t.value}\" pulgadas`)}};t?.addEventListener(\"input\",i);a?.addEventListener(\"input\",s);"],["C:/proyectos/seo-tools/src/pages/unidades/segundos-a-horas.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const l=()=>{const i=document.getElementById(\"inputSecondsFix\"),c=document.getElementById(\"btnCalcSecFix\"),t=document.getElementById(\"resBoxSecFix\"),o=document.getElementById(\"outputValFix\"),n=document.getElementById(\"detailFix\");c?.addEventListener(\"click\",()=>{const e=parseFloat(i.value);if(!isNaN(e)&&e>=0){const s=e/3600;o&&n&&t&&(o.innerText=s.toLocaleString(\"en-US\",{maximumFractionDigits:4})+\" h\",n.innerText=`${e.toLocaleString()} s equivalen a ${s.toFixed(6)} horas.`,t.classList.remove(\"hidden\"),t.scrollIntoView({behavior:\"smooth\",block:\"center\"}))}else alert(\"Por favor, ingresa un número de segundos válido.\")})};l();"],["C:/proyectos/seo-tools/src/pages/unidades/semanas-a-meses.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const l=()=>{const a=document.getElementById(\"inputWeeksFinal\"),i=document.getElementById(\"btnCalcFinal\"),t=document.getElementById(\"resBoxFinal\"),n=document.getElementById(\"outputValFinal\"),o=document.getElementById(\"detailFinal\");i?.addEventListener(\"click\",()=>{const e=parseFloat(a.value);if(!isNaN(e)&&e>=0){const s=e/4.34524;n&&o&&t&&(n.innerText=s.toLocaleString(\"en-US\",{maximumFractionDigits:2})+\" m\",o.innerText=`${e} semanas equivalen a ${s.toFixed(3)} meses aproximadamente.`,t.classList.remove(\"hidden\"),t.scrollIntoView({behavior:\"smooth\",block:\"center\"}))}else alert(\"Ingresa un número de semanas válido.\")})};l();"],["C:/proyectos/seo-tools/src/pages/utiles/asado.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const p=()=>{document.getElementById(\"btnAsado\")?.addEventListener(\"click\",()=>{const m=document.getElementById(\"personas\"),e=parseInt(m.value);if(e>0){const a=(e*.5).toFixed(1),o=Math.ceil(e*1.5),s=Math.ceil(e*.8),c=Math.ceil(e*2),r=document.getElementById(\"valCarne\"),l=document.getElementById(\"valAchuras\"),d=document.getElementById(\"valCarbon\"),i=document.getElementById(\"valPan\"),n=document.getElementById(\"resAsado\");if(r&&l&&d&&i&&n){r.innerText=`${a} kg`,l.innerText=`${o} u.`,d.innerText=`${s} kg`,i.innerText=`${c} u.`,n.classList.remove(\"hidden\");const t=document.getElementById(\"btnCompartirAsado\");t&&(t.classList.remove(\"hidden\"),t.onclick=()=>{const u=`🥩 *¡Hay Asado!* 🇦🇷\n\nCalculé las cantidades para *${e} personas*:\n• Carne: ${a} kg\n• Achuras: ${o} u.\n• Carbón: ${s} kg\n• Pan: ${c} u.\n\nCalculá el tuyo acá: ${window.location.href}`,h=`https://wa.me/?text=${encodeURIComponent(u)}`;window.open(h,\"_blank\")}),n.scrollIntoView({behavior:\"smooth\",block:\"center\"})}}else alert(\"Por favor, ingresá la cantidad de comensales.\")})};p();"],["C:/proyectos/seo-tools/src/pages/utiles/calculadora-costos-fijos-variables.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const p=()=>{const a=document.getElementById(\"inputFijos\"),c=document.getElementById(\"inputVariablesUnit\"),r=document.getElementById(\"inputCantidad\"),l=document.getElementById(\"btnCalcularCostos\"),d=document.getElementById(\"boxResultadoCostos\"),e=document.getElementById(\"resCostoTotal\"),n=document.getElementById(\"resCostoVariableTotal\"),o=document.getElementById(\"resCostoUnitarioMedio\");l?.addEventListener(\"click\",()=>{const m=parseFloat(a.value)||0,u=parseFloat(c.value)||0,t=parseFloat(r.value)||0;if(t<0){alert(\"La cantidad no puede ser negativa.\");return}const s=u*t,i=m+s,g=t>0?i/t:0;e&&(e.innerText=\"$\"+i.toLocaleString(\"es-AR\",{minimumFractionDigits:2})),n&&(n.innerText=\"$\"+s.toLocaleString(\"es-AR\",{minimumFractionDigits:2})),o&&(o.innerText=\"$\"+g.toLocaleString(\"es-AR\",{minimumFractionDigits:2})),d?.classList.remove(\"hidden\")})};p();"],["C:/proyectos/seo-tools/src/pages/utiles/calculadora-de-escalas.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const r=()=>{const o=document.getElementById(\"inputEscalaN\"),d=document.getElementById(\"inputMedidaBase\"),c=document.getElementById(\"tipoCalculoEscala\"),i=document.getElementById(\"btnCalcularEscala\"),u=document.getElementById(\"boxResultadoEscala\"),n=document.getElementById(\"resValorEscala\"),s=document.getElementById(\"resExplicacionEscala\");i?.addEventListener(\"click\",()=>{const a=parseFloat(o.value),t=parseFloat(d.value);if(isNaN(a)||isNaN(t)||a<=0){alert(\"Por favor ingresa valores válidos.\");return}let e=0,l=\"\";c.value===\"real\"?(e=t*a,l=`En una escala 1:${a}, una medida de ${t} unidades en el dibujo equivale a ${e.toLocaleString()} unidades en la realidad.`):(e=t/a,l=`En una escala 1:${a}, una medida real de ${t} unidades equivale a ${e.toFixed(2)} unidades en el dibujo.`),n&&(n.innerText=e%1===0?e.toLocaleString():e.toFixed(2)),s&&(s.innerText=l),u?.classList.remove(\"hidden\")})};r();"],["C:/proyectos/seo-tools/src/pages/utiles/calculadora-de-markup.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const d=()=>{const i=document.getElementById(\"inputCostoProd\"),c=document.getElementById(\"inputMarkupPerc\"),u=document.getElementById(\"btnCalcularMarkup\"),l=document.getElementById(\"boxResultadoMarkup\"),n=document.getElementById(\"resPrecioFinal\"),o=document.getElementById(\"resGananciaBruta\"),a=document.getElementById(\"resMargenEquiv\");u?.addEventListener(\"click\",()=>{const e=parseFloat(i.value),s=parseFloat(c.value);if(isNaN(e)||isNaN(s)||e<=0){alert(\"Por favor, ingresa valores válidos superiores a cero.\");return}const t=e*(1+s/100),r=t-e,m=r/t*100;n&&(n.innerText=\"$\"+t.toLocaleString(\"es-AR\",{minimumFractionDigits:2})),o&&(o.innerText=\"$\"+r.toLocaleString(\"es-AR\",{minimumFractionDigits:2})),a&&(a.innerText=m.toFixed(2)+\"%\"),l?.classList.remove(\"hidden\")})};d();"],["C:/proyectos/seo-tools/src/pages/utiles/calculadora-de-proporciones.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const g=()=>{const s=document.getElementById(\"propA\"),c=document.getElementById(\"propB\"),r=document.getElementById(\"propC\"),d=document.getElementById(\"propD\"),u=document.getElementById(\"btnResolverProporcion\"),v=document.getElementById(\"boxResultadoProp\"),i=document.getElementById(\"resValorX\");u?.addEventListener(\"click\",()=>{const t=parseFloat(s.value),o=parseFloat(c.value),n=parseFloat(r.value),l=parseFloat(d.value),p=[{id:\"A\",val:t,el:s},{id:\"B\",val:o,el:c},{id:\"C\",val:n,el:r},{id:\"D\",val:l,el:d}].filter(m=>isNaN(m.val));if(p.length!==1){alert(\"Por favor, dejá exactamente UN campo vacío (el que querés calcular).\");return}let e=0;const a=p[0].id;a===\"D\"&&(e=o*n/t),a===\"C\"&&(e=t*l/o),a===\"B\"&&(e=t*l/n),a===\"A\"&&(e=o*n/l),i&&(i.innerText=Number.isInteger(e)?e.toString():e.toFixed(2)),v?.classList.remove(\"hidden\")})};g();"],["C:/proyectos/seo-tools/src/pages/utiles/calculadora-desviacion-estandar.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const f=()=>{const p=document.getElementById(\"inputDatosStd\"),x=document.getElementById(\"btnCalcularStd\"),B=document.getElementById(\"resultadoStdBox\"),o=document.getElementById(\"resStdMuestral\"),r=document.getElementById(\"resStdPob\"),a=document.getElementById(\"resMedia\"),d=document.getElementById(\"resVarianza\"),c=document.getElementById(\"resSumatoria\"),i=document.getElementById(\"resCount\");x?.addEventListener(\"click\",()=>{const t=p.value.trim().replace(/\\n/g,\",\").split(/[\\s,]+/).map(e=>parseFloat(e)).filter(e=>!isNaN(e));if(t.length<2){alert(\"Por favor ingresá al menos dos números para calcular la dispersión.\");return}const n=t.length,l=t.reduce((e,s)=>e+s,0),u=l/n,m=t.map(e=>Math.pow(e-u,2)).reduce((e,s)=>e+s,0),g=m/(n-1),E=Math.sqrt(g),b=Math.sqrt(m/n);o&&(o.innerText=E.toFixed(4)),r&&(r.innerText=b.toFixed(4)),a&&(a.innerText=u.toFixed(2)),d&&(d.innerText=g.toFixed(2)),c&&(c.innerText=l.toFixed(2)),i&&(i.innerText=n.toString()),B?.classList.remove(\"hidden\")})};f();"],["C:/proyectos/seo-tools/src/pages/utiles/calculadora-fecha-futura.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const v=()=>{const t=document.getElementById(\"startDateInput\"),s=document.getElementById(\"addDays\"),c=document.getElementById(\"addWeeks\"),l=document.getElementById(\"addMonths\"),d=document.getElementById(\"addYears\"),r=document.getElementById(\"calcFutureBtn\"),n=document.getElementById(\"resultContainer\"),a=document.getElementById(\"finalDateLabel\"),o=document.getElementById(\"dayOfWeekLabel\"),u=new Date().toISOString().split(\"T\")[0];t.value=u,r?.addEventListener(\"click\",()=>{if(!t.value)return alert(\"Por favor, selecciona una fecha inicial.\");const e=new Date(t.value+\"T00:00:00\"),i=parseInt(s.value)||0,m=parseInt(c.value)||0,I=parseInt(l.value)||0,g=parseInt(d.value)||0;e.setDate(e.getDate()+i+m*7),e.setMonth(e.getMonth()+I),e.setFullYear(e.getFullYear()+g);const y={year:\"numeric\",month:\"long\",day:\"numeric\"},p={weekday:\"long\"};a&&o&&(a.innerText=e.toLocaleDateString(\"es-ES\",y),o.innerText=\"Día resultante: \"+e.toLocaleDateString(\"es-ES\",p)),n?.classList.remove(\"hidden\"),n?.scrollIntoView({behavior:\"smooth\",block:\"center\"})})};v();"],["C:/proyectos/seo-tools/src/pages/utiles/calculadora-fecha-pasada.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const D=()=>{const t=document.getElementById(\"baseDateInput\"),o=document.getElementById(\"subDays\"),c=document.getElementById(\"subWeeks\"),l=document.getElementById(\"subMonths\"),d=document.getElementById(\"subYears\"),u=document.getElementById(\"calcPastBtn\"),n=document.getElementById(\"pastResultBox\"),s=document.getElementById(\"pastDateDisplay\"),a=document.getElementById(\"pastDayNameDisplay\"),r=new Date().toISOString().split(\"T\")[0];t.value=r,u?.addEventListener(\"click\",()=>{if(!t.value){alert(\"Selecciona una fecha de referencia.\");return}const e=new Date(t.value+\"T00:00:00\"),i=parseInt(o.value)||0,m=parseInt(c.value)||0,y=parseInt(l.value)||0,I=parseInt(d.value)||0;e.setDate(e.getDate()-(i+m*7)),e.setMonth(e.getMonth()-y),e.setFullYear(e.getFullYear()-I);const g={year:\"numeric\",month:\"long\",day:\"numeric\"},p={weekday:\"long\"};s&&a&&(s.innerText=e.toLocaleDateString(\"es-ES\",g),a.innerText=\"Ese día fue: \"+e.toLocaleDateString(\"es-ES\",p)),n?.classList.remove(\"hidden\"),n?.scrollIntoView({behavior:\"smooth\",block:\"center\"})})};D();"],["C:/proyectos/seo-tools/src/pages/utiles/calculadora-flujo-de-caja.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const u=()=>{const a=document.getElementById(\"inputIngresosCash\"),l=document.getElementById(\"inputEgresosCash\"),d=document.getElementById(\"btnCalcularCashflow\"),i=document.getElementById(\"boxResultadoCashflow\"),o=document.getElementById(\"resValorCashflow\"),e=document.getElementById(\"resStatusText\"),t=document.getElementById(\"statusBg\");d?.addEventListener(\"click\",()=>{const n=parseFloat(a.value)||0,r=parseFloat(l.value)||0;if(n<0||r<0){alert(\"Por favor ingresa valores positivos.\");return}const s=n-r;o&&(o.innerText=\"$\"+s.toLocaleString(\"es-AR\",{minimumFractionDigits:2})),s>0?(e.innerText=\"Flujo Positivo: Tu negocio genera excedentes.\",t?.setAttribute(\"class\",\"p-10 rounded-[2.5rem] border text-center bg-emerald-50 border-emerald-100 text-emerald-700\")):s<0?(e.innerText=\"Flujo Negativo: Estás gastando más de lo que ingresa.\",t?.setAttribute(\"class\",\"p-10 rounded-[2.5rem] border text-center bg-red-50 border-red-100 text-red-700\")):(e.innerText=\"Punto de Equilibrio: Los ingresos igualan a los gastos.\",t?.setAttribute(\"class\",\"p-10 rounded-[2.5rem] border text-center bg-slate-50 border-slate-100 text-slate-600\")),i?.classList.remove(\"hidden\")})};u();"],["C:/proyectos/seo-tools/src/pages/utiles/calculadora-impuestos-ventas.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const d=()=>{const c=document.getElementById(\"inputBaseImpuesto\"),i=document.getElementById(\"inputTasaImpuesto\"),l=document.getElementById(\"btnCalcularImpuesto\"),m=document.getElementById(\"boxResultadoImpuestos\"),t=document.getElementById(\"resPrecioTotal\"),o=document.getElementById(\"resMontoImpuesto\"),n=document.getElementById(\"resMultiplicador\");l?.addEventListener(\"click\",()=>{const e=parseFloat(c.value)||0,s=parseFloat(i.value)||0;if(e<=0){alert(\"Ingresa un precio base válido.\");return}const a=e*(s/100),r=e+a,u=1+s/100;t&&(t.innerText=\"$\"+r.toLocaleString(\"es-AR\",{minimumFractionDigits:2})),o&&(o.innerText=\"$\"+a.toLocaleString(\"es-AR\",{minimumFractionDigits:2})),n&&(n.innerText=u.toFixed(3)),m?.classList.remove(\"hidden\")})};d();"],["C:/proyectos/seo-tools/src/pages/utiles/calculadora-inventario-ideal.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const v=()=>{const r=document.getElementById(\"invDemanda\"),i=document.getElementById(\"invLeadTime\"),c=document.getElementById(\"invSeguridad\"),l=document.getElementById(\"btnCalcInventario\"),m=document.getElementById(\"boxResInventario\"),n=document.getElementById(\"resInvTotal\"),o=document.getElementById(\"resPuntoPedido\"),s=document.getElementById(\"resDiasCobertura\");l?.addEventListener(\"click\",()=>{const e=parseFloat(r.value)||0,t=parseFloat(i.value)||0,a=parseFloat(c.value)||0;if(e<=0||t<=0){alert(\"Por favor, ingresa demanda y tiempo de entrega válidos.\");return}const d=Math.ceil(e*t+a),u=Math.ceil(e*t+a),g=Math.floor(d/e);n&&(n.innerText=d.toString()),o&&(o.innerText=u.toString()),s&&(s.innerText=g.toString()+\" días\"),m?.classList.remove(\"hidden\")})};v();"],["C:/proyectos/seo-tools/src/pages/utiles/calculadora-inversion-aportes-periodicos.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const h=()=>{const u=document.getElementById(\"inputCapitalIni\"),p=document.getElementById(\"inputAporteMens\"),m=document.getElementById(\"inputTasaAnual\"),I=document.getElementById(\"inputAniosInv\"),v=document.getElementById(\"btnCalcularInvPeriodica\"),g=document.getElementById(\"boxResultadoInv\"),a=document.getElementById(\"resValorFinal\"),i=document.getElementById(\"resTotalInvertido\"),r=document.getElementById(\"resInteresesGanados\");v?.addEventListener(\"click\",()=>{const o=parseFloat(u.value)||0,s=parseFloat(p.value)||0,l=parseFloat(m.value)||0,c=parseFloat(I.value)||0;if(l<0||c<=0){alert(\"Por favor ingresa valores de tasa y tiempo válidos.\");return}const t=l/100/12,e=c*12;let n=0;if(t===0)n=o+s*e;else{const E=o*Math.pow(1+t,e),B=s*((Math.pow(1+t,e)-1)/t);n=E+B}const d=o+s*e,y=n-d;a&&(a.innerText=\"$\"+Math.round(n).toLocaleString()),i&&(i.innerText=\"$\"+Math.round(d).toLocaleString()),r&&(r.innerText=\"$\"+Math.round(y).toLocaleString()),g?.classList.remove(\"hidden\")})};h();"],["C:/proyectos/seo-tools/src/pages/utiles/calculadora-ltv.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const T=()=>{const o=document.getElementById(\"inputTicketLTV\"),s=document.getElementById(\"inputFrecuenciaLTV\"),c=document.getElementById(\"inputVidaLTV\"),i=document.getElementById(\"inputMargenLTV\"),a=document.getElementById(\"btnCalcularLTV\"),l=document.getElementById(\"boxResultadoLTV\"),t=document.getElementById(\"resLTVTotal\"),e=document.getElementById(\"resLTVBruto\");a?.addEventListener(\"click\",()=>{const u=parseFloat(o.value)||0,r=parseFloat(s.value)||0,d=parseFloat(c.value)||0,m=(parseFloat(i.value)||100)/100,n=u*r*d,g=n*m;t&&(t.innerText=\"$\"+g.toLocaleString(\"es-AR\",{minimumFractionDigits:2})),e&&(e.innerText=\"$\"+n.toLocaleString(\"es-AR\",{minimumFractionDigits:2})),l?.classList.remove(\"hidden\")})};T();"],["C:/proyectos/seo-tools/src/pages/utiles/calculadora-margen-bruto.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const u=()=>{const r=document.getElementById(\"inputIngresosBrutos\"),a=document.getElementById(\"inputCostoVentas\"),i=document.getElementById(\"btnCalcularMargenBruto\"),c=document.getElementById(\"boxResultadoMargen\"),t=document.getElementById(\"resPorcentajeBruto\"),n=document.getElementById(\"resGananciaBrutaVal\");i?.addEventListener(\"click\",()=>{const e=parseFloat(r.value),o=parseFloat(a.value);if(isNaN(e)||isNaN(o)||e<=0){alert(\"Por favor ingresa un valor de ingreso válido.\");return}const s=e-o,l=s/e*100;t&&(t.innerText=l.toFixed(2)+\"%\"),n&&(n.innerText=\"$\"+s.toLocaleString(\"es-AR\",{minimumFractionDigits:2})),c?.classList.remove(\"hidden\")})};u();"],["C:/proyectos/seo-tools/src/pages/utiles/calculadora-margen-neto.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const u=()=>{const r=document.getElementById(\"inputIngresosNeto\"),l=document.getElementById(\"inputGastosNeto\"),c=document.getElementById(\"btnCalcularMargenNeto\"),d=document.getElementById(\"boxResultadoNeto\"),o=document.getElementById(\"resPorcentajeNeto\"),s=document.getElementById(\"resUtilidadNetaVal\"),e=document.getElementById(\"resEficienciaNeto\");c?.addEventListener(\"click\",()=>{const t=parseFloat(r.value),i=parseFloat(l.value);if(isNaN(t)||isNaN(i)||t<=0){alert(\"Por favor ingresa valores válidos.\");return}const a=t-i,n=a/t*100;o&&(o.innerText=n.toFixed(2)+\"%\"),s&&(s.innerText=\"$\"+a.toLocaleString(\"es-AR\",{minimumFractionDigits:2})),n>20?e.innerText=\"Excelente\":n>10?e.innerText=\"Saludable\":n>0?e.innerText=\"Ajustado\":e.innerText=\"Pérdida\",d?.classList.remove(\"hidden\")})};u();"],["C:/proyectos/seo-tools/src/pages/utiles/calculadora-rentabilidad-ecommerce.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const p=()=>{const r=document.getElementById(\"ecoVentas\"),a=document.getElementById(\"ecoCogs\"),i=document.getElementById(\"ecoMarketing\"),l=document.getElementById(\"ecoOpEx\"),d=document.getElementById(\"btnEcoCalc\"),m=document.getElementById(\"ecoResultBox\"),t=document.getElementById(\"resEcoRent\"),n=document.getElementById(\"resEcoProfit\"),o=document.getElementById(\"resEcoCostPer\");d?.addEventListener(\"click\",()=>{const e=parseFloat(r.value)||0,u=parseFloat(a.value)||0,c=parseFloat(i.value)||0,g=parseFloat(l.value)||0;if(e<=0){alert(\"Ingresa una facturación válida.\");return}const s=e-(u+c+g),E=s/e*100,B=c/e*100;t&&(t.innerText=E.toFixed(2)+\"%\"),n&&(n.innerText=\"$\"+s.toLocaleString(\"es-AR\",{minimumFractionDigits:2})),o&&(o.innerText=B.toFixed(1)+\"%\"),m?.classList.remove(\"hidden\")})};p();"],["C:/proyectos/seo-tools/src/pages/utiles/calculadora-rentabilidad-negocio.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const u=()=>{const i=document.getElementById(\"inputInversionRent\"),r=document.getElementById(\"inputIngresosRent\"),c=document.getElementById(\"btnCalcularRentabilidad\"),d=document.getElementById(\"boxResultadoRentabilidad\"),o=document.getElementById(\"resValorROI\"),a=document.getElementById(\"resGananciaPura\"),s=document.getElementById(\"resMargenNeto\");c?.addEventListener(\"click\",()=>{const e=parseFloat(i.value),n=parseFloat(r.value);if(isNaN(e)||isNaN(n)||e<=0){alert(\"Por favor ingresa valores válidos. La inversión debe ser mayor a 0.\");return}const t=n-e,l=t/e*100,g=t/n*100;o&&(o.innerText=l.toFixed(2)+\"%\"),a&&(a.innerText=\"$\"+t.toLocaleString()),s&&(s.innerText=g.toFixed(2)+\"%\"),d?.classList.remove(\"hidden\")})};u();"],["C:/proyectos/seo-tools/src/pages/utiles/calculadora-rentabilidad-producto.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const g=()=>{const a=document.getElementById(\"inputPrecioVenta\"),d=document.getElementById(\"inputCostoAdquisicion\"),c=document.getElementById(\"inputCostosLogisticos\"),l=document.getElementById(\"inputOtrosGastos\"),r=document.getElementById(\"btnCalcularRentabilidad\"),u=document.getElementById(\"boxResultadoRentabilidad\"),e=document.getElementById(\"resRentabilidadPor\"),n=document.getElementById(\"resUtilidadMonetaria\"),o=document.getElementById(\"resCostoTotalAcum\");r?.addEventListener(\"click\",()=>{const t=parseFloat(a.value)||0,i=(parseFloat(d.value)||0)+(parseFloat(c.value)||0)+(parseFloat(l.value)||0);if(t<=0){alert(\"El precio de venta debe ser mayor a cero.\");return}const s=t-i,m=s/t*100;e&&(e.innerText=m.toFixed(2)+\"%\"),n&&(n.innerText=\"$\"+s.toLocaleString(\"es-AR\",{minimumFractionDigits:2})),o&&(o.innerText=\"$\"+i.toLocaleString(\"es-AR\",{minimumFractionDigits:2})),u?.classList.remove(\"hidden\")})};g();"],["C:/proyectos/seo-tools/src/pages/utiles/calculadora-ticket-promedio.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const d=()=>{const n=document.getElementById(\"inputVentasTotales\"),o=document.getElementById(\"inputNumPedidos\"),i=document.getElementById(\"btnCalcularTicket\"),a=document.getElementById(\"boxResultadoTicket\"),t=document.getElementById(\"resTicketVal\");i?.addEventListener(\"click\",()=>{const s=parseFloat(n.value),e=parseFloat(o.value);if(isNaN(s)||isNaN(e)||e<=0){alert(\"Ingresa valores válidos. El número de pedidos debe ser mayor a cero.\");return}const c=s/e;t&&(t.innerText=\"$\"+c.toLocaleString(\"es-AR\",{minimumFractionDigits:2,maximumFractionDigits:2})),a?.classList.remove(\"hidden\")})};d();"],["C:/proyectos/seo-tools/src/pages/utiles/combustible.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};document.getElementById(\"btnCombustible\")?.addEventListener(\"click\",()=>{const o=parseFloat(document.getElementById(\"distancia\").value),e=parseFloat(document.getElementById(\"consumo\").value),t=parseFloat(document.getElementById(\"precioL\").value);if(o>0&&e>0&&t>0){const s=o/100*e,a=s*t,l=document.getElementById(\"costoTotal\"),n=document.getElementById(\"litrosTotal\"),c=document.getElementById(\"resCombustible\");l&&n&&c&&(l.innerText=\"$\"+a.toLocaleString(\"es-AR\",{maximumFractionDigits:0}),n.innerText=s.toFixed(1)+\" L\",c.classList.remove(\"hidden\"),window.scrollTo({top:300,behavior:\"smooth\"}))}else alert(\"Por favor, completa todos los campos con valores válidos.\")});"],["C:/proyectos/seo-tools/src/pages/utiles/contador-de-caracteres.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const g=()=>{const t=document.getElementById(\"textAreaContador\"),r=document.getElementById(\"countCaracteres\"),a=document.getElementById(\"countPalabras\"),s=document.getElementById(\"countParrafos\"),c=document.getElementById(\"timeLectura\"),l=document.getElementById(\"btnLimpiarTexto\"),i=()=>{const e=t.value,d=e.length;r&&(r.innerText=d.toString());const n=e.trim().split(/\\s+/).filter(o=>o.length>0).length;a&&(a.innerText=n.toString());const m=e.split(/\\n+/).filter(o=>o.trim().length>0).length;s&&(s.innerText=m.toString());const u=Math.ceil(n/200);c&&(c.innerText=n>0?`${u}m`:\"0m\")};t?.addEventListener(\"input\",i),l?.addEventListener(\"click\",()=>{t.value=\"\",i()})};g();"],["C:/proyectos/seo-tools/src/pages/utiles/contador-de-letras.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const p=()=>{const e=document.getElementById(\"textInputMain\"),s=document.getElementById(\"countWords\"),o=document.getElementById(\"countChars\"),c=document.getElementById(\"countNoSpaces\"),i=document.getElementById(\"countParagraphs\"),r=document.getElementById(\"readingTime\"),g=document.getElementById(\"clearBtnMain\"),a=()=>{const t=e.value,l=t.trim().split(/\\s+/).filter(n=>n.length>0),d=t.length,m=t.replace(/\\s+/g,\"\").length,u=t.split(/\\n+/).filter(n=>n.trim().length>0).length,h=Math.ceil(l.length/225);s&&(s.innerText=l.length.toString()),o&&(o.innerText=d.toString()),c&&(c.innerText=m.toString()),i&&(i.innerText=u.toString()),r&&(r.innerText=`${h} min`)};e?.addEventListener(\"input\",a),g?.addEventListener(\"click\",()=>{e.value=\"\",a()})};p();"],["C:/proyectos/seo-tools/src/pages/utiles/contador-de-palabras-unicas.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const a=()=>{const s=document.getElementById(\"uniqueWordsInput\"),e=document.getElementById(\"totalWords\"),t=document.getElementById(\"uniqueWords\"),n=document.getElementById(\"lexicalRichness\"),l=document.getElementById(\"clearUniqueBtn\"),o=()=>{const i=s.value.toLowerCase().replace(/[.,\\/#!$%\\^&\\*;:{}=\\-_`~()]/g,\"\").trim();if(!i){e&&(e.innerText=\"0\"),t&&(t.innerText=\"0\"),n&&(n.innerText=\"0%\");return}const r=i.split(/\\s+/),c=r.length,u=new Set(r).size,d=(u/c*100).toFixed(1);e&&(e.innerText=c.toString()),t&&(t.innerText=u.toString()),n&&(n.innerText=`${d}%`)};s?.addEventListener(\"input\",o),l?.addEventListener(\"click\",()=>{s.value=\"\",o()})};a();"],["C:/proyectos/seo-tools/src/pages/utiles/contador-de-vocales.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const m=()=>{const c=document.getElementById(\"vowelInput\"),i=document.getElementById(\"totalVowels\"),l=document.getElementById(\"clearVowels\"),e={a:document.getElementById(\"countA\"),e:document.getElementById(\"countE\"),i:document.getElementById(\"countI\"),o:document.getElementById(\"countO\"),u:document.getElementById(\"countU\")},u=()=>{const n=c.value.toLowerCase(),t={a:0,e:0,i:0,o:0,u:0},o={a:n.match(/[aáàä]/g)||[],e:n.match(/[eéèë]/g)||[],i:n.match(/[iíìï]/g)||[],o:n.match(/[oóòö]/g)||[],u:n.match(/[uúùü]/g)||[]};t.a=o.a.length,t.e=o.e.length,t.i=o.i.length,t.o=o.o.length,t.u=o.u.length;const a=Object.values(t).reduce((s,g)=>s+g,0);i&&(i.innerText=a.toString()),e.a&&(e.a.innerText=t.a.toString()),e.e&&(e.e.innerText=t.e.toString()),e.i&&(e.i.innerText=t.i.toString()),e.o&&(e.o.innerText=t.o.toString()),e.u&&(e.u.innerText=t.u.toString())};c?.addEventListener(\"input\",u),l?.addEventListener(\"click\",()=>{c.value=\"\",u()})};m();"],["C:/proyectos/seo-tools/src/pages/utiles/contador-dias-cumpleanos.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const f=()=>{const o=document.getElementById(\"birthDateInput\"),u=document.getElementById(\"calcBirthdayBtn\"),s=document.getElementById(\"bdayResultContainer\"),c=document.getElementById(\"resDays\"),r=document.getElementById(\"resAge\"),i=document.getElementById(\"resDayName\"),l=document.getElementById(\"bdayStatusText\");u?.addEventListener(\"click\",()=>{if(!o.value)return alert(\"Por favor, ingresa tu fecha de nacimiento.\");const n=new Date,a=new Date(o.value+\"T00:00:00\"),d=n.getFullYear();let e=new Date(d,a.getMonth(),a.getDate());n>e&&e.setFullYear(d+1);const g=e.getTime()-n.getTime(),t=Math.ceil(g/(1e3*60*60*24)),m=e.getFullYear()-a.getFullYear(),y=e.toLocaleDateString(\"es-ES\",{weekday:\"long\"});c&&(c.innerText=t.toString()),r&&(r.innerText=m.toString()),i&&(i.innerText=y),l&&(l.innerText=t===366||t===0?\"¡Hoy es tu cumpleaños! ¡Muchas felicidades! 🥳\":`¡Solo quedan ${t} despertares para tu gran día!`),s?.classList.remove(\"hidden\"),s?.scrollIntoView({behavior:\"smooth\",block:\"center\"})})};f();"],["C:/proyectos/seo-tools/src/pages/utiles/contador-dias-navidad.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const u=()=>{const o=document.getElementById(\"daysLeftNav\"),s=document.getElementById(\"hoursLeftNav\"),r=document.getElementById(\"minutesLeftNav\"),i=document.getElementById(\"secondsLeftNav\"),e=document.getElementById(\"statusMessageNav\"),c=()=>{const n=new Date,l=n.getFullYear();let a=new Date(l,11,25);n>a&&(a=new Date(l+1,11,25));const t=a.getTime()-n.getTime();if(t<=0){e&&(e.innerText=\"¡Feliz Navidad! 🎅\");return}const d=Math.floor(t/(1e3*60*60*24)),m=Math.floor(t%(1e3*60*60*24)/(1e3*60*60)),f=Math.floor(t%(1e3*60*60)/(1e3*60)),g=Math.floor(t%(1e3*60)/1e3);o&&(o.innerText=d.toString().padStart(2,\"0\")),s&&(s.innerText=m.toString().padStart(2,\"0\")),r&&(r.innerText=f.toString().padStart(2,\"0\")),i&&(i.innerText=g.toString().padStart(2,\"0\")),e&&(e.innerText=d>30?\"Aún hay tiempo para preparar todo 🌲\":\"¡Ya casi llega la magia! ✨\")};c(),setInterval(c,1e3)};u();"],["C:/proyectos/seo-tools/src/pages/utiles/costo-por-uso.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const c=document.getElementById(\"btnAnalizar\");c?.addEventListener(\"click\",()=>{const o=parseFloat(document.getElementById(\"precio\").value),n=parseFloat(document.getElementById(\"usos\").value),s=document.getElementById(\"resultado\"),l=document.getElementById(\"montoUso\"),e=document.getElementById(\"veredicto\");if(o>0&&n>0&&s&&l&&e){const t=o/n;l.textContent=\"$\"+t.toLocaleString(\"es-AR\",{maximumFractionDigits:2}),t<500?e.textContent=\"¡Excelente inversión! El costo por uso es bajísimo.\":t<2e3?e.textContent=\"Es un costo razonable para un producto de calidad.\":e.textContent=\"Costo alto por uso. ¡Aseguráte de que realmente lo necesites!\",s.classList.remove(\"hidden\")}else alert(\"Por favor, ingresá valores válidos.\")});"],["C:/proyectos/seo-tools/src/pages/utiles/descuento-doble.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const d=document.getElementById(\"btnCalcDoble\");d?.addEventListener(\"click\",()=>{const e=parseFloat(document.getElementById(\"precioBaseDoble\").value)||0,s=parseFloat(document.getElementById(\"desc1\").value)||0,l=parseFloat(document.getElementById(\"desc2\").value)||0,t=document.getElementById(\"resDoble\"),o=document.getElementById(\"totalPorcentajeDoble\"),n=document.getElementById(\"precioFinalDoble\");if(e>0&&t&&o&&n){const c=e*(1-s/100)*(1-l/100),a=(e-c)/e*100;o.textContent=a.toFixed(1)+\"%\",n.textContent=\"$\"+c.toLocaleString(\"es-AR\",{maximumFractionDigits:0}),t.classList.remove(\"hidden\")}else alert(\"Ingresá los datos correctamente.\")});"],["C:/proyectos/seo-tools/src/pages/utiles/descuentos.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};document.getElementById(\"btnPropina\")?.addEventListener(\"click\",()=>{const e=parseFloat(document.getElementById(\"totalCuenta\").value),n=parseFloat(document.getElementById(\"pctPropina\").value);if(e>0){const t=e*n;document.getElementById(\"montoPropina\").innerText=\"$\"+t.toFixed(2),document.getElementById(\"totalConPropina\").innerText=\"$\"+(e+t).toFixed(2),document.getElementById(\"resPropina\")?.classList.remove(\"hidden\")}});"],["C:/proyectos/seo-tools/src/pages/utiles/dias-habiles.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const m=document.getElementById(\"btnCalcularDias\");m?.addEventListener(\"click\",()=>{const i=document.getElementById(\"fechaInicio\").value,o=document.getElementById(\"fechaFin\").value,a=document.getElementById(\"resultadoDias\"),s=document.getElementById(\"habilesCount\"),c=document.getElementById(\"totalesCount\");if(i&&o&&a&&s&&c){let t=new Date(i),n=new Date(o);if(t>n){alert(\"La fecha de inicio no puede ser posterior a la de fin.\");return}const u=Math.abs(n.getTime()-t.getTime()),r=Math.ceil(u/(1e3*60*60*24))+1;let l=0,e=new Date(t);for(;e<=n;){const d=e.getUTCDay();d!==0&&d!==6&&l++,e.setUTCDate(e.getUTCDate()+1)}s.textContent=l.toString(),c.textContent=r.toString(),a.classList.remove(\"hidden\")}});"],["C:/proyectos/seo-tools/src/pages/utiles/diezmo.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const l=document.getElementById(\"btnCalcDiezmo\");l?.addEventListener(\"click\",()=>{const e=parseFloat(document.getElementById(\"ingresoD\").value)||0,t=parseFloat(document.getElementById(\"porcentajeD\").value)||0,n=document.getElementById(\"resDiezmo\"),o=document.getElementById(\"montoFinalD\"),s=document.getElementById(\"montoRestanteD\");if(e>0&&t>0&&n&&o&&s){const a=e*(t/100),c=e-a;o.textContent=\"$\"+a.toLocaleString(\"es-AR\",{maximumFractionDigits:0}),s.textContent=\"$\"+c.toLocaleString(\"es-AR\",{maximumFractionDigits:0}),n.classList.remove(\"hidden\")}else alert(\"Ingresá los datos para calcular.\")});"],["C:/proyectos/seo-tools/src/pages/utiles/diferencia-entre-fechas.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const y=()=>{const l=document.getElementById(\"fechaInicioId\"),d=document.getElementById(\"fechaFinId\"),f=document.getElementById(\"btnCalcularDifId\"),u=document.getElementById(\"resultadoDifBoxId\"),c=document.getElementById(\"resAnosId\"),i=document.getElementById(\"resMesesId\"),r=document.getElementById(\"resDiasId\"),g=document.getElementById(\"resTextoPlanoId\");f?.addEventListener(\"click\",()=>{if(!l.value||!d.value){alert(\"Por favor, selecciona ambas fechas.\");return}const e=new Date(l.value),t=new Date(d.value);let I=Math.abs(t.getTime()-e.getTime());const h=Math.floor(I/(1e3*60*60*24));let s=new Date(e<t?e:t),n=new Date(e<t?t:e),m=n.getFullYear()-s.getFullYear(),o=n.getMonth()-s.getMonth(),a=n.getDate()-s.getDate();if(a<0){o--;const D=new Date(n.getFullYear(),n.getMonth(),0);a+=D.getDate()}o<0&&(m--,o+=12),c&&(c.innerText=m.toString()),i&&(i.innerText=o.toString()),r&&(r.innerText=a.toString()),g&&(g.innerText=`En total son ${h.toLocaleString()} días de diferencia.`),u?.classList.remove(\"hidden\")})};y();"],["C:/proyectos/seo-tools/src/pages/utiles/dividir-cuenta.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const c=document.getElementById(\"btnDividir\");c?.addEventListener(\"click\",()=>{const t=parseFloat(document.getElementById(\"totalCuenta\").value)||0,i=parseFloat(document.getElementById(\"propinaPerc\").value)||0,e=parseInt(document.getElementById(\"cantidadPersonas\").value)||1,n=document.getElementById(\"resDividir\"),o=document.getElementById(\"montoPorPersona\"),a=document.getElementById(\"totalFinalGroup\");if(t>0&&e>0&&n&&o&&a){const l=t*(i/100),s=t+l,r=s/e;o.textContent=\"$\"+r.toLocaleString(\"es-AR\",{maximumFractionDigits:0}),a.textContent=\"$\"+s.toLocaleString(\"es-AR\",{maximumFractionDigits:0}),n.classList.remove(\"hidden\")}else alert(\"Ingresá el monto y la cantidad de personas.\")});"],["C:/proyectos/seo-tools/src/pages/utiles/ecuaciones.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const r=document.getElementById(\"btnEcuacion\");r?.addEventListener(\"click\",()=>{const e=parseFloat(document.getElementById(\"coefA\").value),t=parseFloat(document.getElementById(\"coefB\").value),n=parseFloat(document.getElementById(\"coefC\").value),c=document.getElementById(\"resEcuacion\"),s=document.getElementById(\"valorX\"),a=document.getElementById(\"paso1\"),l=document.getElementById(\"paso2\"),d=document.getElementById(\"paso3\");if(isNaN(e)||isNaN(t)||isNaN(n)){alert(\"Por favor, completa los tres campos.\");return}if(e===0){alert(\"El coeficiente 'a' no puede ser cero.\");return}const o=(n-t)/e;c&&s&&a&&l&&d&&(s.textContent=`x = ${Number.isInteger(o)?o:o.toFixed(2)}`,a.textContent=`1) ${e}x = ${n} - (${t})`,l.textContent=`2) ${e}x = ${n-t}`,d.textContent=`3) x = ${n-t} / ${e}`,c.classList.remove(\"hidden\"))});"],["C:/proyectos/seo-tools/src/pages/utiles/edad-mascotas.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};document.getElementById(\"btnMascota\")?.addEventListener(\"click\",()=>{const o=document.getElementById(\"tipoM\").value,e=parseFloat(document.getElementById(\"añosM\").value);let t=0;if(e>0){if(o===\"gato\")e===1?t=15:e===2?t=24:t=24+(e-2)*4;else{const s=o===\"perro_s\"?4:o===\"perro_m\"?5:7;e===1?t=15:e===2?t=24:t=24+(e-2)*s}document.getElementById(\"valMascota\").innerText=Math.round(t).toString(),document.getElementById(\"resMascota\")?.classList.remove(\"hidden\")}});"],["C:/proyectos/seo-tools/src/pages/utiles/fracciones.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};function u(t,e){return e===0?t:u(e,t%e)}document.getElementById(\"btnCalcFrac\")?.addEventListener(\"click\",()=>{const t=parseInt(document.getElementById(\"num1\").value),e=parseInt(document.getElementById(\"den1\").value),c=parseInt(document.getElementById(\"num2\").value),n=parseInt(document.getElementById(\"den2\").value),l=document.getElementById(\"operacionFrac\").value;if(!t||!e||!c||!n)return alert(\"Completá todos los campos\");if(e===0||n===0)return alert(\"El denominador no puede ser 0\");let o=0,s=0;l===\"+\"?(o=t*n+c*e,s=e*n):l===\"-\"?(o=t*n-c*e,s=e*n):l===\"*\"?(o=t*c,s=e*n):l===\"/\"&&(o=t*n,s=e*c);const d=Math.abs(u(o,s)),r=document.getElementById(\"resFrac\"),a=document.getElementById(\"resNum\"),m=document.getElementById(\"resDen\");r&&a&&m&&(a.textContent=(o/d).toString(),m.textContent=(s/d).toString(),r.classList.remove(\"opacity-30\"))});"],["C:/proyectos/seo-tools/src/pages/utiles/gastos-compartidos.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};let l=[],d=[];const u=document.getElementById(\"btnCrearGrupo\"),g=document.getElementById(\"btnAgregarGasto\"),m=document.getElementById(\"btnLiquidar\");u?.addEventListener(\"click\",()=>{const o=document.getElementById(\"nombresGrupo\").value;if(!o)return alert(\"Ingresá al menos un nombre.\");l=o.split(\",\").map(e=>e.trim()).filter(e=>e!==\"\");const n=document.getElementById(\"pagador\");n.innerHTML=\"\",l.forEach(e=>{const t=document.createElement(\"option\");t.value=e,t.textContent=e,n.appendChild(t)}),document.getElementById(\"seccionGastos\")?.classList.remove(\"hidden\"),m?.classList.remove(\"hidden\"),document.getElementById(\"setupGrupo\")?.classList.add(\"opacity-50\",\"pointer-events-none\")});g?.addEventListener(\"click\",()=>{const o=document.getElementById(\"pagador\").value,n=parseFloat(document.getElementById(\"montoGasto\").value)||0,e=document.getElementById(\"descripcionGasto\").value||\"Gasto\";if(n<=0)return;d.push({pagador:o,monto:n});const t=document.getElementById(\"listaGastos\"),a=document.createElement(\"div\");a.className=\"flex justify-between text-[11px] bg-slate-50 p-2 rounded-lg border border-slate-100\",a.innerHTML=`<span class=\"font-bold text-slate-700\">${o}: ${e}</span> <span class=\"font-black\">$${n}</span>`,t?.prepend(a),document.getElementById(\"montoGasto\").value=\"\",document.getElementById(\"descripcionGasto\").value=\"\"});m?.addEventListener(\"click\",()=>{if(d.length===0)return;const o=d.reduce((s,c)=>s+c.monto,0),n=o/l.length,e={};l.forEach(s=>e[s]=-n),d.forEach(s=>e[s.pagador]+=s.monto);const t=document.getElementById(\"contenedorSaldos\"),a=document.getElementById(\"resGastos\");if(!t||!a)return;t.innerHTML=\"\";const r=document.createElement(\"div\");r.className=\"text-center mb-6 p-4 bg-white/10 rounded-xl\",r.innerHTML=`<p class=\"text-[10px] uppercase text-indigo-300\">Total Gastado</p><p class=\"text-2xl font-black\">$${o.toLocaleString()}</p><p class=\"text-[10px] text-slate-400\">($${n.toFixed(0)} c/u)</p>`,t.appendChild(r),Object.entries(e).forEach(([s,c])=>{const i=document.createElement(\"div\");i.className=\"flex justify-between items-center p-3 rounded-xl \"+(c>=0?\"bg-emerald-500/10 text-emerald-400\":\"bg-red-500/10 text-red-400\");const p=c>=0?`A favor: +$${c.toFixed(0)}`:`Debe: -$${Math.abs(c).toFixed(0)}`;i.innerHTML=`<span class=\"font-bold\">${s}</span> <span class=\"text-xs font-black uppercase\">${p}</span>`,t.appendChild(i)}),a.classList.remove(\"hidden\")});"],["C:/proyectos/seo-tools/src/pages/utiles/generador-contrasenas.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const B=()=>{const l=document.getElementById(\"passwordOutput\"),s=document.getElementById(\"lengthSlider\"),i=document.getElementById(\"lenDisplay\"),u=document.getElementById(\"generateBtn\"),c=document.getElementById(\"copyBtn\"),t=document.getElementById(\"strengthBar\"),g=\"ABCDEFGHIJKLMNOPQRSTUVWXYZ\",m=\"abcdefghijklmnopqrstuvwxyz\",y=\"0123456789\",h=\"!@#$%^&*()_+~`|}{[]:;?><,./-=\",d=()=>{const n=parseInt(s.value);let e=\"\";if(document.getElementById(\"checkUpper\").checked&&(e+=g),document.getElementById(\"checkLower\").checked&&(e+=m),document.getElementById(\"checkNumbers\").checked&&(e+=y),document.getElementById(\"checkSymbols\").checked&&(e+=h),e===\"\"){l.value=\"Selecciona opciones\";return}let o=\"\";const a=new Uint32Array(n);window.crypto.getRandomValues(a);for(let r=0;r<n;r++)o+=e[a[r]%e.length];l.value=o,p(n,e.length)},p=(n,e)=>{const o=n*Math.log2(e);t&&(o<60?(t.style.width=\"30%\",t.style.backgroundColor=\"#ef4444\"):o<90?(t.style.width=\"60%\",t.style.backgroundColor=\"#f59e0b\"):(t.style.width=\"100%\",t.style.backgroundColor=\"#10b981\"))};s?.addEventListener(\"input\",()=>{i&&(i.innerText=s.value),d()}),u?.addEventListener(\"click\",d),c?.addEventListener(\"click\",()=>{navigator.clipboard.writeText(l.value);const n=c.innerText;c.innerText=\"¡Copiado!\",setTimeout(()=>c.innerText=n,1500)}),d()};B();"],["C:/proyectos/seo-tools/src/pages/utiles/horas.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};document.getElementById(\"btnCalcularHoras\")?.addEventListener(\"click\",()=>{const n=document.getElementById(\"horaInicio\").value,s=document.getElementById(\"horaFin\").value;if(n&&s){const[i,a]=n.split(\":\").map(Number),[l,m]=s.split(\":\").map(Number);let t=new Date;t.setHours(i,a,0);let e=new Date;e.setHours(l,m,0),e<t&&e.setDate(e.getDate()+1);const c=e.getTime()-t.getTime(),o=Math.floor(c/6e4),d=Math.floor(o/60),r=o%60,u=(o/60).toFixed(2);document.getElementById(\"tiempoTotal\").innerText=`${d}h ${r}m`,document.getElementById(\"decimalTotal\").innerText=`${u} horas`,document.getElementById(\"resHorasCont\")?.classList.remove(\"hidden\")}});"],["C:/proyectos/seo-tools/src/pages/utiles/propina.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};document.getElementById(\"btnPropina\")?.addEventListener(\"click\",()=>{const e=parseFloat(document.getElementById(\"totalCuenta\").value),n=parseFloat(document.getElementById(\"pctPropina\").value);if(e>0){const t=e*n;document.getElementById(\"montoPropina\").innerText=\"$\"+t.toFixed(2),document.getElementById(\"totalConPropina\").innerText=\"$\"+(e+t).toFixed(2),document.getElementById(\"resPropina\")?.classList.remove(\"hidden\")}});"],["C:/proyectos/seo-tools/src/pages/utiles/tiempo.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const i=document.getElementById(\"listaTiempos\");document.getElementById(\"addTime\")?.addEventListener(\"click\",()=>{const e=document.createElement(\"div\");e.className=\"flex gap-2 items-center animate-in fade-in slide-in-from-left-2\",e.innerHTML='<input type=\"number\" placeholder=\"HH\" class=\"hh w-full p-4 bg-slate-50 rounded-xl border-none font-bold text-center\" /><span class=\"font-bold\">:</span><input type=\"number\" placeholder=\"MM\" class=\"mm w-full p-4 bg-slate-50 rounded-xl border-none font-bold text-center\" />',i?.appendChild(e)});document.getElementById(\"btnCalcTime\")?.addEventListener(\"click\",()=>{let e=0;const l=document.querySelectorAll(\".hh\"),o=document.querySelectorAll(\".mm\");l.forEach((a,d)=>{const r=parseInt(a.value)||0,m=parseInt(o[d].value)||0;e+=r*60+m});const s=Math.floor(e/60),c=e%60,t=document.getElementById(\"resTime\"),n=document.getElementById(\"totalTime\");t&&n&&(n.textContent=`${s}h ${c}m`,t.classList.remove(\"hidden\"))});"],["C:/proyectos/seo-tools/src/pages/utiles/[slug].astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const n=document.getElementById(\"calc-metadata\");if(n){const s=parseFloat(n.dataset.valor||\"0\"),d=n.dataset.tipo,c=n.dataset.destino||\"\",o=document.getElementById(\"input-main\"),t=document.getElementById(\"resultado-texto\"),i=document.getElementById(\"sub-texto\");o&&t&&i&&o.addEventListener(\"input\",()=>{const e=parseFloat(o.value);if(isNaN(e)){t.innerText=\"--\",i.innerText=\"Esperando datos...\";return}if(d===\"unidades\"){const a=e*s;t.innerText=`${a.toLocaleString(void 0,{maximumFractionDigits:4})} ${c}`}else{const a=e*s/100;t.innerText=`$${(e-a).toLocaleString()}`}})}"],["C:/proyectos/seo-tools/src/pages/varios/edad.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const d=()=>{document.getElementById(\"btnEdad\")?.addEventListener(\"click\",()=>{const n=document.getElementById(\"fechaNac\").value;if(n){const o=new Date(n),s=new Date;if(o>s){alert(\"¿Venís del futuro? Seleccioná una fecha pasada.\");return}const t=s.getTime()-o.getTime(),a=Math.floor(t/(1e3*60*60*24*365.25)),c=Math.floor(t/(1e3*60*60*24*30.44)),i=Math.floor(t/(1e3*60*60*24)),r=Math.floor(t/(1e3*60*60)),e={anios:document.getElementById(\"resAnios\"),meses:document.getElementById(\"resMeses\"),dias:document.getElementById(\"resDias\"),horas:document.getElementById(\"resHoras\"),box:document.getElementById(\"resEdad\")};e.anios&&e.meses&&e.dias&&e.horas&&e.box&&(e.anios.innerText=a.toString(),e.meses.innerText=c.toLocaleString(),e.dias.innerText=i.toLocaleString(),e.horas.innerText=r.toLocaleString(),e.box.classList.remove(\"hidden\"),e.box.scrollIntoView({behavior:\"smooth\",block:\"center\"}))}})};d();"],["C:/proyectos/seo-tools/src/pages/index.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};let n=null;const a=document.getElementById(\"searchBox\"),s=document.getElementById(\"search-suggestions\"),i=document.getElementById(\"suggestions-list\");a&&s&&i&&(a.addEventListener(\"input\",async()=>{const t=a.value.toLowerCase().trim();if(t.length<3){s.classList.add(\"hidden\");return}if(!n)try{n=await(await fetch(\"/unidades.json\")).json()}catch(e){console.error(\"Error cargando el buscador\",e)}const o=n?n.filter(e=>e.titulo.toLowerCase().includes(t)).slice(0,10):[];o.length>0?(i.innerHTML=o.map(e=>`\n                <a href=\"/utiles/${e.slug}\" class=\"block p-4 hover:bg-indigo-50 text-left rounded-lg border-b border-slate-50 last:border-0 transition-colors\">\n                  <span class=\"font-bold text-slate-800 flex items-center gap-2\">\n                    <span class=\"text-lg\">🧮</span> ${e.titulo}\n                  </span>\n                </a>\n              `).join(\"\"),s.classList.remove(\"hidden\")):s.classList.add(\"hidden\")}),document.addEventListener(\"click\",t=>{!a.contains(t.target)&&!s.contains(t.target)&&s.classList.add(\"hidden\")}));"],["C:/proyectos/seo-tools/src/components/MenuMovil.astro?astro&type=script&index=0&lang.ts","globalThis.process??={};globalThis.process.env??={};const n=document.getElementById(\"openMobileMenu\"),l=document.getElementById(\"closeMobileMenuBtn\"),o=document.getElementById(\"closeMobileMenu\"),t=document.getElementById(\"mobileMenu\"),s=document.getElementById(\"mobileMenuPanel\");function e(){t?.classList.toggle(\"invisible\"),t?.classList.toggle(\"opacity-0\"),s?.classList.toggle(\"translate-x-full\"),document.body.classList.toggle(\"overflow-hidden\")}n?.addEventListener(\"click\",e);l?.addEventListener(\"click\",e);o?.addEventListener(\"click\",e);"]],"assets":["/CNAME","/manifest.json","/robots.txt","/sw.js","/unidades.json","/_worker.js"],"buildFormat":"directory","checkOrigin":true,"actionBodySizeLimit":1048576,"serverIslandBodySizeLimit":1048576,"allowedDomains":[],"key":"YAJSefdpPgyGbn0P5RH0euOFhRlpNOWFFwevsM1nP9Q=","sessionConfig":{"driver":"unstorage/drivers/cloudflare-kv-binding","options":{"binding":"SESSION"}},"image":{},"devToolbar":{"enabled":false,"debugInfoOutput":""},"logLevel":"info","shouldInjectCspMetaTags":false});
const manifestRoutes = _manifest.routes;
const manifest = Object.assign(_manifest, {
  renderers,
  actions: () => import("./noop-entrypoint_DsBX4kaI.mjs"),
  middleware: () => import("../virtual_astro_middleware.mjs"),
  sessionDriver: () => import("./_virtual_astro_session-driver_Csu6PJY6.mjs"),
  serverIslandMappings: () => import("./_virtual_astro_server-island-manifest_zfG9aQW0.mjs"),
  routes: manifestRoutes,
  pageMap
});
const createApp$1 = ({ streaming } = {}) => {
  return new App(manifest, streaming);
};
const createApp = createApp$1;
function getFirstForwardedValue(multiValueHeader) {
  return multiValueHeader?.toString()?.split(",").map((e2) => e2.trim())?.[0];
}
const IP_RE = /^[0-9a-fA-F.:]{1,45}$/;
function isValidIpAddress(value) {
  return IP_RE.test(value);
}
function getValidatedIpFromHeader(headerValue) {
  const raw = getFirstForwardedValue(headerValue);
  if (raw && isValidIpAddress(raw)) {
    return raw;
  }
  return void 0;
}
const app = createApp();
async function handle(request, env, context) {
  const { pathname: requestPathname } = new URL(request.url);
  if (env[sessionKVBindingName]) {
    const sessionConfigOptions = app.manifest.sessionConfig?.options ?? {};
    Object.assign(sessionConfigOptions, {
      binding: env[sessionKVBindingName]
    });
  }
  if (app.manifest.assets.has(requestPathname)) {
    return env.ASSETS.fetch(request.url.replace(/\.html$/, ""));
  }
  let routeData = void 0;
  if (app.isDev()) {
    const result = await app.devMatch(app.getPathnameFromRequest(request));
    if (result) {
      routeData = result.routeData;
    }
  } else {
    routeData = app.match(request);
  }
  if (!routeData) {
    const asset = await env.ASSETS.fetch(
      request.url.replace(/index.html$/, "").replace(/\.html$/, "")
    );
    if (asset.status !== 404) {
      return asset;
    }
  }
  const locals = {
    cfContext: context
  };
  Object.defineProperty(locals, "runtime", {
    enumerable: false,
    value: {
      get env() {
        throw new Error(
          `Astro.locals.runtime.env has been removed in Astro v6. Use 'import { env } from "cloudflare:workers"' instead.`
        );
      },
      get cf() {
        throw new Error(
          `Astro.locals.runtime.cf has been removed in Astro v6. Use 'Astro.request.cf' instead.`
        );
      },
      get caches() {
        throw new Error(
          `Astro.locals.runtime.caches has been removed in Astro v6. Use the global 'caches' object instead.`
        );
      },
      get ctx() {
        throw new Error(
          `Astro.locals.runtime.ctx has been removed in Astro v6. Use 'Astro.locals.cfContext' instead.`
        );
      }
    }
  });
  const response = await app.render(request, {
    routeData,
    locals,
    prerenderedErrorPageFetch: async (url) => {
      return env.ASSETS.fetch(url.replace(/\.html$/, ""));
    },
    clientAddress: getValidatedIpFromHeader(request.headers.get("cf-connecting-ip"))
  });
  if (app.setCookieHeaders) {
    for (const setCookieHeader of app.setCookieHeaders(response)) {
      response.headers.append("Set-Cookie", setCookieHeader);
    }
  }
  return response;
}
var server_default = {
  fetch: handle
};
const workerEntry = server_default ?? {};
export {
  AstroError as A,
  ExpectedImage as E,
  FailedToFetchRemoteImageDimensions as F,
  IncompatibleDescriptorOptions as I,
  LocalImageUsedWrongly as L,
  MissingImageDimension as M,
  NoImageMetadata as N,
  RemoteImageNotAllowed as R,
  UnsupportedImageFormat as U,
  types as a,
  isRemotePath as b,
  UnsupportedImageConversion as c,
  InvalidImageService as d,
  ExpectedImageOptions as e,
  ExpectedNotESMImage as f,
  ImageMissingAlt as g,
  addAttribute as h,
  isRemoteAllowed as i,
  joinPaths as j,
  FontFamilyNotFound as k,
  renderComponent as l,
  maybeRenderHead as m,
  InvalidComponentArgs as n,
  createRenderInstruction as o,
  renderSlot as p,
  renderHead as q,
  renderTemplate as r,
  spreadAttributes as s,
  typeHandlers as t,
  unescapeHTML as u,
  defineScriptVars as v,
  matchHostname as w,
  matchPattern as x,
  workerEntry as y
};
