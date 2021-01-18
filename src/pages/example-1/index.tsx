import * as d3 from 'd3';
import { useEffect, useRef } from 'react';

import { Layout } from '../../components/layout';

const square = () => {
  return (
    <>
      <svg className="square" />
      <style jsx>{`
        .square {
          width: 300px;
          height: 200px;
          border: solid 1px #ccc;
        }
      `}</style>
    </>
  );
};

const circle2 = () => {
  return (
    <svg>
      <circle cx="150" cy="75" r="75" fill="#ccc" />
    </svg>
  );
};

const Example1 = (): React.ReactElement => {
  const ref: any = useRef();
  useEffect(() => {
    const svg = d3.select(ref.current);
    svg.append('circle').attr('cx', 150).attr('cy', 75).attr('r', 75).attr('fill', '#ccc');
  }, []);

  return (
    <Layout>
      <h1>Creating SVG elements</h1>
      References：<a href="https://wattenberger.com/blog/react-and-d3">React + D3.js</a>
      <h2>simple svg element</h2>
      {square()}
      <h2>with useRef</h2>
      <svg ref={ref} />
      <h2>with standard JSX</h2>
      {circle2()}
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default Example1;
