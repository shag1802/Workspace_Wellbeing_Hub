
import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
    width: 100%;
    background: url(https://as1.ftcdn.net/v2/jpg/05/76/79/34/1000_F_576793436_QFK86xOLKznPDIoUh1Tad3q3Cukc3UxT.jpg) center/108% no-repeat #000;
    height: 30vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled(Typography)`
    font-size: 50px;
    color: #FFFFFF;
    line-height: 1
`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    background: #FFFFFF;
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