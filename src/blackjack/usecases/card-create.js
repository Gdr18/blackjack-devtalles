/**
 * Crear una carta
 * @param {String} carta Ejemplo: '3C'
 * @param {Number} turno 0 = primer jugador y el último sera la computadora
 * @returns {HTMLImageElement} retorna la imagen de la carta
 */

export const crearCarta = (carta, contenedor) => {
    if ( !carta ) throw new Error('Carta es necesaria');

	const imgCarta = document.createElement("img");
	imgCarta.src = `/assets/cartas/${carta}.png`; // src/app/cartas/3C.png
	imgCarta.classList.add("carta");
	contenedor.append(imgCarta);
};
