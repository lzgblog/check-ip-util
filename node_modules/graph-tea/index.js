const cowsay = require('cowsay');

// 创建喝茶的图案
function printTea() {
	let teaCow = cowsay.say({
    text: "喝茶",
    e: "oO",
    T: "U "
	});

	console.log(teaCow);
}

module.exports = {
    printTea
}