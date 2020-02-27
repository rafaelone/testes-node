import doetenv from 'dotenv';

doetenv.config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});
