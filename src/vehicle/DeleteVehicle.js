import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const DeleteVehicle = () => {
    const navigate = useNavigate();
    const [redirect, setRedirect] = useState(false);
  
    useEffect(() => {
      const params = new URLSearchParams(window.location.search);
      const id = params.get('id');
  
      axios
        .delete(`https://localhost:7070/api/Vehicles/${id}`)
        .then((response) => {
          setRedirect(true);
        })
        .catch((error) => {
          setRedirect(true);
        });
    }, []);
  
    useEffect(() => {
      if (redirect) {
        navigate('/'); 
      }
    }, [redirect, navigate]);

    return (
        <div>
        ELIMINAR
        </div>
      );
  };




export default DeleteVehicle;
