import React from "react";
import { Card, CardContent, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  gridStyle: {
    borderRadius: "2rem",
    padding: "0.2rem",
  },
  cardStyle: {
    backgroundColor: "#f5f5f5",
    height: "20rem;",
  },
  contentStyle: {
    fontWeight: "bold",
  },
});

const PostItem = ({ post }) => {
  const classes = useStyles();

  return (
    <>
      <Grid className={classes.gridStyle} item xs={12} sm={6} md={4} lg={3}>
        <Card className={classes.cardStyle} variant="outlined">
          <CardContent className={classes.contentStyle}>
            {post.id}
            {"."} {post.title}
          </CardContent>
          <CardContent>{post.body}</CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default PostItem;
