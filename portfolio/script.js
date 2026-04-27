// Fade-in animation
const elements = document.querySelectorAll('.card, .project-card');

window.addEventListener('scroll', () => {
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
});
const links = document.querySelectorAll("a");
const transition = document.getElementById("transition");

links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = link.href;

    transition.style.transform = "scaleY(1)";

    setTimeout(() => {
      window.location = target;
    }, 500);
  });
});
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {
  cursor.style.top = e.clientY + "px";
  cursor.style.left = e.clientX + "px";
});
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
});