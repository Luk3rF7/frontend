// import React from 'react'

// // eslint-disable-next-line import/no-anonymous-default-export
// export default props => [
//     <h1 key='h1'>Bom Dia {props.nome}!</h1>,
//     <h2 key='h2'> Até Breve {props.nome}!</h2>
// ]

// pode usar  <React.fragment> ou <Fragment> e pode colocar dentro de uma arrays separado por ','
// export default props  =>
// <div> 
//  <h1>Bom dia {props.nome} </h1>
//  <h2> Até Breve!</h2>
//  </div>

/*  usando Fragment
import React,{ Fragment } from 'react

export default props =>
<Fragment>
 <h1>Bom dia {props.nome} </h1>
 <h2> Até Breve!</h2>
 <Fragment />

 Usando Arrays

 import React from 'react'

 export default props => [
     <h1> key='h1'Bom dia {props.nome} </h1>,
     <h2> key='h2' Até Breve!</h2>
 ]
*/

