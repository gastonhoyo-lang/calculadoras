globalThis.process ??= {};
globalThis.process.env ??= {};
import { b as isRemotePath, w as matchHostname, x as matchPattern, j as joinPaths } from "./worker-entry_DDVHx7UD.mjs";
import { b as baseService, i as isESMImportedImage } from "./generic_CQNM1VGf.mjs";
function isRemoteAllowed(src, {
  domains = [],
  remotePatterns = []
}) {
  if (!isRemotePath(src)) return false;
  const url = new URL(src);
  return domains.some((domain) => matchHostname(url, domain)) || remotePatterns.some((remotePattern) => matchPattern(url, remotePattern));
}
const service = {
  ...baseService,
  getURL: (options, imageConfig) => {
    const resizingParams = ["onerror=redirect"];
    if (options.width) resizingParams.push(`width=${options.width}`);
    if (options.height) resizingParams.push(`height=${options.height}`);
    if (options.quality) resizingParams.push(`quality=${options.quality}`);
    if (options.fit) resizingParams.push(`fit=${options.fit}`);
    if (options.format) resizingParams.push(`format=${options.format}`);
    let imageSource = "";
    if (isESMImportedImage(options.src)) {
      imageSource = options.src.src;
    } else if (isRemoteAllowed(options.src, imageConfig)) {
      imageSource = options.src;
    } else {
      return options.src;
    }
    const imageEndpoint = joinPaths(
      "/",
      "/cdn-cgi/image",
      resizingParams.join(","),
      imageSource
    );
    return imageEndpoint;
  }
};
var image_service_external_default = service;
export {
  image_service_external_default as default
};
