import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

import AdbIcon from "@mui/icons-material/Adb";

const pages = [
  {
    page: "Home",
    url: "/",
  },
  {
    page: "Watches",
    url: "/watches",
  },
  {
    page: "About us",
    url: "/about-us",
  },
  {
    page: "Contact",
    url: "/contact",
  },
];

import { NavLink } from "react-router-dom";
import { useState } from "react";

import "./style.scss";

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" style={{ background: "orange" }} elevation={1}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
            }}
          >
            <NavLink to="/">
              <img src="/logo.svg" alt="logo" style={{height: "2.5rem", maxHeight: "2.5rem"}}/>
            </NavLink>
          </Typography>

{/* Responzivní menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none", } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              {/* <div id="nav-btn" className="first-section">
                <div className="nav-part"></div>
                <div className="nav-part"></div>
                <div className="nav-part"></div>
              </div> */}
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none",},
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.page} onClick={handleCloseNavMenu} sx={{backgroundColor: "blue", margin: "-10px 0px"}}>
                  <Typography textAlign="center">
                    <NavLink  key={page.page} onClick={handleCloseNavMenu} to={page.url} 
                    style={{textDecoration: "none", color:"black"}}>{page.page}
                    </NavLink>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
            }}
          >
            <NavLink to="/">
              <img src="/logo.svg" alt="logo" style={{height: "2.5rem"}}/>
            </NavLink>
          </Typography>
          {/* Responzivní menu */}

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.page}
                onClick={handleCloseNavMenu}
                /* sx={{ my: 2, color: "black", display: "block", textDecoration: "none"}} */
              >
                <NavLink to={page.url} style={{textDecoration: "none", color:"black"}}>{page.page}</NavLink>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
