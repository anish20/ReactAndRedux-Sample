import model from '../models';
const { User } = model;

class Users {
          static signUp(req, res) {
            const { name, username, email, password } = req.body;
            console.log(name);
              return User
                .create({
                  name,
                  username,
                  email,
                  password
                })
                .then(userData => res.status(201).send({
                  success: true,
                  message: 'User successfully created',
                  userData
                }))
            }

            static getUserData(req,res){
              console.log(res); 
              User.findAll().then((user)=>{
                if(user){
                  res.status(200).send({userData:user});
                }else{
                  res.status(404).send({eerorMessage:'Sorry data not found'});
                }
              }).catch((error)=>{
                res.status(500).send({error:error});
              })
            }
        }

        export default Users;