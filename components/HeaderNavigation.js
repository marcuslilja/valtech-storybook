import React from 'react';

import Logo from './Logo';
import Header from './Header';

export default function HeaderNavigation() {
  return (
    <Header>
      <Header.Brand href="#home">
        <Logo />
      </Header.Brand>
      <Header.Navigation>
        <Header.Link href="#technology">Technology</Header.Link>
        <Header.Link href="#ideas">Ideas</Header.Link>
        <Header.Link href="#leadership">Leadership</Header.Link>
        <Header.Link href="#video">Video</Header.Link>
        <Header.Link href="#news">News</Header.Link>
        <Header.Link href="#finance">Finance</Header.Link>
        <Header.Link href="#entertainment">Entertainment</Header.Link>
      </Header.Navigation>
    </Header>
  );
}
