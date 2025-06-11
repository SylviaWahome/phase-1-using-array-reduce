const chai = require('chai');
global.expect = chai.expect;

const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');
require('jsdom-global')(); // Automatically sets up DOM globally

// Load HTML into the DOM
const html = fs.readFileSync(path.resolve(__dirname, '..', 'index.html'), 'utf-8');
document.documentElement.innerHTML = html;

// Transpile index.js with Babel
const babelResult = babel.transformFileSync(
  path.resolve(__dirname, '..', 'index.js'),
  {
    presets: ['@babel/preset-env']
  }
);

eval(babelResult.code); // Run the transpiled JS code in the JSDOM context
