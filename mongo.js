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

//level2

var mongo = function(db){
//Write the command that will find all monsters with an attack lower than 10
    db.monsters.find({"stats.attack": {"$lt": 10}})
//Write the command that will find all monsters with a level above 5 but below 15 inclusive
    db.monsters.find({"level": {"$gt": 5, "$lte": 15}})
//Write the command to find monsters that do not have the “bite” attack.
    db.monsters.find({"attacks": {"$ne": "bite"}})
//Write the command to find monsters with levels less than 6 but only return the name, level and health attributes
    db.monsters.find(
        {"level": {"$lt": 6}},
        {"name": true, "level": true, "health": true}
        )
//Write the command to find all monsters who attack is between 10 and 20 but do not include the monsters health or style
    db.monster.find(
        {"stats.attack": {"$gt":10, "$lt": 20 }},
        {"health": false, "style": false}
        )
//Write the command to find out how many monsters are in the collection.
    db.monsters.find().count()
//Write the command to sort the collection by the monsters level with the highest level at the top and the lowest at the bottom
    db.monsters.find().sort({"level": -1})
};