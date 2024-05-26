document.getElementById('orderForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const address = document.getElementById('address').value;
    const product = document.getElementById('product').value;
    const quantity = document.getElementById('quantity').value;
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;

    // Log the order details to the console (for demonstration purposes)
    console.log({
        firstName,
        lastName,
        email,
        phoneNumber,
        address,
        product,
        quantity,
        paymentMethod
    });

    // Here you would typically send the order details to your server
    // For example:
    // fetch('/submitOrder', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({
    //         firstName,
    //         lastName,
    //         email,
    //         phoneNumber,
    //         address,
    //         product,
    //         quantity,
    //         paymentMethod
    //     })
    // }).then(response => response.json())
    // .then(data => {
    //     // Handle server response
    // });

    alert('Order placed successfully!');
});
