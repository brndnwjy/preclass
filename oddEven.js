const oddEven = (number) => {
    if(typeof(number) != "number"){
        console.log("please input a number")
    } else {
        for(let i = 1; i <= number; i++){
            if(i % 2 == 0){
                console.log(`${i} merupakan angka genap`)
            } else {
                console.log(`${i} merupakan angka ganjil`)
            }
        }
    }
}

oddEven(10)