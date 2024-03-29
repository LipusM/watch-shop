
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


const pages = [
  /* {
    page: "Home",
    url: "/",
  }, */
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

/* Třída, která se použije do NavLink spolu s isActive */
const classes = {
  page: "page"
}

import { NavLink } from "react-router-dom";
import { useState } from "react";

import "./style.scss";

const Header = () => {
  /* Pro responzivní menu */
  const [openDrawer, setOpenDrawer] = useState(false);

  const openCloseResponsiveMenu = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <AppBar position="static" style={{ background: "#fff" }} elevation={0} id="the-header">
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
              onClick={openCloseResponsiveMenu}
              sx={{"&:hover":{bgcolor: "transparent"} }}
            >
              <MenuIcon/>
            </IconButton>
            <Drawer open={openDrawer} onClick={openCloseResponsiveMenu}>
              <List id="mobile-menu">
                {pages.map((page) => (
                  <ListItemButton
                    key={page.url}
                    onClick={openCloseResponsiveMenu}
                    sx={{"&:hover":{bgcolor: "transparent"}, color: "transparent" }}
                  >
                    <ListItemIcon key={page.url}>
                      <NavLink
                        key={page.url}
                        to={page.url}
                        style={{ textDecoration: "none", color: "black" }}
                        className={ ({isActive}) => [
                          classes.page,
                          isActive ? "active-page" : "",
                        ].filter(Boolean).join(" ")}
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
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex", } }} id="regular-menu">
            {pages.map((page) => (
              <Button key={page.page} 
              sx={{"&:hover":{bgcolor: "transparent"}, color: "transparent" }}>
                <NavLink
                  to={page.url}
                  style={{ textDecoration: "none", color: "black", }}
                  className={ ({isActive}) => [
                    classes.page,
                    isActive ? "active-page" : "",
                  ].filter(Boolean).join(" ")}
                >
                  {page.page}
                </NavLink>
              </Button>
            ))}
          </Box>
          {/* Klasické menu */}

          {/* Odkaz na pravé straně AppBaru */}
          <Typography>
            <NavLink to="/shopping-list">
              <img src="/shopping-cart.gif" alt="logo" style={{ height: "2rem" }} />
            </NavLink>
          </Typography>
          {/* Odkaz na pravé straně AppBaru */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
