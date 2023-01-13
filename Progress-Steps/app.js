const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

function update() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");
  progress.style.width = `${
    ((actives.length - 1) / (circles.length - 1)) * 100
  }%`;

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}

// next event listeners
next.addEventListener("click", () => {
  if (currentActive < circles.length) {
    currentActive++;
  } else {
    currentActive = circles.length;
  }
  update();
});

// prev event listeners
prev.addEventListener("click", () => {
  if (currentActive > 0) {
    currentActive--;
  } else {
    currentActive = 1;
  }
  update();
});
