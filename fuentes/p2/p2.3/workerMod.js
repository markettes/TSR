const zmq = require('zeromq')
let req = zmq.socket('req')
let args = process.argv.slice(2);
req.connect(args[0]);
let nickWorker = args[1];
let txtRespuesta = args[2];

req.identity=nickWorker;
req.on('message', (c,sep,msg)=> {
	setTimeout(()=> {
		req.send([c,'',txtRespuesta])
	}, 1000)
});
req.send(['','',''])
