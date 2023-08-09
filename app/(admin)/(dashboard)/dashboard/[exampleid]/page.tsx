import React from "react";

const SettingsPage = ({ params }: { params: { exampleid: string } }) => {
    return <div>{params.exampleid}</div>;
};

export default SettingsPage;
