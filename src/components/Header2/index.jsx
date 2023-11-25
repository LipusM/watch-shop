import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

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
  /* Pro klasické menu */
  const [tabValue, setTabValue] = useState("/")

  const activeTab = (as) => {
    setTabValue(as)
  }

  /* Pro responzivní menu */
  const [openDrawer, setOpenDrawer] = useState(false);

  const openCloseResponsiveMenu = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <AppBar position="static" style={{ background: "#fff0d4" }} elevation={1}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Obrázek v klasické menu */}
          <Typography
            /* variant="h5" */
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
          {/* Obrázek v klasické menu */}

          {/* Responzivní menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={openCloseResponsiveMenu}
            >
              <MenuIcon />
            </IconButton>
            <Drawer open={openDrawer} onClick={openCloseResponsiveMenu}>
              <List>
                {pages.map((page) => (
                  <ListItemButton
                    key={page.url}
                    onClick={openCloseResponsiveMenu}
                  >
                    <ListItemIcon key={page.url}>
                      <NavLink
                        key={page.url}
                        to={page.url}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        {page.page}
                      </NavLink>
                    </ListItemIcon>
                  </ListItemButton>
                ))}
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

          {/* Klasické menu */}
          <Tabs sx={{ flexGrow: 1, display: { xs: "none", md: "flex", } }} value={tabValue} 
          onChange={(e) => activeTab(e.target.value)} indicatorColor="black">
            {pages.map((page, index) => (
              <Tab key={page.page}  
              value={page.url}
              label={page.page}
              >
                {/* <NavLink
                  to={page.url}
                  style={{ textDecoration: "none", color: "black", }}
                > */}
                  {page.page}
                {/* </NavLink> */}
              </Tab>
            ))}
          </Tabs>
          {/* Klasické menu */}

          {/* Odkaz na pravé straně AppBaru */}
          <Typography>
            <NavLink to="/shopping-list">
            {/* <ShoppingCartIcon /> */}
              <img src="/shopping-cart.gif" alt="logo" style={{ height: "2rem" }} />
            </NavLink>
          </Typography>
          {/* Odkaz na pravé straně AppBaru */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header2;
