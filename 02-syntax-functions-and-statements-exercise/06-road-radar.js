function roadRadar(speed, area) {
    const motorwayMax = 130;
    const interstateMax = 90;
    const cityMax = 50;
    const residentialMax = 20;

    switch (area) {
        case 'motorway':
            if (speed > motorwayMax) {
                let motorwayDiff = speed - motorwayMax;

                if (motorwayDiff <= 20) {
                    console.log(`The speed is ${motorwayDiff} km/h faster than the allowed speed of ${motorwayMax} - speeding`);
                } else if (motorwayDiff <= 40) {
                    console.log(`The speed is ${motorwayDiff} km/h faster than the allowed speed of ${motorwayMax} - excessive speeding`);
                } else {
                    console.log(`The speed is ${motorwayDiff} km/h faster than the allowed speed of ${motorwayMax} - reckless driving`);
                }

            } else {
                console.log(`Driving ${speed} km/h in a ${motorwayMax} zone`);
            }
            break;

        case 'interstate':
            if (speed > interstateMax) {
                let interstateDiff = speed - interstateMax;

                if (interstateDiff <= 20) {
                    console.log(`The speed is ${interstateDiff} km/h faster than the allowed speed of ${interstateMax} - speeding`);
                } else if (interstateDiff <= 40) {
                    console.log(`The speed is ${interstateDiff} km/h faster than the allowed speed of ${interstateMax} - excessive speeding`);
                } else {
                    console.log(`The speed is ${interstateDiff} km/h faster than the allowed speed of ${interstateMax} - reckless driving`);
                }

            } else {
                console.log(`Driving ${speed} km/h in a ${interstateMax} zone`);
            }
            break;

        case 'city':
            if (speed > cityMax) {
                let cityDiff = speed - cityMax;

                if (cityDiff <= 20) {
                    console.log(`The speed is ${cityDiff} km/h faster than the allowed speed of ${cityMax} - speeding`);
                } else if (cityDiff <= 40) {
                    console.log(`The speed is ${cityDiff} km/h faster than the allowed speed of ${cityMax} - excessive speeding`);
                } else {
                    console.log(`The speed is ${cityDiff} km/h faster than the allowed speed of ${cityMax} - reckless driving`);
                }

            } else {
                console.log(`Driving ${speed} km/h in a ${cityMax} zone`);
            }
            break;

        case 'residential':
            if (speed > residentialMax) {
                let residentialDiff = speed - residentialMax;

                if (residentialDiff <= 20) {
                    console.log(`The speed is ${residentialDiff} km/h faster than the allowed speed of ${residentialMax} - speeding`);
                } else if (residentialDiff <= 40) {
                    console.log(`The speed is ${residentialDiff} km/h faster than the allowed speed of ${residentialMax} - excessive speeding`);
                } else {
                    console.log(`The speed is ${residentialDiff} km/h faster than the allowed speed of ${residentialMax} - reckless driving`);
                }

            } else {
                console.log(`Driving ${speed} km/h in a ${residentialMax} zone`);
            }
            break;
    }
}