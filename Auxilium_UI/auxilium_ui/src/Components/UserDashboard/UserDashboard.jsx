import { Container } from '@material-ui/core'
import React, {useEffect} from 'react'
import './UserDashboard.css'
import UserCard from '../UserCard/UserCard'

const UserDashboard = () => {
    useEffect(() => {
        document.body.style.backgroundColor = '#404040'
    });
    const items = [
        {
            Title: "asd",
            Desc: "kughzzzzzzzzzzj",
            Contact: "abc"
        },
        {
            Title: "khg",
            Desc: "khjjkn",
            Contact: "abc"
        },
    ]
    return (

        <Container>
            <div className="heading">
                <h1 style={{ color: 'white' }}>qwerty</h1>
            </div>
            <div className="cardContainer">
                {/*<UserCard Title="Watermelon" Desc="<3" />*/}
                {

                    items.map((item) =>
                        <div>
                            <UserCard Title={item.Title} Desc={item.Desc} Contact={item.Contact}/>
                            <br />
                        </div>
                    )
                }
            </div>
        </Container>
    )
}

export default UserDashboard
