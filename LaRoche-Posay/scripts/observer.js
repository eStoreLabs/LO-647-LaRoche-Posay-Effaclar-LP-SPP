const footerImg = document.querySelector("#es-rc #es-rc-content .es-footer-img");

const footerObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("es-footer-img--visible");
        footerObs.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.3,
  },
);

const duoImg = document.querySelector("#es-rc #es-rc-content .es-duo__img--inside");

const duoObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("es-duo__img--visible");
      } else {
        if (entry.boundingClientRect.top > 0) {
          entry.target.classList.remove("es-duo__img--visible");
        }
      }
    });
  },
  {
    threshold: 0.75,
  },
);

footerObs.observe(footerImg);
duoObs.observe(duoImg);
