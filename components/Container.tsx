import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
    return <div className="space-y-4 px-10 py-6">{children}</div>;
};

export default Container;
