function largestNumber(num1, num2, num3) {
    let nums = [];
    nums.push(num1, num2, num3);
    let numsL = nums.length;
    let largestNum = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < numsL; i++) {
        let currentNum = nums[i];

        if (currentNum > largestNum) {
            largestNum = currentNum;
        }
    }

    console.log(`The largest number is ${largestNum}.`);
}