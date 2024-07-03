function constructionCrew(worker) {
    const requiredAmount = 0.1;

    if (worker.dizziness === true) {
        worker.levelOfHydrated += (worker.weight * requiredAmount) * worker.experience;
        worker.dizziness = false;
    }

    return worker;
}

let obj = constructionCrew({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
});

// let obj = constructionCrew({
//     weight: 120,
//     experience: 20,
//     levelOfHydrated: 200,
//     dizziness: true
// });

// let obj = constructionCrew({
//     weight: 95,
//     experience: 3,
//     levelOfHydrated: 0,
//     dizziness: false
// });

console.log(obj);