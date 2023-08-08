import React from "react";

const Title = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className="rounded-lg bg-white px-4 py-2 text-xl font-bold">
            {children}
        </section>
    );
};

export default Title;
