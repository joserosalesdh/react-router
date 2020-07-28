import React, {Component} from 'react'

class Prueba extends Component {
    handleClick = () => {
        const {history} = this.props
        history.push('/invoices')
    
    }
    render () { 
        return(
            <div onClick={this.handleClick}>
                Este es el componente Prueba    
            </div>
        )
    }
}
export default Prueba