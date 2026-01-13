/**
 * common.js - Funciones compartidas para EDJ Chile
 * Optimizadas para evitar Forced Reflow y mejorar el rendimiento del hilo principal.
 */

(function () {
    'use strict';

    // ========== VARIABLES DE ESTADO Y CONFIGURACIÓN ==========
    var lastHeaderHeight = 0;
    var rafHeaderId = null;

    // ========== ACTUALIZAR ALTURA DEL HEADER ==========
    function updateHeaderOffset() {
        if (rafHeaderId) cancelAnimationFrame(rafHeaderId);

        rafHeaderId = requestAnimationFrame(function () {
            var header = document.querySelector('header');
            if (!header) return;

            var height = Math.round(header.getBoundingClientRect().height);
            if (height !== lastHeaderHeight) {
                document.documentElement.style.setProperty('--header-offset', height + 'px');
                lastHeaderHeight = height;
            }
        });
    }

    // ========== NAVEGACIÓN MÓVIL ==========
    function initNavToggle() {
        var toggle = document.querySelector('.nav-toggle');
        var navbar = document.querySelector('nav.navbar');
        if (!toggle || !navbar) return;

        toggle.addEventListener('click', function () {
            var open = navbar.classList.toggle('open');
            toggle.classList.toggle('open', open);
            toggle.setAttribute('aria-expanded', !!open);
        });

        navbar.addEventListener('click', function (e) {
            if (e.target.tagName === 'A' && navbar.classList.contains('open')) {
                navbar.classList.remove('open');
                toggle.classList.remove('open');
                toggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // ========== CARRUSEL HERO MÓVIL ==========
    function initHeroCarousel() {
        var carousel = document.querySelector('.hero-carousel');
        if (!carousel) return;

        var slides = Array.prototype.slice.call(carousel.querySelectorAll('.slide'));
        if (slides.length < 2) return;

        var activeIndex = 0;
        var intervalId = null;
        var running = false;

        function showSlide(index) {
            slides.forEach(function (s, i) {
                s.classList.toggle('active', i === index);
            });
            activeIndex = index;
        }

        function start() {
            if (running) return;
            running = true;
            intervalId = setInterval(function () {
                showSlide((activeIndex + 1) % slides.length);
            }, 3500);
        }

        function stop() {
            running = false;
            if (intervalId) {
                clearInterval(intervalId);
                intervalId = null;
            }
        }

        var mediaQuery = window.matchMedia('(max-width: 1024px)');
        function handleMediaChange(e) {
            if (e.matches) start();
            else { stop(); showSlide(0); }
        }

        mediaQuery.addListener(handleMediaChange);
        handleMediaChange(mediaQuery);
    }

    // ========== TABS DE HORARIOS ==========
    function initScheduleTabs() {
        var tabsContainer = document.querySelector('.schedule-tabs');
        if (!tabsContainer) return;

        tabsContainer.addEventListener('click', function (e) {
            var tab = e.target.closest('.schedule-tab');
            if (!tab) return;

            var targetDay = tab.getAttribute('data-day');
            var tabs = tabsContainer.querySelectorAll('.schedule-tab');
            var days = document.querySelectorAll('.schedule-day');

            tabs.forEach(function (t) { t.classList.toggle('active', t === tab); });
            days.forEach(function (day) {
                day.classList.toggle('active', day.id === targetDay);
            });
        });
    }

    // ========== ACCORDION DE FAQS ==========
    function initFaqsAccordion() {
        var faqsContainer = document.querySelector('.faqs-container');
        if (!faqsContainer) return;

        faqsContainer.addEventListener('click', function (e) {
            var question = e.target.closest('.faq-question');
            if (!question) return;

            var item = question.closest('.faq-item');
            var isActive = item.classList.contains('active');

            var allItems = faqsContainer.querySelectorAll('.faq-item');
            allItems.forEach(function (i) { i.classList.remove('active'); });

            if (!isActive) item.classList.add('active');
        });
    }

    // ========== NAVEGACIÓN LATERAL / STICKY (Instructores & Programas) ==========
    function initStickyNav() {
        var nav = document.querySelector('.instructors-nav, .programs-nav');
        if (!nav) return;

        var navButtons = nav.querySelectorAll('.nav-btn, .programs-nav__btn');
        var sections = document.querySelectorAll('.instructors-category, .program-detail');
        if (!navButtons.length || !sections.length) return;

        function updateActiveButton(targetId) {
            navButtons.forEach(function (btn) {
                btn.classList.toggle('active', btn.getAttribute('data-target') === targetId);
            });
        }

        function scrollToSection(targetId, smooth) {
            var targetSection = document.getElementById(targetId);
            if (!targetSection) return;

            var header = document.querySelector('header');
            var isDesktop = window.innerWidth > 1024;
            var offset = (header ? header.offsetHeight : 0);
            if (!isDesktop) offset += nav.offsetHeight;

            window.scrollTo({
                top: targetSection.offsetTop - offset,
                behavior: smooth ? 'smooth' : 'auto'
            });
            updateActiveButton(targetId);
        }

        nav.addEventListener('click', function (e) {
            var btn = e.target.closest('.nav-btn, .programs-nav__btn');
            if (!btn) return;
            e.preventDefault();
            scrollToSection(btn.getAttribute('data-target'), true);
        });

        var ticking = false;
        window.addEventListener('scroll', function () {
            if (!ticking) {
                requestAnimationFrame(function () {
                    var scrollPos = window.scrollY + window.innerHeight / 2;
                    sections.forEach(function (section) {
                        if (scrollPos >= section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)) {
                            updateActiveButton(section.id);
                        }
                    });
                    ticking = false;
                });
                ticking = true;
            }
        });

        if (window.location.hash) {
            setTimeout(function () { scrollToSection(window.location.hash.substring(1), false); }, 100);
        }
    }

    // ========== CARGA DIFERIDA DE VIDEO YOUTUBE (Hero) ==========
    function initHeroVideoLazy() {
        var placeholder = document.getElementById('hero-youtube-placeholder');
        if (!placeholder) return;

        // Solo cargar en desktop
        if (window.innerWidth <= 1024) return;

        var loadVideo = function () {
            var src = placeholder.getAttribute('data-src');
            var iframe = document.createElement('iframe');
            iframe.setAttribute('src', src);
            iframe.setAttribute('frameborder', '0');
            iframe.setAttribute('allowfullscreen', 'true');
            iframe.setAttribute('allow', 'autoplay; fullscreen');
            iframe.className = 'hero-video';

            // Reemplazar placeholder por iframe
            placeholder.parentNode.replaceChild(iframe, placeholder);
        };

        // Esperar a que la página cargue completamente para inyectar el video
        if (document.readyState === 'complete') {
            setTimeout(loadVideo, 1000); // 1s extra para asegurar suavidad
        } else {
            window.addEventListener('load', function () {
                setTimeout(loadVideo, 1000);
            });
        }
    }

    // ========== INICIALIZACIÓN GLOBAL ==========
    function init() {
        initNavToggle();
        updateHeaderOffset();
        initHeroCarousel();
        initScheduleTabs();
        initFaqsAccordion();
        initStickyNav();
        initHeroVideoLazy();

        if ('ResizeObserver' in window) {
            var headerEl = document.querySelector('header');
            if (headerEl) {
                new ResizeObserver(updateHeaderOffset).observe(headerEl);
            }
        }

        window.addEventListener('load', updateHeaderOffset);
        window.addEventListener('resize', updateHeaderOffset);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
