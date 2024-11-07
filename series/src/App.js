import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import { useState } from 'react';
import Rodape from './componentes/Rodape';
import Grupo from './componentes/Grupo';

function App() {

  const generos = [
    {
      nome: 'Terror',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Comédia',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Ação',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    },
    {
      nome: 'Romance',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    }
  ]

  const [series, setSeries] = useState([])

  const aNovaSerieAdicionada = (serie) => {
    setSeries([...series, serie]) 
  }

  return (
    <div className="App">
        <Banner />
        <Formulario generos={generos.map(genero => genero.nome)} aSerieCadastrada={serie => aNovaSerieAdicionada(serie)} />

        {generos.map(genero => <Grupo
          key={genero.nome}
          nome={genero.nome}
          corPrimaria={genero.corPrimaria}
          corSecundaria={genero.corSecundaria}
          series={series.filter(serie => serie.genero === genero.nome)}
        />)}

        <Rodape/>

    </div>
  );
}

export default App;
