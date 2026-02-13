const Aula04_IMC = ({nome, altura, peso, cor}) => {

    // let nome = "fulano";
    // let altura = 1.00;
    // let peso = 100;
    let imc = peso / (altura * altura);

    return (
        <div>
            <h3>Calculadora de IMC</h3>
            <p style={{color: cor}}>olá {nome}</p>
            <p>altura: {altura} cm</p>
            <p>peso: {peso} kg</p>
            <p>imc: {imc.toFixed(1)} kg/m²</p>
        </div>
    )
}

export default Aula04_IMC