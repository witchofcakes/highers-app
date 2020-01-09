import React from 'react';
import Button from '@material-ui/core/Button';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import Menu from '@material-ui/core/Menu';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';

export default function Btn_More() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button className="button-more" aria-controls="edit-delete" aria-haspopup="true" onClick={handleClick}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
            </Button>
            <Paper>
            <Menu
                id="edit-delete"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                className="menu-text-edit-delete-marg"
            >
                <MenuItem className="button-more-menu" onClick={handleClose}>
                    <Typography variant="inherit" noWrap>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="feather-edit-2">
                            <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                        </svg>
                        <p className="menu-text-edit-delete">Показати кандидатів</p>
                    </Typography>
                </MenuItem>
                <MenuItem className="button-more-menu" onClick={handleClose}>
                    <Typography variant="inherit" noWrap>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="feather-edit-2">
                            <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                        </svg>
                        <p className="menu-text-edit-delete">Редагувати вакансію</p>
                    </Typography>
                </MenuItem>
                <MenuItem className="button-more-menu" onClick={handleClose}>
                    <Typography variant="inherit" noWrap>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="feather-edit-2">
                            <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                        </svg>
                        <p className="menu-text-edit-delete">Дезактивувати вакансію</p>
                    </Typography>
                </MenuItem>
                <MenuItem className="button-more-menu" onClick={handleClose}>
                    <Typography variant="inherit" noWrap>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="feather-trash">
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        </svg>
                        <p className="menu-text-edit-delete">Видалити вакансію</p>
                    </Typography>
                </MenuItem>
            </Menu>
            </Paper>
        </div>
    );
}