import CampaignList from './components/CampaignList';
import CampaignForm from './components/CampaignForm';
import CampaignMetrics from './components/CampaignMetrics';
import useCampaigns from './hooks/useCampaigns';
import useSort from './hooks/useSort';
import './styles.css';

const App = () => {
  const { campaigns, addCampaign, deleteCampaign } = useCampaigns();
  const { sortedItems, requestSort, sortConfig } = useSort(campaigns);

  return (
    <div className="app-container">
      <h1>Campaign Management Dashboard</h1>
      <div className="dashboard">
        <div className="form-section">
          <CampaignForm addCampaign={addCampaign} />
        </div>
        <div className="list-section">
          <CampaignList
            campaigns={sortedItems}
            deleteCampaign={deleteCampaign}
            requestSort={requestSort}
            sortConfig={sortConfig}
          />
        </div>
        <div className="metrics-section">
          <CampaignMetrics campaigns={campaigns} />
        </div>
      </div>
    </div>
  );
};

export default App;