import local from './local.json'
import testnet from './testnet.json'

export const getContracts = (chainId: number) => {
  switch (chainId) {
    case 31: return testnet
    default: return local
  }
}