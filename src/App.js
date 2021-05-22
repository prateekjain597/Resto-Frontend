import AboutUs from "./components/aboutUs";
import Blog from "./components/blog";
import Footer from "./components/footer";
import Gallery from "./components/gallery";
import Header from "./components/header";
import Home from "./components/home";
import Menu from "./components/menu";
import Pricing from "./components/pricing";
import Reservation from "./components/reservation";
import Team from "./components/team";

function App() {
  return (
    <div className="App">
        <div>
      
      

       <Header></Header>
  
        <Home></Home>
        <AboutUs/>
    

      <Menu></Menu>

      <Team></Team>
        
      <Gallery></Gallery>
       
      <Blog></Blog>

      <Pricing></Pricing>
      
      <Reservation></Reservation>
       
      <Footer></Footer>
        <a href="#" className="scrollup" style={{display: 'none'}}>Scroll</a>
        <section id="color-panel" className="close-color-panel">
          <a className="panel-button gray2"><i className="fa fa-cog fa-spin fa-2x" /></a>
          {/* Colors */}
          <div className="segment">
            <h4 className="gray2 normal no-padding">Color Scheme</h4>
            <a title="orange" className="switcher orange-bg" />
            <a title="strong-blue" className="switcher strong-blue-bg" />
            <a title="moderate-green" className="switcher moderate-green-bg" />
            <a title="vivid-yellow" className="switcher vivid-yellow-bg" />
          </div>
        </section>

      </div>
    </div>
  );
}

export default App;