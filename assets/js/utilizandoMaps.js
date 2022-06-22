function getAdmins(map) {
    let admins = [];
    for([key, value] of map){
        if(value === 'Admin'){
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Claudio', 'User');
usuarios.set('João', 'User');
usuarios.set('Fernanda', 'Admin');


console.log(getAdmins(usuarios));