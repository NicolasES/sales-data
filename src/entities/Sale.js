const Sale = function(id, salesmanName, items = []) {
    this.id = id
    this.salesmanName = salesmanName
    this.items = items
}

Sale.prototype.addItem = function(item) {
    this.items.push(item)
}

Sale.prototype.getTotalPrice = function() {
    return this.items.reduce((prev, current) => {
        return prev + (current.quantity * current.price)
    }, 0)
}

module.exports = Sale