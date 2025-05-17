import React from "react";

import {
  Box,
  Heading,
  SimpleGrid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";

import style from "./skills.module.css";

const Tech_Stack = [
  { img: "HTML.png", text: "HTML 5", w: "70px", w2: "40px" },

  { img: "CSS.png", text: "CSS 3", w: "80px", w2: "46px" },

  { img: "Javascript.png", text: "Javascript", w: "80px", w2: "46px" },

  { img: "Typescript.png", text: "Typescript", w: "111px", w2: "55px" },

  { img: "React.png", text: "React", w: "80px", w2: "40px" },

  { img: "react-router.png", text: "React Router", w: "121px", w2: "60px" },

  { img: "Redux.png", text: "Redux", w: "80px", w2: "40px" },

  { img: "Chakra ui.png", text: "Chakra UI", w: "80px", w2: "40px" },

  { img: "Node js.png", text: "Node JS", w: "80px", w2: "40px" },

  { img: "Mongo db.png", text: "Mongo DB", w: "80px", w2: "40px" },

  { img: "angular.png", text: "Angular", w: "80px", w2: "40px" },

  { img: "django.png", text: "Django", w: "80px", w2: "40px" },

  { img: "python.png", text: "Python", w: "80px", w2: "40px" },
];

const tools=[
   { img: "https://cdn.worldvectorlogo.com/logos/postman.svg", text: "Postman", w: "80px", w2: "46px" },
   { img: "https://cdn.iconscout.com/icon/free/png-256/free-nodemon-3550842-2970427.png", text: "Nodemon", w: "80px", w2: "46px" },
   { img: "https://cdn.icon-icons.com/icons2/2389/PNG/512/netlify_logo_icon_145039.png", text: "Netlify", w: "80px", w2: "46px" },
   { img: "https://assets.vercel.com/image/upload/front/favicon/vercel/152x152.png", text: "Vercel", w: "80px", w2: "46px" },
   { img: "render.png", text: "Render", w: "80px", w2: "46px" },
   { img: "docker.png", text: "Docker", w: "80px", w2: "46px" },
  ]

const Skills = () => {
  return (
    <Box>
       <Box border="2px solid rgb(1, 16, 27)" id="skills" marginBottom="50px">
      <Heading mt="40px" color="rgb(0, 255, 162);" fontSize={35}>
        <Text as="span" color="white">
          My
        </Text>{" "}
        Skills
      </Heading>

      <SimpleGrid
        columns={{ base: "2", "529px": "3", "848px": "4" }}
        spacing={"20px"}
        mt="50px"
      >
        {Tech_Stack.map((el, i) => {
          return (
            <GridItem
              key={Math.random()}
              className="skills-card"
              border="1px solid rgb(0, 255, 191)"
              borderRadius={"10px"}
              bg="rgb(10, 29, 44)"
            >
              <Box p="15px" display={"flex"} justifyContent="center">
                <Image
                  id={style[`animate${i}`]}
                  _hover={{ cursor: "pointer" }}
                  w={{ base: el.w2, "685px": el.w }}
                  className="skills-card-img"
                  src={el.img}
                ></Image>
              </Box>

              <Text fontSize={"20"} mb="10px" className="skills-card-name">
                {el.text}
              </Text>
            </GridItem>
          );
        })}
      </SimpleGrid>
    </Box>

    {/*   tools */}
    <Box border="2px solid rgb(1, 16, 27)" id="skills" paddingBottom="50px">
      <Heading mt="40px" color="rgb(0, 255, 162);" fontSize={35}>
       
       Tools
      </Heading>

      <SimpleGrid
        columns={{ base: "2", "529px": "3", "848px": "4" }}
        spacing={"20px"}
        mt="20px"
        
      >
        {tools.map((el, i) => {
          return (
            <GridItem
              key={Math.random()}
              className="skills-card"
              border="1px solid rgb(0, 255, 191)"
              borderRadius={"10px"}
              bg="rgb(10, 29, 44)"
            >
              <Box p="15px" display={"flex"} justifyContent="center">
                <Image
                  id={style[`animate${i}`]}
                  _hover={{ cursor: "pointer" }}
                  w={{ base: el.w2, "685px": el.w }}
                  className="skills-card-img"
                  src={el.img}
                ></Image>
              </Box>

              <Text fontSize={"20"} mb="10px" className="skills-card-name">
                {el.text}
              </Text>
            </GridItem>
          );
        })}
      </SimpleGrid>
    </Box>
    </Box>
   
  );
};

export default Skills;
