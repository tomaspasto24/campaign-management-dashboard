const CampaignList = ({ campaigns, deleteCampaign, requestSort, sortConfig }) => {
  return (
    <div className="campaign-list">
      <h2>Campaigns</h2>
      {campaigns.length === 0 ? (
        <p>No campaigns available. Add one to get started!</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th onClick={() => requestSort('name')}>
                Name {sortConfig.key === 'name' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
              </th>
              <th onClick={() => requestSort('startDate')}>
                Start Date {sortConfig.key === 'startDate' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
              </th>
              <th onClick={() => requestSort('endDate')}>
                End Date {sortConfig.key === 'endDate' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
              </th>
              <th>Clicks</th>
              <th>Cost ($)</th>
              <th>Revenue ($)</th>
              <th onClick={() => requestSort('profit')}>
                Profit ($) {sortConfig.key === 'profit' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
              </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map(campaign => (
              <tr key={campaign.id}>
                <td>{campaign.name}</td>
                <td>{new Date(campaign.startDate).toLocaleDateString()}</td>
                <td>{new Date(campaign.endDate).toLocaleDateString()}</td>
                <td>{campaign.clicks.toLocaleString()}</td>
                <td>{campaign.cost.toFixed(2)}</td>
                <td>{campaign.revenue.toFixed(2)}</td>
                <td className={campaign.revenue - campaign.cost >= 0 ? 'positive' : 'negative'}>
                  {(campaign.revenue - campaign.cost).toFixed(2)}
                </td>
                <td>
                  <button 
                    onClick={() => deleteCampaign(campaign.id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CampaignList;