import React from 'react'
import './TabelaProdutos.css'

import produtos from '../../data/produtos'

const TabelaProdutos = () => {

    const products = produtos.map((item, index) => {
        return (
            <tr key={index} className={index % 2 == 0 ? 'par' : ''}>
                <td>{item.id}) {item.name}</td>
                <td className='priceTd'>R$ {item.price.toFixed(2).replace('.', ',')}</td>
            </tr>
        )
    })

    return (
        <table>
            <thead>
                <tr>
                    <th>Produto</th>
                    <th>Preço</th>
                </tr>
            </thead>
            <tbody>
                {products}
            </tbody>
        </table>
    )
}

export default TabelaProdutos