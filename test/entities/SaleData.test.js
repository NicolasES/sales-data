const SalesData = require('../../src/entities/SalesData')
const Sale = require('../../src/entities/Sale')
const Item = require('../../src/entities/Item')

describe('SalesData', () => {
    let salesData

    it('should to instance a SalesData with success', () => {
        salesData = new SalesData()
        expect(salesData instanceof SalesData).toBe(true)
        expect(salesData.salesmen).toEqual([])
        expect(salesData.customers).toEqual([])
        expect(salesData.sales).toEqual([])
    })

    it('should to instance a Salesman with success', () => {
        let salesmanMock = new (jest.fn())
        salesData.addSalesman(salesmanMock)
        expect(salesData.salesmen.length).toEqual(1)
        expect(salesData.salesmen).toEqual(expect.arrayContaining([salesmanMock]))
    })

    it('should to instance a Customer with success', () => {
        let customerMock = new (jest.fn())
        salesData.addCustomer(customerMock)
        expect(salesData.customers.length).toEqual(1)
        expect(salesData.customers).toEqual(expect.arrayContaining([customerMock]))
    })

    it('should to instance a Sale with success', () => {
        let saleMock = new (jest.fn())
        salesData.addSale(saleMock)
        expect(salesData.sales.length).toEqual(1)
        expect(salesData.sales).toEqual(expect.arrayContaining([saleMock]))
    })

    it('should execute getMostExpensiveSale with succes', () => {
        let sale1 = {
            getTotalPrice: () => 50 
        }

        let sale2 = {
           getTotalPrice: () => 100
        }

        let sale3 = {
            getTotalPrice: () => 80
         }
        let sales = [sale1, sale2, sale3]
        salesData.sales = sales
        expect(salesData.getMostExpensiveSale()).toEqual(sale2)
    })

    it('should execute getWorstSale with succes', () => {
        let sale1 = {
            getTotalPrice: () => 100 
        }

        let sale2 = {
           getTotalPrice: () => 50
        }

        let sale3 = {
            getTotalPrice: () => 80
         }
        let sales = [sale1, sale2, sale3]
        salesData.sales = sales
        expect(salesData.getWorstSale ()).toEqual(sale2)
    })
})