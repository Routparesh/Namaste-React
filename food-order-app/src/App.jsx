
import Header from "./components/Header/Header"
import ResturantCard from "./components/ResturantCard/ResturantCard"
import { resList } from "./components/ResturantCard/ResturantCard"
function AppLayout() {
  return (
  
      <div className="app">
         <Header/>
         <ResturantCard />
         <ResturantCard
    resName={resList[0].info.name}
    resImg={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resList.info.cloudinaryImageId}
    resRating={resList.info.avgRating}
    resCusin={resList.info.cuisines.join(', ')}
/>

      </div>
  )
}

export default AppLayout
