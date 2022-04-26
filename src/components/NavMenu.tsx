import { Burger, Menu } from '@mantine/core';
import { NextLink } from '@mantine/next';
import { useState } from 'react';
import { NavMenuText } from './NavMenuText';

export function NavMenu() {
  const [opened, setOpened] = useState(false);

  return (
    <Menu
      control={<Burger opened={opened} color="teal" />}
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
    >
      <Menu.Item component={NextLink} href="/bio">
        <NavMenuText href="/bio">Bio</NavMenuText>
      </Menu.Item>
      <Menu.Item component={NextLink} href="/work">
        <NavMenuText href="/work">Work</NavMenuText>
      </Menu.Item>
      <Menu.Item component={NextLink} href="/contact">
        <NavMenuText href="/contact">Contact</NavMenuText>
      </Menu.Item>
    </Menu>
  );
}
