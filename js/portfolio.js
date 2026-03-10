const lightbox = document.querySelector("[data-lightbox]");
const lightboxImage = document.querySelector(".lightbox__image");
const lightboxTitle = document.querySelector(".lightbox__title");
const lightboxMeta = document.querySelector(".lightbox__meta");
const lightboxClose = document.querySelector(".lightbox__close");
const lightboxTriggers = document.querySelectorAll("[data-lightbox-image]");
const yearNode = document.querySelector("#year");

if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}

if (lightbox && lightboxImage && lightboxTitle && lightboxMeta && lightboxClose) {
  const closeLightbox = () => {
    lightbox.hidden = true;
    document.body.classList.remove("is-locked");
    lightboxImage.src = "";
    lightboxImage.alt = "";
    lightboxTitle.textContent = "";
    lightboxMeta.textContent = "";
  };

  lightboxTriggers.forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      event.preventDefault();

      const previewImage = trigger.querySelector("img");
      const imageSrc = trigger.getAttribute("href");
      const title = trigger.dataset.title || "";
      const meta = trigger.dataset.meta || "";
      const imageAlt = previewImage ? previewImage.alt : title;

      lightboxImage.src = imageSrc;
      lightboxImage.alt = imageAlt;
      lightboxTitle.textContent = title;
      lightboxMeta.textContent = meta;
      lightbox.hidden = false;
      document.body.classList.add("is-locked");
    });
  });

  lightboxClose.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !lightbox.hidden) {
      closeLightbox();
    }
  });
}
