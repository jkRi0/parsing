module.exports = (req, res) => {
    res.status(200).json({
        output: "Client-side syntax validation is enabled. Java compilation and execution are not supported by this deployment.",
        error: null,
    });
};
