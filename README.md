Bootcamp dictado por Syloper (www.syloper.com) sobre el desarrollo de aplicaciones web. Como trabajo final desarrollamos un MVP de una aplicación web para un e-commerce. 



------------

Instalar de forma global el cliente de sequelize

`npm install -g sequelize-cli`

------------

**Comandos utiles**

Crear un modelo + migration

`sequelize model:create --name User --attributes name:string,email:string`

Ejecutar migration

`sequelize db:migrate`

Ejecutar Rollback

`sequelize db:migrate:undo`

**Realizar una consulta** *(Busca 1 registro, devuelve el Model o null)*
```
const  Sequelize = require('sequelize');
const  users = require('../models').users;

const  datos = await  users.findOne({
	where: {
		user:  user
	}
})
```

**Realizar una consulta** *(Busca en todos los registros, devuelve un Array de Model)*
```
const  Sequelize = require('sequelize');
const  users = require('../models').users;

const  datos = await  users.findAll({
	where: {
		user:  user
	}
})
```

**Guardar un Registro**
```
const  Sequelize = require('sequelize');
const  users = require('../models').users;

const  datos = users.create({
	name:  name,
	email: email,
})
```

------------

[Tutorial de Guia](https://tomasmalio.medium.com/node-js-express-y-mysql-con-sequelize-ec0a7c0ae292)

[Documentación oficial](https://sequelize.org/docs/v6/getting-started/)
