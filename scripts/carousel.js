
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const items = document.querySelectorAll(".carousel-item");
  let index = 0;

  document.querySelector(".carousel-btn.left").addEventListener("click", () => {
    index = (index - 1 + items.length) % items.length;
    track.style.transform = `translateX(-${index * 100}%)`;
  });

  document.querySelector(".carousel-btn.right").addEventListener("click", () => {
    index = (index + 1) % items.length;
    track.style.transform = `translateX(-${index * 100}%)`;
  });
});
