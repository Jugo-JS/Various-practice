import React from 'react'

import { useGlobalContext } from './context'

const Stories = () => {
  const { stories, removeStory } = useGlobalContext();
  
  const { isLoading, news } = stories;
  // console.log(isLoading)

  if(isLoading) {
    return <div className='loading'></div>
  }

  return (
      <section className='stories'>
        {news.map((story, index) => {
          const { title, points, author, num_comments, url, objectID } = story;
          // console.log(story)
          return(
            <article key={index} className='story'>
              <h4 className='title'>{title}</h4>
              <p className='info'>{points}  points by <span>{author} | </span>{num_comments} comments</p>
              <div>
                <a href={url} className='read-link' target='_blank'>Read More</a>
                <button className='remove-btn' onClick={() => removeStory(objectID)}>remove</button>
              </div>
            </article>
          )
        })}  
      </section>
  )
}

export default Stories
