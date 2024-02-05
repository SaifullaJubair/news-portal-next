import LatestNews from "@/components/ui/LatestNews/LatestNews";
import RightBar from "@/components/ui/RightBar/RightBar";
import { Grid } from "@mui/material";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Grid container>
        <Grid xs={8}>
          <LatestNews />
        </Grid>
        <Grid xs={4} className="hidden md:block">
          <RightBar />
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
