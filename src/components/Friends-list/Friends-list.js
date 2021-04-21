import React from 'react';
import PropTypes from 'prop-types';
import styles from './Friends-list.module.css';


const FriendsList = ({ friends }) => {
    return (
        <ul className={styles.list}>
            {friends.map(({ avatar, name, isOnline, id }) => (
                <li className={styles.item} key={id}>
                    <span className={isOnline ? styles.online : styles.offline}></span>
                    <img className={styles.avatar} src={avatar} alt={name} width="48" />
                    <p>{name}</p>
                </li>

            ))}
        </ul>
    );
};

FriendsList.defaultProps = {
    avatar: 'https://www.expoelectroseti.ru/TestTest/profile.jpg'
};

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
    }))
};

export default FriendsList;