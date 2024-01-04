import { createTheme } from '@mui/material/styles';
import './fonts/_fonts.scss'

const theme = createTheme({
    palette: {
        primary: {
            main: '#B68F40',
        },
        secondary: {
            main: '#EE6055',
        },
    },
    typography: {
        fontFamily: 'MatrixBook, MatrixRegularSmallCaps1, MatrixRegularSmallCaps2'
    }
});

export default theme;