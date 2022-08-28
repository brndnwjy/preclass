const triangle = (number) => {
    if(typeof(number) != "number"){
        console.log("please input a number")
    } else {
        for(let i = 1; i <= number; i++){
            let line = []
            for(let j = 1; j <= i; j++){
                line.push(i)
            }
            console.log(line.join(" "))
            line = []
        }
    }
}

triangle(5)