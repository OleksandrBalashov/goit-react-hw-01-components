import React from 'react';
import PropTypes from 'prop-types';
import bgColor from './Random-bg-color';
import styles from './Statistics.module.css';

const Statistics = ({ stats, title }) => {
    return (
        <section className={styles.section}>
            {title && <h2 className={styles.title}>{title}</h2>}

            <ul className={styles.statsList}>
                {stats.map(({ id, label, percentage }) => (
                    <li className={styles.item} key={id} style={{ backgroundColor: bgColor() }}>
                        <span className={styles.label}>{label}</span>
                        <span>{percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    )
};

Statistics.defaultProps = {
    title: ''
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }))
};

export default Statistics;