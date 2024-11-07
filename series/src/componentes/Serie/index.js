import './Serie.css'

const Serie = ({nome, imagem, anoLancamento, corDeFundo}) => {
    return (
        <div className='serie'>
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{anoLancamento}</h5>
            </div>
        </div>
    )
}

export default Serie
