

import React, { useState } from "react";

interface HospitalCardProps {
  name: string;
  address: string;
}

const HospitalCard: React.FC<HospitalCardProps> = ({ name, address }) => {
  const handleOpenGoogleMaps = () => {
    const formattedAddress = address.replace(/\s/g, "+");
    const url = `https://www.google.com/maps/search/?api=1&query=${formattedAddress}`;
    window.open(url, "_blank");
  };

  const [copied, setCopied] = useState<boolean>(false);

  const copyToClipboard = () => {
    const textToCopy = `${name}\n${address}`;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset the "copied" state after 2 seconds
      })
      .catch((error) => console.error("Copy failed:", error));
  };

  return (
    <div className="max-w-sm p-4 bg-white flex flex-col justify-between border border-gray-200  bg-gray-100 rounded-lg  hover:bg-gray-200">
      <div className="flex justify-end">
        <button onClick={handleOpenGoogleMaps}>
          <img
            className="w-8 h-8 cursor-pointer"
            src="src/assets/google-maps.svg"
            alt="Google Maps"
          />
        </button>
      </div>
      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
        {name}
      </h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {address}
      </p>
      <div className="flex">
        <button
          className="inline-flex items-center text-gray-900 hover:text-white btn btn-minimal focus:ring-2 focus:outline-none focus:ring-Secondary font-medium rounded-lg text-sm text-center mr-2 mb-2"
          onClick={copyToClipboard}
        >
          {copied ? "Copied" : "Copy address"}
        </button>
      </div>
    </div>
  );
};

export default HospitalCard;
