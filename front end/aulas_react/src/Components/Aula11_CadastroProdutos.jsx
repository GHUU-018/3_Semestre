import { useState } from "react";
import {estilos} from '../style/estilos'

const Aula11_CadastroProdutos = () => {

    const [ListaProduto, setListaProduto] = useState('');
    const [NomeProduto, setNomeProduto] = useState('');
    const [PrecoProduto, setPrecoProduto] = useState('');
    const [LinkImagemProduto, setLinkImagemProduto] = useState('');
    const [LinkProduto, setLinkProduto] = useState('');
    const [CategoriaProduto, setCategoriaProduto] = useState('');
    const [FreteProduto, setFreteProduto] = useState(false);

    function botaoAdicionar() {
        const novoProduto = {
            nome: "hotwells",
            preco: "20",
            linkImagem: "https://images.tcdn.com.br/img/img_prod/460977/carrinho_miniatura_tesla_roadster_then_and_now_249_hot_weels_escala_1_64_mega_saldao_2024_mkp_128211_1_81b752c86d71af696836c7214e31dcbc.jpeg",
            linkProduto: "https://www.toyshow.com.br/outlet-2024/carrinho-miniatura-tesla-roadster-then-and-now-249-hot-weels-escala-164-mega-saldao-2024-mkp?srsltid=AfmBOoqGHiS7K3aqSiopFydEnDbkyqo-f3wQ3AhETqo_X5kD6qizvp-U",
            categoria: "brinquedos",
            freteGratis: true
        };
        setListaProduto([...ListaProduto, novoProduto]);
    }

    return (
        <div style={estilos.cardAula}>
            <h1>Cadastro de Produtos</h1>
            <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', gap: '10px', width: '300px'}}>
                <input type="text" placeholder="Nome" value={NomeProduto} onChange={(event) => setNomeProduto(event.target.value)}/>
                <input type="number" placeholder="Preço" value={PrecoProduto} onChange={(event) => setPrecoProduto(event.target.value)}/>
                <input type="text" placeholder="Link de imagem" value={LinkImagemProduto} onChange={(event) => setLinkImagemProduto(event.target.value)}/>
                <input type="text" placeholder="Link do produto" value={LinkProduto} onChange={(event) => setLinkProduto(event.target.value)}/>
                <select name="" id="" placeholder="" value={CategoriaProduto} onChange={(event) => setCategoriaProduto(event.target.value)}>
                    <option value="">Selecione a categoria</option>
                    <option value="eletronico">Eletrônico</option>
                    <option value="roupa">Roupa</option>
                    <option value="alimento">Alimento</option>
                </select>
                <label>
                    <input type="checkbox" name="Frete Gratis" id="" checked={FreteProduto} onChange={(event) => setFreteProduto(event.target.checked)}/>
                    Frete Gratis
                </label>
                <button onClick={() => botaoAdicionar()}  style={estilos.cardBotao}>Adicionar Produto</button>
                <hr />
                <div>
                    {/* {
                        ListaProduto.map((produto,pos) => (
                            <p key={pos}> {produto.nome} - R${produto.preco}</p>
                        ))
                    } */}
                </div>
            </div>
        </div>
    )
}

export default Aula11_CadastroProdutos