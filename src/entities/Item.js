const Item = function(id, quantity, price) {
    this.id = id
    this.quantity = quantity
    this.price = Number(price)
}

module.exports = Item