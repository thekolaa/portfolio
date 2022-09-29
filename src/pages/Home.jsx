import React from 'react'
import { Avatar, Box, Center, Flex, Icon, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Image, Wrap, WrapItem, Tooltip } from '@chakra-ui/react';
import { BiMap } from "react-icons/bi"
import { FaCode } from "react-icons/fa";


function PageHome() {
    const baseUrl = "https://res.cloudinary.com/diigkcc6g/image/upload"
    const avatar = `${baseUrl}/v1664423550/Language%20and%20Frameworks/avatar_1_mo7aai.webp`;
    const tools = [
        { name: "Javascript", path: `${baseUrl}/v1663337071/Language%20and%20Frameworks/javascript_awlynx.webp` },
        { name: "React JS", path: `${baseUrl}/v1663337072/Language%20and%20Frameworks/react_cwb34c.webp` },
        { name: "Vue JS", path: `${baseUrl}/v1663337072/Language%20and%20Frameworks/vue_pb7bxy.webp` },
        { name: "Redux JS", path: `${baseUrl}/v1663337072/Language%20and%20Frameworks/redux_zajahc.webp` },
        { name: "Recoil JS", path: `${baseUrl}/v1663337072/Language%20and%20Frameworks/recoil_dertjo.webp` },
        { name: "Node JS", path: `${baseUrl}/v1663337072/Language%20and%20Frameworks/node_zynya4.webp` },
        { name: "Express JS", path: `${baseUrl}/v1663337071/Language%20and%20Frameworks/express_hijfg0.webp` },
        { name: "Nest JS", path: `${baseUrl}/v1663337072/Language%20and%20Frameworks/nest_lxeh6u.webp` },
        { name: "GraphQL", path: `${baseUrl}/v1663337072/Language%20and%20Frameworks/graphql_qrm32k.webp` },
        { name: "Mongo DB", path: `${baseUrl}/v1663337071/Language%20and%20Frameworks/mongodb_gaotyp.webp` },
        { name: "Redis", path: `${baseUrl}/v1663337072/Language%20and%20Frameworks/redis_fwxedc.webp` },
        { name: "Dart Programming", path: `${baseUrl}/v1663337071/Language%20and%20Frameworks/dart_txer98.webp` },
        { name: "Flutter", path: `${baseUrl}/v1663337071/Language%20and%20Frameworks/flutter_ztkmin.webp` },
        { name: "Solidity", path: `${baseUrl}/v1663337072/Language%20and%20Frameworks/solidity_rxonns.webp` },
        { name: "GitHub", path: `${baseUrl}/v1663337071/Language%20and%20Frameworks/github_dayldm.webp` },
        { name: "Socket IO", path: `${baseUrl}/v1663337072/Language%20and%20Frameworks/socketio_mx1rxo.webp` }

    ]
    return <>
        <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} mx={{ base: "3", md: "20", lg: "20", xl: "96" }} mb={"20"}>
            <Box p={8} display={"block"}>
                <Flex mt={"14"} display={{ base: "block", md: "flex", lg: "flex" }} >
                    <Center>
                        <Avatar size='2xl' name='Kolya Nikolai Madridano' src={avatar} />
                    </Center>
                    <Center>
                        <Box ml={{ base: "0", md: "20" }} mt={{ base: "10", md: "0" }} textAlign={{ base: "center", md: "start", lg: "start" }} >
                            <Text fontSize={{ base: "x-large", md: "6xl", lg: "6xl" }} fontWeight={"black"}>Kolya Madridano</Text>
                            <Flex justify={{ base: "center", md: "start", lg: "start" }}>
                                <Icon as={FaCode} h={6} color='gray.600' />&nbsp;
                                <Text fontSize={"medium"} fontWeight={"medium"} color={"gray.600"} lineHeight={"1.5"}>Software Engineer</Text>
                            </Flex>
                            <Flex justify={{ base: "center", md: "start", lg: "start" }}>
                                <Icon as={BiMap} h={5} color='gray.500' />&nbsp;
                                <Text fontSize={"sm"} color={"gray.500"} lineHeight={"1.3"}>Lives in Cagayan de Oro City, Philippines</Text>
                            </Flex>
                        </Box>
                    </Center>
                </Flex>
                <Text fontSize={{ base: "sm", md: "xl", lg: "xl" }} fontWeight={"bold"} color={"gray"} mt={"20"}>About me</Text>
                <Text color={"gray"} fontSize={{ base: "sm", md: "larger", lg: "larger" }} mt={"3"}>
                    Hey! I'm Kolya Nikolai Madridano. I work as a committed remote Fullstack Developer and Backend Software Engineer. My primary areas of interest are learning new things, backends, web services, and working with proprietary or closed-source software and open-source projects. I started writing code in 11th grade, which was in 2017, and I got my first job in development in the middle of 2018. Coding and cooking are two of my favorite pastimes, along with watching movies, operas, and reading George R.R. Martin's The Song of Ice and Fire.
                </Text>


                <Text fontSize={{ base: "sm", md: "xl", lg: "xl" }} fontWeight={"bold"} color={"gray"} mt={"20"}>Technical Skills</Text>
                <Text fontSize={{ base: "sm", md: "large", lg: "large" }} fontWeight={"normal"} color={"gray"} mt={"3"}>Libraries, Frameworks and Softwares I've used in my recent projects</Text>

                <Wrap spacing={"10"} mt={"10"} justify={{ base: "center", md: "start", lg: "start" }}>
                    {tools.map((value) => {
                        return <WrapItem key={value.name}>
                            <Tooltip label={value.name} hasArrow={true}>
                                <Image
                                    boxSize={{ base: '60px', md: '100px', lg: '100px' }}
                                    objectFit='fill'
                                    src={value.path}
                                    alt={value.name} />
                            </Tooltip>
                        </WrapItem>
                    })}
                </Wrap>
                <Tabs mt={"20"} >
                    <TabList>
                        <Tab>
                            <Text fontSize={{ base: "sm", md: "xl", lg: "xl" }} fontWeight={"bold"} color={"gray"}>Educational Background</Text>

                        </Tab>
                        <Tab>
                            <Text fontSize={{ base: "sm", md: "xl", lg: "xl" }} fontWeight={"bold"} color={"gray"}>Work Experience</Text>
                        </Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Box mt={"5"}>
                                <Text color={"gray"} fontSize={{ base: "md", md: "large", lg: "large" }} fontWeight={{ base: "semibold", md: "normal", lg: "normal" }}>
                                    2018-2022 <Box display={"inline"} fontWeight={"medium"}>PHINMA Cagayan de Oro College</Box> -  <i>Max Suniel Street, Carmen, Cagayan de Oro City</i>
                                </Text>
                                <Text color={"gray.400"} fontSize={{ base: "sm", md: "medium", lg: "medium" }}>
                                    Bachelor of Science in Information Technology - Web Development (Graduate)
                                </Text>
                            </Box>
                            <Box mt={"5"}>
                                <Text color={"gray"} fontSize={{ base: "md", md: "large", lg: "large" }} fontWeight={{ base: "semibold", md: "normal", lg: "normal" }}>
                                    2016-2018 <Box display={"inline"} fontWeight={"medium"}>Cagayan de Oro National High School - Senior High School</Box> -  <i>8th 2nd St. Nazareth Cagayan de Oro City</i>
                                </Text>
                                <Text color={"gray.400"} fontSize={{ base: "sm", md: "medium", lg: "medium" }}>
                                    Information and Communications Technology
                                </Text>
                            </Box>
                            <Box mt={"5"}>
                                <Text color={"gray"} fontSize={{ base: "md", md: "large", lg: "large" }} fontWeight={{ base: "semibold", md: "normal", lg: "normal" }}>
                                    2011-2016 <Box display={"inline"} fontWeight={"medium"}>Cagayan de Oro National High School</Box> -  <i>8th 2nd St. Nazareth Cagayan de Oro City</i>
                                </Text>
                                <Text color={"gray.400"} fontSize={{ base: "sm", md: "medium", lg: "medium" }}>
                                    Mechanical Drafting
                                </Text>
                            </Box>
                            <Box mt={"5"}>
                                <Text color={"gray"} fontSize={{ base: "md", md: "large", lg: "large" }} fontWeight={{ base: "semibold", md: "normal", lg: "normal" }}>
                                    2005-2011 <Box display={"inline"} fontWeight={"medium"}>KM5 Elementary School</Box> -  <i>Km5. Upper Balulang, Cagayan de Oro City</i>
                                </Text>
                            </Box>
                        </TabPanel>
                        <TabPanel>
                            <Box mt={"5"}>
                                <Text color={"gray"} fontSize={{ base: "md", md: "large", lg: "large" }} fontWeight={{ base: "semibold", md: "normal", lg: "normal" }}>
                                    2020-2020 <Box display={"inline"} fontWeight={"medium"}>Dianping, China</Box> -  <i>Remote Backend Software Engineer</i>
                                </Text>
                                <Text color={"gray.400"} fontSize={{ base: "sm", md: "medium", lg: "medium" }}>
                                    I was assigned as the Backend Software Engineer, doing code reviews, helping newly hired developers, and proposing features for the product.
                                </Text>
                            </Box>
                            <Box mt={"5"}>
                                <Text color={"gray"} fontSize={{ base: "md", md: "large", lg: "large" }} fontWeight={{ base: "semibold", md: "normal", lg: "normal" }}>
                                    2019 -2020  <Box display={"inline"} fontWeight={"medium"}>Salesforce,  Atlanta</Box> -  <i>Remote Backend Developer</i>
                                </Text>
                                <Text color={"gray.400"} fontSize={{ base: "sm", md: "medium", lg: "medium" }}>
                                    I worked as a full-time backend developer for a specific project that is affiliated with a salesforce company
                                </Text>
                            </Box>
                            <Box mt={"5"}>
                                <Text color={"gray"} fontSize={{ base: "md", md: "large", lg: "large" }} fontWeight={{ base: "semibold", md: "normal", lg: "normal" }}>
                                    2018-2019  <Box display={"inline"} fontWeight={"medium"}>Lamida Fashion, Vietnam</Box> -  <i>Remote Frontend Web Developer</i>
                                </Text>
                                <Text color={"gray.400"} fontSize={{ base: "sm", md: "medium", lg: "medium" }}>
                                    I worked as a full-time frontend developer, responsible for the admin dashboard. This was the first job I landed while studying.
                                </Text>
                            </Box>

                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>

        </Stack>

    </>
}

export default PageHome