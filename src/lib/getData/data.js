"use server";
const getAllIdeas = async (search = "", category = "", shorting = "") => {
  const params = new URLSearchParams();
  if (search) params.append("search", search);
  if (category) params.append("filter", category);
  if (shorting) params.append("shorting", shorting);
  console.log(`${process.env.SERVER_URL}/ideas?${params.toString()}`);

  const res = await fetch(
    `${process.env.SERVER_URL}/ideas?${params.toString()}`,
  );
  const data = await res.json();
  return data || [];
};

export const getIdeasById = async (id) => {
  const res = await fetch(`${process.env.SERVER_URL}/ideas/${id}`);
  const data = await res.json();
  return data;
};

export const getFeaturedData = async () => {
  const res = await fetch(`${process.env.SERVER_URL}/featured`);
  const data = await res.json();
  return data;
};

export const addIdeas = async (newIdea) => {
  const res = await fetch(`${process.env.SERVER_URL}/ideas`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(newIdea),
  });
  const data = await res.json();
  console.log(data);
  return data;
};

export const postComment = async (newComment) => {
  const res = await fetch(`${process.env.SERVER_URL}/comment`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(newComment),
  });
  const data = await res.json();
  return data;
};

export const getCommentByPostId = async (postId) => {
  const res = await fetch(`${process.env.SERVER_URL}/comment/${postId}`);
  const data = await res.json();
  return data;
};

export const getCommentByUserId = async (userId) => {
  const res = await fetch(`${process.env.SERVER_URL}/comment/user/${userId}`);
  const data = await res.json();
  return data || [];
};

export const getUserIdeas = async (userId) => {
  const res = await fetch(`${process.env.SERVER_URL}/my-ideas/${userId}`);
  const data = await res.json();
  // console.log(res, data);
  return data || [];
};

export const updateIdea = async (_id, updatedIdea) => {
  const res = await fetch(`${process.env.SERVER_URL}/ideas/${_id}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(updatedIdea),
  });
  const data = await res.json();
  return data;
};

export const deleteIdea = async (_id) => {
  const res = await fetch(`${process.env.SERVER_URL}/ideas/${_id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
  });
  const data = await res.json();
  return data;
};

export default getAllIdeas;
