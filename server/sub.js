/* Subscriber */

const mqtt = require("mqtt");
let client = mqtt.connect('mqtt://broker.hivemq.com');

client.on("connect", function(){
    client.subscribe("magicbit-temperature-assignment");
    console.log("Client has subscribed successfully");
});

client.on('message', function(topic, message){
    console.log(message.toString());
});