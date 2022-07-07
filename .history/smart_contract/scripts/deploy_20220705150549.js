const hre = require("hardhat");

async function main() {
  const profileImageMinterFactory = await hre.ethers.getContractFactory('ProfileImageNfts');
  const profileImageContract = await profileImageMinterFactory.deploy();

  await profileImageContract.deployed();

  console.log("Greeter deployed to:", profileImageContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
