import React from 'react'
import styles from '@styles/comic/comic.module.css';


const ComicDetail = ({ comic }) => {
    const comicDate = new Date(comic.publishDate).toLocaleDateString('en-us', { month: 'long', day: 'numeric', year: 'numeric' });

    return (
        <div className={styles.content}>
            <h3 className={styles.title}>{comic.title}</h3>

            <ul className={styles.bottomContent}>
                <li className={styles.field}>
                    <span className={styles.label}>Issue: </span>{comic.issueNumber}
                </li>

                <li className={styles.field}>
                    <span className={styles.label}>Published:</span>
                    <br />
                    {comicDate}
                </li>

                <li className={styles.field}>
                    <span className={styles.label}>Creators:</span>
                    <br />
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