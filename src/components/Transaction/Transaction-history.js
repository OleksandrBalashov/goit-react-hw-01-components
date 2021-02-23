import React from 'react';
import PropTypes from 'prop-types';
import styles from './Transaction.module.css';

const TransactionHistory = ({ items }) => {
    return (
        <table className={styles.transaction}>
            <thead className={styles.head}>
                <tr>
                    <th className={styles.header}>Type</th>
                    <th className={styles.header}>Amount</th>
                    <th className={styles.header}>Currency</th>
                </tr>
            </thead>

            <tbody className={styles.tabBody}>
                {items.map(({ id, type, amount, currency }) => (
                    <tr key={id}>
                        <td className={styles.tabCell}>{type}</td>
                        <td className={styles.tabCell}>{amount}</td>
                        <td className={styles.tabCell}>{currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }))
};

export default TransactionHistory;

