import React, { useState, useEffect } from 'react';
import { getWorkflowSteps } from '../api/services';
import { CheckCircle, CheckCircle2 } from "lucide-react" 
import codeImg from "../assets/code.jpg";
import { checklistItems } from "../constants";

const Workflow = () => {
  const [steps, setSteps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWorkflowSteps = async () => {
      try {
        const data = await getWorkflowSteps();
        setSteps(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load workflow steps');
        setLoading(false);
      }
    };

    fetchWorkflowSteps();
  }, []);

  if (loading) return <div className="text-center py-10">Loading workflow steps...</div>;
  if (error) return <div className="text-center py-10 text-red-500">{error}</div>;

  return (
    <div className="mt-20">
    <h2 className="text-xl sm:text-2xl lg:text-6xl text-center mt-6 tracking-wide"> 
    Interactive ads capture attention {"  "} <br></br>
      <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
      5x more effectively than static banners
      </span>
      </h2> <br></br>
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2">
        <img src={codeImg} alt="Code" />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
             {checklistItems.map((item, index) => (
                <div key = {index} className="flex mb-12">
                   <div className=" text-green-400 mx-6 bg-neutral-900 
                   h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
                </div>
             <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
             <p className="text-md text-neutral-500">{item.description}</p>
            
            </div>
            </div>

            
            ))}


        </div>
      </div>
    </div>
    
  )
}

export default Workflow
