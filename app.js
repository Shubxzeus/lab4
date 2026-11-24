const express = require('express');
const app = express();
const VERSION = process.env.APP_VERSION || 'v1';
app.get('/', (req, res) => res.send(`Hello from ${VERSION}`));
app.get('/health', (req, res) => res.json({ status: 'ok' }));
module.exports = app;
