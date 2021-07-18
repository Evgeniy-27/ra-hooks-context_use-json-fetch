import React from 'react';
import useJsonFetch from "../hooks/useJsonFetch";

export default function GetLoading () {
    const [{data, loading, error}] = useJsonFetch('http://localhost:7070/loading', []);

    return (
        <div>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            <div>{data.status}</div>
        </div>
    )

}