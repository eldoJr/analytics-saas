import { PageViewsChart } from '../components/PageViewsChart';
import { useAnalytics } from '../hooks/useAnalytics';

export const Dashboard = () => {
  const { fetchData } = useAnalytics();
  // Fetch data on component mount (useEffect here)

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
      <div className="mt-8">
        <PageViewsChart data={[100, 200, 150, 300, 400]} />
      </div>
    </div>
  );
};