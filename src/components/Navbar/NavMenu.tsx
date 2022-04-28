import { Burger, Menu } from '@mantine/core';
import { NextLink } from '@mantine/next';
import { useState } from 'react';
import { GithubLink } from './GithubLink';
import { NavMenuText } from './NavMenuText';

export function NavMenu() {
  const [opened, setOpened] = useState(false);

  return (
    <Menu
      control={<Burger opened={opened} color="teal" />}
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
    >
      <Menu.Item component={NextLink} href="/work">
        <NavMenuText href="/work">Work</NavMenuText>
      </Menu.Item>
      <Menu.Item
        component="a"
        href="https://github.com/wendell-kenneddy/portfolio"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubLink asText />
      </Menu.Item>
    </Menu>
  );
}
