/**
 * Esta función recibe una carta y retorna su valor numérico según las reglas del blackjack.
 * @param {String} carta 
 * @returns {Number} Retorna el valor numérico de la carta
 */

export const valorCarta = (carta) => {
    if (!carta || 3 < carta.length === 0) throw new Error("carta debe ser un string")
	
    const valor = carta.substring(0, carta.length - 1);
	return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
};
