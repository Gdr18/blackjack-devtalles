/**
 * Esta función permite tomar una carta
 * @param {Array<String>} deck Ejemplo: ['2C', '3D', 'KH', 'AS']
 * @returns {String} Carta sacada del deck
 */

export const pedirCarta = (deck) => {
    if (!deck || deck.length === 0) throw new Error("No hay cartas en el deck");
	return deck.pop();
};
