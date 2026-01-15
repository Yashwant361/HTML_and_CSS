function patter3(n) {

    let str = ''
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
                 str+=i
        }
        str+='\n'
    }
    return str
}
console.log(patter3(5));
