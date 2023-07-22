
// Get references to elements in the HTML
const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');

// Initialize variables for game state and words
let play = false;
let newWords = " ";
let randomWords = " ";

// List of BGMI items
const bgmiGuns = [
    "m416",
    "akm",
    "scar-l",
    "ump45",
    "vector",
    "m762",
    "m249",
    "aug-a3",
    "beryl",
    "m762",
    "dp-28",
    "g36c",
    "groza",
    "qbz",
    "mk14",
    "m24",
    "awm",
    "kar98k",
    "win94",
    "s686",
    "s1897",
    "s12k",
    "crossbow",
    "p18c",
    "p92",
    "r1895",
    "r45",
    "sawed-off",
    "skorpion",
    "mini-14",
    "qbu",
    "vss",
    "slr",
    "tommy-gun",
    "thompson",
    "micro-uzi",
    "uzi",
    "mk47",
    "pp-19",
    "bizon",
    "mp5k",
    "bazooka",
    "panzerfaust",
    "molotov-cocktail",
    "grenade",
    "smoke",
    "stun",
    "flashbang",
    "med-kit",
    "first-aid-kit",
    "bandages",
    "energy-drink",
    "painkiller",
    "syringe",
    "gas-can",
    "ammo-pack",
    "level-1",
    "level-2",
    "backpack",
    "level-3",
    "helmet",
    "vest",
    "ghillie-suit",
    "red dot",
    "holographic",
    "2x",
    "scope",
    "3x",
    "4x",
    "6x",
    "8x",
    "canted",
    "sight",
    "compensator",
    "flash",
    "hider",
    "suppressor",
    "extended",
    "mag",
    "angled",
    "grip",
    "vertical",
    "half",
    "thumb",
    "light",
    "sticker",
    "pan",
    "machete",
    "crowbar",
    "frying-pan",
    "ammo",
    "5.56mm",
    "7.62mm",
    "300 magnum",
    "9mm",
    "12 gauge",
    "bolt",
    "crossbow",
    "bolt",
    "gas",
    "mask",
    "night",
    "vision",
    "goggles",
    "shield",
    "throwables",
    "frag",
    "smoke",
    "stun",
    "grenade",
    "molotov",
    "cocktail",
    "m67",
    "adhesive",
    "tape",
    "repair-kit",
    "vehicle",
    "spawn",
    "flare",
    "portable",
    "closet",
    "binoculars",
    "parachute",
    "flare",
    "gun",
    "air",
    "strike",
    "beacon",
    "duckbill",
    "bullet",
    "loops",
    "kar98k",
    "s1897",
    "s686",
    "win94",
    "choke",
    "s1897",
    "s686",
    "s12k",
    "tactical",
    "stock",
    "m416",
    "scar-l",
    "sks",
    "cheek",
    "pad",
    "dmrs",
    "bullet",
    "loops",
    "dmrs",
    "exo",
    "suit",
    "5.45mm",
    "5.56mm",
    "45acp",
    "357magnum",
    "flare",
    "9mm",
    "magazine",
    "45acp",
    "extended",
    "quickdraw",
    "mag",
    "smg",
    "dmr/sr",
    "heavy",
    "barrel",
    "dmrs",
    "srs",
    "jungle",
    "ars",
    "duckbill",
    "s1897",
    "level4",
    "helmet"
  ];
  

// Function to create a new random word from bgmiGuns
const createNewWord = () => {
    let ranNum = Math.floor(Math.random() * bgmiGuns.length);
    let newTempRandomName = bgmiGuns[ranNum];
    return newTempRandomName;
};
// Function to scramble the letters of a word randomly
const scrambleWord = (arr) => {
    let newArr = arr.slice(); // Create a copy of the original array
    for (let i = newArr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = newArr[i];
        newArr[i] = newArr[j];
        newArr[j] = temp;
    }
    return newArr.join(""); // Join the array elements to form a string
};

// Event listener for the button click
btn.addEventListener('click', function () {
    if (!play) {
        // Start a new game
        play = true;
        btn.innerHTML = "Guess";
        guess.classList.toggle('hidden');

        // Get a new random word and scramble it
        newWords = createNewWord();
        randomWords = scrambleWord(newWords.split(""));

        // Display the scrambled word for the user to guess
        msg.innerHTML = `What Do You Call It In BGMI: ${randomWords}`;
    } else {
        // User's guess is submitted
        let tempWord = guess.value.trim(); // Remove any extra spaces

        if (tempWord === newWords) {
            // Correct guess
            play = false;
            msg.innerHTML = `Awesome, it's ${newWords}`;
            btn.innerHTML = "Start again";
            guess.classList.toggle('hidden');
            guess.value = " ";
        } else {
            msg.innerHTML = `WRONG TRY, it's: ${newWords}`;
            play = false;
            btn.innerHTML = "Start again";
            guess.classList.toggle('hidden');
            guess.value = " ";
        }
    }
});