import styles from '@styles/pagination.module.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronRight,
    faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

const Pagination = ({
    range,
    totalNumberOfComics,
    currentPage,
    setCurrentPage,
    disableRightPagination,
}) => {
    const prevHandler = () => {
        setCurrentPage((prev) => {
            return prev - 1;
        });
    };

    const nextHandler = () => {
        setCurrentPage((prev) => {
            return prev + 1;
        });
    };

    const disableLeft = currentPage !== 1;
    const disableRight = disableRightPagination;

    let start = range.start + 1;
    if (totalNumberOfComics === 0) {
        start = 0;
    }

    let end = range.end;
    if (range.end > totalNumberOfComics) {
        end = totalNumberOfComics;
    }

    return (
        <div className={styles.pagination}>
            <button
                className={styles.paginationArrow}
            >
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <span className={styles.pageNumber}>
                {start}-{end}
                &nbsp;of {totalNumberOfComics}
            </span>
            <button
                className={styles.paginationArrow}
            >
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </div>
    );
}

export default Pagination