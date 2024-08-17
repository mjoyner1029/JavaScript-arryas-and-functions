// Initial Arrays
let fruits = ['apple', 'banana', 'orange'];
let numbers = [3, 1, 5, 2, 4];

// Task 1: Adding and Removing Elements
function updateFruitsDisplay() {
    document.getElementById('fruits-output').textContent = `Current Fruits: ${fruits.join(', ')}`;
}

document.getElementById('add-fruit').addEventListener('click', () => {
    const newFruit = prompt('Enter the name of the fruit to add:');
    if (newFruit) {
        fruits.push(newFruit);
        updateFruitsDisplay();
    }
});

document.getElementById('remove-fruit').addEventListener('click', () => {
    fruits.pop();
    updateFruitsDisplay();
});

updateFruitsDisplay();

// Task 2: Sorting Arrays
document.getElementById('sort-numbers').addEventListener('click', () => {
    numbers.sort((a, b) => a - b);
    document.getElementById('numbers-output').textContent = `Sorted Numbers: ${numbers.join(', ')}`;
});

// Task 3: Applying Array Methods
document.getElementById('apply-methods').addEventListener('click', () => {
    // map method to double each number
    const doubled = numbers.map(num => num * 2);
    document.getElementById('map-output').textContent = `Doubled Numbers: ${doubled.join(', ')}`;

    // filter method to get even numbers
    const evens = numbers.filter(num => num % 2 === 0);
    document.getElementById('filter-output').textContent = `Even Numbers: ${evens.join(', ')}`;

    // reduce method to calculate the sum of all numbers
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    document.getElementById('reduce-output').textContent = `Sum of Numbers: ${sum}`;
});

// Task 4: Spread and Rest Operators
document.getElementById('spread-rest').addEventListener('click', () => {
    // Spread operator example
    const moreNumbers = [...numbers, 6, 7, 8];
    document.getElementById('spread-output').textContent = `Numbers with Spread Operator: ${moreNumbers.join(', ')}`;

    // Rest operator example in function
    function sumAll(...args) {
        return args.reduce((acc, num) => acc + num, 0);
    }
    const totalSum = sumAll(...moreNumbers);
    document.getElementById('rest-output').textContent = `Sum of Spread Numbers: ${totalSum}`;
});
