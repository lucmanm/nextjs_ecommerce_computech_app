import React from "react";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

const adminDashboard = async () => {
  const session = await getServerSession(authOptions);
  if (session?.user) {
    return <div>Welcome {session?.user.username}</div>;
  }
};

export default adminDashboard;
