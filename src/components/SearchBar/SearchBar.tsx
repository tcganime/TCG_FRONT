import { TextField, InputAdornment } from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function SearchBar(props: {
    search: string,
    handleSearch: any,
    label: string,
}) {
    return (
        <TextField id="search-bar"
            style={{ 
                width: '100%',
                backgroundColor: '#3E4C5B',
            }}
            label={props.label}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="start" style={{ color: '#B68F40'}}>
                        <SearchOutlinedIcon />
                    </InputAdornment>
                ),
            }}
            variant="filled"
            sx={{
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                borderRadius: '10px',
                input: {
                    color: '#C6D8D3',
                    opacity: 0.8,
                    fontSize: '2em',
                    margin: 'auto 1em',
                    "&::placeholder": {
                        opacity: 1,
                        fontSize: '3em',
                    },
                },
                label: {
                    color: '#B68F40',
                    fontSize: '1.5rem',
                    margin: 'auto 1em'
                },
            }}
            value={props.search}
            onChange={props.handleSearch}
        />
    )
}

export default SearchBar