// Define the text
let declaration = `When in the Course of human events, it becomes necessary for one people to 
dissolve the political bands which have connected them with another, and to assume among the 
powers of the earth, the separate and equal station to which the Laws of Nature and of Nature's 
God entitle them, a decent respect to the opinions of mankind requires that they should declare 
the causes which impel them to the separation.`;

// Define a function to find the longest word in a given text
function findLongestWord(declaration) {
    // Split the text into an array of words based on one or more whitespace characters
    let words = declaration.split(/\s+/);
    
    // Initialize variables to store the longest word and its length
    let longestWord = '';
    let maxLength = 0;

    // Loop through each word in the array
    for (let i = 0; i < words.length; i++) {
        // Check if the current word is longer than the previously found longest word
        if (words[i].length > maxLength) {
            // If the current word is longer, update the longest word and its length
            longestWord = words[i];
            maxLength = words[i].length;
        }
    }

    // Print the longest word found in the text
    console.log('The longest word in the text is:', longestWord);
}

// Call the findLongestWord function with the provided text
findLongestWord(declaration);


