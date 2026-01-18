import { gsap } from "gsap";

/**
 * Calculates and updates the dimensions of the doodle container to maintain aspect ratio
 * and alignment relative to the background image.
 *
 * @param {HTMLElement} imageContainer - The parent container element
 * @param {HTMLElement} doodleOverlay - The doodle overlay element
 * @param {HTMLElement} bgImage - The background image element
 */
export const updateDoodleContainer = (imageContainer, doodleOverlay, bgImage) => {
  if (!imageContainer || !doodleOverlay) return;

  // Get Parent Dimensions (Layout Size, ignoring Transforms)
  const pW = imageContainer.offsetWidth;
  const pH = imageContainer.offsetHeight;

  // Get Aspect Ratio
  let aspect = 16 / 9;
  if (bgImage && bgImage.naturalWidth) {
    aspect = bgImage.naturalWidth / bgImage.naturalHeight;
  } else {
    const isMobile = window.innerWidth < 768;
    aspect = isMobile ? 9 / 16 : 16 / 9;
  }

  let w, h, top, left;

  // Object-Cover Logic
  w = pW;
  h = w / aspect;

  if (h < pH) {
    h = pH;
    w = h * aspect;
  }

  // Always Bottom Align (Matching object-bottom CSS per user request)
  top = pH - h;
  left = (pW - w) / 2;

  gsap.set(doodleOverlay, {
    width: w,
    height: h,
    top: top,
    left: left,
    position: "absolute",
    overwrite: "auto",
  });
};
