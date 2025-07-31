import { useState } from 'react';

const useCampaignForm = (addCampaign) => {
  const currentYear = new Date().getFullYear();
  const minYear = 1900;
  const maxYear = currentYear + 5;

  const [formData, setFormData] = useState({
    name: '',
    startDate: '',
    endDate: '',
    clicks: '',
    cost: '',
    revenue: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    startDate: '',
    endDate: '',
    clicks: '',
    cost: '',
    revenue: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'name':
        if (!value.trim()) error = 'Name is required';
        else if (value.length > 50) error = 'Maximum 50 characters';
        break;

      case 'startDate':
      case 'endDate':
        if (!value) error = 'Date is required';
        else if (new Date(value) < new Date(2000, 0, 1)) {
          error = 'Invalid date';
        }
        break;

      case 'clicks':
        if (!value) error = 'Clicks are required';
        else if (isNaN(value)) error = 'Must be a number';
        else if (value < 0) error = 'Cannot be negative';
        else if (value > 1000000) error = 'Maximum 1,000,000';
        break;

      case 'cost':
      case 'revenue':
        if (!value) error = 'This field is required';
        else if (isNaN(value)) error = 'Must be a number';
        else if (value < 0) error = 'Cannot be negative';
        else if (value > 10000000) error = 'Maximum $10,000,000';
        break;

      default:
        break;
    }

    return error;
  };

  const validateYear = (dateString) => {
    if (!dateString) return false;
    const year = new Date(dateString).getFullYear();
    return year >= minYear && year <= maxYear;
  };

  const validateDates = (startDate, endDate) => {
    const errors = { startDate: '', endDate: '' };

    if (!startDate) {
      errors.startDate = 'Start date is required';
    } else if (!validateYear(startDate)) {
      errors.startDate = `Year must be between ${minYear} and ${maxYear}`;
    }

    if (!endDate) {
      errors.endDate = 'End date is required';
    } else if (!validateYear(endDate)) {
      errors.endDate = `Year must be between ${minYear} and ${maxYear}`;
    } else if (startDate && new Date(endDate) < new Date(startDate)) {
      errors.endDate = 'End date must be after start date';
    }

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (name === 'startDate' || name === 'endDate') {
      const dateErrors = validateDates(
        name === 'startDate' ? value : formData.startDate,
        name === 'endDate' ? value : formData.endDate
      );
      setErrors(prev => ({ ...prev, ...dateErrors }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors(prev => ({
      ...prev,
      [name]: validateField(name, value)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const dateErrors = validateDates(formData.startDate, formData.endDate);
    const newErrors = {
      ...dateErrors,
      name: !formData.name.trim() ? 'Name is required' : '',
      clicks: !formData.clicks ? 'Clicks are required' : '',
      cost: !formData.cost ? 'Cost is required' : '',
      revenue: !formData.revenue ? 'Revenue is required' : ''
    };

    setErrors(newErrors);
    
    const hasErrors = Object.values(newErrors).some(error => error !== '');
    if (hasErrors) {
      setIsSubmitting(false);
      return;
    }

    addCampaign({
      id: Date.now(),
      ...formData,
      clicks: parseInt(formData.clicks),
      cost: parseFloat(formData.cost),
      revenue: parseFloat(formData.revenue)
    });

    setFormData({
      name: '',
      startDate: '',
      endDate: '',
      clicks: '',
      cost: '',
      revenue: ''
    });

    setIsSubmitting(false);
  };

  return {
    formData,
    errors,
    isSubmitting,
    minYear,
    maxYear,
    handleChange,
    handleBlur,
    handleSubmit
  };
};

export default useCampaignForm;