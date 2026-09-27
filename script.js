const translatable = [...document.querySelectorAll('[data-en]')];
for (const element of translatable) element.dataset.zh = element.innerHTML;
let language = 'zh';
function setLanguage(next) {
  language = next;
  document.documentElement.lang = next === 'zh' ? 'zh-CN' : 'en';
  for (const element of translatable) element.innerHTML = element.dataset[next];
  const button = document.getElementById('language');
  button.innerHTML = next === 'zh' ? 'EN <span>↗</span>' : '中文 <span>↗</span>';
  button.setAttribute('aria-label', next === 'zh' ? 'Switch to English' : '切换到中文');
  document.title = next === 'zh' ? '彭成 Cheng Peng — AI, Vision & Robotics' : 'Cheng Peng — AI, Vision & Robotics';
  try { localStorage.setItem('cheng-language', next); } catch {}
}
try { if (localStorage.getItem('cheng-language') === 'en') setLanguage('en'); } catch {}
document.getElementById('language').addEventListener('click', () => setLanguage(language === 'zh' ? 'en' : 'zh'));
document.getElementById('print').addEventListener('click', () => window.print());
