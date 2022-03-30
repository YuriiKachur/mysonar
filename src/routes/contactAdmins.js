const express = require("express");
const { getAdmins, getAdminById, editAdmin } = require("../controllers/ContactAdmin");
const container = require("../middlewares/container")
 
const router = express.Router();
 
router.get('/All', container(getAdmins));
router.get('/:messageId', container(getAdminById));
router.patch('/:messageId/UpdateStatus', container(editAdmin));

module.exports = router;
