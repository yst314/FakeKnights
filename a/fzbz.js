function fizzbuzz(i) {
    let ret = ""
    if (i % 3 === 0) {
        ret += "fizz"
    }
    if (i % 5 === 0) {
        ret += "buzz"
    }
    if (ret === ""){
        ret = `${i}` 
    }
    return ret
}



for (let i = 0; i < 100; i++) {
    console.log(fizzbuzz(i));
}
