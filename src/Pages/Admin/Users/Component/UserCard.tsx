import { Button, Card, CardActions, CardContent, CardMedia } from "@mui/material"

import UserDefaultPicture from '../../../../assets/image/default_picture.png';
import { useEffect, useState } from "react";
import User from "../../UserPage/Interface/UserInterface";
import './UserCard.css'

function UserCard(
    props: {
        id: number
    }
) {

    const [user, setUser] = useState<User>({
        id: 0,
        username: '',
        email: '',
        victories: 0,
        defeats: 0,
        admin: false,
        profile_picture: null,
    })
    useEffect(() => {
        fetch('http://localhost:8000/admin/user/' + props.id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })
            .then(response => {
                if (response.status === 401) {
                    alert('You are not authorized to access this page.')
                    localStorage.clear()
                    window.location.href = '/'
                } else if (response.status === 200) {
                    response.json()
                        .then(data => {
                            console.log(data)
                            setUser(data)
                        })
                }
            })
    }, [])

    return (
        <Card style={{
            width: '100%',
            height: '200px',
            display: 'flex',
            flexDirection: 'row',
            borderRadius: '10px',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#3E4C5B',
        }}>
            <CardContent
                className='user__card__content'
            >
                <img
                    className="user__card__image"
                    title={user.username}
                    src={user.profile_picture ? user.profile_picture : UserDefaultPicture}
                />
            </CardContent>
            <CardContent
                className='user__card__content'
            >
                <CardContent
                    className='user__card__content'
                >
                    <h1 style={{color: '#B68F40'}}> {user.username} </h1>
                </CardContent>
                <CardActions className="user__card__actions">
                    <Button
                        size="small"
                        onClick={() => {
                            window.location.href = '/users/' + props.id
                        }}
                    >
                        More Details
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}

export default UserCard