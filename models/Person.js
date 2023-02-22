const mogoose = require('mongoose')

const Person = mogoose.model('Person',{
    name: String,
    salary: Number,
    approved: Boolean,
})

module.exports = Person