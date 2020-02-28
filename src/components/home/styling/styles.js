const styles = {
    contentContainer: {
        padding: "0 1.5em 0 1.5em",
        marginBottom: "4em"
    },

    jumbotronContainer: {
        height: "100%",
        width: "100%",
        backgroundColor: "#17202a",
        margin: "4em 0 4em 0"
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