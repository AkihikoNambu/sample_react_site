import React, { Component } from 'react';
import './App.css';
import Header from './header.js'
import Main from './main.js'
import Footer from './footer.js'

const lessons = [
  {id: 1, languageName: 'HTML & CSS', imageUrl: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/html/study/html.svg'},
  {id: 2, languageName: 'PHP', imageUrl: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/html/study/php.svg'},
  {id: 3, languageName: 'Ruby', imageUrl: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/html/study/ruby.svg'},
  {id: 4, languageName: 'Swift', imageUrl: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/html/study/swift.svg'}
]

class App extends Component {
  render() {
    const lessonsCount = lessons.length
    return (
      <div>
        <Header count={lessonsCount} />
        <Main lessons={lessons} />
        <Footer />
      </div>
    )
  }
}

export default App;
