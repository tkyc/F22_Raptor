import { Badge } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

export const StyledBadge = withStyles(theme => ({
	badge: {
		backgroundColor: "#44b700",
		color: "#44b700",
		"&::after": {
			position: "absolute",
      		top: 0,
      		left: 0,
      		width: "100%",
      		height: "100%",
      		borderRadius: "50%",
      		animation: "$ripple 3s infinite ease-in-out",
      		border: "1px solid currentColor",
      		content: "''"
		}
	},

	"@keyframes ripple": {
		"0%": {
			transform: "scale(.8)",
			opacity: 1
		},
		"100%": {
			transform: "scale(2.4)",
			opacity: 0
		}
	}
}))(Badge);

const styles = {
    container: {
        backgroundColor: "#17202a"
    },

    title: {
        color: "#abb2b9",
        position: "absolute",
        left: "0em",
        margin: "0 0 0 15vw"
    },

    icon: {
        color: "#abb2b9"
    },

    badgeContainer: {
        position: "absolute",
        right: "0em",
        margin: "0 15vw 0 0"
    },

    picture: {
        height: 35,
        width: 35
	},
	
	profileIconContainer: {
		paddingRight: "1em"
	},

	profileListItemText: {
		marginRight: "1em"
	},

	statusMenuListItem: {
		textAlign: "center"
	}
};

export default styles;