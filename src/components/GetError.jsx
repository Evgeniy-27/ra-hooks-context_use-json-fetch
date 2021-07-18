import React from 'react';
import useJsonFetch from "../hooks/useJsonFetch";

export default function GetError () {
    const [{data, loading, error}] = useJsonFetch('http://localhost:7070/error', []);

    return (
        <div>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            <div>{data.status}</div>
        </div>
    )

}