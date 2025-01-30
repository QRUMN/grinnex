<template>
  <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
      <div class="mb-8">
        <h2 class="text-center text-3xl font-extrabold text-gray-900">
          {{ stepTitles[step - 1] }}
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          Step {{ step }} of 4
        </p>
      </div>

      <form @submit.prevent="enhancedHandleSubmit" class="space-y-6">
        <!-- Step 1: Basic Information -->
        <div v-if="step === 1">
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700">Client Type</label>
              <select v-model="form.clientType" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Full Name</label>
              <input v-model="form.fullName" type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Email</label>
              <input v-model="form.email" type="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Password</label>
              <div class="relative">
                <input 
                  v-model="form.password" 
                  :type="showPassword ? 'text' : 'password'"
                  :class="{'border-red-500': errors.password}"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 pr-10" />
                <button 
                  type="button"
                  @click="togglePassword"
                  class="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <i class="fas" :class="showPassword ? 'fa-eye-slash' : 'fa-eye'"></i>
                </button>
              </div>
              <!-- Password Requirements -->
              <div class="mt-2 space-y-2">
                <p class="text-sm font-medium text-gray-700">Password Requirements:</p>
                <ul class="text-sm space-y-1">
                  <li class="flex items-center space-x-2">
                    <svg 
                      :class="validationStatus.password.hasMinLength ? 'text-green-500' : 'text-gray-300'"
                      class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span :class="validationStatus.password.hasMinLength ? 'text-green-700' : 'text-gray-500'">
                      At least 8 characters
                    </span>
                  </li>
                  <li class="flex items-center space-x-2">
                    <svg 
                      :class="validationStatus.password.hasUpperCase ? 'text-green-500' : 'text-gray-300'"
                      class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span :class="validationStatus.password.hasUpperCase ? 'text-green-700' : 'text-gray-500'">
                      One uppercase letter
                    </span>
                  </li>
                  <li class="flex items-center space-x-2">
                    <svg 
                      :class="validationStatus.password.hasLowerCase ? 'text-green-500' : 'text-gray-300'"
                      class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span :class="validationStatus.password.hasLowerCase ? 'text-green-700' : 'text-gray-500'">
                      One lowercase letter
                    </span>
                  </li>
                  <li class="flex items-center space-x-2">
                    <svg 
                      :class="validationStatus.password.hasNumber ? 'text-green-500' : 'text-gray-300'"
                      class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span :class="validationStatus.password.hasNumber ? 'text-green-700' : 'text-gray-500'">
                      One number
                    </span>
                  </li>
                  <li class="flex items-center space-x-2">
                    <svg 
                      :class="validationStatus.password.hasSpecial ? 'text-green-500' : 'text-gray-300'"
                      class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span :class="validationStatus.password.hasSpecial ? 'text-green-700' : 'text-gray-500'">
                      One special character
                    </span>
                  </li>
                </ul>
              </div>
              <p v-if="errors.password" class="mt-1 text-sm text-red-600">{{ errors.password }}</p>
            </div>
          </div>
        </div>

        <!-- Step 2: Contact Information -->
        <div v-if="step === 2">
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700">Phone Number</label>
              <input v-model="form.phone" type="tel" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Street Address</label>
              <div class="relative">
                <input 
                  ref="addressInput"
                  v-model="form.address" 
                  :class="{
                    'border-red-500': errors.address,
                    'border-green-500': form.isAddressVerified
                  }"
                  type="text" 
                  @input="handleAddressInput"
                  placeholder="Start typing to search..."
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
                <!-- Status Indicator -->
                <div class="absolute inset-y-0 right-0 flex items-center pr-3">
                  <div v-if="addressLoading" class="animate-spin h-5 w-5 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  </div>
                  <svg v-else-if="form.isAddressVerified" class="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <!-- Address Suggestions Dropdown -->
                <div v-if="addressSuggestions.length > 0" 
                  class="absolute z-10 w-full bg-white mt-1 rounded-md shadow-lg max-h-60 overflow-auto">
                  <ul class="py-1 text-base ring-1 ring-black ring-opacity-5 divide-y divide-gray-100">
                    <li 
                      v-for="suggestion in addressSuggestions" 
                      :key="suggestion.fullAddress"
                      @click="selectAddress(suggestion)"
                      class="cursor-pointer hover:bg-gray-100"
                    >
                      <div class="px-4 py-2">
                        <div class="font-medium text-gray-900">{{ suggestion.components.street }}</div>
                        <div class="text-sm text-gray-500">
                          {{ suggestion.components.city }}, {{ suggestion.components.state }} {{ suggestion.components.zipCode }}
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <p v-if="errors.address" class="mt-1 text-sm text-red-600">{{ errors.address }}</p>
              <p v-if="!form.isAddressVerified && !errors.address" class="mt-1 text-sm text-gray-500">
                Please select an address from the suggestions to verify
              </p>
            </div>

            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700">City</label>
                <input 
                  v-model="form.city" 
                  :class="{'border-red-500': errors.city}"
                  type="text" 
                  readonly
                  class="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
                <p v-if="errors.city" class="mt-1 text-sm text-red-600">{{ errors.city }}</p>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700">State</label>
                <input 
                  v-model="form.state" 
                  :class="{'border-red-500': errors.state}"
                  type="text" 
                  readonly
                  class="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
                <p v-if="errors.state" class="mt-1 text-sm text-red-600">{{ errors.state }}</p>
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700">ZIP Code</label>
              <input 
                v-model="form.zipCode" 
                :class="{'border-red-500': errors.zipCode}"
                type="text" 
                readonly
                class="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
              <p v-if="errors.zipCode" class="mt-1 text-sm text-red-600">{{ errors.zipCode }}</p>
            </div>
          </div>
        </div>

        <!-- Step 3: Property Details -->
        <div v-if="step === 3">
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700">Property Size</label>
              <select v-model="form.propertySize" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                <option value="small">Small (< 1,000 sq ft)</option>
                <option value="medium">Medium (1,000 - 2,500 sq ft)</option>
                <option value="large">Large (> 2,500 sq ft)</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Problem Area</label>
              <input v-model="form.problemArea" type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
            </div>
          </div>
        </div>

        <!-- Step 4: Service Details -->
        <div v-if="step === 4">
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700">Pest Type</label>
              <select v-model="form.pestType" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                <option value="ants">Ants</option>
                <option value="roaches">Roaches</option>
                <option value="rodents">Rodents</option>
                <option value="termites">Termites</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Describe the Pest Problem</label>
              <textarea v-model="form.pestProblem" rows="3" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"></textarea>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Preferred Service Date</label>
              <input v-model="form.preferredDate" type="date" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Additional Notes</label>
              <textarea v-model="form.additionalNotes" rows="2" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"></textarea>
            </div>
          </div>
        </div>

        <!-- Navigation Buttons -->
        <div class="flex justify-between space-x-4">
          <button
            v-if="step > 1"
            type="button"
            @click="prevStep"
            class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Previous
          </button>
          <button
            type="button"
            v-if="step < 4"
            @click="nextStep"
            class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Next
          </button>
          <button
            v-if="step === 4"
            type="submit"
            class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Complete Registration
          </button>
        </div>
      </form>
    </div>
  </div>

  <!-- Success Modal -->
  <TransitionRoot as="template" :show="showSuccessModal">
    <Dialog as="div" class="fixed z-10 inset-0 overflow-y-auto" @close="closeSuccessModal">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <DialogPanel class="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
            <DialogTitle as="h3" class="text-lg leading-6 font-medium text-gray-900">
              Registration Successful!
            </DialogTitle>
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <p class="text-sm text-gray-500">
                    You have successfully completed the registration process. You will be redirected to the dashboard shortly.
                  </p>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm" @click="closeSuccessModal">
                OK
              </button>
            </div>
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useOnboardingForm } from '../hooks/useOnboardingForm';
import { Dialog, DialogPanel, DialogTitle, TransitionRoot, TransitionChild } from '@headlessui/vue';
import { vMask } from 'vue-the-mask';
import debounce from 'lodash/debounce';
import { searchAddress, type AddressSuggestion } from '../lib/services/mapbox';

