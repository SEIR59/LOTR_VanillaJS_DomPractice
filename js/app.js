console.log("Linked.");
const body = document.querySelector("body");
console.log(body);
// Dramatis Personae
const hobbits = [
  `Frodo Baggins`,
  `Samwise "Sam" Gamgee`,
  `Meriadoc "Merry" Brandybuck`,
  `Peregrin "Pippin" Took`,
];

const buddies = ["Gandalf the Grey", "Legolas", "Gimli", "Strider", "Boromir"];

const baddies = ["Sauron", "Saruman", "The Uruk-hai", "Orcs"];

const lands = ["The-Shire", "Rivendell", "Mordor"];

// ============
// Chapter 1
// ============

function makeMiddleEarth() {
  console.log("1: makeMiddleEarth");

  const middleEarthEL = document.createElement("section");
  //console.log(middleEarthEL)o
  middleEarthEL.setAttribute("id", "middle-earth");

  lands.forEach((land) => {
    const landElement = document.createElement("article");
    landElement.setAttribute("id", `${land}`);
    const landTitleTag = document.createElement("h1");
    landTitleTag.innerText = `${land}`;
    landElement.append(landTitleTag);
    middleEarthEL.appendChild(landElement);
  });

  body.appendChild(middleEarthEL);
  console.log(middleEarthEL);
}
// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

function makeHobbits() {
  console.log("2: makeHobbits");
  const hobbitsCrew = document.createElement("ul");

  const theShire = document.getElementById("The-Shire");
  hobbitsCrew.id = "hobbitsid";

  //console.log(hobbitsCrew)

  hobbits.forEach((names) => {
    const hobbitsClass = document.createElement("li");
    hobbitsClass.setAttribute("class", "hobbit");
    hobbitsCrew.appendChild(hobbitsClass);
    hobbitsClass.innerText = `${names}`;
    body.appendChild(hobbitsCrew);
  });
  
  theShire.appendChild(hobbitsCrew);
}

// display an `unordered list` of hobbits in the shire

// give each hobbit a class of `hobbit`

// hint: create a 'ul' outside the loop into which to append the 'li's

// hint: get 'The-Shire' by using its id

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============

