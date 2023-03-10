const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500

    res.status(statusCode)
    res.json({
        mesage: err.message,
        stack: process.env.Node_ENV === 'production' ? null : err.stack
    })
}

module.exports = {
    errorHandler,
}