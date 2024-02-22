import { Box, Button, Typography } from "@mui/material";
import React from "react";
import DarkModeIcon from '@mui/icons-material/DarkMode';import { useStore } from "../store";

const Cabecalho = () => {
  const isDarkMode = useStore((state) => state.isDarkMode);
  const modoEscolhaEscuro = useStore((state) => state.modoEscolhaEscuro);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: isDarkMode ? "#2b3743" : "#ffffff",
        boxShadow: "0px 2px 2px lightgrey",
      }}
    >
      <Typography variant="h1" sx={{ fontSize: "1.5rem", fontWeight: 700 }}>
        Pesquise pela uma nação!
      </Typography>
      <Button onClick={modoEscolhaEscuro}>
        <DarkModeIcon />
        Modo Escuro
      </Button>
    </Box>
  );
};

export default Cabecalho;
