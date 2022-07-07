const hre = require("hardhat");

async function main() {
  const profileImageMinterFactory = await hre.ethers.getContractFactory('ProfileImageNfts');
  const greeter = await profileImageMinterFactory.deploy();

  await greeter.deployed();

  console.log("Greeter deployed to:", greeter.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
