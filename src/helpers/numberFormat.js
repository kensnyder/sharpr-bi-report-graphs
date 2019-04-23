export function numberFormat(number, precision = null) {
	// cast to a number
	number = Number(number);
	if (precision !== null) {
		// round to the given precision
		number = number.toFixed(precision);
	} else {
		// or otherwise cast to a string
		number = String(number);
	}
	// split apart the digits and decimals
	let [digits, decimals] = number.split('.');
	// add commas
	digits = digits.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
	decimals = decimals && decimals.length ? '.' + decimals : '';
	// reconstruct
	return digits + decimals;
}
