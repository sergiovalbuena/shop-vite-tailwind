/**
 * This fx calcs total price of a new order
 * @param {Array} products  cartProduct: Array of Objects
 * @returns {number} Total Price
 */

export const totalPrice = (products) => {
    let sum = 0; 
    products.forEach(product => sum += product.price)
    return sum;
}