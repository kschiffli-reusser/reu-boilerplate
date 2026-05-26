class ReuHeroSlideshow extends HTMLElement {
  connectedCallback() {
    this._viewport = this.querySelector('.reu-hero-slideshow__viewport');
    this._slides   = Array.from(this.querySelectorAll('[data-slide]'));
    this._dots     = Array.from(this.querySelectorAll('[data-dot]'));
    this._index    = 0;
    this._reduced  = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    this._dots.forEach((dot, i) => dot.addEventListener('click', () => this._activate(i)));

    const speed = parseInt(this.dataset.autoplaySpeed, 10);
    if (speed && !this._reduced) {
      this._speed = speed * 1000;
      this._startAutoplay();
      this.addEventListener('mouseenter', () => this._stopAutoplay());
      this.addEventListener('mouseleave', () => this._startAutoplay());
      document.addEventListener('visibilitychange', () => {
        document.hidden ? this._stopAutoplay() : this._startAutoplay();
      });
    }
  }

  disconnectedCallback() {
    this._stopAutoplay();
  }

  _activate(index) {
    this._viewport.scrollTo({
      left: index * this._viewport.offsetWidth,
      behavior: this._reduced ? 'instant' : 'smooth',
    });
    this._dots.forEach((d, i) => d.setAttribute('aria-selected', String(i === index)));
    this._index = index;
  }

  _next() {
    this._activate((this._index + 1) % this._slides.length);
  }

  _startAutoplay() {
    this._stopAutoplay();
    this._timer = setInterval(() => this._next(), this._speed);
  }

  _stopAutoplay() {
    clearInterval(this._timer);
  }
}

if (!customElements.get('reu-hero-slideshow')) {
  customElements.define('reu-hero-slideshow', ReuHeroSlideshow);
}
