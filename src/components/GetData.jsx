import React from 'react';
import useJsonFetch from "../hooks/useJsonFetch";

export default function GetData () {
    const [{data, loading}] = useJsonFetch(' http://localhost:7070/data', []);

    return (
        <div>
            {loading && <div>Loading...</div>}
           <div>{data.status}</div>
        </div>
    )

}