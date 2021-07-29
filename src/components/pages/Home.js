import React, { useState, useEffect } from "react";
import Posts from "../posts/Posts";
import PaginationComponent from "./PaginationComponent";
import { Container, Button } from "@material-ui/core";

import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sortState, setSortState] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(20);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  // This way the whole list is sorting (from 1-100),
  // but if we change the order and we put the .slice before the .sort (like commented below)
  // we would only sort the displayed posts(1-20)
  const currentPosts = posts
    //.slice(indexOfFirstPost, indexOfLastPost)
    .sort((a, b) => {
      if (sortState === 0) {
        return a.id - b.id;
      } else if (sortState === 1) {
        return a.title.localeCompare(b.title);
      } else if (sortState === 2) {
        return b.title.localeCompare(a.title);
      } else {
        return a.id - b.id;
      }
    })
    .slice(indexOfFirstPost, indexOfLastPost);

  const handlePagination = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(process.env.REACT_APP_API_KEY);
        setPosts(response.data);
      } catch (err) {
        console.error(err);
      }
      setIsLoading(false);
    })();
  }, []);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Container>
          <h2 className="title">Posts</h2>
          <div className="wrapper">
            {sortState === 0 && (
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  setSortState(1);
                }}
              >
                Sort A-Z
              </Button>
            )}
            {sortState === 1 && (
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  setSortState(2);
                }}
              >
                Sort Z-A
              </Button>
            )}
            {sortState === 2 && (
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  setSortState(0);
                }}
              >
                Sort by id
              </Button>
            )}
            <PaginationComponent
              postsPerPage={postsPerPage}
              totalPosts={posts.length}
              handlePagination={handlePagination}
              currentPage={currentPage}
            />
          </div>

          <Posts posts={currentPosts} isLoading={isLoading} />
        </Container>
      )}
    </div>
  );
};

export default Home;
