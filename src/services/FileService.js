const fs = require('fs')

const FileService = function () { }

FileService.prototype.createOutFile = function (salesData, pathfile) {
    return new Promise((resolve, reject) => {
        let customerQuantity = salesData.customers.length
        let salesmanQuantity = salesData.salesmen.length
        let mostExpansiveSaleId = salesData.getMostExpensiveSale().id
        let worstSalesman = salesData.getWorstSale().salesmanName

        let text =
`Quantidade de clientes: ${customerQuantity} 
Quantidade de vendedores: ${salesmanQuantity}
ID da venda mais cara: ${mostExpansiveSaleId}
Pior vendedor: ${worstSalesman}`

        fs.writeFile(pathfile, text, (err) => {
            if (err) {
                reject(err)
            }

            resolve(pathfile)
        })
    })
}

module.exports = FileService