import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // 'Switch' を 'Routes' に変更
import styled, { createGlobalStyle } from 'styled-components';
import MovieList from './components/MovieList';
import RandomRecommendation from './components/RandomRecommendation';
import { Movie } from './types';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    background-color: #f5f5dc; /* ベージュ */
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
`;

const Container = styled.div`
  max-width: 900px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fffaf0; /* フローラルホワイト */
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  padding: 40px; /* 内側の余白を増やす */
`;

const Header = styled.header`
  text-align: left;
  margin-bottom: 20px;
`;

const Logo = styled.h1`
  font-size: 2.5em;
  color: #4b3832; /* ダークブラウン */
  font-family: 'Arial Black', sans-serif;
`;

const Nav = styled.nav`
  margin-bottom: 20px;
`;

const NavLink = styled(Link)`
  margin-right: 20px;
  color: #4b3832; /* ダークブラウン */
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Divider = styled.hr`
  border: 0;
  height: 2px;
  background: #e0e0e0;
  margin: 20px 0;
`;

const movies: Movie[] = [
  {
    title: 'アラジン',
    description: '魔法のランプと一人の青年の冒険',
    url: 'https://www.disneyplus.com/ja-jp/movies/aladdin/2SngByljXESE',
    emoji: '🧞‍♂',
  },
  {
    title: 'ライオンキング',
    description: 'サバンナの冒険と成長の物語',
    url: 'https://www.disneyplus.com/ja-jp/movies/the-lion-king/1HqwiEcje6Nj',
    emoji: '🦁',
  },
  {
    title: '美女と野獣',
    description: '美しい愛と呪いをかけられた野獣の物語',
    url: 'https://www.disneyplus.com/ja-jp/movies/beauty-and-the-beast/3oEh78YRc9VN',
    emoji: '🌹',
  },
  {
    title: 'くまのプーさん',
    description: 'クリストファー・ロビンのぬいぐるみのお話',
    url: 'https://www.disneyplus.com/ja-jp/franchise/winnie-the-pooh',
    emoji: '🍯',
  },
  {
    title: 'リトル・マーメイド',
    description: '人間に恋した人魚姫アリエルの物語',
    url: 'https://www.disneyplus.com/ja-jp/movies/the-little-mermaid/5MpPFhS8FTXh',
    emoji: '🧜‍♀',
  },
  {
    title: 'アナと雪の女王',
    description: 'let it go',
    url: 'https://www.disneyplus.com/ja-jp/movies/frozen/4uKGzAJi3ROz',
    emoji: '⛄',
  },
];

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyle />
      <Container>
        <Header>
          <Logo>ランダムD+</Logo>
        </Header>
        <Nav>
          <NavLink to="/">おすすめの映画</NavLink>
          <NavLink to="/movies">映画リスト</NavLink>
        </Nav>
        <Divider />
        <Routes>
          {' '}
          <Route
            path="/"
            element={<RandomRecommendation movies={movies} />}
          />{' '}
          <Route path="/movies" element={<MovieList movies={movies} />} />{' '}
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
