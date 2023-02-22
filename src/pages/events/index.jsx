import Link from 'next/link'

export default function index({data}) {
  return (
    <div>
    {data.map((event) =>
   
  <Link href={`/events/${event.id}`} >
  <h1>{event.title}</h1>
  <img src={event.image} />
  </Link>
  

    
    )}
     
    </div>
  )
}

export async function getStaticProps({}){
  const {events_categories} = await import('/data/data.json');
  return {
    props:{
      data:events_categories,
      fallback: 'blocking'
    }
  }
}