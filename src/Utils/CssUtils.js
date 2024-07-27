export const IsDesktop = () => {
  return window.matchMedia("(min-width:1100px)").matches;
};
