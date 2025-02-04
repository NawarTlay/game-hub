import { 
    FaWindows,
    FaPlaystation,
    FaXbox,
    FaApple,
    FaLinux,
    FaAndroid
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { Platform } from '../hooks/useGAmes'
import { HStack, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface Props {
    platforms: Platform[];
}

const PlatformIconList = ({platforms}: Props) => {
    const iconMaps: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        nintendo: SiNintendo,
        web: BsGlobe
    }

    return (
    <HStack margin={1}>
        {platforms.map(( platform ) => <Icon as={iconMaps[platform.slug]}  key={platform.id} color={'gray.500'} >{platform.name}</Icon>)}
    </HStack>
  )
}

export default PlatformIconList
 