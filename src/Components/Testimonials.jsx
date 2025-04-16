import React, { useState, useEffect } from 'react';
import { getTestimonials } from '../api/services';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const data = await getTestimonials();
        setTestimonials(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load testimonials');
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (loading) return <div className="text-center py-10">Loading testimonials...</div>;
  if (error) return <div className="text-center py-10 text-red-500">{error}</div>;

  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
        <p className="text-gray-600">Testimonials from our satisfied customers</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial._id} className="p-6 bg-white rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <img 
                src={testimonial.image} 
                alt={testimonial.name} 
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h3 className="font-semibold">{testimonial.name}</h3>
                <p className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</p>
              </div>
            </div>
            <div className="flex mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-600">{testimonial.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;