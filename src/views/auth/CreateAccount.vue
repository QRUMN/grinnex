<template>
  <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <img class="mx-auto h-12 w-auto" src="/logo.svg" alt="Grinnage Extermination" />
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Create Your Account
      </h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        Choose the type of account that best suits your needs
      </p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <div class="space-y-6">
          <div>
            <router-link
              to="/onboarding"
              class="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Create Personal Account
            </router-link>
            <p class="mt-2 text-sm text-gray-500 text-center">
              For individual users looking to manage their pest control services
            </p>
          </div>

          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-white text-gray-500">Or</span>
            </div>
          </div>

          <div>
            <router-link
              to="/auth/business-onboarding"
              class="w-full flex justify-center py-3 px-4 border-2 border-indigo-600 rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Create Business Account
            </router-link>
            <p class="mt-2 text-sm text-gray-500 text-center">
              For pest control businesses looking to expand their services
            </p>
          </div>

          <div class="mt-6 text-center">
            <router-link
              to="/login"
              class="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Already have an account? Sign in
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// No additional setup needed for this component
</script>
