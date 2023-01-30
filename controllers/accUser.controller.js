let users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'John' },
    { id: 3, name: 'John' },
    { id: 4, name: 'John' }
]
module.exports.getAllAccUser = (req, res, next) => {
    // res.download(__dirname +'/accUser.controller.js');
    // res.redirect('/login');
    const { limit, page } = req.query;
    console.log(limit, page);

    res.json(users.slice(0, limit));
}

module.exports.AddAccUser = (req, res, next) => {
    console.log(req.query);
    users.push(req.body);
    res.send(users);
}

module.exports.getUserDetails = (req, res) => {
    const { id } = req.params;
    console.log(id);
    // const filter = { _id: id };
    const foundUser = users.find(user => user.id === Number(id))
    res.status(200).send({
        success:true,
        messages:"Success",
        data:foundUser
    });
    // res.status(500).send({
    //     success:false,
    //     error:"Internal Server error",
    // });
}

module.exports.updateUser = (req, res, next) => {
    // const newData= req.body;
    const { id } = req.params;
    const filter = { _id: id };
    const newData = users.find(user => user.id === Number(id));
    newData.id = id;
    newData.name = req.body.name;
    res.send(newData);
}

module.exports.deleteUser = (req, res) => {
    const { id } = req.params;
    const filter = { _id: id };
     users = users.filter(user => user.id === Number(id))
    res.send(users)
}