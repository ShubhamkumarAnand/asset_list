const Header= () => {
  return <div className="w-full sticky bg-transparent p-3 flex justify-between items-center mx-auto z-10 shadow-lg">
    <div className="font-semibold text-xl basis-4/6"><button>Asset List</button></div>
    <div className="flex space-x-5 font-medium border-black">
      <button className="text-md basis-3 hover:border-b-4 hover:border-black">Add</button>
      <button className="text-md">View</button>
      <button className="text-md">Issues</button>
    </div>
    <div className="border-2 border-black rounded-xl">
      <button className="font-semibold p-3">SignIN</button>
    </div>
  </div>
}

export default Header