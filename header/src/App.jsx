import './App.css'
function App() {

  return (

    <>
    <nav className="navbar bg-light">
  <div className="container-fluid">
    <a className="navbar-brand">Paresh</a>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
    <div className="icon">
        <img src="src\5305154_fb_facebook_facebook logo_icon.png" width="34" height="34" alt="facebook" srcSet="" ></img>
        <img src="src\394187_github_icon.png" alt="github" width="34" height="34" srcSet=""></img>
    </div>
   
  </div>
</nav>
 <div>
<div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src="bootstrap-themes.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold lh-1 mb-3">Responsive left-aligned hero with image</h1>
        <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
          <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
        </div>
      </div>
    </div>
</div>
</>


  )
}

export default App
