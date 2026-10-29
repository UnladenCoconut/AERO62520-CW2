(async () => {
  const SPEED = 20; // ms per character
  const els = [...document.querySelectorAll('.typed')];

  const items = els.map(el => {
    const text = el.textContent.trim();
    el.innerHTML = '<span></span><span style="visibility:hidden"></span>';
    el.style.visibility = 'visible';
    const [shown, rest] = el.children;
    rest.textContent = text;
    return { text, shown, rest };
  });

  for (const { text, shown, rest } of items) {
    for (let i = 1; i <= text.length; i++) {
      shown.textContent = text.slice(0, i);
      rest.textContent = text.slice(i);
      await new Promise(r => setTimeout(r, SPEED));
    }
  }
})();