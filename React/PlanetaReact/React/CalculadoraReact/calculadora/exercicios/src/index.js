import React from 'react'
import ReactDom from 'react-dom'

import Pai from './componente/Pai'
import Filho from './componente/Filho'

ReactDom.render(
    <div>
   <Pai nome="Marcelo" sobrenome="Nunes">
    <Filho nome="rhavi"/>
    <Filho nome="Mary"/>
   </Pai>
    </div>
, document.getElementById('root'))
