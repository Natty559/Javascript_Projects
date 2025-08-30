const itemName = document.getElementById('itemName');
const itemPrice = document.getElementById('itemPrice');
const itemQty = document.getElementById('itemQty');
const addItemBtn = document.getElementById('addItemBtn');
const cartList = document.getElementById('cartList');
const grandTotalElement = document.getElementById('grandTotal');

let total = 0;

addItemBtn.onclick = function () {
    const name = itemName.value.trim();
    const price = Number(itemPrice.value);
    const qty = Number(itemQty.value);

    if (name === "" || price <= 0 || qty <= 0) return;

    const itemTotal = price * qty;
    total += itemTotal;

    const li = document.createElement('li');
    li.textContent = `${name} - $${itemTotal.toFixed(2)}`;

    cartList.appendChild(li);
    grandTotalElement.textContent = total.toFixed(2);

    itemName.value = "";
    itemPrice.value = "";
    itemQty.value = "";
};
