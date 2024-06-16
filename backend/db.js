const mongoose = require('mongoose');
const mongoURI = "mongodb://goFoodx:mern123@ac-thvqxnb-shard-00-00.krll7rb.mongodb.net:27017,ac-thvqxnb-shard-00-01.krll7rb.mongodb.net:27017,ac-thvqxnb-shard-00-02.krll7rb.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-eia23g-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB");

        const foodItemsCollection = mongoose.connection.db.collection("food_items");
        const foodItems = await foodItemsCollection.find({}).toArray();

        const foodCategoryCollection = mongoose.connection.db.collection("foodCategory");
        const foodCategories = await foodCategoryCollection.find({}).toArray();

        global.food_items = foodItems;
        global.foodCategory = foodCategories;

        console.log("Data fetched and stored in global variables.");
    } catch (error) {
        console.error('Error connecting to database or fetching data:', error);
    }
};

module.exports = mongoDB;
