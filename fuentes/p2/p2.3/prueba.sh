node brokerMod.js 8000 8001
node workerMod.js tcp://localhost:8001 W1 Resp1
node workerMod.js tcp://localhost:8001 W2 Resp2
node clientMod.js tcp://localhost:8000 C1 Hello
node clientMod.js tcp://localhost:8000 C2 Hola
node clientMod.js tcp://localhost:8000 C3 Hi
