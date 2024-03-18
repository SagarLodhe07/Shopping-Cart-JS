const shoppingCart = [];
/**Add To Cart */

const addToCart = (Product, Qty, rate) => {
  let existItem = shoppingCart.findIndex((item) => item.Product == Product);
  if (existItem !== -1) {
    shoppingCart[existItem].Qty += Qty;
    shoppingCart[existItem].Price += Qty * rate;
  } else {
    shoppingCart.push({
      Product: Product,
      Qty: Qty,
      Price: rate * Qty,
    });
  }
};

/** Remove Item From Cart */
const removeItem = (Product) => {
  let existItem = shoppingCart.findIndex((item) => item.Product == Product);
  if (existItem !== -1) {
    shoppingCart.splice(Product, 1);
  }
};

/**Calculate Total Amount */
calculateAmmount = () => {
  const totalPrice = shoppingCart.reduce(
    (total, item) => item.Price + total,
    0
  );
  console.log(`Your Total Ammount is $${totalPrice}`);
};

/**Display Cart */

displayShoppingCart = () => {
  return console.log(shoppingCart);
};

addToCart("Banana", 1, 5); //Rate 5
addToCart("Banana", 1, 5); //Rate 5
displayShoppingCart();

addToCart("Apple",1,10);
calculateAmmount();
