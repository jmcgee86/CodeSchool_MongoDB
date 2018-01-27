// create database
// use myGame

//create collection called monsters and add first document
    // db.monsters.insert(
    //     {
    //         "name": "Frank",
    //         "health": "good",
    //         "lastFought": new Date (2018, 0, 27),
    //         "attacks": ["bite", "scratch", "kick"],
    //         "stats": {"attack": 5, "defense": 10}
    //     })

//add second document to monsters collection
    // db.monsters.insert(
    //     {
    //         "name": "Demogorgan",
    //         "health": "ppor",
    //         "lastFought": new Date (2017, 11, 20),
    //         "attacks": ["inhabit", "throw", "choke"],
    //         "stats": {"attack": 10, "defense": 2}
    //     })

//find monster based on a name 
db.monsters.find({"name": "Frank"})

//find monster based on one of the attacks
db.monsters.find({"attacks": "bite"})

//find monster based on defense stat

db.monsters.find({"stats.defense": 2})


function addMonster(name, health, lastFought, attacks, stats, db){
    db.monsters.insert({
        "name": name,
        "health": health,
        "lastFought": lastFought,
        "attacks": attacks,
        "stats":{"attack": stats.attack, 
            "defense": stats.defense
        }
    })
}

console.log(db.monsters.find());