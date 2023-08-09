import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

const styles = {
  root: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    marginBottom: 1.5,
  },
};

const HeaderActorList = ( props ) => {
  const { title, setCurrentPage} = props;

  const handlePageBack = () => { 
    setCurrentPage((prevCurrentPage) => {
      if (prevCurrentPage > 1) {
        return prevCurrentPage - 1;
      } else {
        return prevCurrentPage;
      }
    })
  };

  const handlePageForward = () => {
    setCurrentPage((prevCurrentPage) => prevCurrentPage + 1);
  };
  return (
    <Paper component="div" sx={styles.root}>
       <IconButton aria-label="previous page" onClick={handlePageBack}>
        <ArrowBackIcon color="primary" fontSize="large" />
      </IconButton>

      <Typography variant="h4" component="h3">
        {title}
      </Typography>
      <IconButton aria-label="next page" onClick={handlePageForward}>
        <ArrowForwardIcon color="primary" fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default HeaderActorList;