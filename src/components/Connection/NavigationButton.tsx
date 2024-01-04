import { Button } from '@mui/material'

function NavigationButton(props: { text: string, href: string, button_style: "contained" | "outlined"}) {
    return (
        <Button variant={props.button_style} href={props.href} color='primary'
        style={{
            textTransform: 'none',
            fontSize: '1.5em',
            fontWeight: 'bold',
            boxShadow: '0px 5px 5px -5px #2d2a32',
            borderRadius: '10px',
            width: '100%'
        }}>
            {props.text}
        </Button>
    )
}

export default NavigationButton