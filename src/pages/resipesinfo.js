import React from "react";
import theme from "theme";
import { Theme, Link, Text, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.NavBar>
			<Override slot="menuOverride4" />
		</Components.NavBar>
		<Section>
			<Text
				width="100px"
				position="absolute"
				bottom="auto"
				height="18px"
				left="auto"
				right="534px"
				top="244px"
			>
				Автор:
			</Text>
			<Text
				min-width="100px"
				max-width="500px"
				bottom="auto"
				height="38.05263157894737px"
				position="static"
				left="71px"
				font="30px sans-serif"
				right="auto"
				top="123px"
				width="228.29415789473686px"
			>
				Красный бархат
			</Text>
			<Text
				position="absolute"
				left="auto"
				bottom="auto"
				height="18px"
				right="536px"
				top="243px"
				width="41.1406px"
			>
				Котик
			</Text>
			<Image
				width="500px"
				height="500px"
				min-width="100px"
				min-height="100px"
				max-width="700px"
				max-height="500px"
			/>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});