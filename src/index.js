//import css from "./main.css";
import scss from "./sass/main.scss";

const setProgressbar = () => {

  const progressIndicator = document.querySelector("span[data-engrid-progress-indicator]");
  const maxAttribute = progressIndicator.hasAttribute("max");
  const maxValue = maxAttribute === true ? progressIndicator.getAttribute("max") : 100;

  if (!progressIndicator || !pageJson) {
    return;
  }

  const pageCount = pageJson.pageCount;
  const pageNumber = pageJson.pageNumber;

  const prevPercentage = pageNumber === 1 ? 0 : Math.ceil(((pageNumber - 1) / pageCount) * maxValue);
  const percentage = pageNumber === 1 ? 0 : Math.ceil((pageNumber / pageCount) * maxValue);
  const scalePrev = prevPercentage / 100;
  const scale = percentage / 100;

  progressIndicator.innerHTML = `
    <div class="indicator__wrap">
      <span class="indicator__progress" style="transform: scaleX(${scalePrev});"></span>
      <span class="indicator__percentage">${percentage}<span class="indicator__percentage-sign">%</span></span>
    </div>`;

  if (percentage !== prevPercentage) {
    const progress = document.querySelector(".indicator__progress");
    requestAnimationFrame(function() {
      progress.style.transform = `scaleX(${scale})`;
    });
  }
};
setProgressbar();
