let birthDate = new Date("2004-03-14");
let webDate = new Date("2022-07-01");
let now = new Date();
const weeks = 52;
let msInWeek = 7 * 24 * 3600 * 1000;
let livedWeeks = (now - birthDate) / msInWeek;
let webWeeks = (now - webDate) / msInWeek;
function renderWeek(number) {
  let node = document.createElement("div");

  node.classList.add("timeline__week");

  if (number <= livedWeeks) {
    node.classList.add("timeline__week_passed");
  }
  if (number >= livedWeeks - webWeeks && number <= livedWeeks) {
    node.classList.add("timeline__week_worked");
  }
  return node;
}
function renderTimeLine(targetNode) {
  for (let week = 0; week < weeks * 25; week++) {
    targetNode.appendChild(renderWeek(week));
  }
}
window.addEventListener("load", function () {
  renderTimeLine(document.querySelector("[data-timeline-target]"));
});
