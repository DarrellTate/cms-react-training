import styles from '@styles/comic/comic.module.css';

const ComicDetail = ({ comic }) => {
    let comicDate, creators;

    if (comic) {
        // comicDate =
        //     new Date(comic.dates[0].date).toLocaleDateString(
        //         'en-us', {
        //             month: 'long',
        //             day: 'numeric',
        //             year: 'numeric'
        //         }
        //     );
    
        creators = comic.creators?.items?.length
            // reduce array down to the first 2 creators
            ? comic.creators.items.slice(0, 2)
                // grab their last names
                .map(creator => creator.name.substr(creator.name.indexOf(' ') + 1))
                 // create a string from their last names
                .join(', ')
            : "No Creators found."
    }

    return (
        <div className={styles.content}>
            <h3 className={styles.title}>
                {comic.title}
            </h3>

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
                    { creators && <span>{creators}</span> }
                </li>
                
            </ul>
        </div>
    )
}

export default ComicDetail