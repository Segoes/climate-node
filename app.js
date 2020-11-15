const { getLugar, getInfo } = require('./lugar/lugar');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        describe: 'Dirección de la ciudad para obtener el clima',
        demandOption: true
    }
}).argv;

// Return a promise (async, await) -> .then/.catch necessary
getLugar(argv.direccion)
    .then((response) => {
        getInfo(response)
            .then((info) => console.log(info))
            .catch((err) => console.log(err));
    })
    .catch((err) => console.log('No information found.'));