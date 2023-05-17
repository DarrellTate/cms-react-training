import React from 'react'

const ComicDetail = ({ comic }) => {
    const comicDate = new Date(comic.publishDate).toLocaleDateString('en-us', { month: 'long', day: 'numeric', year: 'numeric' });

    return (
        <div className="content">
            <h3 className='title'>{comic.title}</h3>
            <span><span className='content-label'>Issue: </span>{comic.issueNumber}</span>

            <ul className='bottom-content'>
                <li><span className='content-label'>Published:<br /></span>{comicDate}</li>
                <li>
                    <span className='content-label'>Creators:<br /></span>
                    <span>
                        {comic.creators
                            .slice(0, 2)
                            .map(creator =>
                                creator.name.substr(creator.name.indexOf(' ') + 1))
                            .join(', ')}
                    </span>
                </li>
            </ul>
        </div>
    )
}

export default ComicDetail