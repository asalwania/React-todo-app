import React from "react";
import Toolbar from "@mui/material/Toolbar";
import { IconButton, Tooltip, Typography } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";

const NavBar = () => {
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
      }}
    >
      <Typography
        sx={{ flex: "1 1 100%" }}
        variant="h6"
        id="talbleTitle"
        component="div"
      >
        <h3>Todos</h3>
      </Typography>
      <Tooltip title="Filter list">
        <IconButton>
          <FilterListIcon />
        </IconButton>
      </Tooltip>
    </Toolbar>
  );
};

export default NavBar;
