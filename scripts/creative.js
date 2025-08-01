
document.addEventListener("DOMContentLoaded", () => {
  const animatedItems = document.querySelectorAll(".animated");
  animatedItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add("visible");
    }, index * 500);
  });
});
