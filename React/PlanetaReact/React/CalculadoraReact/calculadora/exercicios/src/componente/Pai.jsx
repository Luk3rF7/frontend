import React from 'react'
import { childrenwithProps } from '../utlils/children'


export default props =>
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            {childrenwithProps(props)}
        </ul>
    </div>
