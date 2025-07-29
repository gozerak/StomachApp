import ActiveLink from "@/components/ActiveLink";

export default function Home() {
  return (
    <div className="flex-1 flex-col">
      <div className="flex w-screen h-15 border-b-2 border-gray-300 shadow-sm">
        <div className="flex flex-row justify-between items-center align-middle select-none">
          <p className="ml-4 font-bold text-xl italic">Stomach app</p>
          <ActiveLink href={"/"}>
            Главная
          </ActiveLink>
          <ActiveLink href={'/appointment'} >
            Записи
          </ActiveLink>
          <ActiveLink href={'/profile'} >
            Профиль
          </ActiveLink>
        </div>
      </div>
      <div className="flex-1 h-12">
        <div className="flex justify-center items-center">
          <input className="h-10 w-1/2 rounded-lg border-2 border-gray-400 shadow-sm mt-8" />
        </div>
      </div>
    </div>
  );
}
