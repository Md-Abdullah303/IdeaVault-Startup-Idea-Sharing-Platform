import { authClient } from "@/lib/auth-client";

const UserProfileDropdown = async () => {
  const { data: session, error } = await authClient.getSession();
  //   console.log("userProfileDrowpdown", session);

  return <div>profile</div>;
};

export default UserProfileDropdown;
