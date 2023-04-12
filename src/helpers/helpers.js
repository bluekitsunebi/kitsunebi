export function scroll(section) {
  const element = document.getElementById(section);
  const rect = element.getBoundingClientRect();
  const scrollTop = document.documentElement.scrollTop;

  const offset = document.getElementById("header").offsetHeight;

  const y = rect.top + scrollTop - offset;
  window.scroll(0, y);
}

