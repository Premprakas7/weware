import { Heading,Text,Input,Box,Button } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { EditData, getData } from '../Redux/action';
import { useParams } from 'react-router-dom';
import { Link as RouteLink} from 'react-router-dom';

const Update = () => {
    const {id}=useParams();
    const dispatch=useDispatch();
    const data=useSelector(state=>state.reducer.data.user)
    const [name, setName]=useState("");
    const [img, setImg]=useState("");

    const UpdateHandler=()=>{
        dispatch(EditData(id,{
            name,
            img
        })).then(()=>getData())
    }

    useEffect(()=>{
        if(!data){
            dispatch(getData())
        }
    },[dispatch,data])

    useEffect(()=>{
        if(data){
          const currentitems=data.find((item)=> item._id === id);
          if(currentitems){
            setName(currentitems.name);
            setImg(currentitems.img);
          }
        }
      },[data,id])
  return (
    <div>
        <Heading>Update</Heading>
        <Box  w="25rem" ml="35%" p="2rem" boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}> 
          
        <Text  fontSize="xl"  fontWeight="600"> Name</Text>
          <Input type="text" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)} />

          <Text fontSize="xl" fontWeight="600">Image</Text>
          <Input type="text" placeholder='Image' value={img} onChange={(e)=>setImg(e.target.value)} />
          <Button onClick={()=>UpdateHandler()}>Update</Button>
      </Box>
      <Button><RouteLink to="/">BACK</RouteLink></Button>
    </div>
  )
}

export default Update
