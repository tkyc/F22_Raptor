const styles = {
    container: {
        margin: "8em 0 8em 0",
        padding: "0 10em 0 10em"
    },

    jumbotronContainer: {
        height: "100%",
        width: "100%",
        backgroundColor: "#17202a",
        marginBottom: "4em"
    },

    jumbotronCarousel: {
        width: "100%",
        height: "30em"
    },

    jumbotronCarouselText: {
        position: "absolute",
        textAlign: "left",
        color: "white",
        padding: "5em 0 0 5em"
    },

    jumbotronCarouselTextH3: {
        marginBottom: "1em"
    },

    jumbotronCarouselTextH5: {
        width: "40em"
    },

    jumbotronCarouselImages: (image) => ({
        width: "100%",
        height: "100%",
        backgroundSize: "cover",
        background: `url(${image}) no-repeat`
    }),

    homeContentContainer: {
        width: "100%",
        height: "50em",
        backgroundColor: "#424949"
    },

    newsItem: {
        marginBottom: "2em"
    },

    heroTabBar: {
        backgroundColor: "#17202a",
        zIndex: "1"
    },

    launchBtn: {
        width: "30em",
        height: "10em"
    }
};

export default styles;