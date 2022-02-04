var express = require('express');
var router = express.Router();
var Teachers = require('./Models/Teachers')
var Students = require('./Models/Students');

//to fetch the data of teachers
router.get('/teachers',async(req,res)=>{
    const iteacher = await Teachers.find()
    res.send(iteacher)
})

// to fetch the data of students
router.get('/students',async(req,res)=>{
    const istudent = await Students.find()
    res.send(istudent)
})

//to add the data of new teachers
router.post("/teachers",async(req,res)=>{
    const iteacher = new Teachers({
        name:req.body.name,
        subject:req.body.subject
    })

    await iteacher.save((err,msg)=>{
        if(err){
            res.status(500).json({
                "error":err
            })
        }
        else{
            res.status(200).json({
                "My-message":msg
            })
        }
    })

})

// to add the data of new students
router.post("/students",async(req,res)=>{
    const istudent = new Students({
        name:req.body.name,
        age:req.body.age
    })
    await istudent.save((err,msg)=>{
        if(err){
            res.status(500).json({
                "error":err
            })
        }
        else{
            res.status(200).json({
                "My-message":msg
            })
        }
    })
})


// api for updating data of teachers

router.put('/teachers/:id',async (req,res)=>{
    const iteacher = await Teachers.findOne({_id:req.params.id})
    iteacher.name = req.body.name
    iteacher.subject = req.body.subject
    await iteacher.save((err,msg)=>{
        if(err){
            res.status(500).json({
                "error":err
            })
        }
        else{
            res.status(200).json({
                "msg":msg
            })
        }
    })

})

// api for updating data of students

router.put('/students/:id',async (req,res)=>{
    const istudent = await Students.findOne({_id:req.params.id})
    istudent.name = req.body.name
    istudent.age = req.body.age
    await istudent.save((err,msg)=>{
        if(err){
            res.status(500).json({
                "error":err
            })
        }
        else{
            res.status(200).json({
                "msg":msg
            })
        }
    })

})

//delete api

router.delete("/teachers/:name",async(req,res)=>{
    await Teachers.deleteOne({name:req.params.name},(err,msg)=>{
        if(err){
            res.status(500).json({
                error:err
            })
        }
        else{
            res.status(200).json({
                msg:msg
            })
        }

    })
})

//delete api

router.delete("/students/:name",async(req,res)=>{
    await Students.deleteOne({name:req.params.name},(err,msg)=>{
        if(err){
            res.status(500).json({
                error:err
            })
        }
        else{
            res.status(200).json({
                msg:msg
            })
        }

    })
})



module.exports = router 