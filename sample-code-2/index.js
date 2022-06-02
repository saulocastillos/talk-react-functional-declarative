/**
 * Componentes de Estilo React com Styled Components
 */

const Container = window.styled.div`
 display: flex;
 width: 200px;
 align-items: center;
 justify-content: center;  
 border: 1px solid red;
`
const H1 = window.styled.h1`
 color: red;
 font-size: 16px;
`

/**
 * Componentes Puros React
 */
const App = () => (
  <Container>
    <H1>Olá, mundo!</H1>
  </Container>
)

/**
 *  Runtime do ReactDOM que converte
 *  nossas declarações de componentes em elementos DOM
 */
ReactDOM.createRoot(document.getElementById("dom-real")).render(<App />)
