import apiRoute from "./apis";

export const initRoutes = (server) => {
    server.get('*', function (req, res, next) {
        console.log('Request was made to: ' + req.originalUrl);
        return next();
    });
    server.use('/api', apiRoute);
}