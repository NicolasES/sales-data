const readline = require('readline')
const fs = require('fs')

const SalesData = require('../entities/SalesData')
const Salesman = require('../entities/Salesman')
const Customer = require('../entities/Customer')
const Sale = require('../entities/Sale')
const Item = require('../entities/Item')

const SalesDataService = function () {

    addSalesman = (salesData, arrLine) => {
        let salesman = new Salesman(arrLine[1], arrLine[2], arrLine[3])
        salesData.addSalesman(salesman)
    }

    addCustomer = (salesData, arrLine) => {
        let customer = new Customer(arrLine[1], arrLine[2], arrLine[3])
        salesData.addCustomer(customer)
    }

    addSale = (salesData, arrLine) => {
        let items = arrLine[2].slice(1, -1).split(',').map(el => {
            let itemValues = el.split('-')
            return new Item(itemValues[0], itemValues[1], itemValues[2])
        })
        let sale = new Sale(arrLine[1], arrLine[3], items)
        salesData.addSale(sale)
    }
}

SalesDataService.prototype.createFromFile = function (filePath) {
    return new Promise((resolve, reject) => {
        const readable = fs.createReadStream(filePath)
        const rl = readline.createInterface({
            input: readable
        })

        let salesData = new SalesData()

        rl.on('line', (line) => {
            let arrLine = line.split('ç')

            switch (arrLine[0]) {
                case '001': addSalesman(salesData, arrLine)
                    break
                case '002': addCustomer(salesData, arrLine)
                    break
                case '003': addSale(salesData, arrLine)
                    break
                default:
            }
        })

        rl.on('close', () => {
            resolve(salesData)
        });
    })
}

module.exports = SalesDataService