function circleArea(arg) {
    let argType = typeof (arg);

    if (argType === 'number') {
        let r = arg;
        let cArea = Math.PI * (r * r);
        console.log(cArea.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${argType}.`);
    }
}