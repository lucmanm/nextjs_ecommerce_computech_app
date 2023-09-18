import React from "react";

const Title = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className="">
            {children}
        </section>
    );
};

export default Title;
