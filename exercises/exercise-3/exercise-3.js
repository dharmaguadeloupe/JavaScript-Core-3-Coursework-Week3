let order = [
  { itemName: "Hot Cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

function printReceipt(order) {
  console.log("QTY    ITEM   TOTAL");
  let total = 0;

  order.map((item) => {
    let {quantity, itemName, unitPrice} = item;
    let sum = quantity * unitPrice;   

    console.log(`${quantity}      ${itemName}    ${Number(sum).toFixed(2)}`);
    total +=sum;
  });
  console.log(`Total: ${total}`);
}

printReceipt(order);