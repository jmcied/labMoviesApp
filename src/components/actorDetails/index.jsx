import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import CelebrationIcon from '@mui/icons-material/Celebration';
import Typography from "@mui/material/Typography";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";

const styles = {
  chipSet: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
  },
  chipLabel: {
    margin: 0.5,
  },
  fab: { 
    position: "fixed",
    top: 50,
    right: 2,
  },
};

const ActorDetails = ( {actor}) => {
  const [drawerOpen, setDrawerOpen] = useState(false); 

  return (
    <>
      <Typography variant="h5" component="h3">
        Biography
      </Typography>

      <Typography variant="h6" component="p">
        {actor.biography}
      </Typography>

      <Paper component="ul" sx={styles.chipSet}>
        <li>
        {/* <Chip icon={<CelebrationIcon />} label={`${actor.birthday}`} /> */}
          { <Chip label="Birthday" sx={styles.chipLabel} color="primary" /> }
        </li>
       {actor.birthday}
      </Paper>
       
      <Paper component="ul" sx={styles.chipSet}>
        <li>
          <Chip label="Place of Birth" sx={styles.chipLabel} color="primary" />
        </li>
        {actor.place_of_birth}        
      </Paper>

 {/*      <Fab    
        color="secondary"
        variant="extended"
        onClick={() =>setDrawerOpen(true)}
        sx={styles.fab}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <MovieReviews movie={movie} />
      </Drawer> */}
    </>
  );
};
export default  ActorDetails ;
