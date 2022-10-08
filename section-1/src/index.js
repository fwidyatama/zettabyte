import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import routes from './helper/router';
import errorHandler from './helper/errorHandler';
import http from 'http';

dotenv.config();

const app = express();

// middleware
app.use(bodyParser.json());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', routes);

app.use((err, req, res, next) => {
  errorHandler(err, req, res, next);
});

// mongoose connect
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const port = process.env.APP_PORT || 3000;

const server = http.createServer(app);

try {
  server.listen(port, 'localhost', () => {
    console.log('init', `start listening on localhost:${port}`);
    app._router.stack // registered routes
      .filter((r) => r.route) // take out all the middleware
      .map((r) => r.route.path); // get all the paths
  });
} catch (err) {
  logger.error(err);
  process.exit(1);
}
