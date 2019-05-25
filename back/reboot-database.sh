if [[ "$OSTYPE" == "linux-gnu" ]]; then
    sudo -s psql -c "DROP DATABASE rappi" postgres

    sudo -s psql -c "CREATE DATABASE rappi" postgres

    # Before run the next command, you must install POSTGIS

    sudo -u postgres psql -c "CREATE EXTENSION POSTGIS" rappi

    sequelize db:migrate

    sudo -s psql -c "\i data-seeds.sql" rappi
elif [[ "$OSTYPE" == "darwin"* ]]; then
    psql -c "DROP DATABASE rappi" postgres

    psql -c "CREATE DATABASE rappi" postgres

    # Before run the next command, you must install POSTGIS

    psql -c "CREATE EXTENSION POSTGIS" rappi

    sequelize db:migrate

    psql -c "\i data-seeds.sql" rappi
fi