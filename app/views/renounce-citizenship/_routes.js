const express = require('express')
const router = express.Router()
    router.post('/branching-handler', function(req, res){
        const radioButton = req.session.data['renounce-uk-citizenship']

        if (radioButton == "Yes"){
            res.redirect('#What-is-your-name')
        }
        else {
            res.redirect('#Not-eligible')
        }

    })
module.exports = router