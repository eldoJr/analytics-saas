export interface AnalyticsData {
    pageViews: number;
    sessions: number;
    topPages: { url: string; visits: number }[];
  }