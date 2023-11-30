
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://wallpapers.com/images/featured/creative-0ho3780ng1sfoloq.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
        color: #c0bfbf;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">Workplace Wellbeing Hub</Typography>
                <Text variant="h5">
                Welcome to our Workplace Wellbeing Hub, a space dedicated to fostering a culture of health and happiness. Here, employees can share experiences, access valuable resources, and engage in activities promoting holistic wellbeing. Together, let's prioritize self-care and build a thriving community within
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;