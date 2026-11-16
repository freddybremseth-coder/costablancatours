const assert = require('node:assert/strict');
const fs = require('node:fs');
for (const path of ['public/index.html', 'index.html']) {
  const html = fs.readFileSync(path, 'utf8');
  assert.match(html, /className="cbt-brand-lockup"/, path);
  assert.match(html, /<CbtLogo size=\{71\}/, path);
  assert.match(html, /<CbtLogo size=\{164\}/, path);
  assert.match(html, /className="cbt-brand-label"/, path);
  assert.match(html, /@media\(max-width:600px\)/, path);
}
console.log('Costa Blanca Tours visual brand checks passed.');
