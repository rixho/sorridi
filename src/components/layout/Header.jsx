// src/components/Header.jsx
import React from "react";
import {
  AppBar,
  Toolbar,
  Stack,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  Box,
  Slide,
  useScrollTrigger,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";

// ✅ Funksion ndihmës për të fshehur/shfaqur headerin
function HideOnScroll({ children }) {
  const trigger = useScrollTrigger({
    threshold: 50, // pas 50px scroll poshtë fillon të fshihet
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Header() {
  const { t, i18n } = useTranslation();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navLinks = [
    { to: "/yachts-for-charter", label: t("nav.charter") },
    { to: "/destinations", label: t("nav.destinations") },
    { to: "/prive-service", label: t("nav.priveservice") },
    { to: "/partners", label: t("nav.partnership") },
    { to: "/about", label: t("nav.about") },
    { to: "/articles", label: t("nav.news") },
  ];

  return (
    <HideOnScroll>
      <AppBar
        position="fixed" // ✅ qëndron sipër gjithmonë
        elevation={0}
        sx={{
          backgroundColor: "#141F2F",
          color: "#fff",
          py: 0,
          transition: "transform 0.3s ease-in-out",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            maxWidth: "1400px",
            mx: "auto",
            width: "100%",
          }}
        >
          {/* Logo */}
          <Box
            component={Link}
            to="/"
            sx={{ display: "flex", alignItems: "center", textDecoration: "none" }}
          >
            <Box
              component="img"
              src="/media/logo-gold.png"
              alt="Aura Voyage Logo"
              sx={{ height: 55, mr: 2 }}
            />
          </Box>

          {/* Desktop Menu */}
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
    </HideOnScroll>
  );
}
