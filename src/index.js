/* your code here */
let servicesBase = '../base';
let window = require(servicesBase).window;

require('./terminal');
window.io.on('connection', ()=>{
    console.log('io on conection');
});
