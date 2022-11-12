
let bookBtn = document.getElementById('book-btn');
let name = document.getElementById('name');
let time = document.getElementById('time');
let phone = document.getElementById('phone');
let date = document.getElementById('date');
let people = document.getElementById('people');
let email = document.getElementById('email');

bookBtn.addEventListener('click', (e) => {
    if (name.value == "" || time.value == "" || phone.value == "" ||
        date.value == "" || people.value == "" || email.value == "") {
        return alert("Please fill the order details");
    }

    let orderDetails = localStorage.getItem("orderDetails");
    if (orderDetails == null) {
        detailObj = [];
    } else {
        detailObj = JSON.parse(orderDetails);
        return alert('Order added successfully')
    }
    let myObj = {
        name: name.value,
        time: time.value,
        phone: phone.value,
        date: date.value,
        people: people.value,
        email: email.value
    }
    detailObj.push(myObj);
    localStorage.setItem("orderDetails", JSON.stringify(detailObj));
    name.value = "";
    time.value = "";
    phone.value = "";
    date.value = "";
    people.value = "";
    email.value = "";

    showOrderDetails();

})

//Show order details on the page
function showOrderDetails() {
    let orderDetails = localStorage.getItem("orderDetails");
    if (orderDetails == null) {
        detailObj = [];
    } else {
        detailObj = JSON.parse(orderDetails);
    }

    let html = "";
    detailObj.forEach(function (element, index) {
        html += `
            <div id="details">
                <p class="order-counter">Order ${index + 1}</p>
                <h3 class="name" id="name">Name: ${element.name}</h3>
                <p class="time" id="time">Time: ${element.time}</p>
                <p class="phone" id="phone">Phone No: ${element.phone}</p>
                <p class="date" id="date">Date: ${element.date}</p>
                <p class="people" id="people">Person: ${element.people}</p>
                <p class="email" id="email">Email: ${element.email}</p>
            </div> 
                `;
    });

    let orderElm = document.getElementById("order-details");
    if (detailObj.length != 0) {
        orderElm.innerHTML = html;
    } else {
        orderElm.innerHTML = "No Orders Yet! Book a table using reservation form.";
    }
}
showOrderDetails();