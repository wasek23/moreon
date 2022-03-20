import { useState, useEffect } from 'react';

type StatusType = 'idle' | 'pending' | 'success' | 'error';

// For Home Products T -> IProduct[]
const useAPI = <T>(asyncService: () => Promise<T>) => {
    const [data, setData] = useState<T | null>(null);
    const [status, setStatus] = useState<StatusType>('idle');
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setStatus('pending');
        setError(null);

        asyncService()
            .then(data => {
                setData(data);
                setStatus('success');
            })
            .catch(err => {
                console.log(err);
                setError(err.message);
            });
    }, [asyncService]);

    return {
        data,
        isLoading: 'pending' === status,
        isSuccess: 'success' === status,
        error
    }
}
export default useAPI