const router = useRouter();
const { step, nextStep, prevStep, handleSubmit } = useOnboardingForm();
const addressInput = ref(null);
const showPassword = ref(false);
const loading = ref(false);
const showSuccessModal = ref(false);
const addressSuggestions = ref<AddressSuggestion[]>([]);
const addressLoading = ref(false);

const stepTitles = [
  'Basic Information',
  'Contact Details',
  'Property Information',
  'Service Requirements'
];

const form = reactive({
  clientType: 'residential',
  fullName: '',
  email: '',
  password: '',
  phone: '',
  address: '',
  city: '',
  state: '',
  zipCode: '',
  propertySize: '',
  problemArea: '',
  pestType: '',
  pestProblem: '',
  preferredDate: '',
  additionalNotes: '',
  isAddressVerified: false
});

const errors = reactive({
  clientType: '',
  fullName: '',
  email: '',
  password: '',
  phone: '',
  address: '',
  city: '',
  state: '',
  zipCode: '',
  propertySize: '',
  problemArea: '',
  pestType: '',
  pestProblem: ''
});

// Password strength computation
const passwordStrengthScore = computed(() => {
  const password = form.password;
  let score = 0;
  
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;
  
  return score;
});

const passwordStrength = computed(() => {
  const score = passwordStrengthScore.value;
  return ['Very Weak', 'Weak', 'Medium', 'Strong', 'Very Strong'][score - 1] || 'Very Weak';
});

