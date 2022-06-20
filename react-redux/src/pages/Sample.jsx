import React from "react";
import { useParams } from 'react-router-dom';

const Sample = () => {

    const { sampleId } = useParams();

    return <>
        <h1>This is Sample page: {sampleId}</h1>
    </>;
};

export default Sample;