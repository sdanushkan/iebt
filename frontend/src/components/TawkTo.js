import React, { useEffect } from 'react';

const TawkTo = () => {
  useEffect(() => {
    const tawk = document.createElement('script');
    tawk.src = 'https://embed.tawk.to/YOUR_PROPERTY_ID/default';
    tawk.async = true;
    tawk.charset = 'UTF-8';
    tawk.setAttribute('crossorigin', '*');
    document.body.appendChild(tawk);

    return () => {
      document.body.removeChild(tawk);
    };
  }, []);

  return null;
};

export default TawkTo;
