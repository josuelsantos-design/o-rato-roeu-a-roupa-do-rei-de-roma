// ===== GERENCIAMENTO DO APLICATIVO =====

let currentChallenge = null;
let userProgress = loadProgress();
let filteredChallenges = allChallenges;
let currentLanguage = "javascript";

// Carregar progresso salvo
function loadProgress() {
    const saved = localStorage.getItem('codemaster-progress');
    return saved ? JSON.parse(saved) : {};
}

// Salvar progresso
function saveProgress() {
    localStorage.setItem('codemaster-progress', JSON.stringify(userProgress));
    updateStats();
}

// Atualizar estatísticas
function updateStats() {
    const completed = Object.values(userProgress).filter(p => p.completed).length;
    const totalPoints = Object.values(userProgress).reduce((sum, p) => sum + (p.points || 0), 0);
    
    document.getElementById('completedChallenges').textContent = `${completed}/${allChallenges.length}`;
    document.getElementById('totalPoints').textContent = totalPoints;
}

// ===== INICIALIZAÇÃO =====

document.addEventListener('DOMContentLoaded', function() {
    renderChallenges();
    setupEventListeners();
    updateStats();
});

// ===== RENDERIZAÇÃO DE DESAFIOS =====

function renderChallenges(filter = 'all') {
    const grid = document.getElementById('challengesGrid');
    grid.innerHTML = '';

    const filtered = filter === 'all' ? allChallenges : 
                     allChallenges.filter(c => {
                         if (filter.startsWith('theme-')) return c.theme === filter;
                         if (filter.startsWith('lang-')) {
                             const lang = filter === 'lang-javascript' ? 'javascript' : 'csharp';
                             return c.languages.includes(lang);
                         }
                         return true;
                     });

    filtered.forEach(challenge => {
        const card = createChallengeCard(challenge);
        grid.appendChild(card);
    });
}

function createChallengeCard(challenge) {
    const card = document.createElement('div');
    card.className = 'challenge-card';
    
    const progress = userProgress[challenge.id] || {};
    if (progress.completed) {
        card.classList.add('completed');
    }

    const themeEmoji = {
        'theme-football': '⚽',
        'theme-game': '🎮',
        'theme-math': '🔢',
        'theme-strings': '📝'
    };

    const difficultyClass = challenge.difficulty.toLowerCase();

    card.innerHTML = `
        <div class="challenge-header">
            <div>
                <div class="challenge-title">${challenge.title}</div>
                <span class="challenge-theme ${challenge.theme}">
                    ${themeEmoji[challenge.theme]} ${challenge.theme.replace('theme-', '').toUpperCase()}
                </span>
            </div>
            ${progress.completed ? '<div class="completion-badge">✓</div>' : ''}
        </div>
        
        <p class="challenge-description-preview">${challenge.description.substring(0, 100)}...</p>
        
        <div class="challenge-footer">
            <div class="challenge-languages">
                ${challenge.languages.map(lang => `<span class="lang-badge">${lang.toUpperCase()}</span>`).join('')}
            </div>
            <span class="challenge-difficulty ${difficultyClass}">${challenge.difficulty}</span>
        </div>
        
        <div style="margin-top: 1rem; display: flex; justify-content: space-between; align-items: center;">
            <span class="challenge-points">+${challenge.points} pts</span>
            <button class="btn btn-primary" style="flex: 0; padding: 0.5rem 1rem;" onclick="openChallenge(${challenge.id})">
                ${progress.completed ? '🔄 Refazer' : '▶ Começar'}
            </button>
        </div>
    `;

    return card;
}

// ===== MODAL E DESAFIOS =====

