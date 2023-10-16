import {
  Heading,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";
import { Link as RouteLink } from "react-router-dom";

const Post = () => {
  const [formData, setformData] = useState({
    name: "",
    img: ""
  });

  const handleChange = (e) => {
    const newData = { ...formData };
    newData[e.target.id] = e.target.value;
    setformData(newData);
  };

  const AddProducts = (e) => {
    e.preventDefault();
    axios.post("https://weware.onrender.com/users", {
        name: formData.name,
        img: formData.img,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.values));
  };

  return (
    <div>
      <Heading>Post</Heading>
      <Flex
        alignItems="center"
        justifyContent="center"
      
        flexDirection={"column"}
      >
        <Heading m={"1rem"}>ADD ITEMS</Heading>
        <FormControl
          width="30%"
          boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
          p={"2rem"}
        >
          <FormLabel> Name</FormLabel>
          <Input
            type="text"
            placeholder="Name"
            id="name"
            value={formData.name}
            onChange={(e) => handleChange(e)}
          />

          <FormLabel>Images Link</FormLabel>
          <Input
            type="text"
            placeholder="Image Link"
            id="img"
            value={formData.img}
            onChange={(e) => handleChange(e)}
          />
          <Button
            mt="15px"
            width="full"
            type="submit"
            colorScheme="blue"
            onClick={(e) => AddProducts(e)}
          >
            ADD ITEMS
          </Button>
        </FormControl>
      </Flex>
      <Button><RouteLink to="/">Back</RouteLink></Button>
    </div>
  );
};

export default Post;
