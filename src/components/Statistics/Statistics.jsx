import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({
    title ='Upload stats',
    stats
}) => {
 return (
        <section className={css.statistics}>
            {title !== '' && (
                <h2 className={css.title}>{title}</h2>
            )}
  

         <ul className={css.statList}>
             {stats.map((data, index) => (
    <li className={css.item} key = {index}>
      <span className="label">{data.label}</span>
      <span className={css.percentage}>{data.percentage}%</span>
    </li>  
             ))}
    
  </ul>
</section> 
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        percentage:PropTypes.number.isRequired,
    })),
}