import {useEffect} from 'react'
import './Home.css'
import NavigationButton from '../../../Components/Connection/NavigationButton'

function AdminUnconnectedHome() {
    useEffect(() => {
        document.title = "TCG Anime - Admin"
    }, [])

    return (
        <div className="home">
            <div className="home__header">
                <h1> TCG Anime - Admin </h1>
            </div>
            <div className="home__body">
                <p className="home__body__text">
                    This is the admin page of TCG Anime. Here, you will be able to manage the website.
                    You will be able to add cards, modify them, delete them, etc...
                </p>
            </div>
            <div className="home__footer">
                <div className="home__footer__button">
                    <NavigationButton text="Login" href="/admin/login" button_style="contained" />
                </div>
            </div>
        </div>
    )
}

export default AdminUnconnectedHome