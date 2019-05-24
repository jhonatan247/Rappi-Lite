psql -c "DROP DATABASE rappi" postgres root

psql -c "CREATE DATABASE rappi" postgres root

psql -c "CREATE EXTENSION POSTGIS" rappi root

sequelize db:migrate

psql -c "\i .seed-database" rappi root