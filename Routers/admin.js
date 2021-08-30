const express = require('express');
const router = express.Router();

router.get('/',(req, res) =>{
    res.render("./admin/index");

});

router.get('/posts', (req, res)=>{
  res.send("Páginas de posts");
});

router.get('/categoria', (req,res)=>{
   res.send("página de categoria");
});



module.exports = router;