const passwordStrengthColor = computed(() => {
  const score = passwordStrengthScore.value;
  return {
    'text-red-500': score <= 2,
    'text-yellow-500': score === 3,
    'text-green-500': score >= 4
  };
});

const passwordStrengthBarColor = computed(() => {
  const score = passwordStrengthScore.value;
  return {
    'bg-red-500': score <= 2,
    'bg-yellow-500': score === 3,
    'bg-green-500': score >= 4
  };
});

// Field validation status
const validationStatus = reactive({
  password: {
    hasMinLength: false,
    hasUpperCase: false,
    hasLowerCase: false,
    hasNumber: false,
    hasSpecial: false
  }
});

// Update password validation status
const updatePasswordValidation = () => {
  const password = form.password;
  validationStatus.password = {
    hasMinLength: password.length >= 8,
    hasUpperCase: /[A-Z]/.test(password),
    hasLowerCase: /[a-z]/.test(password),
    hasNumber: /[0-9]/.test(password),
    hasSpecial: /[^A-Za-z0-9]/.test(password)
  };
};

// Watch for password changes
watch(() => form.password, updatePasswordValidation);

// Address autocomplete
const handleAddressInput = debounce(async (event) => {
  form.isAddressVerified = false;
  const query = event.target.value;
  if (query.length < 3) {
    addressSuggestions.value = [];
    return;
  }

  addressLoading.value = true;
  try {
    const suggestions = await searchAddress(query);
    addressSuggestions.value = suggestions;
  } catch (error) {
    console.error('Error fetching address suggestions:', error);
    addressSuggestions.value = [];
  } finally {
    addressLoading.value = false;
  }
}, 300);

const selectAddress = (suggestion: AddressSuggestion) => {
  const { components } = suggestion;
  form.address = components.street;
  form.city = components.city;
  form.state = components.state;
  form.zipCode = components.zipCode;
  form.isAddressVerified = true;
  addressSuggestions.value = [];
};

// Form navigation
const goToStep = (newStep) => {
  // Only allow going to completed steps or next step
  if (newStep <= step.value + 1) {
    step.value = newStep;
  }
};

const togglePassword = () => {
  showPassword.value = !showPassword.value;
};

const closeSuccessModal = () => {
  showSuccessModal.value = false;
  router.push('/dashboard');
};

// Enhanced form submission with proper validation
const enhancedHandleSubmit = async () => {
  loading.value = true;
  errors.value = {};

  try {
    if (!form.isAddressVerified) {
      errors.value.address = 'Please select a verified address from the suggestions';
      return;
    }

    await handleSubmit();
    showSuccessModal.value = true;
  } catch (error) {
    if (error.validationErrors) {
      Object.assign(errors, error.validationErrors);
    } else {
      console.error('Submission error:', error);
    }
  } finally {
    loading.value = false;
  }
};

// Cleanup
onMounted(() => {
  // Initialize any third-party services here
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
