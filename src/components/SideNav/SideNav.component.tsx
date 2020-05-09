import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

interface IListItem {
    name: string;
    link: string;
    logo: React.ReactElement
}

interface IProps extends RouteComponentProps<any>, React.Props<any> {
    Data: IListItem[]
}

const SideNav: React.FC<IProps> = (props) =>{
    const { push } = props.history;
    return(
        <List>
        {props.Data.map(item=>(
            <ListItem key={item.name} button onClick={()=>push(item.link)}>
                <ListItemIcon>
                    {item.logo}
                </ListItemIcon>
                <ListItemText primary={item.name} />
            </ListItem>
        ))}
        </List>
    )
}

export default SideNav;