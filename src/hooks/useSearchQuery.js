import React, { useState, useEffect } from 'react';
const SEARCH_API_ENDPOINT = '/.netlify/functions/search';
const search = async (query) => {
    if (!query) {
        return
    }

    const searchUrl = `${SEARCH_API_ENDPOINT}?query=${encodeURIComponent(query)}`

    return fetch(
        searchUrl
    ).then(async (response) => {
        const data = await response.json();
        if (response.status !== 200) {
            const error = new Error(data.error || 'Unknown error');
            error.statusCode = response.status;
            throw error;
        }
        return data;
    })
};

export const useSearchQuery = (query) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    useEffect(() => {
        async function getData (searchQuery) {
            try {

                const searchData = await search(searchQuery)

                if (searchData) {
                    setData(searchData)
                }
            } catch (err) {
                setError(err)
            }
        }

        getData(query)
    }, [query, search])

    return [data, error]
}

