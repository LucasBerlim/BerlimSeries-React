import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='rodape-container'>
            <div className='social'>
                <ul>
                    <li>
                        <a href='https://www.linkedin.com/in/lucas-berlim-705136265/'>
                            <img src='./imagens/in.png' alt='Linkedin'/>
                            <p>Lucas Berlim</p>
                        </a>
                    </li>
                </ul>
            </div>
            <p>Conhecimento obtido através de curso na Alura</p>
        </footer>
    )
}

export default Rodape
