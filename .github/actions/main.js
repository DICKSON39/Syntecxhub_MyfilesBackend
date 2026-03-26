const core = require('@actions/core');
const exec = require('@actions/exec');

async function run() {
  try {
   const deployment = core.getInput('deploy-hook');

   await exec.exec(`curl -X POST ${deployHook}`);

   core.setOutput('website-url', 'https://your-render-app.onrender.com')

  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
