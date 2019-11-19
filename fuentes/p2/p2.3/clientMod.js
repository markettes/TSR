const zmq = require('zeromq')
let req = zmq.socket('req')
let args = process.argv.slice(2);
req.connect(args[0]);
let nickClient = args[1];
let txtPeticion = args[2];


req.on('message', (msg)=> {
	console.log('resp: '+msg)
	process.exit(0);
})
req.send(txtPeticion)

