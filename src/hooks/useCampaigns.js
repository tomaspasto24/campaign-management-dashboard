import { useState, useEffect, useRef } from "react";

const useCampaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const initialRender = useRef(true);

  useEffect(() => {
    const savedCampaigns = localStorage.getItem("campaigns");
    if (savedCampaigns) {
      setCampaigns(JSON.parse(savedCampaigns));
    } else {
      initialRender.current = false;
    }
  }, []);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    localStorage.setItem("campaigns", JSON.stringify(campaigns));
  }, [campaigns]);

  const addCampaign = (newCampaign) => {
    setCampaigns((prevCampaigns) => [...prevCampaigns, newCampaign]);
  };

  const deleteCampaign = (id) => {
    setCampaigns((prevCampaigns) =>
      prevCampaigns.filter((campaign) => campaign.id !== id)
    );
  };

  return {
    campaigns,
    setCampaigns,
    addCampaign,
    deleteCampaign,
  };
};

export default useCampaigns;
