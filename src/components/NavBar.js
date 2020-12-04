import React from "react";
import { useOverrides, Override, Menu, Section } from "@quarkly/components";
import { Image, Box } from "@quarkly/widgets";
const defaultProps = {
	"background": "#ff64f8"
};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"display": "flex",
			"padding": "12px 0",
			"justify-content": "space-between",
			"align-items": "center",
			"flex-direction": "row",
			"md-flex-direction": "column"
		}
	},
	"image": {
		"kind": "Image",
		"props": {
			"width": "px",
			"height": "64px",
			"src": "https://uploads.quarkly.io/5fc9d6a904e716001efc3af4/images/Polny_logotip.svg?v=2020-12-04T06:44:20.642Z"
		}
	},
	"menu": {
		"kind": "Menu",
		"props": {
			"display": "flex",
			"justify-content": "center",
			"font": "--base",
			"font-weight": "700",
			"md-flex-direction": "column",
			"md-align-items": "center"
		}
	},
	"menuOverride": {
		"kind": "Override",
		"props": {
			"slot": "link",
			"text-decoration": "none",
			"color": "#ffffff",
			"padding": "6px 12px",
			"border-color": "#000000",
			"opacity": "1"
		}
	},
	"menuOverride1": {
		"kind": "Override",
		"props": {
			"slot": "link-active",
			"color": "--primary"
		}
	},
	"menuOverride2": {
		"kind": "Override",
		"props": {
			"slot": "item",
			"padding": "6px"
		}
	},
	"menuOverride3": {
		"kind": "Override",
		"props": {
			"slot": "link-404",
			"children": "Главная"
		}
	},
	"menuOverride4": {
		"kind": "Override",
		"props": {
			"slot": "link-index",
			"children": "Мой кабинет"
		}
	}
};

const NavBar = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Box {...override("box")}>
			<Image {...override("image")} />
			<Menu {...override("menu")}>
				<Override {...override("menuOverride")} />
				<Override {...override("menuOverride1")} />
				<Override {...override("menuOverride2")} />
				<Override {...override("menuOverride3")} />
				<Override {...override("menuOverride4")} />
			</Menu>
		</Box>
		{children}
	</Section>;
};

Object.assign(NavBar, { ...Section,
	defaultProps,
	overrides
});
export default NavBar;