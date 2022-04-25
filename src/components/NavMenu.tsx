import { Burger, Menu } from '@mantine/core';
import { NextLink } from '@mantine/next';
import { useState } from 'react';
import { NavLink } from './NavLink';

export function NavMenu() {
  const [opened, setOpened] = useState(false);

  return (
    <Menu
      control={<Burger opened={opened} color="teal" />}
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
    >
      <Menu.Item component={NextLink} href="/bio">
        <NavLink href="/bio">Bio</NavLink>
      </Menu.Item>
      <Menu.Item component={NextLink} href="/work">
        <NavLink href="/work">Work</NavLink>
      </Menu.Item>
      <Menu.Item component={NextLink} href="/contact">
        <NavLink href="/contact">Contact</NavLink>
      </Menu.Item>
    </Menu>
  );
}
