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
const initPlayers = (players) => {
// initialize players with image and strength
//let emp = [];
  let detailedPlayers = []; //{name,image,strength,type};
  // Create players using for loop
  // Type your code here
  for (let i = 0; i < players.length; i++) {    
    detailedPlayers.push({
      name: players[i],
      image: "images/super-" + [i + 1] + ".png",
      strength: getRandomStrength(),
      type: (i % 2 == 0)? "hero" : "villain"
    });
    console.log(detailedPlayers);
  return detailedPlayers;
}
}

// getting random strength
const getRandomStrength = () => {
  return Math.ceil(Math.random() * 100);
  // Return a random integer (0,100]
  // Note: You can use Math.random() and Math.ceil()
};
function typ(t,pl){
  
}
const buildPlayers = (players, type) => {
//   let fragment = document.innerHTML = `
//   ${players.filter((type,players)=> {
//     if(players.type == type) {
//       `<div class="player">
//   <img src=${players.image}>
//   <div class="name">${players.name}</div>
//   <div class="strength">${players.strength}</div>
// </div>`}})}`
let fragment = document.createElement("div");
fragment.classList.add('team');
let player,img,name,strength;
for (let i = 0; i < players.length; i++) {
  if (players[i].type == type) {
     img = document.createElement("img");
    img.setAttribute("src", `${players[i].image}`);
    name = document.createElement("div");
    name.append(`${players[i].name}`);
    strength = document.createElement("div");
    strength.append(`${players[i].strength}`);
    fragment.appendChild(img);
    fragment.appendChild(name);
    fragment.appendChild(strength);
  }
}
fragment = fragment.innerHTML;
return fragment;
};
// Display players in HTML

const viewPlayers = (players) => {

    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');

}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}