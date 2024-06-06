import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
	const { dispatch } = useContext(AppContext);

    const changeCurrency = (val)=>{
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        })
    }

   return (
      <select class='alert alert-info' id="currency" onChange={(event)=>changeCurrency(event.target.value)}>
        <option value="£">£ Pound</option>
        <option value="$">$ Dollar</option>
        <option value="€">€ Euro</option>
        <option value="₹">₹ Rupee</option>
      </select>	
	);
};

export default Currency;