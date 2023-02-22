import Link from "next/link"
import styles from './Homepage.module.css';

export default function ({data}) {
  return (
    <div className={styles.grid}>
    {data.map((item) => (
        <Link key={item.id} href={`events/${item.city}/${item.id}`}>
         <div className={styles.griditem}>
          <img src={item.image} className={styles.img} style={{height:"300px"}}  alt={item.name} />
          <h3 className={styles.h3}>{item.title}</h3>
          <p className={styles.para}>{item.description}</p>
        </div>
        </Link>
        ))}
    </div>
  )
}