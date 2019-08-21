//Kafka Client for consumer
const kafka = require('kafka-node');
// const bp = require('body-parser');

try {
  const Consumer = kafka.Consumer;
  const client = new kafka.KafkaClient({
      autoConnect: true,
      kafkaHost: '127.0.0.1:9092'
  });
  let consumer = new Consumer(
    client,
    [{ topic: 'test', partition: 0}],
    {
        groupId: 'test',
        autoCommit: true,
        autoCommitIntervalMs: 5000,
        fromOffset: true
    }
  );
  consumer.on('message', async function(message) {
    console.log(
      'kafka-> ',
      message.value
    );
  })
  consumer.on('error', function(err) {
    console.log('error', err);
  });
}
catch(e) {
  console.log(e);
}