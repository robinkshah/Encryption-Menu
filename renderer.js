function caesar(text, shift = 3) {
    return text.split('').map(char => {
      const code = char.charCodeAt(0);
      if (char >= 'A' && char <= 'Z')
        return String.fromCharCode((code - 65 + shift) % 26 + 65);
      if (char >= 'a' && char <= 'z')
        return String.fromCharCode((code - 97 + shift) % 26 + 97);
      return char;
    }).join('');
  }
  
  function atbash(text) {
    return text.split('').map(char => {
      if (char >= 'A' && char <= 'Z')
        return String.fromCharCode(90 - (char.charCodeAt(0) - 65));
      if (char >= 'a' && char <= 'z')
        return String.fromCharCode(122 - (char.charCodeAt(0) - 97));
      return char;
    }).join('');
  }
  
  function vigenere(text, key) {
    key = key.toLowerCase().replace(/[^a-z]/g, '');
    if (!key) return text;
  
    let output = '';
    let j = 0;
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const code = text.charCodeAt(i);
      if (/[a-zA-Z]/.test(char)) {
        const shift = key.charCodeAt(j % key.length) - 97;
        if (char >= 'A' && char <= 'Z') {
          output += String.fromCharCode((code - 65 + shift) % 26 + 65);
        } else {
          output += String.fromCharCode((code - 97 + shift) % 26 + 97);
        }
        j++;
      } else {
        output += char;
      }
    }
    return output;
  }
  
  function base64Encode(text) {
    return btoa(text);
  }
  
  function encryptText() {
    const input = document.getElementById('inputText').value;
    const cipher = document.getElementById('cipherChoice').value;
    const key = document.getElementById('key').value;
    let output = '';
  
    switch (cipher) {
      case 'caesar':
        output = caesar(input, parseInt(key) || 3);
        break;
      case 'atbash':
        output = atbash(input);
        break;
      case 'vigenere':
        output = vigenere(input, key);
        break;
      case 'base64':
        output = base64Encode(input);
        break;
    }
  
    document.getElementById('outputText').innerText = output;
  }
  