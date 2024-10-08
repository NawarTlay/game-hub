import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface FetchResponse<T> {
    count: number;
    results: T[];
}

const useData = <T>(endpoit: string) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setErorr] = useState('');
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        setLoading(true);
        apiClient.get<FetchResponse<T>>(endpoit, {signal: controller.signal})
            .then((res) => {
                setData(res.data.results); 
                setLoading(false);
            })
            .catch(err => {
                if (err instanceof CanceledError) return;
                setErorr(err.message); 
                setLoading(false);
            });
        
        return () => controller.abort();
    }, []);

    return { data, error, isLoading };

}

export default useData;