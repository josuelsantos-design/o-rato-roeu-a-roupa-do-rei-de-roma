/* ===== EXEMPLOS DE DESAFIOS EM C# ===== */

// Este arquivo contém exemplos de como resolver os desafios em C#
// Você pode copiar e colar este código em um compilador online como:
// - dotnetfiddle.net
// - ideone.com
// - repl.it

// ===== DESAFIO 1: GOLS DO MESSI =====
/*
public class Solution {
    public int GoalsMessi(int seasons) {
        return seasons * 50;
    }
}

// Teste:
var sol = new Solution();
Console.WriteLine(sol.GoalsMessi(1));  // 50
Console.WriteLine(sol.GoalsMessi(5));  // 250
Console.WriteLine(sol.GoalsMessi(10)); // 500
*/

// ===== DESAFIO 2: PLACAR DA PARTIDA =====
/*
public class Solution {
    public string MatchResult(int teamGoals, int opponentGoals) {
        if (teamGoals > opponentGoals) return "Ganhou!";
        if (teamGoals < opponentGoals) return "Perdeu!";
        return "Empate!";
    }
}

// Teste:
var sol = new Solution();
Console.WriteLine(sol.MatchResult(3, 2)); // "Ganhou!"
Console.WriteLine(sol.MatchResult(2, 3)); // "Perdeu!"
Console.WriteLine(sol.MatchResult(2, 2)); // "Empate!"
*/

// ===== DESAFIO 3: MÉDIA DE GOLS =====
/*
public class Solution {
    public double AverageGoals(int[] goals) {
        int sum = 0;
        foreach (int goal in goals) {
            sum += goal;
        }
        return (double)sum / goals.Length;
    }
}

// Teste:
var sol = new Solution();
Console.WriteLine(sol.AverageGoals(new int[] {1, 2, 3}));     // 2
Console.WriteLine(sol.AverageGoals(new int[] {5, 5, 5}));     // 5
Console.WriteLine(sol.AverageGoals(new int[] {0, 2, 4, 6}));  // 3
*/

// ===== DESAFIO 4: ESCALAÇÃO DO TIME =====
/*
public class Solution {
    public string FormatTeam(string[] players) {
        return string.Join(", ", players);
    }
}

// Teste:
var sol = new Solution();
Console.WriteLine(sol.FormatTeam(new string[] {"Messi", "Neymar", "Suárez"}));
// Output: "Messi, Neymar, Suárez"
*/

// ===== DESAFIO 5: PONTUAÇÃO DO CAMPEONATO =====
/*
public class Solution {
    public int[] ChampionshipPoints(int wins, int draws, int losses) {
        int points = wins * 3 + draws * 1;
        return new int[] { wins, draws, losses, points };
    }
}

// Teste:
var sol = new Solution();
var result = sol.ChampionshipPoints(5, 3, 2);
// Output: [5, 3, 2, 18]
Console.WriteLine($"[{result[0]}, {result[1]}, {result[2]}, {result[3]}]");
*/

// ===== DESAFIO 6: NÚMERO SECRETO =====
/*
public class Solution {
    public string GuessNumber(int attempt) {
        int secret = 42;
        if (attempt == secret) return "Acertou!";
        if (attempt < secret) return "Maior";
        return "Menor";
    }
}

// Teste:
var sol = new Solution();
Console.WriteLine(sol.GuessNumber(42)); // "Acertou!"
Console.WriteLine(sol.GuessNumber(30)); // "Maior"
Console.WriteLine(sol.GuessNumber(50)); // "Menor"
*/

// ===== DESAFIO 7: DADO MÁGICO =====
/*
public class Solution {
    public int RollDice() {
        Random random = new Random();
        return random.Next(1, 7);
    }
}

// Teste:
var sol = new Solution();
for (int i = 0; i < 5; i++) {
    Console.WriteLine(sol.RollDice()); // Números entre 1 e 6
}
*/

// ===== DESAFIO 8: MOEDA DA SORTE =====
/*
public class Solution {
    public string FlipCoin() {
        Random random = new Random();
        return random.Next(2) == 0 ? "Cara" : "Coroa";
    }
}

// Teste:
var sol = new Solution();
for (int i = 0; i < 5; i++) {
    Console.WriteLine(sol.FlipCoin()); // "Cara" ou "Coroa"
}
*/

// ===== DESAFIO 9: PONTOS DO JOGO =====
/*
public class Solution {
    public int GameScore(int hits, int misses, int bonus = 1) {
        return (hits * 10 - misses * 5) * bonus;
    }
}

// Teste:
var sol = new Solution();
Console.WriteLine(sol.GameScore(5, 2, 1)); // 40
Console.WriteLine(sol.GameScore(5, 2, 2)); // 80
Console.WriteLine(sol.GameScore(10, 0, 1)); // 100
*/

