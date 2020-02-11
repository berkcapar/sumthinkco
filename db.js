const { Pool } = require('pg')

const db = new Pool({
  user: 'okacmnznioojav',
  host: 'ec2-54-217-228-25.eu-west-1.compute.amazonaws.com',
  database: 'd5bvtt0nt0t594',
  password: 'd7df3dc0ea6511b01f81e69f4673cec3febd150bba960bceb7f915aad8dc1dc0',
  port: 5432,
  ssl: true,
});

module.exports = db 

