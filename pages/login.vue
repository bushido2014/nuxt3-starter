<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
});
const email = ref('');
const password = ref('');
const isSignUp = ref(false);
const errorMsg = ref(null);
const client = useSupabaseClient();

const signUp = async () => {
  try {
    const { user, error } = await client.auth.signUp({
      email: email.value,
      password: password.value,
    });
    if (error) throw error;
  } catch (error) {
    errorMsg.value = error.message;
    setTimeout(() => {
      errorMsg.value = null;
    }, 3000);
    console.log('user', user);
    console.log('error', error);
  }
};

const login = async () => {
  try {
    const { user, error } = await client.auth.signIn({
      email: email.value,
      password: password.value,
    });
    if (error) throw error;
  } catch (error) {
    errorMsg.value = `Error: ${error.message}`;
    setTimeout(() => {
      errorMsg.value = null;
    }, 3000);
    console.log('user', user);
    console.log('error', error);
  }
};

const user = useSupabaseUser();
onMounted(() => {
  watchEffect(() => {
    if (user.value) {
      navigateTo('/dashboard');
    }
  });
});
</script>

<template>
  <div class="max-w-lg mx-auto mt-8">
    <h1 class="font-black text-black text-center">Nuxt Login</h1>
    <div v-if="errorMsg" class="mb-10 p-4 rounded-md bg-light-grey shadow-lg">
      <p class="text-red-500">{{ errorMsg }}</p>
    </div>
    <UForm
      @submit.prevent="() => (isSignUp ? signUp() : login())"
      
    >
      <UFormGroup label="Email" name="email" size="xl">
      <UInput v-model="email" placeholder="you@example.com" icon="i-heroicons-envelope"/>
    </UFormGroup>
     
      <UFormGroup label="Password" name="password" size="xl">
      <UInput v-model="password" type="password" placeholder="Password" />
    </UFormGroup>
      <UButton block size="xl>
        type="submit"
      >
        <span v-if="isSignUp"> Sign up </span>
        <span v-else> Log in </span>
      </UButton>
    </UForm>
    <UButton
      @click="isSignUp = !isSignUp"
      size="xl 
      block
    >
      <span v-if="isSignUp"> Have an account? Log in instead </span>
      <span v-else> Create a new account </span>
    </UButton>
  </div>
</template>
