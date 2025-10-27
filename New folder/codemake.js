"use strict"


const weekDaysZ =["MON","TUE","WED","THU", "FRI","SAT","SUN"];

const openingHour  = {
        [weekDaysZ[3]]:{
            open :12,
            close :22,
        },
        [weekDaysZ[4]]:{
            open :11,
            close:23,
        },
        [weekDaysZ[5]] :{
            open  :0,
            close :22,
        }, 

    };
console.log(" hell0 wrold ")

const restaurant = {
    name: "Classico  Italiano",
    lcocation : "Via  Angelo Tavonti23, frenze , Italy ",
    categories : ["Italian ","pizzria", "vegetarian", "organic "],
    staterManeu : ["Focacca","Bruschetta","garlic Bread","caprese salad "],
    mainManeu : ["Pizza","pasta","Risotto"],



// es6 inhanced object litarale 
    openingHour,
    
    order :function(staterIndex,mainIndex){
        return [this.staterManeu[staterIndex],this.mainManeu[mainIndex]];       
    },
    orderDelivery({staterIndex = 1,mainIndex = 0,address,time = "20:00"}){
        console.log(`order received ${this.staterManeu[staterIndex]},and ${this.mainManeu[mainIndex]} will be deleverd
            to ${address} on ${time} `)

    },
    orderPasta:function (ing1,ing2,ing3) {
        console.log(`here is your pasta with ${ing1},${ing2},${ing3}`)
        
    },
    orderPizza : function(mainingredient,...ohterIngredient){
        console.log(mainingredient);
        console.log(ohterIngredient);

    }
} 


restaurant.orderDelivery({
    time:"20:30",
    address :"via del sole,21",
    mainIndex: 2,
    staterIndex: 2,

});


restaurant.orderDelivery({
     address :"via del sole,21",
     staterIndex:1,
})


// spread oparetor

const arrX = [7,8,9];
const badNewArr = [1,2,arrX[0],arrX[1],arrX[2]];
console.log(badNewArr)



// const newArr = [1,2,...arrx]

const notYourType = ["atle","batle","aphize"];

const teamJurassic =["madc titan","spiderman","ironman",...notYourType];

console.log(teamJurassic);

console.log(...teamJurassic);


 const newMenu = [...restaurant.mainManeu,"Gnocci"];
 console.log(newMenu);


const mainManeuCopy = [...restaurant.mainManeu];

const menuT =[...restaurant.staterManeu,...restaurant.mainManeu];

console.log(menuT);

const str = "uthsob";
const letters =[...str," ","u"];
console.log(letters);


//real wrold exmple 
const ingredients =[//prompt(`let's make a pastha with ingredient 1`),
                //    prompt(` ingredient 2`),
                //    prompt(` ingredient 3`)
                ]




console.log(ingredients);

restaurant.orderPasta(ingredients[0],ingredients[1],ingredients[2]);
restaurant.orderPasta(...ingredients)


const newResturant = {founder:"Geff Bessos",...restaurant, foundedIn:1998};

console.log(newResturant);


const restaurantCopy ={...restaurant};

restaurantCopy.name = "Restaurant Roma";
restaurantCopy.lcocation = "glaxy store";

console.log(restaurantCopy);
console.log(restaurant);



// destrucing 
  
const [a,b,...ohters] = [1,2,3,4,5,6,7,8,9];

console.log(a,b,ohters);


const [pizza, ,Risotto,...ohterFood]=[...restaurant.mainManeu,...restaurant.staterManeu];
console.log(pizza,Risotto,ohterFood);

 const {sat,...weekDays} = restaurant.openingHour;
 console.log(weekDays);




 // functions 

const add = function (...number) {
    let sum = 0;
    for(let i = 0; i<number.length; i++)sum+=number[i];
    console.log(sum);

};

add(2,5);
add(7,8,5,4,5);
add(5,4,8,6,7,9);

const x =[27,5,7];
add(...x);



restaurant.orderPizza("mushroom","onion","olives","spinach");


// or operator 
console.log("---or---");



console.log(3 || "uthosb"); //3
console.log(""|| "uthosb");//"uthosb"
console.log(true || 0);// ture 
console.log(undefined || null);// null because the it finds the first one is falsey 
// then read the last so it pirnt the lsast one 

console.log(undefined || 0 || "" || "hello"|| 23 || null); // hello as the first one is truethy 




// restaurant.numGuest = 23; 
// //ternay operator 
// const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;

// console.log(guest1);

// const guest2 = restaurant.numGuest || 10 ;

// console.log(guest2);

console.log("---and--");

console.log(0 && "batman");
console.log(7 && "batman");

console.log("hello" && 23 && null && "jonas" && undefined );// in this case the first falsi 
// value is null so it log it 



// parctical example 

if(restaurant.orderPizza){
    restaurant.orderPizza("mushroom","spinach")
};

restaurant.orderPizza && restaurant.orderPizza("mushroom","spiach");// js rad the fist value as it is true 
// then it will switch to the rest variable 





