
let volunteerStore = []
let creteid = 0;


const difultController = (req, res) => {
    res.render("index")
}

const addVolunteerCon = (req, res) => {
    if (volunteerStore) {
        creteid += 1;
        const volunteerId = {
            id:  creteid,
            name: req.body.fname,
            email: req.body.email,
            phone: req.body.phone,
            Skills: req.body.Skills
        }

        volunteerStore = [...volunteerStore, volunteerId]
    }

    res.redirect('/view')
}

const viewControllers = (req, res) => {

    res.render('views', { reg: volunteerStore })
}

const editControllers = (req, res) => {
    const id = req.params.id

    const ediVolunteer = volunteerStore.find((rec) => {
        return rec.id == id
    })

    res.render('edit', { ediVolunteer })
}


const updateEditrec = (req, res) => {
    const id = req.params.id

    const updateRec = volunteerStore.map((update) => {
        if (update.id == id) {
            return { ...update, name: req.body.fname, email: req.body.email, phone: req.body.phone, Skills: req.body.Skills }
        } else {
            return update
        }
    })
    volunteerStore = updateRec
    res.redirect('/view')
}

const deleteVolunteer = (req, res) => {
    const id = req.params.id
    const deleteRec = volunteerStore.filter((rec) => {
        return rec.id != id
    })
    volunteerStore = deleteRec
    res.redirect('/view')
}

module.exports = { difultController, addVolunteerCon, editControllers, viewControllers, updateEditrec, deleteVolunteer }
