function deleteUser() {
    fetch('http://localhost:8000/admin/user/' + window.location.pathname.split('/')[2], {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    }).then(
        response => {
            switch (response.status) {                 
                case 201:
                    alert('User successfully deleted.')
                    window.location.href = '/users'
                    break;
                case 401:
                    alert('You are not authorized to access this page.')
                    localStorage.clear()
                    window.location.href = '/'
                    break;
                case 403:
                    alert('You are unauthorized to perform this action.')
                    break;
                default:
                    alert('An error has occurred.')
                    break;
        }}
    ).catch(error => {
        alert('An error has occurred.')
        console.log(error)
    })
}

export default deleteUser;