function patter4(n) {

    let str = ''
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (j % 2 === 0) {
                str += j
            }
            else {
                str += i
            }
        }
        str += '\n'
    }

    return str

}
console.log(patter4(5));
