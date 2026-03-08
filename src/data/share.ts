export const compartirPantalla = (titulo: string) => {
  const resBox = document.querySelector("#resAsado, #resIVA, #resCualquiera"); // o un ID genérico
  if (!resBox) return;

  // Busca todos los labels y valores dentro de la caja de resultados
  const lineas = Array.from(resBox.querySelectorAll('li, div.flex')).map(el => {
    return el.innerText.replace('\n', ': ');
  });

  const mensaje = `📊 *${titulo}*\n\n${lineas.join('\n')}\n\n👉 https://chieffin.com`;
  window.open(`https://wa.me/?text=${encodeURIComponent(mensaje)}`, "_blank");
};