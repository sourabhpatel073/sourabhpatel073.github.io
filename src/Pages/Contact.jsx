import React from "react";

import { Box, Stack, Image, Link, Text } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Box h="250px" id="contact">
      <Stack
        align="center"
        borderRadius="10px"
        p="20px"
        py="30px"
        m="auto"
        bg="gray.800"
       
       
        justify={"space-between"}
      >
      <Box><Text fontSize={"2xl"}>Contact</Text></Box>
        <Box display="flex"  paddingLeft="15px">
        
          <Link
            id="contact-linkedin"
            isExternal
            href="https://www.linkedin.com/in/sourabh-patel-8983b2175/"
          >
            {" "}
            <Image
              _hover={{
                cursor: "pointer",
                transform: "scale(1.1)",
                transition: "all 0.4s",
              }}
              w="30px"
              src="linkedin.png"
            ></Image>{" "}
          </Link>


          <Link
            id="contact-linkedin"
            isExternal
            href="https://www.linkedin.com/in/sourabh-patel-8983b2175/"
          >
            {" "}
            <Text fontSize={"l"}  marginLeft="5px" marginTop={"5px"} >Linked In </Text>
          </Link>
         
        </Box>

        <Box display="flex">
          
          <Link
            id="contact-github"
            isExternal
            href="https://github.com/sourabhpatel073"
          >
            {" "}
            <Image
              _hover={{
                cursor: "pointer",
                transform: "scale(1.1)",
                transition: "all 0.4s",
              }}
              w="30px"
              src="github.png"
            ></Image>{" "}
          </Link>


          <Link
            id="contact-github"
            isExternal
            href="https://github.com/sourabhpatel073"
          >
            {" "}
            <Text fontSize={"l"}  marginLeft="5px" marginTop={"5px"}>Github</Text>
          </Link>

          



        </Box>

        <Box display="flex">
         
         
          <Link
            id="contact-email"
            isExternal
            href="mailto:sourabhpatel073@gmail.com"
          >
            {" "}
            <Image
              _hover={{
                cursor: "pointer",
                transform: "scale(1.1)",
                transition: "all 0.4s",
              }}
              w="35px"
              src="gmail.png"
            ></Image>{" "}
          </Link>

          <Link
            id="contact-email"
            isExternal
            href="mailto:sourabhpatel073@gmail.com"
          >
            {" "}
            <Text fontSize={"l"}  marginLeft="5px" mt={"5px"} >Gmail </Text>
          </Link>
        </Box>

        <Box display="flex"  paddingLeft={"25px"}>
       
          <Link isExternal href="https://wa.me/+918982817857">
            {" "}
            <Image
              _hover={{
                cursor: "pointer",
                transform: "scale(1.1)",
                transition: "all 0.4s",
              }}
              w="35px"
              src="whatsapp.png"
            ></Image>{" "}
          </Link>
          <Link isExternal href="https://wa.me/+918982817857">
            {" "}
            <Text fontSize={"l"}  marginLeft="5px" marginTop={"5px"}>Whatsapp</Text>
          </Link>

         
        </Box>

        <Box display="flex" m={"auto"} paddingLeft="60px">
          
          <Link id="contact-phone" isExternal href="tel:8982817857">
            {" "}
            <Image
              _hover={{
                cursor: "pointer",
                transform: "scale(1.1)",
                transition: "all 0.4s",
              }}
              w="25px"
              src="Phone.png"
            ></Image>{" "}
          </Link>

          <Link id="contact-phone" isExternal href="tel:8982817857">
          {" "}
          <Text>+91 8982817857</Text>
        </Link>
        </Box>

       
      </Stack>
    </Box>
  );
};

export default Contact;
