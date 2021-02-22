import React from 'react';
import styles from './Profile.module.css';

const Profile = ({ name, tag, location, avatar, stats: {followers, views, likes} }) => {
    return (
        <div className={styles.container}>
            <div className={styles.wrap}>
                <img
                    src={avatar}
                    alt="Аватар пользователя"
                    width="250"
                    className={styles.avatar}
                />
                <p>{name}</p>
                <p>{tag}</p>
                <p>{location}</p>
            </div>

            <ul>
                <li>
                    <span>Followers</span>
                    <span>{followers}</span>
                </li>
                <li>
                    <span>Views</span>
                    <span>{views}</span>
                </li>
                <li>
                    <span>Likes</span>
                    <span>{likes}</span>
                </li>
            </ul>
        </div>
    )
};

export default Profile;