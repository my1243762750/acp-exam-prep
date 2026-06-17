const { networkInterfaces } = require('os');
const { spawn } = require('child_process');

function getLocalIP() {
  const nets = networkInterfaces();
  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      if (net.family === 'IPv4' && !net.internal) {
        return net.address;
      }
    }
  }
  return '无法获取IP';
}

const port = process.env.PORT || 3000;
const ip = getLocalIP();

console.log('');
console.log('  🚀 ACP 考试助手已启动');
console.log('  ──────────────────────');
console.log(`  Local:   http://localhost:${port}`);
console.log(`  Network: http://${ip}:${port}`);
console.log('  ──────────────────────');
console.log('');

const child = spawn('npx', ['react-scripts', 'start'], {
  stdio: 'inherit',
  env: { ...process.env, HOST: '0.0.0.0', BROWSER: 'none', DANGEROUSLY_DISABLE_HOST_CHECK: 'true' },
  shell: true,
});
