/**
 * Required External Modules
 */
import * as dotenv from "dotenv";
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

dotenv.config();
import routes from './routes';
/**
 * App Variables
 */
if (!process.env.PORT) {
  process.exit(1);
}

const port = process.env.PORT || 4000;

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/', routes);
/**
 * Server Activation
 */
app.listen(port, () => {
         console.log(`Listening on port ${port}`);
});
