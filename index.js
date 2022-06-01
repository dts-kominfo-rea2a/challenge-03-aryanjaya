// ! JANGAN DIMOFIDIKASI
const dataBelanjaan = [
  {
    id: "D-10001",
    nama: "Minyak Goreng Delima",
    harga: 25000,
    kuantitas: 2,
  },
  {
    id: "D-10020",
    nama: "Beras Mamos",
    harga: 48000,
    kuantitas: 1,
  },
  {
    id: "F-00010",
    nama: "Larutan Cap Kaki Empat",
    harga: 7500,
    kuantitas: 8,
  },
];

const findIndex = (array, filter) => {
  for (let index = 0; index < array.length; index++) {
    if (filter(array[index])) {
      return index;
    }
  }

  return -1;
}

const mapArray = (array, callback) => {
  const newArray = [];
  
  for (let index = 0; index < array.length; index++) {
    newArray.push(callback(array[index]));
  }

  return newArray;
}

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const listBelanjaan = (itemList) => {
  const list = [];

  for (let index = 0; index < itemList.length; index++) {
    const item = itemList[index];

    const listIndex = findIndex(list, (element) => element.name === item.nama);
    
    if (listIndex !== -1) {
      list[listIndex].quantity += item.kuantitas;

      continue;
    }

    list.push({
      name: item.nama,
      quantity: item.kuantitas,
    });
  }

  return mapArray(list, (element) => `- ${element.name} x ${element.quantity}`);
};

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const totalBelanjaan = null;

// ! JANGAN DIMODIFIKASI
const main = () => {
  console.log("Selamat datang customer");

  console.log("Belanjaan Anda adalah:");
  console.log(listBelanjaan?.(dataBelanjaan)?.join("\n"));
  console.log(
    "\nTotal Belanjaan Anda adalah Rp. " + totalBelanjaan?.(dataBelanjaan)
  );
};

main();

module.exports = {
  dataBelanjaan,
  listBelanjaan,
  totalBelanjaan,
};
