"use server";

import { headers } from "next/headers";
import { auth } from "../auth";

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

// private
export const getIdeasById = async (id) => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  // console.log(token);
  const res = await fetch(`${process.env.SERVER_URL}/ideas/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  return data;
};

export const getFeaturedData = async () => {
  const res = await fetch(`${process.env.SERVER_URL}/featured`);
  const data = await res.json();
  return data;
};

// private
export const addIdeas = async (newIdea) => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  const res = await fetch(`${process.env.SERVER_URL}/ideas`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(newIdea),
  });
  const data = await res.json();
  console.log(data);
  return data;
};

// private
export const postComment = async (newComment) => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  const res = await fetch(`${process.env.SERVER_URL}/comment`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(newComment),
  });
  const data = await res.json();
  return data;
};

// private
export const getCommentByPostId = async (postId) => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  const res = await fetch(`${process.env.SERVER_URL}/comment/${postId}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  return data;
};

// private
export const getCommentByUserId = async (userId) => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  const res = await fetch(`${process.env.SERVER_URL}/comment/user/${userId}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  return data || [];
};

// private
export const getUserIdeas = async (userId) => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  const res = await fetch(`${process.env.SERVER_URL}/my-ideas/${userId}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  // console.log(res, data);
  return data || [];
};

// private
export const updateIdea = async (_id, updatedIdea) => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  const res = await fetch(`${process.env.SERVER_URL}/ideas/${_id}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(updatedIdea),
  });
  const data = await res.json();
  return data;
};

// private
export const deleteIdea = async (_id) => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  const res = await fetch(`${process.env.SERVER_URL}/ideas/${_id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  return data;
};

export default getAllIdeas;
