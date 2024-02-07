import { Button, Card, CardContent, Typography, styled } from "@mui/material";
import React from "react";

const TriangleImg = styled("img")({
  right: 0,
  bottom: 0,
  height: 170,
  position: "absolute",
});

const TrophyImg = styled("img")({
  right: 36,
  bottom: 20,
  height: 98,
  position: "absolute",
});

const Achivement = () => {
  return (
    <Card className="" sx={{ position: "relative", bgcolor:"#242B2E", color:"white"}}>
      <CardContent>
        <Typography variant="h6" sx={{ letterSpacing: ".25px" }}>
          {" "}
          Shop With Kartik
        </Typography>
        <Typography variant="body2">Congratulations</Typography>

        <Typography variant="h5" sx={{my:3.35}}>420.8k</Typography>
        <Button variant="contained" size="small">
          View Sales
        </Button>
        <TriangleImg src="" alt="" />
        <TrophyImg
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngplay.com%2Fwp-content%2Fuploads%2F6%2FGold-Trophy-Vector-Transparent-PNG.png&f=1&nofb=1&ipt=625248744f67d8f10f0cca558ef6f00024a0a692cca80bd0fa43f0ac6dbd30d7&ipo=images"
          alt=""
        />
      </CardContent>
    </Card>
  );
};
export default Achivement;
