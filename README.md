# homebridge-wolfhaus

An extremely simple plugin for Homebridge to pull the current temperature from an HTTP endpoint and display it in Home on iOS.

Example Homebridge `config.json` accessory configuration:

```
"accessories": [
    {
        "accessory": "Wolfhaus",
        "name": "Outdoor Temperature",
        "url": "http://pi:3000/rest/outdoor"
    },
    {
        "accessory": "Wolfhaus",
        "name": "Indoor Temperature",
        "url": "http://fourbee:3000/rest/indoor"
    }
],
```
