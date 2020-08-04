const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman", 
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    //let name,image,strength,type;
    //let emp=[];
    let detailedPlayers = {};
    // Create players using for loop
    // Type your code here
    for(let i=0;i<players.length;i++){
        if(i%2==0) type="hero";
            else type="villian";
        detailedPlayers={name:PLAYERS[i],image:"images/super-"+[i+1]+".png",strength:getRandomStrength(),
        type:type[i]}; 
    }
            return detailedPlayers;
}

// getting random strength
const getRandomStrength = () =>{ Math.ceil(Math.random()*100);
    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()
}

const buildPlayers = (players, type) => {
    let fragment = '';

    
    for(let i=0;i<players.length;i++){
        const p=document.createElement('div');
    }
    // Loop through players and accumulate HTML template
    // depending of type of player(hero|villain)
    // Type your code here

    return fragment;
}
// Display players in HTML

const viewPlayers = (players) => {

    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');

}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}