function openChallenge(id) {
    currentChallenge = allChallenges.find(c => c.id === id);
    if (!currentChallenge) return;

    currentLanguage = "javascript";
    
    // Preencher modal
    document.getElementById('challengeTitle').textContent = currentChallenge.title;
    document.getElementById('challengeDescription').textContent = currentChallenge.description;
    document.getElementById('languageSelect').value = 'javascript';

    // Exemplos
    const examplesDiv = document.getElementById('challengeExamples');
    examplesDiv.innerHTML = currentChallenge.examples.map(ex => `
        <div class="example">
            <div class="example-label">${ex.label}</div>
            <div>${ex.description}</div>
        </div>
    `).join('');

    // Editor
    const template = currentChallenge.javascript.template;
    document.getElementById('codeEditor').value = template;

    // Mostrar modal
    document.getElementById('challengeModal').classList.add('active');
    document.getElementById('modalOverlay').classList.add('active');

    // Limpar outputs
    document.getElementById('outputArea').innerHTML = '';
    document.getElementById('testsArea').innerHTML = '';
    document.getElementById('feedbackArea').innerHTML = '';
    document.getElementById('hintArea').style.display = 'none';
    document.getElementById('hintArea').innerHTML = '';
}

function closeChallenge() {
    document.getElementById('challengeModal').classList.remove('active');
    document.getElementById('modalOverlay').classList.remove('active');
    currentChallenge = null;
}

// ===== SWITCH DE LINGUAGEM =====

function switchLanguage() {
    const lang = document.getElementById('languageSelect').value;
    currentLanguage = lang;
    
    if (!currentChallenge) return;

    const template = lang === 'javascript' ? 
        currentChallenge.javascript.template : 
        currentChallenge.csharp.template;

    document.getElementById('codeEditor').value = template;
    document.getElementById('outputArea').innerHTML = '';
    document.getElementById('testsArea').innerHTML = '';
}

// ===== EXECUÇÃO DE CÓDIGO =====

async function runCode() {
    const code = document.getElementById('codeEditor').value;
    const outputArea = document.getElementById('outputArea');
    const testsArea = document.getElementById('testsArea');

    if (!code.trim()) {
        outputArea.textContent = '⚠️ Digite algum código!';
        return;
    }

    try {
        if (currentLanguage === 'javascript') {
            runJavaScript(code);
        } else {
            // Para C#, mostrar aviso educativo
            outputArea.innerHTML = `<span style="color: #f59e0b;">⚠️ Para C#, use um compilador online como <a href="https://dotnetfiddle.net/" target="_blank">dotnetfiddle.net</a><br>Copie o código e teste lá!</span>`;
        }
    } catch (error) {
        outputArea.textContent = `❌ Erro: ${error.message}`;
    }
}

function runJavaScript(code) {
    const outputArea = document.getElementById('outputArea');
    const testsArea = document.getElementById('testsArea');
    
    let output = '';
    const originalLog = console.log;
    
    console.log = function(...args) {
        output += args.join(' ') + '\n';
    };

    try {
        // Executar o código
        const func = new Function(code + `; return ${extractFunctionName()};`);
        const userFunction = func();

        // Mostrar output
        if (output) {
            outputArea.textContent = output;
        } else {
            outputArea.textContent = '(sem saída)';
        }

        // Executar testes
        runTests(userFunction, testsArea);

    } catch (error) {
        outputArea.textContent = `❌ Erro de sintaxe: ${error.message}`;
        testsArea.innerHTML = '';
    } finally {
        console.log = originalLog;
    }
}

function extractFunctionName() {
    const code = document.getElementById('codeEditor').value;
    const match = code.match(/function\s+(\w+)/);
    return match ? match[1] : 'func';
}

