
import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
    width: 100%;
    background: url(https://as1.ftcdn.net/v2/jpg/05/76/79/34/1000_F_576793436_QFK86xOLKznPDIoUh1Tad3q3Cukc3UxT.jpg) center/108% no-repeat #000;
    height: 42vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0.91;
`;

const Heading = styled(Typography)`
    font-size: 53px;
    color: white;
    line-height: 1;
    // font-weight: bold;
`;

const SubHeading = styled(Typography)`
    font-size: 25px;
    color: white;
    // background: #FFFFFF;
    // opacity: 0.5;
`;

const Banner = () => {
    
    return (
        <Image>
            <Heading>Workplace Wellbeing Hub</Heading>
            <SubHeading>Fostering Connection, Support, and Growth</SubHeading>
        </Image>
    )
}

export default Banner;