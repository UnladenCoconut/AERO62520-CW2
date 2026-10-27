(async () => {
  const SPEED = 20;   // ms per character
  const els = [...document.querySelectorAll('.typed')];
  const texts = els.map(el => el.textContent.trim());

  els.forEach(el => { el.textContent = ''; el.style.visibility = 'visible'; });

  for (const [i, el] of els.entries()) {
    for (const ch of texts[i]) {
      el.textContent += ch;
      await new Promise(r => setTimeout(r, SPEED));
    }
  }
})();