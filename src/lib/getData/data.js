const getAllIdeas = async () => {
  const res = await fetch(`${process.env.SERVER_URL}/ideas`);
  const data = await res.json();
  return data || [];
};

export default getAllIdeas;
