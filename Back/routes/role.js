const express=require('express');

const router=express.Router();

const {getAll,edit,getById,create,deleteById,replace}=require('../controllers/role');

router.get("/" ,getAll);

router.patch("/:id",edit);

router.get("/:id",getById);

router.post("/",create);

router.delete("/:id",deleteById);

router.put("/:id",replace);

module.exports=router;
