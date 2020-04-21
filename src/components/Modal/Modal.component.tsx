import React from 'react';
import { Modal as TransitionModal} from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import { useStyles } from './modal.styles';

type Props = {
    header: string,
    children: React.ReactNode,
    footer: React.ReactNode
}

const Modal = (props: Props) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
        <button type="button" onClick={handleOpen}>
            {props.header}
        </button>
        <TransitionModal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            }}
        >
            <Fade in={open}>
                <>
                    <div className={classes.paper}>
                        {props.children}
                    </div>
                    <div className={classes.paper}>
                        {props.footer}
                    </div>
                </>
            </Fade>
        </TransitionModal>
        </div>
    );
}

export default Modal;