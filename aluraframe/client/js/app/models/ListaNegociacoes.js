class ListaNegociacoes {
  
  constructor() {
    
    this._negociacoes = [];
  }

  adiciona(negociacao) {

    this._negociacoes.push(negociacao);
  }

  get negociacoes() {

    return [].concat(this._negociacoes); //programação defensiva, devolvendo uma copia não o array original!
  }
}