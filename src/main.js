#!/usr/bin/env node
// @ts-check
// import built-in modules
const path = require('path');
// import third-party modules
const fs = require('fs-extra');
const prompts = require('prompts');
const { reset } = require('kolorist');
// start code here
const templateList = [
  {
    title: 'go template',
    description: 'Template for go',
    value: 'go-template',
  },
];
// copy template to target directory
async function copyDir(src, dest) {
  const srcPath = path.join(__dirname, src);
  const destPath = path.join('.', dest);
  try {
    await fs.copy(srcPath, destPath);
  } catch (err) {
    console.error(err);
  }
}

const questions = [
  {
    type: 'text',
    name: 'projectName',
    message: reset('Project name:'),
  },
  {
    type: 'select',
    name: 'templateName',
    message: 'Choose template:',
    choices: templateList,
    initial: 0,
  },
];

async function main() {
  const response = await prompts(questions);
  const { projectName, templateName } = response;
  copyDir(templateName, projectName);
}

main();
