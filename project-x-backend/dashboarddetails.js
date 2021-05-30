const User = require('./models/user');

const user = new User(
    {username:'user9',
    password:'test9',
    gender:'LGBT'}
);


//push data
module.exports.userdata= async (req, res) => {
    console.log('test');

user.save()
.then((result) =>
{
    res.send(result)
})
.catch((err) =>{
    console.log(err);
});
}


//get Data
module.exports.getdata= async (req, res) => {
    
    User.find()
    .then((results) => {
        

        console.log(results);

        
        res.send(results)
    })
    .catch((err) =>{
        console.log(err);
    });


}