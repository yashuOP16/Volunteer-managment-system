const express = require('express');
const router = express.Router()
const controller = require('../Controllers/myControllers')


router.get('/',controller.difultController)
router.post('/addVolunteer',controller.addVolunteerCon)
router.get('/view', controller.viewControllers);
router.get('/edit/:id',controller.editControllers)
router.post('/update/:id',controller.updateEditrec)
router.get('/delete/:id',controller.deleteVolunteer)

module.exports = router
