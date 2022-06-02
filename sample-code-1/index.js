/**
 * Componentes React
 */
const App = () => <h1>Olá, mundo!</h1>

/**
 *  Runtime do ReactDOM que converte
 *  nossas declarações de componentes em elementos DOM
 */
ReactDOM.createRoot(document.getElementById("dom-real")).render(<App />)
