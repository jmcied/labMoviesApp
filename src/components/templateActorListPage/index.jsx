import React, { useState } from "react";
import HeaderActorList from "../headerActorList/index.jsx";
import Grid from "@mui/material/Grid";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import ActorCard from "../actorsCard/index.jsx";
import FilterActorsCard from "../filterActorsCard/index.jsx";

const styles = {
  root: {
    padding: "20px",
  },
  fab: {
    marginTop: 8,
    position: "fixed",
    top: 2,
    right: 2,
  },
};

function PageTemplate({ actors, title, setCurrentPage }) {
    const [nameFilter, setNameFilter] = useState("");
    const [drawerOpen, setDrawerOpen] = useState(false); 

    let displayedActors = actors.filter((actor) => {
      return actor.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    });

    const handleNameFilterChange = (value) => {
      setNameFilter(value);
    }; 

    return (
      <>
        <Grid container sx={styles.root}>
          <Grid item xs={12}>
            <HeaderActorList title={title} setCurrentPage={setCurrentPage}/>
          </Grid>
          <Grid item container spacing={5}>
            {displayedActors.map((actor) => (
              <Grid item key={actor.id}>
                <ActorCard actor={actor} />
              </Grid>
            ))}
          </Grid>
        </Grid>
 {        <Fab
          color="secondary"
          variant="extended"
          onClick={() => setDrawerOpen(true)}
          sx={styles.fab}
        >
          Filter
        </Fab> }
        { <Drawer
          anchor="top"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        >
          <FilterActorsCard onUserInput={handleNameFilterChange} nameFilter={nameFilter} />
        </Drawer> }
      </>
    );
  }

  export default PageTemplate;