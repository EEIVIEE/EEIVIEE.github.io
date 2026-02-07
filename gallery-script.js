const gallery = document.getElementById("gallery");
if (gallery) {
  const updateGalleryPosition = (clientX, clientY) => {
    if (!window.galleryPinned) return;
    const xDecimal = clientX / window.innerWidth,
      yDecimal = clientY / window.innerHeight;

    const maxX = gallery.offsetWidth - window.innerWidth,
      maxY = gallery.offsetHeight - window.innerHeight;

    const panX = maxX * xDecimal * -1,
      panY = maxY * yDecimal * -1;

    gallery.animate(
      {
        transform: `translate(${panX}px, ${panY}px)`,
      },
      {
        duration: 4000,
        fill: "forwards",
        easing: "ease",
      }
    );
  };

  window.addEventListener("mousemove", (event) => {
    updateGalleryPosition(event.clientX, event.clientY);
  });

  const clamp01 = (value) => Math.max(0, Math.min(1, value));
  const updateGalleryPositionClamped = (clientX, clientY) => {
    updateGalleryPosition(
      clamp01(clientX / window.innerWidth) * window.innerWidth,
      clamp01(clientY / window.innerHeight) * window.innerHeight
    );
  };

  const touchTarget =
    document.querySelector(".gallery-section") ?? gallery;
  const scrollEdgeSize = 24;
  let isDragging = false;
  let allowScroll = false;
  let activeTouchId = null;

  const isInScrollEdge = (touch) => {
    const y = touch.clientY;
    return y <= scrollEdgeSize || y >= window.innerHeight - scrollEdgeSize;
  };

  touchTarget.addEventListener(
    "touchstart",
    (event) => {
      if (!window.galleryPinned) return;
      if (!event.touches?.length) return;
      const touch = event.touches[0];
      activeTouchId = touch.identifier;
      allowScroll = event.touches.length > 1 || isInScrollEdge(touch);
      isDragging = !allowScroll;
      if (isDragging) {
        updateGalleryPositionClamped(touch.clientX, touch.clientY);
      }
    },
    { passive: true }
  );

  touchTarget.addEventListener(
    "touchmove",
    (event) => {
      if (!window.galleryPinned) return;
      if (activeTouchId === null || allowScroll || !isDragging) return;
      const touch = Array.from(event.touches).find(
        (item) => item.identifier === activeTouchId
      );
      if (!touch) return;
      updateGalleryPositionClamped(touch.clientX, touch.clientY);
      event.preventDefault();
    },
    { passive: false }
  );

  const stopDrag = (event) => {
    if (activeTouchId === null) return;
    const ended = Array.from(event.changedTouches || []).some(
      (touch) => touch.identifier === activeTouchId
    );
    if (!ended) return;
    isDragging = false;
    allowScroll = false;
    activeTouchId = null;
  };

  touchTarget.addEventListener("touchend", stopDrag);
  touchTarget.addEventListener("touchcancel", stopDrag);
}
