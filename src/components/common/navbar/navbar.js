import React, { useState, useEffect } from 'react'; import { useDispatch, useSelector } from 'react-redux';
import { setAuthenticationStatus } from '../../../utils/redux/actions/authenticateActions';
import fetchUserDetails from '../../../utils/redux/actions/userDetailsActions';
import { AppBar, Toolbar, Badge, Typography, Menu, List, IconButton, Avatar, ListItem, ListItemText, Collapse, Box } from '@material-ui/core';
import { StyledBadge } from './styling/styles';
import { MailRounded, Notifications, ExitToApp, Settings, AccountCircle, EqualizerTwoTone, ExpandLess, ExpandMore, More } from '@material-ui/icons';
import styles from './styling/styles';

const Navbar = () => {

    //TODO: Bug w/ material-ui where menu does not close b/c anchorE1 is not being set to null on close, workaround in comments below
    const [anchorEl, setAnchorEl] = useState(null);
    const [isStatusMenuOpen, setStatusMenu] = useState(false);
    const userDetails = useSelector(state => state.user.details);
    const dispatch = useDispatch();

    const handleProfileMenuOpen = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleProfileMenuClose = event => {
        switch (event.currentTarget.id) {
            case "Status-menu-item":
                setStatusMenu(!isStatusMenuOpen);
                return;
            case "Profile-menu-item":
                break;
            case "Settings-menu-item":
                break;
            case "Logout-menu-item":
                dispatch(setAuthenticationStatus());
                break;
            default:
        }

        setTimeout(setAnchorEl, 300); //Temp workaround for material-ui bug
    };

    const handleStatusMenuOpen = (event) => {
        switch (event.currentTarget.id) {
            case "Online-menu-item":
                setStatusAs("Online");
                break;
            case "Busy-menu-item":
                setStatusAs("Busy");
                break;
            case "Away-menu-item":
                setStatusAs("Away");
                break;
            default:
        }

        setStatusMenu(false);
        setTimeout(setAnchorEl, 300); //Temp workaround for material-ui bug
    };

    const setStatusAs = status => {
        const currentStatus = document.getElementById("profile-badge").childNodes[1];
        const statuses = {"Online": "#44b700", "Busy": "red", "Away": "yellow"}
        currentStatus.style.color = statuses[status];
        currentStatus.style.backgroundColor = statuses[status];
    };

    const statusMenu = (
        <Collapse in={isStatusMenuOpen}>
            <List>
                {
                    (_ => {
                        const statuses = ["Online-menu-item", "Busy-menu-item", "Away-menu-item"];
                        return statuses.map((status, index) => (
                            <ListItem button key={index}>
                                <ListItemText id={status} style={styles.statusMenuListItem} onClick={handleStatusMenuOpen} key={index}>{status.split("-")[0]}</ListItemText>
                            </ListItem>
                        ));
                    })()
                }
            </List>
        </Collapse>
    );

    const profileMenu = (
        <Menu anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleProfileMenuClose}
              keepMounted
              getContentAnchorEl={null}
              anchorOrigin={{vertical: "bottom", horizontal: "center"}}
              transformOrigin={{vertical: "top", horizontal: "center"}}>
                  <ListItem button id="Status-menu-item" onClick={handleProfileMenuClose}>
                      <div style={styles.profileIconContainer}><EqualizerTwoTone/></div>
                      <ListItemText style={styles.profileListItemText}>Status</ListItemText>
                      {isStatusMenuOpen? <ExpandMore/> : <ExpandLess/>}
                  </ListItem>
                  {statusMenu}
                  {
                      (_ => {
                          const menuItems = [
                                             {id: "Profile-menu-item", icon: (<AccountCircle/>)}, 
                                             {id: "Settings-menu-item", icon: (<Settings/>)}, 
                                             {id: "Logout-menu-item", icon: (<ExitToApp/>)}];
                          return menuItems.map((menuItem, index) => (
                              <ListItem button id={menuItem.id} onClick={handleProfileMenuClose} key={index}>
                                  <div style={styles.profileIconContainer}>{menuItem.icon}</div>
                                  <ListItemText styles={styles.profileListItemText}>{menuItem.id.split("-")[0]}</ListItemText>
                              </ListItem>
                          ));
                      })()
                  }
        </Menu>
    );

    const badges = () => (
        <div style={styles.badgeContainer}>
            <IconButton>
                <Badge>
                    <MailRounded style={styles.icon}/>
                </Badge>
            </IconButton>
            <IconButton>
                <Badge>
                    <Notifications style={styles.icon}/>
                </Badge> </IconButton>
            <IconButton onClick={handleProfileMenuOpen}>
                <StyledBadge id="profile-badge" anchorOrigin={{vertical: "bottom", horizontal: "right"}} overlap="circle" variant="dot">
                    <Avatar src={userDetails.picture? userDetails.picture : null} style={styles.picture}>
                        {(_ => `${userDetails.firstname.charAt(0)}`)()}
                    </Avatar>
                    {profileMenu}
                </StyledBadge>
            </IconButton>
        </div>
    );

    //TODO: Might want to fetchUserDetails incase user directly change route b/c only the homepage makes the call

    return (
        !userDetails? null :
        <AppBar style={styles.container}
                color="inherit">
            <Toolbar>
                <Box display={{xs: "none", md: "block"}} style={styles.title}>
                    <Typography variant="h5" >FLIGHT DECK</Typography>
                </Box>
                {badges()}
            </Toolbar>
        </AppBar>
    )
};

export default Navbar;