const express = require('express');
const app = express();
const path = require('path');
const bcryptjs = require('bcryptjs');
const connection = require('./db/database');
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set('view engine', 'ejs');

const session = require('cookie-session');
app.use(session({
    secret: '8{^WQX7*ufGR[7)]r!bLP)3YD#*nM`R/Kn2z;h%&e{UNB};9dA9un^g^?a&kq%@',
    resave: true,
    saveUninitialized: true
}));

app.listen(PORT, () => {
    console.log('Servidor corriendo en el puerto ' + PORT);
});

// Métodos GET
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.get('/loginFail', (req, res) => {
    res.render('loginFail');
});

app.get('/registerFail', (req, res) => {
    res.render('registerFail');
});

app.get('/home', (req, res) => {
    if (req.session.sessionIniciada) {
        res.render('home', {
            name: req.session.usuario
        });
    } else {
        res.send('<script>alert("Debe iniciar sesión para acceder a esta página"); window.location = "/login";</script>');
    }
});

app.get('/tareas/agregar', (req, res) => {
    res.render('agregar-tarea');
});

app.get('/tareas/mostrar', (req, res) => {
    if (req.session.sessionIniciada) {
        const id_usuario = req.session.idUsuario;
        connection.query('SELECT id_tarea, descripcion, fecha_vencimiento, terminado FROM tareas WHERE id_usuario = ?', [id_usuario], (error, results, fields) => {
            if (error) {
                //console.log(error);
                res.status(500).send('Error interno del servidor');
            } else {
                //console.log("Tareas:", results);
                res.render('mostrar-tareas', { tareas: results });
            }
        });
    } else {
        res.send('<script>alert("Debe iniciar sesión para acceder a esta página"); window.location = "/login";</script>');
    }
});

// Métodos POST
app.post('/user-registration', async (req, res) => {
    const { name, username, password, email } = req.body;
    let passwordHash = await bcryptjs.hash(password, 8);
    connection.query('INSERT INTO usuarios SET ?', { nombre: name, username: username, password: passwordHash, correo: email }, async (error, results) => {
        if (error) {
            //console.log(error);
            res.redirect('/registerFail');
        } else {
            res.send('<script>alert("Registro exitoso"); window.location = "login";</script>');
        }
    });
});

app.post('/user-verification', (req, res) => {
    const { username, password } = req.body;
    if (username && password) {
        connection.query('SELECT * FROM usuarios WHERE username = ?', [username], async (error, results) => {
            if (results.length == 0 || !(await bcryptjs.compare(password, results[0].password))) {
                res.send('<script>alert("Usuario y/o contraseña incorrectos"); window.location = "/login";</script>');
            } else {
                req.session.sessionIniciada = true;
                req.session.usuario = results[0].username;
                req.session.idUsuario = results[0].id_usuario;
                res.send('<script>alert("Inicio de sesión exitoso"); window.location = "home";</script>');
            }
        });
    } else {
        res.send('<script>alert("Ingrese un usuario y contraseña");</script>');
    }
});

app.post('/tareas/agregar', (req, res) => {
    if (req.session.sessionIniciada) {
        const { descripcion, fecha_vencimiento, terminado } = req.body;
        const id_usuario = req.session.idUsuario;
        connection.query('INSERT INTO tareas (id_usuario, descripcion, fecha_vencimiento, terminado) VALUES (?, ?, ?, ?)', [id_usuario, descripcion, fecha_vencimiento, terminado], (error, results, fields) => {
            if (error) {
                console.log(error);
                res.status(500).send('Error interno del servidor');
            } else {
                res.redirect('/tareas/mostrar');
            }
        });
    } else {
        res.send('<script>alert("Debe iniciar sesión para acceder a esta página"); window.location = "/login";</script>');
    }
});

app.post('/tareas/actualizar/:id_tarea', (req, res) => {
    if (req.session.sessionIniciada) {
        const id_tarea = req.params.id_tarea;
        const terminado = req.body.terminado;
        const id_usuario = req.session.idUsuario;
        connection.query('UPDATE tareas SET terminado = ? WHERE id_tarea = ? AND id_usuario = ?', [terminado, id_tarea, id_usuario], (error, results, fields) => {
            if (error) {
                console.log(error);
                res.status(500).send('Error interno del servidor');
            } else {
                res.redirect('/tareas/mostrar');
            }
        });
    } else {
        res.send('<script>alert("Debe iniciar sesión para acceder a esta página"); window.location = "/login";</script>');
    }
});

app.post('/tareas/eliminar/:id_tarea', (req, res) => {
    if (req.session.sessionIniciada) {
        const id_tarea = req.params.id_tarea;
        connection.query('DELETE FROM tareas WHERE id_tarea = ?', [id_tarea], (error, results, fields) => {
            if (error) {
                console.log(error);
                res.status(500).send('Error interno del servidor');
            } else {
                res.redirect('/tareas/mostrar');
            }
        });
    } else {
        res.send('<script>alert("Debe iniciar sesión para acceder a esta página"); window.location = "/login";</script>');
    }
});

app.get('/logout', (req, res) => {
    req.session = null;
    res.send('<script>alert("Se cerró la sesión"); window.location = "/";</script>');
});







