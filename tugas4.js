const order = (qty, price) => {
    const disc = 0.35
    const total = qty * price
    let discountPrice = 0
    let subtotal = total

    if(total >= 60000){
        discountPrice = total * disc
        if(discountPrice > 50000){
            console.log("Max. discound applied")
            discountPrice = 50000
        }

        console.log("Discount applied")
        subtotal = total - discountPrice
    } else {
        console.log(`Add ${60000 - total} more to use discount`)
    }

    console.log(`Total    : ${total}
Discount : ${discountPrice}
Subtotal : ${subtotal}`)
}

// Kasus A : minimum harga penggunaan diskon tidak terpenuhi
order(4000, 10)

// Kasus B : minimum harga penggunaan diskon terpenuhi
order(6000, 10)

//  Kasus C : minimum harga penggunaan diskon terpenuhi dan potongan melebihi batas maksimum
order(18000, 10)