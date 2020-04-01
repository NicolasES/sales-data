const Sale = require('../../src/entities/Sale')


describe('Sale', () => {
    const itemMock = jest.fn()
    let sale

    it('should to instance a Sale with success', () => {
        sale = new Sale('001', 'Bob', [])
        expect(sale instanceof Sale).toBe(true)
        expect(sale.id).toBe('001')
        expect(sale.salesmanName).toBe('Bob')
        expect(sale.items).toEqual([])
    })

    it('should add an item with success', () => {
        let item1 = new itemMock()
        let item2 = new itemMock()
        
        sale.addItem(item1)
        sale.addItem(item2)

        expect(sale.items.length).toEqual(2)
        expect(sale.items).toEqual(expect.arrayContaining([item1, item2]))
    })

    it('should get total price', () => {
        let items = [
            { id: 1, quantity: 5, price: 2.50 },
            { id: 2, quantity: 2, price: 1.75 },
            { id: 3, quantity: 3, price: 9.63 }
        ]

        let sale = new Sale('001', 'Bob', items)
        expect(sale.getTotalPrice()).toBe(44.89)
    })
})