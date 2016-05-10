export default {
  save (dev) {
    return new Promise( (resolve, reject) => {
      if(localStorage.getItem(dev.username)) {
        reject('Item já foi salvo previamente');
      }
      const item = localStorage.setItem(dev.username, JSON.stringify(dev));
      resolve('Sucesso ao salvar desenvolvedor!');
    });
  },
  get (dev) {
    return new Promise( (resolve, reject) => {
      const item = localStorage.getItem(dev.username);
      if (!item) reject('Nenhum desenvolvedor encontrado!')
      resolve(JSON.parse(item));
    });
  },
  getAll () {
    return new Promise( (resolve, reject) => {
      const items = Object.keys(localStorage);
      if (!items.length) reject('Nenhum desenvolvedor encontrado!');

      const result = items.map( (i) => JSON.parse(localStorage.getItem(i)));
      console.log(result);
      resolve(result);
    });
  },
  remove (dev) {
    return new Promise( (resolve, reject) => {
      const item = localStorage.getItem(dev.username);
      if (!item) reject('Nenhum desenvolvedor encontrado para ser removido!');

      const result = localStorage.removeItem(dev.username);
      resolve('Desenvolvedor removido com sucesso!');
    });
  },
  removeAll () {
    return new Promise( (resolve, reject) => {
      const items = Object.keys(localStorage);
      if (!items.length) reject('Nenhum desenvolvedor encontrado!');

      items.forEach( (i) => localStorage.removeItem(i));
      resolve('Todos os desenvolvedores removidos!');
    });
  }
}
