const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://root:root@cluster0.wb3jemd.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true }).catch((e) => {
  console.error('Connection error', e.message);
});

const db = mongoose.connection;

module.exports = db;