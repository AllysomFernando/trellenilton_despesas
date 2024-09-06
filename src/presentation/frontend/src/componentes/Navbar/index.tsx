import { Utility } from "../../styles/utility";
import { S } from "./styles";
import Logo from "../../../assets/logo.svg;
import { Button } from "@/components/Button";
import { useState } from "react";
import { Icon } from "@/components/Icon";
export default function NavBar() {
	const [mobile, setMobile] = useState(false);
	const handlePress = () => {
		console.log("Button pressed");
	};
	return (
		<S.Container>
			<S.Nav>
				<Utility.DesktopOnly>
					<S.UlMaster>
						<Utility.Image src={Logo} alt="Logo Trellenilton" width={200} />
						<li>
							<a href="/">Home</a>
						</li>
						<li>
							<a href="/">Soluções</a>
						</li>
						<li>
							<a href="/">Depoimentos</a>
						</li>
						<li>
							<a href="/">Preços</a>
						</li>
						<li>
							<a href="/">Contato</a>
						</li>
					</S.UlMaster>
				</Utility.DesktopOnly>
				<S.ButtonContainer>
					<Button onPress={handlePress} title="Login" variant="Outline" />
					<Button onPress={handlePress} title="Cadastrar" variant="Main" />
				</S.ButtonContainer>
			</S.Nav>
			<S.MenuMobileContainer>
				{mobile ? (
					<S.MenuMobileContainer>
						<S.MenuMobileContent>
							<Utility.ContainerMobile>
								<ul>
									<li>
										<a href="#">Home</a>
									</li>
									<li>
										<a href="#solution">Soluções</a>
									</li>
									<li>
										<a href="#testimonials">Depoimentos</a>
									</li>
									<li>
										<a href="#pricing">Preços</a>
									</li>
									<li>
										<a href="#contact">Contato</a>
									</li>
								</ul>
								<Utility.BtnWrapper onClick={() => setMobile(!mobile)}>
									<Icon
										name="close"
										width={35}
										height={35}
										style={{
											position: "absolute",
											top: "2.3rem",
											right: "5rem",
										}}
									/>
								</Utility.BtnWrapper>
							</Utility.ContainerMobile>
						</S.MenuMobileContent>
					</S.MenuMobileContainer>
				) : (
					<S.MenuContainerLogo>
						<Utility.Image src={Logo} alt="Logo Trellenilton" width={200} />
						<Utility.BtnWrapper onClick={() => setMobile(!mobile)}>
							<Icon name="menu" width={35} height={35} />
						</Utility.BtnWrapper>
					</S.MenuContainerLogo>
				)}
			</S.MenuMobileContainer>
		</S.Container>
	);
}
