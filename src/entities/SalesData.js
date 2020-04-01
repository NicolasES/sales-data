const SalesData = function(salesmen = [], customers = [], sales = []) {
    this.salesmen = salesmen
    this.customers = customers
    this.sales = sales
}

SalesData.prototype.addSalesman = function(salesman) {
    this.salesmen.push(salesman)
}

SalesData.prototype.addCustomer = function(customer) {
    this.customers.push(customer)
}

SalesData.prototype.addSale = function(sale) {
    this.sales.push(sale)
}

SalesData.prototype.getMostExpensiveSale = function() {
    return this.sales.reduce((prev, current) => {
        if (current.getTotalPrice() > prev.getTotalPrice()) {
            return current
        }
        return prev
    })
}

SalesData.prototype.getWorstSale = function() {
    return this.sales.reduce((prev, current) => {
        if(current.getTotalPrice() < prev.getTotalPrice()) {
            return current
        }
        return prev
    })
}

module.exports = SalesData