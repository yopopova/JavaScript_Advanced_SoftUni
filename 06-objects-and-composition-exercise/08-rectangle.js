function rectangle(elOne, elTwo, elThree) {
    let obj = {
        width: Number(elOne),
        height: Number(elTwo),
        color: elThree,
        calcArea() {
            return this.width * this.height;
        }
    }

    let firstPart = obj.color.charAt(0).toUpperCase();
    let secondPart = obj.color.substring(1);
    obj.color = firstPart.concat(secondPart);

    return obj;
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());