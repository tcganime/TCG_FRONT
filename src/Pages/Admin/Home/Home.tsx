import { useEffect } from 'react'


function Home() {
    useEffect(() => {
        document.title = "TCG Anime - Admin"
    }, [])

    return (
        <div className="admin__home">
            <h1>Admin Home</h1>
        </div>
    )
}

export default Home