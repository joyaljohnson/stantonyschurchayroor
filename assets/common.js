// St. Antony's Church Ayroor — shared site behavior

// Mobile menu toggle
function toggleMobileMenu() {
  var menu = document.getElementById('mobile-menu');
  if (!menu) return;
  menu.classList.toggle('hidden');
}

// Smooth scroll for the hero "scroll down" chevron
function scrollToNextSection() {
  var hero = document.querySelector('section');
  if (hero) {
    window.scrollTo({ top: hero.offsetHeight, behavior: 'smooth' });
  }
}

// Language toggle (cosmetic — matches source site's button; full translation not implemented)
function toggleLanguage(btn) {
  if (!btn) return;
  btn.classList.toggle('bg-primary/5');
}

// Countdown timer to the Centenary Jubilee grand finale (Dec 31, 2025)
function initCountdown() {
  var daysEl = document.getElementById('cd-days');
  var hoursEl = document.getElementById('cd-hours');
  var minsEl = document.getElementById('cd-mins');
  var secsEl = document.getElementById('cd-secs');
  if (!daysEl) return;

  var target = new Date('2025-12-31T23:59:59+05:30').getTime();

  function tick() {
    var now = new Date().getTime();
    var diff = Math.max(0, target - now);

    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var secs = Math.floor((diff % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minsEl.textContent = String(mins).padStart(2, '0');
    secsEl.textContent = String(secs).padStart(2, '0');
  }

  tick();
  setInterval(tick, 1000);
}

document.addEventListener('DOMContentLoaded', function () {
  initCountdown();
});
