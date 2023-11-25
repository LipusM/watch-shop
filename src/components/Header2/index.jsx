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

import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

/* import AdbIcon from "@mui/icons-material/Adb"; */

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

const Header2 = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  /* Pro responzivní menu */
  const [openDrawer, setOpenDrawer] = useState(false)

  const closeResponsiveMenu = () => {
      setOpenDrawer(false)
  }

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
              <img
                src="/logo.svg"
                alt="logo"
                style={{ height: "2.5rem", maxHeight: "2.5rem" }}
              />
            </NavLink>
          </Typography>

          {/* Responzivní menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              /* onClick={handleOpenNavMenu} */
              onClick={() => setOpenDrawer(!openDrawer)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer open={openDrawer}
            onClose={closeResponsiveMenu}
            >
              <List>
                {pages.map(page => 
                  <ListItemButton onClick={closeResponsiveMenu}>
                    <ListItemIcon>
                    <NavLink  key={page.url} to={page.url} 
                    style={{textDecoration: "none", color:"black"}}>{page.page}
                    </NavLink>
                    </ListItemIcon>
                  </ListItemButton>
                  )}
              </List>
            </Drawer>
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
              <img src="/logo.svg" alt="logo" style={{ height: "2.5rem" }} />
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
                <NavLink
                  to={page.url}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  {page.page}
                </NavLink>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header2;
