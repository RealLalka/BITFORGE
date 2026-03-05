import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, '../src/pages/Home.tsx');

try {
  let content = fs.readFileSync(filePath, 'utf8');

  if (content.includes('{/* <Team /> */}')) {
    console.log('Team section is already hidden.');
  } else if (content.includes('<Team />')) {
    content = content.replace('<Team />', '{/* <Team /> */}');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Team section has been hidden.');
  } else {
    console.log('Could not find <Team /> component in Home.tsx');
  }
} catch (err) {
  console.error('Error processing file:', err);
}
