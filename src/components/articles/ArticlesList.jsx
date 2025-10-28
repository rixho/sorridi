import React, { useState } from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import articlesData from "../../data/articles.json";

export default function ArticlesList({ filterType }) {
  const navigate = useNavigate();
  const [articles] = useState(articlesData);

  const filtered = filterType
    ? articles.filter((a) => a.type === filterType)
    : articles;

  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        left: "50%",
        marginLeft: "-50vw",
        backgroundColor: "#fff",
        py: { xs: 5, md: 8 },
      }}
    >
      <Grid
        container
        spacing={{ xs: 3, md: 5 }}
        justifyContent="center"
        sx={{
          margin: "0 auto",
          px: { xs: 2, md: 4 },
        }}
      >
        {filtered.map((a) => (
          <Grid
            key={a.id}
            item
            xs={12}
            sm={6}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                border: "1px solid #E6E6E6",
                borderRadius: "10px",
                overflow: "hidden",
                width: "100%",
                maxWidth: "420px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                },
              }}
            >
              <img
                src={a.image}
                alt={a.title}
                style={{
                  width: "100%",
                  height: "260px",
                  objectFit: "cover",
                }}
              />
              <Box sx={{ p: { xs: 2.5, md: 3 }, flexGrow: 1 }}>
                <Typography
                  sx={{
                    color: "#000",
                    fontSize: "0.9rem",
                    mb: 1.2,
                    letterSpacing: "0.03em",
                    opacity: 0.8,
                  }}
                >
                  {a.date}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    fontSize: { xs: "1.1rem", md: "1.25rem" },
                    mb: 1.2,
                    lineHeight: 1.3,
                  }}
                >
                  {a.title}
                </Typography>

                <Typography
                  sx={{
                    color: "#444",
                    mb: 3,
                    fontSize: { xs: "0.95rem", md: "1rem" },
                    lineHeight: 1.6,
                    flexGrow: 1,
                  }}
                >
                  {a.excerpt}
                </Typography>

                <Button
                  variant="text"
                  sx={{
                    color: "#80131F",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    fontSize: "1rem",
                    letterSpacing: "0.03em",
                    "&:hover": { color: "#4d0c15" },
                  }}
                  onClick={() => navigate(`/articles/${a.id}`)}
                >
                  Read More &gt;&gt;
                </Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
