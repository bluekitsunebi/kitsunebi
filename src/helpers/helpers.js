export function scroll(section) {
    const element = document.getElementById(section)
    const rect = element.getBoundingClientRect();
    const scrollTop = document.documentElement.scrollTop;
    const y = rect.top + scrollTop - 90;
    window.scroll(0, y)
}