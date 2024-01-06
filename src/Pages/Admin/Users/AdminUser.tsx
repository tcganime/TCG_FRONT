import { useEffect } from 'react'
import './AdminUser.css'

function AdminUser() {
    
        useEffect(() => {
            document.title = "TCG Anime - Admin Users"
        }, [])
    
        return (
            <div className="admin__user">
                <div className="admin__user__header">
                    <h1> Users </h1>
                </div>
                <div className="admin__user__body">
                    <h2> This page allows you to manage the users of the website. </h2>
                    <h2> Here you can see all the users, their informations and promote them to admin. </h2>
                </div>
            </div>
        )
}

export default AdminUser