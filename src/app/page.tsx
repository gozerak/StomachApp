import ActiveLink from "@/components/ActiveLink";

export default function Home() {
  return (
    <div className="flex-1">
      <div className="flex w-screen h-15 border-b-2 border-gray-300 absolute">
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

    </div>
  );
}
