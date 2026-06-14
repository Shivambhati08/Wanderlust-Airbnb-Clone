const mongoose = require("mongoose");
const initdata = require("./data.js");
const Listing = require("../models/listing.js"); 
const dns = require("dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);


const MONGO_URL = "mongodb+srv://shivambhati08:shivam0812@cluster0.b2fceae.mongodb.net/?appName=Cluster0";
main()
.then(()=>{
    console.log("connection successful");
})
.catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect(MONGO_URL);
};
 
// const initdb  = async ()=>{
//     await Listing.deleteMany({}); 
//     initdata.data = initdata.data.map((obj)=>({...obj, owner: "6a2ee4fad06e30fa6b9e768c"}))
//     await Listing.insertMany(initdata.data);
//     console.log("Database initialized");
// };

// initdb();
const initDB = async () => {
    await Listing.deleteMany({});

    const ownerId = "6a2ee4fad06e30fa6b9e768c"; // Existing User _id

    const listings = initdata.data.map((obj) => ({
        ...obj,
        owner: ownerId,
    }));

    await Listing.insertMany(listings);
    console.log("Database initialized");
};

initDB();