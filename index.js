const express = require("express")
const path = require("path")
const app = express()
const router = express.Router()

router.get("/", (req,res)=>{
	res.sendFile(path.join(__dirname + "/pages/main.html"))
})
router.get("/contato", (req,res)=>{
	res.sendFile(path.join(__dirname + "/pages/contato.html"))
})
router.get("/servicos", (req,res)=>{
	res.sendFile(path.join(__dirname + "/pages/servicos.html"))
})
app.use(router)
app.listen(3333,()=>{
	console.log("SERVIDOR INICIADO!")
})