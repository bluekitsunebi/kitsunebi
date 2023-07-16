export function getHeight(item) {
  const element = document.getElementById(item);
  const rect = element.getBoundingClientRect();
  const scrollTop = document.documentElement.scrollTop;
  const height = rect.top + scrollTop;
  return height;
}
