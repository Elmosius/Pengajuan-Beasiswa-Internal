<template>
  <div>
    <!-- Sidebar backdrop (mobile only) -->
    <div
      class="fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200"
      :class="sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'"
      aria-hidden="true"
    ></div>

    <!-- Sidebar -->
    <div
      id="sidebar"
      ref="sidebar"
      class="flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-24 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-800 p-6 transition-all duration-200 ease-in-out"
      :class="sidebarOpen ? 'translate-x-0' : '-translate-x-64'"
    >
      <!-- Sidebar header -->
      <div class="flex justify-between mb-10 pr-3 sm:px-2 pb-4 border-b border-gray-700">
        <!-- Close button -->
        <button
          ref="trigger"
          class="lg:hidden text-slate-500 hover:text-slate-400"
          @click.stop="$emit('close-sidebar')"
          aria-controls="sidebar"
          :aria-expanded="sidebarOpen"
        >
          <span class="sr-only">Close sidebar</span>
          <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
          </svg>
        </button>
        <!-- Logo -->
        <router-link class="block" to="/">
          <span
            class="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6"
            aria-hidden="true"
            >•••</span
          >
          <h2
            class="text-white text-2xl mt-3 font-medium lg:hidden lg:sidebar-expanded:block 2xl:block"
          >
            Dashboard
          </h2>
        </router-link>
      </div>

      <!-- Links -->
      <div class="space-y-5">
        <!-- Data Fakultas, Prodi, User-->
        <div>
          <h3 class="text-xs uppercase text-slate-500 font-semibold pl-3">
            <span
              class="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6"
              aria-hidden="true"
              >•••</span
            >
            <span class="lg:hidden lg:sidebar-expanded:block 2xl:block">Data</span>
          </h3>
          <ul class="mt-3">
            <SidebarLinkGroup
              v-slot="parentLink"
              :activeCondition="currentRoute.fullPath.includes('data')"
            >
              <a
                class="block text-slate-200 truncate transition duration-150"
                :class="
                  currentRoute.fullPath.includes('data')
                    ? 'hover:text-slate-200'
                    : 'hover:text-white'
                "
                href="#0"
                @click.prevent="
                  sidebarExpanded ? parentLink.handleClick() : (sidebarExpanded = true)
                "
              >
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0 1 12 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5"
                      />
                    </svg>

                    <span
                      class="font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
                      >Data</span
                    >
                  </div>
                  <!-- Icon -->
                  <div class="flex shrink-0 ml-2">
                    <svg
                      class="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400"
                      :class="parentLink.expanded && 'rotate-180'"
                      viewBox="0 0 12 12"
                    >
                      <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                    </svg>
                  </div>
                </div>
              </a>
              <div class="lg:hidden lg:sidebar-expanded:block 2xl:block">
                <ul class="pl-9 mt-2 space-y-2" :class="!parentLink.expanded && 'hidden'">
                  <router-link
                    to="/data/fakultas"
                    custom
                    v-slot="{ href, navigate, isExactActive }"
                  >
                    <li class="mb-1 last:mb-0">
                      <a
                        class="block transition duration-150 truncate"
                        :class="
                          isExactActive ? 'text-slate-100' : 'text-slate-400 hover:text-slate-200'
                        "
                        :href="href"
                        @click="navigate"
                      >
                        <span
                          class="font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
                          >Fakultas</span
                        >
                      </a>
                    </li>
                  </router-link>
                  <router-link
                    to="/data/program-studi"
                    custom
                    v-slot="{ href, navigate, isExactActive }"
                  >
                    <li class="mb-1 last:mb-0">
                      <a
                        class="block transition duration-150 truncate"
                        :class="
                          isExactActive ? 'text-slate-100' : 'text-slate-400 hover:text-slate-200'
                        "
                        :href="href"
                        @click="navigate"
                      >
                        <span
                          class="font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
                          >Program Studi</span
                        >
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/data/users" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a
                        class="block transition duration-150 truncate"
                        :class="
                          isExactActive ? 'text-slate-100' : 'text-slate-400 hover:text-slate-200'
                        "
                        :href="href"
                        @click="navigate"
                      >
                        <span
                          class="font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
                          >User</span
                        >
                      </a>
                    </li>
                  </router-link>
                </ul>
              </div>
            </SidebarLinkGroup>
          </ul>
        </div>

        <!-- Beasiswa -->
        <div>
          <h3 class="text-xs uppercase text-slate-500 font-semibold pl-3">
            <span
              class="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6"
              aria-hidden="true"
              >•••</span
            >
            <span class="lg:hidden lg:sidebar-expanded:block 2xl:block">BEASISWA</span>
          </h3>
          <ul class="mt-3">
            <!-- beasiswa -->
            <SidebarLinkGroup
              v-slot="parentLink"
              :activeCondition="currentRoute.fullPath.includes('beasiswa')"
            >
              <a
                class="block text-slate-200 truncate transition duration-150"
                :class="
                  currentRoute.fullPath.includes('beasiswa')
                    ? 'hover:text-slate-200'
                    : 'hover:text-white'
                "
                href="#0"
                @click.prevent="
                  sidebarExpanded ? parentLink.handleClick() : (sidebarExpanded = true)
                "
              >
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                      />
                    </svg>

                    <span
                      class="font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
                      >Beasiswa</span
                    >
                  </div>
                  <!-- Icon -->
                  <div class="flex shrink-0 ml-2">
                    <svg
                      class="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400"
                      :class="parentLink.expanded && 'rotate-180'"
                      viewBox="0 0 12 12"
                    >
                      <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                    </svg>
                  </div>
                </div>
              </a>
              <div class="lg:hidden lg:sidebar-expanded:block 2xl:block">
                <ul class="pl-9 mt-2 space-y-2" :class="!parentLink.expanded && 'hidden'">
                  <router-link
                    to="/beasiswa/daftar-list"
                    custom
                    v-slot="{ href, navigate, isExactActive }"
                  >
                    <li class="mb-1 last:mb-0">
                      <a
                        class="block transition duration-150 truncate"
                        :class="
                          isExactActive ? 'text-slate-100' : 'text-slate-400 hover:text-slate-200'
                        "
                        :href="href"
                        @click="navigate"
                      >
                        <span
                          class="font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
                          >Daftar List</span
                        >
                      </a>
                    </li>
                  </router-link>
                  <router-link
                    to="/beasiswa/pendaftaran"
                    custom
                    v-slot="{ href, navigate, isExactActive }"
                  >
                    <li class="mb-1 last:mb-0">
                      <a
                        class="block transition duration-150 truncate"
                        :class="
                          isExactActive ? 'text-slate-100' : 'text-slate-400 hover:text-slate-200'
                        "
                        :href="href"
                        @click="navigate"
                      >
                        <span
                          class="font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
                          >Pendaftaran</span
                        >
                      </a>
                    </li>
                  </router-link>
                  <router-link
                    to="/beasiswa/history"
                    custom
                    v-slot="{ href, navigate, isExactActive }"
                  >
                    <li class="mb-1 last:mb-0">
                      <a
                        class="block transition duration-150 truncate"
                        :class="
                          isExactActive ? 'text-slate-100' : 'text-slate-400 hover:text-slate-200'
                        "
                        :href="href"
                        @click="navigate"
                      >
                        <span
                          class="font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
                          >History</span
                        >
                      </a>
                    </li>
                  </router-link>
                </ul>
              </div>
            </SidebarLinkGroup>
          </ul>
        </div>

        <!-- Laporan -->
        <div>
          <h3 class="text-xs uppercase text-slate-500 font-semibold pl-3">
            <span
              class="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6"
              aria-hidden="true"
              >•••</span
            >
            <span class="lg:hidden lg:sidebar-expanded:block 2xl:block">LAPORAN</span>
          </h3>
          <ul class="mt-3">
            <SidebarLinkGroup
              v-slot="parentLink"
              :activeCondition="currentRoute.fullPath.includes('laporan')"
            >
              <a
                class="block text-slate-200 truncate transition duration-150"
                :class="
                  currentRoute.fullPath.includes('beasiswa')
                    ? 'hover:text-slate-200'
                    : 'hover:text-white'
                "
                href="#0"
                @click.prevent="
                  sidebarExpanded ? parentLink.handleClick() : (sidebarExpanded = true)
                "
              >
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
                      />
                    </svg>

                    <span
                      class="font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
                      >Laporan</span
                    >
                  </div>
                  <!-- Icon -->
                  <div class="flex shrink-0 ml-2">
                    <svg
                      class="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400"
                      :class="parentLink.expanded && 'rotate-180'"
                      viewBox="0 0 12 12"
                    >
                      <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                    </svg>
                  </div>
                </div>
              </a>
              <div class="lg:hidden lg:sidebar-expanded:block 2xl:block">
                <ul class="pl-9 mt-2 space-y-2" :class="!parentLink.expanded && 'hidden'">
                  <router-link
                    to="/laporan/lihat-pengajuan"
                    custom
                    v-slot="{ href, navigate, isExactActive }"
                  >
                    <li class="mb-1 last:mb-0">
                      <a
                        class="block transition duration-150 truncate"
                        :class="
                          isExactActive ? 'text-slate-100' : 'text-slate-400 hover:text-slate-200'
                        "
                        :href="href"
                        @click="navigate"
                      >
                        <span
                          class="font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
                          >Lihat Laporan</span
                        >
                      </a>
                    </li>
                  </router-link>
                </ul>
              </div>
            </SidebarLinkGroup>
          </ul>
        </div>

        <!-- logout -->
        <div>
          <h3 class="text-xs uppercase text-slate-500 font-semibold pl-3">
            <span
              class="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6"
              aria-hidden="true"
              >•••</span
            >
            <span class="lg:hidden lg:sidebar-expanded:block 2xl:block">Other</span>
          </h3>
          <ul class="mt-3 ms-3">
            <li>
              <a
                class="block text-slate-200 truncate transition duration-150 hover:text-white"
                href="#0"
                @click.prevent="logout"
              >
                <div class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
                    />
                  </svg>
                  <span
                    class="font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
                    >Logout</span
                  >
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Expand / collapse button -->
      <div class="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
        <div class="px-3 py-2">
          <button @click.prevent="sidebarExpanded = !sidebarExpanded">
            <span class="sr-only">Expand / collapse sidebar</span>
            <svg class="w-6 h-6 fill-current sidebar-expanded:rotate-180" viewBox="0 0 24 24">
              <path
                class="text-slate-400"
                d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z"
              />
              <path class="text-slate-600" d="M3 23H1V1h2z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import SidebarLinkGroup from './SidebarLinkGroup.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Sidebar',
  props: ['sidebarOpen'],
  components: {
    SidebarLinkGroup
  },
  setup(props, { emit }) {
    const trigger = ref(null)
    const sidebar = ref(null)
    const router = useRouter()

    const storedSidebarExpanded = localStorage.getItem('sidebar-expanded')
    const sidebarExpanded = ref(
      storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
    )

    function logout() {
      localStorage.removeItem('token')
      router.push('/login')
    }

    const currentRoute = useRouter().currentRoute.value

    // close on click outside
    const clickHandler = ({ target }) => {
      if (!sidebar.value || !trigger.value) return
      if (!props.sidebarOpen || sidebar.value.contains(target) || trigger.value.contains(target))
        return
      emit('close-sidebar')
    }

    // close if the esc key is pressed
    const keyHandler = ({ keyCode }) => {
      if (!props.sidebarOpen || keyCode !== 27) return
      emit('close-sidebar')
    }

    onMounted(() => {
      document.addEventListener('click', clickHandler)
      document.addEventListener('keydown', keyHandler)
    })

    onUnmounted(() => {
      document.removeEventListener('click', clickHandler)
      document.removeEventListener('keydown', keyHandler)
    })

    watch(sidebarExpanded, () => {
      localStorage.setItem('sidebar-expanded', sidebarExpanded.value)
      if (sidebarExpanded.value) {
        document.querySelector('body').classList.add('sidebar-expanded')
      } else {
        document.querySelector('body').classList.remove('sidebar-expanded')
      }
    })

    return {
      trigger,
      sidebar,
      sidebarExpanded,
      currentRoute,
      logout
    }
  }
}
</script>
