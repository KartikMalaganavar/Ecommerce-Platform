import React from "react";
import { Button, Grid, Link, Typography } from "@mui/material";

const Footer = () => {
  return (
    <div>
      <Grid
        className="mt-10 bg-black text-white text px-auto"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography className="pb-5" variant="h6">
            Company
          </Typography>
          <Button className="pb-5" variant="h6" gutterbottom="true">
            About
          </Button>
          <Button className="pb-5" variant="h6" gutterbottom="true">
            Blog
          </Button>
          <Button className="pb-5" variant="h6" gutterbottom="true">
            Press
          </Button>
          <Button className="pb-5" variant="h6" gutterbottom="true">
            Jobs
          </Button>
          <Button className="pb-5" variant="h6" gutterbottom="true">
            Partners
          </Button>
        </Grid>

        <Grid item xs={12} sm={6} md={3} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Typography className="pb-5" variant="h6">
            {" "}
            Solutions{" "}
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterbottom="true">
              {" "}
              Marketing{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbottom="true">
              {" "}
              Analytics{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbottom="true">
              {" "}
              Commerce{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbottom="true">
              {" "}
              Insights{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbottom="true">
              {" "}
              Support{" "}
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Typography className="pb-5" variant="h6">
            {" "}
            Documentaion{" "}
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterbottom="true">
              {" "}
              Guides{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbottom="true">
              {" "}
              API Status{" "}
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Typography className="pb-5" variant="h6">
            {" "}
            Legal{" "}
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterbottom="true">
              {" "}
              Claim{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbottom="true">
              {" "}
              Privacy{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbottom="true">
              {" "}
              Terms{" "}
            </Button>
          </div>
        </Grid>

        <Grid
          className="pt-20"
          item
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="body2" component="p" align="center">
            &copy; 2024 My Company. All rights reserved.
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Made by Kartik Malaganavar.
          </Typography>
          {/* <Typography variant="body2" component="p" align="center">
            Icons made by{" "}
            <Link
              color="inherit"
              underline="always"
            >
              Demo
            </Link>{" "}
            from{" "}
            <Link
              to="https://www.flaticon.com/"
              color="inherit"
              underline="always"
            >
              www.My-ecommerce-project.com
            </Link>
          </Typography> */}
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
