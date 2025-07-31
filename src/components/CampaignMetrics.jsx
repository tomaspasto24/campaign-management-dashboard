
const CampaignMetrics = ({ campaigns }) => {
  const metrics = {
    totalClicks: campaigns.reduce((sum, c) => sum + c.clicks, 0),
    totalCost: campaigns.reduce((sum, c) => sum + c.cost, 0),
    totalRevenue: campaigns.reduce((sum, c) => sum + c.revenue, 0),
    get totalProfit() { return this.totalRevenue - this.totalCost },
    get averageROI() { 
      return campaigns.length > 0 ? (this.totalProfit / this.totalCost) * 100 : 0 
    }
  };

  return (
    <div className="campaign-metrics">
      <h2>Performance Metrics</h2>
      <div className="metrics-grid">
        <div className="metric-card">
          <h3>Total Campaigns</h3>
          <p>{campaigns.length}</p>
        </div>
        <div className="metric-card">
          <h3>Total Clicks</h3>
          <p>{metrics.totalClicks.toLocaleString()}</p>
        </div>
        <div className="metric-card">
          <h3>Total Cost</h3>
          <p>${metrics.totalCost.toFixed(2)}</p>
        </div>
        <div className="metric-card">
          <h3>Total Revenue</h3>
          <p>${metrics.totalRevenue.toFixed(2)}</p>
        </div>
        <div className="metric-card">
          <h3>Total Profit</h3>
          <p className={metrics.totalProfit >= 0 ? 'positive' : 'negative'}>
            ${metrics.totalProfit.toFixed(2)}
          </p>
        </div>
        <div className="metric-card">
          <h3>Average ROI</h3>
          <p className={metrics.averageROI >= 0 ? 'positive' : 'negative'}>
            {metrics.averageROI.toFixed(2)}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default CampaignMetrics;