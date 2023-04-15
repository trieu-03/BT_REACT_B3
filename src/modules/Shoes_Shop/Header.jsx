import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                <div className='navbar navbar-expand-lg bg-success justify-content-center' style={{ opacity: 0.6 }}>
                    <h1 className='navbar-brand' style = {{
                        fontSize:35,
                        color:'#EEEEEE'
                    
                    }} >Shoes Shop</h1>
                </div> 
            </div>
        )
    }
}
