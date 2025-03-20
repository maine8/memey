let orders = [];
let totalAmount = 0;

function addToOrder(item, price) {
    orders.push({ item, price });
    totalAmount += price;
    updateOrderList();
}

function updateOrderList() {
    let orderList = document.getElementById("order-list");
    let totalElement = document.getElementById("total");

    orderList.innerHTML = "";
    orders.forEach(order => {
        let li = document.createElement("li");
        li.textContent = `${order.item} - ₱${order.price}`;
        orderList.appendChild(li);
    });

    totalElement.textContent = totalAmount;
}

function checkout() {
    let name = document.getElementById("name").value;
    let contact = document.getElementById("contact").value;
    let address = document.getElementById("address").value;
    let paymentMethod = document.getElementById("payment-method").value;

    if (name === "" || contact === "" || address === "") {
        alert("Please fill in all delivery details.");
        return;
    }

    let orderDetails = `Order Summary:\n`;
    orders.forEach(order => {
        orderDetails += `${order.item} - ₱${order.price}\n`;
    });
    orderDetails += `Total: ₱${totalAmount}\n`;
    orderDetails += `Payment Method: ${paymentMethod}\n`;
    orderDetails += `Deliver to: ${name}, ${contact}, ${address}`;

    alert("Order placed successfully!\n" + orderDetails);

    // Redirect to entertainment page
    window.location.href = "Entertainment.html";
}