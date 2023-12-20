import React from 'react'
import WelcomeHeader from "../welcome-header";
const WelcomePage = (props) => {
    return(
        <div className={"container"}>
            <WelcomeHeader {...props}/>
        </div>
    )
}

export default WelcomePage;