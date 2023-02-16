import express, { Express, Request, Response } from 'express';
import addErrorHandler from './middleware/error_handlers';

const app: Express = express();

// app.use('/', () => console.log('ROOT'));
app.use('/api/v1/motherboards', motherboardsRouter);

app.all('*', (req, res, next) => {
    next(new Error(`Can't find ${req.originalUrl} on this server!`));
});

app.use(addErrorHandler);

export default app;
