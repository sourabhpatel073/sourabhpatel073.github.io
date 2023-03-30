import React from "react";

import { Element } from "react-scroll";

import { Box, Text, Heading } from "@chakra-ui/react";

import style from "./Aboutme.module.css";

const About = () => {
  return (
    <Box
      border="2px solid rgb(1, 16, 27)"
      h="100vh"
      id="about"
      className="about section"
      mb="40px"
    >
      <Heading mt="150px" color="rgb(0, 255, 162);" fontSize={35}>
        <Text as="span" color="white">
          About
        </Text>{" "}
        Me
      </Heading>

      <Text mt="50px" fontSize={"20"}>
        Hello 👋 Myself Sourabh Patel
      </Text>

      <Box
        className={style.aboutme}
        color="white"
        p={{ base: "8", "486px": "10" }}
        borderRadius={"10px"}
        bg="gray.800"
        w={{ base: "100%", "410px": "300px", "486px": "400px" }}
        m="auto"
        mt="20px"
      >
        <Text mt="15px" fontSize="16px" id="user-detail-intro">
        Aspiring Full Stack Web Developer MERN .High Adaptability to learn
            and collaborate in a rapidly changing environment and compositions.
            Eager to obtain a challenging position Which will help to expand
            learning and build skills.
        </Text>
      </Box>
    </Box>
  );
};

export default About;
