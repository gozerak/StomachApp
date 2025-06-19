
export default function Home() {
  return (
    <div className="flex-1">
      <div className="flex w-screen h-15 border-b-2 border-gray-300 absolute">
        <div className="flex flex-row justify-between items-center align-middle select-none">
          <p className="ml-4 font-bold text-xl italic">Stomach app</p>
          <button className="p-4 outline-none hover:bg-gray-300 rounded-lg active:border-b-blue-500 active:border-4">
            Главная
          </button>
          <button className="p-2 hover:bg-gray-300 rounded-lg active:border-b-blue-500 active:border-4">
            Записи
          </button>
          <button className="p-2 hover:bg-gray-300 rounded-lg active:border-b-blue-500 active:border-4">
            Профиль
          </button>
        </div>
      </div>

    </div>
  );
}
