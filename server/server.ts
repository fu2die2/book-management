import express from 'express';

const server = express()

server.get('/', (req: any, res: { send: (arg0: string) => any; }) => res.send('Hello World!'))

server.listen(3001);
