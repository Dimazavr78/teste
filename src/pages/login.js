import React from "react";
import theme from "theme";
import { Theme, Link, Text, Input, Button } from "@quarkly/widgets";
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
			<Override slot="menuOverride1">
				Мой кабинет
			</Override>
			<Override slot="menuOverride4">
				Мои рецепты
			</Override>
		</Components.NavBar>
		<Text text-align="center" padding="0x 0px 0px 0px" margin="100px 0px 68px 0px" font="12 18px sans-serif">
			Вход в систему
		</Text>
		<Input
			border-color="#000000"
			text-align="left"
			min-width="300px"
			max-width="1400px"
			quarkly-title="loginFild"
			position="fixed"
			left="500px"
			margin="0px 0px 50px 0px"
			placeholder="Логин"
			required
			type="text"
		/>
		<Section />
		<Input
			margin="0 0px 100px 0px"
			position="relative"
			left="500px"
			border-color="#000000"
			min-width="300px"
			max-width="1400px"
			placeholder="Пароль"
			required
			type="password"
		/>
		<Button position="absolute" left="610px" margin="70px 0px 0px 0px" background="#ff00ff">
			Войти
		</Button>
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