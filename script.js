const words = [
  "AI & ML Engineer",
  "Python Developer",
  "Web Developer",
  "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

  let current = words[wordIndex];

  if (!deleting) {
    typing.textContent = current.substring(0, charIndex++);
  } else {
    typing.textContent = current.substring(0, charIndex--);
  }

  let speed = deleting ? 70 : 120;

  if (!deleting && charIndex === current.length + 1) {
    deleting = true;
    speed = 1200;
  }

  if (deleting && charIndex === 0) {
    deleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();

const themeBtn = document.getElementById("theme-btn");

themeBtn.onclick = () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
  }
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
});

document.querySelectorAll("section").forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(50px)";
  section.style.transition = "all 1s ease";
  observer.observe(section);
});

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    window.scrollTo({
      top: target.offsetTop - 70,
      behavior: "smooth"
    });
  });
});

const form = document.querySelector("form");

form.addEventListener("submit", function(e){
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
  form.reset();
});
