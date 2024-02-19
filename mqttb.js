const mqtt = require('mqtt');

const client = mqtt.connect('mqtt://broker.hivemq.com');

function printMessage(message) {
  const timestamp = new Date().toLocaleTimeString();
  process.stdout.clearLine();  // Clear the previous message
  process.stdout.cursorTo(0);  // Move the cursor to the beginning of the line
  process.stdout.write(`[${timestamp}] ${message}`);
}

client.on('connect', () => {
  console.log('Connected to MQTT broker');

  setInterval(() => {
      const message = 'Hello, MQTT! MQTT! I\'m MQtt! B'; // Your message to publish
      publishTopic = "in-topic"
      client.publish(publishTopic, message);
      // console.log(`Published message on topic ${publishTopic}: ${message}`);
      printMessage(`Published message on topic ${publishTopic}: ${message}`)
    }, 5000); // 60000 milliseconds = 1 minute

  const topicToSubscribe = 'out-topic';

    client.subscribe(topicToSubscribe, (err) => {
        if (!err) {
        console.log(`Subscribed to ${topicToSubscribe}`);
        }
    });
    });

    client.on('message', (topic, message) => {
    // console.log(`Received message on topic ${topic}: ${message}`);
    printMessage(`Received message on topic ${topic}: ${message}`)
    // Add your custom logic to handle the received message
    });

