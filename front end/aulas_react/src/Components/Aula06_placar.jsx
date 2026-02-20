import { estilos } from "../style/estilos";
import { useState } from "react";

function Aula06_placar() {
    const [placar, setPlacar] = useState(0);
    const [placar2, setPlacar2] = useState(0);
    if (placar < 0) {
        setPlacar(0);
    }
    if (placar2 < 0) {
        setPlacar2(0);
    }
    const [Basquete, setBasquete] = useState(0);
    const [Basquete2, setBasquete2] = useState(0);
    if (Basquete < 0) {
        setBasquete(0);
    }
    if (Basquete2 < 0) {
        setBasquete2(0);
    }
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [login, setLogin] = useState('');


    return (
        <div style={estilos.placar}>
            <h2>Placar Eletrônico</h2>
            <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h1>{placar}</h1>
                    <h3>Casa</h3>
                    <button onClick={() => setPlacar(placar + 1)}>mais um ponto</button>
                    <button onClick={() => setPlacar(placar - 1)}>menos um ponto</button>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h1>{placar2}</h1>
                    <h3>Fora</h3>
                    <button onClick={() => setPlacar2(placar2 + 1)}>mais um ponto</button>
                    <button onClick={() => setPlacar2(placar2 - 1)}>menos um ponto</button>
                </div>
            </div>
            <button onClick={() => { setPlacar(0); setPlacar2(0); }}>Resetar</button>


            <hr />
            <hr />


            <h1 style={{ textAlign: 'center', marginTop:'50px' }}>Placar de Basquete</h1>
            <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%', marginTop:'50px' }}>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h2 >Casa</h2>
                    <h1>{Basquete}</h1>
                    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                        <button onClick={() => setBasquete(Basquete + 1)}>1 ponto</button>
                        <button onClick={() => setBasquete(Basquete + 2)}>2 pontos</button>
                        <button onClick={() => setBasquete(Basquete + 3)}>3 pontos</button>
                    </div>
                    <button onClick={() => setBasquete(Basquete - 1)}>menos um ponto</button>
                    <button onClick={() => { setBasquete(0); }}>Resetar</button>
                </div>
                <h1>X</h1>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h2>Fora</h2>
                    <h1>{Basquete2}</h1>
                    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                        <button onClick={() => setBasquete2(Basquete2 + 1)}>1 ponto</button>
                        <button onClick={() => setBasquete2(Basquete2 + 2)}>2 pontos</button>
                        <button onClick={() => setBasquete2(Basquete2 + 3)}>3 pontos</button>
                    </div>
                    <button onClick={() => setBasquete2(Basquete2 - 1)}>menos um ponto</button>
                    <button onClick={() => {setBasquete2(0)}}>Resetar</button>
                </div>
            </div>



        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop:'50px'}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj1bUXhN6K3fcuvvInB84kgSJ7cJAcaDbIWQ&s" alt=""
             width={200} />
            <br />
            <input type="email" placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="text"  placeholder="Digite sua senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
            <button onClick={() => { if (email == 'senai@senai.br' && senha == '123'){
                setLogin('Login bem-sucedido✅');
            }
             else { alert('Email ou senha incorretos!'); } }}>Entrar</button>

            <p>{login}</p>

        </div>

        </div>
    );
}

export default Aula06_placar


