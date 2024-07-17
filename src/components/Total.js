import React, { useEffect, useState } from 'react';
import Profile1 from '@img/verified.png';
import Profile2 from '@img/safety.png';
import Profile3 from '@img/government.png';
import Profile4 from '@img/partners.png';
import Profile5 from '@img/education.png';

const TotalsComponent = () => {
  const [totals, setTotals] = useState([]);

  useEffect(() => {
    const fetchTotals = async () => {
      try {
        const response = await fetch('https://okocenet-72f35a89c2ef.herokuapp.com/totals');
        if (!response.ok) {
          throw new Error('Failed to fetch totals');
        }
        const data = await response.json();
        setTotals(data.data.filter(item => ['usaha', 'swasta', 'pemerintah', 'penggerak', 'pendidikan'].includes(item.nama)));
      } catch (error) {
        console.error('Error fetching totals:', error);
      }
    };

    fetchTotals();
  }, []);

  const renderProfileImage = (nama) => {
    switch (nama) {
      case 'usaha':
        return <img src={Profile1} alt="User Icon" className="mr-4" />;
      case 'swasta':
        return <img src={Profile2} alt="Event Icon" className="mr-4" />;
      case 'pemerintah':
        return <img src={Profile3} alt="Training Icon" className="mr-4" />;
      case 'penggerak':
        return <img src={Profile4} alt="Consultation Icon" className="mr-4" />;
      case 'pendidikan':
        return <img src={Profile5} alt="Community Icon" className="mr-4" />;
      default:
        return null;
    }
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const getBackgroundColor = (nama) => {
    switch (nama) {
      case 'usaha':
        return 'bg-yellow-100';
      case 'swasta':
        return 'bg-zinc-100';
      case 'pemerintah':
        return 'bg-purple-100';
      case 'penggerak':
        return 'bg-blue-100';
      case 'pendidikan':
        return 'bg-teal-100';
      default:
        return '';
    }
  };

  return (
    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:w-10/12 lg:mx-auto lg:grid-cols-3 p-4">
      {totals.map((item) => (
        <div key={item.id} className={`${getBackgroundColor(item.nama)} rounded-lg p-4 flex items-center ${item.nama === 'penggerak' ? 'lg:col-span-2' : ''}`}>
          {renderProfileImage(item.nama)}
          <div>
            <div className="text-2xl font-bold">{item.total}</div>
            <div className="text-zinc-600">Total {capitalizeFirstLetter(item.nama)}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TotalsComponent;