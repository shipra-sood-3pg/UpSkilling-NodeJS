
import express from 'express';
import config from './config.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import orderRoutes from './routes/orderRoutes.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api', orderRoutes);

app.listen(config.port, () => {
    console.log('app listening on url http://localhost:' + config.port )
  });