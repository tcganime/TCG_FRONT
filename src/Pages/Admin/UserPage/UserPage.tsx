import { useState, useEffect } from 'react';
import User from './Interface/UserInterface';

import UserDefaultPicture from '../../../assets/image/default_picture.png';
import './UserPage.css';
import { Button } from '@mui/material';
import DeleteUserDialog from './Dialogs/DeleteUserDialog';

function UserPage() {

    const [user, setUser] = useState<User>({
        id: 0,
        username: '',
        email: '',
        victories: 0,
        defeats: 0,
        admin: false,
        profile_picture: null,
    })

    // Delete User Dialog
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const handleDeleteClose = () => setOpenDeleteDialog(!openDeleteDialog);

    useEffect(() => {
        document.title = "TCG Anime - User Page"
    })

    useEffect(() => {
        fetch('http://localhost:8000/admin/user/' + window.location.pathname.split('/')[2], {
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
        <div className="user__page">
            <div className="user__page__inside">
                <div className="user__page__header">
                    <div className="user__page__header__left">
                        <img
                            className="user__page__header__left__image"
                            src={user.profile_picture ? user.profile_picture : UserDefaultPicture}
                            alt="User Profile"
                        />
                    </div>
                    <div className="user__page__header__right">
                        <h1> {user.username} </h1>
                    </div>
                </div>
                <div className="user__page__body">
                    <div className="user__page__body__upper">
                        <div className="user__page__information">
                            <p className='user__information__p'> <b className='user__information__b'> Username: </b> {user.username} </p>
                            <p className='user__information__p'> <b className='user__information__b'> Email: </b> {user.email} </p>
                        </div>
                        <div className="user__page__information">
                            <p className='user__information__p'> <b className='user__information__b'> Victories: </b> {user.victories} </p>
                            <p className='user__information__p'> <b className='user__information__b'> Defeats: </b> {user.defeats} </p>
                        </div>
                    </div>
                    <div className="user__page__body__down">
                        <div className="user__page__body__down__button">
                            <Button
                                variant="outlined"
                                color="secondary"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    fontSize: '1.5rem',
                                    fontWeight: 'bold',
                                    borderRadius: '0.5rem',
                                    textTransform: 'none'
                                }}
                                onClick={() => setOpenDeleteDialog(true)}
                            >
                                Delete User
                            </Button>
                            <DeleteUserDialog
                                open={openDeleteDialog}
                                handleClose={handleDeleteClose}
                            />
                        </div>
                        <div className="user__page__body__down__button">
                            {
                                (user.admin) ? (
                                    <Button
                                        variant="outlined"
                                        color="secondary"
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            fontSize: '1.5rem',
                                            fontWeight: 'bold',
                                            borderRadius: '0.5rem',
                                            textTransform: 'none'
                                        }}
                                    >
                                        Remove Admin
                                    </Button>
                                ) : (
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            fontSize: '1.5rem',
                                            fontWeight: 'bold',
                                            borderRadius: '0.5rem',
                                            textTransform: 'none'
                                        }}
                                    >
                                        Make Admin
                                    </Button>
                                )
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default UserPage;