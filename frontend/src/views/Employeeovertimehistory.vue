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
  color: white;
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
      <div class="h-full ml-14 md:ml-64 z-10">
        <div class="grid px-4 gap-4 py-2">
          <!-- Recent Activities -->
          <div
            class="
              relative
              flex flex-col
              min-w-0
              break-words
              bg-white
              dark:bg-gray-800
              w-full
              shadow-lg
              rounded
              py-5
            "
          >
            <div class="pb-5 font-becolor text-3xl font-bold">
              <h1>OVERTIME HISTORY</h1>
            </div>
            <div
              class="
                grid
                md:grid-rows-1 md:grid-flow-col
                grid-cols-1
                sm:px-5 sm:w-full
                md:mb-0
              "
            >
              <!-- <div class="md:row-start-1 row-span-1 md:flex">
                            <h1 class="text-white md:text-4xl text-2xl font-bold lg:ml-4">Attendance Summary</h1>
                        </div> -->
              <div
                class="
                  md:row-start-1
                  row-span-1
                  md:flex
                  pb-2
                  md:px-0
                  px-3
                  lg:ml-4
                "
              >
                <input
                  type="text"
                  class="
                    md:w-2/12
                    w-full
                    form-control
                    block
                    w-full
                    px-3
                    py-2
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border-2 border-solid
                    bordercolor
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-white
                    bg-becolorhover
                    focus:outline-none
                    rounded-xl
                  "
                  id="searchBox"
                  placeholder="Search"
                />
                <div date-rangepicker class="md:flex items-center">
                  <span class="md:mx-4 text-white"> Sort By:</span>
                  <div class="relative">
                    <div
                      class="
                        flex
                        absolute
                        inset-y-0
                        left-0
                        items-center
                        pl-3
                        pointer-events-none
                      "
                    >
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5 font-themecolor dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <input
                      name="start"
                      type="date"
                      class="
                        bg-gray-50
                        border border-gray-300
                        text-gray-900
                        sm:text-sm
                        rounded-lg
                        focus:ring-blue-500 focus:border-blue-500
                        block
                        w-full
                        pl-10
                        p-2.5
                        dark:bg-gray-700
                        dark:border-gray-600
                        dark:placeholder-gray-400
                        dark:text-white
                        dark:focus:ring-blue-500
                        dark:focus:border-blue-500
                      "
                      placeholder="Select date start"
                    />
                  </div>
                  <span class="md:mx-4 text-white">to</span>
                  <div class="relative">
                    <div
                      class="
                        flex
                        absolute
                        inset-y-0
                        left-0
                        items-center
                        pl-3
                        pointer-events-none
                      "
                    >
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5 font-themecolor dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <input
                      name="end"
                      type="date"
                      class="
                        bg-gray-50
                        border border-gray-300
                        text-gray-900
                        sm:text-sm
                        rounded-lg
                        focus:ring-blue-500 focus:border-blue-500
                        block
                        w-full
                        pl-10
                        p-2.5
                        dark:bg-gray-700
                        dark:border-gray-600
                        dark:placeholder-gray-400
                        dark:text-white
                        dark:focus:ring-blue-500
                        dark:focus:border-blue-500
                      "
                      placeholder="Select date end"
                    />
                  </div>
                </div>
              </div>
              <div class="md:row-start-1 md:row-span-2 md:px-0 px-3">
                <div class="md:flex md:float-right">
                  <!-- <button
                                    class="px-1 py-1 bg-white font-themecolor border-2 border-white mt-2 mr-3 rounded-lg hover:bg-transparent hover:text-white focus:outline-none"
                                    data-modal-toggle="upload-file">Upload</button> -->
                  <button
                    class="
                      px-1
                      py-1
                      bg-white
                      font-becolor
                      border-2 border-becolor
                      mt-2
                      mr-3
                      rounded-lg
                      bg-becolorhover
                      focus:outline-none
                    "
                    onClick="printDataAttendanceSummary()"
                  >
                    Print
                  </button>
                </div>
              </div>
            </div>
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

            <div class="mt-4 mx-4">
              <div class="w-full overflow-hidden rounded-lg shadow-xs lg:px-5">
                <div class="w-full overflow-x-auto rounded-t-lg">
                  <table class="w-full px-5">
                    <thead>
                      <tr
                        class="
                          text-xs
                          font-semibold
                          tracking-wide
                          text-left text-gray-500
                          uppercase
                          border-b
                          dark:border-gray-700
                          bg-gray-50
                          dark:text-gray-400 dark:bg-gray-800
                          px-5
                        "
                      >
                        <th class="px-2 py-3">Date</th>
                        <th class="px-2 py-3">REMARKS</th>
                        <th class="px-2 py-3">AM IN</th>
                        <th class="px-2 py-3">LB OUT</th>
                        <th class="px-2 py-3">LB IN</th>
                        <th class="px-2 py-3">CB OUT</th>
                        <th class="px-2 py-3">CB IN</th>
                        <th class="px-2 py-3">PM OUT</th>
                        <th class="px-2 py-3">DURATION</th>
                      </tr>
                    </thead>
                    <tbody
                      class="
                        bg-white
                        divide-y
                        dark:divide-gray-700 dark:bg-gray-800
                      "
                    >
                      <tr
                        class="
                          bg-gray-50
                          dark:bg-gray-800
                          text-left
                          hover:bg-gray-100
                          dark:hover:bg-gray-900
                          text-gray-700
                          dark:text-gray-400
                        "
                      >
                        <td class="py-3">
                          <div class="px-2 py-3 text-sm">
                            <!-- <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                          <img class="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="" loading="lazy" />
                          <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                        </div> -->
                            <div>
                              December 1,2022
                              <!-- <p class="font-semibold">Hans Burger</p>
                          <p class="text-xs text-gray-600 dark:text-gray-400">10x Developer</p> -->
                            </div>
                          </div>
                        </td>
                        <td class="px-2 py-3 text-sm">Overtime</td>
                        <td class="px-2 py-3 text-sm">7:30 a.m.</td>
                        <td class="px-2 py-3 text-sm">
                          12:00 p.m.
                          <!-- <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"> Approved </span> -->
                        </td>
                        <td class="px-2 py-3 text-sm">01:00 p.m.</td>
                        <td class="px-2 py-3 text-sm">04:00 p.m.</td>
                        <td class="px-2 py-3 text-sm">04:20 p.m.</td>
                        <td class="px-2 py-3 text-sm">06:00 p.m.</td>
                        <td class="px-2 py-3 text-sm">10 hrs 30 mins</td>
                      </tr>
                      <tr
                        class="
                          bg-gray-50
                          dark:bg-gray-800
                          text-left
                          hover:bg-gray-100
                          dark:hover:bg-gray-900
                          text-gray-700
                          dark:text-gray-400
                        "
                      >
                        <td class="py-3">
                          <div class="px-2 py-3 text-sm">
                            <!-- <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                          <img class="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="" loading="lazy" />
                          <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                        </div> -->
                            <div>
                              December 2,2022
                              <!-- <p class="font-semibold">Hans Burger</p>
                          <p class="text-xs text-gray-600 dark:text-gray-400">10x Developer</p> -->
                            </div>
                          </div>
                        </td>
                        <td class="px-2 py-3 text-sm">Overtime</td>
                        <td class="px-2 py-3 text-sm">7:30 a.m.</td>
                        <td class="px-2 py-3 text-sm">
                          12:00 p.m.
                          <!-- <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"> Approved </span> -->
                        </td>
                        <td class="px-2 py-3 text-sm">01:00 p.m.</td>
                        <td class="px-2 py-3 text-sm">04:00 p.m.</td>
                        <td class="px-2 py-3 text-sm">04:20 p.m.</td>
                        <td class="px-2 py-3 text-sm">06:00 p.m.</td>
                        <td class="px-2 py-3 text-sm">10 hrs 30 mins</td>
                      </tr>
                      <tr
                        class="
                          bg-gray-50
                          dark:bg-gray-800
                          text-left
                          hover:bg-gray-100
                          dark:hover:bg-gray-900
                          text-gray-700
                          dark:text-gray-400
                        "
                      >
                        <td class="py-3">
                          <div class="px-2 py-3 text-sm">
                            <!-- <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                          <img class="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="" loading="lazy" />
                          <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                        </div> -->
                            <div>
                              December 3,2022
                              <!-- <p class="font-semibold">Hans Burger</p>
                          <p class="text-xs text-gray-600 dark:text-gray-400">10x Developer</p> -->
                            </div>
                          </div>
                        </td>
                        <td class="px-2 py-3 text-sm">Overtime</td>
                        <td class="px-2 py-3 text-sm">7:30 a.m.</td>
                        <td class="px-2 py-3 text-sm">
                          12:00 p.m.
                          <!-- <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"> Approved </span> -->
                        </td>
                        <td class="px-2 py-3 text-sm">01:00 p.m.</td>
                        <td class="px-2 py-3 text-sm">04:00 p.m.</td>
                        <td class="px-2 py-3 text-sm">04:20 p.m.</td>
                        <td class="px-2 py-3 text-sm">06:00 p.m.</td>
                        <td class="px-2 py-3 text-sm">10 hrs 30 mins</td>
                      </tr>
                      <tr
                        class="
                          bg-gray-50
                          dark:bg-gray-800
                          text-left
                          hover:bg-gray-100
                          dark:hover:bg-gray-900
                          text-gray-700
                          dark:text-gray-400
                        "
                      >
                        <td class="py-3">
                          <div class="px-2 py-3 text-sm">
                            <!-- <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                          <img class="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="" loading="lazy" />
                          <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                        </div> -->
                            <div>
                              December 4,2022
                              <!-- <p class="font-semibold">Hans Burger</p>
                          <p class="text-xs text-gray-600 dark:text-gray-400">10x Developer</p> -->
                            </div>
                          </div>
                        </td>
                        <td class="px-2 py-3 text-sm">Overtime</td>
                        <td class="px-2 py-3 text-sm">7:30 a.m.</td>
                        <td class="px-2 py-3 text-sm">
                          12:00 p.m.
                          <!-- <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"> Approved </span> -->
                        </td>
                        <td class="px-2 py-3 text-sm">01:00 p.m.</td>
                        <td class="px-2 py-3 text-sm">04:00 p.m.</td>
                        <td class="px-2 py-3 text-sm">04:20 p.m.</td>
                        <td class="px-2 py-3 text-sm">06:00 p.m.</td>
                        <td class="px-2 py-3 text-sm">10 hrs 30 mins</td>
                      </tr>
                      <tr
                        class="
                          bg-gray-50
                          dark:bg-gray-800
                          text-left
                          hover:bg-gray-100
                          dark:hover:bg-gray-900
                          text-gray-700
                          dark:text-gray-400
                        "
                      >
                        <td class="py-3">
                          <div class="px-2 py-3 text-sm">
                            <!-- <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                          <img class="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="" loading="lazy" />
                          <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                        </div> -->
                            <div>
                              December 5,2022
                              <!-- <p class="font-semibold">Hans Burger</p>
                          <p class="text-xs text-gray-600 dark:text-gray-400">10x Developer</p> -->
                            </div>
                          </div>
                        </td>
                        <td class="px-2 py-3 text-sm">Overtime</td>
                        <td class="px-2 py-3 text-sm">7:30 a.m.</td>
                        <td class="px-2 py-3 text-sm">
                          12:00 p.m.
                          <!-- <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"> Approved </span> -->
                        </td>
                        <td class="px-2 py-3 text-sm">01:00 p.m.</td>
                        <td class="px-2 py-3 text-sm">04:00 p.m.</td>
                        <td class="px-2 py-3 text-sm">04:20 p.m.</td>
                        <td class="px-2 py-3 text-sm">06:00 p.m.</td>
                        <td class="px-2 py-3 text-sm">10 hrs 30 mins</td>
                      </tr>
                      <tr
                        class="
                          bg-gray-50
                          dark:bg-gray-800
                          text-left
                          hover:bg-gray-100
                          dark:hover:bg-gray-900
                          text-gray-700
                          dark:text-gray-400
                        "
                      >
                        <td class="py-3">
                          <div class="px-2 py-3 text-sm">
                            <!-- <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                          <img class="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="" loading="lazy" />
                          <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                        </div> -->
                            <div>
                              December 6,2022
                              <!-- <p class="font-semibold">Hans Burger</p>
                          <p class="text-xs text-gray-600 dark:text-gray-400">10x Developer</p> -->
                            </div>
                          </div>
                        </td>
                        <td class="px-2 py-3 text-sm">Overtime</td>
                        <td class="px-2 py-3 text-sm">7:30 a.m.</td>
                        <td class="px-2 py-3 text-sm">
                          12:00 p.m.
                          <!-- <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"> Approved </span> -->
                        </td>
                        <td class="px-2 py-3 text-sm">01:00 p.m.</td>
                        <td class="px-2 py-3 text-sm">04:00 p.m.</td>
                        <td class="px-2 py-3 text-sm">04:20 p.m.</td>
                        <td class="px-2 py-3 text-sm">06:00 p.m.</td>
                        <td class="px-2 py-3 text-sm">10 hrs 30 mins</td>
                      </tr>
                      <tr
                        class="
                          bg-gray-50
                          dark:bg-gray-800
                          text-left
                          hover:bg-gray-100
                          dark:hover:bg-gray-900
                          text-gray-700
                          dark:text-gray-400
                        "
                      >
                        <td class="py-3">
                          <div class="px-2 py-3 text-sm">
                            <!-- <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                          <img class="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="" loading="lazy" />
                          <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                        </div> -->
                            <div>
                              December 7,2022
                              <!-- <p class="font-semibold">Hans Burger</p>
                          <p class="text-xs text-gray-600 dark:text-gray-400">10x Developer</p> -->
                            </div>
                          </div>
                        </td>
                        <td class="px-2 py-3 text-sm">Overtime</td>
                        <td class="px-2 py-3 text-sm">7:30 a.m.</td>
                        <td class="px-2 py-3 text-sm">
                          12:00 p.m.
                          <!-- <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"> Approved </span> -->
                        </td>
                        <td class="px-2 py-3 text-sm">01:00 p.m.</td>
                        <td class="px-2 py-3 text-sm">04:00 p.m.</td>
                        <td class="px-2 py-3 text-sm">04:20 p.m.</td>
                        <td class="px-2 py-3 text-sm">06:00 p.m.</td>
                        <td class="px-2 py-3 text-sm">10 hrs 30 mins</td>
                      </tr>
                      <tr
                        class="
                          bg-gray-50
                          dark:bg-gray-800
                          text-left
                          hover:bg-gray-100
                          dark:hover:bg-gray-900
                          text-gray-700
                          dark:text-gray-400
                        "
                      >
                        <td class="py-3">
                          <div class="px-2 py-3 text-sm">
                            <!-- <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                          <img class="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="" loading="lazy" />
                          <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                        </div> -->
                            <div>
                              December 8,2022
                              <!-- <p class="font-semibold">Hans Burger</p>
                          <p class="text-xs text-gray-600 dark:text-gray-400">10x Developer</p> -->
                            </div>
                          </div>
                        </td>
                        <td class="px-2 py-3 text-sm">Overtime</td>
                        <td class="py-3 text-sm">7:30 a.m.</td>
                        <td class="py-3 text-sm">
                          12:00 p.m.
                          <!-- <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"> Approved </span> -->
                        </td>
                        <td class="py-3 text-sm">01:00 p.m.</td>
                        <td class="py-3 text-sm">04:00 p.m.</td>
                        <td class="py-3 text-sm">04:20 p.m.</td>
                        <td class="py-3 text-sm">06:00 p.m.</td>
                        <td class="py-3 text-sm">10 hrs 30 mins</td>
                      </tr>
                      <tr
                        class="
                          bg-gray-50
                          dark:bg-gray-800
                          text-left
                          hover:bg-gray-100
                          dark:hover:bg-gray-900
                          text-gray-700
                          dark:text-gray-400
                        "
                      >
                        <td class="py-3">
                          <div class="px-2 py-3 text-sm">
                            <!-- <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                          <img class="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="" loading="lazy" />
                          <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                        </div> -->
                            <div>
                              December 9,2022
                              <!-- <p class="font-semibold">Hans Burger</p>
                          <p class="text-xs text-gray-600 dark:text-gray-400">10x Developer</p> -->
                            </div>
                          </div>
                        </td>
                        <td class="px-2 py-3 text-sm">Overtime</td>
                        <td class="py-3 text-sm">7:30 a.m.</td>
                        <td class="py-3 text-sm">
                          12:00 p.m.
                          <!-- <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"> Approved </span> -->
                        </td>
                        <td class="py-3 text-sm">01:00 p.m.</td>
                        <td class="py-3 text-sm">04:00 p.m.</td>
                        <td class="py-3 text-sm">04:20 p.m.</td>
                        <td class="py-3 text-sm">06:00 p.m.</td>
                        <td class="py-3 text-sm">10 hrs 30 mins</td>
                      </tr>
                      <tr
                        class="
                          bg-gray-50
                          dark:bg-gray-800
                          text-left
                          hover:bg-gray-100
                          dark:hover:bg-gray-900
                          text-gray-700
                          dark:text-gray-400
                        "
                      >
                        <td class="py-3">
                          <div class="px-2 py-3 text-sm">
                            <!-- <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                          <img class="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="" loading="lazy" />
                          <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                        </div> -->
                            <div>
                              December 10,2022
                              <!-- <p class="font-semibold">Hans Burger</p>
                          <p class="text-xs text-gray-600 dark:text-gray-400">10x Developer</p> -->
                            </div>
                          </div>
                        </td>
                        <td class="px-2 py-3 text-sm">Overtime</td>
                        <td class="py-3 text-sm">7:30 a.m.</td>
                        <td class="py-3 text-sm">
                          12:00 p.m.
                          <!-- <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"> Approved </span> -->
                        </td>
                        <td class="py-3 text-sm">01:00 p.m.</td>
                        <td class="py-3 text-sm">04:00 p.m.</td>
                        <td class="py-3 text-sm">04:20 p.m.</td>
                        <td class="py-3 text-sm">06:00 p.m.</td>
                        <td class="py-3 text-sm">10 hrs 30 mins</td>
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
                    rounded-b-lg
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
