const path = require('path');
const { spawn }  = require('child_process');

function run(cmd, args) {
  return new Promise(function (resolve, reject) {
    const child = spawn(cmd, args, { stdio: "inherit", stdin: "inherit" });
    child.addListener("error", reject);
    child.addListener("exit", resolve);
  });
}

function dockerBuild() {
  return run('docker', [
    'build',
    '-t',
    'nodedns',
    '.'
  ]);
}

function dockerRun(file) {
  const mountPath = path.resolve('./src').replace(/\\/g, '/');
  return run('docker', [
    'run',
    '--rm',
    '--dns', '192.0.2.0', // Use an unresponsive IP for DNS resolution so it fails
    '--name', 'nodedns',
    '-v', `${mountPath}:/app/src`,
    'nodedns',
    file
  ]);
}

(async () => {
  console.log('building docker image');
  await dockerBuild();

  console.log('running docker image');
  await dockerRun('error.js');

  console.log('running docker image');
  await dockerRun('fix.js');
})();
