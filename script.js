/*
  365 DAYS WITH GOD

  Each entry has:

  reference = Bible reference

  message = short reminder

  personal = personal message

  You can add/change the references
  whenever you want.
*/


const bibleDays = [

  {
    reference: "சங்கீதம் 23:1",
    message: "கர்த்தர் உன் மேய்ப்பர்.",
    personal: "இன்று எதுவாக இருந்தாலும், தேவன் உன்னோடு இருக்கிறார்."
  },

  {
    reference: "நீதிமொழிகள் 3:5–6",
    message: "கர்த்தரை முழு இருதயத்தோடு நம்பு.",
    personal: "எல்லா வழிகளிலும் அவரை நினைத்துக்கொள்."
  },

  {
    reference: "ஏசாயா 41:10",
    message: "பயப்படாதே; நான் உன்னோடு இருக்கிறேன்.",
    personal: "இன்றைய நாளை தனியாக எதிர்கொள்ள வேண்டியதில்லை."
  },

  {
    reference: "பிலிப்பியர் 4:6–7",
    message: "எல்லாவற்றையும் ஜெபத்தில் தேவனிடம் கொண்டு வா.",
    personal: "உன் கவலைகளை அவரிடம் கொடுத்து, அவருடைய சமாதானத்தை நினைவில் கொள்."
  },

  {
    reference: "எரேமியா 29:11",
    message: "உனக்காக தேவன் வைத்திருக்கும் திட்டம் உண்டு.",
    personal: "உன் எதிர்காலத்தைப் பற்றி நம்பிக்கையோடு இரு."
  },

  {
    reference: "சங்கீதம் 46:1",
    message: "தேவன் நமக்கு அடைக்கலமும் பெலனுமாயிருக்கிறார்.",
    personal: "நாள் கடினமாக இருந்தாலும், நீ ஒரு பாதுகாப்பான இடத்தைப் பெற்றிருக்கிறாய்."
  },

  {
    reference: "மத்தேயு 11:28",
    message: "சோர்வுற்றவர்களே, என்னிடத்தில் வாருங்கள்.",
    personal: "சிறிது நேரம் ஓய்வெடுப்பதும் சரிதான்."
  },

  {
    reference: "ரோமர் 8:28",
    message: "தேவனை நேசிப்பவர்களுக்கு எல்லாம் நன்மைக்கேதுவாக நடக்கிறது.",
    personal: "இப்போது புரியாத விஷயங்களுக்கும் ஒரு நாள் அர்த்தம் தெரியும்."
  },

  {
    reference: "சங்கீதம் 121:1–2",
    message: "என் உதவி கர்த்தரிடத்திலிருந்து வருகிறது.",
    personal: "மேலே பார். உதவி உனக்கு வரும்."
  },

  {
    reference: "சங்கீதம் 118:24",
    message: "இது கர்த்தர் உண்டாக்கின நாள்.",
    personal: "இன்றைய நாளில் இருக்கும் சிறிய அழகையும் ரசிக்க மறக்காதே."
  }

];


/*
  IMPORTANT:

  We need 365 days.

  Until you add all 365 references,
  this function repeats the available
  references/messages.

  Replace this with your complete
  365-entry list later.
*/

const totalDays = 365;

let currentDay = 1;


/* ---------------- ELEMENTS ---------------- */

const dayElement =
  document.getElementById("day");

const referenceElement =
  document.getElementById("reference");

const messageElement =
  document.getElementById("message");

const personalElement =
  document.getElementById("personal");

const progressText =
  document.getElementById("progressText");

const percentageElement =
  document.getElementById("percentage");

const progressBar =
  document.getElementById("progressBar");

const previousBtn =
  document.getElementById("previousBtn");

const nextBtn =
  document.getElementById("nextBtn");

const verseCard =
  document.querySelector(".bible");


/* ---------------- SCREEN ---------------- */

function showScreen(id) {

  document
    .querySelectorAll(".screen")
    .forEach(screen => {

      screen.classList.remove("active");

    });

  document
    .getElementById(id)
    .classList.add("active");
}


/* ---------------- START ---------------- */

function startJourney() {

  currentDay = 1;

  showScreen("main");

  showDay();

}


/* ---------------- SHOW DAY ---------------- */

function showDay() {

  /*
    Select one of the available entries.

    This allows the website to run through
    all 365 days even before you paste the
    complete 365 references.
  */

  const index =
    (currentDay - 1) %
    bibleDays.length;

  const data =
    bibleDays[index];


  dayElement.textContent =
    "நாள் " + currentDay;


  referenceElement.textContent =
    data.reference;


  messageElement.textContent =
    data.message;


  personalElement.textContent =
    data.personal;


  progressText.textContent =
    `Day ${currentDay} of ${totalDays}`;


  const percentage =
    Math.round(
      (currentDay / totalDays) * 100
    );


  percentageElement.textContent =
    percentage + "%";


  progressBar.style.width =
    percentage + "%";


  /*
    Animation
  */

  verseCard.classList.remove("page-change");

  void verseCard.offsetWidth;

  verseCard.classList.add("page-change");


  previousBtn.disabled =
    currentDay === 1;


  if (currentDay === totalDays) {

    nextBtn.textContent =
      "Finish ✨";

  } else {

    nextBtn.textContent =
      "Next Day →";

  }

}


/* ---------------- NEXT ---------------- */

function nextDay() {

  if (currentDay < totalDays) {

    currentDay++;

    showDay();

  } else {

    showScreen("final");

    createGrandEffect();

  }

}


/* ---------------- PREVIOUS ---------------- */

function previousDay() {

  if (currentDay > 1) {

    currentDay--;

    showDay();

  }

}


/* ---------------- RESTART ---------------- */

function restartJourney() {

  currentDay = 1;

  showScreen("main");

  showDay();

}


/* ---------------- GRAND EFFECT ---------------- */

function createGrandEffect() {

  const effect =
    document.createElement("div");

  effect.className =
    "grand-effect";

  document.body.appendChild(effect);


  for (let i = 0; i < 35; i++) {

    const star =
      document.createElement("span");

    star.innerHTML =
      i % 2 === 0 ? "✦" : "♡";

    star.style.left =
      Math.random() * 100 + "vw";

    star.style.top =
      Math.random() * 100 + "vh";

    star.style.animationDelay =
      Math.random() * .8 + "s";

    effect.appendChild(star);

  }


  setTimeout(() => {

    effect.remove();

  }, 3000);

}


/* ---------------- INITIAL ---------------- */

showDay();