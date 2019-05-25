# Rappi Web

Es una página en la que una persona puede hacer pedidos a los restaurantes cercanos que estén registrados.

Un RappiTendero aceptara el pedido, se dirigirá al establecimiento y llevara el domicilio.

Si desea ver la página visite este [link](https://thinking-park-237514.appspot.com/)

## Comenzando 🚀

_Estas instrucciones te permitirán tener el proyecto en funcionamiento en tu máquina local._


### Pre-requisitos 📋

_Sigue estos pasos para tener todo lo necesario para que el proyecto se pueda ejecutar._


Primero debes [descargar](https://nodejs.org/en/) e instalar Node.js 

Instalando express

```
npm install express --save
```

angular

```
npm install -g @angular/cli@latest
```

sequelize

```
npm install -g sequelize-cli
```

modulo de sequelize

```
npm install --save sequelize
```

Descarga [postgres](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads) e instálalo

modulo de PostgreSQL

```
npm install --save pg pg-hstore
```

nodemon

```
npm install -g nodemon
```

Ingresa a la página oficial de [postgis](https://postgis.net/install/) y sigue las instrucciones de descarga e instalación.



### Instalación 🔧


_Primero instalamos las dependencias del backend_

```
npm install
```

_Luego instalamos las dependencias del frontend_

```
npm install
```

_Antes de crear la base de datos, configuraremos un nuevo usuario_

_Para crearlo ejecuta los siguientes comandos_

```
psql postgres postgres
CREATE ROLE root WITH LOGIN PASSWORD '1234';
ALTER ROLE root CREATEDB;
```

_Ahora creamos la base de datos_

```
psql -c "CREATE DATABASE rappi" postgres root
```

_Seguimos con la instalación de la extensión de Postgis en la DB_

```
psql -c "CREATE EXTENSION POSTGIS" rappi root
```

_Corremos las migraciones_

```
sequelize db:migrate
```

_Con el siguiente comando insertamos datos de prueba en la DB_

```
psql -c "\i .seed-database" rappi root
```

_Ponemos a correr el servidor del back_

```
nodemon
```

_Y el servidor del front_

```
ng serve
```

_Abre el siguiente link en tu navegador [http://localhost:4200/](http://localhost:4200/)_


## Contribuyendo 🖇️

Para colaborar en este proyecto revisa nuestro [repositorio](https://github.com/jhonatan247/Rappi-Lite).


## Versionado 📌

Usamos [GitHub](https://github.com/) para el versionado.

## Autores ✒️

* **Jhonatan Torres** - [jhonatan247](https://github.com/jhonatan247)
* **Andryut Huertas** - [Andryut](https://github.com/Andryut)
* **Christian Torres** - [camilo654](https://github.com/camilo654)