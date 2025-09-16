import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useTranslation } from "react-i18next";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";

export default function Header({ mode, setMode }) {
  const { t, i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const changeLang = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
    setAnchorEl(null);
  };

  const navLinks = [
    { to: "/yachts-for-sale", label: t("nav.buy") },
    { to: "/yachts-for-charter", label: t("nav.charter") },
    { to: "/destinations", label: t("nav.destinations") },
    // { to: "/offices", label: t("nav.offices") },
    { to: "/articles", label: t("nav.news") },
    // { to: "/favorites", label: t("nav.favorites") },
    { to: "/about", label: t("nav.about") },   
    { to: "/contact", label: t("nav.contact") },  
  ];

  return (
    <AppBar position="sticky" color="primary">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo */}
        <Typography
          variant="h6"
          fontWeight="bold"
          component={Link}
          to="/"
          sx={{ color: "inherit", textDecoration: "none" }}
        >
          Sorridi Yachts
        </Typography>

        {/* Menu desktop */}
        {!isMobile && (
          <Stack direction="row" spacing={2}>
            {navLinks.map((link) => (
              <Button key={link.to} component={Link} to={link.to} color="inherit">
                {link.label}
              </Button>
            ))}
          </Stack>
        )}

        {/* Right side (Lang + Theme + Mobile Menu) */}
        <Stack direction="row" spacing={1} alignItems="center">
          {/* Language */}
          <IconButton color="inherit" onClick={(e) => setAnchorEl(e.currentTarget)}>
            <LanguageIcon />
          </IconButton>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
            <MenuItem onClick={() => changeLang("en")}>English</MenuItem>
            <MenuItem onClick={() => changeLang("sq")}>Shqip</MenuItem>
            <MenuItem onClick={() => changeLang("it")}>Italiano</MenuItem>
          </Menu>

          {/* Theme toggle */}
          <ThemeToggle mode={mode} setMode={setMode} />

          {/* Hamburger menu (mobile only) */}
          {isMobile && (
            <>
              <IconButton color="inherit" onClick={() => setMobileOpen(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={() => setMobileOpen(false)}
              >
                <List sx={{ width: 220 }}>
                  {navLinks.map((link) => (
                    <ListItem key={link.to} disablePadding>
                      <ListItemButton
                        component={Link}
                        to={link.to}
                        onClick={() => setMobileOpen(false)}
                      >
                        <ListItemText primary={link.label} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Drawer>
            </>
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
