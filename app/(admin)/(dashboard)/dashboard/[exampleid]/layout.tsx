import Container from "@/app/(admin)/components/Container";
import { TabGroup } from "@/components/ui/TabGroup";
import React from "react";

const shopSettings = [
  {
    name: "general",
    slug: "settings",
  },
  {
    name: "Top Navigation",
    slug: "Top-Navigation",
  },
  {
    name: "slider",
    slug: "slider",
  },
  {
    name: "shipping and Tax",
    slug: "shipping-and-tax",
  },
];

const SettingsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container title="Settings" description="Manage your Frontpage in here">
      <TabGroup
        path="/dashboard"
        items={[
          ...shopSettings.map(({ name, slug }) => ({
            text: name,
            slug: slug,
          })),
          { text: "blog", slug: "blog" },
        ]}
      />
      <div>{children}</div>
    </Container>
  );
};

export default SettingsLayout;
