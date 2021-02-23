import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const Profile = ({ name, tag, location, avatar, stats: { followers, views, likes } }) => {
    return (
        <div className={styles.container}>
            <div className={styles.wrap}>
                <img
                    src={avatar}
                    alt="Аватар пользователя"
                    width="250"
                    className={styles.avatar}
                />
                <div className={styles.wrapText}>
                    <p className={styles.name}>{name}</p>
                    <p className={styles.tag}>&#64;{tag}</p>
                    <p>{location}</p>
                </div>
            </div>

            <ul className={styles.list}>
                <li className={styles.item}>
                    <span className={styles.itemTitle}>Followers</span>
                    <span className={styles.itemText}>{followers}</span>
                </li>
                <li className={styles.item}>
                    <span className={styles.itemTitle}>Views</span>
                    <span className={styles.itemText}>{views}</span>
                </li>
                <li className={styles.item}>
                    <span className={styles.itemTitle}>Likes</span>
                    <span className={styles.itemText}>{likes}</span>
                </li>
            </ul>
        </div>
    )
};

Profile.defaultProps = {
    avatar: 'https://www.expoelectroseti.ru/TestTest/profile.jpg'
}

Profile.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired
    })
};

export default Profile;