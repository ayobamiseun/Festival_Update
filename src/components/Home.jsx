import styles from './Homepage.module.css';
import Link from 'next/link';

export default function HomePage({data}) {

  return (

    <div className={styles.grid}>
      {data.map(item => (
        <Link key={item.id} href={`/events/${item.id}`} passHref>
        <div className={styles.griditem}>
          <img src={item.image} className={styles.img} style={{height:"300px"}}  alt={item.name} />
          <h3 className={styles.h3}>{item.name}</h3>
          <p className={styles.para}>{item.description}</p>
        </div>
        
        </Link>
      
      ))}
    </div>
  )
}

