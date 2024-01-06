import { useEffect, useState } from 'react'
import './Home.css'
import { Button } from '@mui/material'
import NavigationButton from '../../../Components/Connection/NavigationButton';

function Home() {

    const [username, setUsername] = useState<string>("")

    useEffect(() => {
        fetch("http://localhost:8000/user/profile", {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token"),
                "Content-Type": "application/json"
            }
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
                }

                if (res.status !== 200) {
                    throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
                }

                return res.json();
            })
            .then(res => {
                setUsername(res.username);
            })
            .catch(err => {
                console.error("Error fetching user profile:", err);
            });
    }, []);

    useEffect(() => {
        document.title = "TCG Anime - Admin"
    }, [])

    function Logout() {

        localStorage.clear()

        window.location.href = "/"
    }

    return (
        <div className="admin__home">
            <div className="admin__home__header">
                <h1> Welcome {username} ! </h1>
            </div>
            <div className="admin__home__body">
                <h2> Here are the different sections of the admin panel: </h2>

                <div className="admin__home__body__section">
                    <NavigationButton
                        text="Users"
                        href="/users"
                        button_style='contained'
                    />
                </div>
                <div className="admin__home__body__section">
                    <NavigationButton
                        text="Cards"
                        href="/cards"
                        button_style='contained'
                    />
                </div>
                <div className="admin__home__body__section">
                    <NavigationButton
                        text="Archetypes"
                        href="/archetypes"
                        button_style='contained'
                    />
                </div>
                <div className="admin__home__body__section">
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => Logout()}
                        style={{ 
                            textTransform: 'none',
                            fontSize: '1.5em',
                            fontWeight: 'bold',
                            boxShadow: '0px 5px 5px -5px #2d2a32',
                            borderRadius: '10px',
                            width: '100%'
                        }}
                    >
                        Logout
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Home