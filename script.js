// --------------- INVENTORY CODE --------------- //
console.log("window.location.href =", window.location.href);
console.log("window.location.search =", window.location.search);

function getInventoryString() {
  const params = new URLSearchParams(window.location.search);
  console.log("Inventory from URL:", params.get("inv")); // should log "001000"
  return params.get("inv") || "000000";
}

function loadInventory() {
  const inv = getInventoryString(); // e.g. "1010"

  if (inv[0] === "1")
    document.getElementById("inventory1").src = "Images/radish.png";
  if (inv[1] === "1")
    document.getElementById("inventory2").src = "Images/katana.png";
  if (inv[2] === "1")
    document.getElementById("inventory3").src = "Images/AztecPotion.png";
  if (inv[3] === "1")
    document.getElementById("inventory4").src = "Images/sea_serpent_scale.png";
  if (inv[4] === "1")
    document.getElementById("inventory5").src = "Images/frost_giant_tears.png";
  if (inv[5] === "1")
    document.getElementById("inventory6").src = "Images/power.png";
}

document.addEventListener("DOMContentLoaded", loadInventory);
// --------------- INVENTORY CODE --------------- //

const numberCycle = [
  "Images/number1cursive.png",
  "Images/number2cursive.png",
  "no/number3game.png",
  "thinnumbers/number4thin.png",
  "Images/number5cursive.png",
  "no/number6game.png",
  "thinnumbers/number7thin.png",
];

// Track the current index
let currentIndex = 0;

// Grab the image element
const square1 = document.getElementById("square1");

// Add click listener
square1.addEventListener("click", () => {
  // Move to next index
  currentIndex = (currentIndex + 1) % numberCycle.length;
  // Set the image src
  square1.src = numberCycle[currentIndex];

  //check for 275
  if (
    document.getElementById("square1").src.match("Images/number2cursive.png") &&
    document.getElementById("square2").src.match("no/number7game.png") &&
    document.getElementById("square3").src.match("thinnumbers/number5thin.png")
  ) {
    console.log("2 7 and are in the correct spot");
    showModal();
  }
});

// Define the images in the cycle in order
const numberCycle1 = [
  "no/number1game.png",
  "no/number2game.png",
  "thinnumbers/number3thin.png",
  "no/number4game.png",
  "Images/number5cursive.png",
  "thinnumbers/number6thin.png",
  "no/number7game.png",
];

// Track the current index
let currentIndex1 = 0;

// Grab the image element
const square2 = document.getElementById("square2");

// Add click listener
square2.addEventListener("click", () => {
  // Move to next index
  currentIndex1 = (currentIndex1 + 1) % numberCycle1.length;
  // Set the image src
  square2.src = numberCycle1[currentIndex1];

  if (
    document.getElementById("square1").src.match("Images/number2cursive.png") &&
    document.getElementById("square2").src.match("no/number7game.png") &&
    document.getElementById("square3").src.match("thinnumbers/number5thin.png")
  ) {
    console.log("2 7 and are in the correct spot");
    showModal();
  }
});

const numberCycle3 = [
  "thinnumbers/number1thin.png",
  "no/number2game.png",
  "Images/number3cursive.png",
  "thinnumbers/number4thin.png",
  "thinnumbers/number5thin.png",
  "no/number6game.png",
  "Images/number7cursive.png",
];

// Track the current index
let currentIndex3 = 0;

// Grab the image element
const square3 = document.getElementById("square3");

// Add click listener
square3.addEventListener("click", () => {
  // Move to next index
  currentIndex3 = (currentIndex3 + 1) % numberCycle3.length;
  // Set the image src
  square3.src = numberCycle3[currentIndex3];
  if (
    document.getElementById("square1").src.match("Images/number2cursive.png") &&
    document.getElementById("square2").src.match("no/number7game.png") &&
    document.getElementById("square3").src.match("thinnumbers/number5thin.png")
  ) {
    console.log("2 7 and are in the correct spot");
    //showModal();
    document.getElementById("inventory1").src = "Images/radish.png";
    document.getElementById("inventory2").src = "Images/katana.png";
    // this goes after your images are added to your inventory on teh screen
    // Update inventory string
    let inv = getInventoryString().split("");
    inv[0] = "1"; // slot 1 collected
    inv[1] = "1"; // slot 2 collected
    const newInv = inv.join("");
    console.log("Updated inventory:", newInv);

    // Redirect with UPDATED inventory
    setTimeout(function () {
      window.location.replace(`https://nnn9t3.csb.app/?inv=${newInv}`);
    }, 2000);
  }
});

function stoneStatue() {
  document.getElementById("lion").src = "Images/number2cursive.png";
}

function ancientbowl() {
  document.getElementById("ancient").src = "thinnumbers/number5thin.png";
}

function paperlantern() {
  document.getElementById("japanese").src = "no/number7game.png";
}

function hideModal() {
  document.getElementById("myModal").style.display = "none";
}
function showModal() {
  document.getElementById("myModal").style.display = "flex";
}
function vault() {
  window.location.replace(" https://nnn9t3.csb.app/");
}
// Close the modal
function closeBruhModal() {
  const modal = document.getElementById("bruhModal");
  modal.classList.remove("show");
  modal.classList.add("hide");
}
