let order = [
  { itemName: "Hot Cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

let [itemName, quantity, unitPrice] = order;



function printReceipt(order) {
  console.log("QTY    ITEM                 TOTAL");
  order.forEach(item => {
    console.log(
      `${item.quantity}      ${item.itemName}    ${item.quantity * item.unitPrice}`);
  });
  console.log(`\nTotal: `);
}

printReceipt(order);