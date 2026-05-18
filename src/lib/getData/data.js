const getAllIdeas = async () => {
  const res = await fetch(`${process.env.SERVER_URL}/ideas`);
  const data = await res.json();
  return data || [];
};

export const addIdeas = async (newIdea) => {
  console.log(process.env.SERVER_URL);
  const res = await fetch(`http://localhost:3030/ideas`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(newIdea),
  });
  const data = await res.json();
  // console.log(data);
  return data;
};

export default getAllIdeas;
