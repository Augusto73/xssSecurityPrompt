GUIDA USO PROMPT XSS - JSP/Spring MVC
======================================

LLM TESTATO E VALIDATO:
-----------------------
Claude Sonnet 4.5 (Perplexity AI)

ALTRI LLM NON RACCOMANDATI:
---------------------------
GPT-5: genera falsi positivi
Kimi K2: genera falsi positivi gravi

FILE USATI x SEQUENZA CONTROLLO:
-----------
LIVELLO 1: 1-xss-screening-prompt.md
LIVELLO 2: 2-xss-audit-prompt.md
LIVELLO 3: 3-xss-check-list-manuale.md
JAVASCRIPT: owasp-encoding.js (obbligatorio)

FILE DA FORNIRE ALLO LLM:
------------------------
1. owasp-encoding.js
2. File JSP da analizzare

SEQUENZA CONTROLLO:
-------------------

STEP 1: LIVELLO 1 (screening veloce)
  1. Apri Perplexity AI (Claude Sonnet 4.5)
  2. Incolla 1-xss-screening-prompt.md
  3. Incolla owasp-encoding.js
  4. Incolla JSP
  5. inserisci il segunte prompt: Analizza per primo il file: 1-xss-screening-prompt.md allegato: ci sono tutte le istruzioni
  6. Invia
  7. Se "Codice corretto" → vai STEP 2
     Se errori → correggi e ripeti STEP 1

STEP 2: LIVELLO 2 (audit dettagliato)
  1. Apri NUOVO thread Perplexity AI
  2. Incolla 2-xss-audit-prompt.md
  3. Incolla owasp-encoding.js
  4. Incolla JSP
  5. inserisci il segunte prompt: Analizza per primo il file: 2-xss-audit-prompt.md allegato: ci sono tutte le istruzioni
  6. Invia
  7. Controlla report (✓/✗)
  8. Se tutti ✓ → vai STEP 3
     Se errori ✗ → correggi e ripeti STEP 2

STEP 3: LIVELLO 3 (controllo manuale)
  1. Apri 3-xss-check-list-manuale.md
  2. Apri JSP
  3. Segui checklist punto per punto
  4. Segna ✓ ogni punto OK
  5. Punto 4: verifica maxlength = VARCHAR DB
  6. Fine

