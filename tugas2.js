const ages = [11, 27, 12, 22, 35, 52, 44];

// filter()
// Digunakan untuk memfilter sebuah array dengan kondisi tertentu
const legalAges = (ages) => {
  console.log(ages.filter((age) => age > 18).sort());
};
legalAges(ages);

// push ()
// Digunakan untuk menambahkan data baru ke dalam sebuah array, data baru ditempatkan di indeks terakhir
ages.push(20);
console.log(ages);

// pop ()
// Digunakan untuk menghapus data indeks terakhir dari sebuah array
ages.pop();
console.log(ages);

// reduce()
// Digunakan untuk memanipulasi keseluruhan data pada sebuah array
// contohnya seperti menghitung jumlah dari hasil operasi matematika tiap-tiap angka pada array
const totalAges = (ages) => {
  const total = ages.reduce((total, current) => total + current);
  console.log(`total   : ${total} years`);
};
totalAges(ages);

const arr = [1, 2, 3, "a", "b", "c", "d", 1, 2, 3];

const reduceTest = (arr) => {
  const total = arr.reduce((total, current) => total + current);
  console.log(`hasil   : ${total}`);
};

reduceTest(arr)