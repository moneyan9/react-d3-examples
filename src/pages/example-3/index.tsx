import * as d3 from 'd3';
import { useEffect, useRef } from 'react';

import { Layout } from '../../components/layout';

const config = {
  stroke: {
    width: 0.5,
    color: '#dadada',
  },
  circle: {
    radius: 10,
    color: '#EF410B',
  },
  dates: {
    width: undefined,
    days: {
      data: undefined,
      width: 28,
      height: 20,
    },
    months: {
      height: 20,
    },
  },
  groups: {
    width: 200,
    paddingTop: 10,
    paddingBottom: 10,
  },
  tasks: {
    height: undefined,
    task: {
      height: 15,
      gap: 15,
    },
  },
};

const createBaseContainer = (
  HTMLElement: HTMLElement,
  width: number,
  height: number,
): d3.Selection<SVGSVGElement, unknown, null, any> => {
  return d3.select(HTMLElement).append('svg').attr('width', width).attr('height', height);
};

const initializeConfig = () => {
  config.dates.width = 400;
  config.tasks.height = 400;
};

const drawCorner = (corner: d3.Selection<SVGSVGElement, unknown, null, any>) => {
  corner
    .append('line')
    .attr('x1', 0)
    .attr('x2', config.groups.width)
    .attr('y1', config.dates.months.height + config.dates.days.height)
    .attr('y2', config.dates.months.height + config.dates.days.height)
    .attr('stroke-width', config.stroke.width)
    .attr('stroke', config.stroke.color);

  corner
    .append('line')
    .attr('x1', config.groups.width)
    .attr('x2', config.groups.width)
    .attr('y1', 0)
    .attr('y2', config.dates.months.height + config.dates.days.height)
    .attr('stroke-width', config.stroke.width)
    .attr('stroke', config.stroke.color);
};

const drawDate = (corner: d3.Selection<SVGSVGElement, unknown, null, any>) => {
  corner
    .append('line')
    .attr('x1', 0)
    .attr('x2', config.dates.width)
    .attr('y1', config.dates.months.height + config.dates.days.height)
    .attr('y2', config.dates.months.height + config.dates.days.height)
    .attr('stroke-width', config.stroke.width)
    .attr('stroke', config.stroke.color);
};

const Example1 = (): React.ReactElement => {
  initializeConfig();
  const cornerRef = useRef<HTMLDivElement>();

  useEffect(() => {
    if (cornerRef.current) {
      const cornerContainer = createBaseContainer(
        cornerRef.current,
        config.groups.width,
        config.dates.months.height + config.dates.days.height,
      );
      const datesContainer = createBaseContainer(
        cornerRef.current,
        config.dates.width,
        config.dates.months.height + config.dates.days.height,
      );
      drawCorner(cornerContainer);
      drawDate(datesContainer);
    }
  }, []);

  return (
    <Layout>
      <h1>Gantt Chart</h1>
      <div ref={cornerRef} />
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default Example1;
