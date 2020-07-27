import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Invoices extends Component {
    render () { 
        return(
            <div>
                Este es el componente de Invoices
                <Link to="/">Volvera la raiz</Link>
            </div>
        )
    }
}
export default Invoices