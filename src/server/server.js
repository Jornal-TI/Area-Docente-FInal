require('dotenv/config');
const express = require('express');
const app = express();
const router = require('./authRoutes')
const cors = require('cors')

app.use(express.json());
app.use(cors())
app.use(express.json())
app.use(router)

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

app.get('/', (request, response) => {
    response.send('Olá')
})