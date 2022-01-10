import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import styles from "../../styles/Appbar.module.scss";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function ButtonAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElSurveys, setanchorElSurveys] = React.useState(null);
  const [anchorElSettings, setanchorElSettings] = React.useState(null);
  const open = Boolean(anchorEl);
  const openSurveys = Boolean(anchorElSurveys);
  const openSettings = Boolean(anchorElSettings);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickSurveys = (event) => {
    setanchorElSurveys(event.currentTarget);
  };
  const handleClickSettings = (event) => {
    setanchorElSettings(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setanchorElSurveys(null);
    setanchorElSettings(null);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <div className={styles.navbar}>
          <div className={styles.navbarLeft}>
            <img src="/assets/heyRenee_logo.png" />
          </div>
          <div className={styles.navbarCenter}>
            <a href="#">Onboarding</a>
            <a href="#">Appointments</a>
            <a href="#">Medications</a>
            <a href="#">Providers</a>
            <a href="#">Conditions</a>
            <a href="#">
              <div>
                <Button
                  id="basic-button"
                  aria-controls={openSurveys ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={openSurveys ? "true" : undefined}
                  onClick={handleClickSurveys}
                  endIcon={<KeyboardArrowDownIcon />}
                >
                  Surveys
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorElSurveys}
                  open={openSurveys}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleClose}>Survey 1</MenuItem>
                  <MenuItem onClick={handleClose}>Survey 2</MenuItem>
                  <MenuItem onClick={handleClose}>Survey 3</MenuItem>
                </Menu>
              </div>
            </a>
            <a href="#">
              <div>
                <Button
                  id="basic-button_1"
                  aria-controls={openSettings ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={openSettings ? "true" : undefined}
                  onClick={handleClickSettings}
                  endIcon={<KeyboardArrowDownIcon />}
                >
                  Settings
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorElSettings}
                  open={openSettings}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleClose}>Hello</MenuItem>
                  <MenuItem onClick={handleClose}>I am </MenuItem>
                  <MenuItem onClick={handleClose}>Sid</MenuItem>
                </Menu>
              </div>
            </a>
          </div>
          <div className={styles.navbarRight}>
            <img src="/assets/userIcon.svg" />
            <div>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
              >
                Username
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </div>
          </div>
        </div>
      </AppBar>
    </Box>
  );
}
