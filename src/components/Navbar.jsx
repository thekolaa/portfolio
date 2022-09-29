import { Box, Flex, Text, IconButton, Stack, Collapse, useColorModeValue, useBreakpointValue, useDisclosure, } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

export default function Navbar() {
    const { isOpen, onToggle } = useDisclosure();
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    return (
        <Box>
            <Flex
                bg={useColorModeValue('white', 'gray.800')}
                color={useColorModeValue('gray.600', 'white')}
                minH={'60px'}
                py={{ base: 2 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}
                px={{ base: '5', md: '48', lg: '48' }}>
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}>
                    <IconButton
                        onClick={onToggle}
                        icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'} />
                </Flex>
                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                    <Text
                        textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                        fontFamily={'heading'}
                        fontWeight={"black"}
                        color={useColorModeValue('gray.800', 'white')}>
                        KOLYA
                    </Text>

                    <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                        <DesktopNav />
                    </Flex>
                </Flex>

                <Stack
                    flex={{ base: 1, md: 0 }}
                    justify={'flex-end'}
                    direction={'row'}
                    spacing={6}>
                    <Box
                        placement={'bottom-start'}
                        fontSize={'sm'}
                        fontWeight={'normal'}
                        color={linkColor}
                        cursor={"not-allowed"}
                        _hover={{ textDecoration: 'none' }}>Contact</Box>  </Stack>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Box>
    );
}

const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');

    return (
        <Stack direction={'row'} spacing={4}>
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Box
                        placement={'bottom-start'}
                        fontSize={'sm'}
                        fontWeight={'normal'}
                        color={linkColor}
                        cursor={"not-allowed"}

                        _hover={{
                            textDecoration: 'none',
                            color: linkHoverColor,
                        }}>
                        {navItem.label}
                    </Box>
                </Box>
            ))}
        </Stack>
    );
};

const MobileNav = () => {
    const textColor = useColorModeValue('gray.600', 'gray.200');
    const bgColor = useColorModeValue('white', 'gray.800');
    return (
        <Stack bg={bgColor} p={4} display={{ md: 'none' }}>
            {NAV_ITEMS.map(item => {
                return <Stack spacing={4} key={item.label} >
                    <Flex
                        py={2}
                        justify={'space-between'}
                        align={'center'}
                        _hover={{
                            textDecoration: 'none',
                        }}>
                        <Text
                            fontWeight={600}
                            color={textColor}>
                            {item.label}
                        </Text>

                    </Flex>

                </Stack>
            })}
        </Stack>
    );
};

const NAV_ITEMS = [
    {
        label: 'Projects',
        children: [
            {
                label: 'Explore Design Work',
                subLabel: 'Trending Design to inspire you',
                href: '#',
            },
            {
                label: 'New & Noteworthy',
                subLabel: 'Up-and-coming Designers',
                href: '#',
            },
        ],
    },

];