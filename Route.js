const express = require("express")

const {GetDataReq,PostDataReq} = require("../Controller/Product")

const {SignUpReq,LoginReq} = require("../Controller/Auth/Login")


const router = express.Router()


router.post("/use/sign-up",SignUpReq)
router.post("/user/login",LoginReq)


router.get('/getdata',GetDataReq)

router.post('/postdata',PostDataReq)

module.exports = router