function constructionCrew(worker) {
    const requiredAmount = 0.1;

    if (worker.dizziness === true) {
        worker.levelOfHydrated += (worker.weight * requiredAmount) * worker.experience;
        worker.dizziness = false;
    }

    return worker;
}