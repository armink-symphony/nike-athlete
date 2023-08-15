import Header from "../Components/Header/Header"
import Sidebar from "../Components/Sidebar/Sidebar"

const DefaultLayout = ({ child }) => {
  return (
    <>
      <Header />
      <Sidebar />
      {child}
    </>
  )
}

export default DefaultLayout
