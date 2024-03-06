// home logic

const home = async(req, res) => {
    try {
        res
        .status(200)
        .send("Welcome to home page")
    } catch (error) {
        console.log(error)
    }
}
// register logic

const register = async(req, res) => {
    try {
        res
        .status(200)
        .send("Registration page using controllers")
    } catch (error) {
        res
        .status(400)
        .send({msg: "Page not found"})
    }
}

module.exports = {home, register}