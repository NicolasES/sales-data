const fs = require('fs')
const path = require('path')

const SalesDataService = require('../services/SalesDataService')
const FileService = require('../services/FileService')

const FilesProcessor = function (pathIn, pathOut) {
    this.pathIn = pathIn
    this.pathOut = pathOut

    fileError = (file) => {
        let filePath = path.join(this.pathIn, file)
        let newFilePath = path.join(this.pathIn, 'error-' + file)
        fs.rename(filePath, newFilePath, () => {
            console.log('Arquivo com erro: ' + file)
        })
    }
    
    fileSuccess = (file, pathOutResult) => {
        let filePath = path.join(this.pathIn, file)
        let newFilePath = path.join(this.pathIn, 'success-' + file)
        fs.rename(filePath, newFilePath, () => {
            console.log('Arquivo de saída criado com sucesso: ' + pathOutResult)
        })
    }

    filterNotProcessedFiles = (fileName) => {
        return  /^(?!(success-|error-)).*/.test(fileName)
    }
}

FilesProcessor.prototype.execute = function () {
    let salesDataService = new SalesDataService()
    let fileService = new FileService()

    fs.readdir(this.pathIn, (err, files) => {
        if (err) {
            throw err
        }

        files
        .filter(filterNotProcessedFiles)
        .forEach(file => {
            let filePath = path.join(this.pathIn, file)
            let outFilePath = path.join(this.pathOut, file)

            salesDataService.createFromFile(filePath).then(salesData => {
                return fileService.createOutFile(salesData, outFilePath)
            }).then(pathOutResult => {
                fileSuccess(file, pathOutResult)
            }).catch(() => {
                fileError(file)
            })
        })
    })
}

module.exports = FilesProcessor
