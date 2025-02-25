require('dotenv').config();
const express = require('express');
const {connectDB} = require('./config/db')
const userRouter = require('./routers/userRouter')
const carRouter = require('./routers/carRouter')

const app = express();
app.use(express.json())

app.use('/api', userRouter);
app.use('/api', carRouter)

connectDB().then(() => {
    const PORT = process.env.PORT;
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}).catch((error) => {
    console.error("Failed to start server:", error);
});
