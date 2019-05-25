# Rappi Web

_Acá va un párrafo que describa lo que es el proyecto_

Y también pondríamos el link del app engine

## Comenzando 🚀

_Estas instrucciones te permitirán tener el proyecto en funcionamiento en tu máquina local._


### Pre-requisitos 📋

_Sigue estos pasos para tener todo lo necesario para que el proyecto se pueda ejecutar._

Instalando express

```
Da un ejemplo
```

angular

```
Da un ejemplo
```

sequelize

```
Da un ejemplo
```

postgres

```
Da un ejemplo
```

nodemon

```
Da un ejemplo
```

postgis

```
Da un ejemplo
```


### Instalación 🔧


_Primero instalamos las dependencias del backend_

```
npm install
```

_Luego instalamos las dependencias del frontend_

```
npm install
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


## Construido con 🛠️

_Menciona las herramientas que utilizaste para crear tu proyecto_

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - El framework web usado
* [Maven](https://maven.apache.org/) - Manejador de dependencias
* [ROME](https://rometools.github.io/rome/) - Usado para generar RSS

## Contribuyendo 🖇️

Para colaborar en este proyecto revisa nuestro [repositorio](https://github.com/jhonatan247/Rappi-Lite).


## Versionado 📌

Usamos [GitHub](https://github.com/) para el versionado.

## Autores ✒️

* **Jhonatan Torres** - [jhonatan247](https://github.com/jhonatan247)
* **Andryut Huertas** - [Andryut](https://github.com/Andryut)
* **Christian Torres** - [camilo654](https://github.com/camilo654)


## Expresiones de Gratitud 🎁

* Comenta a otros sobre este proyecto 📢
* Invita una cerveza 🍺 a alguien del equipo. 
* Da las gracias públicamente 🤓.
* etc.