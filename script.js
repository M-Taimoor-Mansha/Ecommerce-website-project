// =============================================
//  ShoPperZ — Interactive Script
// =============================================

// --- Mobile Menu ---
const closeBtn = document.getElementById('close-btn');
const hamBtn   = document.getElementById('ham-btn');
const menu     = document.getElementById('mobile-menu');

hamBtn.addEventListener('click', () => {
  menu.style.visibility = 'visible';
  menu.style.opacity    = '1';
});
closeBtn.addEventListener('click', () => {
  menu.style.visibility = 'hidden';
  menu.style.opacity    = '0';
});

// --- Cart Counter ---
let cartCount = 0;
const cartBadge = document.querySelector('.cart-badge');
const addBtns   = document.querySelectorAll('.add-btn');

addBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    cartCount++;
    cartBadge.textContent = cartCount;

    // Quick pulse animation on the badge
    cartBadge.animate([
      { transform: 'scale(1.6)', background: '#fff' },
      { transform: 'scale(1)',   background: '#f5a623' }
    ], { duration: 350, easing: 'ease-out' });

    // Visual feedback on card
    const card = btn.closest('.items');
    card.animate([
      { boxShadow: '0 0 0 3px rgba(245,166,35,0.6)' },
      { boxShadow: '0 8px 32px rgba(0,0,0,0.5)' }
    ], { duration: 600, easing: 'ease-out' });
  });
});

// --- Active Slider Dots ---
const dots     = document.querySelectorAll('.dot');
const slider   = document.querySelector('.img-slider');
const imgCount = document.querySelectorAll('.img-slider .img').length;
// Total animation duration: 15s, each slide holds for ~3s
const slideDuration = 15000;
const perSlide      = slideDuration / imgCount;

let currentSlide = 0;
function updateDots(index) {
  dots.forEach(d => d.classList.remove('active'));
  if (dots[index]) dots[index].classList.add('active');
}

setInterval(() => {
  currentSlide = (currentSlide + 1) % imgCount;
  updateDots(currentSlide);
}, perSlide);

// Dot click — pause animation and jump
dots.forEach(dot => {
  dot.addEventListener('click', () => {
    const idx   = parseInt(dot.dataset.index, 10);
    currentSlide = idx;
    updateDots(idx);
    slider.style.animation = 'none';
    slider.style.left      = `-${idx * 100}%`;
    // Resume animation after 3 seconds
    setTimeout(() => {
      slider.style.left      = '';
      slider.style.animation = '';
    }, 3000);
  });
});
