import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";
import I_DeleteUserDialog from "../Interface/DeleteUserDialogInterface";
import deleteUser from "../Functions/DeleteUser";

function DeleteUserDialog(props: I_DeleteUserDialog) {

    return (
        <Dialog
            style={{ 
                textAlign: 'center',
            }}
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            PaperProps={{
                sx: {
                    backgroundColor: '#3e4c5b',
                    border: '2px solid #000',
                }
            }}
        >
            <DialogContent
                style={{
                    color: '#C6D8D3',
                }}
            >
                <h2>Are you sure you want to delete this user?</h2>
                <p>This action is irreversible.</p>
            </DialogContent>
            <DialogActions style={{ justifyContent: 'center', alignItems: 'center', margin: '2% 5%'}}>
                <Button
                    variant="contained"
                    color="primary"
                    style={{
                        width: '100%',
                        height: '100%',
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        borderRadius: '0.5rem',
                        textTransform: 'none'
                    }}
                    onClick={props.handleClose}
                >
                    Cancel
                </Button>
                <Button
                    variant="outlined"
                    color="secondary"
                    style={{
                        width: '100%',
                        height: '100%',
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        borderRadius: '0.5rem',
                        textTransform: 'none',
                    }}
                    onClick={() => {
                        deleteUser();
                        props.handleClose();
                    }}
                >
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default DeleteUserDialog;