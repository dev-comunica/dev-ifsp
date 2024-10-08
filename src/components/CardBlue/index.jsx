import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const CardBlue = ({ icon, title, description }) => {
    return (
        <div className='card-blue-container'>
            <div className='card-content'>
                <div className='icon-container'>{icon}</div>
                <h1 className='function-title'>{title}</h1>
                <p className='function-description'>{description}</p>
            </div>
        </div>
    )
}

CardBlue.PropTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default CardBlue

