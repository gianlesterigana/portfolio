/**
 * Gian Lester Igana Portfolio — JavaScript
 * Handles interactions, animations, and EmailJS contact form.
 */

(function () {
  'use strict';

  /* ==========================================================================
     EmailJS Configuration
     Replace these placeholders after setting up your EmailJS account:
     1. Go to https://www.emailjs.com and create a free account
     2. Add an Email Service (Gmail) linked to gianlester.igana1@gmail.com
     3. Create an Email Template with variables: from_name, from_email, subject, message
     4. Paste your IDs below
     ========================================================================== */
  const EMAILJS_SERVICE_ID  = 'service_1578ame';
  const EMAILJS_TEMPLATE_ID = 'template_vmay359';
  const EMAILJS_PUBLIC_KEY  = 'a5FSVZnzHXWZOWcIy';

  /* ==========================================================================
     DOM Ready
     ========================================================================== */
  document.addEventListener('DOMContentLoaded', init);

  function init() {
    initLoader();
    initHeader();
    initMobileNav();
    initScrollSpy();
    initReveal();
    initProjectFilters();
    initCursorGlow();
    initBackToTop();
    initCurrentYear();
    initContactForm();
    initSmoothScroll();
  }

  /* ==========================================================================
     Loading Screen
     ========================================================================== */
  function initLoader() {
    const loader = document.getElementById('loader');
    if (!loader) return;

    const hide = () => loader.classList.add('hidden');

    if (document.readyState === 'complete') {
      setTimeout(hide, 1400);
    } else {
      window.addEventListener('load', () => setTimeout(hide, 1400));
    }
  }

  /* ==========================================================================
     Sticky Header
     ========================================================================== */
  function initHeader() {
    const header = document.querySelector('.header');
    if (!header) return;

    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 40);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ==========================================================================
     Mobile Navigation
     ========================================================================== */
  function initMobileNav() {
    const toggle = document.querySelector('.nav__toggle');
    const menu = document.getElementById('nav-menu');
    if (!toggle || !menu) return;

    const close = () => {
      toggle.setAttribute('aria-expanded', 'false');
      menu.classList.remove('open');
      document.body.classList.remove('nav-open');
    };

    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isOpen));
      menu.classList.toggle('open', !isOpen);
      document.body.classList.toggle('nav-open', !isOpen);
    });

    menu.querySelectorAll('.nav__link').forEach((link) => {
      link.addEventListener('click', close);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') close();
    });
  }

  /* ==========================================================================
     Scroll Spy — Active Nav Link
     ========================================================================== */
  function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav__link[data-section]');
    if (!sections.length || !navLinks.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const id = entry.target.id;
          navLinks.forEach((link) => {
            const isActive = link.dataset.section === id;
            link.classList.toggle('nav__link--active', isActive);
            if (link.getAttribute('role') === 'tab') {
              link.setAttribute('aria-selected', String(isActive));
            }
          });
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
  }

  /* ==========================================================================
     Reveal on Scroll
     ========================================================================== */
  function initReveal() {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const elements = document.querySelectorAll('.reveal');
    if (!elements.length) return;

    if (prefersReduced) {
      elements.forEach((el) => el.classList.add('revealed'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach((el) => observer.observe(el));
  }

  /* ==========================================================================
     Project Filters
     ========================================================================== */
  function initProjectFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.project-card');
    if (!filterBtns.length || !cards.length) return;

    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;

        filterBtns.forEach((b) => {
          const isActive = b === btn;
          b.classList.toggle('filter-btn--active', isActive);
          b.setAttribute('aria-selected', String(isActive));
        });

        cards.forEach((card) => {
          const categories = card.dataset.category.split(' ');
          const show = filter === 'all' || categories.includes(filter);
          card.classList.toggle('hidden', !show);
        });
      });
    });
  }

  /* ==========================================================================
     Cursor Glow
     ========================================================================== */
  function initCursorGlow() {
    const glow = document.getElementById('cursor-glow');
    if (!glow) return;

    const isTouch = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || prefersReduced) return;

    let visible = false;

    document.addEventListener('mousemove', (e) => {
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
      if (!visible) {
        glow.classList.add('active');
        visible = true;
      }
    });

    document.addEventListener('mouseleave', () => {
      glow.classList.remove('active');
      visible = false;
    });
  }

  /* ==========================================================================
     Back to Top
     ========================================================================== */
  function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', () => {
      btn.classList.toggle('visible', window.scrollY > 500);
    }, { passive: true });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ==========================================================================
     Footer Current Year
     ========================================================================== */
  function initCurrentYear() {
    const el = document.getElementById('current-year');
    if (el) el.textContent = new Date().getFullYear();
  }

  /* ==========================================================================
     Smooth Scroll for Anchor Links
     ========================================================================== */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        const targetId = anchor.getAttribute('href');
        if (!targetId || targetId === '#') return;

        const target = document.querySelector(targetId);
        if (!target) return;

        e.preventDefault();
        const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) || 72;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({ top, behavior: 'smooth' });
      });
    });
  }

  /* ==========================================================================
     Contact Form — EmailJS
     ========================================================================== */
  function initContactForm() {
    const form = document.getElementById('contact-form');
    const submitBtn = document.getElementById('form-submit');
    const statusEl = document.getElementById('form-status');
    if (!form || !submitBtn || !statusEl) return;

    if (typeof emailjs !== 'undefined' && EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
      emailjs.init(EMAILJS_PUBLIC_KEY);
    }

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      if (EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID') {
        showStatus(statusEl, 'EmailJS is not configured yet. Please add your Service ID, Template ID, and Public Key in script.js.', 'error');
        return;
      }

      const formData = {
        from_name: form.from_name.value.trim(),
        from_email: form.from_email.value.trim(),
        subject: form.subject.value.trim(),
        message: form.message.value.trim(),
      };

      submitBtn.classList.add('btn--loading');
      submitBtn.disabled = true;
      showStatus(statusEl, '', '');

      try {
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formData);
        showStatus(statusEl, 'Message sent successfully! I\'ll get back to you soon.', 'success');
        form.reset();
      } catch (err) {
        console.error('EmailJS error:', err);
        showStatus(statusEl, 'Failed to send message. Please try again or email me directly.', 'error');
      } finally {
        submitBtn.classList.remove('btn--loading');
        submitBtn.disabled = false;
      }
    });
  }

  function showStatus(el, message, type) {
    el.textContent = message;
    el.className = 'form-status';
    if (type) el.classList.add('form-status--' + type);
  }

})();
