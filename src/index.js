//import css from "./main.css";
import scss from "./sass/main.scss";

const setProgressbar = () => {
  const progressIndicator = document.querySelector(
    "span[data-engrid-progress-indicator]"
  );

  if (!progressIndicator || !pageJson) {
    return;
  }

  const pageCount = pageJson.pageCount;
  const pageNumber = pageJson.pageNumber;

  const prevPercentage =
    pageNumber === 1 ? 0 : Math.ceil(((pageNumber - 1) / pageCount) * 100);
  const percentage =
    pageNumber === 1 ? 0 : Math.ceil((pageNumber / pageCount) * 100);
  const scalePrev = prevPercentage / 100;
  const scale = percentage / 100;

  progressIndicator.innerHTML = `
    <div class="indicator-wrap">
      <span class="progress" style="transform: scaleX(${scalePrev});"></span>
      <span class="percentage">${percentage}%</span>
    </div>`;

  if (percentage !== prevPercentage) {
    const progress = document.querySelector(".progress");
    requestAnimationFrame(function() {
      progress.style.transform = `scaleX(${scale})`;
    });
  }
};
setProgressbar();
