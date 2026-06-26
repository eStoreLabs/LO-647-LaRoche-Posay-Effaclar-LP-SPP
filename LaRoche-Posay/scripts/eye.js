const wrapper = document.querySelector("#es-rc #es-rc-content .es-kv__eye-wrapper");
const eye = document.querySelector("#es-rc #es-rc-content .es-kv__eye");
const anchor = document.querySelector("#es-rc #es-rc-content .es-kv__eye-anchor");
const isMobile = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
const moveLimit = 0.04;

window.addEventListener("mousemove", (e) => {
  const anchorRect = anchor.getBoundingClientRect();

  const centerX = anchorRect.left;
  const centerY = anchorRect.top;

  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const deltaX = mouseX - centerX;
  const deltaY = mouseY - centerY;

  const angle = Math.atan2(deltaY, deltaX);

  const wrapperRect = wrapper.getBoundingClientRect();
  const maxMove = wrapperRect.width * moveLimit;

  const moveX = Math.cos(angle) * maxMove;
  const moveY = Math.sin(angle) * maxMove;

  eye.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

let lookedDown = false;

window.addEventListener("scroll", () => {
  if (!isMobile) return;

  if (window.scrollY > 50 && !lookedDown) {
    eye.classList.add("es-kv__eye-down--mobile");
    eye.style.transform = "";
    lookedDown = true;
  } else if (window.scrollY <= 50 && lookedDown) {
    eye.classList.remove("es-kv__eye-down--mobile");
    lookedDown = false;
  }
});
