import Serie from '../Serie'
import './Grupo.css'

const Grupo = (props) => {

    const css = {backgroundColor: props.corSecundaria}

    return (
        props.series.length > 0 && <section className='grupo'style={css}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome} </h3>
            <div className='series'>
                {props.series.map(serie => <Serie corDeFundo={props.corPrimaria} key={serie.nome} nome={serie.nome} anoLancamento={serie.anoLancamento} imagem={serie.imagem}/>)}
            </div>
        </section>
    )
}

export default Grupo
