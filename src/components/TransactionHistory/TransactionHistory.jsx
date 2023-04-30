import PropTypes from 'prop-types';
import { Transaction } from 'components/Transaction/Transaction';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ data }) => {
    return (
        <table className={css.transactionHistory}>
  <thead className={css.transactionHistoryHead}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody>
                {data.map(option => (
                  <Transaction
                        key={option.id}
                        id={option.id}
                        type={option.type}
                        amount={option.amount}
                        currency={option.currency } />
     ))}           
    
  </tbody>
</table>
    )
}

TransactionHistory.propTypes = {
    data:PropTypes.array,
}
