$('.lightbox').poptrox({
    usePopupCaption: false
});

new MutationObserver(muts => {
  for (const m of muts) for (const n of m.addedNodes) {
    const f = n.nodeType === 1 && (n.matches('iframe') ? n : n.querySelector('iframe'));
    if (f && !f.hasAttribute('allowfullscreen')) {
      f.setAttribute('allowfullscreen', '');
      f.setAttribute('allow', 'fullscreen; autoplay; encrypted-media');
      f.src = f.src;
    }
  }
}).observe(document.body, { childList: true, subtree: true });