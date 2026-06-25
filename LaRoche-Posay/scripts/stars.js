const stars = document.querySelectorAll("#es-rc #es-rc-content .es-star");

stars.forEach((star) => {
  const randomDelay = Math.random() * 3;
  star.style.animationDelay = `${randomDelay}s`;
});
