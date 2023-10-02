const db = require('./db')

class TaskController {
    users(req, res) {
        db.select('*').table('tbUsuario').then(user => {
            console.log(user)
            res.json(user)
        }).catch(error => {
            console.log(error)
        })
    }

    VerificarUser(req, res) {
        const { user, pwd } = req.params;
        db
        .select('*')
        .table('tbUsuario')
        .innerJoin('tbFunc', 'tbUsuario.codFunc', 'tbFunc.codFunc')
        .where({"usuario": user, "senha": pwd}).then(usersLogin => {
            usersLogin.length > 0 ? res.json(usersLogin) : res.json('usuário não encontrado!')
            usersLogin.length > 0 ? console.log(usersLogin) : console.log('Usuário não encontado')
            
        }).catch(error => {
            console.log(error)
            res.json(error)
        })
    }


}
    
module.exports = new TaskController