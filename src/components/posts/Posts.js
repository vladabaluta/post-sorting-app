import React from "react";
import { Grid } from "@material-ui/core";

import PostItem from "./PostItem";

const Posts = ({ posts }) => {
  return (
    <Grid container>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </Grid>
  );
};

export default Posts;
