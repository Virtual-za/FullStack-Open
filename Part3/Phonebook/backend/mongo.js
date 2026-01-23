const mongoose = require('mongoose')

if (process.argv < 3) {
    console.log('give password as argument')
    process.exit(1);
}

const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]
const url = `mongodb+srv://jameshambr_db_user:${password}@cluster0.zjnogez.mongodb.net/personApp?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery',false) 
mongoose.connect(url, {family:4})

const personSchema = new mongoose.Schema({
    name: String,
    number: Number,
})

const Person = mongoose.model('Person',personSchema)

const person = new Person({
    name: name,
    number: number,
})

if (process.argv = 3) {
    console.log('phonebook:');
    
Person.find({}).then(result => {
    result.forEach(person => {
        console.log(person.name,person.number)
    })
    mongoose.connection.close()
})
} else {



person.save().then(result => {
    console.log(`added ${name} number ${number} to phonebook`)
    mongoose.connection.close()
    
})
}

