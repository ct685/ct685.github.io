// Case-competition deck slider: builds slides from assets/slides/s01.jpg … s18.jpg
const SLIDE_COUNT = 18;

document.querySelectorAll('[data-slider]').forEach((slider) => {
  const track = slider.querySelector('.slider__track');
  const count = slider.querySelector('[data-count]');
  const pad = (n) => String(n).padStart(2, '0');

  for (let i = 1; i <= SLIDE_COUNT; i++) {
    const img = document.createElement('img');
    img.src = `assets/slides/s${pad(i)}.jpg`;
    img.alt = `Case deck slide ${i}`;
    img.loading = 'lazy';
    track.appendChild(img);
  }

  const current = () => Math.round(track.scrollLeft / track.clientWidth);
  const go = (i) => {
    const target = Math.max(0, Math.min(SLIDE_COUNT - 1, i));
    track.scrollTo({ left: target * track.clientWidth, behavior: 'smooth' });
  };
  const update = () => { count.textContent = `${pad(current() + 1)} / ${pad(SLIDE_COUNT)}`; };

  slider.querySelector('[data-prev]').addEventListener('click', () => go(current() - 1));
  slider.querySelector('[data-next]').addEventListener('click', () => go(current() + 1));
  track.addEventListener('scroll', update, { passive: true });
  update();
});
