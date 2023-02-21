import Navbar from '@/components/NavBar';
export default function Cat({data}) {
  console.log("hekko")
  console.log(data)
  return (
    <div>
    <Navbar />
    {data.map(event => <h1>{event.title}</h1> )}
        
    </div>
  )
}


export async function getStaticPaths(){
  const { events_categories } = await import('/data/data.json');
  const allPaths = events_categories.map((event)=> ({
    
      params: {
        cat: event.id.toString(),
      },   
      
    }));
   

    console.log(allPaths)
   
    return {
      paths: allPaths,
      fallback: false ,
    }
    
   
}
export async function getStaticProps(context){

  const id = context.params.cat;
  console.log(id)
  
  const {allEvents} =  await import('/data/data.json');
   
  const data =  allEvents.filter((event) => event.city === id)
 
  return {props: {data:data}};
}

