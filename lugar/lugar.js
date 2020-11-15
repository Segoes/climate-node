const axios = require('axios');

const getLugar = async(direccion) => {
    const encodedUrl = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${encodedUrl}&appid=f7c8a163dc752ff433997e734d59e789`,
        timeout: 1000
    });

    const resp = await instance.get();

    if (resp.data.length === 0) {
        throw new Error('No se encuentran resultados.');
    }

    const nombre = resp.data.name;
    const lat = resp.data.coord.lat;
    const lon = resp.data.coord.lon;

    return { nombre, lat, lon };

}


const getInfo = async(lugar) => {
    const encodedUrl = encodeURI(lugar.nombre);

    console.log(lugar);

    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${encodedUrl}&appid=f7c8a163dc752ff433997e734d59e789`,
        timeout: 1000
    });

    const resp = await instance.get();

    if (!resp) {
        throw new Error('No se encuentran resultados.');
    }

    const tiempo = resp.data.weather[0].main;
    const temp = resp.data.main.temp;

    const info = `The weather in ${lugar.nombre} is ${tiempo} and the temperature is ${Math.round(temp - 273.15)} degrees`;
    return info;
}

module.exports = {
    getLugar,
    getInfo
}