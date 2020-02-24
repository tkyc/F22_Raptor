import React, { useState } from 'react'; import { useDispatch, useSelector } from 'react-redux';
import { setAuthenticationStatus } from '../../../utils/redux/actions/authenticateActions';
import { AppBar, Toolbar, Badge, Typography, Menu, MenuItem, IconButton, Avatar, ListItemIcon } from '@material-ui/core';
import { StyledBadge } from './styling/styles';
import { MailRounded, Notifications, ExitToApp, Settings, AccountCircle, EqualizerTwoTone, More } from '@material-ui/icons';
import styles from './styling/styles';

const Navbar = () => {

    //Bug w/ material-ui where menu does not close b/c anchorE1 is not being set to null on close. This is a workaround.
    const [anchorEl, setAnchorEl] = useState(null);
    const [isProfileMenuOpen, setProfileMenu] = useState(false);
    const [anchorE2, setAnchorE2] = useState(null);
    const [isStatusMenuOpen, setStatusMenu] = useState(false);
    const userDetails = useSelector(state => state.user.details);
    const isFetchingUserDetails = useSelector(state => state.user.isFetching);
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const dispatch = useDispatch();

    const handleProfileMenuOpen = event => {
        setAnchorEl(event.currentTarget);
        setProfileMenu(!isProfileMenuOpen);
    };

    const handleProfileMenuClose = event => {
        switch (event.currentTarget.id) {
            case "status-menu-item":
                handleStatusMenuOpen();
                break;
            case "profile-menu-item":
                break;
            case "settings-menu-item":
                break;
            case "logout-menu-item":
                dispatch(setAuthenticationStatus());
                break;
            default:
        }

        setAnchorEl(null); //Bug: not being set to null
        setProfileMenu(!isProfileMenuOpen);
    };

    const handleStatusMenuOpen = event => {
        setAnchorE2(event.currentTarget);
        setStatusMenu(!isStatusMenuOpen);
    };

    const handleStatusMenuClose = event => {
        switch (event.currentTarget.id) {
            case "online-menu-item":
                setStatusAs("online");
                break;
            case "busy-menu-item":
                setStatusAs("busy");
                break;
            case "away-menu-item":
                setStatusAs("away");
                break;
            default:
        }

        setAnchorE2(null); //Bug: not being set to null
        setStatusMenu(!isStatusMenuOpen);
    };

    const setStatusAs = status => {
        const currentStatus = document.getElementById("profile-badge").childNodes[1];
        const statuses = {"online": "#44b700", "busy": "red", "away": "yellow"}
        currentStatus.style.color = statuses[status];
        currentStatus.style.backgroundColor = statuses[status];
    };

    const statusMenu = (
        <Menu anchorEl={anchorE2}
              open={isStatusMenuOpen}
              onClose={handleStatusMenuClose}
              anchorOrigin={{vertical: "bottom", horizontal: "left"}}
              transformOrigin={{vertical: "top", horizontal: "center"}}>
                  {
                      (_ => {
                          const statuses = ["online-menu-item", "busy-menu-item", "away-menu-item"];
                          return statuses.map((status, index) => (
                              <MenuItem id={status} onClick={handleStatusMenuClose} key={index}>{status.split("-")[0]}</MenuItem>
                          ));
                      })()
                  }
        </Menu>
    );

    const profileMenu = (
        <Menu anchorEl={anchorEl}
              open={isProfileMenuOpen}
              onClose={handleProfileMenuClose}
              getContentAnchorEl={null}
              anchorOrigin={{vertical: "bottom", horizontal: "center"}}
              transformOrigin={{vertical: "top", horizontal: "center"}}>
                  <MenuItem id="status-menu-item" onClick={handleStatusMenuOpen}>
                      <div style={styles.profileIconContainer}><EqualizerTwoTone/></div>
                      status
                  </MenuItem>
                  {
                      (_ => {
                          const menuItems = [{id: "profile-menu-item", icon: (<AccountCircle/>)}, 
                                             {id: "settings-menu-item", icon: (<Settings/>)}, 
                                             {id: "logout-menu-item", icon: (<ExitToApp/>)}];
                          return menuItems.map((menuItem, index) => (
                              <MenuItem id={menuItem.id} onClick={handleProfileMenuClose} key={index}>
                                  <div style={styles.profileIconContainer}>{menuItem.icon}</div>
                                  {menuItem.id.split("-")[0]}
                              </MenuItem>
                          ));
                      })()
                  }
        </Menu>
    );

    const badges = (
        <div style={styles.badgeContainer}>
            <IconButton>
                <Badge>
                    <MailRounded style={styles.icon}/>
                </Badge>
            </IconButton>
            <IconButton>
                <Badge>
                    <Notifications style={styles.icon}/>
                </Badge>
            </IconButton>
            <IconButton onClick={handleProfileMenuOpen}>
                <StyledBadge id="profile-badge" anchorOrigin={{vertical: "bottom", horizontal: "right"}} overlap="circle" variant="dot">
                    <Avatar src={!isFetchingUserDetails && isAuthenticated? userDetails.picture: null} style={styles.picture}>
                        {!isFetchingUserDetails && isAuthenticated? (_ => `${userDetails.firstname.charAt(0)}`)() : null}
                    </Avatar>
                    {profileMenu}
                    {statusMenu}
                </StyledBadge>
            </IconButton>
        </div>
    );

    return (
        <AppBar style={styles.container}
                color="inherit">
            <Toolbar>
                <Typography variant="h6" style={styles.typography}>FLIGHT DECK</Typography>
                {badges}
            </Toolbar>
        </AppBar>
    )
};

export default Navbar;