export function getHeight(item) {
  const element = document.getElementById(item);
  const rect = element.getBoundingClientRect();
  const scrollTop = document.documentElement.scrollTop;
  const height = rect.top + scrollTop;
  return height;
}

export function headerHeight(){
  return document.getElementById("header").offsetHeight;
}

export function scroll(section, behavior) {
  const y = getHeight(section) - headerHeight() + 1;

  window.scroll({
    top: y,
    left: 0,
    behavior: behavior,
  });
}

export function scrollToArrow(arrow, behavior) {
  const y = getHeight(arrow) - headerHeight() - 120;

  window.scroll({
    top: y,
    left: 0,
    behavior: behavior,
  });
}
