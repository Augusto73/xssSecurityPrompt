/**
 * OWASP Encoding Functions - Client-Side XSS Prevention
 */

/**
 * Controlla se un oggetto è null o undefined.
 */
function isNullOrUndefined(obj) {
    return obj === null || obj === undefined;
}

/**
 * Sanitizza valori interi rimuovendo caratteri non numerici.
 */
function sanitizeInteger(value) {
    if (isNullOrUndefined(value)) return '';
    return String(value).replace(/\D/g, '');
}

/**
 * HTML Content Context - Per contenuti HTML.
 */
function encodeHTML(text) {
    if (isNullOrUndefined(text)) return '';
    
    const tempElement = document.createElement("div");
    tempElement.textContent = text;
    return tempElement.innerHTML;
}

/**
 * HTML Attribute Context - Per attributi HTML (title, value, etc).
 */
function encodeATTR(str) {
    return String(encodeHTML(str))
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;')
        .replace(/ /g, '&#x20;');
}

/**
 * JavaScript Context - Per stringhe JavaScript o event handlers.
 */
function encodeJS(str) {
    if (isNullOrUndefined(str)) return '';
    return String(str)
        .replace(/\\/g, '\\\\')
        .replace(/'/g, '\\x27')
        .replace(/"/g, '\\x22')
        .replace(/</g, '\\x3C')
        .replace(/>/g, '\\x3E')
        .replace(/&/g, '\\x26')
        .replace(/\(/g, '\\x28')
        .replace(/\)/g, '\\x29')
        .replace(/`/g, '\\x60')
        .replace(/=/g, '\\x3D')
        .replace(/;/g, '\\x3B')
        .replace(/\//g, '\\x2F') 
        .replace(/\n/g, '\\n')
        .replace(/\r/g, '\\r')
        .replace(/\t/g, '\\t')
        .replace(/\u2028/g, '\\u2028')
        .replace(/\u2029/g, '\\u2029'); 
}

/**
 * URL Component Context - Per parametri URL.
 */
function encodeURIParam(str) {
    if (isNullOrUndefined(str)) return '';
    return encodeURIComponent(str)
        .replace(/!/g, '%21')
        .replace(/'/g, '%27')
        .replace(/</g, '%3C')
        .replace(/>/g, '%3E')
        .replace(/\$/g, '%24')
        .replace(/=/g, '%3D')
		.replace(/"/g, '%22')
		.replace(/&/g, '%26')
		.replace(/`/g, '%60')
        .replace(/\+/g, '%2B');
}