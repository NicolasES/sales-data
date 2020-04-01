const Salesman = require('../../src/entities/Salesman')

describe('Salesman', () => {
    it('should to instance a Salesman with success', () => {
        let salesman = new Salesman('012345678901', 'Bob', 6000.00)
        expect(salesman instanceof Salesman).toBe(true)
        expect(salesman.cpf).toBe('012345678901')
        expect(salesman.name).toBe('Bob')
        expect(salesman.salary).toBe(6000.00)
    })
})