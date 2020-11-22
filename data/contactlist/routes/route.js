const express = require('express');
const router = express.Router();

// retrieving contacts
router.get('/contacts', (req, res, next)=>{
    res.send('Retrieving the contact list');
});

// add contact
router.post('/contact', (req, res, next)=> {
    // logi to add contact
     
});

// delete contacts
router.delete('/contact', (req, res, next)=> {
    // logic to delete a contact

});

module.exports = router;