import readline from 'readline';
import { exec } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const scripts = {
  '1': { name: 'Hide Clients', file: 'hide-clients.js' },
  '2': { name: 'Show Clients', file: 'show-clients.js' },
  '3': { name: 'Hide Team', file: 'hide-team.js' },
  '4': { name: 'Show Team', file: 'show-team.js' },
  'q': { name: 'Quit' }
};

function showMenu() {
  console.log('\n--- Manage Sections ---');
  for (const key in scripts) {
    if (key === 'q') {
      console.log(`${key}. ${scripts[key].name}`);
    } else {
      console.log(`${key}. ${scripts[key].name}`);
    }
  }
  
  rl.question('\nSelect an option: ', (answer) => {
    if (answer === 'q') {
      rl.close();
      return;
    }

    const script = scripts[answer];
    if (script) {
      const scriptPath = path.join(__dirname, script.file);
      console.log(`\nRunning ${script.name}...`);
      exec(`node "${scriptPath}"`, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error: ${error.message}`);
          return;
        }
        if (stderr) {
          console.error(`Stderr: ${stderr}`);
          return;
        }
        console.log(stdout);
        showMenu();
      });
    } else {
      console.log('Invalid option. Please try again.');
      showMenu();
    }
  });
}

showMenu();
