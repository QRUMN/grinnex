<template>
  <div class="min-h-screen bg-gray-900 flex flex-col py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <router-link to="/" class="flex items-center text-gray-300 hover:text-gray-100 mb-8">
        <svg class="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back
      </router-link>
      <div class="flex justify-center mb-8">
        <svg class="h-12 w-12 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
        </svg>
      </div>
      <h2 class="text-center text-3xl font-bold text-white">
        Sign in to your account
      </h2>
      <p class="mt-2 text-center text-sm text-gray-400">
        Or
        <router-link
          to="/onboarding"
          class="font-medium text-emerald-400 hover:text-emerald-300"
        >
          schedule a free inspection
        </router-link>
      </p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <div class="mb-6">
          <div class="flex justify-center space-x-4">
            <button
              @click="accountType = 'residential'"
              :class="[
                'px-4 py-2 rounded-md text-sm font-medium',
                accountType === 'residential'
                  ? 'bg-emerald-400 text-white'
                  : 'text-gray-300 hover:text-white'
              ]"
            >
              Residential
            </button>
            <button
              @click="accountType = 'commercial'"
              :class="[
                'px-4 py-2 rounded-md text-sm font-medium',
                accountType === 'commercial'
                  ? 'bg-emerald-400 text-white'
                  : 'text-gray-300 hover:text-white'
              ]"
            >
              Commercial
            </button>
            <button
              @click="accountType = 'admin'"
              :class="[
                'px-4 py-2 rounded-md text-sm font-medium',
                accountType === 'admin'
                  ? 'bg-emerald-400 text-white'
                  : 'text-gray-300 hover:text-white'
              ]"
            >
              Admin
            </button>
          </div>
        </div>

        <form class="space-y-6" @submit.prevent="handleSubmit">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-300">
              Email address
            </label>
            <div class="mt-1">
              <input
                id="email"
                v-model="form.email"
                name="email"
                type="email"
                autocomplete="email"
                required
                :class="{'border-red-500': errors.email}"
                class="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-emerald-400 focus:border-emerald-400 sm:text-sm"
              />
              <p v-if="errors.email" class="mt-1 text-sm text-red-400">{{ errors.email }}</p>
            </div>
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-300">
              Password
            </label>
            <div class="mt-1">
              <input
                id="password"
                v-model="form.password"
                :type="showPassword ? 'text' : 'password'"
                name="password"
                required
                :class="{'border-red-500': errors.password}"
                class="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-emerald-400 focus:border-emerald-400 sm:text-sm"
              />
              <p v-if="errors.password" class="mt-1 text-sm text-red-400">{{ errors.password }}</p>
            </div>
          </div>

          <div>
            <button
              type="submit"
              :disabled="loading"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-400 hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400 disabled:opacity-50"
            >
              <span v-if="loading" class="mr-2">
                <svg class="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </span>
              Sign in
            </button>
          </div>
        </form>

        <div class="mt-6 text-center">
          <p class="text-sm text-gray-400">
            Don't have an account?{' '}
            <router-link to="/auth/create-account" class="font-medium text-emerald-400 hover:text-emerald-300">
              Get started
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const loading = ref(false);
const showPassword = ref(false);
const accountType = ref('residential');

const form = reactive({
  email: '',
  password: '',
});

const errors = reactive({
  email: '',
  password: ''
});

const handleSubmit = async () => {
  loading.value = true;
  errors.email = '';
  errors.password = '';

  try {
    // Add your authentication logic here
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
    router.push('/dashboard');
  } catch (error) {
    if (error.response?.data?.errors) {
      Object.assign(errors, error.response.data.errors);
    } else {
      errors.email = 'Invalid email or password';
    }
  } finally {
    loading.value = false;
  }
};
</script>
