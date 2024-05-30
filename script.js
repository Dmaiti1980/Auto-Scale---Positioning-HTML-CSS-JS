document.addEventListener("DOMContentLoaded", calculateScaleFactor);
window.addEventListener("resize", calculateScaleFactor);

//Get the SCalefactor
let scaleFactor, originalWidth, originalHeight;

function calculateScaleFactor() {
  const bgElement = document.querySelector(".BG_Element");
  originalWidth = bgElement.naturalWidth;
  originalHeight = bgElement.naturalHeight;

  const containerWidth = bgElement.clientWidth;
  const containerHeight = bgElement.clientHeight;

  const originalAspectRatio = originalWidth / originalHeight;
  const containerAspectRatio = containerWidth / containerHeight;

  if (originalAspectRatio > containerAspectRatio) {
    // Scale based on height
    scaleFactor = containerHeight / originalHeight;
  } else {
    // Scale based on width
    scaleFactor = containerWidth / originalWidth;
  }
  updateSize();
//   console.log("Scale Factor:", scaleFactor);
}

function updateSize() {
    const scaleContainer = document.querySelector(".Overlay_Element");
    //set the size of the Overlay matching with Actual BG Size
    scaleContainer.style.width = `${originalWidth}px`;
    scaleContainer.style.height = `${originalHeight}px`;

    //Scale & Transform
    scaleContainer.style.transform = `scale(${scaleFactor}) translate(-50%, -50%)`;
    scaleContainer.style.transformOrigin = "top left";
    // console.log("Natural Size :", originalWidth, " x " ,originalHeight);
}
  