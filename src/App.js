import React from 'react';
import './App.css';

//import profile from './Assets/capivara.png';
import PostList from './components/PostList';
import Header from './components/Header';

function App() {
    return (<>
        <Header />
        <PostList />
    </>);
}

export default App;