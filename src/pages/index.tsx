import * as React from 'react';
import { NextPage } from 'next';

const testObject = {
  sample: undefined,
};
const IndexPage: NextPage = () => {
  return <div>Allo allo {testObject?.sample}</div>;
};

export default IndexPage;
