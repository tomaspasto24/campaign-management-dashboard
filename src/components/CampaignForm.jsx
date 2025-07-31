import useCampaignForm from '../hooks/useCampaignForm';

const CampaignForm = ({ addCampaign }) => {
  const {
    formData,
    errors,
    isSubmitting,
    minYear,
    maxYear,
    handleChange,
    handleBlur,
    handleSubmit
  } = useCampaignForm(addCampaign);
  return (
    <form onSubmit={handleSubmit} className="campaign-form">
      <h2>Add New Campaign</h2>

      <div className={`form-group ${errors.name ? 'error' : ''}`}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
          maxLength="50"
          required
        />
        {errors.name && <span className="error-message">{errors.name}</span>}
      </div>

      <div className={`form-group ${errors.startDate ? 'error' : ''}`}>
        <label>Start Date:</label>
        <input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          min={`${minYear}-01-01`}
          max={`${maxYear}-12-31`}
        />
        {(errors.startDate) && (
          <span className="error-message">{errors.startDate}</span>
        )}
      </div>

      <div className={`form-group ${errors.endDate ? 'error' : ''}`}>
        <label>End Date:</label>
        <input
          type="date"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
          min={formData.startDate || `${minYear}-01-01`}
          max={`${maxYear}-12-31`}
        />
        {errors.endDate && (
          <span className="error-message">{errors.endDate}</span>
        )}
        <div className="date-hint">
          Allowed year range: {minYear}-{maxYear}
        </div>
      </div>

      <div className={`form-group ${errors.clicks ? 'error' : ''}`}>
        <label>Clicks:</label>
        <input
          type="number"
          name="clicks"
          value={formData.clicks}
          onChange={handleChange}
          onBlur={handleBlur}
          min="0"
          max="1000000"
          step="1"
          required
        />
        {errors.clicks && (
          <span className="error-message">{errors.clicks}</span>
        )}
      </div>

      <div className={`form-group ${errors.cost ? 'error' : ''}`}>
        <label>Cost ($):</label>
        <input
          type="number"
          name="cost"
          value={formData.cost}
          onChange={handleChange}
          onBlur={handleBlur}
          min="0"
          max="10000000"
          step="0.01"
          required
        />
        {errors.cost && <span className="error-message">{errors.cost}</span>}
      </div>

      <div className={`form-group ${errors.revenue ? 'error' : ''}`}>
        <label>Revenue ($):</label>
        <input
          type="number"
          name="revenue"
          value={formData.revenue}
          onChange={handleChange}
          onBlur={handleBlur}
          min="0"
          max="10000000"
          step="0.01"
          required
        />
        {errors.revenue && (
          <span className="error-message">{errors.revenue}</span>
        )}
      </div>

      <button type="submit" className="submit-btn" disabled={isSubmitting}>
        {isSubmitting ? 'Validating...' : 'Add Campaign'}
      </button>
    </form>
  );
};

export default CampaignForm;