// restaurant.numGuest = 0;  


const guests = restaurant.numGuest || 10 ;
console.log(guests);
// nullish : null and undifined (not 0 and "");

const guestCorrent = restaurant.numGuest ?? 10;
console.log(guestCorrent);





const rest1 = {
    name  : "capri",
    //numGuest : 23,
    numGuest : 0,
};

const rest2 ={
    name : "la pizza",
    owner : "Giovani Rossi",
};


//assign defult guestnumber

//  I  frefere this line of code 
//  rest1.numGuest =rest1.numGuest || 10;
//  rest2.numGuest =rest2.numGuest || 10;

// // insted of this 
// rest1.numGuest ||= 10;
// rest2.numGuest ||=10;

// console.log(rest1);  
// console.log(rest2 );

// nullish qualisen operator 

 rest1.numGuest =rest1.numGuest ?? 10;
 rest2.numGuest =rest2.numGuest ?? 10;

console.log(rest1.numGuest);

console.log(rest2.numGuest);

// and operator 

rest1.owner = rest1.owner && "<ANONYMUS >"

rest2.owner = rest2.owner && "<ANONYMUS >"


console.log(rest1.owner);
console.log(rest2.owner);




const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};




// const player1 =game.players[0];
// const player2 =game.players[1];
// console.log(player1);
//  console.log(player2);

// console.log(game.players[0]);

const [player1,player2] = game.players;
console.log(player1);
console.log(player2);




 const [gk1,...flidplayer1] = player1;
 const [gk2,...flidplayer2] = player2;


console.log(gk1,flidplayer1);

console.log(gk2,flidplayer2);

// const {players} =game 

// console.log(players);

// const {players :[playerx, playerz]} =game ;

// console.log(playerx);
// console.log(playerz);


const allPlayers = [...player1,...player2];

console.log(allPlayers);


//4
const playerX = ["thiango","coutinho",'perisic'];

const players1final = [...player1,...playerX];

console.log(players1final);
// we can also write this 

const finalPayer1 =[...player1,"thiango","coutinho","perisic"];

console.log(finalPayer1)





const {team1,x:draw,team2 }=game.odds;

console.log(team1,draw,team2); 



// for fo loop 

const menu = [...restaurant.staterManeu,...restaurant.mainManeu];

for(const itam of menu){
    console.log(itam);
}


for(const [i,el] of menu.entries()){
    console.log(`${i+1}:${el}`);

}


// if(restaurant.openingHour.mon){
//     console.log(restaurant.openingHour.mon.open)
// }

// if(restaurant.openingHour.FRI){
//     console.log(restaurant.openingHour.FRI.open)
// }


if(restaurant.openingHour && restaurant.openingHour.mon){
    console.log(restaurant.openingHour.mon.open);
};

// with oeptional chainig 

console.log(restaurant.openingHour.mon?.open);

console.log(restaurant.openingHour.FRI?.open);

console.log(restaurant.openingHour?.THU?.open);




const days =["MON","TUE","WED","THU", "FRI","SAT","SUN"];

for(const dayT of days){
  const open = restaurant.openingHour[dayT]?.open ?? "colsed ";
  console.log(`we are open On days ${dayT}  at ${open}`)
}




const foo =  null || "unExpected syntax "

console.log(foo);



const buzz = 0 ?? 42;

// methods 
console.log(restaurant.orderRisatto ?.(0,1) ?? "Method is not avialble ");



const user = [{
    name : "utshob",
    Email: "uthosb.io"
}]

console.log(user[0]?.name ?? "user empty array ");
console.log(user[0]?.address ?? "user empty array");


console.log(user.length);



const proparties = Object.keys(openingHour);

console.log(proparties);


let openStr = (`we are open on ${proparties.length}`);

for(const days of proparties){
    openStr += `${days} , `
};
 

console.log(openStr);

// values 

const values = Object.values(openingHour);

console.log(values);


// entries object 

const entires = Object.entries(openingHour);

console.log(entires);

for(const [keys,{open,close}]  of entires ) {
    console.log(`on ${keys} we are open ${open}, and close at ${close} `);
}







for(const [i,value] of game.scored.entries()){
  console.log( `Goal ${i+1}:${value} `)
}; 




const oddsT = Object.values(game.odds);

console.log(oddsT);

//AVARAGE 

 let sum = 0;
for(const oddS of oddsT){
  console.log(sum +=oddS );
};

const avg = sum / oddsT.length;
console.log(avg)




// sets

const orderSet = new Set([
    "pizza",
    "risato",
    "pizza",
    "pasta",
    "risato"
]);




console.log(orderSet);
console.log(new Set("utshob"));


console.log(orderSet.size);

console.log(orderSet.has(" Bread"));
console.log(orderSet.has("risato"));
orderSet.add("Garlic Bread");

orderSet.delete("risato");
// orderSet.clear()
console.log(orderSet);


for(const order of orderSet){
    console.log(order)
};

// example 

const staff = ["waiter","chef","manager","waiter","chef","manager","chef"];

