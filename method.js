const ages = [11, 27, 12, 22, 35, 52, 44]
const legalAges = (ages) => {
    console.log(ages.filter((age) => age > 18).sort())
}
// legalAges(ages)

// ages.push(20)
// console.log(ages)

ages.pop()
// console.log(ages)

const totalAges = (ages) => {
    const total = ages.reduce((total, current) => total + current)
    console.log(`total   : ${total} years`)
}
// totalAges(ages)