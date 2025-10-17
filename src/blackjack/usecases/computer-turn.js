import { pedirCarta, valorCarta, crearCarta, determinarGanador } from ".";

/**
 * Esta función permite manejar el turno de la computadora
 * @param {Number} puntosMinimos Ejemplo: 16
 * @param {HTMLElement} puntosHTML Ejemplo: smallPuntosComputadora
 * @param {HTMLElement} divCartasComputadora Ejemplo: divCartasComputadora
 * @param {Array<String>} deck Ejemplo: ['2C', 'JD', ...]
 */

export const turnoComputadora = (
	puntosMinimos,
	puntosHTML,
	divCartasComputadora,
	deck = []
) => {
	if (!puntosMinimos) throw new Error("Puntos mínimos son necesarios");
	if (!deck || deck.length === 0) throw new Error("El deck es necesario");
	if (!puntosHTML) throw new Error("Argumento puntosHTML es necesario");
	if (!divCartasComputadora)
		throw new Error("Argumento divCartasComputadora es necesario");

	let puntosComputadora = 0;

	do {
		const carta = pedirCarta(deck);

		puntosComputadora = puntosComputadora + valorCarta(carta);
		puntosHTML.innerText = puntosComputadora;

		crearCarta(carta, divCartasComputadora);
	} while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

	determinarGanador(puntosMinimos, puntosComputadora);
};
