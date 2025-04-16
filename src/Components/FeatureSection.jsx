import React, { useState, useEffect } from 'react';
import { getFeatures } from '../api/services';

const FeatureSection = () => {
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        const data = await getFeatures();
        setFeatures(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load features');
        setLoading(false);
      }
    };

    fetchFeatures();
  }, []);

  if (loading) return <div className="text-center py-10">Loading features...</div>;
  if (error) return <div className="text-center py-10 text-red-500">{error}</div>;

  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Our Features</h2>
        <p className="text-gray-600">Discover what makes us different</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div key={feature._id} className="p-6 bg-white rounded-lg shadow-lg">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
