let enc = function (text, key) {
    let encrypted = text + "a";
    return encrypted
}
let dec = function (text, key) {
    let decrypted = text + "a";
    return decrypted
}

var key = "9958573";
var text = "this is a secret"

console.log("Original: " + text);
var secret = enc(text, key)
console.log("Encrypted: " + secret);
var quebrado = dec(secret, key)
console.log("Decrypted: " + quebrado);
