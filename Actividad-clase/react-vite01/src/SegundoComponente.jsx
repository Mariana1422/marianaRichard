// Comunicacion entre componentes
// Props

import TypesProp from 'prop-types';

export const SegundoComponente = ({ titulo, subtitulo, fecha }) => 
{
    console.log(titulo);
    console.log(subtitulo);
  return (
    <>
      <h1>Comunicacion y Props</h1>
      <h2>{titulo}</h2>
      <h3>{subtitulo}</h3>
      <h4>{fecha}</h4>
    </>
  );
};

SegundoComponente.proptype = {
    titulo: TypesProp.string.isRequired,
    subtitulo: TypesProp.string.isRequired,
    fecha: TypesProp.number.isRequired,
};

SegundoComponente.defaultProps = {
    titulo: "Clase React",
    subtitulo: "Vite 2023",
    fecha: new Date().getFullYear(),
};
