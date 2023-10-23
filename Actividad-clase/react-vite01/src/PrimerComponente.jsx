const string = 'textos';
const number = 123456;
const array = ['React', 'Vite', 'Sena', 2694526];
console.log(array);
const boolean = true;
const funcion = () => 1+1;
const objeto = { nombre:'Clase React', fecha:'23-10-2023' };
const fecha = new Date();


export const PrimerComponente = () => {
  return (
    <>
      <h2>Manejo de Tipos de Datos y Variables</h2>
      <ol>
        {/* entre las llaves se va a ejecutar codigo js o jsx */}
        <li>{string}</li>
        <li>{number}</li>
        <li>{array}</li>
        <li>{boolean}</li>
        {console.log(boolean)}
        <li>{funcion()}</li>
        <li>{JSON.stringify(objeto)}</li>
        <li>{JSON.stringify(fecha)}</li>
      </ol>

    </>
  )
}
