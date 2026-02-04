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

  const projectsLinks = document.querySelectorAll('a[href="#projects-anchor"]');
  projectsLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const pinTrigger = ScrollTrigger.getById("projects-pin");
      if (!pinTrigger) {
        scrollToElement(document.querySelector("#projects-anchor"));
        closeNavIfOpen();
        return;
      }

      const maskEnd = 0.082;
      const targetScroll =
        pinTrigger.start + (pinTrigger.end - pinTrigger.start) * maskEnd;

      smoothScrollTo(targetScroll);
      closeNavIfOpen();
    });
  });

  const aboutLinks = document.querySelectorAll('a[href="#about-anchor"]');
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
      const headerDuration = 0.5;
      const circularStart = headerStart + headerDuration - 0.1;
      const circularDuration = 0.1;
      const header2Start = circularStart + circularDuration
      ;
      const targetScroll =
        pinTrigger.start + (pinTrigger.end - pinTrigger.start) * header2Start;

      smoothScrollTo(targetScroll);
      closeNavIfOpen();
    });
  });

  const galleryLinks = document.querySelectorAll('a[href="#gallery-section"]');
  galleryLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const gallerySection = document.querySelector("#gallery-section");
      if (!gallerySection) return;

      const galleryPin = ScrollTrigger.getById("gallery-pin");
      const targetScroll = galleryPin
        ? galleryPin.start
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



  // ------------------------------------------------------------
  // 1) SplitText setup (your original intent)
  // ------------------------------------------------------------
  // Split text into chars and build a reveal timeline.
  const createCharReveal = (selector, options = {}) => {
    const {
      total = 0.7,
      charDuration = 0.12,
      ease = "power3.out",
    } = options;
    const split = new SplitText(selector, {
      type: "chars",
      charsClass: "char",
    });

    // Wrap each char in an inner span for reveal motion
    split.chars.forEach((char) => {
      char.innerHTML = `<span>${char.innerHTML}</span>`;
    });

    const charCount = split.chars.length || 1;
    const stagger =
      charCount > 1
        ? Math.max(0, (total - charDuration) / (charCount - 1))
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

  const { tl: headerCharTl } = createCharReveal(".header-1 h1", {
    total: 0.7,
    charDuration: 0.12,
  });

  const { tl: headerCharT2 } = createCharReveal(".horizontal-grid-row-2[data-position=\"4\"] h2", {
    total: 0.5,
    charDuration: 0.12,
  });

  const { tl: headerCharT3 } = createCharReveal(".horizontal-grid-row[data-position=\"5\"] h2", {
    total: 0.5,
    charDuration: 0.12,
  });

  const { tl: Header2CharT1 } = createCharReveal(".horizontal-grid-row[data-position=\"7\"] h1", {
    total: 0.5,
    charDuration: 0.12,
  });

  const { tl: Header2CharT2 } = createCharReveal(".horizontal-grid-row-2[data-position=\"9\"] h1", {
    total: 0.5,
    charDuration: 0.12,
  });

  const { tl: Header2CharT3 } = createCharReveal(".horizontal-grid-row[data-position=\"10\"] h2", {
    total: 0.5,
    charDuration: 0.12,
  });

  const { tl: Header2CharT4 } = createCharReveal(".horizontal-grid-row-2[data-position=\"10\"] h2", {
    total: 0.5,
    charDuration: 0.12,
  });




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

  // FIX: your HTML uses `.model-container` (not `.modal-container`)
  const modelContainer = document.querySelector(".model-container");
  if (!modelContainer) {
    console.warn('Missing ".model-container" in HTML. Canvas not attached.');
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

    // Center model at origin
    const box = new THREE.Box3().setFromObject(model);
    const center = box.getCenter(new THREE.Vector3());
    model.position.sub(center);

    // small offset like tutorial-style
    model.position.x += isMobile ? modelSize.x * 0 : modelSize.x * 0;
    model.position.y += -modelSize.y * -0.20;

    model.rotation.set(0, 0, 0);
    model.rotation.z = isMobile ? 0 : THREE.MathUtils.degToRad(25);

    // Keep the JS rotation state aligned with the model after resets (e.g. resize).
    currentRotation = 0;
    if (targetRotation !== 0) {
      model.rotateOnAxis(modelRotationAxis, targetRotation);
      currentRotation = targetRotation;
    }

    const cameraDistance = isMobile ? 2.2 : 1.35;
    const maxDim = Math.max(modelSize.x, modelSize.y, modelSize.z);
    camera.position.set(0, 0, maxDim * cameraDistance);
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
    renderer.render(scene, camera);
  }
  animate();

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    setupModel();
  });

  // ------------------------------------------------------------
  // 3) ScrollTrigger pinned scene + UI updates
  // ------------------------------------------------------------
  ScrollTrigger.create({
    trigger: ".projects",
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
      gsap.set(".model-container", {
        scale: modelScale,
      });
      gsap.set(".rect-intro", {
        scale: 1 - Math.min(1, maskProgress * 1.4),
      });

      // Header-1 slide (delayed until mask has disappeared)
      const headerStart = maskEnd * 0.1;

      const headerDuration = 0.5;
      const revealSpeed = 10;
      const headerProgress = Math.max(
        0,
        Math.min(1, (progress - headerStart) / headerDuration)
      );
      const delayT1 = 0.15; // 15% delay
      const delayT2 = 0.4; // 40% delay
      const delayT3 = 0.515; //45% delay
      headerCharTl.progress(Math.min(1, (headerProgress - delayT1) * revealSpeed));
      headerCharT2.progress(Math.min(1, (headerProgress - delayT2) * revealSpeed));
      headerCharT3.progress(Math.min(1, (headerProgress - delayT3) * revealSpeed));
      gsap.set(".header-1", {
        xPercent:
          progress < headerStart
            ? 0
            : progress > headerStart + headerDuration
            ? -100
            : -100 * headerProgress,
      });
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
      const circularStart = headerStart + headerDuration - 0.1;
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

      

      // Header-2 slide
      const header2Start = circularStart + circularDuration - 0.2;
      const header2Duration = 0.35;
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
      const header2XPercent =
        progress < header2Start
          ? 100
          : progress > header2Start + header2Duration
          ? -200
          : 100 - 300 * header2Eased;
      const delayT1_2 = 0.575;
      const delayT2_2 = 0.715;
      const delayT3_2 = 0.75;
      Header2CharT1.progress(Math.min(1, (header2Progress - delayT1_2) * revealSpeed));
      Header2CharT2.progress(Math.min(1, (header2Progress - delayT2_2) * revealSpeed));
      Header2CharT3.progress(Math.min(1, (header2Progress - delayT3_2) * revealSpeed));
      Header2CharT4.progress(Math.min(1, (header2Progress - delayT3_2) * revealSpeed));
      gsap.set(".header-2", { xPercent: header2XPercent });

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

      // Model rotation
      // Stop rotating once the last tooltip has finished revealing.
      // (We approximate "finished" as a small buffer after the last tooltip's trigger.)
      const rotationStartAt = 0.05;
      const rotationStopAt = tooltipStart + lastTooltipTriggerOffset + 0.03;
      const rotationWindow = Math.max(0.0001, rotationStopAt - rotationStartAt);
      const p = Math.max(0, Math.min(1, (progress - rotationStartAt) / rotationWindow));

      // Mostly linear, with a longer ease-out near the end (no snap at stop).
      const easePortion = 0.25; // last 25% of the rotation timeline eases out
      const easeStart = 1 - easePortion;
      let easedP = p;
      if (p > easeStart) {
        const t = (p - easeStart) / easePortion; // 0..1
        // Smooth deceleration with matched slope at the transition:
        // s(0)=0, s(1)=1, s'(0)=1, s'(1)=0
        const s = -t * t * t + t * t + t;
        easedP = easeStart + s * easePortion;
      }

      targetRotation = Math.PI * 3 * 4 * easedP;
    },
  });

  // ------------------------------------------------------------
  // Gallery pin
  // ------------------------------------------------------------
  ScrollTrigger.create({
    trigger: ".gallery-section",
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


});
