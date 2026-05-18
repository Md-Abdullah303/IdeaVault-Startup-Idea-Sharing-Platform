"use server";
const getAllIdeas = async () => {
  const res = await fetch(`${process.env.SERVER_URL}/ideas`);
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

export default getAllIdeas;
