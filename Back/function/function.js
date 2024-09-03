const MongoClient = require('mongodb').MongoClient
const {ObjectId} = require('mongodb'); // or ObjectID 

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

async function createNewPost(title,content){
    const client = await getClient()
    var collection = client.db(DBName).collection('Posts')
    collection.insertOne({
        "title":title,
        "content":content,
        "date":Date.now()
    })
}

async function getAllPostsID(){
    const client = await getClient()
    var collection = client.db(DBName).collection('Posts')
    var result = await collection.find().toArray()
    var allIDs = []
    result.forEach(element => {
        allIDs.push(element._id)
    });
    return allIDs
}

async function getPostsData(ID){
    const client = await getClient()
    var collection = client.db(DBName).collection('Posts')
    return await collection.findOne({"_id":new ObjectId(ID)})
}

async function deletePost(ID){
    const client = await getClient()
    var collection = client.db(DBName).collection('Posts')
    await collection.deleteOne({"_id":new ObjectId(ID)})
}

module.exports = {
    getToken,
    getPassword,
    createNewPost,
    getAllPostsID,
    getPostsData,
    deletePost
}