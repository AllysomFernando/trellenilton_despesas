import { Utility } from '../../styles/utility';
import { S } from './styles';
import Logo from '../../assets/images/logo.png';
import { Button } from '../Button';
import { useEffect, useState } from 'react';
import { Icon } from '../Icon/index';
import { motion } from 'framer-motion';

export default function NavBar() {
  const [mobile, setMobile] = useState(false);
  const handlePress = () => {
    console.log('Button pressed');
  };

  const menuVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
    closed: {
      opacity: 0,
      x: '-100%',
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  useEffect(() => {
    const body = document.body;
    if (mobile) {
      body.style.overflow = 'hidden';
      body.style.position = 'fixed';
      body.style.width = '100%';
    } else {
      body.style.overflow = 'auto';
      body.style.position = 'static';
    }

    return () => {
      body.style.overflow = 'auto';
      body.style.position = 'static';
    };
  }, [mobile]);

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
        <S.MenuContainerLogo>
          <Utility.Image src={Logo} alt="Logo Trellenilton" width={200} />
          <Utility.BtnWrapper onClick={() => setMobile(!mobile)}>
            <Icon name="menu" width={35} height={35} />
          </Utility.BtnWrapper>
        </S.MenuContainerLogo>

        <motion.div
          initial={false}
          animate={mobile ? 'open' : 'closed'}
          variants={menuVariants}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            backgroundColor: 'white',
            overflowY: 'hidden',
          }}
        >
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
                    position: 'absolute',
                    top: '2.3rem',
                    right: '5rem',
                  }}
                />
              </Utility.BtnWrapper>
            </Utility.ContainerMobile>
          </S.MenuMobileContent>
        </motion.div>
      </S.MenuMobileContainer>
    </S.Container>
  );
}