// ===== DESAFIO 10: PAR OU ÍMPAR =====
/*
public class Solution {
    public string IsEvenOrOdd(int num) {
        return num % 2 == 0 ? "Par" : "Ímpar";
    }
}

// Teste:
var sol = new Solution();
Console.WriteLine(sol.IsEvenOrOdd(4)); // "Par"
Console.WriteLine(sol.IsEvenOrOdd(7)); // "Ímpar"
Console.WriteLine(sol.IsEvenOrOdd(0)); // "Par"
*/

// ===== DESAFIO 11: FATORIAL =====
/*
public class Solution {
    public int Factorial(int n) {
        if (n <= 1) return 1;
        return n * Factorial(n - 1);
    }
}

// Teste:
var sol = new Solution();
Console.WriteLine(sol.Factorial(5)); // 120
Console.WriteLine(sol.Factorial(0)); // 1
Console.WriteLine(sol.Factorial(6)); // 720
*/

// ===== DESAFIO 12: FIBONACCI =====
/*
public class Solution {
    public int Fibonacci(int n) {
        if (n <= 1) return n;
        return Fibonacci(n - 1) + Fibonacci(n - 2);
    }
}

// Teste:
var sol = new Solution();
Console.WriteLine(sol.Fibonacci(0));  // 0
Console.WriteLine(sol.Fibonacci(5));  // 5
Console.WriteLine(sol.Fibonacci(7));  // 13
*/

// ===== DESAFIO 13: CONTADOR DE CARACTERES =====
/*
public class Solution {
    public int CountCharacters(string str) {
        return str.Length;
    }
}

// Teste:
var sol = new Solution();
Console.WriteLine(sol.CountCharacters("Hello"));   // 5
Console.WriteLine(sol.CountCharacters("Python"));  // 6
Console.WriteLine(sol.CountCharacters(""));        // 0
*/

// ===== DESAFIO 14: INVERTER STRING =====
/*
public class Solution {
    public string ReverseString(string str) {
        char[] chars = str.ToCharArray();
        System.Array.Reverse(chars);
        return new string(chars);
    }
}

// Teste:
var sol = new Solution();
Console.WriteLine(sol.ReverseString("Hello"));   // "olleH"
Console.WriteLine(sol.ReverseString("Python"));  // "nohtyP"
Console.WriteLine(sol.ReverseString("Rato"));    // "otaR"
*/

// ===== DESAFIO 15: PALÍNDROMO =====
/*
public class Solution {
    public bool IsPalindrome(string str) {
        string clean = System.Text.RegularExpressions.Regex.Replace(str.ToLower(), "[^a-z0-9]", "");
        char[] chars = clean.ToCharArray();
        System.Array.Reverse(chars);
        return clean == new string(chars);
    }
}

// Teste:
var sol = new Solution();
Console.WriteLine(sol.IsPalindrome("racecar"));                        // true
Console.WriteLine(sol.IsPalindrome("hello"));                          // false
Console.WriteLine(sol.IsPalindrome("A man a plan a canal Panama")); // true
*/

// ===== DESAFIO 16: MAIÚSCULA E MINÚSCULA =====
/*
public class Solution {
    public string[] CaseConversion(string str) {
        return new string[] { str.ToUpper(), str.ToLower() };
    }
}

// Teste:
var sol = new Solution();
var result = sol.CaseConversion("Hello");
Console.WriteLine($"[{result[0]}, {result[1]}]"); // "[HELLO, hello]"
*/

// ===== DESAFIO 17: MAIOR NÚMERO =====
/*
public class Solution {
    public int FindMax(int[] arr) {
        return System.Linq.Enumerable.Max(arr);
    }
}

// Teste:
var sol = new Solution();
Console.WriteLine(sol.FindMax(new int[] {1, 5, 3, 9, 2})); // 9
Console.WriteLine(sol.FindMax(new int[] {10}));             // 10
*/

// ===== COMO USAR ESTE ARQUIVO =====
/*
1. Descomente o desafio que deseja resolver
2. Copie e cole em um compilador online (dotnetfiddle.net)
3. Execute para ver os resultados
4. Modifique conforme necessário
5. Quando terminar, marque como completo no CodeMaster!

Compiladores Online Recomendados:
- dotnetfiddle.net (Melhor para C#)
- ideone.com
- repl.it
- mycompiler.io
*/
