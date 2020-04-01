const Item = require('../../src/entities/Item')

describe('Item', () => {
    it('should to instance a Item with success', () => {
        let item = new Item('001', 14, 3.75)
        expect(item instanceof Item).toBe(true)
        expect(item.id).toBe('001')
        expect(item.quantity).toBe(14)
        expect(item.price).toBe(3.75)
    })
})