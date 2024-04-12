import NavBar from "@/components/NavBar"

export default function Home() {
  return ( 
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="dashboard" />
      <br></br>
      <h1 className="text-2xl font-bold text-gray-50">Ação </h1>

      <div className="w-11/12 bg-white h-0.5 mt-52" ></div>
      <br></br>
      <h1 className="text-2xl font-bold text-gray-50">Romance </h1>
      <br></br>
      <div className="w-11/12 bg-white h-0.5 mt-52" ></div>
      <br></br>
      <h1 className="text-2xl font-bold text-gray-50">Animacoes </h1>
    </main>

    
  );
}
