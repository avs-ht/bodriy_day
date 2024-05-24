export const isOverflowed = (el: HTMLElement) => {
  return el.scrollWidth > el.offsetWidth || el.scrollHeight > el.offsetHeight;
};
