module.exports = async function main() {
    const accounts = await web3.eth.getAccounts()
    // console.log(accounts)

    const Box = artifacts.require('Box')
    const box = await Box.deployed()
    console.log(box.address)

    await box.store(56)
    const val = await box.retrieve()
    console.log(val.toString())
}

// main().then().catch()