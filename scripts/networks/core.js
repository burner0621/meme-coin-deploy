const deployContractMEME = require("../deployContractMEME.js");
const deploy_core = async () => {
    await deployContractMEME()
}

module.exports = { deploy_core };