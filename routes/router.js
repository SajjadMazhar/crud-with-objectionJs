const express = require("express")
const router = express.Router();
const UserService = require("../services/service")
const service = new UserService();


router.post('/create', (req, res)=>{
    service.createUser(req.body).then(data=>{
        res.send(data)
    }).catch(err=>{
        res.send(err)
    })
})

router.get('/', (req, res)=>{
    service.readUser().then(data=>{
        res.send(data)
    }).catch(err=>{
        res.send(err)
    })
})

router.put("/update/:id", (req, res)=>{
    service.updateUserById(req.params.id, req.body).then(data=>{
        res.send(data)
    }).catch(err=>{
        res.send(err)
    })
})

router.delete("/delete/:id", (req, res)=>{
    service.deleteUserById(req.params.id).then(data=>{
        res.send(data)
    }).catch(err=>{
        res.send(err)
    })
})

module.exports = router