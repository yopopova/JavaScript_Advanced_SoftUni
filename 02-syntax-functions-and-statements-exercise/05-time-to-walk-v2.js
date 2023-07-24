function timeToWalk(steps, footprint, speedKmH) {
    let distance = steps * footprint;
    let speed = (speedKmH * 1000) / 3600;

    let rest = Math.floor(distance / 500) * 60;
    let time = (distance / speed) + rest;

    let minutes = Math.floor(time / 60).toString().padStart(2, '0');
    let hours = Math.floor(time / 3600).toString().padStart(2, '0');
    let seconds = Math.ceil(time % 60).toString().padStart(2, '0');

    console.log(`${hours}:${minutes}:${seconds}`);
}