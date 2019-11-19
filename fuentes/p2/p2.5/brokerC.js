const zmq = require('zeromq')
let cli=[], req=[]
let contW=0;
let sc = zmq.socket('router') // frontend
let sb = zmq.socket('dealer') // backend
sc.bind('tcp://*:9998')
sb.bind('tcp://*:9999')
sc.on('message',(c,sep,m)=> {
	if (sb.isEmpty()) { 
		cli.push(c); req.push(m)
	} else {
		sb.send([workers.shift(),'',c,'',m])
	}
})
sb.on('message',(w,sep,c,sep2,r)=> {
	if (w=='' && c=='') {contW++; return}
	if (cli.length>0) { 
		sw.send([w,'',
			cli.shift(),'',req.shift()])
	} else {
		workers.push(w)
	}
	sc.send([c,'',r])
})
