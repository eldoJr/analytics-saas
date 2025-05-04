import { PageViewsChart } from '../components/PageViewsChart';
import { useAnalytics } from '../hooks/useAnalytics';
import { useEffect, useState } from 'react';

export const Dashboard = () => {
  const { fetchData } = useAnalytics();
  const [data, setData] = useState<number[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const analyticsData = await fetchData();
        setData([analyticsData.pageViews]); // Wrap `pageViews` in an array
      } catch (error) {
        console.error('Failed to fetch analytics data:', error);
      }
    };

    loadData();
  }, [fetchData]);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
      <div className="mt-8">
        <PageViewsChart data={data} />
      </div>
    </div>
  );
};