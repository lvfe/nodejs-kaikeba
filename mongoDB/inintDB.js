const mongodb = requrie('./models/db');

mongodb.once('connect', async ()=>{
    let col = mongodb.col(fruits);
    await col.deleteMany();

    const data=  new Array(100).fill().map((v, i)=>{
        return {name: i}
    })
    await col.insertMany(data)
});