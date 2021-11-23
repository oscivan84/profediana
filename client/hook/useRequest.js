import { useEffect, useState, useMemo } from 'react'
import ObjectId from 'bson-objectid'

const useRequest = ({ handle = null, params = [], query = {}, config = {} }, callback = null) => {

    if (typeof handle != 'function') throw new Error("El handle debe de ser una function");

    const [query_search, setQuerySearch] = useState("");
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [lastPage, setLastPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [feching, setFeching] = useState(undefined);
    const [isRefresh, setIsRefresh] = useState(false);

    const canNext = useMemo(() => {
        return (page + 1) <= lastPage;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [feching]);

    const getData = async (add = false) => {
        setLoading(true);
        await handle(...params, { page, query_search, ...query }, config)
        .then(res => {
            let currentData = res?.data?.data;
            let currentMeta = res?.data?.meta;
            setPage(currentMeta.current_page);
            setLastPage(currentMeta.last_page);
            setTotal(currentMeta.total);
            if (typeof callback == 'function') callback(currentData, add);
            setIsError(false);
        }).catch(() => setIsError(true))
        setLoading(false);
        setFeching(new ObjectId().toHexString())
    }

    const nextPage = () => {
        let canNextPage = (page + 1) <= lastPage;
        if (!canNextPage) return;
        setPage(prev => prev + 1);
    }
 
    useEffect(() => {
        if (isRefresh && page > 1) {
            setPage(1)
        } else if (isRefresh && page == 1) {
            getData();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isRefresh]);

    useEffect(() => {
        if (page == 1) getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page])

    useEffect(() => {
        if (page > 1) getData(true); 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    useEffect(() => {
        if (isRefresh) setIsRefresh(false);
    }, [isRefresh]);

    return { page, setPage, total, lastPage, loading, setQuerySearch, query_search, isError, canNext, setIsRefresh, nextPage }
}

export default useRequest;