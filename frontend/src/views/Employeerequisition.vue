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
/* @media only screen and (min-width: 768px) {
      .header-right {
          width: calc(100% - 16rem);
      }
  } */
</style>

<template>
  <div x-data="setup()" :class="{ dark: isDark }">
    <Employeesidebar />
    <div
      class="
        body-color
        min-h-screen
        flex flex-col flex-auto flex-shrink-0
        antialiased
        bg-white
        dark:bg-gray-700
        text-black
        dark:text-white
      "
    >

      <div class="h-full top-0 ml-14 md:ml-64 z-10">
        <div class="grid grid-cols-1 lg:grid-cols-4 p-4 gap-4">
          <!-- Monthly Schedule -->
          <div
            class="
              relative
              flex flex-col
              min-w-0
              mb-4
              lg:mb-0
              break-words
              bg-gray-50
              dark:bg-gray-800
              w-full
              shadow-lg
              rounded
            "
          >
            <div class="rounded-t mb-0 px-0 border-0">
              <div class="flex flex-wrap items-center px-4 py-2">
                <div class="relative w-full max-w-full flex-grow flex-1">
                  <h2
                    class="
                      font-semibold
                      text-base text-gray-900
                      dark:text-gray-50
                      uppercase
                    "
                  >
                    {{ today }} SCHEDULE
                  </h2>
                </div>
                <!-- <div class="relative w-full max-w-full flex-grow flex-1 text-right"> -->
                <!-- <button class="bg-becolor dark:bg-gray-100 text-white active:bg-blue-600 dark:text-gray-800 dark:active:text-gray-700 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" v-show="timeIn" type="button" @click="checkIn()" style="display:block">Check In</button>
                  <button class="bg-bemagenta dark:bg-gray-100 text-white active:bg-blue-600 dark:text-gray-800 dark:active:text-gray-700 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" v-show="timeOut" type="button" @click="checkIn()" style="display:none">Check Out</button> -->
                <!-- </div> -->
              </div>
              <div class="block w-full overflow-x-auto">
                <table
                  class="items-center w-full bg-transparent border-collapse"
                >
                  <thead>
                    <tr>
                      <th
                        class="
                          px-4
                          bg-gray-100
                          dark:bg-gray-600
                          text-gray-500
                          dark:text-gray-100
                          align-middle
                          border border-solid border-gray-200
                          dark:border-gray-500
                          py-3
                          text-xs
                          uppercase
                          border-l-0 border-r-0
                          whitespace-nowrap
                          font-semibold
                          text-left
                        "
                      ></th>
                      <th
                        class="
                          px-4
                          bg-gray-100
                          dark:bg-gray-600
                          text-gray-500
                          dark:text-gray-100
                          align-middle
                          border border-solid border-gray-200
                          dark:border-gray-500
                          py-3
                          text-xs
                          uppercase
                          border-l-0 border-r-0
                          whitespace-nowrap
                          font-semibold
                          text-left
                        "
                      ></th>
                      <!-- <th class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px"></th> -->
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="text-gray-700 dark:text-gray-100">
                      <th
                        scope="row"
                        class="
                          flex
                          items-center
                          py-4
                          text-gray-900
                          whitespace-nowrap
                          dark:text-white
                        "
                      >
                        <div class="pl-3">
                          <div
                            class="
                              border-t-0
                              text-base
                              align-middle
                              border-l-0 border-r-0
                              whitespace-nowrap
                              text-left
                            "
                          >
                            January 12, 2022
                          </div>
                          <div
                            class="
                              border-t-0
                              align-middle
                              border-l-0 border-r-0
                              text-xs
                              whitespace-nowrap
                              text-left
                            "
                          >
                            9:00 am to 6:00 pm
                          </div>
                        </div>
                      </th>
                      <th>
                        <button
                          class="
                            bg-becolor
                            dark:bg-gray-100
                            text-white
                            active:bg-blue-600
                            dark:text-gray-800 dark:active:text-gray-700
                            text-xs
                            font-bold
                            uppercase
                            px-3
                            py-1
                            rounded
                            outline-none
                            focus:outline-none
                            mr-1
                            mb-1
                            ease-linear
                            transition-all
                            duration-150
                          "
                          v-show="timeIn"
                          type="button"
                          @click="checkIn()"
                          style="display: block"
                        >
                          Change
                        </button>
                      </th>
                    </tr>
                    <tr class="text-gray-700 dark:text-gray-100">
                      <th
                        scope="row"
                        class="
                          flex
                          items-center
                          py-4
                          text-gray-900
                          whitespace-nowrap
                          dark:text-white
                        "
                      >
                        <div class="pl-3">
                          <div
                            class="
                              border-t-0
                              text-base
                              align-middle
                              border-l-0 border-r-0
                              whitespace-nowrap
                              text-left
                            "
                          >
                            January 13, 2022
                          </div>
                          <div
                            class="
                              border-t-0
                              align-middle
                              border-l-0 border-r-0
                              text-xs
                              whitespace-nowrap
                              text-left
                            "
                          >
                            9:00 am to 6:00 pm
                          </div>
                        </div>
                      </th>
                      <th>
                        <button
                          class="
                            bg-becolor
                            dark:bg-gray-100
                            text-white
                            active:bg-blue-600
                            dark:text-gray-800 dark:active:text-gray-700
                            text-xs
                            font-bold
                            uppercase
                            px-3
                            py-1
                            rounded
                            outline-none
                            focus:outline-none
                            mr-1
                            mb-1
                            ease-linear
                            transition-all
                            duration-150
                          "
                          v-show="timeIn"
                          type="button"
                          @click="checkIn()"
                          style="display: block"
                        >
                          Change
                        </button>
                      </th>
                    </tr>
                    <tr class="text-gray-700 dark:text-gray-100">
                      <th
                        scope="row"
                        class="
                          flex
                          items-center
                          py-4
                          text-gray-900
                          whitespace-nowrap
                          dark:text-white
                        "
                      >
                        <div class="pl-3">
                          <div
                            class="
                              border-t-0
                              text-base
                              align-middle
                              border-l-0 border-r-0
                              whitespace-nowrap
                              text-left
                            "
                          >
                            January 16, 2022
                          </div>
                          <div
                            class="
                              border-t-0
                              align-middle
                              border-l-0 border-r-0
                              text-xs
                              whitespace-nowrap
                              text-left
                            "
                          >
                            9:00 am to 6:00 pm
                          </div>
                        </div>
                      </th>
                      <th>
                        <button
                          class="
                            bg-becolor
                            dark:bg-gray-100
                            text-white
                            active:bg-blue-600
                            dark:text-gray-800 dark:active:text-gray-700
                            text-xs
                            font-bold
                            uppercase
                            px-3
                            py-1
                            rounded
                            outline-none
                            focus:outline-none
                            mr-1
                            mb-1
                            ease-linear
                            transition-all
                            duration-150
                          "
                          v-show="timeIn"
                          type="button"
                          @click="checkIn()"
                          style="display: block"
                        >
                          Change
                        </button>
                      </th>
                    </tr>
                    <tr class="text-gray-700 dark:text-gray-100">
                      <th
                        scope="row"
                        class="
                          flex
                          items-center
                          py-4
                          text-gray-900
                          whitespace-nowrap
                          dark:text-white
                        "
                      >
                        <div class="pl-3">
                          <div
                            class="
                              border-t-0
                              text-base
                              align-middle
                              border-l-0 border-r-0
                              whitespace-nowrap
                              text-left
                            "
                          >
                            January 17, 2022
                          </div>
                          <div
                            class="
                              border-t-0
                              align-middle
                              border-l-0 border-r-0
                              text-xs
                              whitespace-nowrap
                              text-left
                            "
                          >
                            9:00 am to 6:00 pm
                          </div>
                        </div>
                      </th>
                      <th>
                        <button
                          class="
                            bg-becolor
                            dark:bg-gray-100
                            text-white
                            active:bg-blue-600
                            dark:text-gray-800 dark:active:text-gray-700
                            text-xs
                            font-bold
                            uppercase
                            px-3
                            py-1
                            rounded
                            outline-none
                            focus:outline-none
                            mr-1
                            mb-1
                            ease-linear
                            transition-all
                            duration-150
                          "
                          v-show="timeIn"
                          type="button"
                          @click="checkIn()"
                          style="display: block"
                        >
                          Change
                        </button>
                      </th>
                    </tr>
                    <tr class="text-gray-700 dark:text-gray-100">
                      <th
                        scope="row"
                        class="
                          flex
                          items-center
                          py-4
                          text-gray-900
                          whitespace-nowrap
                          dark:text-white
                        "
                      >
                        <div class="pl-3">
                          <div
                            class="
                              border-t-0
                              text-base
                              align-middle
                              border-l-0 border-r-0
                              whitespace-nowrap
                              text-left
                            "
                          >
                            January 18, 2022
                          </div>
                          <div
                            class="
                              border-t-0
                              align-middle
                              border-l-0 border-r-0
                              text-xs
                              whitespace-nowrap
                              text-left
                            "
                          >
                            9:00 am to 6:00 pm
                          </div>
                        </div>
                      </th>
                      <th>
                        <button
                          class="
                            bg-becolor
                            dark:bg-gray-100
                            text-white
                            active:bg-blue-600
                            dark:text-gray-800 dark:active:text-gray-700
                            text-xs
                            font-bold
                            uppercase
                            px-3
                            py-1
                            rounded
                            outline-none
                            focus:outline-none
                            mr-1
                            mb-1
                            ease-linear
                            transition-all
                            duration-150
                          "
                          v-show="timeIn"
                          type="button"
                          @click="checkIn()"
                          style="display: block"
                        >
                          Change
                        </button>
                      </th>
                    </tr>
                    <tr class="text-gray-700 dark:text-gray-100">
                      <th
                        scope="row"
                        class="
                          flex
                          items-center
                          py-4
                          text-gray-900
                          whitespace-nowrap
                          dark:text-white
                        "
                      >
                        <div class="pl-3">
                          <div
                            class="
                              border-t-0
                              text-base
                              align-middle
                              border-l-0 border-r-0
                              whitespace-nowrap
                              text-left
                            "
                          >
                            January 19, 2022
                          </div>
                          <div
                            class="
                              border-t-0
                              align-middle
                              border-l-0 border-r-0
                              text-xs
                              whitespace-nowrap
                              text-left
                            "
                          >
                            9:00 am to 6:00 pm
                          </div>
                        </div>
                      </th>
                      <th>
                        <button
                          class="
                            bg-becolor
                            dark:bg-gray-100
                            text-white
                            active:bg-blue-600
                            dark:text-gray-800 dark:active:text-gray-700
                            text-xs
                            font-bold
                            uppercase
                            px-3
                            py-1
                            rounded
                            outline-none
                            focus:outline-none
                            mr-1
                            mb-1
                            ease-linear
                            transition-all
                            duration-150
                          "
                          v-show="timeIn"
                          type="button"
                          @click="checkIn()"
                          style="display: block"
                        >
                          Change
                        </button>
                      </th>
                    </tr>
                    <tr class="text-gray-700 dark:text-gray-100">
                      <th
                        scope="row"
                        class="
                          flex
                          items-center
                          py-4
                          text-gray-900
                          whitespace-nowrap
                          dark:text-white
                        "
                      >
                        <div class="pl-3">
                          <div
                            class="
                              border-t-0
                              text-base
                              align-middle
                              border-l-0 border-r-0
                              whitespace-nowrap
                              text-left
                            "
                          >
                            January 20, 2022
                          </div>
                          <div
                            class="
                              border-t-0
                              align-middle
                              border-l-0 border-r-0
                              text-xs
                              whitespace-nowrap
                              text-left
                            "
                          >
                            9:00 am to 6:00 pm
                          </div>
                        </div>
                      </th>
                      <th>
                        <button
                          class="
                            bg-becolor
                            dark:bg-gray-100
                            text-white
                            active:bg-blue-600
                            dark:text-gray-800 dark:active:text-gray-700
                            text-xs
                            font-bold
                            uppercase
                            px-3
                            py-1
                            rounded
                            outline-none
                            focus:outline-none
                            mr-1
                            mb-1
                            ease-linear
                            transition-all
                            duration-150
                          "
                          v-show="timeIn"
                          type="button"
                          @click="checkIn()"
                          style="display: block"
                        >
                          Change
                        </button>
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <!-- ./Monthly Schedule -->

          <!-- Recent Activities -->
          <div
            class="
              relative
              flex flex-col
              col-span-3
              min-w-0
              break-words
              bg-gray-50
              dark:bg-gray-800
              w-full
              shadow-lg
              rounded
            "
          >
            <!-- <div class="rounded-t mb-0 px-0 border-0">
              <div class="flex flex-wrap items-center px-4 py-2">
                <div class="relative w-full max-w-full flex-grow flex-1">
                  <h3 class="font-semibold text-base text-gray-900 dark:text-gray-50">Recent Activities</h3>
                </div>
                <div class="relative w-full max-w-full flex-grow flex-1 text-right">
                  <button class="bg-blue-500 dark:bg-gray-100 text-white active:bg-blue-600 dark:text-gray-800 dark:active:text-gray-700 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">See all</button>
                </div>
              </div>
              <div class="block w-full">
                <div class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Today
                </div>
                <ul class="my-1">
                  <li class="flex px-4">
                    <div class="w-9 h-9 rounded-full flex-shrink-0 bg-indigo-500 my-2 mr-3">
                      <svg class="w-9 h-9 fill-current text-indigo-50" viewBox="0 0 36 36"><path d="M18 10c-4.4 0-8 3.1-8 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L18.9 22H18c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z"></path></svg>
                    </div>
                    <div class="flex-grow flex items-center border-b border-gray-100 dark:border-gray-400 text-sm text-gray-600 dark:text-gray-100 py-2">
                      <div class="flex-grow flex justify-between items-center">
                        <div class="self-center">
                          <a class="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-100" href="#0" style="outline: none;">Nick Mark</a> mentioned <a class="font-medium text-gray-800 dark:text-gray-50 dark:hover:text-gray-100" href="#0" style="outline: none;">Sara Smith</a> in a new post
                        </div>
                        <div class="flex-shrink-0 ml-2">
                          <a class="flex items-center font-medium text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500" href="#0" style="outline: none;">
                            View<span><svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" class="transform transition-transform duration-500 ease-in-out"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="flex px-4">
                    <div class="w-9 h-9 rounded-full flex-shrink-0 bg-red-500 my-2 mr-3">
                      <svg class="w-9 h-9 fill-current text-red-50" viewBox="0 0 36 36"><path d="M25 24H11a1 1 0 01-1-1v-5h2v4h12v-4h2v5a1 1 0 01-1 1zM14 13h8v2h-8z"></path></svg>
                    </div>
                    <div class="flex-grow flex items-center border-gray-100 text-sm text-gray-600 dark:text-gray-50 py-2">
                      <div class="flex-grow flex justify-between items-center">
                        <div class="self-center">
                          The post <a class="font-medium text-gray-800 dark:text-gray-50 dark:hover:text-gray-100" href="#0" style="outline: none;">Post Name</a> was removed by <a class="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-100" href="#0" style="outline: none;">Nick Mark</a>
                        </div>
                        <div class="flex-shrink-0 ml-2">
                          <a class="flex items-center font-medium text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500" href="#0" style="outline: none;">
                            View<span><svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" class="transform transition-transform duration-500 ease-in-out"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <div class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Yesterday
                </div>
                <ul class="my-1">
                  <li class="flex px-4">
                    <div class="w-9 h-9 rounded-full flex-shrink-0 bg-green-500 my-2 mr-3">
                      <svg class="w-9 h-9 fill-current text-light-blue-50" viewBox="0 0 36 36"><path d="M23 11v2.085c-2.841.401-4.41 2.462-5.8 4.315-1.449 1.932-2.7 3.6-5.2 3.6h-1v2h1c3.5 0 5.253-2.338 6.8-4.4 1.449-1.932 2.7-3.6 5.2-3.6h3l-4-4zM15.406 16.455c.066-.087.125-.162.194-.254.314-.419.656-.872 1.033-1.33C15.475 13.802 14.038 13 12 13h-1v2h1c1.471 0 2.505.586 3.406 1.455zM24 21c-1.471 0-2.505-.586-3.406-1.455-.066.087-.125.162-.194.254-.316.422-.656.873-1.028 1.328.959.878 2.108 1.573 3.628 1.788V25l4-4h-3z"></path></svg>
                    </div>
                    <div class="flex-grow flex items-center border-gray-100 text-sm text-gray-600 dark:text-gray-50 py-2">
                      <div class="flex-grow flex justify-between items-center">
                        <div class="self-center">
                          <a class="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-100" href="#0" style="outline: none;">240+</a> users have subscribed to <a class="font-medium text-gray-800 dark:text-gray-50 dark:hover:text-gray-100" href="#0" style="outline: none;">Newsletter #1</a>
                        </div>
                        <div class="flex-shrink-0 ml-2">
                          <a class="flex items-center font-medium text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500" href="#0" style="outline: none;">
                            View<span><svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" class="transform transition-transform duration-500 ease-in-out"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div> -->
            <div class="flex items-center justify-between p-4">
              <div>
                <button
                  id="dropdownRadioButton"
                  data-dropdown-toggle="dropdownRadios"
                  class="
                    inline-flex
                    items-center
                    text-gray-500
                    bg-white
                    border border-gray-300
                    focus:outline-none
                    hover:bg-gray-100
                    focus:ring-4 focus:ring-gray-200
                    font-medium
                    rounded-lg
                    text-sm
                    px-3
                    py-1.5
                    dark:bg-gray-800
                    dark:text-white
                    dark:border-gray-600
                    dark:hover:bg-gray-700
                    dark:hover:border-gray-600
                    dark:focus:ring-gray-700
                  "
                  type="button"
                >
                  <svg
                    class="w-4 h-4 mr-2 text-gray-400"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Last 30 days
                  <svg
                    class="w-3 h-3 ml-2"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                <!-- Dropdown menu -->
                <div
                  id="dropdownRadios"
                  class="
                    z-10
                    hidden
                    w-48
                    bg-white
                    divide-y divide-gray-100
                    rounded
                    shadow
                    dark:bg-gray-700 dark:divide-gray-600
                  "
                  data-popper-reference-hidden=""
                  data-popper-escaped=""
                  data-popper-placement="top"
                  style="
                    position: absolute;
                    inset: auto auto 0px 0px;
                    margin: 0px;
                    transform: translate3d(522.5px, 3847.5px, 0px);
                  "
                >
                  <ul
                    class="
                      p-3
                      space-y-1
                      text-sm text-gray-700
                      dark:text-gray-200
                    "
                    aria-labelledby="dropdownRadioButton"
                  >
                    <li>
                      <div
                        class="
                          flex
                          items-center
                          p-2
                          rounded
                          hover:bg-gray-100
                          dark:hover:bg-gray-600
                        "
                      >
                        <input
                          id="filter-radio-example-1"
                          type="radio"
                          value=""
                          name="filter-radio"
                          class="
                            w-4
                            h-4
                            text-blue-600
                            bg-gray-100
                            border-gray-300
                            focus:ring-blue-500
                            dark:focus:ring-blue-600 dark:ring-offset-gray-800
                            focus:ring-2
                            dark:bg-gray-700 dark:border-gray-600
                          "
                        />
                        <label
                          for="filter-radio-example-1"
                          class="
                            w-full
                            ml-2
                            text-sm
                            font-medium
                            text-gray-900
                            rounded
                            dark:text-gray-300
                          "
                          >Last day</label
                        >
                      </div>
                    </li>
                    <li>
                      <div
                        class="
                          flex
                          items-center
                          p-2
                          rounded
                          hover:bg-gray-100
                          dark:hover:bg-gray-600
                        "
                      >
                        <input
                          checked=""
                          id="filter-radio-example-2"
                          type="radio"
                          value=""
                          name="filter-radio"
                          class="
                            w-4
                            h-4
                            text-blue-600
                            bg-gray-100
                            border-gray-300
                            focus:ring-blue-500
                            dark:focus:ring-blue-600 dark:ring-offset-gray-800
                            focus:ring-2
                            dark:bg-gray-700 dark:border-gray-600
                          "
                        />
                        <label
                          for="filter-radio-example-2"
                          class="
                            w-full
                            ml-2
                            text-sm
                            font-medium
                            text-gray-900
                            rounded
                            dark:text-gray-300
                          "
                          >Last 7 days</label
                        >
                      </div>
                    </li>
                    <li>
                      <div
                        class="
                          flex
                          items-center
                          p-2
                          rounded
                          hover:bg-gray-100
                          dark:hover:bg-gray-600
                        "
                      >
                        <input
                          id="filter-radio-example-3"
                          type="radio"
                          value=""
                          name="filter-radio"
                          class="
                            w-4
                            h-4
                            text-blue-600
                            bg-gray-100
                            border-gray-300
                            focus:ring-blue-500
                            dark:focus:ring-blue-600 dark:ring-offset-gray-800
                            focus:ring-2
                            dark:bg-gray-700 dark:border-gray-600
                          "
                        />
                        <label
                          for="filter-radio-example-3"
                          class="
                            w-full
                            ml-2
                            text-sm
                            font-medium
                            text-gray-900
                            rounded
                            dark:text-gray-300
                          "
                          >Last 30 days</label
                        >
                      </div>
                    </li>
                    <li>
                      <div
                        class="
                          flex
                          items-center
                          p-2
                          rounded
                          hover:bg-gray-100
                          dark:hover:bg-gray-600
                        "
                      >
                        <input
                          id="filter-radio-example-4"
                          type="radio"
                          value=""
                          name="filter-radio"
                          class="
                            w-4
                            h-4
                            text-blue-600
                            bg-gray-100
                            border-gray-300
                            focus:ring-blue-500
                            dark:focus:ring-blue-600 dark:ring-offset-gray-800
                            focus:ring-2
                            dark:bg-gray-700 dark:border-gray-600
                          "
                        />
                        <label
                          for="filter-radio-example-4"
                          class="
                            w-full
                            ml-2
                            text-sm
                            font-medium
                            text-gray-900
                            rounded
                            dark:text-gray-300
                          "
                          >Last month</label
                        >
                      </div>
                    </li>
                    <li>
                      <div
                        class="
                          flex
                          items-center
                          p-2
                          rounded
                          hover:bg-gray-100
                          dark:hover:bg-gray-600
                        "
                      >
                        <input
                          id="filter-radio-example-5"
                          type="radio"
                          value=""
                          name="filter-radio"
                          class="
                            w-4
                            h-4
                            text-blue-600
                            bg-gray-100
                            border-gray-300
                            focus:ring-blue-500
                            dark:focus:ring-blue-600 dark:ring-offset-gray-800
                            focus:ring-2
                            dark:bg-gray-700 dark:border-gray-600
                          "
                        />
                        <label
                          for="filter-radio-example-5"
                          class="
                            w-full
                            ml-2
                            text-sm
                            font-medium
                            text-gray-900
                            rounded
                            dark:text-gray-300
                          "
                          >Last year</label
                        >
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="relative">
                <div
                  class="
                    absolute
                    inset-y-0
                    left-0
                    flex
                    items-center
                    pl-3
                    pointer-events-none
                  "
                >
                  <svg
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="table-search"
                  class="
                    block
                    p-2
                    pl-10
                    text-sm text-gray-900
                    border border-gray-300
                    rounded-lg
                    w-80
                    bg-gray-50
                    focus:ring-blue-500 focus:border-blue-500
                    dark:bg-gray-700
                    dark:border-gray-600
                    dark:placeholder-gray-400
                    dark:text-white
                    dark:focus:ring-blue-500
                    dark:focus:border-blue-500
                  "
                  placeholder="Search for items"
                />
              </div>
            </div>
            <div class="mt-4 mx-4">
              <div class="w-full overflow-hidden rounded-lg shadow-xs">
                <div class="w-full overflow-x-auto">
                  <table
                    class="
                      w-full
                      text-sm text-left text-gray-500
                      dark:text-gray-400
                    "
                  >
                    <thead
                      class="
                        text-xs text-gray-700
                        uppercase
                        bg-gray-50
                        dark:bg-gray-700 dark:text-gray-400
                      "
                    >
                      <tr>
                        <!-- <th scope="col" class="p-4">
                    <div class="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="checkbox-all-search" class="sr-only">checkbox</label>
                    </div>
                </th> -->
                        <th scope="col" class="px-6 py-3">
                          Target Overtime Date
                        </th>
                        <th scope="col" class="px-6 py-3">Date Applied</th>
                        <th scope="col" class="px-6 py-3">Overtime In</th>
                        <th scope="col" class="px-6 py-3">Overtime In</th>
                        <th scope="col" class="px-6 py-3">Total Hours</th>
                        <th scope="col" class="px-6 py-3">Approved By</th>
                        <th scope="col" class="px-6 py-3">Approval Date</th>
                        <th scope="col" class="px-6 py-3">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        class="
                          bg-white
                          border-b
                          dark:bg-gray-800 dark:border-gray-700
                          hover:bg-gray-50
                          dark:hover:bg-gray-600
                        "
                      >
                        <!-- <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                    </div>
                </td> -->
                        <th
                          scope="row"
                          class="
                            px-6
                            py-4
                            font-medium
                            text-gray-900
                            whitespace-nowrap
                            dark:text-white
                          "
                        >
                          January 3, 2022
                        </th>
                        <td class="px-6 py-4">December 28, 2022</td>
                        <td class="px-6 py-4">06:05 am</td>
                        <td class="px-6 py-4">08:05 am</td>
                        <td class="px-6 py-4">2 hrs 00 mins</td>
                        <td class="px-6 py-4">Kapitan Tiago</td>
                        <td class="px-6 py-4">January 7, 2022</td>
                        <td class="px-6 py-4">Approved</td>
                        <!-- <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td> -->
                      </tr>
                      <tr
                        class="
                          bg-white
                          border-b
                          dark:bg-gray-800 dark:border-gray-700
                          hover:bg-gray-50
                          dark:hover:bg-gray-600
                        "
                      >
                        <!-- <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                    </div>
                </td> -->
                        <th
                          scope="row"
                          class="
                            px-6
                            py-4
                            font-medium
                            text-gray-900
                            whitespace-nowrap
                            dark:text-white
                          "
                        >
                          January 4, 2022
                        </th>
                        <td class="px-6 py-4">January 7, 2022</td>
                        <td class="px-6 py-4">06:05 am</td>
                        <td class="px-6 py-4">08:05 am</td>
                        <td class="px-6 py-4">2 hrs 00 mins</td>
                        <td class="px-6 py-4">Kapitan Tiago</td>
                        <td class="px-6 py-4">January 14, 2022</td>
                        <td class="px-6 py-4">Approved</td>
                        <!-- <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td> -->
                      </tr>
                      <tr
                        class="
                          bg-white
                          border-b
                          dark:bg-gray-800 dark:border-gray-700
                          hover:bg-gray-50
                          dark:hover:bg-gray-600
                        "
                      >
                        <!-- <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                    </div>
                </td> -->
                        <th
                          scope="row"
                          class="
                            px-6
                            py-4
                            font-medium
                            text-gray-900
                            whitespace-nowrap
                            dark:text-white
                          "
                        >
                          January 5, 2022
                        </th>
                        <td class="px-6 py-4">December 5, 2022</td>
                        <td class="px-6 py-4">--:--</td>
                        <td class="px-6 py-4">--:--</td>
                        <td class="px-6 py-4">-- --</td>
                        <td class="px-6 py-4">Kapitan Tiago</td>
                        <td class="px-6 py-4">January 7, 2022</td>
                        <td class="px-6 py-4">Denied</td>
                        <!-- <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td> -->
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div
                  class="
                    grid
                    px-4
                    py-3
                    text-xs
                    font-semibold
                    tracking-wide
                    text-gray-500
                    uppercase
                    border-t
                    dark:border-gray-700
                    bg-gray-50
                    sm:grid-cols-9
                    dark:text-gray-400 dark:bg-gray-800
                  "
                >
                  <span class="flex items-center col-span-3">
                    Showing 21-30 of 100
                  </span>
                  <span class="col-span-2"></span>
                  <!-- Pagination -->
                  <span class="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
                    <nav aria-label="Table navigation">
                      <ul class="inline-flex items-center">
                        <li>
                          <button
                            class="
                              px-3
                              py-1
                              rounded-md rounded-l-lg
                              focus:outline-none focus:shadow-outline-purple
                            "
                            aria-label="Previous"
                          >
                            <svg
                              aria-hidden="true"
                              class="w-4 h-4 fill-current"
                              viewBox="0 0 20 20"
                            >
                              <path
                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                                fill-rule="evenodd"
                              ></path>
                            </svg>
                          </button>
                        </li>
                        <li>
                          <button
                            class="
                              px-3
                              py-1
                              rounded-md
                              focus:outline-none focus:shadow-outline-purple
                            "
                          >
                            1
                          </button>
                        </li>
                        <li>
                          <button
                            class="
                              px-3
                              py-1
                              rounded-md
                              focus:outline-none focus:shadow-outline-purple
                            "
                          >
                            2
                          </button>
                        </li>
                        <li>
                          <button
                            class="
                              px-3
                              py-1
                              text-white
                              dark:text-gray-800
                              transition-colors
                              duration-150
                              bg-blue-600
                              dark:bg-gray-100
                              border border-r-0 border-blue-600
                              dark:border-gray-100
                              rounded-md
                              focus:outline-none focus:shadow-outline-purple
                            "
                          >
                            3
                          </button>
                        </li>
                        <li>
                          <button
                            class="
                              px-3
                              py-1
                              rounded-md
                              focus:outline-none focus:shadow-outline-purple
                            "
                          >
                            4
                          </button>
                        </li>
                        <li>
                          <span class="px-3 py-1">...</span>
                        </li>
                        <li>
                          <button
                            class="
                              px-3
                              py-1
                              rounded-md
                              focus:outline-none focus:shadow-outline-purple
                            "
                          >
                            8
                          </button>
                        </li>
                        <li>
                          <button
                            class="
                              px-3
                              py-1
                              rounded-md
                              focus:outline-none focus:shadow-outline-purple
                            "
                          >
                            9
                          </button>
                        </li>
                        <li>
                          <button
                            class="
                              px-3
                              py-1
                              rounded-md rounded-r-lg
                              focus:outline-none focus:shadow-outline-purple
                            "
                            aria-label="Next"
                          >
                            <svg
                              class="w-4 h-4 fill-current"
                              aria-hidden="true"
                              viewBox="0 0 20 20"
                            >
                              <path
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"
                                fill-rule="evenodd"
                              ></path>
                            </svg>
                          </button>
                        </li>
                      </ul>
                    </nav>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <!-- ./Recent Activities -->
        </div>
      </div>
    </div>
  </div>
</template>

