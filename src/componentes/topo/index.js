import {useState} from "react";
import './style.css'
export default function Topo (){
    const [ ehTemaEscuro, setEhTemaEscuro] = useState(false);

    const alterarTema = () =>{
        setEhTemaEscuro(!ehTemaEscuro);
    }
    return(
        <div className={ehTemaEscuro? 'modo-escuro' : 'modo-claro'}>

            <header>
                <div className="box-topo">
                    <img className="logo" src="imagens/logo.png" alt="logo" />
                    <button onClick={alterarTema} className={ehTemaEscuro? 
                    'modo-escuro' : 'modo-claro'}>
                            <img className="botao" src={ehTemaEscuro ? 'imagens/sun.png' : 'imagens/moon.png'} alt="icone" />
                            {ehTemaEscuro ? `Light` : `Dark`}
                    </button>
                </div>
            </header>

            <section className="box-img"></section>

            <section className="texto">
                <div>
                    <h1> BEM-VINDO A BARBEARIA</h1>
                    <p className="texto-bold">
                        Nossa barbearia sempre oferece profissionais de qualidade e
                        estamos prontos para lidar com suas maiores expectativas.
                    </p>
                    <p className="texto-dois">
                        Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos
                        uma equipe premiada que demonstrou o talento de mestres barbeiros
                        em vários concursos de estilo. Deixe nosso barbeiro ser seu
                        estilista pessoal e você nunca ficará desapontado.
                    </p>
                    <p> S. kelly</p>
                </div>
            </section>

        </div>
    )
}
