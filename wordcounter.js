// Define the text
let declaration = `When in the Course of human events, it becomes necessary for one people to 
dissolve the political bands which have connected them with another, and to assume among the 
powers of the earth, the separate and equal station to which the Laws of Nature and of Nature's 
God entitle them, a decent respect to the opinions of mankind requires that they should declare 
the causes which impel them to the separation.`;

// Function to count the number of words in the text without using built-in tools
function countWords(declaration) {
    let wordCount = 0;
    let isWord = false; // Flag to track if we are currently in a word

    // Iterate through each character in the text
    for (let i = 0; i < declaration.length; i++) {
        // Check if the character is a letter
        if ((declaration[i] >= 'a' && declaration[i] <= 'z') || (declaration[i] >= 'A' && declaration[i] <= 'Z')) {
            // If we're not already in a word, increment the word count and set the flag to true
            if (!isWord) {
                wordCount++;
                isWord = true;
            }
        } else {
            // If the character is not a letter (space, punctuation), set the flag to false
            isWord = false;
        }
    }
    
    // Return the final word count
    return wordCount;
}

// Call the countWords function with the declaration text
let wordCount = countWords(declaration);

// Log the result to the console
console.log("The amount of words in this text are:", wordCount);
