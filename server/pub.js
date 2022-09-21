/* Publisher */

const mqtt = require("mqtt");
let client = mqtt.connect('mqtt://broker.hivemq.com');

client.on("connect", function(){

    // For testing public mqtt broker
    setInterval(function(){
        let random = Math.floor(Math.random()*50);
        console.log(random);
        if(random < 30){
            client.publish('magicbit-temperature-assignment', 'Temperature' + random.toString() + '.');
        }
    }), 1000;
});