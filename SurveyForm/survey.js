// Add an event listener to the form to handle the form submission event
document.getElementById('surveyForm').addEventListener('submit', function (event) {
    // Prevent the default form submission to allow custom handling
    event.preventDefault();

    // Retrieve values from the form fields
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const satisfaction = document.getElementById('satisfaction').value;
    const comments = document.getElementById('comments').value;

    // Log the retrieved survey details to the console (for demonstration purposes)
    console.log({
        firstName,
        lastName,
        email,
        age,
        gender,
        satisfaction,
        comments
    });

    // Example of how to send the survey details to a server using fetch
    fetch('/submitSurvey', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            firstName,
            lastName,
            email,
            age,
            gender,
            satisfaction,
            comments
        })
    }).then(response => response.json())
    .then(data => {
        // Handle server response here, e.g., show a success message
        alert('Survey submitted successfully!');
    }).catch(error => {
        // Handle any errors that occur during the fetch
        console.error('Error submitting survey:', error);
    });

    // Display a success message to the user (for demonstration purposes)
    alert('Survey submitted successfully!');
});
