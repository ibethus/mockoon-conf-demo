// scripts/setenv.js
const fs = require('fs');
const path = require('path');

const targetPath = path.resolve(__dirname, '../src/environments/environment.cdefrontend.ts');
const envConfigFile = `export const environment = {
  apiURL: 'https://${process.env.CODESPACE_NAME}-3000.${process.env.GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN}',
  keycloackUrl: 'https://${process.env.CODESPACE_NAME}-8080.${process.env.GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN}',
  clientId: 'spacesuits-app-frontend',
  realm: 'spacesuits',
  production: 'false'
};`;

fs.writeFileSync(targetPath, envConfigFile);