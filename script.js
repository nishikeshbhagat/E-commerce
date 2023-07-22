// Example data for product cards
const products = [
  {
    name: "Deluxe Pizza",
    price: 12.99,
    image: "pizza.jpg",
  },
  {
    name: "Fresh Salad",
    price: 8.99,
    image: "salad.jpg",
  },
  {
    name: "Chocolate Cake",
    price: 15.99,
    image: "cake.jpg",
  },
];

// Generate product cards dynamically
const productGrid = document.querySelector(".product-grid");

products.forEach((product) => {
  const card = document.createElement("div");
  card.classList.add("product-card");

  const image = document.createElement("img");
  image.src = product.image;
  image.alt = product.name;
  card.appendChild(image);

  const name = document.createElement("h3");
  name.textContent = product.name;
  card.appendChild(name);

  const price = document.createElement("p");
  price.textContent = `$${product.price.toFixed(2)}`;
  card.appendChild(price);

  productGrid.appendChild(card);
});
