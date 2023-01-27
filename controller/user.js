const Employee = require('../models/employee.model')
const ObjectId = require('mongoose').Types.ObjectId


const getUser = async(req,res)=>{
    Employee.find()
    .then(data => res.send(data))
    .catch(err => console.log(err))
}

const getUserId = async(req,res)=>{
    if(ObjectId.isValid(req.params.id)==false)
        res.status(400).json({
            error: 'given Object id is not Valid'
        })
    else
    Employee.findById(req.params.id)
    .then(data => {
        if(data){
            res.send(data)
        }else{
            res.status(404).json({
                error : 'no record with given _id : ' + req.params.id
            })
        }
    })
    .catch(err => console.log(err))
}

const postUser = async(req,res)=>{
    Employee.create(req.body)
    .then(data => res.status(201).json(data))
    .catch(err => console.log(err))
}

const validateDbId = async(req,res)=>{
    Employee.findByIdAndUpdate(req.params.id, req.body)
    .then(data => {
        if(data){
            res.send(data)
        }else{
            res.status(404).json({
                error : 'no record with given _id : ' + req.params.id
            })
        }
    })
}

const deleteDbId = async(req,res)=>{
    Employee.findByIdAndDelete(req.params.id, req.body)
    .then(data => {
        if(data){
            res.send(data)
        }else{
            res.status(404).json({
                error : 'no record with given _id : ' + req.params.id
            })
        }
    })
}


module.exports = {getUser,postUser,getUserId, validateDbId, deleteDbId};