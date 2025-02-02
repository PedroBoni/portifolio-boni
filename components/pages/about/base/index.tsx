import {
  Box,
  Grid,
  Heading,
  HStack,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import React, { FC } from "react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";

const Page: FC = () => {
  const headingNode = () => {
    return (
      <HStack spacing={4} alignItems="center">
        <Box bg="white" color="gray.900" rounded="full" p={1} w={100} h={100}>
          <Image
            src="/images/common/avatar.png"
            alt="Pedro Bonifacio"
            height={100}
            width={100}
            quality={100}
            priority
          />
        </Box>
        <Box>
          <VStack spacing={2} align="left">
            <Heading as="h1" size="xl">
              Pedro Bonifacio
            </Heading>
            <Text>A little bit about me</Text>
          </VStack>
        </Box>
      </HStack>
    );
  };

  const bioDescriptionNode = () => {
    return (
      <Box className="article">
        <Text fontWeight="bold">
          System Development Technician with an interest in web design and development with attention to detail.
        </Text>
        <Text>
          I'm also a big fan of{" "}
          <Box as="span" fontWeight="bold">
            React.js
          </Box>{" "}
          and have{" "}
          <Box as="span" fontWeight="bold">
            around 1 year
          </Box>{" "}
          experience with it. I have also fiddled with React Native and C#.
          I'm eager to learn new frameworks, libraries and languages like Angulas,
          Vue.js and Gatsby. I'm also interested in learning Python.
        </Text>
        <Text>
          Though I spend most of my time writing code for building User
          Interfaces, I also played with back-end technologies like PHP and Node.JS. I like
          enjoying working in the intersection of design and development. I feel
          most productive when I'm able to design User Interfaces which not only
          look good but has a good performance as well.
        </Text>
      </Box>
    );
  };

  const socialLinksNode = () => {
    return (
      <VStack spacing={4} align="left">
        <VStack spacing={8} align="left">
          <Heading as="h2" size="lg">
            Social profiles
          </Heading>
          <Text>You can find me in the following social websites:</Text>
        </VStack>
        <Box d="flex" alignItems="center">
          <HStack spacing={4}>
            <Link
              py={2}
              px={4}
              href="https://github.com/pedroboni"
              rounded="md"
              bg="#333"
              color="#fff"
              fontWeight="bold"
              isExternal
            >
              <HStack spacing={2} alignItems="center">
                <Box as={IoLogoGithub} /> <Text>Github</Text>
              </HStack>
            </Link>
            <Link
              py={2}
              px={4}
              href="https://www.linkedin.com/in/pedroboni/"
              rounded="md"
              bg="#0e76a8"
              color="#fff"
              fontWeight="bold"
              isExternal
            >
              <HStack spacing={2} alignItems="center">
                <Box as={IoLogoLinkedin} /> <Text>LinkedIn</Text>
              </HStack>
            </Link>
          </HStack>
        </Box>
      </VStack>
    );
  };

  return (
    <Box maxW="2xl" mx="auto" px={4} py={8}>
      <Grid templateColumns="1fr">
        <Box as="section">
          <VStack spacing={8} align="left">
            {headingNode()}
            {bioDescriptionNode()}
            {socialLinksNode()}
          </VStack>
        </Box>
      </Grid>
    </Box>
  );
};

export default Page;