function runTests(userFunction, testsArea) {
    if (!currentChallenge) return;

    const testCases = currentLanguage === 'javascript' ? 
        currentChallenge.javascript.testCases : 
        currentChallenge.csharp.testCases;

    let allPassed = true;
    let html = '';

    testCases.forEach((testCase, idx) => {
        try {
            const result = userFunction(...testCase.input);
            const passed = JSON.stringify(result) === JSON.stringify(testCase.expected);
            
            if (!passed) allPassed = false;

            html += `
                <div class="test-case ${passed ? 'passed' : 'failed'}">
                    <span class="test-status">${passed ? '✓' : '✗'}</span>
                    Teste ${idx + 1}: entrada ${JSON.stringify(testCase.input)} → ${passed ? 'esperado' : 'obteve'} ${JSON.stringify(result)}
                </div>
            `;
        } catch (error) {
            allPassed = false;
            html += `
                <div class="test-case failed">
                    <span class="test-status">✗</span>
                    Teste ${idx + 1}: Erro - ${error.message}
                </div>
            `;
        }
    });

    testsArea.innerHTML = html;

    if (allPassed) {
        showFeedback('success', '🎉 Todos os testes passaram!');
    }
}

// ===== FEEDBACK =====

function showFeedback(type, message) {
    const feedback = document.getElementById('feedbackArea');
    feedback.className = `feedback ${type}`;
    feedback.textContent = message;
}

function showHint() {
    const hintArea = document.getElementById('hintArea');
    if (currentChallenge && currentChallenge.hint) {
        hintArea.textContent = currentChallenge.hint;
        hintArea.style.display = 'block';
    }
}

function resetCode() {
    if (!currentChallenge) return;
    const template = currentLanguage === 'javascript' ? 
        currentChallenge.javascript.template : 
        currentChallenge.csharp.template;
    document.getElementById('codeEditor').value = template;
}

function submitChallenge() {
    const code = document.getElementById('codeEditor').value;
    
    if (!currentChallenge || !code.trim()) {
        showFeedback('warning', '⚠️ Digite seu código antes de enviar!');
        return;
    }

    // Verificar se todos os testes passaram
    if (currentLanguage === 'javascript') {
        try {
            const func = new Function(code + `; return ${extractFunctionName()};`);
            const userFunction = func();
            
            const testCases = currentChallenge.javascript.testCases;
            const allPassed = testCases.every(testCase => {
                try {
                    const result = userFunction(...testCase.input);
                    return JSON.stringify(result) === JSON.stringify(testCase.expected);
                } catch {
                    return false;
                }
            });

            if (!allPassed) {
                showFeedback('error', '❌ Nem todos os testes passaram. Tente novamente!');
                return;
            }

            // Desafio completado!
            userProgress[currentChallenge.id] = {
                completed: true,
                points: currentChallenge.points,
                completedAt: new Date().toISOString()
            };
            saveProgress();

            showFeedback('success', `🎊 Desafio completo! +${currentChallenge.points} pontos!`);
            
            setTimeout(() => {
                closeChallenge();
                renderChallenges();
            }, 2000);

        } catch (error) {
            showFeedback('error', `❌ Erro: ${error.message}`);
        }
    } else {
        showFeedback('warning', '⚠️ Para C#, complete o desafio em um compilador online e volte aqui para marcar como concluído!');
    }
}

// ===== EVENT LISTENERS =====

function setupEventListeners() {
    // Botões modais
    document.getElementById('closeModal').addEventListener('click', closeChallenge);
    document.getElementById('modalOverlay').addEventListener('click', closeChallenge);

    // Botões do editor
    document.getElementById('runBtn').addEventListener('click', runCode);
    document.getElementById('resetBtn').addEventListener('click', resetCode);
    document.getElementById('submitBtn').addEventListener('click', submitChallenge);
    document.getElementById('showHintBtn').addEventListener('click', showHint);

    // Filtros de navegação
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            renderChallenges(filter);
        });
    });

    // Fechar modal com ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeChallenge();
        }
    });
}

// ===== UTILITÁRIOS =====

function exportProgress() {
    const data = JSON.stringify(userProgress, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'progresso-codemaster.json';
    a.click();
}

function importProgress(file) {
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            userProgress = JSON.parse(e.target.result);
            saveProgress();
            renderChallenges();
            alert('✓ Progresso importado com sucesso!');
        } catch (error) {
            alert('❌ Erro ao importar arquivo!');
        }
    };
    reader.readAsText(file);
}
