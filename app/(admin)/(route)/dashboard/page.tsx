import React from "react";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Container from "@/app/(admin)/(route)/dashboard/components/Container";
import { redirect } from "next/navigation";
import Overview from "./components/overview";

const adminDashboard = async () => {
  const session = await getServerSession(authOptions);
  if (session?.user) {
    return (
      <Container title="Dashboard">
        <Overview/>
      </Container>
    );
  }
  else{
    redirect("/sign-in")
  }
};

export default adminDashboard;
