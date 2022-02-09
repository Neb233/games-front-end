import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://neb233.herokuapp.com/api",
});

export const getCategories = () => {
  return gamesApi.get("/categories").then((res) => {
    return res.data.categories;
  });
};

export const getReviews = (category, order, sort_by) => {
  return gamesApi
    .get("/reviews", { params: { limit: 100, category: category } })
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

export const patchReviewVotes = (review_id, request) => {
  return gamesApi.patch(`/reviews/${review_id}`, request).then((res) => {
    return res.data.review;
  });
};
export const postNewComment = (review_id, request) => {
  console.log(review_id);
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
