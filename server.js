const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const sequelize = require('./config/db');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// เชื่อมต่อกับ MySQL
sequelize.sync().then(() => console.log('Database synchronized'));

// Serve static files from the public folder
app.use(express.static(__dirname + '/public'));

// กำหนดเส้นทางสำหรับหน้า Login เป็นหน้าแรก
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/login.html');
});

// Routes
app.use('/api/users', require('./routes/UserRoutes'));
app.use('/api/books', require('./routes/bookRoutes'));

// รันเซิร์ฟเวอร์
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
