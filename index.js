const server = require("./src/app.js")
const { connect } = require('./src/db.js');
const  { PORT, DB_HOST } = process.env || 3001;//Se define el puerto de escucha en el archivo ".env" o se toma por defecto el 3001.

connect.sync({ force: true}).then(() => {
    server.listen(PORT, () => {
      console.log('Servidor en %s', DB_HOST, 'puerto', PORT); 
  });
});