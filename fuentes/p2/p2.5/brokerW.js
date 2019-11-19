const zmq = require('zeromq')
let req=[], workers=[]
let contC = 0;
let sb = zmq.socket('dealer') // frontend
let sw = zmq.socket('router') // backend
sb.bind('tcp://*:9999')
sw.bind('tcp://*:9997')
sb.on('message',(c,sep,m)=> {
	if(sb.isEmpty){
		
	}
})
sw.on('message',(w,sep,c,sep2,r)=> {
	if (c=='') {
		sb.send(['','','']);//indicamos al bC que se ha conectado un worker
		workers.push(w); return
	}
	if (contC>0) { 
		sb.send([w,'',
			cli.shift(),'',req.shift()])
	} else {
		workers.push(w)
	}
	sb.send([c,'',r])
})

