const MongoClient = require('mongodb').MongoClient

const DBName = 'Portfolio'

async function getClient(){
    const url = 'mongodb://127.0.0.1:27017'
    return await MongoClient.connect(url)
}

async function getToken(){
    const client = await getClient()
    var collection = client.db(DBName).collection('User')
    var result = await collection.find().toArray()
    return result[0].token
}

async function getPassword(){
    const client = await getClient()
    var collection = client.db(DBName).collection('User')
    var result = await collection.find().toArray()
    return result[0].password
}

module.exports = {
    getToken,
    getPassword
}