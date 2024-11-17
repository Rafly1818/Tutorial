const { execSync } = require('child_process');
const os = require('os');

function checkAndInstall(command, installCommand) {
  try {
    execSync(command, { stdio: 'ignore' });
    console.log(`${command} is already installed.`);
  } catch (e) {
    console.log(`${command} is not installed. Installing...`);
    try {
      execSync(installCommand, { stdio: 'inherit' });
      console.log(`${command} has been installed.`);
    } catch (err) {
      console.error(`Failed to install ${command}:`, err);
    }
  }
}

const platform = os.platform();
if (platform === 'darwin') {
  checkAndInstall('zip', 'brew install zip');
  checkAndInstall('unzip', 'brew install unzip');
} else if (platform === 'linux') {
  checkAndInstall('zip', 'sudo apt-get install zip');
  checkAndInstall('unzip', 'sudo apt-get install unzip');
} else {
  console.log('Unsupported platform. Please install zip and unzip manually.');
}