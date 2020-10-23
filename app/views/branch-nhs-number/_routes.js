const express = require('express')
const router = express.Router()
    router.post('/branching-handler', function(req, res){
        const radioButton = req.session.data['know-nhs-number']

        if (radioButton == "Yes"){
            res.redirect('answer-yes')
        }
        else {
            res.redirect('answer-no')
        }

    })
module.exports = router