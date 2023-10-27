/**
 * Generate a random 3x3 magic square.
 * @returns {number[][]} A 3x3 array representing the magic square.
 */
function generateRandomMagicSquare() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let magicSquare;

    do {
        numbers = shuffleArray(numbers); // Shuffle the numbers randomly.
        magicSquare = createMagicSquare(numbers);
    } while (!isValidMagicSquare(magicSquare));

    return magicSquare;
}

/**
 * Shuffle the elements of an array randomly.
 * @param {Array} array - The array to shuffle.
 * @returns {Array} The shuffled array.
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/**
 * Create a 3x3 matrix from an array of numbers.
 * @param {number[]} numbers - An array of 9 numbers.
 * @returns {number[][]} A 3x3 matrix.
 */
function createMagicSquare(numbers) {
    return [
        [numbers[0], numbers[1], numbers[2]],
        [numbers[3], numbers[4], numbers[5]],
        [numbers[6], numbers[7], numbers[8]]
    ];
}

/**
 * Check if a 3x3 matrix is a valid magic square.
 * @param {number[][]} square - The 3x3 matrix to check.
 * @returns {boolean} True if it's a valid magic square, false otherwise.
 */
function isValidMagicSquare(square) {
    let targetSum = square[0].reduce((a, b) => a + b, 0);
    for (let i = 0; i < 3; i++) {
        if (square[i].reduce((a, b) => a + b, 0) !== targetSum) {
            return false;
        }
        if (square[0][i] + square[1][i] + square[2][i] !== targetSum) {
            return false;
        }
    }
    if (square[0][0] + square[1][1] + square[2][2] !== targetSum) {
        return false;
    }
    if (square[0][2] + square[1][1] + square[2][0] !== targetSum) {
        return false;
    }
    return true;
}

/**
 * Print a 3x3 magic square in a human-readable format.
 * @param {number[][]} grid - A 3x3 array representing the magic square.
 */
function printTheGrid(grid) {
    console.log("-------------");
    for (let i = 0; i < grid.length; i++) {
        let row = grid[i].map((num) => `| ${num} `).join('') + '|';
        let separator = i === grid.length - 1 ? "-------------" : "----+---+---";
        console.log(row);
        console.log(separator);
    }
}

// Generate and print a random 3x3 magic square
let magicSquare = generateRandomMagicSquare();
printTheGrid(magicSquare);
