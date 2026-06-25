const footerImg = document.querySelector("#es-rc #es-rc-content .es-footer-img");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("es-footer-img--visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
  },
);

observer.observe(footerImg);
