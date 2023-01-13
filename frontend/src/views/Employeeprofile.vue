<script setup>
  import Employeesidebar from './Employeesidebar.vue';
</script>

<style>
/* Custom style */
.header-right {
  width: calc(100% - 3.5rem);
}

.sidebar:hover {
  width: 16rem;
}

.bg-becolor {
  background-color: #00a3ad;
}

.bg-becolorhover:hover {
  background-color: #00a3ad;
  color: white
}

.border-becolor {
  border-color: #00a3ad;
}

.bg-bemagenta {
  background-color: #aa0061;
}

.border-bemagenta {
  border-color: #aa0061;
}

.font-bemagenta {
  color: #aa0061;
}

.bg-selection:hover {
  background-color: #aa0061;
  border-color: #450127;
}

.body-color {
  background-color: aquamarine;
}

.font-becolor {
  color: #00a3ad;
}

.textalign-left {
  text-align: right;
}

</style>

<template>

  <div x-data="setup()" :class="{ 'dark': isDark }">
    <Employeesidebar />
    <div
      class="body-color min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
      <div class="h-screen ml-14  md:ml-64 z-10 flex justify-center items-center">
        <!-- Task Summaries -->
        <div class="grid grid-cols-1 md:grid-cols-4 p-4 gap-4 text-black dark:text-white content-center h-full">
          <div class="col-span-1">
            <!-- component -->
            <div class="flex items-center w-full justify-center">
                <div class="bg-white shadow-xl rounded-lg py-3">
                  <div class="photo-wrapper p-2">
                    <img class="w-64 h-64 rounded-full mx-auto"
                      src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp" alt="John Doe">
                  </div>
                  <div class="p-2">
                    <h3 class="text-center text-xl text-gray-900 font-bold">Crisostomo Ibarra</h3>
                    <div class="text-center font-becolor text-sm font-semibold">
                      <p>Roaming</p>
                    </div>
                    <table class="text-sm my-3 text-left">
                      <tbody>
                        <tr>
                          <td class="px-2 py-2 text-gray-500 font-semibold whitespace-nowrap">Employee ID :</td>
                          <td class="px-2 py-2">0000-0001</td>
                        </tr>
                        <tr>
                          <td class="px-2 py-2 text-gray-500 font-semibold">Phone :</td>
                          <td class="px-2 py-2">0910-1000-000</td>
                        </tr>
                        <tr>
                          <td class="px-2 py-2 text-gray-500 font-semibold">Date :</td>
                          <td class="px-2 py-2">0910-1000-000</td>
                        </tr>
                        <tr>
                          <td class="px-2 py-2 text-gray-500 font-semibold">Email :</td>
                          <td class="px-2 py-2">
                            crisostomo.ibarra@exmaple.com</td>
                        </tr>
                      </tbody>
                    </table>
                    <!-- <div class="text-center my-3">
                      <a class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                        href="#">View Profile</a>
                    </div> -->
                  </div>
                </div>
            </div>
          </div>

          <div class="col-span-3">
            <div class="items-left rounded-lg shadow-md bg-white dark:bg-gray-800 p-4">
              <div class="flex justify-between py-1 text-black dark:text-white">
                <h3 class="text-xl font-semibold">PROFILE INFORMATION</h3>
                <!-- <svg class="h-4 fill-current text-gray-600 dark:text-gray-500 cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z" />
                </svg> -->
              </div>
              <div class="text-sm text-black dark:text-gray-50 mt-2">
                <table class="text-sm my-3 text-left">
                      <tbody>
                        <tr>
                          <td class="pr-20 py-3 text-gray-500 font-semibold whitespace-nowrap">Job Position</td>
                          <td class="px-2 py-3">:</td>
                          <td class="pl-5 px-2 py-3">New Barbizon Fashion Incorporated Promodiser</td>
                        </tr>
                        <tr>
                          <td class="pr-20 py-3 text-gray-500 font-semibold">Company Name</td>
                          <td class="px-2 py-3">:</td>
                          <td class="pl-5 px-2 py-3">New Barbizon Fashion Incorporated</td>
                        </tr>
                        <tr>
                          <td class="pr-20 py-3 text-gray-500 font-semibold">Branch Name</td>
                          <td class="px-2 py-3">:</td>
                          <td class="pl-5 px-2 py-3">Robinsons Department Store Baclaran</td>
                        </tr>
                        <tr>
                          <td class="pr-20 py-3 text-gray-500 font-semibold">Chain Name</td>
                          <td class="px-2 py-3">:</td>
                          <td class="pl-5 px-2 py-3">
                            Robinsons Department Store</td>
                        </tr>
                        <tr>
                          <td class="pr-20 py-3 text-gray-500 font-semibold">Brand Handled</td>
                          <td class="px-2 py-3">:</td>
                          <td class="pl-5 px-2 py-3">
                            Sassa, Barbizon, Mona Lisa, Island Haze</td>
                        </tr>
                        <tr>
                          <td class="pr-20 py-3 text-gray-500 font-semibold">Official Brand</td>
                          <td class="px-2 py-3">:</td>
                          <td class="pl-5 px-2 py-3">
                            Sassa</td>
                        </tr>
                        <tr>
                          <td class="pr-20 py-3 text-gray-500 font-semibold">RAS</td>
                          <td class="px-2 py-3">:</td>
                          <td class="pl-5 px-2 py-3">Ms. Dona Victorina</td>
                        </tr>
                        <tr>
                          <td class="pr-20 py-3 text-gray-500 font-semibold">HR</td>
                          <td class="px-2 py-3">:</td>
                          <td class="pl-5 px-2 py-3">Ms. Sisa Narcisa</td>
                        </tr>
                        <tr>
                          <td class="pr-20 py-3 text-gray-500 font-semibold"> Date Started</td>
                          <td class="px-2 py-3">:</td>
                          <td class="pl-5 px-2 py-3">January 10,2022</td>
                        </tr>
                        <tr>
                          <td class="pr-20 py-3 text-gray-500 font-semibold">Status</td>
                          <td class="px-2 py-3">:</td>
                          <td class="pl-5 font-becolor font-bold px-2 py-2">Active</td>
                        </tr>
                      </tbody>
                    </table>
              </div>
            </div>
          </div>
        </div>
        <!--./Task Summaries -->

      </div>
    </div>
  </div>
</template>
