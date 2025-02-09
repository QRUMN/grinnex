<template>
  <nav class="bg-gray-900 border-b border-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex-shrink-0 flex items-center">
            <router-link to="/">
              <svg class="h-8 w-8 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
              </svg>
            </router-link>
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <router-link
              to="/"
              class="text-gray-300 hover:text-white inline-flex items-center px-1 pt-1 text-sm font-medium"
              :class="{ 'text-emerald-400 border-b-2 border-emerald-400': $route.path === '/' }"
            >
              Home
            </router-link>
            <router-link
              to="/services"
              class="text-gray-300 hover:text-white inline-flex items-center px-1 pt-1 text-sm font-medium"
              :class="{ 'text-emerald-400 border-b-2 border-emerald-400': $route.path === '/services' }"
            >
              Services
            </router-link>
            <router-link
              to="/about"
              class="text-gray-300 hover:text-white inline-flex items-center px-1 pt-1 text-sm font-medium"
              :class="{ 'text-emerald-400 border-b-2 border-emerald-400': $route.path === '/about' }"
            >
              About
            </router-link>
            <router-link
              to="/contact"
              class="text-gray-300 hover:text-white inline-flex items-center px-1 pt-1 text-sm font-medium"
              :class="{ 'text-emerald-400 border-b-2 border-emerald-400': $route.path === '/contact' }"
            >
              Contact
            </router-link>
          </div>
        </div>
        <div class="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
          <router-link
            v-if="!isAuthenticated"
            to="/onboarding"
            class="inline-flex items-center px-4 py-2 border border-emerald-400 rounded-md shadow-sm text-sm font-medium text-emerald-400 bg-transparent hover:bg-emerald-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400"
          >
            Schedule Inspection
          </router-link>
          <router-link
            v-if="!isAuthenticated"
            to="/auth/create-account"
            class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-400 hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400"
          >
            Get Started
          </router-link>
          <router-link
            v-if="!isAuthenticated"
            to="/login"
            class="text-gray-300 hover:text-white inline-flex items-center px-1 pt-1 text-sm font-medium"
          >
            Sign in
          </router-link>
          <div v-if="isAuthenticated" class="relative ml-3">
            <button
              @click="profileMenuOpen = !profileMenuOpen"
              class="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400"
            >
              <span class="sr-only">Open user menu</span>
              <div class="h-8 w-8 rounded-full bg-emerald-400 flex items-center justify-center text-white">
                {{ userInitials }}
              </div>
            </button>
            <!-- Profile dropdown -->
            <div
              v-if="profileMenuOpen"
              class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <router-link
                to="/dashboard"
                class="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700"
              >
                Dashboard
              </router-link>
              <router-link
                to="/profile"
                class="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700"
              >
                Profile
              </router-link>
              <button
                @click="logout"
                class="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="flex items-center sm:hidden">
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-400"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              :class="{'hidden': mobileMenuOpen, 'block': !mobileMenuOpen}"
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              :class="{'block': mobileMenuOpen, 'hidden': !mobileMenuOpen}"
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div :class="{'block': mobileMenuOpen, 'hidden': !mobileMenuOpen}" class="sm:hidden">
      <div class="pt-2 pb-3 space-y-1">
        <router-link
          to="/"
          class="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
          :class="{ 'text-emerald-400 bg-gray-800': $route.path === '/' }"
        >
          Home
        </router-link>
        <router-link
          to="/services"
          class="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
          :class="{ 'text-emerald-400 bg-gray-800': $route.path === '/services' }"
        >
          Services
        </router-link>
        <router-link
          to="/about"
          class="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
          :class="{ 'text-emerald-400 bg-gray-800': $route.path === '/about' }"
        >
          About
        </router-link>
        <router-link
          to="/contact"
          class="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
          :class="{ 'text-emerald-400 bg-gray-800': $route.path === '/contact' }"
        >
          Contact
        </router-link>
      </div>
      <div class="pt-4 pb-3 border-t border-gray-700">
        <div v-if="!isAuthenticated" class="space-y-1">
          <router-link
            to="/onboarding"
            class="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
          >
            Schedule Inspection
          </router-link>
          <router-link
            to="/auth/create-account"
            class="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
          >
            Get Started
          </router-link>
          <router-link
            to="/login"
            class="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
          >
            Sign in
          </router-link>
        </div>
        <div v-else class="space-y-1">
          <router-link
            to="/dashboard"
            class="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
          >
            Dashboard
          </router-link>
          <router-link
            to="/profile"
            class="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
          >
            Profile
          </router-link>
          <button
            @click="logout"
            class="block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const mobileMenuOpen = ref(false);
const profileMenuOpen = ref(false);

const isAuthenticated = computed(() => {
  return !!localStorage.getItem('token');
});

const userInitials = computed(() => {
  const user = localStorage.getItem('user');
  if (user) {
    const userData = JSON.parse(user);
    return userData.name ? userData.name.charAt(0).toUpperCase() : '?';
  }
  return '?';
});

const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  router.push('/login');
  profileMenuOpen.value = false;
  mobileMenuOpen.value = false;
};
</script>
