import { Button, Heading, Table, TableContainer, Tbody, Td, Th, Thead, Tr, Image, Flex,Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData,deleteItem } from '../Redux/action';
import { Link as RouteLink } from 'react-router-dom';

const Home = () => {
    const dispatch=useDispatch();
    const data=useSelector(state=>state.reducer.data.user);

    useEffect(()=>{
        if(data.length===0){
            dispatch(getData())
        }
    },[dispatch,data.length])

    const handleDelete = (_id) => {
        let newData = data.filter((item) => item._id !== _id);
        dispatch(deleteItem(_id, newData)).then(() => dispatch(getData()));
      };
      
  return (
    <div>
        <Heading>Dashboard</Heading>
        <Flex marginLeft="5rem" gap="1rem">
            <Text>Post Data ?</Text>
            <Button><RouteLink to="/post">Post</RouteLink></Button>

        </Flex>

        <TableContainer>
            <Table>
                <Thead>
                    <Tr>
                        <Th>Title</Th>
                        <Th>Image</Th>
                        <Th>Update</Th>
                        <Th>Delete</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {data.map((e)=>
                    <Tr>
                        <Td>{e.name}</Td>
                        <Td><Image src={e.img} boxSize='10rem' alt="" /></Td>
                        <Td><Button><RouteLink to={`/edit/${e._id}`}>Update</RouteLink></Button></Td>
                        <Td><Button onClick={()=>handleDelete(e._id)}>Delete</Button></Td>
                    </Tr>
                    )}
                </Tbody>
            </Table>
        </TableContainer>
      
    </div>
  )
}

export default Home
