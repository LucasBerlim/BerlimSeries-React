import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [anoLancamento, setAnoLancamento] = useState('')
    const [imagem, setImagem] = useState('')
    const [genero, setGenero] = useState('Terror')

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aSerieCadastrada({
            nome,
            anoLancamento,
            imagem,
            genero
        })

        setNome('')
        setAnoLancamento('')
        setImagem('')
        setGenero('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha com os dados da série que você gosta</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite o nome da série" valor={nome} aoAlterado={valor => setNome(valor)}/>
                <CampoTexto obrigatorio={true} label="Ano de lançamento" placeholder="Digite o ano de lançamento" valor={anoLancamento} aoAlterado={valor => setAnoLancamento(valor)} />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" valor={imagem} aoAlterado={valor => setImagem(valor)} />
                <ListaSuspensa obrigatorio={true} label="Gênero" itens={props.generos} valor={genero} aoAlterado={valor => setGenero(valor)}/>
                <Botao>
                    Adicionar série
                </Botao>
            </form>
        </section>
    )
}

export default Formulario
