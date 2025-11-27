function detectarEntrada(valor) {
    if (!isNaN(valor)) return "número";
    else if (/^[a-zA-Z]+$/.test(valor)) return "letra";
    else return "caractere especial";
  }
  
  module.exports = detectarEntrada;
  