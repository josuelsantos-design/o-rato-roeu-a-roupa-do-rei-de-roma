# 🎮 CodeMaster - Plataforma Educativa de Programação

Uma plataforma interativa e divertida para aprender programação em **C#** e **JavaScript** através de desafios educativos com temas variados!

## ✨ Características

- 🎯 **17+ Desafios Educativos** divididos em temas interessantes
- 🌍 **Dois Idiomas**: C# e JavaScript
- 📊 **Sistema de Pontuação**: Ganhe pontos ao completar desafios
- 🎨 **Interface Moderna**: Design responsivo e intuitivo
- 💾 **Progresso Salvo**: Seu progresso é automaticamente salvo
- 🔍 **Filtros por Tema e Linguagem**: Navegue facilmente pelos desafios
- 💡 **Dicas Educativas**: Cada desafio tem uma dica para ajudar
- ✅ **Testes Automáticos**: Validação instantânea do código

## 📚 Temas Educativos

### ⚽ Futebol
- **Gols do Messi**: Calcular gols por temporada
- **Placar da Partida**: Comparação de pontuação
- **Média de Gols**: Cálculo de estatísticas
- **Escalação do Time**: Formatação de dados
- **Pontuação do Campeonato**: Lógica de campeonato

### 🎮 Jogos
- **Número Secreto**: Adivinhação com feedback
- **Dado Mágico**: Geração de números aleatórios
- **Moeda da Sorte**: Randomização
- **Pontos do Jogo**: Cálculo de pontuação com bônus

### 🔢 Matemática
- **Par ou Ímpar**: Operadores modulares
- **Fatorial**: Recursão
- **Fibonacci**: Sequências recursivas
- **Maior Número**: Encontrar valores máximos

### 📝 Strings/Textos
- **Contador de Caracteres**: Manipulação de strings
- **Inverter String**: Inversão de ordem
- **Palíndromo**: Verificação de padrões
- **Maiúscula e Minúscula**: Transformação de case

## 🚀 Como Usar

### Instalação

1. **Clone ou baixe o projeto**
```bash
git clone https://github.com/seu-usuario/codemaster.git
cd codemaster
```

2. **Instale as dependências**
```bash
npm install
```

3. **Inicie o servidor**
```bash
npm start
```

4. **Abra seu navegador**
```
http://localhost:3000
```

### Sem Node.js?

Você pode abrir o arquivo `index.html` diretamente em um navegador moderno!

## 💻 Como Resolver Desafios

### JavaScript

1. Selecione um desafio na tela inicial
2. Leia a descrição e veja os exemplos
3. Escolha "JavaScript" na seletor de linguagem
4. Escreva o código no editor
5. Clique em **▶ Executar** para testar
6. Se todos os testes passarem, clique em **✓ Enviar**

### C#

1. Selecione um desafio
2. Escolha "C#" na seletor de linguagem
3. Você pode:
   - Copiar o código e testar em [dotnetfiddle.net](https://dotnetfiddle.net)
   - Usar Visual Studio ou Visual Studio Code
   - Compilar e rodar localmente
4. Após completar, use um compilador online para validar

## 📊 Sistema de Pontos

- **Fácil**: 100 pontos
- **Médio**: 150 pontos
- **Difícil**: 200 pontos

Complete todos os desafios e alcance o topo do ranking!

## 🎯 Estrutura do Projeto

```
codemaster/
├── index.html          # Interface principal
├── styles.css          # Estilos (Dark theme)
├── app.js             # Lógica do aplicativo
├── challenges.js      # Definição dos desafios
├── server.js          # Servidor Express (opcional)
├── package.json       # Dependências
└── README.md          # Este arquivo
```

## 🛠️ Tecnologias

- **Frontend**: HTML5, CSS3, JavaScript
- **Backend**: Node.js + Express (opcional)
- **Storage**: LocalStorage (progresso salvo localmente)
- **Temas**: CSS Variables para fácil customização

## 📝 Exemplos de Desafios

### Desafio: Fatorial (Médio)
```javascript
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

// Testes:
// factorial(5) → 120
// factorial(0) → 1
// factorial(6) → 720
```

### Desafio: Palíndromo (Médio)
```javascript
function isPalindrome(str) {
    const clean = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return clean === clean.split("").reverse().join("");
}

// Testes:
// isPalindrome("racecar") → true
// isPalindrome("hello") → false
```

## 🎓 Conceitos Ensinados

- ✅ Variáveis e tipos de dados
- ✅ Operadores e expressões
- ✅ Estruturas condicionais (if/else)
- ✅ Loops (for/while)
- ✅ Arrays e listas
- ✅ Funções e escopo
- ✅ Recursão
- ✅ Manipulação de strings
- ✅ Algoritmos básicos

## 🌟 Recursos Futuros

- [ ] Mais desafios (50+)
- [ ] Desafios colaborativos
- [ ] Compilador C# integrado
- [ ] Sistema de badges
- [ ] Leaderboard global
- [ ] Challenges de tempo
- [ ] Temas adicionais (APIs, Banco de Dados)
- [ ] Notificações de progresso
- [ ] Certificados

## 📱 Responsivo

A plataforma funciona em:
- 💻 Desktops
- 📱 Tablets
- 📱 Smartphones

## 📞 Suporte

Para dúvidas ou sugestões:
- 📧 Entre em contato
- 💬 Abra uma issue no GitHub
- 🐛 Reporte bugs

## 📄 Licença

Este projeto está sob licença MIT. Sinta-se livre para usar, modificar e distribuir!

## 🙏 Agradecimentos

Obrigado por usar CodeMaster! Divirta-se aprendendo programação! 🚀

---

**Último atualizado**: 2024
**Versão**: 1.0.0