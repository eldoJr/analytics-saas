import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export const PageViewsChart = ({ data }: { data: number[] }) => {
  return (
    <Line
      data={{
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
          {
            label: 'Page Views',
            data: data,
            borderColor: '#3b82f6',
          },
        ],
      }}
    />
  );
};