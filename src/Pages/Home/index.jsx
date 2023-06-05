
import { useContext } from "react";
import { Card } from "../../Components/Card";
import { Layout } from "../../Components/Layout";
import { ProductDetail } from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Context";

export default function Home() {

  const context = useContext(ShoppingCartContext)

const renderView = () => {
  if (context.searchByTitle?.length > 0) {
    if(context.filteredItems?.length > 0){
      return (
        context.filteredItems?.map((item) => (
          <Card key={item.id} data={item}/>
        ))
    );
  }else{
    return (
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl"> No results </h1>
      </div>
    )
  }
  } else{
    return (   
        context.items?.map((item) => (
          <Card key={item.id} data={item}/>
        ))
    )
  }
};


  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl"> Products </h1>

      </div>

      <input 
        type="text" 
        placeholder="serach a product"
        className="rounded-lg border border-black w-80 p-4 mb-4 focus:bg-yellow-200" 
        onChange={(event)=> context.setSearchByTitle(event.target.value)}
        />

      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">

        {/* {
          context.items?.map(item => (
            <Card data={item} key={item.id} />
          ))
        } */}

        {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  )
}
