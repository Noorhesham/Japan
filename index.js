const section = document.querySelectorAll("section");
const load = function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.remove('hidden');
  });
};
const observer = new IntersectionObserver(load, {
  root: null,
  threshold: 0.25,
});
section.forEach((section) => {
  observer.observe(section);
  section.classList.add("hidden");
});
