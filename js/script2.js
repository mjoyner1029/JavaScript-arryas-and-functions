// Task 1: Obtaining String Length
const message = "Hello, World!";

document.getElementById('get-length').addEventListener('click', () => {
    const length = message.length;
    document.getElementById('length-output').textContent = `Length of "${message}": ${length}`;
});

// Task 2: Converting Cases
const text = "Hello, World!";

document.getElementById('convert-cases').addEventListener('click', () => {
    const upperCaseText = text.toUpperCase();
    const lowerCaseText = text.toLowerCase();
    document.getElementById('upper-output').textContent = `Uppercase: ${upperCaseText}`;
    document.getElementById('lower-output').textContent = `Lowercase: ${lowerCaseText}`;
});

// Task 3: Extracting Substrings
const sentence = "The quick brown fox jumps over the lazy dog";

document.getElementById('extract-substring').addEventListener('click', () => {
    // Extract substring from index 4 to 9
    const substring = sentence.substring(4, 9);
    document.getElementById('substring-output').textContent = `Substring (4, 9): ${substring}`;
});

// Task 4: Splitting Strings
const splitSentence = "The quick brown fox";

document.getElementById('split-string').addEventListener('click', () => {
    const words = splitSentence.split(' ');
    document.getElementById('split-output').textContent = `Split words: ${words.join(', ')}`;
});
