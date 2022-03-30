const assert = require("assert");

const getImpossibleCoinAmount = (coins) => {
    let totalAmount = 0;
    coins.sort((a, b) => a - b);

    for (const coin of coins) {
        if (coin > totalAmount + 1) {
            return totalAmount + 1;
        }
        totalAmount += coin;        
    };

    return totalAmount + 1;
}

const testCase1 = {
    input: [5, 7, 1, 1, 2, 3, 22],
    result: 20,
}
const testCase2 = {
    input: [1, 1, 1, 1, 1],
    result: 6,
}
const testCase3 = {
    input: [1, 5, 1, 1, 1, 10, 15, 20, 100],
    result: 55,
}
const testCase4 = {
    input: [1, 7],
    result: 2,
}

assert.strictEqual(getImpossibleCoinAmount(testCase1.input), testCase1.result, "The values are not equal");
assert.strictEqual(getImpossibleCoinAmount(testCase2.input), testCase2.result, "The values are not equal");
assert.strictEqual(getImpossibleCoinAmount(testCase3.input), testCase3.result, "The values are not equal");
assert.strictEqual(getImpossibleCoinAmount(testCase4.input), testCase4.result, "The values are not equal");