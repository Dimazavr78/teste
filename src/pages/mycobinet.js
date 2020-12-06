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
			<Text
				position="fixed"
				width="168px"
				left="824px"
				top="auto"
				right="auto"
				bottom="195px"
				height="18px"
			>
				Статус активности:
			</Text>
			<Text
				position="fixed"
				width="168px"
				left="822px"
				top="auto"
				right="auto"
				bottom="151px"
				height="18px"
			>
				Дата регистрации:
			</Text>
			<Text
				position="fixed"
				width="168px"
				left="822px"
				top="auto"
				right="auto"
				bottom="124px"
				height="18px"
			>
				Был в сети:
			</Text>
			<Text
				position="fixed"
				width="125px"
				left="822px"
				bottom="auto"
				height="18px"
				right="auto"
				top="157px"
			>
				Пользователь:
			</Text>
			<Text
				position="fixed"
				width="49px"
				left="824px"
				top="200px"
				bottom="auto"
				height="18px"
				right="auto"
			>
				ФИО:
			</Text>
			<Text
				position="fixed"
				width="200px"
				left="903px"
				top="201px"
				right="auto"
				bottom="auto"
				height="18px"
			>
				Фамилия
			</Text>
			<Text
				position="fixed"
				width="200px"
				left="903px"
				top="227px"
				right="auto"
				bottom="auto"
				height="21px"
			>
				Имя
			</Text>
			<Text
				position="fixed"
				width="200px"
				left="901px"
				top="auto"
				right="auto"
				bottom="242px"
				height="18px"
			>
				Отчество
			</Text>
			<Image
				width="300px"
				height="300px"
				min-width="100px"
				min-height="100px"
				max-width="500px"
				max-height="500px"
			/>
			<Section
				width="642.1739130434783px"
				position="fixed"
				bottom="101px"
				height="248.6086956521739px"
				left="auto"
				right="-118px"
				top="auto"
			/>
		</Section>
		<Section background="#27789c" />
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