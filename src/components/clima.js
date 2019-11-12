import React from 'react'
import '../style/clima.css'

const Clima = (props) => {

    return(
        <div className="clima-app animated fadeInDown">
            <div className="clima-block">
                <h1>{props.citytop}</h1>
                <h1 className="temptop">{props.temptop}º</h1>
                <p className="tempmantop">{props.tempmantop}º max</p>
                <p className="tempmintop">{props.tempmintop}º min</p>
            </div>
        </div>
    )
}

export default Clima;