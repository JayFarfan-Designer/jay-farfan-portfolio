/* Decorative motion: complexity gradually becomes a coherent structure. */
const HeroMotion = (() => {
  let dispose = () => {};
  function mount() {
    dispose();
    const canvas = document.querySelector('.hero-motion');
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    let width = 0, height = 0, time = 0, frame = null, last = 0, painted = 0;
    let visible = true, alive = true;
    const random = i => { const n = Math.sin(i * 127.1 + 31.7) * 43758.5453; return n - Math.floor(n); };
    const smooth = x => x * x * (3 - 2 * x);
    function draw() {
      if (!width || !height) return;
      const cycle = time % 15;
      const amount = media.matches ? 1 : cycle < 2 ? 0 : cycle < 7 ? smooth((cycle - 2) / 5) : cycle < 12 ? 1 : 1 - smooth((cycle - 12) / 3);
      const mobile = width < 600, columns = mobile ? 3 : 4, rows = mobile ? 5 : 7;
      const startX = width * (mobile ? .37 : .43), spanX = width - startX - 30;
      const startY = 36, spanY = Math.max(1, height - 82);
      const points = Array.from({ length: columns * rows }, (_, i) => ({
        x: startX + spanX * (random(i + 1) * (1 - amount) + (i % columns) / (columns - 1) * amount) + Math.sin(time * .17 + i) * 2.5,
        y: startY + spanY * (random(i + 50) * (1 - amount) + Math.floor(i / columns) / (rows - 1) * amount) + Math.cos(time * .15 + i) * 2.5
      }));
      context.clearRect(0, 0, width, height);
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const a = points[i], b = points[j];
          const neighbor = (j === i + 1 && Math.floor(i / columns) === Math.floor(j / columns)) || j === i + columns;
          if (!neighbor && !(amount < .7 && Math.hypot(a.x - b.x, a.y - b.y) < 95)) continue;
          context.strokeStyle = `rgba(200,208,216,${.16 + amount * .10})`;
          context.lineWidth = .75;
          context.beginPath(); context.moveTo(a.x, a.y); context.lineTo(b.x, b.y); context.stroke();
        }
      }
      points.forEach((p, i) => {
        context.fillStyle = i === Math.min(19, points.length - 1) ? '#8B87FF' : `rgba(228,233,238,${i % 7 === 0 ? .65 : .37})`;
        context.beginPath(); context.arc(p.x, p.y, i % 7 === 0 || i === 19 ? 2.4 : 1.4, 0, Math.PI * 2); context.fill();
      });
      const mask = context.createLinearGradient(0, 0, width, 0);
      mask.addColorStop(0, '#0B0F12'); mask.addColorStop(.38, '#0B0F12');
      mask.addColorStop(.72, 'rgba(11,15,18,.74)'); mask.addColorStop(1, 'rgba(11,15,18,.02)');
      context.fillStyle = mask; context.fillRect(0, 0, width, height);
      const bottom = context.createLinearGradient(0, height * .68, 0, height);
      bottom.addColorStop(0, 'rgba(11,15,18,0)'); bottom.addColorStop(1, '#0B0F12');
      context.fillStyle = bottom; context.fillRect(0, height * .68, width, height * .32);
    }
    function stop() { if (frame !== null) cancelAnimationFrame(frame); frame = null; last = 0; painted = 0; }
    function tick(stamp) {
      frame = null;
      if (!alive || !visible || document.hidden || media.matches) return;
      const delta = last ? Math.min((stamp - last) / 1000, .05) : 0;
      last = stamp; time += delta;
      if (!painted || stamp - painted >= 32) { draw(); painted = stamp; }
      frame = requestAnimationFrame(tick);
    }
    function sync() {
      stop();
      if (!alive) return;
      if (media.matches) draw();
      else if (visible && !document.hidden) frame = requestAnimationFrame(tick);
    }
    function resize() {
      const rect = canvas.getBoundingClientRect();
      width = rect.width; height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr); canvas.height = Math.round(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0); draw();
    }
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    const intersection = new IntersectionObserver(entries => { visible = entries[0].isIntersecting; sync(); });
    intersection.observe(canvas);
    document.addEventListener('visibilitychange', sync);
    media.addEventListener('change', sync);
    resize(); sync();
    dispose = () => {
      alive = false; stop(); resizeObserver.disconnect(); intersection.disconnect();
      document.removeEventListener('visibilitychange', sync); media.removeEventListener('change', sync);
    };
  }
  return { mount };
})();
