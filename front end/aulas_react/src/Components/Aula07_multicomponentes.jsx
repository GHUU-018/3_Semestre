const Aula07_multicomponentes = () => {

    return (
        <div>
            <p>
                meu componente padrão
            </p>
            <MeuComponenteNomeado />

        </div>
    )
}



export const MeuComponenteNomeado = () => {
    return (

        <p>meu componente nomeado 1 ******</p>
    )
}

export const MeuComponenteNomeado2 = () => {
    return (
        <p>meu componente nomeado 2</p>
    )
}

export const EnderecoServidor = "Localhost"

export default Aula07_multicomponentes