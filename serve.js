import http from 'http';
import app from './app/app.js';

const PORT=process.env.PORT || 3000;

const server= http.createServer(app)

//Server
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})  