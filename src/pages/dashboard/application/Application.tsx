import DashNavbar from "../../../components/dashNav";
export default function Application() {
  return (
    // placeholder bcs probs application will extend past screen
    <div className="relative min-h-screen md:max-h-screen bg-linear-to-b from-neo-green-2/90 via-neo-green-4/50 to-neo-green-1/90 font-manrope">
      <h1>application</h1>
      <DashNavbar/>
    </div>
  );
}
