const { deployContract, verifyContract, sendTxn, getFrameSigner,contractAt } = require("../shared/helpers");

const { getDeployFilteredInfo, getNetwork } = require("../shared/syncParams");
const depositFee = 30;

async function deployContractMEME() {
    const signer = await getFrameSigner()
    // await deployContract("BOB", [])
    // await deployContract("PEPE", [])
    // await deployContract("LADYS", [])
    await deployContract("DOGE", [])
    // await deployContract("WOJAK", [])

    // const BOBContract = await contractAt("BOB", getDeployFilteredInfo("BOB").imple)
    // const PEPEContract = await contractAt("PEPE", getDeployFilteredInfo("PEPE").imple)
    // const LADYSContract = await contractAt("LADYS", getDeployFilteredInfo("LADYS").imple)
    const DOGEContract = await contractAt("DOGE", getDeployFilteredInfo("DOGE").imple)
    // const WOJAKContract = await contractAt("WOJAK", getDeployFilteredInfo("WOJAK").imple)

    // await sendTxn(BOBContract.authorize(signer.address), "BOB authorize")
    // await sendTxn(PEPEContract.authorize(signer.address), "PEPE authorize")
    // await sendTxn(LADYSContract.authorize(signer.address), "LADYS authorize")
    await sendTxn(DOGEContract.authorize(signer.address), "DOGE authorize")
    // await sendTxn(WOJAKContract.authorize(signer.address), "WOJAK authorize")

    // await sendTxn(BOBContract.mint(signer.address, "2000000000000000000000000"), "BOB mint")
    // await sendTxn(PEPEContract.mint(signer.address, "2000000000000000000000000"), "PEPE mint")
    // await sendTxn(LADYSContract.mint(signer.address, "2000000000000000000000000"), "LADYS mint")
    await sendTxn(DOGEContract.mint(signer.address, "2000000000000000000000000"), "DOGE mint")
    // await sendTxn(WOJAKContract.mint(signer.address, "2000000000000000000000000"), "WOJAK mint")
    
    // await verifyContract("BOB", getDeployFilteredInfo("BOB").imple, "contracts/BOB.sol:BOB", [])
    // await verifyContract("PEPE", getDeployFilteredInfo("PEPE").imple, "contracts/PEPE.sol:PEPE", [])
    // await verifyContract("LADYS", getDeployFilteredInfo("LADYS").imple, "contracts/LADYS.sol:LADYS", [])
    await verifyContract("DOGE", getDeployFilteredInfo("DOGE").imple, "contracts/DOGE.sol:DOGE", [])
    // await verifyContract("WOJAK", getDeployFilteredInfo("WOJAK").imple, "contracts/WOJAK.sol:WOJAK", [])

    // await deployContract("priceFeed", [getDeployFilteredInfo("BOB").imple], registerName="bobPriceFeed")
    // await deployContract("priceFeed", [getDeployFilteredInfo("PEPE").imple], registerName="pepePriceFeed")
    // await deployContract("priceFeed", [getDeployFilteredInfo("LADYS").imple], registerName="ladysPriceFeed")
    await deployContract("priceFeed", [getDeployFilteredInfo("DOGE").imple], registerName="dogePriceFeed")
    // await deployContract("priceFeed", [getDeployFilteredInfo("WOJAK").imple], registerName="wojakPriceFeed")

    // await verifyContract("priceFeed", getDeployFilteredInfo("bobPriceFeed").imple, "contracts/priceFeed.sol:priceFeed", [getDeployFilteredInfo("BOB").imple])
    // await verifyContract("priceFeed", getDeployFilteredInfo("pepePriceFeed").imple, "contracts/priceFeed.sol:priceFeed", [getDeployFilteredInfo("PEPE").imple])
    // await verifyContract("priceFeed", getDeployFilteredInfo("ladysPriceFeed").imple, "contracts/priceFeed.sol:priceFeed", [getDeployFilteredInfo("LADYS").imple])
    // await verifyContract("priceFeed", getDeployFilteredInfo("wojakPriceFeed").imple, "contracts/priceFeed.sol:priceFeed", [getDeployFilteredInfo("WOJAK").imple])
    await verifyContract("priceFeed", getDeployFilteredInfo("dogePriceFeed").imple, "contracts/priceFeed.sol:priceFeed", [getDeployFilteredInfo("DOGE").imple])
}

module.exports = deployContractMEME