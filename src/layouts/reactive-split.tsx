import { Flex, Box, useMediaQuery } from '@chakra-ui/react';

interface ReactiveSplitProps {
    contentFirst?: React.ReactNode
    contentSecond?: React.ReactNode
    bgImageFirst?: string
    bgImageSecond?: string
    reverse?: boolean
}

function ReactiveSplit(props: ReactiveSplitProps) {
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

    const getDirection = () => {
        if (props.reverse)
            return isLargerThan768 ? 'column' : 'row'
        return isLargerThan768 ? 'row' : 'column'
    }

    return (
        <Flex
            h='100%'
            direction={getDirection()}
            justify='stretch'
            wrap='nowrap'
            align='stretch'
        >
            <Box
                flexGrow={1}
                bgImage={props.bgImageFirst}
                bgSize='cover'
                bgPosition='center'
                alignContent='flex-start'
                minW='50%'
                maxW='100%'
                minH='50%'
                maxH='100%'
                m={0}
                p={0}
                overflow='hidden'
            >
                {props.contentFirst}
            </Box>
            <Box
                flexGrow={1}
                bgImage={props.bgImageSecond}
                bgSize='cover'
                bgPosition='center'
                bgBlendMode={props.bgImageFirst ? 'multiply' : 'normal'}
                alignContent='flex-start'
                minW='50%'
                maxW='100%'
                minH='50%'
                maxH='100%'
                m={0}
                p={0}
                overflow='hidden'
            >
                {props.contentSecond}
            </Box>
        </Flex >
    );
}

export default ReactiveSplit;