import app from './app';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 8080;

// ONLY FOR TESTING THE LOCAL HOST BY GETTING THE RESPONSE
app.get('/', (req, res) => {
    res.send('Hello world!!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
