import PropTypes from 'prop-types';
import { Transaction } from 'components/Transaction/Transaction';


export const TransactionHistory = ({ data }) => {
    return (
        <table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody>
                {data.map(option => (
                    <Transaction
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
