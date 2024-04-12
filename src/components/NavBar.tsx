import Link from "next/link";

interface NavBarProps {
    active: "dashboard" | "novo" | "todos" | "editar" | "excluir"
}

export default function NavBar(props: NavBarProps) {
    const { active } = props
    const classActive = "border-white-500 border-b-4 pb-2"

    return (
        <nav className="flex w-full justify-between items-center px-4 py-2 bg-red-700 font-size text-xl  font-bold ">
            <h1 className="text-4xl font-bold">PopCornFilms</h1>
            <ul className="flex gap-16">
                <li className={active == "dashboard" ? classActive: ""}><Link href="/">dashborad</Link></li>
                <li className={active == "novo" ? classActive: ""}><Link href="/">Novo</Link></li>
                <li className={active == "todos" ? classActive: ""}><Link href="/todos">Todos</Link></li>
                <li className={active == "editar" ? classActive: ""}><Link href="/categorias">Editar</Link></li>
                <li className={active == "excluir" ? classActive: ""}><Link href="/categorias">Excluir</Link></li>
                
            </ul>
            
                            
                    <form action="" className="relative">
                <input type="search" 
                    className="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-lime-300 focus:pl-16 focus:pr-4" />
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-lime-300 peer-focus:stroke-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </form>

          
        </nav>
    )
}