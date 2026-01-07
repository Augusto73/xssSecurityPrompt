# XSS Security Prompts - JSP/Spring MVC

Suite completa di prompt per screening XSS su applicazioni JSP/Spring MVC.

## 📁 Struttura Repository

- **0-xss-guida-uso-prompt.txt** - Guida completa workflow di analisi
- **1-xss-screening-prompt.txt** - Livello 1: screening veloce
- **2-xss-audit-prompt.txt** - Livello 2: audit dettagliato  
- **3-xss-check-list-manuale.txt** - Livello 3: controllo manuale
- **owasp-encoding.js** - Libreria JavaScript per encoding lato client

## 🚀 Quick Start

### Workflow Completo (3 livelli)

**STEP 1 - Screening Veloce:**
1. Apri Perplexity AI (Claude Sonnet 4.5)
2. Riferimento: `Augusto73/xssSecurityPrompt` → file `1-xss-screening-prompt.txt`
3. Incolla JSP da analizzare
4. Se "✅ Codice corretto" → vai STEP 2

**STEP 2 - Audit Dettagliato:**
1. Nuovo thread Perplexity AI
2. Riferimento: `Augusto73/xssSecurityPrompt` → file `2-xss-audit-prompt.txt`
3. Incolla JSP
4. Se tutti ✓ → vai STEP 3

**STEP 3 - Controllo Manuale:**
1. Apri `3-xss-check-list-manuale.txt`
2. Segui checklist punto per punto
3. Verifica maxlength = VARCHAR DB

## 🎯 LLM Testato

✅ **Claude Sonnet 4.5** (Perplexity AI) - validato  
❌ GPT-5 - genera falsi positivi  
❌ Kimi K2 - genera falsi positivi gravi

## 📖 Utilizzo

**Modo 1 - Riferimento diretto (massimo risparmio token):**
```
Usa le regole da Augusto73/xssSecurityPrompt/1-xss-screening-prompt.txt

JSP da analizzare:
[codice JSP]
```

**Modo 2 - Download manuale:**
Scarica i file necessari e incollali nel prompt.

## 🔒 Funzioni OWASP (owasp-encoding.js)

**Lato JavaScript:**
- `encodeHTML()` - contenuto HTML
- `encodeATTR()` - attributi HTML  
- `encodeURIParam()` - parametri URL
- `sanitizeInteger()` - ID numerici

**Lato JSP:**
- `${enc:forHtmlAttribute(...)}` - attributi HTML
- `<c:out value="${...}"/>` - contenuto HTML

## 📝 Licenza

Uso personale - Augusto73

---

**Repository creato per ottimizzare workflow XSS screening con LLM**
Current Date and Time (UTC - YYYY-MM-DD HH:MM:SS formatted): 2026-01-07 16:33:18
Current User's Login: Augusto73