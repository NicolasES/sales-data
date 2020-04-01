const homedir = require('os').homedir()
const fs = require('fs')
const path = require('path')

const PATH_DATA =  path.join(homedir, 'data')
const PATH_IN = path.join(PATH_DATA, 'in')
const PATH_OUT = path.join(PATH_DATA, 'out')

/** 
 * Create required directories
*/
if(!fs.existsSync(PATH_DATA)) {
    fs.mkdirSync(PATH_DATA)
}

if(!fs.existsSync(PATH_IN)) {
    fs.mkdirSync(PATH_IN)
}

if(!fs.existsSync(PATH_OUT)) {
    fs.mkdirSync(PATH_OUT)
}

/**
 * Run
 */
const FilesProcessor = require('./application/FilesProcessor')
let filesProcessor = new FilesProcessor(PATH_IN, PATH_OUT)

var CronJob = require('cron').CronJob
var job = new CronJob('*/30 * * * * *', function() {
    filesProcessor.execute()
}, null, true, 'America/Sao_Paulo', null, true)

job.start()