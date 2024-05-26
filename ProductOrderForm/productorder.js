// Add an event listener to the form to handle the form submission event
document.getElementById('orderForm').addEventListener('submit', function (event) {
    // Prevent the default form submission to allow custom handling
    event.preventDefault();

    // Retrieve values from the form fields
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const address = document.getElementById('address').value;
    const product = document.getElementById('product').value;
    const quantity = document.getElementById('quantity').value;
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;

    // Log the retrieved order details to the console (for demonstration purposes)
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

    // Example of how to send the order details to a server using fetch    
    fetch('/submitOrder', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            firstName,
            lastName,
            email,
            phoneNumber,
            address,
            product,
            quantity,
            paymentMethod
        })
    }).then(response => response.json())
    .then(data => {
        // Handle server response here, e.g., show a success message
        alert('Order placed successfully!');
    }).catch(error => {
        // Handle any errors that occur during the fetch
        console.error('Error placing order:', error);
    });
    

    // Display a success message to the user (for demonstration purposes)
    alert('Order placed successfully!');
});
