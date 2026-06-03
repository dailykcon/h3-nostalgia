const caseCards = [...document.querySelectorAll(".case-card")];
const previewFrame = document.querySelector(".preview-frame");
const previewTitle = document.querySelector(".case-preview h2");
const previewSummary = document.querySelector(".case-preview > span");
const previewFacts = [...document.querySelectorAll(".case-preview dd")];
const openCaseLink = document.querySelector(".open-case");

const caseData = {
  "la-fitness": {
    title: "LA Fitness Mobile Redesign",
    summary: "A cleaner member experience for finding classes, managing check-ins, and making everyday fitness tasks feel less fragmented.",
    thumb: "thumb-orbit",
    href: "case-la-fitness.html",
    facts: ["UX/UI Design", "Mobile IA, booking flows, usability", "Dedicated case study page"],
  },
  signal: {
    title: "Signal Health",
    summary: "A clinical workflow concept for helping teams scan patient status, surface priority, and reduce handoff ambiguity.",
    thumb: "thumb-signal",
    href: "case-signal.html",
    facts: ["Product Design", "Clinical dashboards, status clarity, triage", "Dedicated case study page"],
  },
  field: {
    title: "Field Notes AI",
    summary: "A research synthesis workspace that turns interviews, observations, and messy notes into clearer product direction.",
    thumb: "thumb-field",
    href: "case-field-notes.html",
    facts: ["UX Strategy", "AI-assisted research, synthesis, collaboration", "Dedicated case study page"],
  },
  atlas: {
    title: "Atlas Checkout",
    summary: "A commerce flow focused on trust, decision confidence, and reducing friction at the highest-intent moment.",
    thumb: "thumb-atlas",
    href: "case-atlas.html",
    facts: ["Interaction Design", "Checkout UX, conversion, trust signals", "Dedicated case study page"],
  },
};

function showCase(caseId) {
  const selectedCase = caseData[caseId] || caseData["la-fitness"];

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
