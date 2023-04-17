export function scroll(section, behavior) {
  const element = document.getElementById(section);
  const rect = element.getBoundingClientRect();
  const scrollTop = document.documentElement.scrollTop;

  const offset = document.getElementById("header").offsetHeight;

  const y = rect.top + scrollTop - offset + 1;

  window.scroll({
    top: y,
    left: 0,
    behavior: behavior,
  });
}

export function scrollToArrow(arrow, behavior) {
  const element = document.getElementById(arrow);
  const rect = element.getBoundingClientRect();
  const scrollTop = document.documentElement.scrollTop;

  const offset = document.getElementById("header").offsetHeight;

  const y = rect.top + scrollTop - offset - 120;

  window.scroll({
    top: y,
    left: 0,
    behavior: behavior,
  });
}
