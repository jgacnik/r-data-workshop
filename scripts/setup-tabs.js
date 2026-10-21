// Keep Quarto's grouped OS tabs, accessible state, and saved choice aligned.
(() => {
  const initialize = () => {
    const tabsets = Array.from(document.querySelectorAll(
      '.panel-tabset[data-group="installation-os"]'
    ));
    const tabs = tabsets.flatMap(tabset =>
      Array.from(tabset.querySelectorAll('[role="tab"]'))
    );
    if (tabsets.length < 2 || tabs.length === 0) return;

    const storageKey = 'quarto-persistent-tabsets-data';
    const label = tab => tab.textContent.trim();
    const readSettings = () => {
      try {
        const settings = JSON.parse(localStorage.getItem(storageKey) || '{}');
        return settings && typeof settings === 'object' && !Array.isArray(settings)
          ? settings : {};
      } catch {
        return {};
      }
    };

    const synchronize = selected => {
      const selectedLabel = label(selected);
      for (const tab of tabs) {
        const active = label(tab) === selectedLabel;
        tab.classList.toggle('active', active);
        tab.setAttribute('aria-selected', String(active));
        tab.setAttribute('tabindex', active ? '0' : '-1');
        const panel = document.getElementById(tab.getAttribute('aria-controls'));
        if (panel) {
          panel.classList.toggle('active', active);
          panel.classList.toggle('show', active);
        }
      }
      try {
        const settings = readSettings();
        settings['installation-os'] = selectedLabel;
        localStorage.setItem(storageKey, JSON.stringify(settings));
      } catch {
        // The selected instructions still work when storage is unavailable.
      }
    };

    // Bootstrap emits this event for arrow-key selection as well as clicks.
    document.addEventListener('shown.bs.tab', event => {
      if (tabs.includes(event.target)) synchronize(event.target);
    });
    tabs.forEach(tab => tab.addEventListener('click', () => {
      queueMicrotask(() => synchronize(tab));
    }));

    const restore = () => {
      const saved = readSettings()['installation-os'];
      synchronize(tabs.find(tab => label(tab) === saved)
        || tabs.find(tab => tab.classList.contains('active')) || tabs[0]);
    };
    restore();
    window.addEventListener('pageshow', () => queueMicrotask(restore));
  };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize, { once: true });
  } else {
    initialize();
  }
})();
