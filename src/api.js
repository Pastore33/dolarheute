import axios from "axios";

const api = axios.create({
    baseURL: "https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='05-31-2022'&$top=100&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao"
});

export default api;