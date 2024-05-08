// El sistema debe validar el login y mostrar time line

const userDatabase = [
    {
        username: 'Andres',
        password: '123'
    },
    {
        username: 'Caro',
        password: '456'
    },
    {
        username: 'Mariana',
        password: '789'
    },
];

const usersTimeLine = [
    {
        username: 'Estefany',
        timeline: 'Me encanta Javascript'
    },
    {
        username: 'Oscar',
        timeline: 'Bebeloper es lo mejor'
    },
    {
        username: 'Mariana',
        timeline: 'A mi me gusta más el café que el té'
    },
    {
        username: 'Andres',
        timeline: 'Yo hoy no quiero trabajar'
    },
];

const username = prompt('Cual es tu usuario?');
const password = prompt('Cual es tu contraseña')

function validate(username, password) {
    for (let index = 0; index < userDatabase.length; index++) {
        if (
            userDatabase[index].username === username &&
            userDatabase[index].password === password
        ) {
            return true;
        }    
    }
    return false;
}

function signIn (username, password) {
    if (validate(username, password)) {
        alert(`Bienvenido a tu cuenta ${username}`)
        console.log(usersTimeLine);
    } else {
        alert('uuups, usuario o contraseña incorrecta')
    }
}

signIn(username, password)