const staffUnique = [...new Set(staff)];

console.log(staffUnique);


console.log(new Set(staff).size);

//maps 
const rest = new Map();

rest.set("name","classican italiano");
rest.set(1,"firanze,italy");

console.log(rest.set(2,"lisbon,portugal"));

rest
.set("categoris",["Italian ","pizzria", "vegetarian", "organic "] )
.set("open",11)
.set("close", 23)
.set(true,"we are open :D")
.set(false,"we are closed :(")

console.log(rest.get("name"));
console.log(rest.get(true));


const time = 8;

rest.get(time > rest.get("open") && time<rest.get("close")) // ture . so it grab the .set(true,"we are open :D")

console.log( rest.get(time > rest.get("open") && time<rest.get("close")) );


console.log(rest.has("categoris"));
rest.delete(2);

// rest.clear();
const arr =[1,2];
rest.set(arr,"test");
rest.set(document.querySelector("h1"),"heading")
console.log(rest)
console.log(rest.size);



console.log(rest.get(arr));


const question =new Map([
    ["question","what is the best porgramming language in the world"],
    [1,"c"],
    [2,"java"],
    [3,"javascript"],
    ["correct", 3],
    [true,"correct"],
    [false,"try again"]
]);

console.log(question);


// convert a object to map 

console.log(Object.entries(openingHour));

const hoursMap = new Map(Object.entries(openingHour));

console.log(hoursMap);

//QUIZ

console.log(question.get("question"))
for(const [key,value] of question ){
    if(typeof key === 'number'){
        console.log(`answer ${key} : ${value}`)

    }
}

// const answer = Number (prompt("your answer"));
const answer = 3;
console.log(answer);

console.log(question.get(question.get("correct") === answer));

 

// convert map into array

console.log([...question]);

// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);




// 1. Create an array 'events' of the different game events that happened (no duplicates)
// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair.
//  So remove this event from the game events log.
// 3. Print the following string to the console: "An event happened, on average, every 9 minutes" 
// (keep in mind that a game has 90 minutes)
// 4. Loop over the events and log them to the console, marking whether it's in the first half or second half 
// (after 45 min) of the game, like this:
//       [FIRST HALF] 17: ⚽️ GOAL

// GOOD LUCK 😀
//  

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);




//1
const events = [...new Set(gameEvents.values())];

console.log(events);

//2
gameEvents.delete(64);
console.log(gameEvents);


console.log( `An event happened, on average, every   ${90 / gameEvents.size} minutes`);


//3
const time90 =  [...gameEvents.keys()].pop(); 

console.log(time90);//92


console.log(`An event happened, on average, every   ${time90 /gameEvents.size} minutes`)


// 4 
for(const [min, event ] of gameEvents){
    const half = min <= 45 ?  'FRIST' : "SECOND"
    console.log(`[ ${half}hlaf :] : ${min} ${event}`);

}






console.log("hello world "); 
console.log("hello world "); 


// const porject1 ={
//     name : "Comet coder",
//     member :30,
// };

// const porject12 = {
//     name :"my MADNESS",
//     onwer:"lutfor jaman utshob",
// }; 



// porject1.member = porject1.member || 10;

// porject12.member = porject12.member || 10;


// porject1.onwer = porject1.onwer || "uthosb";

// porject12.onwer = porject12.onwer || "uthosb";

// console.log(porject1);
// console.log(porject12);





 
 //functions
 // array destrutre

// const arr = [1,2,3];

// // const a = arr[0];
// // const b = arr[1];
// // const c = arr[2];
// // console.log(a,b,c)


// const [x,y,z] = arr

// console.log(x,y,z);

// let [main, , secondary] = restaurant.categories;
// console.log(main,secondary);

// // let temp = main;
// // main = secondary;
// // secondary = temp;

// // console.log(main,secondary);

// [main,secondary] = [secondary,main]

// console.log(main,secondary);


// // recive 2 retrun values from a function 
// const [stater,mainCourse] = restaurant.order(2,0);

// console.log(stater,mainCourse);

// const nested = [2,4,[5,6]];
// // const [i,,j] = nested;

// // console.log(i,j);

// const [i, ,[j,k]] = nested;

// console.log(i,j,k);


// // default values 

// const [p =1,q =1,r =1] =[8,9];

// console.log(p,q,r);


// const {name, categories,openingHour} = restaurant;

// console.log(name, categories,openingHour);

// const {name :restaurantName,categories : tags,openingHour: Hour} = restaurant;

// console.log(restaurantName,tags,Hour);

// const { menu = [], staterManeu : staters = []} = restaurant;
// console.log(menu,stater);

// //meutating variables 

// let a = 111;
// let b = 999;

// const obj = {a: 23,b: 7, c :14};

// ({a,b} = obj);

// console.log(a,b);
  

// let xt = 22;
// let xd =235;

// const td = {xt :20, xd :50, m:19 };

// ({xt,xd} = td );

// console.log(xt,xd);

// const {fri:{open:o ,close:c}} = openingHour;
// console.log(o,c);
