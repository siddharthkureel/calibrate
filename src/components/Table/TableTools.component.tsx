import React from 'react';
import clsx from 'clsx';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import TextField from '@material-ui/core/TextField';

import { useToolbarStyles } from './table.style';

interface EnhancedTableToolbarProps {
    numSelected: number;
    heading: string;
    onSearchChange:(e: React.ChangeEvent<HTMLInputElement>)=>void
}

const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
    const classes = useToolbarStyles();
    const { numSelected, heading } = props;
    return (
        <Toolbar
        className={clsx(classes.root, {
            [classes.highlight]: numSelected > 0,
        })}
        >
        {numSelected > 0 ? (
            <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
            {numSelected} selected
            </Typography>
        ) : (
            <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
            {heading}
            </Typography>
        )}        
        <TextField onChange={props.onSearchChange} id="outlined-basic" label="search" variant="outlined" size="small"/>
        {numSelected > 0 ? (
            <Tooltip title="Delete">
            <IconButton aria-label="delete">
                <DeleteIcon />
            </IconButton>
            </Tooltip>
        ) : (
            <Tooltip title="Filter list">
            <IconButton aria-label="filter list">
                <FilterListIcon />
            </IconButton>
            </Tooltip>
        )}
        </Toolbar>
    );
};

export default EnhancedTableToolbar;