import { CardBody } from '@chakra-ui/react';

const backendApi = 'http://localhost:3005';

type Endpoints = 'quotes' | 'categories';

type FetchInput = {
  path: `/api/${Endpoints}` | `/api/${Endpoints}/`;
  method: 'GET' | 'POST';
  body?: Record<any, any>;
};

const appFetch = async ({ path, method, body }: FetchInput) => {
  return fetch(`${backendApi}${path}`, {
    ...(method === 'POST' && {
      headers: { 'Content-Type': 'application/json' },
    }),
    method,
    credentials: 'include',
    ...(body && body),
  });
};

export default appFetch;
