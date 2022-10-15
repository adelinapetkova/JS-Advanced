function constructionCrew(person){
    if(person.dizziness==true){
        person.levelOfHydrated+=0.1*person.experience*person.weight;
    }
    return person;
}

constructionCrew({ weight: 80,

    experience: 1,
    
    levelOfHydrated: 0,
    
    dizziness: true})