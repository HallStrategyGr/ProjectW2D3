import mongodb from "mongodb";
import { resourceLimits } from "worker_threads";

const client = new mongodb.MongoClient(
  "mongodb+srv://HallStrategyGroup:Behappy1!@cluster0.tguqm.mongodb.net?retryWrites=true&w=majority"
);

await client.connect();
console.log("Connected");
const db = client.db("ProjectW2D3");
const collection = db.collection("Streaming_Platforms");

await collection.insertOne({
  
});

const results = collection.find();

const users = await results.toArray();
console.log(users);

await client.close();



// const Characters = []
// await collection.insertOne({
//     cons
// });
// for (let i = 0; i < streamingPlatforms.length; i++) {
//     const results = await collection.find({
//         streamingID: streamingPlatforms[i],
//     });

//     const platforms = await results.toArray();
//     if (platforms.length === 0) {
//         await collection.insertOne({
//             streamingID: streamingPlatforms[i],
//         });
//     }

//     console.log(platforms);
// }
