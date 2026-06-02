import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Lenis from "lenis";
import evAniRaw from "./images/Icons/EV_Ani.svg?raw";

document.addEventListener("DOMContentLoaded", () => {

  // ============================================================
  // GSAP + Lenis
  // ============================================================
  gsap.registerPlugin(ScrollTrigger, SplitText);

  // The projects page runs its own Lenis (project-script.js). Creating a second
  // instance here would fight it and desync ScrollTrigger, leaving scroll-reveal
  // content stuck hidden — so only set up Lenis when NOT on the projects page.
  const isProjectsPage = document.body.dataset.page === "projects";
  let lenis = null;
  if (!isProjectsPage) {
    lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((t) => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
  }

  // ============================================================
  // Preload lazy images ~1.5 screens ahead of the viewport so fast
  // scrolling doesn't catch them mid-load. This adds no upfront cost:
  // each image only begins loading as you approach it, and decoding is
  // done off the main thread so it can paint without a hitch.
  // ============================================================
  if ("IntersectionObserver" in window) {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    if (lazyImages.length) {
      const imgPreloader = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const img = entry.target;
          img.loading = "eager";                       // start the fetch now
          if (typeof img.decode === "function") {
            img.decode().catch(() => {});              // decode ahead of paint
          }
          observer.unobserve(img);
        });
      }, { rootMargin: "2500px 0px" });
      lazyImages.forEach((img) => imgPreloader.observe(img));
    }
  }

  // ============================================================
  // Viewport helpers (--vh / --vw CSS vars)
  // ============================================================
  const setVh = () => {
    const viewportHeight = window.visualViewport?.height ?? window.innerHeight;
    const viewportWidth  = window.visualViewport?.width  ?? window.innerWidth;
    document.documentElement.style.setProperty("--vh", `${viewportHeight * 0.01}px`);
    document.documentElement.style.setProperty("--vw", `${viewportWidth  * 0.01}px`);
  };

  const refreshViewport = () => {
    setVh();
    if (typeof lenis?.resize === "function") lenis.resize();
    ScrollTrigger.refresh();
  };

  setVh();

  window.addEventListener("pageshow", (event) => {
    requestAnimationFrame(() => requestAnimationFrame(refreshViewport));
    if (event?.persisted) window.setTimeout(refreshViewport, 50);
  });
  window.addEventListener("load",              () => window.setTimeout(refreshViewport, 50));
  window.addEventListener("orientationchange", () => window.setTimeout(refreshViewport, 250));

  if (window.visualViewport) {
    window.visualViewport.addEventListener("resize", refreshViewport);
    window.visualViewport.addEventListener("scroll", refreshViewport);
  }

  // ============================================================
  // Navigation
  // ============================================================
  const nav          = document.querySelector(".nav");
  const navMenu      = document.querySelector(".nav-menu");
  const navToggle    = document.querySelector(".nav-toggle");
  const navSubtoggle = document.querySelector(".nav-subtoggle");
  const navSubmenu   = document.querySelector("#projects-submenu");
  const navLinks     = document.querySelectorAll(".nav-menu .nav-link, .nav-menu .nav-sublink");

  let navOpen       = false;
  let navHidden     = false;
  let lastScrollY   = window.scrollY;
  let downAccum     = 0;          // accumulated downward scroll since last direction change
  const NAV_HIDE_PX = 550;        // ~5-6 wheel clicks of continuous downward scroll to hide

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

  const navTl = gsap.timeline({ paused: true });
  navTl.to(navMenu, { opacity: 1, y: "0%", duration: 0.4, ease: "power3.out" });
  navTl.addLabel("linksStart", "-=0.15");
  navTl.to(navLinks, { opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: "power3.out" }, "linksStart");
  if (navSubtoggle) {
    navTl.to(navSubtoggle, { opacity: 1, y: 0, duration: 0.35, ease: "power3.out" }, "linksStart+=0.375");
  }

  const sigWhite = document.querySelector(".nav-signature--white");
  const sigDark  = document.querySelector(".nav-signature--dark");
  let savedSigOpacity = null;

  const setNavState = (isOpen) => {
    navOpen = isOpen;
    document.body.classList.toggle("nav-open", navOpen);
    navToggle.setAttribute("aria-expanded", String(navOpen));
    navMenu.setAttribute("aria-hidden", String(!navOpen));

    if (sigWhite && sigDark) {
      if (isOpen) {
        savedSigOpacity = {
          white: parseFloat(getComputedStyle(sigWhite).opacity),
          dark:  parseFloat(getComputedStyle(sigDark).opacity),
        };
        gsap.to(sigWhite, { opacity: 1, duration: 0.3, overwrite: true });
        gsap.to(sigDark,  { opacity: 0, duration: 0.3, overwrite: true });
      } else if (savedSigOpacity) {
        gsap.set(sigWhite, { opacity: savedSigOpacity.white, overwrite: true });
        gsap.set(sigDark,  { opacity: savedSigOpacity.dark,  overwrite: true });
        savedSigOpacity = null;
      }
    }

    if (navOpen) {
      setNavHidden(false);
      navTl.play(0);
    } else {
      setProjectsSubmenu(false);
      navTl.reverse();
    }
  };

  const closeNavIfOpen = () => { if (navOpen) setNavState(false); };

  const handleNavScroll = (currentY) => {
    if (!nav) return;
    if (navOpen) { setNavHidden(false); lastScrollY = currentY; return; }

    if (currentY <= 40) { setNavHidden(false); downAccum = 0; lastScrollY = currentY; return; }

    const delta = currentY - lastScrollY;
    if (delta > 0) {
      downAccum += delta;
      if (downAccum >= NAV_HIDE_PX && !navHidden) setNavHidden(true);
    } else if (delta < -2) {
      downAccum = 0;
      if (navHidden) setNavHidden(false);
    }
    lastScrollY = currentY;
  };

  if (typeof lenis?.on === "function") {
    lenis.on("scroll", ({ scroll }) => handleNavScroll(scroll));
  } else {
    window.addEventListener("scroll", () => handleNavScroll(window.scrollY), { passive: true });
  }
  handleNavScroll(window.scrollY);

  if (navToggle) {
    navToggle.addEventListener("click", () => setNavState(!navOpen));
  }
  if (navSubtoggle) {
    navSubtoggle.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      setProjectsSubmenu(navSubtoggle.getAttribute("aria-expanded") !== "true");
    });
  }
  navLinks.forEach((link) => link.addEventListener("click", closeNavIfOpen));

  // ============================================================
  // Nav-toggle EV icon hover animation
  // ------------------------------------------------------------
  // EV_Ani.svg is a SVGator (JS-driven) animation. Its runtime auto-plays on
  // load and never exposes the player on the DOM, so we proxy the global it
  // registers into and wrap the player class's `play` to (a) capture the live
  // player instance and (b) skip the initial autoplay, leaving it idle until
  // the user hovers. Then: hover -> play forward & hold the last frame;
  // hover off -> play in reverse, then swap back to the static EV_.svg.
  // ============================================================
  const setupEvToggleIcon = () => {
    const host = navToggle?.querySelector(".ev-anim");
    if (!host || host.dataset.evReady) return;
    host.dataset.evReady = "1";

    let player = null;

    const captureClass = (cls) => {
      if (typeof cls !== "function" || cls.__evWrapped) return cls;
      if (!cls.prototype || typeof cls.prototype.play !== "function") return cls;
      cls.__evWrapped = true;
      const originalPlay = cls.prototype.play;
      cls.prototype.play = function () {
        if (!player) {
          player = this;                    // grab the live player instance
          cls.prototype.play = originalPlay; // restore normal play for later use
          return;                           // skip the one-shot autoplay
        }
        return originalPlay.apply(this, arguments);
      };
      return cls;
    };

    // Proxy SVGator's global registry so the player class is wrapped the instant
    // it is assigned, before its data bundle builds and auto-plays.
    const KEY = "__SVGATOR_PLAYER__";
    const base = window[KEY] && typeof window[KEY] === "object" ? window[KEY] : {};
    window[KEY] = new Proxy(base, {
      set(target, prop, value) {
        target[prop] = captureClass(value);
        return true;
      },
    });

    // Inject the SVG markup, then re-run its (otherwise inert) script so SVGator
    // initialises against the element now living in the DOM.
    const markup = evAniRaw.slice(evAniRaw.indexOf("<svg"));
    const tmp = document.createElement("div");
    tmp.innerHTML = markup;
    const svgEl = tmp.querySelector("svg");
    const inertScript = tmp.querySelector("script");
    if (!svgEl) return;
    if (inertScript) inertScript.remove();
    host.appendChild(svgEl);
    if (inertScript) {
      const liveScript = document.createElement("script");
      liveScript.textContent = inertScript.textContent
        .replace(/^\s*\/\/<!\[CDATA\[/, "")
        .replace(/<!\[CDATA\[/, "")
        .replace(/\]\]>\s*$/, "");
      document.body.appendChild(liveScript); // runs synchronously -> player captured
    }

    if (!player) return; // capture failed: leave the static icon as-is

    // Force a single, forward, hold-at-end playthrough regardless of how the
    // clip was exported, so hover reliably stops on the last frame.
    try {
      if (player._settings) {
        player._settings.iterations = 1;
        player._settings.fill = 1;
        player._settings.alternate = false;
        player._settings.direction = 1;
      }
    } catch (e) { /* keep exported defaults */ }

    try { player.stop(); } catch (e) { /* settle to frame 0 */ }

    let watchId = 0;
    const stopWatch = () => { if (watchId) { cancelAnimationFrame(watchId); watchId = 0; } };
    const atEnd = () => { try { return !!player.reachedToEnd && player.reachedToEnd(); } catch (e) { return false; } };

    const playForward = () => {
      stopWatch();
      navToggle.classList.add("ev-active");
      try {
        player._rollingBack = false;
        if (atEnd()) return;
        if (typeof player.restart === "function") player.restart();
        else player.play();
      } catch (e) { return; }
      const tick = () => {
        if (atEnd()) { try { player.pause(); } catch (e) {} watchId = 0; return; }
        watchId = requestAnimationFrame(tick);
      };
      watchId = requestAnimationFrame(tick);
    };

    const playReverse = () => {
      stopWatch();
      try { player.reverse(true); } catch (e) { navToggle.classList.remove("ev-active"); return; }
      const tick = () => {
        if ((player.offset ?? 0) <= 0) {
          try { player.stop(); } catch (e) {}
          navToggle.classList.remove("ev-active");
          watchId = 0;
          return;
        }
        watchId = requestAnimationFrame(tick);
      };
      watchId = requestAnimationFrame(tick);
    };

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const canAnimate = () => !navOpen && !reducedMotion.matches;

    navToggle.addEventListener("mouseenter", () => { if (canAnimate()) playForward(); });
    navToggle.addEventListener("mouseleave", () => { if (navToggle.classList.contains("ev-active")) playReverse(); });
    navToggle.addEventListener("focus",      () => { if (canAnimate()) playForward(); });
    navToggle.addEventListener("blur",        () => { if (navToggle.classList.contains("ev-active")) playReverse(); });

    // When the menu opens, drop straight back to the idle icon (the × takes over).
    navToggle.addEventListener("click", () => {
      if (navOpen) {
        stopWatch();
        try { player.stop(); } catch (e) {}
        navToggle.classList.remove("ev-active");
      }
    });
  };
  setupEvToggleIcon();

  // ============================================================
  // Smooth scroll helpers
  // ============================================================
  const smoothScrollTo = (targetScroll, duration = 1.2) => {
    if (typeof lenis?.scrollTo === "function") {
      lenis.scrollTo(targetScroll, { duration, easing: (t) => 1 - Math.pow(1 - t, 3) });
      return;
    }
    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  };

  const scrollToElement = (element, duration = 1.2) => {
    if (!element) return;
    smoothScrollTo(element.getBoundingClientRect().top + window.scrollY, duration);
  };

  // ============================================================
  // Nav anchor links (index page only)
  // ============================================================
  const isIndexPage = Boolean(document.querySelector(".projects"));

  if (isIndexPage) {
    document.querySelectorAll('a[href$="#projects-anchor"]').forEach((link) => {
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
        const targetProgress = Math.min(1, headerStart + headerDuration * 0.16);
        const targetScroll = pinTrigger.start + (pinTrigger.end - pinTrigger.start) * targetProgress;
        smoothScrollTo(targetScroll);
        closeNavIfOpen();
      });
    });

    document.querySelectorAll('a[href$="#about-anchor"]').forEach((link) => {
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
        const targetScroll =
          pinTrigger.start + (pinTrigger.end - pinTrigger.start) * (circularStart + 0.18);
        smoothScrollTo(targetScroll);
        closeNavIfOpen();
      });
    });

    document.querySelectorAll('a[href$="#gallery-section"]').forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const gallerySection = document.querySelector("#gallery-section");
        if (!gallerySection) return;
        const galleryPin = ScrollTrigger.getById("gallery-pin");
        const targetScroll = galleryPin
          ? galleryPin.start + 1
          : gallerySection.getBoundingClientRect().top + window.scrollY;
        smoothScrollTo(targetScroll, 1.2);
        window.galleryPinned = true;
        window.setTimeout(() => ScrollTrigger.update(), 1.2 * 1000 + 100);
        closeNavIfOpen();
      });
    });
  }

  // ============================================================
  // SplitText
  // ============================================================
  const createCharReveal = (selector, options = {}) => {
    const { total = 0.7, charDuration = 0.12, ease = "power3.out", splitType } = options;
    const type  = splitType ?? "words";
    const split = new SplitText(selector, { type, charsClass: "char", wordsClass: "char" });
    const units = type === "words" ? split.words : split.chars;
    units.forEach((unit) => { unit.innerHTML = `<span>${unit.innerHTML}</span>`; });

    const unitCount = units.length || 1;
    const stagger   = unitCount > 1 ? Math.max(0, (total - charDuration) / (unitCount - 1)) : 0;

    const tl = gsap.timeline({ paused: true });
    gsap.set(`${selector} .char > span`, { y: "100%" });
    tl.to(`${selector} .char > span`, { y: "0%", duration: charDuration, ease, stagger });
    return { split, tl };
  };

  let headerCharTl  = null;
  let headerCharT2  = null;
  let headerCharT3  = null;
  let Header2CharT1 = null;
  let Header2CharT2 = null;
  let Header2CharT3 = null;
  let Header2CharT4 = null;
  let headerTextSplits = [];

  const setupTextSplits = () => {
    headerTextSplits.forEach(({ split, tl }) => {
      if (tl) tl.kill();
      if (split && typeof split.revert === "function") split.revert();
    });
    headerTextSplits = [];

    const add = (selector, opts) => {
      const result = createCharReveal(selector, opts);
      headerTextSplits.push(result);
      return result.tl;
    };

    headerCharTl  = add(".header-1 h1",                                  { total: 0.7, charDuration: 0.12 });
    headerCharT2  = add('.horizontal-grid-row-2[data-position="4"] h2',  { total: 0.5, charDuration: 0.12 });
    headerCharT3  = add('.horizontal-grid-row[data-position="5"] h2',    { total: 0.5, charDuration: 0.12 });
    Header2CharT1 = add('.horizontal-grid-row[data-position="7"] h1',    { total: 0.5, charDuration: 0.12 });
    Header2CharT2 = add('.horizontal-grid-row-2[data-position="9"] h1',  { total: 0.5, charDuration: 0.12 });
    Header2CharT3 = add('.horizontal-grid-row[data-position="10"] h2',   { total: 0.5, charDuration: 0.12 });
    Header2CharT4 = add('.horizontal-grid-row-2[data-position="10"] h2', { total: 0.5, charDuration: 0.12 });

    ScrollTrigger.refresh();
  };

  setupTextSplits();

  const titleSplit       = new SplitText(".tooltip .title h2",       { type: "lines", linesClass: "line" });
  const descriptionSplit = new SplitText(".tooltip .description p",  { type: "lines", linesClass: "line" });
  [...titleSplit.lines, ...descriptionSplit.lines].forEach((line) => {
    line.innerHTML = `<span>${line.innerHTML}</span>`;
  });

  // ============================================================
  // Rectangular mask — cursor follow
  // ============================================================
  const rectMask = document.querySelector(".rectangular-mask");
  if (rectMask) {
    const setMaskPos = (clientX, clientY) => {
      const rect     = rectMask.getBoundingClientRect();
      const clampedX = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width)  * 100));
      const clampedY = Math.max(0, Math.min(100, ((clientY - rect.top)  / rect.height) * 100));
      rectMask.style.setProperty("--mx", `${clampedX}%`);
      rectMask.style.setProperty("--my", `${clampedY}%`);
    };
    rectMask.addEventListener("pointermove",  (e) => setMaskPos(e.clientX, e.clientY));
    rectMask.addEventListener("pointerleave", ()  => {
      rectMask.style.setProperty("--mx", "50%");
      rectMask.style.setProperty("--my", "50%");
    });
  }

  // ============================================================
  // Tooltip config (consumed inside ScrollTrigger onUpdate)
  // ============================================================
  const tooltipSelectors = [
    {
      trigger: 0.02,
      elements: [
        ".tooltip:nth-of-type(1) .icon ion-icon",
        ".tooltip:nth-of-type(1) .title .line > span",
        ".tooltip:nth-of-type(1) .description .line > span",
      ],
    },
    {
      trigger: 0.07,
      elements: [
        ".tooltip:nth-of-type(2) .icon ion-icon",
        ".tooltip:nth-of-type(2) .title .line > span",
        ".tooltip:nth-of-type(2) .description .line > span",
      ],
    },
  ];

  const lastTooltipTriggerOffset = tooltipSelectors.reduce(
    (max, { trigger }) => Math.max(max, trigger ?? 0), 0
  );

  // ============================================================
  // Three.js — Laptop model
  // ============================================================
  let model           = null;
  let modelSize       = null;
  let currentRotation = 0;
  let targetRotation  = 0;
  const modelRotationAxis = new THREE.Vector3(0, 1, 0);
  const clock             = new THREE.Clock();
  const rotationDamp      = 8;

  const scene    = new THREE.Scene();
  const camera   = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

  renderer.setClearColor(0x000000, 0);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type    = THREE.PCFSoftShadowMap;
  if ("outputColorSpace" in renderer) renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping         = THREE.NoToneMapping;
  renderer.toneMappingExposure = 1.0;

  const modelContainer = document.querySelector(".model-container--laptop");
  if (!modelContainer) {
    console.warn('Missing ".model-container--laptop" in HTML. Canvas not attached.');
    return;
  }
  modelContainer.appendChild(renderer.domElement);

  scene.add(new THREE.AmbientLight(0xffffff, 0.7));
  const mainLight = new THREE.DirectionalLight(0xffffff, 1.0);
  mainLight.position.set(1, 2, 3);
  mainLight.castShadow = true;
  mainLight.shadow.bias = -0.001;
  mainLight.shadow.mapSize.width = mainLight.shadow.mapSize.height = 1024;
  scene.add(mainLight);
  const fillLight = new THREE.DirectionalLight(0xffffff, 0.5);
  fillLight.position.set(-2, 0, -2);
  scene.add(fillLight);

  function setupModel() {
    if (!model || !modelSize) return;
    const isMobile = window.innerWidth < 1000;

    model.rotation.set(0, 0, 0);
    model.rotation.z = isMobile ? 0 : THREE.MathUtils.degToRad(25);

    const box    = new THREE.Box3().setFromObject(model);
    const center = box.getCenter(new THREE.Vector3());
    const size   = box.getSize(new THREE.Vector3());
    model.position.sub(center);
    model.position.y += size.y * 0.2;

    currentRotation = 0;
    if (targetRotation !== 0) {
      model.rotateOnAxis(modelRotationAxis, targetRotation);
      currentRotation = targetRotation;
    }

    const fitPadding  = isMobile ? 1.35 : 1.15;
    const rotatedSize = new THREE.Box3().setFromObject(model).getSize(new THREE.Vector3());
    const fov         = THREE.MathUtils.degToRad(camera.fov);
    const dH = (rotatedSize.y * fitPadding) / (2 * Math.tan(fov / 2));
    const dW = (rotatedSize.x * fitPadding) / (2 * Math.tan(fov / 2) * camera.aspect);
    camera.position.set(0, 0, Math.max(dH, dW) + rotatedSize.z * 0.5);
    camera.lookAt(0, 0, 0);
  }

  new GLTFLoader().load(
    "/models/laptop.glb",
    (gltf) => {
      model = gltf.scene;
      model.traverse((node) => {
        if (node.isMesh) {
          node.castShadow = node.receiveShadow = true;
          const mat = node.material;
          if (mat && typeof mat === "object") {
            if ("roughness" in mat) mat.roughness = 0.05;
            if ("metalness" in mat) mat.metalness = 0.9;
            mat.needsUpdate = true;
          }
        }
      });
      modelSize = new THREE.Box3().setFromObject(model).getSize(new THREE.Vector3());
      scene.add(model);
      setupModel();
    },
    undefined,
    (err) => console.error("GLB load failed ❌", err)
  );

  // ============================================================
  // Three.js — Gameboy model
  // ============================================================
  let gameboyModel           = null;
  let gameboyModelSize       = null;
  let gameboyCurrentRotation = 0;
  let gameboyTargetRotation  = 0;
  const gameboyRotationAxis  = new THREE.Vector3(0, 1, 0);
  const gameboyRotationDamp  = 8;
  const gameboyMaxRotation   = Math.PI * 2;

  const gameboyContainer = document.querySelector(".model-container--gameboy");
  if (!gameboyContainer) {
    console.warn('Missing ".model-container--gameboy" in HTML. Canvas not attached.');
  }

  const getGameboyViewportSize = () => ({
    width:  gameboyContainer ? gameboyContainer.offsetWidth  || window.innerWidth  : window.innerWidth,
    height: gameboyContainer ? gameboyContainer.offsetHeight || window.innerHeight : window.innerHeight,
  });

  const gameboyScene    = gameboyContainer ? new THREE.Scene() : null;
  const gameboyCamera   = gameboyContainer ? new THREE.PerspectiveCamera(60, 1, 0.1, 1000) : null;
  const gameboyRenderer = gameboyContainer ? new THREE.WebGLRenderer({ antialias: true, alpha: true }) : null;

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
    gameboyRenderer.shadowMap.type    = THREE.PCFSoftShadowMap;
    if ("outputColorSpace" in gameboyRenderer) gameboyRenderer.outputColorSpace = THREE.SRGBColorSpace;
    gameboyRenderer.toneMapping         = THREE.NoToneMapping;
    gameboyRenderer.toneMappingExposure = 1.0;
    gameboyContainer.appendChild(gameboyRenderer.domElement);
    gsap.set(gameboyContainer, { xPercent: -50, yPercent: -50, scale: 0, autoAlpha: 0, transformOrigin: "50% 50%" });
  }

  if (gameboyScene) {
    gameboyScene.add(new THREE.AmbientLight(0xffffff, 0.8));
    const gameboyMainLight = new THREE.DirectionalLight(0xffffff, 0.9);
    gameboyMainLight.position.set(1, 2, 3);
    gameboyMainLight.castShadow = true;
    gameboyMainLight.shadow.bias = -0.001;
    gameboyMainLight.shadow.mapSize.width = gameboyMainLight.shadow.mapSize.height = 1024;
    gameboyScene.add(gameboyMainLight);
    const gameboyFillLight = new THREE.DirectionalLight(0xffffff, 0.5);
    gameboyFillLight.position.set(-2, 0, -2);
    gameboyScene.add(gameboyFillLight);
  }

  function setupGameboyModel() {
    if (!gameboyModel || !gameboyModelSize || !gameboyCamera) return;
    const isMobile = window.innerWidth < 1000;

    gameboyModel.rotation.set(0, 0, 0);
    gameboyModel.rotation.y = THREE.MathUtils.degToRad(90);

    const box    = new THREE.Box3().setFromObject(gameboyModel);
    const center = box.getCenter(new THREE.Vector3());
    const size   = box.getSize(new THREE.Vector3());
    gameboyModel.position.sub(center);
    gameboyModel.position.x += size.x * (isMobile ? -0.14 : -0.1);
    gameboyModel.position.y += size.y * (isMobile ? -0.12 : -0.05);

    gameboyCurrentRotation = 0;
    if (gameboyTargetRotation !== 0) {
      gameboyModel.rotateOnAxis(gameboyRotationAxis, gameboyTargetRotation);
      gameboyCurrentRotation = gameboyTargetRotation;
    }

    const fitPadding  = isMobile ? 1.85 : 1.3;
    const rotatedSize = new THREE.Box3().setFromObject(gameboyModel).getSize(new THREE.Vector3());
    const maxXZ       = Math.sqrt(rotatedSize.x * rotatedSize.x + rotatedSize.z * rotatedSize.z);
    const fov         = THREE.MathUtils.degToRad(gameboyCamera.fov);
    const dH = (rotatedSize.y * fitPadding) / (2 * Math.tan(fov / 2));
    const dW = (maxXZ * fitPadding) / (2 * Math.tan(fov / 2) * gameboyCamera.aspect);
    gameboyCamera.position.set(0, 0, Math.max(dH, dW) + rotatedSize.z * 0.5);
    gameboyCamera.lookAt(0, 0, 0);
  }

  if (gameboyScene) {
    new GLTFLoader().load(
      "/models/nintendo_gameboy_low-poly.glb",
      (gltf) => {
        gameboyModel = gltf.scene;
        gameboyModel.traverse((node) => {
          if (node.isMesh) node.castShadow = node.receiveShadow = true;
        });
        gameboyModelSize = new THREE.Box3().setFromObject(gameboyModel).getSize(new THREE.Vector3());
        gameboyScene.add(gameboyModel);
        setupGameboyModel();
      },
      undefined,
      (err) => console.error("Gameboy GLB load failed", err)
    );
  }

  // ============================================================
  // Render loop
  // ============================================================
  function animate() {
    requestAnimationFrame(animate);
    const delta = Math.min(0.05, clock.getDelta());

    if (model) {
      const next = THREE.MathUtils.damp(currentRotation, targetRotation, rotationDamp, delta);
      const step = next - currentRotation;
      if (Math.abs(step) > 0.000001) { model.rotateOnAxis(modelRotationAxis, step); currentRotation = next; }
    }

    if (gameboyModel) {
      const next = THREE.MathUtils.damp(gameboyCurrentRotation, gameboyTargetRotation, gameboyRotationDamp, delta);
      const step = next - gameboyCurrentRotation;
      if (Math.abs(step) > 0.000001) { gameboyModel.rotateOnAxis(gameboyRotationAxis, step); gameboyCurrentRotation = next; }
    }

    renderer.render(scene, camera);
    if (gameboyRenderer && gameboyScene && gameboyCamera) {
      gameboyRenderer.render(gameboyScene, gameboyCamera);
    }
  }
  animate();

  // ============================================================
  // Window resize
  // ============================================================
  const header1El        = document.querySelector(".header-1");
  const header2El        = document.querySelector(".header-2");
  const _h1Columns = header1El?.querySelectorAll(".horizontal-grid-column");
  const header1LastElement = _h1Columns?.length ? _h1Columns[_h1Columns.length - 1] : header1El?.querySelector(".horizontal-grid-spacer:last-of-type");
  const projectsSection  = document.querySelector(".projects");
  const navSignatureWhite = document.querySelector(".nav-signature--white");

  let resizeTimer = null;
  window.addEventListener("resize", () => {
    if (resizeTimer) window.clearTimeout(resizeTimer);
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

      if (typeof lenis?.resize === "function") lenis.resize();
      ScrollTrigger.refresh();
    }, 150);
  });

  // ============================================================
  // ScrollTrigger — Projects pin
  // ============================================================
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

        // — Rectangular mask (shrinks away at start) —
        const maskEnd      = 0.132;
        const maskProgress = Math.max(0, Math.min(1, progress / maskEnd));
        const rect = rectMask?.getBoundingClientRect?.();
        const w = rect?.width ?? 0;
        const h = rect?.height ?? 0;
        const base   = maskProgress;
        const aspect = w && h ? w / h : 1;
        const insetY     = base;
        const insetXRect = base;
        let insetXSquare = base;
        if (aspect > 1) insetXSquare = (1 - (1 / aspect) * (1 - 2 * insetY)) / 2;
        const t      = Math.max(0, Math.min(1, (base - 0.2) / 0.25));
        const insetX = insetXRect + (insetXSquare - insetXRect) * t;
        const insetXClamped = Math.max(0, Math.min(0.5, insetX));
        const insetYClamped = Math.max(0, Math.min(0.5, insetY));
        const remainingW = w * (1 - 2 * insetXClamped);
        const remainingH = h * (1 - 2 * insetYClamped);
        const radiusPx   = Math.max(0, Math.min(remainingW, remainingH) / 2) * (base * 3);
        gsap.set(".rectangular-mask", {
          clipPath: `inset(${insetYClamped * 100}% ${insetXClamped * 100}% ${insetYClamped * 100}% ${insetXClamped * 100}% round ${radiusPx}px)`,
        });

        gsap.set(".rect-intro", { scale: 1 - Math.min(1, maskProgress * 1.4) });

        // — Header-1 slide —
        const headerStart    = maskEnd * 0.1;
        const headerDuration = 0.35;
        const revealSpeed    = 10;
        const headerProgress = Math.max(0, Math.min(1, (progress - headerStart) / headerDuration));
        headerCharTl.progress(Math.min(1, (headerProgress - 0.05) * revealSpeed));
        headerCharT2.progress(Math.min(1, (headerProgress - 0.25) * revealSpeed));
        headerCharT3.progress(Math.min(1, (headerProgress - 0.35) * revealSpeed));

        const header1Width = header1El
          ? header1El.scrollWidth || header1El.getBoundingClientRect().width
          : window.innerWidth;
        const header1EndX = -header1Width;
        const header1X    =
          progress < headerStart                   ? 0 :
          progress > headerStart + headerDuration  ? header1EndX :
          gsap.utils.interpolate(0, header1EndX, headerProgress);
        if (header1El) gsap.set(header1El, { x: header1X, xPercent: 0 });

        const bgProgress = Math.max(0, Math.min(1, (progress - headerStart) / (headerDuration * 1.6)));
        gsap.set("#header-1 .background-h1", {
          xPercent: progress < headerStart ? 0 : progress > headerStart + headerDuration * 1.6 ? -10 : -10 * bgProgress,
        });

        // — Circular mask —
        const circularStart    = headerStart + headerDuration + 0.005;
        const circularDuration = 0.1;
        const circularProgress = Math.max(0, Math.min(1, (progress - circularStart) / circularDuration));
        gsap.set(".circular-mask", { clipPath: `circle(${circularProgress * 100}% at 50% 50%)` });

        if (navToggle) {
          const eased = circularProgress * circularProgress * (3 - 2 * circularProgress);
          gsap.set(navToggle, { backgroundPosition: `${eased * 100}% 50%` });
        }

        // — Center signature: white over the projects band, back to normal at header-2 —
        if (navSignatureWhite) {
          const whiteAmount = maskProgress * (1 - circularProgress);
          gsap.set(navSignatureWhite, { opacity: whiteAmount });
        }

        // — Laptop model scale/fade —
        const modelScale = Math.min(1, maskProgress * 0.9);
        let modelScaleFade = 1;
        if (header1LastElement && header1EndX !== 0) {
          const lastRect        = header1LastElement.getBoundingClientRect();
          const modelCenterX    = window.innerWidth * 0.5;
          const lastRightAtZero = lastRect.right - header1X;
          const header1CrossT   = Math.max(0, Math.min(1, (modelCenterX - lastRightAtZero) / header1EndX));
          const fadeStart       = Math.min(Math.max(headerStart + headerDuration * header1CrossT, headerStart), circularStart);
          const fadeEnd         = circularStart + circularDuration * 0.2;
          const fadeT           = Math.max(0, Math.min(1, (progress - fadeStart) / Math.max(0.0001, fadeEnd - fadeStart)));
          modelScaleFade        = 1 - fadeT * fadeT * (3 - 2 * fadeT);
        }
        gsap.set(".model-container--laptop", { scale: modelScale * modelScaleFade, autoAlpha: 1 });

        // — Header-2 slide —
        const header2Start    = circularStart + circularDuration + 0.02;
        const header2Duration = 0.25;
        const header2Progress = Math.max(0, Math.min(1, (progress - header2Start) / header2Duration));
        const h2EaseStart = 1 - 0.18;
        let header2Eased  = header2Progress;
        if (header2Progress > h2EaseStart) {
          const t = (header2Progress - h2EaseStart) / 0.18;
          header2Eased = h2EaseStart + (-t * t * t + t * t + t) * 0.18;
        }
        const header2Width  = header2El
          ? header2El.scrollWidth || header2El.getBoundingClientRect().width
          : window.innerWidth;
        const header2StartX = window.innerWidth;
        const header2EndX   = -header2Width;
        const header2X      =
          progress < header2Start                    ? header2StartX :
          progress > header2Start + header2Duration  ? header2EndX :
          gsap.utils.interpolate(header2StartX, header2EndX, header2Eased);
        Header2CharT1.progress(Math.min(1, (header2Progress - 0.15) * revealSpeed));
        Header2CharT2.progress(Math.min(1, (header2Progress - 0.40) * revealSpeed));
        Header2CharT3.progress(Math.min(1, (header2Progress - 0.55) * revealSpeed));
        Header2CharT4.progress(Math.min(1, (header2Progress - 0.55) * revealSpeed));
        if (header2El) {
          gsap.set(header2El, { x: header2X, xPercent: 0, autoAlpha: progress >= header2Start ? 1 : 0 });
        }

        // — Tooltip dividers + reveals —
        const tooltipStart = header2Start + header2Duration - 0.05;
        const dividerT     = Math.max(0, Math.min(1, (progress - tooltipStart) / 0.2));
        gsap.set(".tooltip .divider", { scaleX: dividerT * dividerT * (3 - 2 * dividerT) });

        const tooltipRevealWindow = 0.07;
        tooltipSelectors.forEach(({ trigger, elements }) => {
          const tt    = Math.max(0, Math.min(1, (progress - (tooltipStart + trigger)) / tooltipRevealWindow));
          const eased = tt * tt * (3 - 2 * tt);
          gsap.set(elements, { y: `${(1 - eased) * 125}%` });
        });

        // — Gameboy scale-in —
        const gameboyScaleStart = tooltipStart + (tooltipSelectors[0]?.trigger ?? 0);
        const gameboyScaleEnd   = tooltipStart + lastTooltipTriggerOffset + tooltipRevealWindow;
        const gT      = Math.max(0, Math.min(1, (progress - gameboyScaleStart) / Math.max(0.0001, gameboyScaleEnd - gameboyScaleStart)));
        const gEased  = gT * gT * (3 - 2 * gT);
        gameboyTargetRotation = gameboyMaxRotation * gEased;
        gsap.set(".model-container--gameboy", { scale: gEased * 0.6, autoAlpha: gEased });

        // — Laptop model rotation —
        const rotationStopAt  = tooltipStart + lastTooltipTriggerOffset + 0.03;
        const p = Math.max(0, Math.min(1, (progress - 0.05) / Math.max(0.0001, rotationStopAt - 0.05)));
        targetRotation = Math.PI * 3 * 4 * p;
      },
    });
  }

  // ============================================================
  // ScrollTrigger — Gallery pin
  // ============================================================
  const gallerySection = document.querySelector(".gallery-section");
  if (gallerySection) {
    ScrollTrigger.create({
      trigger: gallerySection,
      start: "top top",
      end: () => `+=${window.innerHeight * 1.5}`,
      pin: true,
      pinSpacing: true,
      id: "gallery-pin",
      onEnter:     () => { window.galleryPinned = true; },
      onLeave:     () => { window.galleryPinned = false; },
      onEnterBack: () => { window.galleryPinned = true; },
      onLeaveBack: () => { window.galleryPinned = false; },
    });
  }

});
