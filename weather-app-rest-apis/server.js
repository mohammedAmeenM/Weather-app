require('dotenv').config();
const app = require('./app');
const connectDb = require('./src/db/dbConnection');

// Connect to MongoDB
connectDb();

// Start the server
app.listen(process.env.PORT, () => { 
  console.log(`Server running on port ${process.env.PORT }`);
});
