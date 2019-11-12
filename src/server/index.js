import express from 'express';
import https from 'https';
import helmet from 'helmet';

// Create request-handling callback function, `app`, passed to Node's HTTP server
const app = express();
const server = https.createServer(app);

// Port
const port = process.env.PORT || 3000;


app.get('/', (req, res)=>{})

// Basic Security
app.use(helmet());

// Listen
server.listen(port, () => console.log(`Listening on port ${port}`));