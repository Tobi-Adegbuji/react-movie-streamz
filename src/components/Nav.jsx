import React, {useEffect, useState} from 'react'
import './Nav.css'


function Nav() {


    const [show, handleShow] = useState(false); 

    useEffect(() => {
        window.addEventListener("scroll", () =>{
            if(window.scrollY > 200)
                handleShow(true);
            else
                handleShow(false); 
        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, [])


    return (

        <div className={`nav ${show && "nav_black"}`}>
            <img 
                className="nav_logo"
                src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                alt="profile_image"
            />
            {/* <img 
                className="nav_avatar"
                src="https://ddo0fzhfvians.cloudfront.net/uploads/icons/png/5830939211582692246-512.png"
                alt="profile_image"
            /> */}
        </div>
    )
}

export default Nav
