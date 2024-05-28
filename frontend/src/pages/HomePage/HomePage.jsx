import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();
  
  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (!user) {
      return navigate("/");
    }
  }, [navigate]);
    return (
        <div>
            <h1 className='text-3xl'>Home Page</h1>
        </div>
    );
};

export default HomePage;