
function App() {
  return (
    <div className="App" >
      
      <div className=" App h-screen w-full flex justify-center items-center bg-purple-600 " >
        <form action="" className=" bg-white shadow-md rounded px-8 py-8 pt-8 ">
          <div className="px-4 pb-4 ">
            <label htmlFor="email" className="text-sm block font-bold  pb-2">EMAIL ADDRESS</label>
            <input type="email" name="email" id="" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 " placeholder="Johnbull@example.com"/>
          </div>
          <div  className="px-4 pb-4">
            <label htmlFor="password" className="text-sm block font-bold pb-2">PASSWORD</label>
            <input type="password" name="email" id="" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" placeholder="Enter your password"/>
          </div>
          <div>
            
            <button className="bg-blue-800 hover:bg-red-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex justify-center items-center" type="button">Sign In</button>
          </div>

      </form>

    </div>

      
    </div>
  );
}

export default App;
