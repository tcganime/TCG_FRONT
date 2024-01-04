import {useEffect} from 'react'
import './Home.css'
import NavigationButton from '../../components/Connection/NavigationButton'

export default function Home () {

    useEffect(() => {
        document.title = "TCG Anime"
    }, [])

    return (
        <div className="home">
            <div className="home__header">
                <h1> TCG Anime </h1>
            </div>
            <div className="home__body">
                <p className="home__body__text">
                    Welcome to TCG Anime, a card game based on the popular anime series, Yu-Gi-Oh!.
                    In this game, you will be able to play against other players using card
                    based on famous licenses such as pop culture <span style={{fontStyle: 'italic', color: '#C6D8D3'}}> (Harry Potter for example) </span> or
                    other anime series  <span style={{fontStyle: 'italic', color: '#C6D8D3'}}> (Bleach for example) </span>.
                    Come and join us in this adventure!
                </p>
            </div>
            <div className="home__footer">
                <div className="home__footer__button">
                    <NavigationButton text="Login" href="/login" button_style="contained" />
                </div>
                <div className="home__footer__button">
                    <NavigationButton text="Sign Up" href="/register" button_style="outlined" />
                </div>
            </div>
        </div>
    )
}