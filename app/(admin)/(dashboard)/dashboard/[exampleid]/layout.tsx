import Container from "@/components/Container";
import Title from "@/components/Title";
import { TabGroup } from "@/components/ui/TabGroup";
import { shopSettings } from "@/lib/constant";
import React from "react";

const SettingsLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Container>
            <Title>
                <TabGroup
                    path="/dashboard"
                    items={[
                        ...shopSettings.map((x) => ({
                            text: x.name,
                            slug: x.slug,
                        })),
                        { text: "blog", slug: "blog" },
                    ]}
                />
            </Title>
            <div>{children}</div>
        </Container>
    );
};

export default SettingsLayout;
