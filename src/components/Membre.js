import React, {Fragment} from 'react';


const Membre = ({ nom, age, children }) => {
    return (
        <Fragment>
            <h2 style={{ 
                backgroundColor: age > 50 ? 'purple' : 'red', 
                color: 'white'
                }}>
                    {nom.toUpperCase()} : {age}
                </h2>
            {children ? <p>{children}</p> : <Fragment />}
        </Fragment>
    )
}

export default Membre;