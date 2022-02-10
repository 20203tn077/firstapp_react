const heroes = [
    {
      id: 1,
      name: 'Iron man',
      brand: 'Marvel'
    },
    {
      id: 2,
      name: 'Spider-Man',
      brand: 'Marvel'
    },
    {
      id: 3,
      name: 'Batman',
      brand: 'DC'
    },
    {
      id: 4,
      name: 'Flash',
      brand: 'DC'
    },
    {
      id: 5,
      name: 'Deadman',
      brand: 'DC'
    },
    {
      id: 6,
      name: 'Gambit',
      brand: 'Marvel'
    },
  ]

  let searchId = 4;
  let searchBrand = 'DC';

  function imprimir({ id, name, brand }) {
    console.log(`Id: ${id}, nombre: ${name}, editorial: ${brand}`);
  }

  /*
    // Imprime todos
    console.log('\nTODOS');
    heroes.map(imprimir);
  
    // Filtra por editorial
    console.log('\nPOR EDITORIAL');
    heroes.filter(({brand}) => brand === searchBrand).map(imprimir);
  
    // Busca por id
    console.log('\nPOR ID');
    imprimir(heroes.find(({id}) => id == searchId));
  */

  const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject();
    }, 2000);
  })

  promesa.then(console.log).catch(console.log);