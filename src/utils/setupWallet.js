import { ethers } from 'ethers'
import { EtherOrcsAbi } from '../contracts/EtherOrcsAbi'
import { HallOfChampionsAbi } from '../contracts/HallOfChampionsAbi'
import MetaMaskOnboarding from '@metamask/onboarding'

// A Web3Provider wraps a standard Web3 provider, which is
// what MetaMask injects as window.ethereum into each page
const provider = new ethers.providers.Web3Provider(window.ethereum, 'any')

//network
// if (!provider._network.chainId == '137') {
//   console.log('error network')
// }
const { isMetaMaskInstalled } = MetaMaskOnboarding

export const connect = async () => {
  // MetaMask requires requesting permission to connect users accounts
  await provider.send('eth_requestAccounts', [])

  // The MetaMask plugin also allows signing transactions to
  // send ether and pay to change state within the blockchain.
  // For this, you need the account signer...
  const signer = provider.getSigner()
  const address = await signer.getAddress()
  console.log('Account:', await signer.getAddress())

  return {
    provider,
    signer,
    address,
  }
}

export const checkMetamask = () => {
  return isMetaMaskInstalled
}

export const disconnect = async function () {
  // Disconnect wallet connect provider
  if (provider && provider.disconnect) {
    provider.disconnect()
  }
}

const getContract = (contractAddress, abi) => {
  return new ethers.Contract(contractAddress, abi, provider)
}

//EtherOrcs
const etherOrcs = getContract(
  '0xBDb3E53d8D081e67C31B3c026361ce5685f4E363',
  EtherOrcsAbi,
)
export const mint = async () => {
  const signer = provider.getSigner()
  const etherOrcWithSigner = etherOrcs.connect(signer)
  return await etherOrcWithSigner.mint()
}

//HallOfChampions
const hallOfChampions = getContract(
  '0xf498d4B1F3dbd8659DF9E4F11C5B2817D6281Fcc',
  HallOfChampionsAbi,
)
export const changeName = async (orcId, firstName, lastName) => {
  const signer = provider.getSigner()
  const hallOfChampionsWithSigner = hallOfChampions.connect(signer)
  return await hallOfChampionsWithSigner.changeName(orcId, firstName, lastName)
}

export const payTribute = async (orcId, amount) => {
  const signer = provider.getSigner()
  const hallOfChampionsWithSigner = hallOfChampions.connect(signer)
  return await hallOfChampionsWithSigner.payTribute(orcId, amount)
}
