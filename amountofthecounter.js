// Define the text
let declaration = `When in the Course of human events, it becomes necessary for one people to 
dissolve the political bands which have connected them with another, and to assume among the 
powers of the earth, the separate and equal station to which the Laws of Nature and of Nature's 
God entitle them, a decent respect to the opinions of mankind requires that they should declare 
the causes which impel them to the separation.`;

// Function to find and display the amount of times the word 'the' appears in the text
function displayTheAmount(declaration) {
    // Split the text into an array of words using regular expression to handle multiple spaces and other whitespace characters
    let words = declaration.split(/\s+/);
    let count = 0; // Initialize a counter for the word 'the'

    // Iterate through the words
    for (let i = 0; i < words.length; i++) {
        // Check if the word is 'the' (case insensitive)
        // If the word is 'the' or 'The', increment the count
        if (words[i].toLowerCase() === 'the' || words[i] === 'The') {
            count++;
        }
    }
    
    // Display the count to the console
    console.log("Amount of times the word 'the' appears in the text:", count);
}

// Applying the function to count occurrences in the declaration text
displayTheAmount(declaration);
