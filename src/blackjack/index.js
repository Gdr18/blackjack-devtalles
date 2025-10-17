import { crearDeck, pedirCarta, valorCarta, turnoComputadora, crearCarta } from "./usecases";

const miModulo = (() => {
	"use strict";

	const tipos = ["C", "D", "H", "S"],
		especiales = ["A", "J", "Q", "K"];

	let deck = crearDeck(tipos, especiales),
		puntosJugadores = [];

	const inicializarJuego = (numJugadores = 2) => {
		deck = crearDeck(tipos, especiales);

        puntosJugadores = [];
		for (let i = 0; i < numJugadores; i++) {
			puntosJugadores.push(0);
		}

		puntosHTML.forEach((elem) => (elem.innerText = 0));
		divCartasJugadores.forEach((div) => (div.innerHTML = ""));
        
		btnPedir.disabled = false;
		btnDetener.disabled = false;
	};


	// Referencias del HTML

	const btnPedir = document.querySelector("#btnPedir"),
		btnDetener = document.querySelector("#btnDetener"),
		btnNuevo = document.querySelector("#btnNuevo");

	const puntosHTML = document.querySelectorAll("small");

	const divCartasJugadores = document.querySelectorAll(".divCartas");

	const acumularPuntos = (carta, turno) => {
		puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
		puntosHTML[turno].innerText = puntosJugadores[turno];
		return puntosJugadores[turno];
	};

	// Eventos

	btnPedir.addEventListener("click", () => {
		const carta = pedirCarta(deck);
		const puntosJugador = acumularPuntos(carta, 0);

		crearCarta(carta, divCartasJugadores[0]);

		if (puntosJugador > 21) {
			btnPedir.disabled = true;
			btnDetener.disabled = true;
			turnoComputadora(puntosJugador, puntosHTML[1], divCartasJugadores[1], deck);
		} else if (puntosJugador === 21) {
			btnPedir.disabled = true;
			btnDetener.disabled = true;
			turnoComputadora(puntosJugador, puntosHTML[1], divCartasJugadores[1], deck);
		}
	});

	btnDetener.addEventListener("click", () => {
		btnPedir.disabled = true;
		btnDetener.disabled = true;

		turnoComputadora(puntosJugadores[0], puntosHTML[1], divCartasJugadores[1], deck);
	});

	btnNuevo.addEventListener("click", () => {
		inicializarJuego();
	});

    return {
        nuevoJuego: inicializarJuego
    };
})(); // Función anónima autoejecutable