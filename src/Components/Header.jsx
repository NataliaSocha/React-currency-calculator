import logo from "./Assets/2.png";

export default function Header(){
    return(
      <header>
        <div className="addImg">
          <img src={logo} alt="logo" />
        </div>
         <h1 className="h1ElementHeader">Przelicznik walut</h1>
      </header>
    );
  }