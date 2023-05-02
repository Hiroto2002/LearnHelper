import { Button } from '@/components/elements/button/Button';
import { Styles } from '@/types/styles';
import React from 'react';
import { Nav } from '../../elements/nav/Nav';
import { Text } from '../../elements/text/Text';
import Image from 'next/image';

type Props = {
  handlePushRouter: (path: string) => void;
  isActive: (path: string) => boolean;
};
export const Header = (props: Props) => {
  const { handlePushRouter, isActive } = props;
  const BUTTON = [
    {
      name: 'ホーム',
      path: '/home',
    },
    {
      name: '技術',
      path: '/tech',
    },
  ];
  return (
    <div style={styles.container}>
      <Text style={styles.logo}>Learn</Text>
      <Nav style={styles.nav}>
        {BUTTON.map((button, index) => (
            <Button style={styles.button} key={index}  onClick={() => handlePushRouter(button.path)}>
              {button.name}
              {isActive(button.path) && (
                <Image
                  src={'/icon/button_bar.svg'}
                  width={60}
                  height={3}
                  alt="button_bar"
                  style={styles.button_bar}
                />
              )}
            </Button>
        ))}
      </Nav>
    </div>
  );
};

const styles: Styles = {
  container: {
    position: 'fixed',
    top: 0,
    width: '100vw',
    backgroundColor: '#FF9933',
    padding: '5px 20px 0 20px',
  },
  logo: {
    fontSize: '30px',
    color: '#fff',
  },
  nav: {
    width: '100%',
    display: 'flex',
    alignItems: 'flex-start',
  },
  button: {
    backgroundColor: 'transparent',
    color: '#fff',
    padding: '10px 20px 0 20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'relative',
    alignItems: "center",
  },
  button_bar: {
  },
};
