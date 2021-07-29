import React from "react";
import { Pagination } from "@material-ui/lab";

const PaginationComponent = ({
  totalPosts,
  postsPerPage,
  currentPage,
  handlePagination,
}) => {
  const count = Math.ceil(totalPosts / postsPerPage);

  return (
    <Pagination
      count={count}
      page={currentPage}
      onChange={(e, val) => {
        handlePagination(val);
      }}
    />
  );
};

export default PaginationComponent;
