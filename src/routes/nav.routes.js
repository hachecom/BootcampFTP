const { Router } = require("express");
const router = Router();

// Navegacion
router.get('/indexapp', (req, res) => {
    res.render('indexapp', { titulo : "JAS - Tienda virtual" })
   })
  
  
router.get('/carrito', (req, res) => {
    res.render("carrito")
   })
  
router.get('/contrasena', (req, res) => {
res.render("contrasena")
  })
  
router.get('/crearcuenta', (req, res) => {
res.render("crearcuenta")
  })
  
router.get('/nosotros', (req, res) => {
res.render("nosotros")
  })
  
router.get('/zapatillas', (req, res) => {
res.render("zapatillas")
  })
  
router.get('/registracion', (req, res) => {
res.render("registracion")
  })
  
module.exports = router;