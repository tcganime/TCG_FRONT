import { useEffect, useState } from 'react'
import './AdminUser.css'
import SearchUser from './Interface/SearchUser'
import SearchBar from '../../../Components/SearchBar/SearchBar'
import UserCard from './Component/UserCard'
function AdminUser() {

    const [searchUsers, setSearchUsers] = useState<SearchUser[]>([])

    const [search, setSearch] = useState<string>('')

    function handleSearch(event: any) {
        setSearch(event.target.value)
    }

    useEffect(() => {
        document.title = "TCG Anime - Admin Users"
    }, [])

    useEffect(() => {
        fetch('http://localhost:8000/user', {
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
                            setSearchUsers(data)
                        })
                }
            })
    }, [])

    return (
        <div className="admin__user">
            <div className="admin__user__header">
                <h1> Users </h1>
            </div>
            <div className="admin__user__upper__body">
                <h2> This page allows you to manage the users of the website. </h2>
                <h2> Here you can see all the users, their informations and promote them to admin. </h2>
            </div>
            <div className="admin__user__search">
                <SearchBar
                    search={search}
                    handleSearch={handleSearch}
                    label="Search a user"
                />
            </div>
            <div className="admin__user__body">
                {
                    searchUsers.filter((searchUser) => {
                        if (search === '') {
                            return searchUser
                        } else if (searchUser.username.toLowerCase().includes(search.toLowerCase())) {
                            return searchUser
                        }
                    }).map((searchUser) => {
                        return (
                            <div className="admin__user__card">
                                <UserCard
                                    id={searchUser.id}
                                    username={searchUser.username}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AdminUser