module.exports = {
    onError({ }, res, err) {
        res.end(
            JSON.stringify({
                success: false,
                message: err.message,
            })
        );
    },
};
