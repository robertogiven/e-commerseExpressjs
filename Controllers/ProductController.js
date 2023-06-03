const data = [
  {
    id: 1,
    productName: "ayam pedas",
    img: "menu1.jpg",
    price: 20000,
  },
  {
    id: 2,
    productName: "pecel ayam",
    img: "menu2.jpg",
    price: 18000,
  },
  {
    id: 3,
    productName: "pecel lele",
    img: "menu3.jpg",
    price: 17000,
  },
  {
    id: 4,
    productName: "pecel lele gledek",
    img: "menu4.jpg",
    price: 21000,
  },
  {
    id: 5,
    productName: "pecel lele petir",
    img: "menu1.jpg",
    price: 21000,
  },
  {
    id: 6,
    productName: "pecel Ayam jumbo",
    img: "menu2.jpg",
    price: 21000,
  },
  {
    id: 7,
    productName: "pecel Ayam Biasa",
    img: "menu3.jpg",
    price: 21000,
  },
  {
    id: 8,
    productName: "Ayam Geprek",
    img: "menu4.jpg",
    price: 21000,
  },
  {
    id: 9,
    productName: "Ayam Hoheng",
    img: "menu1.jpg",
    price: 21000,
  },
];

exports.getDataProduct = (req, res) => {
  return res.send({
    response: "success",
    message: "get data product success",
    data: data,
  });
};

exports.getDataProductById = (req, res) => {
  const id = req.params.idparam;

  const dataById = data.find((item) => item.id == id);

  if (!dataById) {
    return res.status(404).send({
      response: "fail",
      message: `Data dengan ID ${id} Tidak Ditemukan`,
    });
  }

  return res.send({
    response: "success",
    message: "get data product by ID success",
    id: id,
    data: dataById,
  });
};
