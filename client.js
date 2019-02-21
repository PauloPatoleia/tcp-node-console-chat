const net = require('net');

const client = net.createConnection({ host: "83.240.176.242", port: 5000 }, () => {
  console.log('connected to server!');
});

process.stdin.setEncoding('utf8');
client.setEncoding('utf8');

process.stdin.resume();
process.stdin.on("data",function(data){
    posli(data);
})


client.on('data', (data) => {
  console.log(data.toString());
});

client.on('end', () => {
  console.log('disconnected from server');  

});

function posli(msg){
    var message = JSON.stringify(msg);
    client.write(message.slice(1, message.length - 3));
}
