const express = require('express')
const router  = express.Router()

const lutteurCtrl = require("./controller")


router.get("/" , lutteurCtrl.getHomePage)
router.post("/lutteurs" , lutteurCtrl.createLutter)
router.get("/lutteurs" , lutteurCtrl.getAllLutteur)
router.patch("/lutteurs/:id" , lutteurCtrl.updateLutteur )
router.delete("/lutteurs/:id" , lutteurCtrl.deleteLutteur)


module.exports  = router;
