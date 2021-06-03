<template>
<div class="prose lg:prose-xl mx-auto mt-16"> 
  <HelloWorld :msg="greeting" />
  <div class="mx-auto">
    <!-- <BaseButton @click="fetchGreeting">Fetch Greeting</BaseButton> -->
    <!-- <BaseButton @click="setGreeting">Set Greeting</BaseButton>
    <BaseInput v-model="greeting" placeholder="Set greeting" /> -->
    <BaseInput v-model="token_address" label="Token address" placeholder="Token address" />
    <BaseInput v-model="token_protocol" label="Token Protocol Standard" placeholder="721 or 1155" />
  </div>
  <br>
  <div class="mx-auto">
    <p>
      <span>Please provide list of recipients </span>
      <BaseButton class="float-right align-text-bottom">upload file</BaseButton>
    </p>
    <textarea name="recipients" v-model="recipients" cols="30" rows="10" class="bg-gray-500 w-min:500px"></textarea>
    <br>
    <BaseButton @click="toggleShowExample">show example</BaseButton>

    <div v-if="showExample" class="text-center border-dark-600 bg-lime-200">
      <p class="text-xl font-medium text-center text-red-500">
        Example
      </p>
      
      <p class="text-gray-500">
        for ERC721(address, id)
        0x63Ed7e96CaA84CE8521874d7eE1Ed3bfEA38B316,60
        0x7B32C3158b7f193D3Ea33f5488175C499D492ca2,61
        for ERC1155(address, id, amount)
        0xb50cA0C79F9dF405B708b3E517fC99FC12B7AdFB,1,100
        0x57eC2aEFB7bA9237E6a83B03Bb7CecD5C494AcA1,2,95
      </p>
       <p>
        Or paste data, using separate comma or one of =;-:
      </p>
    </div>
    
    <br>
    <BaseButton>proceed</BaseButton>
  </div>
</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { ethers } from 'ethers'
import Greeter from './artifacts/contracts/Greeter.sol/Greeter.json'
import HelloWorld from './components/HelloWorld.vue'
import BaseButton from './components/BaseButton.vue'
import BaseInput from './components/BaseInput.vue'

const greeterAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0"

const greeting = ref('');
const token_address = ref('')
const token_protocol = ref('')
const recipients = ref('')
let showExample = ref(false)

const toggleShowExample = () => {
  console.log(showExample)
  showExample.value = !showExample.value
}

const requestAccount = async () => {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  }

const fetchGreeting = async () => {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const contract = new ethers.Contract(greeterAddress, Greeter.abi, provider)
      try {
        const data = await contract.greet()
        greeting.value = data
        console.log("greeting: ", data)
      } catch (err) {
        console.log("Error: ", err)
      }
    }    
  }

  // call the smart contract, send an update
const setGreeting = async () => {
    if (!greeting) return
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount()
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner()
      const contract = new ethers.Contract(greeterAddress, Greeter.abi, signer)
      const transaction = await contract.setGreeting(greeting.value)
      await transaction.wait()
      fetchGreeting()
    }
  }

  onMounted(() => {
    fetchGreeting()
  })
</script>