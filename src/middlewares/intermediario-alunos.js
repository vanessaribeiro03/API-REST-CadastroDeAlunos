const validarSenha = (req, res, next) => {
    const { senha } = req.query;

    if (senha !== "cubos123") {
        return res.status(401).json({ mensagem: "Senha está incorreta" })
    }
    next();
};

module.exports = {
    validarSenha,
};