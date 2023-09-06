import React from "react";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Container from "@/app/(admin)/components/Container";

const adminDashboard = async () => {
  const session = await getServerSession(authOptions);
  if (session?.user) {
    return (
      <Container title="Dashboard">
        <h2> Welcome:{session?.user.username}</h2>
      </Container>
    );
  }
};

export default adminDashboard;
