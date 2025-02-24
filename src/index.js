const express = require('express');
const {connectDB} = require('./config/db')
const userRouter = require('./routers/userRouter')

const app = express();
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello, Express!');
});
app.use('/api', userRouter);

connectDB().then(() => {
    const PORT = 3000;
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}).catch((error) => {
    console.error("Failed to start server:", error);
});
