import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

const Footer = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
                <Link to='#'>
                    Your Website
                </Link>{' '}
            {new Date().getFullYear()}
        {'.'}
        </Typography>
    )
}

export default Footer
