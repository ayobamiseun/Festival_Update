import Navbar from "@/components/NavBar";
import Link from "next/link";
import DisplayEvent from "@/components/DisplayEvent";
export default function Cat({ data, pageName }) {
 
  return (
    <div>
      <Navbar />
        <h1>welcome to Events in {pageName.toUpperCase()} </h1>
       <DisplayEvent data={data}  />
        
        
    
    </div>
  );
}

export async function getStaticPaths() {
  const { events_categories } = await import("/data/data.json");
  const allPaths = events_categories.map(event => ({
    params: {
      cat: event.id.toString(),
    },
  }));

  

  return {
    paths: allPaths,
    fallback: false,
  };
}
export async function getStaticProps(context) {
  const id = context.params.cat;
  console.log(id);

  const { allEvents } = await import("/data/data.json");

  const data = allEvents.filter((event) => event.city === id);

  return { props: { data: data, pageName: id } };
}
