const request = require('superagent');
let Service, Characteristic;

module.exports = function(homebridge) {
    Service = homebridge.hap.Service;
    Characteristic = homebridge.hap.Characteristic;

    homebridge.registerAccessory("homebridge-wolfhaus-temperature", "WolfhausTemperature", WolfhausTemperatureAccessory);
}

class WolfhausTemperatureAccessory {
    constructor(log, config) {
        this.log = log;
        this.log('Adding WolfhausTemperatureAccessory');
        this.name = config.name;
        this.url = config.url;

        this.wolfhausTemperatureService = new Service.TemperatureSensor(this.name);
        this.wolfhausTemperatureService
            .getCharacteristic(Characteristic.CurrentTemperature)
            .on('get', this.getCurrentTemperature);
    }

    getServices = () => {
        return [this.wolfhausTemperatureService];
    }

    getCurrentTemperature = (callback) => {
        request.get(this.url)
            .then(result => callback(null, result.body.temperature));
    }
}
