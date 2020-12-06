import React from "react";
import theme from "theme";
import { Theme, Link, Text, Input, Button } from "@quarkly/widgets";
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
			<Text text-align="center" font="18px sans-serif">
				Зарегистрироватся
			</Text>
			<Input
				border-color="#000000"
				min-width="300px"
				max-width="1400px"
				width="300px"
				position="sticky"
				left="500px"
				placeholder="Логин"
				required
				type="text"
				margin="0px 0px 0px 40%"
			/>
			<Input
				width="300px"
				min-width="300px"
				max-width="1400px"
				position="sticky"
				left="500px"
				border-color="#000000"
				margin="50px 0px 0px 40%"
				required
				type="password"
				placeholder="Пароль"
			/>
			<Input
				width="300px"
				min-width="300px"
				max-width="1400px"
				position="sticky"
				left="500px"
				border-color="#000000"
				margin="50px 0px 0px 40%"
				required
				type="password"
				placeholder="Повторите пароль"
			/>
			<Input
				width="300px"
				min-width="300px"
				max-width="1400px"
				position="sticky"
				left="500px"
				border-color="#000000"
				margin="50px 0px 0px 40%"
				required
				type="email"
				placeholder="Email"
			/>
			<Input
				width="300px"
				min-width="300px"
				max-width="1400px"
				position="sticky"
				left="500px"
				border-color="#000000"
				margin="50px 0px 0px 40%"
				required
				type="text"
				placeholder="Фамилия"
			/>
			<Input
				width="300px"
				min-width="300px"
				max-width="1400px"
				position="sticky"
				left="500px"
				border-color="#000000"
				margin="50px 0px 0px 40%"
				required
				type="text"
				placeholder="Имя"
			/>
			<Input
				width="300px"
				min-width="300px"
				max-width="1400px"
				position="sticky"
				left="500px"
				border-color="#000000"
				margin="50px 0px 0px 40%"
				required
				type="text"
				placeholder="Отчество"
			/>
			<Button
				background="#ff00ff"
				width="500px"
				min-width="300px"
				max-width="700px"
				position="sticky"
				left="400px"
				margin="50px 0px 0px 40%"
			>
				Зарегистрироваться
			</Button>
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