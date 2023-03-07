import React from 'react'

function Create() {
  return (
    <section className=''>  
<div className="flex justify-center">
<div class="flex justify-center m-5">
</div>

<div tabindex="-1" aria-hidden="true" class="justify-center items-center w-full md:inset-0 h-modal md:h-full">
    <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">

        <div class="relative p-4 bg-white rounded-lg shadow sm:p-5">

            <div class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5">
                <h3 class="text-lg font-semibold text-gray-900">
                    Create Cluster
                </h3>
                <h5 class="text-sm font-medium text-gray-900">
                    Clustor Supply : 69
                </h5>
            </div>

            <form action="#">
                
                <div class="grid gap-4 mb-4 sm:grid-cols-1">
                <div>
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Enter Name</label>
                        <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 " placeholder="Give Cluster a Name" required=""/>
                </div>
                <div>
                        <label for="brand" class="block mb-2 text-sm font-medium text-gray-900">Symbol</label>
                        <input type="text" name="brand" id="brand" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5" placeholder="Give Cluster a Symbol" required=""/>
                    </div>
                    <div>
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Token - 1</label>
                        <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 " placeholder="Enter Token Address" required=""/>
                    </div>
                    <div>
                        <label for="price" class="block mb-2 text-sm font-medium text-gray-900 ">Amount</label>
                        <input type="number" name="price" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5" placeholder="$2999" required=""/>
                    </div>
                    <div>
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Token - 2</label>
                        <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 " placeholder="Enter Token Address" required=""/>
                    </div>
                    <div>
                        <label for="price" class="block mb-2 text-sm font-medium text-gray-900">Amount</label>
                        <input type="number" name="price" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5" placeholder="$2999" required=""/>
                    </div>
                    <div>
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Token - 3</label>
                        <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 " placeholder="Enter Token Address" required=""/>
                    </div>
                    <div>
                        <label for="price" class="block mb-2 text-sm font-medium text-gray-900">Amount</label>
                        <input type="number" name="price" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5" placeholder="$2999" required=""/>
                    </div>
                    <div class="sm:col-span-2">
                        </div>
                </div>
                <button type="submit" class="text-white inline-flex items-center bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    <svg class="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                    Create
                </button>
            </form>
        </div>
    </div>
</div>
    </div>
    </section>
  )
}

export default Create