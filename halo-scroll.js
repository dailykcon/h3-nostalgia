const caseCards = [...document.querySelectorAll(".case-card")];
const previewFrame = document.querySelector(".preview-frame");
const previewTitle = document.querySelector(".case-preview h2");
const previewSummary = document.querySelector(".case-preview > span");
const previewFacts = [...document.querySelectorAll(".case-preview dd")];
const openCaseLink = document.querySelector(".open-case");

const caseData = {
  lightsticks: {
    title: "3D Printed LED Lightsticks",
    summary: "A self-directed product experiment that turned custom 3D printed concert lightsticks into a fast-moving Etsy storefront with about 600 sales in five months.",
    thumb: "thumb-lightsticks",
    href: "case-lightsticks.html",
    facts: ["Founder / Product Designer", "Physical product, storefront UX, fulfillment", "Dedicated case study page"],
  },
  assassination: {
    title: "Assassination Classroom Student Mobile App Mockup",
    summary: "A playful mobile app concept built around classroom identity, student ranking, event reminders, and a visual system inspired by the tone of the series.",
    thumb: "thumb-assassination",
    href: "case-assassination-classroom.html",
    facts: ["Mobile UI Design", "Fan app concept, dashboard, ranking flows", "Dedicated case study page"],
  },
  doterra: {
    title: "doTERRA Essential Oils App Redesign",
    summary: "A wellness app redesign focused on onboarding, guided personalization, and making oil education easier to browse without overwhelming new users.",
    thumb: "thumb-doterra",
    href: "case-doterra.html",
    facts: ["UX/UI Design", "Onboarding, search, product education", "Dedicated case study page"],
  },
  "la-fitness": {
    title: "LA Fitness Mobile Redesign",
    summary: "A cleaner member experience for finding classes, managing check-ins, and making everyday fitness tasks feel less fragmented.",
    thumb: "thumb-la-fitness",
    href: "case-la-fitness.html",
    facts: ["UX/UI Design", "Mobile IA, booking flows, usability", "Dedicated case study page"],
  },
};

function showCase(caseId) {
  const selectedCase = caseData[caseId] || caseData.lightsticks;

  caseCards.forEach((card) => {
    card.classList.toggle("active", card.dataset.case === caseId);
  });

  previewFrame.className = `preview-frame ${selectedCase.thumb}`;
  previewTitle.textContent = selectedCase.title;
  previewSummary.textContent = selectedCase.summary;
  previewFacts.forEach((fact, index) => {
    fact.textContent = selectedCase.facts[index] || "";
  });
  openCaseLink.href = selectedCase.href;
}

document.querySelector(".case-list").addEventListener("click", (event) => {
  const card = event.target.closest(".case-card");

  if (!card) {
    return;
  }

  event.preventDefault();
  showCase(card.dataset.case);
});
