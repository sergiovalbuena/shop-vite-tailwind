
import { useState, useEffect } from "react";
import { Card } from "../../Components/Card";
import { Layout } from "../../Components/Layout";

export default function Home() {
  const [items, setItems] = useState(null)

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json()) // Convertir a JSON
      .then(data => setItems(data))
  }, [])


  return (
    <Layout>
      Home sweet home
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">

        {
          items?.map(item => (
            <Card data={item} key={item.id} />
          ))
        }
      </div>

    </Layout>
  )
}
