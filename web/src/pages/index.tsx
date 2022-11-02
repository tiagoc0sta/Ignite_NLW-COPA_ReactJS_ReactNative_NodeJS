//JSX - JS + XML (HTML)
//TSX = Typescript + JSX

interface HomeProps{
  count: number;
}

export default function Home(props: HomeProps) {
  
  return (
    <h1 className="text-violet-500 font-bold text-4xl">contagem: {props.count}</h1>
  )
}

export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:3333/pools/count')
  const data = await response.json()
  
  return{ 
    props: {
      count: data.count,
    }
  }
}