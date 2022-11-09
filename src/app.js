const app = require('./server.js');
const http = require('http').createServer(app);
const {sequelize} = require('./database/models/index');

//Port set to .env
const PORT = process.env.PORT || 4000;

// Starting the server
http.listen(PORT, () => {
    console.log(`Corriendo en puerto: ${PORT}`);
    sequelize.sync({ force: false }).then(() => {
        console.log('Conexion a DB exitosa');
    }).catch(error => {
        console.log('Se ha producido un error', error);
    })
});