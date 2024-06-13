import React from "react";
import "../styles/Profile.scss"

const Profile = () => {

    return (
        <>
            <div className="profile" id="profile">
                <div className="profile__inner">
                    <div className="profile__picArea">
                        <div><img src="./assets/images/profile.jpg" alt="" /></div>
                    </div>
                    <div className="profile__textArea">
                        <h2 className="name">RYUICHIRO OKIE</h2>
                        <p className="role">Web designer / Coder</p>
                        <p className="expla">テキストが入りますテキストhがはいりますテキストが入りますテキストhがはいりますテキストが入りますテキストhがはいりますテキストが入りますテキストhがはいりますテキストが入りますテキストhがはいります</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile