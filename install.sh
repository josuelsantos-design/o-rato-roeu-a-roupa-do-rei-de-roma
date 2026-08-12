#!/bin/bash

# Script de instalação do CodeMaster

echo "╔═══════════════════════════════════════════════════════╗"
echo "║   CodeMaster - Instalação                            ║"
echo "╚═══════════════════════════════════════════════════════╝"

echo ""
echo "📦 Verificando Node.js..."

if ! command -v node &> /dev/null; then
    echo "❌ Node.js não encontrado!"
    echo "   Instale de: https://nodejs.org/"
    exit 1
fi

echo "✓ Node.js encontrado: $(node --version)"

echo ""
echo "📦 Verificando npm..."

if ! command -v npm &> /dev/null; then
    echo "❌ npm não encontrado!"
    exit 1
fi

echo "✓ npm encontrado: $(npm --version)"

echo ""
echo "📦 Instalando dependências..."
npm install

echo ""
echo "✅ Instalação concluída!"
echo ""
echo "🚀 Para iniciar o servidor, execute:"
echo "   npm start"
echo ""
echo "Depois acesse: http://localhost:3000"
echo ""
