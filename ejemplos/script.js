const name = 'Juan';
const nameUpperCase = name.toUpperCase();

console.log(nameUpperCase);

//array
const list = [];
const anotherlist = list.concat([100,20,313,32,30]);
console.log(anotherlist);

//objeto
const persona = {
  name: 'Juan Rojas',
  twitter: 'no tengo',
  age: 26,
  isDeveloper: true,
  links: ['https://juandavidrojas.com', 'https://midu.live']
};

console.log( persona.name );
console.log( persona.links );

const field = 'twitter'

// Esto es una forma de hacer dinámico el llamado de un elemento en el array asociativo
console.log(persona[field]);

//FUNCIONES
const suma = (n1, n2) => {
    console.log(n1);
    console.log(n2);
    return n1+n2;
}

console.log(suma(1, 2));