
function log_to_console(message) { 
    console.log(`Log message ${(new Date()).toLocaleString()}: ${message}`);
}

// module.export = { }
module.exports.log = log_to_console
// module.export = { log: function log() }
module.exports.name = 'itay'
// module.exports = { log: log(), name: 'itay'}