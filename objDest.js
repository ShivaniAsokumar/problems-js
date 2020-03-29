/**
 * 
 * @param {Object} product is an object
 * @param {int} product.price is the price of the product
 */
function hasValidPrice(product) {
	if (product.price >= 0) {
		return true;
	} else {
		return false;
	}
}
