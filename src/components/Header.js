import React from 'react'

const Header = () => {
    const header = {
        fontSize: '20px',
        fontWeight: 'bold',
        boxShadow : 'inset 0 0 40px rgba(0,0,255,0.9)',
        padding: '5px',
        textTransform: 'uppercase',
        margin : '5px',
        color: '#fff',
        cursor: 'pointer',
    }
    return (
        <div style = {header}>
            Contact App
        </div>
    )
}

export default Header
