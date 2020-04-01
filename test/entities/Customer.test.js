const Customer = require('../../src/entities/Customer')

describe('Customer', () => {
    it('should to instance a Customer with success', () => {
        let customer = new Customer('012345678901', 'Bob', 'finances')
        expect(customer instanceof Customer).toBe(true)
        expect(customer.cnpj).toBe('012345678901')
        expect(customer.name).toBe('Bob')
        expect(customer.businessArea).toBe('finances')
    })
})