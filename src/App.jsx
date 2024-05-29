import { useState } from 'react'

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div>

        <button onClick={() => setIsOpen((prev) => !prev)} className="m-5 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" type="button">Dropdown hover <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
        </svg>
        </button>
        {/* <!-- Dropdown menu --> */}
        {isOpen &&
          < div className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
            <ul className="py-2 text-sm text-gray-700">
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Dashboard</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Settings</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Earnings</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Sign out</a>
              </li>
            </ul>
          </div>
        }

      </div >
    </>
  )
}

export default App
