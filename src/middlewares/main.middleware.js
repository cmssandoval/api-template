/** @type {import('express').RequestHandler} */
const mainMiddlewareOrHandler = (req, res, next) => {
    const example = req.body;
    if (!example) {
        const error = new Error('Missing required data');
        error.status = 400;
        return next(error);
    }
    next();
};


export default mainMiddlewareOrHandler;
