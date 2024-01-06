import { Button, Card, CardActions, CardContent, Typography } from "@mui/material"

function UserCard(
    props: {
        id: number,
        username: string
    }
) {
    return (
        <Card style={{
            width: '100%',
            borderRadius: '10px',
            backgroundColor: '#3E4C5B',
        }}>
            <CardContent
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#B68F40',
                }}
            >
                <h1> {props.username} </h1>
            </CardContent>
            <CardActions
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                }}
            >
                <Button size="small"> More Details </Button>
            </CardActions>
        </Card>
    )
}

export default UserCard