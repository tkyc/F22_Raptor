import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import fetchUserDetails from '../../utils/redux/actions/userDetailsActions';
import { Grid, Paper, Box, Typography, Tab, Tabs, AppBar, ListItem, List, Button, useMediaQuery, Divider, Hidden } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';
import Loader from '../common/loader/loader';
import styles from './styling/styles';
import NewsItem from './newsItem/NewsItem';

const Home = () => {

    const [tab, setTab] = useState(0);
    const userDetails = useSelector(state => state.user.details);
    const isFetching = useSelector(state => state.user.isFetching);
    //TODO: Make api calls to fetch items
    const newsItems = [{image: "/images/0.png", title: "Itaque earum rerum error voloptatem", date: "1 January 2025"},
                       {image: "/images/1.png", title: "Facere possimus eum iure", date: "2 January 2025"},
                       {image: "/images/2.png", title: "Tenetur a sapiente delectus", date: "3 January 2025"}];
    const carouselItems = [{path: "/images/0.png",
                            title: "Finibus Bonorum",
                            content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque"},
                           {path: "/images/1.png",
                            title: "Xcepteur Sint",
                            content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui quod maxime placeat facere possimus eum iure reprehenderit qui in ea voluptate"},
                           {path: "/images/2.png",
                            title: "Optio Cumque",
                            content: "Itaque earum rerum hic tenetur a sapiente delectus voluptatum deleniti atque corrupti"}];
    const dispatch = useDispatch();
    const history = useHistory();

    const handleTabSwitch = (event, tab) => {
        setTab(tab);
    };

    const launchGame = () => {
        history.push("/game");
    };

    const a11yProps = (index) => {
        return {
            id: `scrollable-auto-tab-${index}`,
            'aria-controls': `scrollable-auto-tabpanel-${index}`,
        };
    };

    const TabPanel = (props) => {
        const { children, value, index, ...other } = props;
        
        return (
            <Typography component="div"
                        role="tabpanel"
                        hidden={value !== index}
                        id={`scrollable-auto-tabpanel-${index}`}
                        aria-labelledby={`scrollable-auto-tab-${index}`}
                        {...other}>

                {value === index && <Box p={3}>{children}</Box>}
            </Typography>
        );
    };

    const jumbotronCarousel = (items) => (
        <Box display={{xs: "none", md: "block", lg: "block"}}>
            <Carousel>
                {
                    items.map((element, index) => (
                        <div style={styles.jumbotronCarousel} key={index}>
                            <div style={styles.jumbotronCarouselText} key={index}>
                                <div style={styles.jumbotronCarouselTextH3}>
                                    <Typography variant="h3">{element.title}</Typography>
                                </div>
                                <div style={styles.jumbotronCarouselTextH5}>
                                    <Typography variant="h5">{element.content}</Typography>
                                </div>
                            </div>
                            <div style={styles.jumbotronCarouselImages(element.path)} src={element}/>
                        </div>
                    ))
                }
            </Carousel>
        </Box>
    );

    const newsContent = (
        <TabPanel value={tab} index={0}>
            <List>
                {
                    newsItems.map((element, index) => (
                        <ListItem style={styles.newsItem} key={index}><NewsItem {...element}/></ListItem>
                    ))
                }
            </List>
        </TabPanel>
    );

    const gameContent = (
        <TabPanel value={tab} index={1}>
            <Button style={styles.launchBtn} variant="contained" color="primary" onClick={launchGame}>LAUNCH</Button>
        </TabPanel>
    );

    const heroContent = (
        <div>
            <AppBar style={styles.heroTabBar} position="static">
                <Tabs value={tab}
                      onChange={handleTabSwitch}
                      variant="scrollable"
                      scrollButtons="auto">
                    <Tab label="NEWS" {...a11yProps(0)}/>
                    <Tab label="GAME" {...a11yProps(1)}/>
                </Tabs>
            </AppBar>
            {newsContent}
            {gameContent}
        </div>
    );

    useEffect(() => {
        //Incase another component makes the call
        if (!isFetching && !userDetails) dispatch(fetchUserDetails());
    }, []);

    return (
        isFetching || !userDetails? <Loader/> :
        <div>
            <Paper style={styles.jumbotronContainer} elevation={24} square>
                {jumbotronCarousel(carouselItems)}
            </Paper>
            <Grid style={styles.contentContainer} container spacing={2}>
                <Hidden smDown>
                    <Grid item xs={12} sm={12} md={3}>
                        <Paper style={styles.homeContentContainer} elevation={15} square>
                        </Paper>
                    </Grid>
                </Hidden>
                <Grid item xs={12} sm={12} md={6}>
                    <Paper style={styles.homeContentContainer} elevation={15} square>
                        {heroContent}
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={3}>
                    <Paper style={styles.homeContentContainer} elevation={15} square>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default Home;