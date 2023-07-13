
const products = [
  {
    id: 1,
    title: "Nike Air Max 90",
    src: "/img/airmax90.png",
    price: 130,
    src1: "/img/airmax901.png",
    src2: "/img/airmax902.png",
    src3: "/img/airmax903.png",
    src4: "/img/airmax904.png",
    rating: 4.5,

  },
  {
    id: 2,
    title: "Nike Air Max Pulse",
    src: "/img/airmaxpulse.png",
    price: 150,
    src1: "/img/airmaxpulse1.png",
    src2: "/img/airmaxpulse2.png",
    src3: "/img/airmaxpulse3.png",
    src4: "/img/airmaxpulse4.png",
    rating: 3,
  },
  {
    id: 3,
    title: "Nike Dunk Low SE",
    src: "/img/dunklowse.png",
    price: 110,
    src1: "/img/dunklowse1.png",
    src2: "/img/dunklowse2.png",
    src3: "/img/dunklowse3.png",
    src4: "/img/dunklowse4.png",
    rating: 4,
  },
]

function getProductData(id) {
  let productData = products.find(product => product.id === id);

  if (productData == undefined) {
    console.log("Product data does not exist for ID: " + id);
    return undefined;
  }
  return productData;
}

export { products, getProductData };