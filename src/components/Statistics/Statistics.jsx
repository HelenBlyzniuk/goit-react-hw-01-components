import PropTypes from 'prop-types';

export const Statistics = ({
    title ='Upload stats',
    stats
}) => {
 return (
        <section class="statistics">
            {title !== '' && (
                <h2 class="title">{title}</h2>
            )}
  

         <ul class="stat-list">
             {stats.map((data) => (
               <li class="item">
      <span class="label">{data.label}</span>
      <span class="percentage">{data.percentage}</span>
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