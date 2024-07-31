import express, { Application } from 'express';
import bodyParser from 'body-parser';
import bookRoutes from './Routes/bookRoutes';
import path from 'path';
import dotenv from 'dotenv';
import connectDB from './config/db';

dotenv.config();
connectDB();

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api', bookRoutes);
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