function keepItSecretKeepItSafe() {
  console.log("3: keepItSecretKeepItSafe");

  // create a div with an id of `'the-ring'`
  const theRing = document.createElement("div");
  theRing.id = "the-ring";
  // give the div a class of `'magic-imbued-jewelry'`
  theRing.className = "magic-imbued-jewelry";
   //hobbitsid = document.querySelector(hobbitsid);
  // add the ring as a child of `Frodo`
  let frodo = document.getElementsByClassName("hobbit")[0]
 console.log(frodo)
  frodo.appendChild(theRing);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============

function makeBaddies() {
  console.log("4: makeBaddies");

  // display an unordered list of baddies in Mordor
let mordor = document.getElementById("Mordor")
const baddiesCrew = document.createElement("ul");
baddiesCrew.id = "baddieid";
//console.log(hobbitsCrew)

baddies.forEach((name) => {
  const baddie = document.createElement("li");
  baddie.setAttribute("class", "baddie");
  baddiesCrew.appendChild(baddie);
  baddie.innerText = `${name}`;
  body.appendChild(baddiesCrew);
});

mordor.appendChild(baddiesCrew);
  // give each of the baddies a class of "baddy"

  // remember to append them to Mordor
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============

function makeBuddies() {
  console.log("5: makeBuddies");
  let rivendell = document.getElementById("Rivendell")
  const buddiesCrew = document.createElement("ul");
  buddiesCrew.id = "buddiesid";
  //console.log(hobbitsCrew)
  
  buddies.forEach((name) => {
	const buddie = document.createElement("aside");
	buddie.setAttribute("class", "buddie");
	buddiesCrew.appendChild(buddie);
	buddie.innerText = `${name}`;
	body.appendChild(buddiesCrew);
  });
  
  rivendell.appendChild(buddiesCrew);
  // create an `aside` tag

  // put an `unordered list` of the `'buddies'` in the aside

  // insert your aside as a child element of `rivendell`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

function leaveTheShire() {
  console.log("6: leaveTheShire");

  let hobbitsCrew = document.getElementById("hobbitsid")
  console.log(hobbitsCrew);
  // assemble the `hobbits` and move them to `rivendell`
  const rivendell = document.getElementById("Rivendell");
  console.log(rivendell);
  rivendell.appendChild(hobbitsCrew);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============

function beautifulStranger() {
  console.log("7: beautifulStranger");
	let buddiesCrew = document.getElementById('buddiesid');
	console.log(buddiesCrew)
	let strider = document.getElementsByClassName('buddie')[3];
	console.log(strider)
	strider.innerText = 'Aragon';
  // change the `'Strider'` text to `'Aragorn'`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============

function forgeTheFellowShip() {
  console.log("8: forgeTheFellowShip");
  // create a new div called `'the-fellowship'` within `rivendell`
  const theFellowship = document.createElement('div');
  let rivendell = document.getElementById('Rivendell');
	theFellowship.setAttribute('id', 'the-fellowship');
	//console.log(theFellowship)
	rivendell.appendChild(theFellowship);

  // add each `hobbit` and `buddy` one at a time to `'the-fellowship'
 const buddiesAndHobbits = rivendell.querySelectorAll('li')
	for(let i = 0; i < buddiesAndHobbits.length; i++){
    alert(`${buddiesAndHobbits[i].innerText} have joined your party`)
  }
  theFellowship.append(buddiesCrew);
}
	
  // after each character is added make an alert that they // have joined your party

  // NOTE: This won't change what you see in the browser.  Use your Elements tab of your Inspector tools to make sure that it worked.


// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============

function theBalrog() {
  console.log("9: theBalrog");
  // change the `'Gandalf'` text to `'Gandalf the White'`
  // apply the following style to the element, make the // background 'white', add a grey border
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============

function hornOfGondor() {
  console.log("10: hornOfGondor");
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // Remove `Boromir` from the Fellowship
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============

function itsDangerousToGoAlone() {
  console.log("11: itsDangerousToGoAlone");
  // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
  // add a div with an id of `'mount-doom'` to `Mordor`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============

function weWantsIt() {
  console.log("12: weWantsIt");
  // Create a div with an id of `'gollum'` and add it to Mordor
  // Remove `the ring` from `Frodo` and give it to `Gollum`
  // Move Gollum into Mount Doom
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============

function thereAndBackAgain() {
  console.log("13: thereAndBackAgain");
  // remove `Gollum` and `the Ring` from the document
  // Move all the `hobbits` back to `the shire`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".

// =====================================
// Don't change anything below this line
// =====================================

// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

document.getElementById("chapter-1").addEventListener("click", makeMiddleEarth);
document.getElementById("chapter-2").addEventListener("click", makeHobbits);
document
  .getElementById("chapter-3")
  .addEventListener("click", keepItSecretKeepItSafe);
document.getElementById("chapter-4").addEventListener("click", makeBaddies);
document.getElementById("chapter-5").addEventListener("click", makeBuddies);
document.getElementById("chapter-6").addEventListener("click", leaveTheShire);
document
  .getElementById("chapter-7")
  .addEventListener("click", beautifulStranger);
document
  .getElementById("chapter-8")
  .addEventListener("click", forgeTheFellowShip);
document.getElementById("chapter-9").addEventListener("click", theBalrog);
document.getElementById("chapter-10").addEventListener("click", hornOfGondor);
document
  .getElementById("chapter-11")
  .addEventListener("click", itsDangerousToGoAlone);
document.getElementById("chapter-12").addEventListener("click", weWantsIt);
document
  .getElementById("chapter-13")
  .addEventListener("click", thereAndBackAgain);
document.getElementById("all-chapters").addEventListener("click", () => {
  makeMiddleEarth();
  makeHobbits();
  keepItSecretKeepItSafe();
  makeBaddies();
  makeBuddies();
  leaveTheShire();
  beautifulStranger();
  forgeTheFellowShip();
  theBalrog();
  hornOfGondor();
  itsDangerousToGoAlone();
  weWantsIt();
  thereAndBackAgain();
});
