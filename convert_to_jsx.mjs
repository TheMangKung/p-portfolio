import fs from 'fs';

let html = fs.readFileSync('D:/Projects/p-portfolio/landing_raw.html', 'utf8');

// Remove HTML comments
html = html.replace(/<!--[\s\S]*?-->/g, '');

// Self-close void elements
const voidElements = ['img', 'input', 'br', 'hr', 'source', 'path', 'circle', 'rect'];
voidElements.forEach(tag => {
  const regex = new RegExp(`<(${tag})([^>]*?)(?<!/)>`, 'gi');
  html = html.replace(regex, '<$1$2 />');
});

// Replace class= with className=
html = html.replace(/\bclass=/g, 'className=');

// Fix for= to htmlFor=
html = html.replace(/\bfor=/g, 'htmlFor=');

// Fix aria / tab / svg attribute casing where needed
html = html.replace(/tabindex=/g, 'tabIndex=');
html = html.replace(/preserveaspectratio=/gi, 'preserveAspectRatio=');
html = html.replace(/stroke-width=/g, 'strokeWidth=');
html = html.replace(/stroke-linecap=/g, 'strokeLinecap=');
html = html.replace(/stroke-linejoin=/g, 'strokeLinejoin=');
html = html.replace(/viewbox=/gi, 'viewBox=');
html = html.replace(/pathlength=/gi, 'pathLength=');

// Fix inline styles: style="key: value; key2: value2" to style={{ ... }}
html = html.replace(/style="([^"]*)"/g, (match, styleStr) => {
  const entries = styleStr.split(';').filter(s => s.trim().length > 0);
  const objEntries = entries.map(entry => {
    let [prop, ...valParts] = entry.split(':');
    if (!prop || valParts.length === 0) return '';
    prop = prop.trim();
    let val = valParts.join(':').trim();
    // If it's a CSS variable like --morph, keep it as string
    if (prop.startsWith('--')) {
      return `'${prop}': '${val.replace(/'/g, "\\'")}'`;
    }
    // Convert kebab-case to camelCase
    const camelProp = prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    return `${camelProp}: '${val.replace(/'/g, "\\'")}'`;
  }).filter(Boolean);
  return `style={{ ${objEntries.join(', ')} }}`;
});

fs.writeFileSync('D:/Projects/p-portfolio/landing_jsx.txt', html, 'utf8');
console.log('Converted JSX saved, length:', html.length);
