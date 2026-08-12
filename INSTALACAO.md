# 📋 GUIA DE INSTALAÇÃO E USO

## ⚡ Instalação Rápida (Com Node.js)

### Linux/Mac
```bash
chmod +x install.sh
./install.sh
npm start
```

### Windows
```cmd
install.bat
npm start
```

## 🌐 Sem Servidor (Apenas HTML)

Se você não quiser instalar Node.js, pode abrir diretamente:

1. Clique com botão direito em `index.html`
2. Escolha "Abrir com navegador"
3. Pronto! A plataforma está funcional

**Nota**: Sem o servidor, o site funciona 100%, mas alguns recursos podem ser limitados.

## 🎯 Requisitos

- **Node.js 14+** (recomendado 18 ou superior)
- **npm 6+**
- **Navegador moderno** (Chrome, Firefox, Safari, Edge)

## 🚀 Iniciar Servidor

```bash
npm start
```

Abra no navegador: `http://localhost:3000`

## 🛑 Parar Servidor

Pressione `Ctrl + C` no terminal

## 📦 Dependências

Todas as dependências são instaladas automaticamente com `npm install`:
- **express** - Framework web
- **cors** - Suporte a CORS
- **body-parser** - Parser de requisições

## 🔧 Troubleshooting

### Erro: "npm: comando não encontrado"
- Instale Node.js de https://nodejs.org/

### Erro: "Port 3000 already in use"
- A porta 3000 já está em uso
- Use: `PORT=3001 npm start`

### Erro: "Cannot find module 'express'"
- Execute: `npm install`

## 📱 Acessar Remotamente

Se você quer acessar de outro computador na mesma rede:

1. Encontre seu IP local:
   - **Linux/Mac**: `ifconfig | grep inet`
   - **Windows**: `ipconfig`

2. Acesse: `http://SEU_IP:3000`

## 💾 Backup do Progresso

Seu progresso é salvo automaticamente em `localStorage`.

Para exportar:
```javascript
// No console do navegador (F12)
localStorage.getItem('codemaster-progress')
```

## 🎓 Próximos Passos

1. ✅ Abra http://localhost:3000
2. ✅ Escolha um desafio
3. ✅ Resolva com JavaScript ou C#
4. ✅ Ganhe pontos!

## 📚 Recursos

- [Node.js Docs](https://nodejs.org/docs/)
- [Express Docs](https://expressjs.com/)
- [JavaScript MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/)
- [C# Docs](https://docs.microsoft.com/pt-br/dotnet/csharp/)

## 🆘 Suporte

Dúvidas? Confira:
- README.md (instruções gerais)
- csharp-examples.cs (exemplos em C#)
- challenges.js (definição dos desafios)

---

**Divirta-se aprendendo programação! 🎉**
