module.exports = function reverse (n) {
    let reversNum=""
    let number=n.toString().split("")
    for (let i = 1;i<=number.length; i++) {
        reversNum+=number[number.length-i]
    }
    return parseInt(reversNum)
}
