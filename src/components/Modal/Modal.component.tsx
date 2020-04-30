import React from 'react';
import { Modal as TransitionModal} from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import { useStyles } from './modal.styles';

type Props = {
    open: boolean,
    children: React.ReactNode
}

const Modal = (props: Props) => {
    const classes = useStyles();
    return (
        <div>
        <TransitionModal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={props.open}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            }}
        >
            <Fade in={props.open}>
                <div className={classes.paper}>
                    {props.children}
                </div>
            </Fade>
        </TransitionModal>
        </div>
    );
}

export default Modal;