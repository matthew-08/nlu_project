const backendApi = import.meta.env.VITE_API_URL || 'http://localhost:3005';

type Endpoints = 'quotes' | 'categories';

type FetchInput = {
  path: `/api/${Endpoints}` | `/api/${Endpoints}/${string}`;
  method: 'GET' | 'POST';
  body?: Record<any, any>;
};

const appFetch = async ({ path, method, body }: FetchInput) => {
  return fetch(`${backendApi}${path}`, {
    ...(method === 'POST' && {
      headers: { 'Content-Type': 'application/json' },
    }),
    method,
    ...(body && { body: JSON.stringify(body) }),
  });
};

export default appFetch;
