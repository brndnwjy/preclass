let biodata = {
    id: 4,
    name: "Budi Pratama",
    gender: "Male",
    height: 163,
    education: [
        {
            instance: "33 Jakarta State High School",
            major: "Math and Natural Science",
            period: "2016 - 2019"
        }
    ],
    phone: {
        primary: "081232321232",
        secondary: "082343432343"
    }
}

let newEducation = {
    instance: "Gadjah Mada University",
    major: "Computer Science",
    period: "2019 - 2021"
}

// Mengganti isi object dengan data baru
biodata = {
    ...biodata,
    name: "Brandon Wijaya",
    phone: {
        ...biodata.phone,
        primary: "081806900794",
        secondary: "085643207147"
    }
}

console.log(biodata)

// Mengambil data pada object dengan dan tanpa destructuring
const { primary } = biodata.phone
const secondary = biodata.phone.secondary

console.log(primary)
console.log(secondary)

// Menggabungkan data ke dalam array yang ada pada object
biodata.education = [
    {
        ...biodata.education[0],
    },
    newEducation
]

console.log(biodata)