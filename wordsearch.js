// Converts row to columns and viceversa from a given matrix
const transpose = function (matrix) {
    const results = [];
    for (let i = 0; i < matrix[0].length; i++) {
        results[i] = [];

        for (let j = 0; j < matrix.length; j++) {
            results[i][j] = matrix[j][i];
        }
    }
    return results;
};

// Flattens a given array so all the prior elements end up being a single string ["a", "b", "c", "d"] ===> ["abcd"], its second argument determines if it has to reverse the array in order to search for the word backwards.
const internalJoining = function (array, back) {
    let horizontalJoin = [];
    if (back) {
        horizontalJoin = array.map(ls => ls.reverse().join(''));
    } else {
        horizontalJoin = array.map(ls => ls.join(''));
    }
    return horizontalJoin;
};

// Looks for a specific series of letters inside a bigger string, its third argument determines if it has to invert the string to look for the word backwards.
const internalSearch = function (arr, word, back) {
    let joinedArr = [];
    if (back) {
        joinedArr = internalJoining(arr, true)
    } else {
        joinedArr = internalJoining(arr);
    }
    for (l of joinedArr) {
        if (l.includes(word)) return true
    }
};

// Takes a matrix and a word as arguments and returns true if it finds the word or false if it doesn't (horizatontally, vertically, fordward and backwards)
const wordSearch = (letters, word) => {
    const transLetters = transpose(letters);

    // FIRST CASE: searching horizontally =======> DONE!
    if (internalSearch(letters, word)) {
        return true;
        /* SECOND CASE: searching vertically =======> DONE! */
    } else if (internalSearch(transLetters, word)) {
        return true;
        /* THIRD CASE: searching vertically =======>  */
    } else if (internalSearch(letters, word, true)) {
        return true;
        /* FOURTh CASE: searching vertically =======>  */
    } else if (internalSearch(transLetters, word, true)) {
        return true;
    } else {
        return false;
    }
};

module.exports = wordSearch