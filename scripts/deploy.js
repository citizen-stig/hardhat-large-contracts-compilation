const hre = require("hardhat");
const {ethers} = hre;


async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    console.log("Account balance:", (await deployer.getBalance()).toString());

    const contracts = [
        "AccountCreate1000",
        "InboundTransfer1000",
        "MoneyOrderCreate1000",
        "MoneyOrderRedeem1000",
        "OutboundTransfer1000",
    ]

    for (let i = 0; i < contracts.length; i++) {
        const contractName = contracts[i];
        console.log("Deploying contract:", contractName)
        const Contract = await ethers.getContractFactory(contractName);
        const contract = await Contract.deploy();
        console.log("Contract address:", contract.address);
    }

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });