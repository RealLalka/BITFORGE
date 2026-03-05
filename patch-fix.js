import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const filesToFix = [
  { old: '\\public\\assets\\logo\\logo.svg', new: '/public/assets/logo/logo.svg' },
  { old: '\\public\\assets\\cases\\wave-messenger\\hero-screenshot.png', new: '/public/assets/cases/wave-messenger/hero-screenshot.png' },
  { old: '\\public\\assets\\cases\\financial-dashboard\\demo-video.mp4', new: '/public/assets/cases/financial-dashboard/demo-video.mp4' },
  { old: '\\public\\assets\\cases\\financial-dashboard\\hero-screenshot.png', new: '/public/assets/cases/financial-dashboard/hero-screenshot.png' },
  { old: '\\public\\assets\\cases\\forex-binary\\demo-video-main.mp4', new: '/public/assets/cases/forex-binary/demo-video-main.mp4' },
  { old: '\\public\\assets\\cases\\forex-binary\\demo-video.mp4', new: '/public/assets/cases/forex-binary/demo-video.mp4' },
  { old: '\\public\\assets\\cases\\forex-binary\\hero-screenshot.png', new: '/public/assets/cases/forex-binary/hero-screenshot.png' },
  { old: '\\public\\assets\\cases\\forex-binary\\trading-bg.jpg', new: '/public/assets/cases/forex-binary/trading-bg.jpg' },
  { old: '\\public\\assets\\cases\\pandora\\demo-video.mp4', new: '/public/assets/cases/pandora/demo-video.mp4' },
  { old: '\\public\\assets\\cases\\pandora\\hero-screenshot.png', new: '/public/assets/cases/pandora/hero-screenshot.png' },
  { old: '\\public\\assets\\cases\\salavpay\\demo-video.mp4', new: '/public/assets/cases/salavpay/demo-video.mp4' },
  { old: '\\public\\assets\\cases\\salavpay\\hero-screenshot.png', new: '/public/assets/cases/salavpay/hero-screenshot.png' },
  { old: '\\public\\assets\\cases\\young-design\\demo-video.mp4', new: '/public/assets/cases/young-design/demo-video.mp4' },
  { old: '\\public\\assets\\cases\\young-design\\hero-screenshot.png', new: '/public/assets/cases/young-design/hero-screenshot.png' },
  { old: '\\public\\assets\\cases\\young-design\\logo.png', new: '/public/assets/cases/young-design/logo.png' },
  { old: '\\public\\assets\\cases\\young-design\\sun-original.png', new: '/public/assets/cases/young-design/sun-original.png' }
];

filesToFix.forEach(file => {
  if (fs.existsSync(file.old)) {
    console.log(`Moving ${file.old} to ${file.new}`);
    // Ensure directory exists
    const dir = path.dirname(file.new);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.renameSync(file.old, file.new);
  }
});

console.log("Running update scripts...");
execSync('node update-cases.js');
execSync('node update-locales.js');
console.log("Patch complete.");
