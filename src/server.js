require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");
const path = require("path")
const app = express();

//Requires to routes
const authRoute = require("./routes/auth.routes");
const usersRoute = require("./routes/users.routes");

//Middleware
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(json())


// Routes
app.use("/users", usersRoute);
app.use("/", authRoute);



// Static Files
app.use(express.static(__dirname +'/public'));
// Specific folder example
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/imgagenes', express.static(__dirname + 'public/imagenes'))

// Set View's
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//Prueba
//app.get('/', function(req, res){
  
    // Rendering our web page i.e. Demo.ejs
    // and passing title variable through it
//    res.render('Demo', {
//        title: 'View Engine Demo'
//    })
//})

app.post('/login', function(req, res){
  
  // Rendering our web page i.e. Demo.ejs
  // and passing title variable through it
  res.render('demo', {
      title: res.send(email)
  })
})

// Navigation
app.get('/indexapp.html', (req, res) => {
    res.sendFile(__dirname + '/views/indexapp.html')
 })

app.get('/carrito.html', (req, res) => {
    res.sendFile(__dirname + '/views/carrito.html')
 })

app.get('/contraseña.html', (req, res) => {
  res.sendFile(__dirname + '/views/contraseña.html')
})

app.get('/crearcuenta.html', (req, res) => {
  res.sendFile(__dirname + '/views/crearcuenta.html')
})

app.get('/nosotros.html', (req, res) => {
  res.sendFile(__dirname + '/views/nosotros.html')
})

app.get('/zapatillas.html', (req, res) => {
  res.sendFile(__dirname + '/views/zapatillas.html')
})


//Elimina el cache, para evitar errores con Logout
app.use(function(req, res, next) {
  if (!req.user) {res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');}      
  next()
})
app.use((req, res, next) => {
  res.status(404).json({
    status: '404',
    descripcion: 'Pagina no encontrada'
  })
})

module.exports = app;