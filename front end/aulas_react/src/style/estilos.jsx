/** @type {{ [key: string]: import('react').CSSProperties }} */

import Filmes from '../Components/Aula04_filmes';

export const estilos = {
    tituloModulo: {
        color: 'blue',
        fontWeight: 'bold'
    },
    descricaoModulo: {
        fontStyle: 'italic'
    },
    fundo: {
        backgroundColor: '#f3f4f6',
        minHeight: '100vh'
    },
    conteudo: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '24px'
    },
    lista_aulas: {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
    },
    cardAula: {
        backgroundColor: '#fff',
        padding: '16px',
        borderRadius: '8px',
        width: '100%',
        boxShadow: '0px 0px 4px 6px rgba(0, 0, 0, 0.1)',
    },

    loginConteudo: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        gap: '5px',

    },
    tituloLogin: {
        color: '#e30613',
        fontWeight: 'bold'
    },
    botaoLogin: {
        backgroundColor: '#e30613',
        color: '#fff',
        border: 'none',
        marginTop: '16px',
        width: '200px',
        padding: '8px 16px',
        borderRadius: '4px',
        cursor: 'pointer'
    },
    botaoAssistir: {
        backgroundColor: '#e30613',
        color: '#fff',
        border: 'none',
        marginTop: '16px',
        width: '200px',
        padding: '8px 16px',
        borderRadius: '4px',
        cursor: 'pointer'
    },
    cardFilme: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: '16px',
        borderRadius: '8px',
        width: '100%',
        boxShadow: '0px 0px 4px 6px rgba(0, 0, 0, 0.1)',
    },
    filmes: {
        display: 'flex',
        gap: '30px',
        justifyContent: 'center'
    },
    filme: {

        borderRadius: '8px',
    },
    img_filme: {
        width: '100%',
        height: '300px',
        objectFit: 'cover',
        borderRadius: '8px',
    },
    placar: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: '16px',
        borderRadius: '8px',
        width: '100%',
    },
perfilIMG: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
},

cardPerfil: {

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: '16px',
    borderShadow: '0px 0px 4px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    width: '100%',

},
cardBotao: {
        backgroundColor: '#e30613',
        color: '#fff',
        border: 'none',
        marginTop: '16px',
        width: '200px',
        padding: '8px 16px',
        borderRadius: '4px',
        cursor: 'pointer'
},
}
