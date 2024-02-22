import React from "react";
import Cabecalho from "./Cabecalho";
import CountrySearch from "./BuscaNacao";
import { Box } from "@mui/material";

const CountrySearchContainer = () => {
  return (
    <Box>
      <Cabecalho />
      <CountrySearch />
    </Box>
  );
};

export default CountrySearchContainer;
