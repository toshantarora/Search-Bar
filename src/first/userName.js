import React from 'react'

const userName = (props) => {
    const { name } = props;
    return (
        <div>
            <p>{name}</p>
        </div>
    )
}

export default userName;
