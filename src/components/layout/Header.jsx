// src/components/Header.jsx
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
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";

export default function Header() {
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
    { to: "/yachts-for-charter", label: t("nav.charter") },
    { to: "/destinations", label: t("nav.destinations") },
    { to: "/prive-service", label: t("nav.priveservice") },
    { to: "/partners", label: t("nav.partnership") },
    { to: "/about", label: t("nav.about") },
    { to: "/articles", label: t("nav.news") },
  ];

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: "#141F2F",
        color: "#fff",
        py: 1,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", maxWidth: "1400px", mx: "auto" }}>
        {/* Logo */}
        <Box component={Link} to="/" sx={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <Box
            component="img"
            src="/media/logo-gold.png" // 👉 ndrysho me logon tënde
            alt="Aura Voyage Logo"
            sx={{ height: 55, mr: 2 }}
          />
        </Box>

        {/* Desktop Navigation */}
        {!isMobile && (
          <Stack direction="row" spacing={3} alignItems="center">
            {navLinks.map((link) => (
              <Button
                key={link.to}
                component={Link}
                to={link.to}
                sx={{
                  color: "#fff",
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  "&:hover": { color: "#C1A34E" },
                }}
              >
                {link.label}
              </Button>
            ))}
            {/* Contact button */}
            <Button
              component={Link}
              to="/contact"
              sx={{
                border: "1px solid #C1A34E",
                color: "#fff",
                px: 3,
                py: 0.8,
                borderRadius: 0,
                fontWeight: 600,
                "&:hover": {
                  backgroundColor: "#C1A34E",
                  color: "#141F2F",
                },
              }}
            >
              CONTACT
            </Button>
          </Stack>
        )}

        {/* Mobile Menu */}
        {isMobile && (
          <>
            <IconButton color="inherit" onClick={() => setMobileOpen(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={mobileOpen}
              onClose={() => setMobileOpen(false)}
              PaperProps={{
                sx: { backgroundColor: "#141F2F", color: "#fff" },
              }}
            >
              <List sx={{ width: 240 }}>
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
                <ListItem disablePadding>
                  <ListItemButton
                    component={Link}
                    to="/contact"
                    onClick={() => setMobileOpen(false)}
                  >
                    <ListItemText
                      primary="CONTACT"
                      sx={{ color: "#C1A34E", fontWeight: "bold" }}
                    />
                  </ListItemButton>
                </ListItem>
              </List>
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
