import PropTypes from 'prop-types';
import css from './transaction.module.css';

export const Transaction = ({ id, type, amount, currency }) => {
    return (
      <tr className={css.transactionHistoryItem} key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
    
   ) 
}
 
Transaction.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency:PropTypes.string.isRequired,

}