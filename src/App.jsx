import giflogo from './assets/logo_final.gif'
import logo from './assets/Neo-logo.png'

function App() {
  return (
    <>
      {/* Intro container */}
      <div className="intro-container">
        <div className="cooked grid place-items-center h-screen w-screen perspective-container">
          <img 
            src={logo} 
            alt='logo' 
            className="cooked logo-fade w-48"
            style={{
              animation: `
                zoom-in 1.5s cubic-bezier(0.2, 0, 0.3, 1),
                fade-out 0.2s ease-out 1.5s forwards
              `
            }}
          />
        </div>
      </div>
      
      {/* Glitch overlay */}
      <div className="glitch"></div>
      
      {/* Your actual content */}
      <div className="content absolute inset-0 grid place-items-center">
        <h1 className="text-4xl font-bold">Your Real Content Here</h1>
      </div>
    </>
  );
}

export default App
