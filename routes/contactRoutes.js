const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');
const authMiddleware = require('../middlewares/authMiddleware');

router.use(authMiddleware); // Protect all routes

router.post('/', contactController.addContact);
router.get('/', contactController.getContacts);
router.put('/:id', contactController.updateContact);
router.delete('/:id', contactController.softDeleteContact);
router.post('/batch', contactController.batchProcessContacts);

module.exports = router;
