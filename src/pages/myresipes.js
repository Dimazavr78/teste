import React from "react";
import theme from "theme";
import { Theme, Link, Text, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Section } from "@quarkly/components";
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
		<Components.NavBar />
		<Section>
			<Text text-align="center" font="50px sans-serif">
				Мои рецепты
			</Text>
			<Section width="450px" height="289px" border-width="2px" border-style="solid">
				<Image width="320px" height="215px" margin="0px 0px 0px 30px" />
				<Text width="200px">
					Красный бархат
				</Text>
				<Text
					width="100px"
					position="absolute"
					bottom="75px"
					height="18px"
					left="252px"
					right="auto"
					top="auto"
				>
					Рейтинг:
				</Text>
				<Text
					width="50px"
					position="absolute"
					bottom="75px"
					height="18px"
					left="331px"
					right="auto"
					top="auto"
				>
					20
				</Text>
			</Section>
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