document.addEventListener("DOMContentLoaded", () => {
  const loaderContainer = document.getElementById("loader-container");
  const loader = document.getElementById("loader");
  const mainContent = document.getElementById("main-content");
  const loaderProgress = document.getElementById("loader-progress");
  const progressBar = document.querySelector(".progress-bar");

  let progress = 0;

  function updateProgress() {
    if (progress < 100) {
      progress++;
      loaderProgress.textContent = progress; // Update with numeric progress only
      progressBar.style.width = `${progress}%`;
      setTimeout(updateProgress, 30); // Adjust this interval to control progress speed
    } else {
      // When progress reaches 100%, animate the loader content upwards
      loader.classList.add("slide-up");
      loaderContainer.classList.add("hide");
      setTimeout(() => {
        loaderContainer.style.display = "none";
        mainContent.style.display = "block";
      }, 300); // Match the animation duration
    }
  }

  // Start the progress simulation
  updateProgress();
});
