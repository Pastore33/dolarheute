import React, { Component, useEffect, useState} from "react";
// import axios from "axios";
import api from "./api";


class App extends Component {

  state= {
    Coin: [],
  }

  async componentDidMount(){
    const response = await api.get(''); 
    // console.log(response.data)

    this.setState({ Coin: [response.data]});
  }

  render(){

    const {Coin} = this.state;

    return(
      <div>
        <h1>Dolar hoje</h1>
        {/* {console.log(Coin[0])} */}

        {Coin.map((coin, index) => (
          // console.log(coin.value[0])

        <ul>
          <li key={index}>
            <h2>
              <strong>Cotação de compra: </strong>
              {coin.value[0].cotacaoCompra}
            </h2>
          </li>
          <li key={index}>
            <h2>
              <strong>Cotação de venda: </strong>
              {coin.value[0].cotacaoVenda}
            </h2>
          </li>
          <li key={index}>
            <h2>
              <strong>Data e hora da cotação: </strong>
              {coin.value[0].dataHoraCotacao}
            </h2>
          </li>
        </ul>
        ))}
      </div>
    )
  }
}
export default App;



// export default function App() {

  // const [coins, setCoins] = useState([])

  // useEffect(() => {

  //   const res = axios.get("https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='05-31-2022'&$top=100&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao")
  //     .then(res => setCoins([res]))
  //     .catch(err=>console.log(err))
  //     .finally(res=>res)
  // }, [])

  // return (
  // <>
  
  //   {coins.map((item) => {
      
  //   <div>
  //     <p> Cotação por data: {item.data.value[0].cotacaoCompra}</p>
  //     <p>Cotação por periodo:</p>
  //   </div>

  //     })}
      
  // </>
  // );
// }