/**
 * Determina el ganador del juego
 * @param {number} puntosJugador // Puntos del jugador
 * @param {number} puntosComputadora // Puntos de la computadora
 */

export const determinarGanador = (puntosJugador, puntosComputadora) => {
    if (!puntosJugador || isNaN(puntosJugador)) throw new Error("Puntos del jugador son necesarios");
    if (!puntosComputadora || isNaN(puntosComputadora)) throw new Error("Puntos de la computadora son necesarios");

	setTimeout(() => {
		if (puntosComputadora === puntosJugador) {
			alert("Nadie gana :(");
		} else if (puntosJugador > 21) {
			alert("Computadora gana");
		} else if (puntosComputadora > 21) {
			alert("Jugador gana");
		} else {
			alert("Computadora gana");
		}
	}, 100);
};
