import React, { Component } from 'react'
import './Conversor.css'
export default class Conversor extends Component {

    constructor(props) {
        super(props);

         this.state = {
            moedaA_valor: "",
            moedaB_valor: 0,
        }

        this.converter = this.converter.bind(this)
    }

    converter() {
        let de_para = `${this.props.moedaA}_${this.props.moedaB}`
        let url = `https://free.curreconv.com/api/v1/convert?q=${de_para}&compact=ultra&apiKey}`
        fetch(url)
        .then(res=>{
            return res.json()
        })
        .then(json=>{
            let cotacao = json[de_para].val;
            let moedaB_valor = this.state.moedaA_valor * cotacao;
            this.setState({moedaB_valor})
        })
    }

  render() {
    return (
        <div className = "conversor">
        <h2>{this.props.moedaA} para {this.props.moedaB}</h2>
        <input type="text" className='campo' placeholder='Digite o valor' onChange={(event)=>{this.state({moedaA_valor:event.target.value})}}/>
        <input type="button" className='btn' onClick={this.converter} value="Converter" />
        <h2>{this.state.moedaB_valor}</h2>
    </div>
    )
  }
}