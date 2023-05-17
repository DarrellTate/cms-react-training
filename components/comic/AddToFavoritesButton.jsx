import React from 'react'

const AddToFavoritesButton = ({comic}) => {
  return (
      <button
        type='button'
        onClick={() => {
            console.log(`${comic.title} added to favorites`)
        }}>
            Add to Favorite
        </button>
  )
}

export default AddToFavoritesButton