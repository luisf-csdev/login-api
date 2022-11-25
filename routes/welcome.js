function handleWelcome(req, res) {
    res.status(200).send(
        `
        ||||||||||
        POST Routes: /register & /login 
        ||||||||||
        GET Routes: /user & /user/admin
        `
    )
}

module.exports = handleWelcome;