import { useState } from 'react';
import { QuoteFormData } from '../schemas/quoteSchema';
import appFetch from '../utils/appFetch';

type SubmitStatus = {
  loading: boolean;
  idle: boolean;
  complete: boolean;
  error: boolean;
};

const useSubmitQuote = () => {
  const [status, setStatus] = useState<SubmitStatus>({
    complete: false,
    idle: true,
    loading: false,
    error: false,
  });

  const handleSubmitQuote = async (data: QuoteFormData) => {
    if (status.complete) {
      return;
    }
    setStatus({ ...status, loading: true, idle: false });
    await appFetch({
      method: 'POST',
      path: '/api/quotes',
      body: data,
    }).then((res) => {
      if (res.ok)
        setStatus({
          ...status,
          error: false,
          complete: true,
          idle: false,
          loading: false,
        });
    });
  };

  return {
    submitStatus: status,
    handleSubmitQuote,
  };
};

export default useSubmitQuote;
