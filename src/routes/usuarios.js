const express = require("express");
const router = express.Router();

const { getAllUsuarios, getUsuarioById, createUsuario, updateUsuario, deleteUsuario} = require("../controllers/usuarioController");

//importa la libreria para validar scopes
const { requiredScopes } = require("express-oauth2-jwt-bearer");

// configuramos las rutas de acceso a los controladores de usuarios
router.get("/", requiredScopes("read:usuarios"), getAllUsuarios);

router.get("/:id", requiredScopes("read:usuarios"), getUsuarioById);

router.post("/", requiredScopes("write:usuarios"), createUsuario);

router.put("/:id", requiredScopes("write:usuarios"), updateUsuario);

router.delete("/:id", requiredScopes("write:usuarios"), deleteUsuario);

module.exports = router;