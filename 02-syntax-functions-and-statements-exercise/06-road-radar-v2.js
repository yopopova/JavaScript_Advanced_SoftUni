function roadRadar(speed, area) {
    let max = 0;
    let diff = 0;

    switch (area) {
        case 'motorway':
            max = 130;

            if (speed > max) {
                diff = speed - max;
            } else {
                console.log(`Driving ${speed} km/h in a ${max} zone`);
                return;
            }
            break;

        case 'interstate':
            max = 90;

            if (speed > max) {
                diff = speed - max;
            } else {
                console.log(`Driving ${speed} km/h in a ${max} zone`);
                return;
            }
            break;

        case 'city':
            max = 50;

            if (speed > max) {
                diff = speed - max;
            } else {
                console.log(`Driving ${speed} km/h in a ${max} zone`);
                return;
            }
            break;

        case 'residential':
            max = 20;

            if (speed > max) {
                diff = speed - max;
            } else {
                console.log(`Driving ${speed} km/h in a ${max} zone`);
                return;
            }
            break;
    }

    if (diff <= 20) {
        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${max} - speeding`);
    } else if (diff <= 40) {
        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${max} - excessive speeding`);
    } else {
        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${max} - reckless driving`);
    }
}