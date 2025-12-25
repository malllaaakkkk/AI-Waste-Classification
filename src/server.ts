import express, { type Request, type Response } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/user.js';
import adminRoutes from './routes/admin.js';
import iotRoutes from './routes/iot.js';
import redeemRoutes from './routes/redeem.js';
import env from './config.js';

const app = express();
const corsOrigins = env.CORS_ORIGIN?.split(',').map((origin) => origin.trim()).filter(Boolean);

app.use(helmet());
app.use(cors({ origin: corsOrigins && corsOrigins.length > 0 ? corsOrigins : undefined, credentials: true }));
app.use(express.json({ limit: '1mb' }));
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 300 }));

app.get('/', (_req: Request, res: Response) => {
  res.json({
    message: 'SWM API Server',
    version: '1.0.0',
    endpoints: {
      health: '/health',
      auth: '/auth/login, /auth/register',
      user: '/me, /wallet, /bins, /rewards',
      admin: '/admin/dashboard, /admin/bins, /admin/operations',
      iot: '/iot/operation',
      redeem: '/redeem'
    },
    docs: 'Access the frontend at http://localhost:3000'
  });
});

app.get('/health', (_req: Request, res: Response) => res.json({ ok: true }));

app.use('/auth', authRoutes);
app.use('/', userRoutes);
app.use('/', adminRoutes);
app.use('/', iotRoutes);
app.use('/', redeemRoutes);

const port = Number(env.PORT);
app.listen(port, () => console.log(`SWM API running on http://localhost:${port}`));