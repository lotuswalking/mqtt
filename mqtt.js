const mqtt = require('mqtt');

const client = mqtt.connect('mqtt://broker.hivemq.com');

client.on('connect', () => {
  console.log('Connected to MQTT broker');

  setInterval(() => {
      const message = 'Hello, MQTT!'; // Your message to publish
      publishTopic = "out-topic"
      client.publish(publishTopic, message);
      console.log(`Published message on topic ${publishTopic}: ${message}`);
    }, 60000); // 60000 milliseconds = 1 minute

  const topicToSubscribe = 'in-topic';

    client.subscribe(topicToSubscribe, (err) => {
        if (!err) {
        console.log(`Subscribed to ${topicToSubscribe}`);
        }
    });
    });

    client.on('message', (topic, message) => {
    console.log(`Received message on topic ${topic}: ${message}`);
    const outtopic = 'out-topic';
    client.publish(outtopic, message+" this is a message back");
    // Add your custom logic to handle the received message
    });

