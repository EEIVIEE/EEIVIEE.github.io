import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";
import Lenis from "lenis";

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, Flip);

  const lenis = new Lenis();
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);

  // ============================================================
  // Nav center: fade to white signature on dark sections
  // ============================================================
  const navSigWhite = document.querySelector(".nav-signature--white");
  const navSigDark  = document.querySelector(".nav-signature--dark");
  if (navSigWhite && navSigDark) {
    const toWhite = () => { gsap.to(navSigWhite, { opacity: 1, duration: 0.4, ease: "power2.out" }); gsap.to(navSigDark, { opacity: 0, duration: 0.4, ease: "power2.out" }); };
    const toDark  = () => { gsap.to(navSigWhite, { opacity: 0, duration: 0.4, ease: "power2.out" }); gsap.to(navSigDark, { opacity: 1, duration: 0.4, ease: "power2.out" }); };

    // "top top" = fires only when the section's top edge reaches the top of
    // the viewport, so neither trigger fires on page load regardless of hero size.
    ScrollTrigger.create({
      trigger: ".projects-intro",
      start: "top top",
      onEnter: toDark, onLeaveBack: toWhite,
    });

    ScrollTrigger.create({
      trigger: "#games",
      start: "top top",
      onEnter: toWhite, onLeaveBack: toDark,
    });
  }

  // (The game detail rows live inside collapsed accordions and are revealed by
  // the expand transition, so they are not animated here.)

  // ============================================================
  // Game project accordions (expand to reveal full breakdown)
  // ============================================================
  const gameProjects = gsap.utils.toArray(".game-project");

  const setProjectOpen = (article, open) => {
    article.classList.toggle("is-open", open);
    const toggle = article.querySelector(".game-project-toggle");
    if (toggle) toggle.setAttribute("aria-expanded", String(open));
  };

  const scrollToArticle = (article) => {
    if (lenis) lenis.scrollTo(article, { offset: -90, duration: 0.9 });
    else article.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Smoothly animate the layout change (card resize + reflow + detail reveal)
  // with GSAP Flip, instead of a plain CSS height transition + width snap.
  let flipTl = null;
  const animateLayout = (mutate) => {
    if (!Flip || typeof Flip.getState !== "function") { mutate(); ScrollTrigger.refresh(); return; }
    const state = Flip.getState(".game-project, .game-project-toggle");
    mutate();
    if (flipTl) flipTl.kill();
    flipTl = Flip.from(state, {
      duration: 0.6,
      ease: "power3.inOut",
      nested: true,
      onComplete: () => ScrollTrigger.refresh(),
    });
  };

  gameProjects.forEach((article) => {
    const toggle = article.querySelector(".game-project-toggle");
    if (!toggle) return;
    toggle.addEventListener("click", () => {
      const willOpen = !article.classList.contains("is-open");
      animateLayout(() => {
        gameProjects.forEach((other) => { if (other !== article) setProjectOpen(other, false); });
        setProjectOpen(article, willOpen);
      });
      if (willOpen) window.setTimeout(() => scrollToArticle(article), 640);
    });
  });

  // Open the matching card when arriving via a #tank-project / #snake-project / … link
  const openProjectFromHash = () => {
    const id = window.location.hash.slice(1);
    if (!id) return;
    const article = document.getElementById(id)?.closest(".game-project");
    if (!article) return;
    gameProjects.forEach((other) => setProjectOpen(other, other === article));
    window.setTimeout(() => { scrollToArticle(article); ScrollTrigger.refresh(); }, 80);
  };
  window.addEventListener("hashchange", openProjectFromHash);
  requestAnimationFrame(openProjectFromHash);

  // Gallery cards (Art / Photography) fade-up reveal.
  // `once: true` is important: opening/closing a game accordion triggers a
  // ScrollTrigger.refresh(), and without `once` that would reverse already-
  // revealed cards back to opacity 0 (they'd "vanish").
  gsap.utils.toArray(".media-card").forEach((card) => {
    gsap.set(card, { y: 40, opacity: 0 });
    gsap.to(card, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: card,
        start: "top 90%",
        once: true,
      },
    });
  });

  // ============================================================
  // Floating bottom section nav
  // ============================================================
  const sectionNav = document.querySelector(".section-nav");
  if (sectionNav) {
    const links = gsap.utils.toArray(".section-nav-link");
    const indicator = sectionNav.querySelector(".section-nav-indicator");
    const targets = links.map((link) => document.querySelector(link.getAttribute("href")));

    const moveIndicator = (link) => {
      if (!indicator || !link) return;
      indicator.style.width = `${link.offsetWidth}px`;
      indicator.style.height = `${link.offsetHeight}px`;
      indicator.style.transform = `translate(${link.offsetLeft}px, ${link.offsetTop}px)`;
    };

    let activeIndex = -1;
    const setActive = (i) => {
      if (i === activeIndex || !links[i]) return;
      activeIndex = i;
      links.forEach((link, idx) => link.classList.toggle("is-active", idx === i));
      moveIndicator(links[i]);
    };

    links.forEach((link, i) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const target = targets[i];
        if (target) lenis.scrollTo(target, { offset: -10, duration: 1.1 });
      });
    });

    // Highlight the last section whose top has crossed the viewport midline.
    const updateActive = () => {
      const probe = window.innerHeight * 0.45;
      let idx = 0;
      targets.forEach((section, i) => {
        if (section && section.getBoundingClientRect().top <= probe) idx = i;
      });
      setActive(idx);
    };

    lenis.on("scroll", updateActive);
    window.addEventListener("resize", () => moveIndicator(links[activeIndex] || links[0]));
    window.addEventListener("load", () => moveIndicator(links[activeIndex] || links[0]));

    requestAnimationFrame(() => {
      updateActive();
      moveIndicator(links[activeIndex] || links[0]);
      sectionNav.classList.add("is-ready");
    });
  }

  // Recalculate trigger positions once images have loaded (lazy gallery images
  // can otherwise leave reveal triggers measured against the wrong heights).
  window.addEventListener("load", () => ScrollTrigger.refresh());
});
