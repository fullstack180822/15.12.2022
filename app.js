
const logger = require('./logger') 
// logger == module.exports = {log(), name: 'itay' }

console.log(logger);

logger.log(`====== System start up`);



logger.log(`====== System shut down`);

// create calc.js with function add (x,y) => prints x + y
// create app.js which requried the calc.js
// from app.js call add(2, 5)