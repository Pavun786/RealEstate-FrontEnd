import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useState,useEffect,useContext} from "react"
import "../Card/PropertyCard.css"
import { useNavigate } from 'react-router-dom';
import { API } from '../../Global';
import img1 from "../../../src/assets/banner.webp"

import Carousel from '../../Carousel';


  function PropertyCard({children}){

    const [data,setData] = useState("")
    const navigate = useNavigate()
    const [checked, setChecked] = useState([]);
    const [radio, setRadio] = useState([]);
    const userId = localStorage.getItem("userId")

    let locations = ["Chennai","Coimbathore","Chengalpattu","Others"]
    const Prices = [
     
      {
        _id: 1,
        name: "Rs.100000 - Rs.200000",
        array: [100000, 200000],
      },
      {
        _id: 2,
        name: "Rs.200000 - Rs.400000",
        array: [200000, 400000],
      },
      {
        _id: 3,
        name: "Rs.400000 - Rs.600000",
        array: [400000,600000],
      },
      {
        _id: 4,
        name: "Rs.600000 - more",
        array: [600000,5000000],
      }
    
    ];
   
   useEffect(()=>{
      getDatas()
  },[])

  const getDatas = async()=>{

      const value = await fetch(`${API}/property/getAll/${userId}`,{
        method : "GET",
        headers:{
         "Auth": localStorage.getItem("token")
        }
      })

      const res = await value.json()

      setData(res)
  }

   
   const deleteFunction = async(id)=>{
      
    try{
    let data = await fetch(`${API}/property/${id}`,{
      method:"DELETE",
      headers : {
        "Auth" : localStorage.getItem("token")
      }
   })
   let res = await data.json()

   if(data.status == 200){
     alert("Property deleted successfully")
     getDatas()
   }
   }catch(err){
      alert(err.message)
   }

  }

  const handleFilter = (value) => {
    let all = [...checked];
    if (!all.includes(value)) {
      all.push(value);
    } else {
      all = all.filter((c) => c !== value);
    }
    setChecked(all);
  };
  
   console.log(radio)

   useEffect(() => {
    if (checked.length || radio.length){
      filterProperty();
    }else{
      getDatas()
    }
  }, [checked,radio]);

  const filterProperty = async () => {
   
    const value = await fetch(`${API}/property/property-filter`,{
      method : "POST",
      headers:{
       "Content-Type": "application/json",
       "Auth": localStorage.getItem("token")
      },
      body : JSON.stringify({checked,radio,userId})
    })

    const res = await value.json()

    if(value.status == 200){
        setData(res.property)
    }
   };



  return(

        <>
         <div> 
        <img  className="banner" src={img1}/>
         </div>
        
        <div className='card-container'>
            
          <div className='sub1'>
            
            <div className='location-filter'>
              <h5>Location :</h5>
            {locations.map((ele)=>{
               return(
                <div className='list'>
                <input
                type='checkbox'
                value={ele}
                onChange={(e)=> handleFilter(e.target.value)}
                />
                <label>{ele}</label>
                </div>
               )
            })}
            </div>
            <div className='price-filter'>
            <h5>Price :</h5>
              {Prices.map((ele,index)=>{
                return(
                  <div className='list' key={index}>
                  <input 
                  type='radio' 
                  name='price' 
                  value={ele.array}
                  onChange={(e) =>setRadio(e.target.value)}
                  />
                  {ele.name}
                </div>
                )
              })}
            </div>
            </div>
          <div className='sub2'>
          { data && data.map((ele,index)=>{
              return(
                <Card sx={{ maxWidth: 345 }} className='card'>
    
                <CardContent>
                  <div className='card-head'>
                  <Typography gutterBottom variant="h5" component="div">
                    {ele.propertyType}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                   Rs.{ele.price}
                  </Typography>
                  </div>
                  <Typography variant="body2" color="text.secondary" className='location'>
                   {ele.location}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                   {ele.description.substring(0, 30)}...more
                  </Typography>
                </CardContent>
                <CardActions className="card-btns">
                  <Button size="small" onClick={()=> navigate(`/edit/${ele._id}`)}>Edit</Button>
                  <Button size="small" onClick={()=> deleteFunction(ele._id)}>Delete</Button>
                </CardActions>
                    </Card>
              )
           })}
          </div> 
        </div>
        </>
    )

  }
  export default PropertyCard;