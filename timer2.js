const net = require('net');
const port = 12345;
const server = net.createServer();

server.listen(port, () => {
  console.log('Connected to Timer2');
});

server.on('connection', () => {
  console.log('--- Connected ---');
})

const setupInput = (conn) => {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
};

const handleUserInput = (key) => {
  if (Number(key)) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, 1000 * Number(key))
  } else if (key === 'b'){
    process.stdout.write('\x07');
  }else if (key === '\u0003') {
    console.log("Thanks for using me, meow!");
    setTimeout(() => {
      process.exit();
    }, 2000)
  }
};
setupInput();