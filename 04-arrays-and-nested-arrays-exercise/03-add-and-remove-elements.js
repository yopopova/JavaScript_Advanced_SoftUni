function addAndRemoveElements(arrCommands) {
    let arrCommandsL = arrCommands.length;
    let num = 1;
    let arr = [];

    for (let i = 0; i < arrCommandsL; i++) {
        let command = arrCommands[i];

        if (command === 'add') {
            arr.push(num);
        } else if (command === 'remove') {
            arr.pop();
        }

        num += 1;
    }

    if (arr.length === 0) {
        console.log("Empty");
    } else {
        for (let el of arr) {
            console.log(el);
        }
    }
}