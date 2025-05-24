const validates = (req, res, next) => {
    const {name, email} = req.body;
    if (!name || !email) {
        return res.status(400).json({message: 'Missing name or email'})
    }

    next();
}

export default validates;