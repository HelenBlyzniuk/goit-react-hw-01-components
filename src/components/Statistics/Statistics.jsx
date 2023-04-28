import PropTypes from 'prop-types';

export const Statistics = ({
    title ='Upload stats',
    stats
}) => {
 return (
        <section className="statistics">
            {title !== '' && (
                <h2 className="title">{title}</h2>
            )}
  

         <ul className="stat-list">
             {stats.map((data, index) => (
               <li className="item" key = {index}>
      <span className="label">{data.label}</span>
      <span className="percentage">{data.percentage}</span>
    </li>  
             ))}
    
  </ul>
</section> 
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array,
}