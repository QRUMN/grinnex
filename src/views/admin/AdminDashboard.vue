<template>
  <div class="min-h-screen bg-gray-100">
    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
      </div>
    </header>
    <main>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <!-- Create Account Section -->
        <div class="bg-white shadow sm:rounded-lg mb-6">
          <div class="px-4 py-5 sm:p-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900">Create New Account</h3>
            <div class="mt-5">
              <form @submit.prevent="handleCreateAccount" class="space-y-6">
                <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label for="accountType" class="block text-sm font-medium text-gray-700">Account Type</label>
                    <select
                      id="accountType"
                      v-model="form.accountType"
                      class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    >
                      <option value="personal">Personal</option>
                      <option value="business">Business</option>
                      <option value="admin">Admin</option>
                    </select>
                  </div>

                  <div>
                    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      id="email"
                      v-model="form.email"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      required
                    />
                  </div>

                  <div>
                    <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                    <input
                      type="password"
                      id="password"
                      v-model="form.password"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      required
                    />
                  </div>

                  <div v-if="form.accountType === 'business'">
                    <label for="businessName" class="block text-sm font-medium text-gray-700">Business Name</label>
                    <input
                      type="text"
                      id="businessName"
                      v-model="form.businessName"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div class="flex justify-end">
                  <button
                    type="submit"
                    :disabled="loading"
                    class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <span v-if="loading" class="mr-2">
                      <svg class="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </span>
                    Create Account
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <!-- Recent Accounts Section -->
        <div class="bg-white shadow sm:rounded-lg">
          <div class="px-4 py-5 sm:p-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900">Recent Accounts</h3>
            <div class="mt-5">
              <div class="flex flex-col">
                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                      <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                          <tr>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created At</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                          </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                          <tr v-for="account in recentAccounts" :key="account.email">
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ account.email }}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ account.type }}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ account.createdAt }}</td>
                            <td class="px-6 py-4 whitespace-nowrap">
                              <span :class="[
                                account.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800',
                                'px-2 inline-flex text-xs leading-5 font-semibold rounded-full'
                              ]">
                                {{ account.status }}
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';

const loading = ref(false);

const form = reactive({
  accountType: 'personal',
  email: '',
  password: '',
  businessName: ''
});

// Sample data - replace with actual API calls
const recentAccounts = ref([
  {
    email: 'john@example.com',
    type: 'personal',
    createdAt: '2025-02-09',
    status: 'active'
  },
  {
    email: 'acme@business.com',
    type: 'business',
    createdAt: '2025-02-08',
    status: 'active'
  }
]);

const handleCreateAccount = async () => {
  loading.value = true;
  try {
    // Add your account creation logic here
    // For example:
    // await accountService.createAccount(form);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
    
    // Add the new account to the recent accounts list
    recentAccounts.value.unshift({
      email: form.email,
      type: form.accountType,
      createdAt: new Date().toISOString().split('T')[0],
      status: 'active'
    });

    // Reset form
    form.email = '';
    form.password = '';
    form.businessName = '';
    form.accountType = 'personal';

    alert('Account created successfully!');
  } catch (error) {
    alert('Error creating account: ' + error.message);
  } finally {
    loading.value = false;
  }
};
</script>
