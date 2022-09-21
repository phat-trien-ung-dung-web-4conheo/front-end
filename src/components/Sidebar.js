import React from "react";

const Sidebar = () => {
  const sidebarIconArray = [
    {
      id: 1,
      name: "Dashboard",
      icon: "/assets/icons/Dashboard.svg",
    },
    {
      id: 2,
      name: "Campaigns",
      icon: "/assets/icons/campaign.svg",
    },
    {
      id: 2,
      name: "Campaigns",
      icon: "/assets/icons/Payment.svg",
    },
  ];
  return (
    <div className="py-10 px-[14px]">
      {sidebarIconArray.map((item) => (
        <div key={item.id} className="flex items-center py-4">
          <img src={item.icon} alt="" className="w-6 h-6 mr-4" />
          <p className="text-sm font-medium">{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
