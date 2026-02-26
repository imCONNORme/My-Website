const root = document.documentElement;
const toggle = document.getElementById('theme-toggle');
const toggleLabel = toggle?.querySelector('.toggle-label');
const storedTheme = localStorage.getItem('theme');
const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

const setTheme = (theme) => {
  if (theme === 'light') {
    root.setAttribute('data-theme', 'light');
    if (toggleLabel) toggleLabel.textContent = 'Light';
  } else {
    root.removeAttribute('data-theme');
    if (toggleLabel) toggleLabel.textContent = 'Dark';
  }
};

setTheme(storedTheme || (prefersLight ? 'light' : 'dark'));

toggle?.addEventListener('click', () => {
  const current = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  const nextTheme = current === 'dark' ? 'light' : 'dark';

  setTheme(nextTheme);
  localStorage.setItem('theme', nextTheme);
});

document.getElementById('year').textContent = new Date().getFullYear();
