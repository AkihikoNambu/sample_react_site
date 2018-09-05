import React, {Component} from 'react'
import LessonItem from './lessonItem.js'

export default class Main extends Component {
  render() {
    const {lessons} = this.props
    return(
      <div className='main'>
        <div className='copy-container'>
          <h1>HELLO WORLD<span>.</span></h1>
          <h2>プログラミングの世界へようこそ</h2>
        </div>
        <div className='contents'>
          <h3 className='section-title'>学べるレッスン</h3>
          {lessons.map(lesson => {
            return <LessonItem key={lesson.id} lesson={lesson} />
          })}
        </div>
      </div>
    )
  }
}
