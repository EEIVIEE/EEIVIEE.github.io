import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

import Lenis from "lenis";

document.addEventListener("DOMContentLoaded", () => {
  // Summary: init Lenis/GSAP, smooth-scroll nav links, Three.js model, ScrollTrigger scenes, gallery pin/cursor.
  // ------------------------------------------------------------
  // 0) GSAP + Lenis
  // ------------------------------------------------------------
  gsap.registerPlugin(ScrollTrigger, SplitText);

  const lenis = new Lenis();
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);

  const setVh = () => {
    const viewportHeight = window.visualViewport?.height ?? window.innerHeight;
    const viewportWidth = window.visualViewport?.width ?? window.innerWidth;
    document.documentElement.style.setProperty(
      "--vh",
      `${viewportHeight * 0.01}px`
    );
    document.documentElement.style.setProperty(
      "--vw",
      `${viewportWidth * 0.01}px`
    );
  };

  const refreshViewport = () => {
    setVh();
    if (typeof lenis?.resize === "function") {
      lenis.resize();
    }
    ScrollTrigger.refresh();
  };

  setVh();

  window.addEventListener("pageshow", (event) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(refreshViewport);
    });
    if (event?.persisted) {
      window.setTimeout(refreshViewport, 50);
    }
  });

  window.addEventListener("load", () => {
    window.setTimeout(refreshViewport, 50);
  });

  window.addEventListener("orientationchange", () => {
    window.setTimeout(refreshViewport, 250);
  });

  if (window.visualViewport) {
    window.visualViewport.addEventListener("resize", refreshViewport);
    window.visualViewport.addEventListener("scroll", refreshViewport);
  }

  // ------------------------------------------------------------
  // Nav menu animation
  // ------------------------------------------------------------
  const nav = document.querySelector(".nav");
  const navMenu = document.querySelector(".nav-menu");
  const navToggle = document.querySelector(".nav-toggle");
  const navSubtoggle = document.querySelector(".nav-subtoggle");
  const navSubmenu = document.querySelector("#projects-submenu");
  const navLinks = document.querySelectorAll(
    ".nav-menu .nav-link, .nav-menu .nav-sublink"
  );
  let navOpen = false;
  let navHidden = false;
  let lastScrollY = window.scrollY;

  const setProjectsSubmenu = (isOpen) => {
    if (!navSubtoggle || !navSubmenu) return;
    navSubtoggle.setAttribute("aria-expanded", String(isOpen));
    navSubmenu.setAttribute("aria-hidden", String(!isOpen));
    navSubmenu.classList.toggle("is-open", isOpen);
  };

  const setNavHidden = (isHidden) => {
    if (!nav) return;
    navHidden = isHidden;
    nav.classList.toggle("nav-hidden", isHidden);
  };

  // Nav overlay entrance timeline (menu + links).
  const navTl = gsap.timeline({ paused: true });
  navTl.to(navMenu, {
    opacity: 1,
    y: "0%",
    duration: 0.4,
    ease: "power3.out",
  });

  navTl.addLabel("linksStart", "-=0.15");
  navTl.to(
    navLinks,
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.05,
      ease: "power3.out",
    },
    "linksStart"
  );

  if (navSubtoggle) {
    navTl.to(
      navSubtoggle,
      {
        opacity: 1,
        y: 0,
        duration: 0.35,
        ease: "power3.out",
      },
      "linksStart+=0.375"
    );
  }

  // Open/close the full-screen nav and play/reverse its timeline.
  const setNavState = (isOpen) => {
    navOpen = isOpen;
    document.body.classList.toggle("nav-open", navOpen);
    navToggle.setAttribute("aria-expanded", String(navOpen));
    navMenu.setAttribute("aria-hidden", String(!navOpen));
    if (navOpen) {
      setNavHidden(false);
    }
    if (!navOpen) {
      setProjectsSubmenu(false);
      navTl.reverse();
      return;
    }
    navTl.play(0);
  };

  // Toggle nav safely from any handler.
  const closeNavIfOpen = () => {
    if (navOpen) {
      setNavState(false);
    }
  };

  const handleNavScroll = (currentY) => {
    if (!nav) return;
    if (navOpen) {
      setNavHidden(false);
      lastScrollY = currentY;
      return;
    }

    const delta = currentY - lastScrollY;
    const topRevealOffset = 40;
    if (currentY <= topRevealOffset) {
      setNavHidden(false);
      lastScrollY = currentY;
      return;
    }

    if (delta > 10 && !navHidden) {
      setNavHidden(true);
    } else if (delta < -6 && navHidden) {
      setNavHidden(false);
    }

    lastScrollY = currentY;
  };

  if (typeof lenis?.on === "function") {
    lenis.on("scroll", ({ scroll }) => {
      handleNavScroll(scroll);
    });
  }

  window.addEventListener(
    "scroll",
    () => {
      handleNavScroll(window.scrollY);
    },
    { passive: true }
  );

  handleNavScroll(window.scrollY);

  // Centralized smooth scrolling (Lenis if available, fallback to native).
  const smoothScrollTo = (targetScroll, duration = 1.2) => {
    if (typeof lenis?.scrollTo === "function") {
      lenis.scrollTo(targetScroll, {
        duration,
        easing: (t) => 1 - Math.pow(1 - t, 3),
      });
      return;
    }

    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  };

  // Scroll to an element's page offset (used when ScrollTrigger isn't ready).
  const scrollToElement = (element, duration = 1.2) => {
    if (!element) return;
    const top = element.getBoundingClientRect().top + window.scrollY;
    smoothScrollTo(top, duration);
  };

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      setNavState(!navOpen);
    });
  }

  if (navSubtoggle) {
    navSubtoggle.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      const isOpen = navSubtoggle.getAttribute("aria-expanded") === "true";
      setProjectsSubmenu(!isOpen);
    });
  }


  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeNavIfOpen();
    });
  });

  const isIndexPage = Boolean(document.querySelector(".projects"));
  if (isIndexPage) {
    const projectsLinks = document.querySelectorAll('a[href$="#projects-anchor"]');
    projectsLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const pinTrigger = ScrollTrigger.getById("projects-pin");
      if (!pinTrigger) {
        scrollToElement(document.querySelector("#projects-anchor"));
        closeNavIfOpen();
        return;
      }

      const maskEnd = 0.132;
      const headerStart = maskEnd * 0.1;
      const headerDuration = 0.35;
      const headerTargetT = 0.16;
      const targetProgress = Math.min(
        1,
        headerStart + headerDuration * headerTargetT
      );
      const targetScroll =
        pinTrigger.start + (pinTrigger.end - pinTrigger.start) * targetProgress;

      smoothScrollTo(targetScroll);
      closeNavIfOpen();
    });
  });

  const aboutLinks = document.querySelectorAll('a[href$="#about-anchor"]');
  aboutLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const pinTrigger = ScrollTrigger.getById("projects-pin");
      if (!pinTrigger) {
        scrollToElement(document.querySelector("#about-anchor"));
        closeNavIfOpen();
        return;
      }

      const maskEnd = 0.132;
      const headerStart = maskEnd * 0.1;
      const headerDuration = 0.35;
      const circularStart = headerStart + headerDuration + 0.005;
      const circularDuration = 0.1;
      const header2Start = circularStart;
      const header2Offset = 0.02;
      const targetScroll =
        pinTrigger.start +
        (pinTrigger.end - pinTrigger.start) * (header2Start + header2Offset);

      smoothScrollTo(targetScroll);
      closeNavIfOpen();
    });
  });

    const galleryLinks = document.querySelectorAll('a[href$="#gallery-section"]');
    galleryLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
      const gallerySection = document.querySelector("#gallery-section");
      if (!gallerySection) return;

      const galleryPin = ScrollTrigger.getById("gallery-pin");
      const targetScroll = galleryPin
        ? galleryPin.start + 1
        : gallerySection.getBoundingClientRect().top + window.scrollY;
      const scrollDuration = 1.2;

      smoothScrollTo(targetScroll, scrollDuration);

      window.galleryPinned = true;
      window.setTimeout(() => {
        ScrollTrigger.update();
      }, scrollDuration * 1000 + 100);

      closeNavIfOpen();
    });
  });
  }



  // ------------------------------------------------------------
  // 1) SplitText setup (your original intent)
  // ------------------------------------------------------------
  // Split text into words and build a reveal timeline.
  const createCharReveal = (selector, options = {}) => {
    const {
      total = 0.7,
      charDuration = 0.12,
      ease = "power3.out",
      splitType,
    } = options;
    const type = splitType ?? "words";
    const split = new SplitText(selector, {
      type,
      charsClass: "char",
      wordsClass: "char",
    });

    const units = type === "words" ? split.words : split.chars;
    units.forEach((unit) => {
      unit.innerHTML = `<span>${unit.innerHTML}</span>`;
    });

    const unitCount = units.length || 1;
    const stagger =
      unitCount > 1
        ? Math.max(0, (total - charDuration) / (unitCount - 1))
        : 0;

    const tl = gsap.timeline({ paused: true });
    gsap.set(`${selector} .char > span`, { y: "100%" });
    tl.to(`${selector} .char > span`, {
      y: "0%",
      duration: charDuration,
      ease,
      stagger,
    });

    return { split, tl };
  };

  let headerCharTl = null;
  let headerCharT2 = null;
  let headerCharT3 = null;
  let Header2CharT1 = null;
  let Header2CharT2 = null;
  let Header2CharT3 = null;
  let Header2CharT4 = null;
  let headerTextSplits = [];

  const setupTextSplits = () => {
    headerTextSplits.forEach(({ split, tl }) => {
      if (tl) tl.kill();
      if (split && typeof split.revert === "function") {
        split.revert();
      }
    });
    headerTextSplits = [];

    let result = createCharReveal(".header-1 h1", {
      total: 0.7,
      charDuration: 0.12,
    });
    headerCharTl = result.tl;
    headerTextSplits.push(result);

    result = createCharReveal(".horizontal-grid-row-2[data-position=\"4\"] h2", {
      total: 0.5,
      charDuration: 0.12,
    });
    headerCharT2 = result.tl;
    headerTextSplits.push(result);

    result = createCharReveal(".horizontal-grid-row[data-position=\"5\"] h2", {
      total: 0.5,
      charDuration: 0.12,
    });
    headerCharT3 = result.tl;
    headerTextSplits.push(result);

    result = createCharReveal(".horizontal-grid-row[data-position=\"7\"] h1", {
      total: 0.5,
      charDuration: 0.12,
    });
    Header2CharT1 = result.tl;
    headerTextSplits.push(result);

    result = createCharReveal(".horizontal-grid-row-2[data-position=\"9\"] h1", {
      total: 0.5,
      charDuration: 0.12,
    });
    Header2CharT2 = result.tl;
    headerTextSplits.push(result);

    result = createCharReveal(".horizontal-grid-row[data-position=\"10\"] h2", {
      total: 0.5,
      charDuration: 0.12,
    });
    Header2CharT3 = result.tl;
    headerTextSplits.push(result);

    result = createCharReveal(".horizontal-grid-row-2[data-position=\"10\"] h2", {
      total: 0.5,
      charDuration: 0.12,
    });
    Header2CharT4 = result.tl;
    headerTextSplits.push(result);

    ScrollTrigger.refresh();
  };

  setupTextSplits();




  const titleSplit = new SplitText(".tooltip .title h2", {
    type: "lines",
    linesClass: "line",
  });

  const descriptionSplit = new SplitText(".tooltip .description p", {
    type: "lines",
    linesClass: "line",
  });

  // ------------------------------------------------------------
  // Rectangular mask gradient follow cursor
  // ------------------------------------------------------------
  const rectMask = document.querySelector(".rectangular-mask");
  if (rectMask) {
    // Map pointer position to CSS vars that drive the gradient mask.
    const setMaskPos = (clientX, clientY) => {
      const rect = rectMask.getBoundingClientRect();
      const x = ((clientX - rect.left) / rect.width) * 100;
      const y = ((clientY - rect.top) / rect.height) * 100;
      const clampedX = Math.max(0, Math.min(100, x));
      const clampedY = Math.max(0, Math.min(100, y));
      rectMask.style.setProperty("--mx", `${clampedX}%`);
      rectMask.style.setProperty("--my", `${clampedY}%`);
    };

    rectMask.addEventListener("pointermove", (e) => {
      setMaskPos(e.clientX, e.clientY);
    });

    rectMask.addEventListener("pointerleave", () => {
      rectMask.style.setProperty("--mx", "50%");
      rectMask.style.setProperty("--my", "50%");
    });
  }

  // Wrap each line content in an inner <span> so you can animate ".line > span"
  [...titleSplit.lines, ...descriptionSplit.lines].forEach((line) => {
    line.innerHTML = `<span>${line.innerHTML}</span>`;
  });
  const tooltipInOut = { duration: 0.6, ease: "power3.out" };

  // NOTE: your HTML currently has TWO separate `.tooltips` wrappers each containing ONE `.tooltip`.
  // That makes `.tooltip:nth-child(2)` never match.
  // This version targets tooltips globally by order (1st and 2nd tooltip on page),
  // so it works with BOTH structures.
  const tooltipSelectors = [
    {
      // Offset (in ScrollTrigger progress units) after Header-2 finishes sliding.
      trigger: 0.02,
      elements: [
        ".tooltip:nth-of-type(1) .icon ion-icon",
        ".tooltip:nth-of-type(1) .title .line > span",
        ".tooltip:nth-of-type(1) .description .line > span",
        
      ],
    },
    {
      // Offset (in ScrollTrigger progress units) after Header-2 finishes sliding.
      trigger: 0.07,
      elements: [
        ".tooltip:nth-of-type(2) .icon ion-icon",
        ".tooltip:nth-of-type(2) .title .line > span",
        ".tooltip:nth-of-type(2) .description .line > span",
      ],
    },
  ];
  // Used to gate other animations (e.g. model rotation) relative to tooltip timing.
  const lastTooltipTriggerOffset = tooltipSelectors.reduce(
    (max, { trigger }) => Math.max(max, trigger ?? 0),
    0
  );

  // ------------------------------------------------------------
  // 2) Three.js setup
  // ------------------------------------------------------------
  let model = null;
  let modelSize = null;
  let currentRotation = 0;
  let targetRotation = 0;
  const modelRotationAxis = new THREE.Vector3(0, 1, 0);
  const clock = new THREE.Clock();
  const rotationDamp = 8; // higher = snappier, lower = more ease-out

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setClearColor(0x000000, 0);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  if ("outputColorSpace" in renderer) {
    renderer.outputColorSpace = THREE.SRGBColorSpace;
  }

  renderer.toneMapping = THREE.NoToneMapping;
  renderer.toneMappingExposure = 1.0;

  // NOTE: laptop model mounts into `.model-container--laptop`.
  const modelContainer = document.querySelector(".model-container--laptop");
  if (!modelContainer) {
    console.warn('Missing ".model-container--laptop" in HTML. Canvas not attached.');
    return;
  }
  modelContainer.appendChild(renderer.domElement);

  // Lights
  scene.add(new THREE.AmbientLight(0xffffff, 0.7));

  const mainLight = new THREE.DirectionalLight(0xffffff, 1.0);
  mainLight.position.set(1, 2, 3);
  mainLight.castShadow = true;
  mainLight.shadow.bias = -0.001;
  mainLight.shadow.mapSize.width = 1024;
  mainLight.shadow.mapSize.height = 1024;
  scene.add(mainLight);

  const fillLight = new THREE.DirectionalLight(0xffffff, 0.5);
  fillLight.position.set(-2, 0, -2);
  scene.add(fillLight);

  // Center/scale the GLB and position the camera based on viewport size.
  function setupModel() {
    if (!model || !modelSize) return;

    const isMobile = window.innerWidth < 1000;

    // Reset base rotation first so centering is stable on resize.
    model.rotation.set(0, 0, 0);
    model.rotation.z = isMobile ? 0 : THREE.MathUtils.degToRad(25);

    // Center model at origin
    const box = new THREE.Box3().setFromObject(model);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    model.position.sub(center);

    // small offset like tutorial-style
    model.position.y += size.y * 0.2;

    // Keep the JS rotation state aligned with the model after resets (e.g. resize).
    currentRotation = 0;
    if (targetRotation !== 0) {
      model.rotateOnAxis(modelRotationAxis, targetRotation);
      currentRotation = targetRotation;
    }

    // Fit camera to model + padding so it stays consistent on resize.
    const fitPadding = isMobile ? 1.35 : 1.15;
    const rotatedBox = new THREE.Box3().setFromObject(model);
    const rotatedSize = rotatedBox.getSize(new THREE.Vector3());
    const fov = THREE.MathUtils.degToRad(camera.fov);
    const distanceForHeight =
      (rotatedSize.y * fitPadding) / (2 * Math.tan(fov / 2));
    const distanceForWidth =
      (rotatedSize.x * fitPadding) /
      (2 * Math.tan(fov / 2) * camera.aspect);
    const cameraDistance =
      Math.max(distanceForHeight, distanceForWidth) + rotatedSize.z * 0.5;

    camera.position.set(0, 0, cameraDistance);
    camera.lookAt(0, 0, 0);
  }

  // IMPORTANT: file must be in /public/models/...
  const MODEL_URL = "/models/laptop.glb";

  new GLTFLoader().load(
    MODEL_URL,
    (gltf) => {
      model = gltf.scene;
      model.traverse((node) => {
        if (node.isMesh) {
          node.castShadow = true;
          node.receiveShadow = true;

          const mat = node.material;
          if (mat && typeof mat === "object") {
            if ("roughness" in mat) mat.roughness = 0.05;
            if ("metalness" in mat) mat.metalness = 0.9;
            mat.needsUpdate = true;
          }
        }
      });

      const box = new THREE.Box3().setFromObject(model);
      modelSize = box.getSize(new THREE.Vector3());

      scene.add(model);
      setupModel();
    },
    undefined,
    (err) => console.error("GLB load failed ❌", err)
  );

  // ------------------------------------------------------------
  // 2b) Gameboy model setup
  // ------------------------------------------------------------
  let gameboyModel = null;
  let gameboyModelSize = null;
  let gameboyCurrentRotation = 0;
  let gameboyTargetRotation = 0;
  const gameboyRotationAxis = new THREE.Vector3(0, 1, 0);
  const gameboyRotationDamp = 8;
  const gameboyMaxRotation = Math.PI * 2;

  const gameboyContainer = document.querySelector(
    ".model-container--gameboy"
  );
  if (!gameboyContainer) {
    console.warn(
      'Missing ".model-container--gameboy" in HTML. Canvas not attached.'
    );
  }

  const getGameboyViewportSize = () => {
    if (!gameboyContainer) {
      return { width: window.innerWidth, height: window.innerHeight };
    }
    const width = gameboyContainer.offsetWidth || window.innerWidth;
    const height = gameboyContainer.offsetHeight || window.innerHeight;
    return { width, height };
  };

  const gameboyScene = gameboyContainer ? new THREE.Scene() : null;
  const gameboyCamera = gameboyContainer
    ? new THREE.PerspectiveCamera(60, 1, 0.1, 1000)
    : null;
  const gameboyRenderer = gameboyContainer
    ? new THREE.WebGLRenderer({ antialias: true, alpha: true })
    : null;

  if (gameboyCamera) {
    const { width, height } = getGameboyViewportSize();
    gameboyCamera.aspect = width / height;
    gameboyCamera.updateProjectionMatrix();
  }

  if (gameboyRenderer && gameboyContainer) {
    const { width, height } = getGameboyViewportSize();
    gameboyRenderer.setClearColor(0x000000, 0);
    gameboyRenderer.setSize(width, height);
    gameboyRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    gameboyRenderer.shadowMap.enabled = true;
    gameboyRenderer.shadowMap.type = THREE.PCFSoftShadowMap;

    if ("outputColorSpace" in gameboyRenderer) {
      gameboyRenderer.outputColorSpace = THREE.SRGBColorSpace;
    }

    gameboyRenderer.toneMapping = THREE.NoToneMapping;
    gameboyRenderer.toneMappingExposure = 1.0;

    gameboyContainer.appendChild(gameboyRenderer.domElement);
    gsap.set(gameboyContainer, {
      xPercent: -50,
      yPercent: -50,
      scale: 0,
      autoAlpha: 0,
      transformOrigin: "50% 50%",
    });
  }

  if (gameboyScene) {
    gameboyScene.add(new THREE.AmbientLight(0xffffff, 0.8));

    const gameboyMainLight = new THREE.DirectionalLight(0xffffff, 0.9);
    gameboyMainLight.position.set(1, 2, 3);
    gameboyMainLight.castShadow = true;
    gameboyMainLight.shadow.bias = -0.001;
    gameboyMainLight.shadow.mapSize.width = 1024;
    gameboyMainLight.shadow.mapSize.height = 1024;
    gameboyScene.add(gameboyMainLight);

    const gameboyFillLight = new THREE.DirectionalLight(0xffffff, 0.5);
    gameboyFillLight.position.set(-2, 0, -2);
    gameboyScene.add(gameboyFillLight);
  }

  function setupGameboyModel() {
    if (!gameboyModel || !gameboyModelSize || !gameboyCamera) return;

    const isMobile = window.innerWidth < 1000;

    gameboyModel.rotation.set(0, 0, 0);
    gameboyModel.rotation.y = isMobile ? THREE.MathUtils.degToRad(90) : THREE.MathUtils.degToRad(90);

    const box = new THREE.Box3().setFromObject(gameboyModel);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    gameboyModel.position.sub(center);
    const gameboyXOffset = isMobile ? -0.14 : -0.1;
    gameboyModel.position.x += size.x * gameboyXOffset;
    const gameboyYOffset = isMobile ? -0.12 : -0.05;
    gameboyModel.position.y += size.y * gameboyYOffset;

    // Keep the rotation state aligned after resets (e.g. resize).
    gameboyCurrentRotation = 0;
    if (gameboyTargetRotation !== 0) {
      gameboyModel.rotateOnAxis(gameboyRotationAxis, gameboyTargetRotation);
      gameboyCurrentRotation = gameboyTargetRotation;
    }

    const fitPadding = isMobile ? 1.85 : 1.3;
    const rotatedBox = new THREE.Box3().setFromObject(gameboyModel);
    const rotatedSize = rotatedBox.getSize(new THREE.Vector3());
    // Account for max width during Y-rotation (diagonal of x/z).
    const maxXZ = Math.sqrt(
      rotatedSize.x * rotatedSize.x + rotatedSize.z * rotatedSize.z
    );
    const fov = THREE.MathUtils.degToRad(gameboyCamera.fov);
    const distanceForHeight =
      (rotatedSize.y * fitPadding) / (2 * Math.tan(fov / 2));
    const distanceForWidth =
      (maxXZ * fitPadding) /
      (2 * Math.tan(fov / 2) * gameboyCamera.aspect);
    const cameraDistance =
      Math.max(distanceForHeight, distanceForWidth) + rotatedSize.z * 0.5;

    gameboyCamera.position.set(0, 0, cameraDistance);
    gameboyCamera.lookAt(0, 0, 0);
  }

  const GAMEBOY_MODEL_URL = "/models/nintendo_gameboy_low-poly.glb";

  if (gameboyScene) {
    new GLTFLoader().load(
      GAMEBOY_MODEL_URL,
      (gltf) => {
        gameboyModel = gltf.scene;
        gameboyModel.traverse((node) => {
          if (node.isMesh) {
            node.castShadow = true;
            node.receiveShadow = true;
          }
        });

        const box = new THREE.Box3().setFromObject(gameboyModel);
        gameboyModelSize = box.getSize(new THREE.Vector3());

        gameboyScene.add(gameboyModel);
        setupGameboyModel();
      },
      undefined,
      (err) => console.error("Gameboy GLB load failed", err)
    );
  }

  // Render loop for the Three.js scene.
  function animate() {
    requestAnimationFrame(animate);
    const delta = Math.min(0.05, clock.getDelta());

    // Smoothly ease the model rotation toward the scroll-driven target.
    if (model) {
      const nextRotation = THREE.MathUtils.damp(
        currentRotation,
        targetRotation,
        rotationDamp,
        delta
      );
      const rotationStep = nextRotation - currentRotation;
      if (Math.abs(rotationStep) > 0.000001) {
        model.rotateOnAxis(modelRotationAxis, rotationStep);
        currentRotation = nextRotation;
      }
    }
    if (gameboyModel) {
      const nextRotation = THREE.MathUtils.damp(
        gameboyCurrentRotation,
        gameboyTargetRotation,
        gameboyRotationDamp,
        delta
      );
      const rotationStep = nextRotation - gameboyCurrentRotation;
      if (Math.abs(rotationStep) > 0.000001) {
        gameboyModel.rotateOnAxis(gameboyRotationAxis, rotationStep);
        gameboyCurrentRotation = nextRotation;
      }
    }
    renderer.render(scene, camera);
    if (gameboyRenderer && gameboyScene && gameboyCamera) {
      gameboyRenderer.render(gameboyScene, gameboyCamera);
    }
  }
  animate();

  let resizeTimer = null;
  window.addEventListener("resize", () => {
    if (resizeTimer) {
      window.clearTimeout(resizeTimer);
    }
    resizeTimer = window.setTimeout(() => {
      setVh();
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      setupModel();
      if (gameboyCamera && gameboyRenderer) {
        const { width, height } = getGameboyViewportSize();
        gameboyCamera.aspect = width / height;
        gameboyCamera.updateProjectionMatrix();
        gameboyRenderer.setSize(width, height);
        gameboyRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        setupGameboyModel();
      }

      if (typeof lenis?.resize === "function") {
        lenis.resize();
      }
      ScrollTrigger.refresh();
    }, 150);
  });

  const header1El = document.querySelector(".header-1");
  const header2El = document.querySelector(".header-2");
  const header1LastElement = header1El?.querySelector(
    ".horizontal-grid-spacer:last-of-type"
  );
  const projectsSection = document.querySelector(".projects");

  // ------------------------------------------------------------
  // 3) ScrollTrigger pinned scene + UI updates
  // ------------------------------------------------------------
  if (projectsSection) {
    ScrollTrigger.create({
      trigger: projectsSection,
    start: "top top",
    end: () => `+=${window.innerHeight * 10}`,
    pin: true,
    pinSpacing: true,
    scrub: 1,
    id: "projects-pin",
    onUpdate: ({ progress }) => {
      // Rectangular mask (blocks headers at start)
      const maskEnd = 0.132;
      const maskProgress = Math.max(0, Math.min(1, progress / maskEnd));
      const rect = rectMask?.getBoundingClientRect?.();
      const w = rect?.width ?? 0;
      const h = rect?.height ?? 0;
      const base = maskProgress;
      const aspect = w && h ? w / h : 1;
      const insetY = base;
      const insetXRect = base;
      let insetXSquare = base;
      if (aspect > 1) {
        insetXSquare = (1 - (1 / aspect) * (1 - 2 * insetY)) / 2;
      }
      const squareStart = 0.2;
      const squareRange = 0.25;
      const t = Math.max(0, Math.min(1, (base - squareStart) / squareRange));
      const insetX = insetXRect + (insetXSquare - insetXRect) * t;
      const insetXClamped = Math.max(0, Math.min(0.5, insetX));
      const insetYClamped = Math.max(0, Math.min(0.5, insetY));
      const remainingW = w * (1 - 2 * insetXClamped);
      const remainingH = h * (1 - 2 * insetYClamped);
      const radiusStart = 0;
      const radiusProgress = Math.max(0, Math.min(1, (base - radiusStart) / (1 - radiusStart)));
      const radiusEase = radiusProgress * 3;
      const radiusPx = Math.max(0, Math.min(remainingW, remainingH) / 2) * radiusEase;
      gsap.set(".rectangular-mask", {
        clipPath: `inset(${insetYClamped * 100}% ${insetXClamped * 100}% ${insetYClamped * 100}% ${insetXClamped * 100}% round ${radiusPx}px)`,
      });

      // Model container scale-in as mask disappears
      const modelScale = Math.min(1, maskProgress * 0.9);
      gsap.set(".rect-intro", {
        scale: 1 - Math.min(1, maskProgress * 1.4),
      });

      // Header-1 slide (delayed until mask has disappeared)
      const headerStart = maskEnd * 0.1;

      const headerDuration = 0.35;
      const revealSpeed = 10;
      const headerProgress = Math.max(
        0,
        Math.min(1, (progress - headerStart) / headerDuration)
      );
      const delayT1 = 0.05; // 5% delay
      const delayT2 = 0.25; // 25% delay
      const delayT3 = 0.35; // 35% delay
      headerCharTl.progress(Math.min(1, (headerProgress - delayT1) * revealSpeed));
      headerCharT2.progress(Math.min(1, (headerProgress - delayT2) * revealSpeed));
      headerCharT3.progress(Math.min(1, (headerProgress - delayT3) * revealSpeed));
      const header1Width = header1El
        ? header1El.scrollWidth || header1El.getBoundingClientRect().width
        : window.innerWidth;
      const header1EndX = -header1Width;
      const header1X =
        progress < headerStart
          ? 0
          : progress > headerStart + headerDuration
          ? header1EndX
          : gsap.utils.interpolate(0, header1EndX, headerProgress);
      if (header1El) {
        gsap.set(header1El, { x: header1X, xPercent: 0 });
      }
      // Only move the background heading that belongs to Header-1.
      const bgStart = headerStart;
      const bgDuration = headerDuration * 1.6; // slower than the foreground slide
      const bgProgress = Math.max(
        0,
        Math.min(1, (progress - bgStart) / bgDuration)
      );
      gsap.set("#header-1 .background-h1", {
        xPercent:
          progress < bgStart
            ? 0
            : progress > bgStart + bgDuration
            ? -10
            : -10 * bgProgress,
      });

      // Circular mask (delayed until Header-1 has finished sliding)
      const circularStart = headerStart + headerDuration + 0.005;
      const circularDuration = 0.1;
      const circularProgress = Math.max(
        0,
        Math.min(1, (progress - circularStart) / circularDuration)
      );
      const circularMaskSize = circularProgress * 100;

      gsap.set(".circular-mask", {
        clipPath: `circle(${circularMaskSize}% at 50% 50%)`,
      });

      if (navToggle) {
        const eased =
          circularProgress * circularProgress * (3 - 2 * circularProgress);
        gsap.set(navToggle, {
          backgroundPosition: `${eased * 100}% 50%`,
        });
      }

      // Model shrink once the last Header-1 spacer clears the model center.
      let modelScaleFade = 1;
      if (header1LastElement && header1EndX !== 0) {
        const lastRect = header1LastElement.getBoundingClientRect();
        const modelCenterX = window.innerWidth * 0.5;
        const lastRightAtZero = lastRect.right - header1X;
        const header1CrossT = Math.max(
          0,
          Math.min(1, (modelCenterX - lastRightAtZero) / header1EndX)
        );
        const fadeStartRaw = headerStart + headerDuration * header1CrossT;
        const fadeStart = Math.min(
          Math.max(fadeStartRaw, headerStart),
          circularStart
        );
        const fadeEnd = circularStart + circularDuration * 0.2;
        const fadeWindow = Math.max(0.0001, fadeEnd - fadeStart);
        const fadeT = Math.max(
          0,
          Math.min(1, (progress - fadeStart) / fadeWindow)
        );
        const fadeEase = fadeT * fadeT * (3 - 2 * fadeT);
        modelScaleFade = 1 - fadeEase;
      }
      gsap.set(".model-container--laptop", {
        scale: modelScale * modelScaleFade,
        autoAlpha: 1,
      });

      // Header-2 slide
      const header2Start = circularStart + circularDuration + 0.02;
      const header2Duration = 0.25;
      const header2Progress = Math.max(
        0,
        Math.min(1, (progress - header2Start) / header2Duration)
      );
      // Ease-out near the end of Header-2 so it doesn't slam to a stop.
      const header2EasePortion = 0.18; // last 18% of the slide eases out
      const header2EaseStart = 1 - header2EasePortion;
      let header2Eased = header2Progress;
      if (header2Progress > header2EaseStart) {
        const t = (header2Progress - header2EaseStart) / header2EasePortion; // 0..1
        // s(0)=0, s(1)=1, s'(0)=1, s'(1)=0
        const s = -t * t * t + t * t + t;
        header2Eased = header2EaseStart + s * header2EasePortion;
      }
      const header2Width = header2El
        ? header2El.scrollWidth || header2El.getBoundingClientRect().width
        : window.innerWidth;
      const header2StartX = window.innerWidth;
      const header2EndX = -header2Width;
      const header2X =
        progress < header2Start
          ? header2StartX
          : progress > header2Start + header2Duration
          ? header2EndX
          : gsap.utils.interpolate(header2StartX, header2EndX, header2Eased);
      const delayT1_2 = 0.15;
      const delayT2_2 = 0.4;
      const delayT3_2 = 0.55;
      Header2CharT1.progress(Math.min(1, (header2Progress - delayT1_2) * revealSpeed));
      Header2CharT2.progress(Math.min(1, (header2Progress - delayT2_2) * revealSpeed));
      Header2CharT3.progress(Math.min(1, (header2Progress - delayT3_2) * revealSpeed));
      Header2CharT4.progress(Math.min(1, (header2Progress - delayT3_2) * revealSpeed));
      if (header2El) {
        const header2Visible = progress >= header2Start;
        gsap.set(header2El, {
          x: header2X,
          xPercent: 0,
          autoAlpha: header2Visible ? 1 : 0,
        });
      }

      // Divider scaleX must be 0..1 (FIXED: no "%")
      const tooltipStart = header2Start + header2Duration - 0.05;
      const dividerT = Math.max(
        0,
        Math.min(1, (progress - tooltipStart) / 0.2)
      );
      const dividerScale = dividerT * dividerT * (3 - 2 * dividerT);

      gsap.set(".tooltip .divider", {
        scaleX: dividerScale,
      });

      // Tooltips in/out
      // Tooltips in/out
      // Drive tooltips directly from scroll progress to avoid abrupt "snap" when crossing triggerAt,
      // especially on fast scrolls (velocity-based durations can get very short).
      const tooltipRevealWindow = 0.07; // how much scroll progress it takes to fully reveal each tooltip
      tooltipSelectors.forEach(({ trigger, elements }) => {
        const triggerAt = tooltipStart + trigger;
        const t = Math.max(
          0,
          Math.min(1, (progress - triggerAt) / tooltipRevealWindow)
        );
        // Smoothstep (ease-in-out).
        const eased = t * t * (3 - 2 * t);
        const y = `${(1 - eased) * 125}%`;
        gsap.set(elements, { y });
      });

      // Gameboy model scales up as tooltips reveal.
      const gameboyScaleStart = tooltipStart + (tooltipSelectors[0]?.trigger ?? 0);
      const gameboyScaleEnd =
        tooltipStart + lastTooltipTriggerOffset + tooltipRevealWindow;
      const gameboyScaleWindow = Math.max(
        0.0001,
        gameboyScaleEnd - gameboyScaleStart
      );
      const gameboyScaleT = Math.max(
        0,
        Math.min(1, (progress - gameboyScaleStart) / gameboyScaleWindow)
      );
      const gameboyScaleEase =
        gameboyScaleT * gameboyScaleT * (3 - 2 * gameboyScaleT);

      const gameboyScale = gameboyScaleEase * 0.6;
      gameboyTargetRotation = gameboyMaxRotation * gameboyScaleEase;

      gsap.set(".model-container--gameboy", {
        scale: gameboyScale,
        autoAlpha: gameboyScaleEase,
      });

      // Model rotation
      // Stop rotating once the last tooltip has finished revealing.
      // (We approximate "finished" as a small buffer after the last tooltip's trigger.)
      const rotationStartAt = 0.05;
      const rotationStopAt = tooltipStart + lastTooltipTriggerOffset + 0.03;
      const rotationWindow = Math.max(0.0001, rotationStopAt - rotationStartAt);
      const p = Math.max(0, Math.min(1, (progress - rotationStartAt) / rotationWindow));

      targetRotation = Math.PI * 3 * 4 * p;
    },
    });
  }

  // ------------------------------------------------------------
  // Gallery pin
  // ------------------------------------------------------------
  const gallerySection = document.querySelector(".gallery-section");
  if (gallerySection) {
    ScrollTrigger.create({
      trigger: gallerySection,
      start: "top top",
      end: () => `+=${window.innerHeight * 1.5}`,
      pin: true,
      pinSpacing: true,
      id: "gallery-pin",
      onEnter: () => {
        window.galleryPinned = true;
      },
      onLeave: () => {
        window.galleryPinned = false;
      },
      onEnterBack: () => {
        window.galleryPinned = true;
      },
      onLeaveBack: () => {
        window.galleryPinned = false;
      },
    });
  }


});
