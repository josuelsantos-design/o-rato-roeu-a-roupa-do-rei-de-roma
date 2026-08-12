const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));

// Rota principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// API para validação de código (futuro)
app.post('/api/validate', (req, res) => {
    const { code, language, testCases } = req.body;
    // Implementar validação de código aqui
    res.json({ success: true });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`
    ╔═══════════════════════════════════════════════════════╗
    ║                                                       ║
    ║    🎮 CodeMaster - Plataforma Educativa de Prog.   ║
    ║                                                       ║
    ║    Servidor rodando em: http://localhost:${PORT}      ║
    ║                                                       ║
    ║    Abra o navegador e acesse http://localhost:3000  ║
    ║                                                       ║
    ╚═══════════════════════════════════════════════════════╝
    `);
});
