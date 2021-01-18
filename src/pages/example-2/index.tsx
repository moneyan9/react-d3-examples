import * as d3 from 'd3';
import { useEffect, useRef } from 'react';

import { Layout } from '../../components/layout';

const dataset = [
  { name: 'A', value: 5 },
  { name: 'B', value: 6 },
  { name: 'C', value: 8 },
  { name: 'D', value: 1 },
  { name: 'E', value: 2 },
  { name: 'F', value: 6 },
  { name: 'G', value: 8 },
  { name: 'H', value: 6 },
  { name: 'I', value: 10 },
  { name: 'J', value: 9 },
];

const Example2 = (): React.ReactElement => {
  const ref: any = useRef();
  const width = 400;
  const height = 300;
  const padding = 30;

  useEffect(() => {
    const svg = d3.select(ref.current).attr('width', width).attr('height', height);
    const xScale = d3
      .scaleBand()
      .rangeRound([padding, width - padding])
      .padding(0.1)
      .domain(
        dataset.map((d) => {
          return d.name;
        }),
      );

    const yScale = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(dataset, (d) => {
          return d.value;
        }) ?? 0,
      ])
      .range([height - padding, padding]);

    svg
      .append('g')
      .attr('transform', 'translate(' + 0 + ',' + (height - padding) + ')')
      .call(d3.axisBottom(xScale));

    svg
      .append('g')
      .attr('transform', 'translate(' + padding + ',' + 0 + ')')
      .call(d3.axisLeft(yScale));

    svg
      .append('g')
      .selectAll('rect')
      .data(dataset)
      .enter()
      .append('rect')
      .attr('x', (d) => {
        return xScale(d.name) ?? 0;
      })
      .attr('y', (d) => {
        return yScale(d.value);
      })
      .attr('width', xScale.bandwidth())
      .attr('height', (d) => {
        return height - padding - yScale(d.value);
      })
      .attr('fill', 'steelblue');
  }, []);

  return (
    <Layout>
      <h1>Bar Chart</h1>
      <svg ref={ref} />
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default Example2;
