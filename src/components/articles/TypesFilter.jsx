import React, { useState } from "react";
import {
  Box,
  Typography,
  Checkbox,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

export default function TypesFilter({ onSelect }) {
  const [selectedType, setSelectedType] = useState("");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const types = [
    "Destination Guides",
    "Charter Tips",
    "On-Board Experiences",
    "Yacht Types & Tech",
    "Seasonal Offers",
  ];

  const handleSelect = (type) => {
    const newType = type === selectedType ? "" : type;
    setSelectedType(newType);
    onSelect(newType);
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        left: "50%",
        marginLeft: "-50vw",
        backgroundColor: "#F5F5F5",
        py: { xs: 4, md: 6 },
        borderTop: "1px solid #E6E6E6",
        borderBottom: "1px solid #E6E6E6",
      }}
    >
      {/* Title */}
      <Typography
        variant="subtitle2"
        sx={{
          letterSpacing: "2px",
          fontFamily: "Poppins, sans-serif",
          color: "#000",
          mb: 2,
          textAlign: "center",
        }}
      >
        TYPES
      </Typography>

      {/* Divider Line */}
      <Box
        sx={{
          width: "80%",
          height: "1px",
          backgroundColor: "#80131F",
          margin: "0 auto 24px auto",
          opacity: 0.4,
        }}
      />

      {/* Checkbox Group */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: isMobile ? 1.5 : 4,
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {types.map((type, idx) => (
          <Box
            key={idx}
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              flex: isMobile ? "1 1 45%" : "1 1 auto",
              justifyContent: isMobile ? "flex-start" : "center",
            }}
            onClick={() => handleSelect(type)}
          >
            <Checkbox
              icon={
                <CheckBoxOutlineBlankIcon
                  sx={{ color: "#E6E6E6", fontSize: "1.3rem" }}
                />
              }
              checkedIcon={
                <CheckBoxIcon sx={{ color: "#80131F", fontSize: "1.3rem" }} />
              }
              checked={selectedType === type}
              onChange={() => handleSelect(type)}
            />
            <Typography
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontSize: { xs: "0.9rem", md: "1rem" },
                fontWeight: 500,
                color: selectedType === type ? "#80131F" : "#000",
                transition: "color 0.3s ease",
              }}
            >
              {type}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
