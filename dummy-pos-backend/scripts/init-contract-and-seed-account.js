const Promise = require("bluebird")
const fs = require("fs")
const Web3 = require("web3")
const solc = require("solc")

const CONFIG = require("../modules/config.js")
const ContractObject = require("../modules/utils/ContractObject")
const EthUtils = require("../modules/utils/EthUtils")

const SOL = './contracts/CatenaContract.sol'
const CONTRACT_NAME = 'CatenaContract'
const web3 = new Web3(new Web3.providers.HttpProvider(CONFIG.eth.host))

const contractObject = new ContractObject(web3, CONTRACT_NAME, SOL)
const bniAddr = web3.eth.accounts[0]
const bniToken = '000000'

contractObject.getContractInstance(bniAddr, [10000000000])
  .then((contractInstance) => {
    console.log('')
    console.log('contractInstance created with address: ')
    console.log(contractInstance.address)
    console.log('')
    console.log('BNI address:')
    console.log(contractInstance.getMsgSender())
    console.log('')
    console.log('BNI balance:')
    console.log(contractInstance.getBalance(bniAddr))
    console.log('')

    const merchantAddr = web3.eth.accounts[1]
    console.log('Merchant address:')
    console.log(merchantAddr)
    const bniToMerchantToken = '000001'
    const bniToMerchantSign = EthUtils.sign(web3, bniAddr, bniToMerchantToken)
    var rsv = EthUtils.getRSVFromSignedToken(web3, bniToMerchantSign.substr(2))
    contractInstance.transfer(bniAddr, merchantAddr, 10000000, bniToMerchantToken, rsv.v, rsv.r, rsv.s)
    console.log('Merchant balance:')
    console.log(contractInstance.getBalance(merchantAddr))
    console.log('')

    const buyerAddr = web3.eth.accounts[2]
    console.log('Buyer address:')
    console.log(buyerAddr)
    const bniToBuyerToken = '000002'
    const bniToBuyerSign = EthUtils.sign(web3, bniAddr, bniToBuyerToken)
    var rsv = EthUtils.getRSVFromSignedToken(web3, bniToBuyerSign.substr(2))
    contractInstance.transfer(bniAddr, buyerAddr, 10000000, bniToBuyerToken, rsv.v, rsv.r, rsv.s)
    console.log('Buyer balance:')
    console.log(contractInstance.getBalance(buyerAddr))
    console.log('')
  })
  .catch(console.log)

// bni contract address = 0xdd6ab28f8622f5ac3a680a944b9cde92e131ed45
