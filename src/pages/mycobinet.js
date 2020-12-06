import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text } from "@quarkly/widgets";
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
			<Image
				width="300px"
				height="300px"
				min-width="100px"
				min-height="100px"
				max-width="500px"
				max-height="500px"
			/>
			<Text position="fixed" width="125px" left="500px">
				Пользователь:
			</Text>
			<Text position="fixed" width="125px" left="610px">
				Панда
			</Text>
			<Text
				position="fixed"
				width="49px"
				left="505px"
				top="200px"
				bottom="234px"
				height="18px"
				right="726px"
			>
				ФИО:
			</Text>
			<Text
				position="fixed"
				width="200px"
				left="564px"
				top="197px"
				right="auto"
				bottom="auto"
				height="18px"
			>
				Фамилия
			</Text>
			<Text
				position="fixed"
				width="200px"
				left="565px"
				top="220px"
				right="auto"
				bottom="auto"
				height="21px"
			>
				Имя
			</Text>
			<Text
				position="fixed"
				width="200px"
				left="562px"
				top="243px"
				right="auto"
				bottom="auto"
				height="18px"
			>
				Отчество
			</Text>
			<Text
				position="fixed"
				width="168px"
				left="500px"
				top="auto"
				right="auto"
				bottom="181px"
				height="18px"
			>
				Статус активности:
			</Text>
			<Text
				position="fixed"
				width="168px"
				left="502px"
				top="auto"
				right="auto"
				bottom="148px"
				height="18px"
			>
				Дата регистрации:
			</Text>
			<Text
				position="fixed"
				width="168px"
				left="501px"
				top="auto"
				right="auto"
				bottom="123px"
				height="18px"
			>
				Был в сети:
			</Text>
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