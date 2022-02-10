import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://neb233.herokuapp.com/api",
});

export const getCategories = () => {
  return gamesApi.get("/categories").then((res) => {
    return res.data.categories;
  });
};

export const getReviews = (category, sort_by, order) => {
  let path = "/reviews"
  if(order) {
    path += `?order=${order}`
  }
  if(sort_by && order) {
    path += `&sort_by=${sort_by}`
  }
  

  return gamesApi
    .get(path, { params: { limit: 100, category: category } })
    .then((res) => {
      return res.data.reviews;
    });
};

export const getReviewById = (review_id) => {
  return gamesApi.get(`/reviews/${review_id}`).then((res) => {
    return res.data.review;
  });
};

export const getCommentsByReviewId = (review_id) => {
  return gamesApi.get(`/reviews/${review_id}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const patchReviewVotes = (review_id) => {
  return gamesApi.patch(`/reviews/${review_id}`, { inc_votes:1 }).then((res) => {
    return res.data.review;
  });
};
export const postNewComment = (review_id, request) => {
  return gamesApi
    .post(`/reviews/${review_id}/comments`, request)
    .then((res) => {
      return res.data.comment;
    });
};
export const deleteComment = (comment_id) => {
  return gamesApi.delete(`/comments/${comment_id}`).then((res) => {
    return res;
  });
};
