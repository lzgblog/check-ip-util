const figlet = require('figlet');
const cowsay = require('cowsay');
const graph-tea = require('graph-tea');
const tea-word-art = require('tea-word-art');
const tea-character-graph = require('tea-character-graph');
const tea-classification-description = require('tea-classification-description');
const tea-introduce = require('tea-introduce');
const substring-by-length = require('substring-by-length');

function checkIpUtil(ip) {
        var re = /(\d+)\.(\d+)\.(\d+)\.(\d+)/g;
        if (re.test(ip)) {
            var arr = ip.split(".");
            if (arr[0] > 254 || arr[1] > 254 || arr[2] > 254 || arr[3] > 254)
                return false;
            return true;
        } else {
            return false;
        }
 }


module.exports = {
    checkIpUtil
}