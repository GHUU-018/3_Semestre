const estilos = {
    cardProduto: {
        border: "1px solid #ccc",
        padding: 10,
        width: 250
    },


    produtoImagem: {
        height: 150,
        width: "100%",
        objectFit: "contain"
    },


    nomeProduto: {
        fontSize: 14,
        color: "#333",
        textAlign: "center"
    },


    preco: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#e30613"
    },


    botao: {
        display: "inline-block",
        background: "#e30613",
        color: "white",
        textDecoration: "none",
        padding: "8px 12px",
        borderRadius: 5,
        marginTop: 10,
        fontWeight: "bold"
    },


    freteGratis: {
        fontWeight: "bold"
    }
};

const Aula11_produto = ({}) => {
    return (

        <div style={estilos.cardProduto}>
            <img src={produto.linkImagem} alt="" style={estilos.imagem}/>
            <h2 style={estilos.titulos}>{Aula11_CadastroProdutos.nome}</h2>
            <p style={estilos.preco}>R$ {Number(produto.preco).toFixed(2)}</p>
            <p>{produto.categoria}</p>
            <a href={produto.linkProduto} style={estilos.botao}>ver produto</a>
        </div>
    )

    const estilos = {

    }
    
}

export default Aula11_produto