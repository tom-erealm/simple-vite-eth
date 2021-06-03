// We require the Hardhat Runtime Environment explicitly here. This is optional 
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile 
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy   
  // const Greeter = await hre.ethers.getContractFactory("Greeter");
  // const greeter = await Greeter.deploy("Hello, Hardhat!");
  // await greeter.deployed();
  // console.log("Greeter deployed to:", greeter.address);

  const nft_json_uri = "https://ipfs.io/ipfs/QmPGCr2qNKas123rqEvvCwCiXxhm7BAAyHVpNrXKWdEws4";
  const NFTToken = await hre.ethers.getContractFactory("newNFT");
  // const _NFTToken = await NFTToken.deploy();
  // console.log("NFTToken deployed to:", _NFTToken.address);

  // const nftTokenContractAddress = "0xe7f1725e7734ce288f8367e1bb143e90bb3f0512";
  // const walletAddress_local = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
  // const nft = await NFTToken.mint(walletAddress_local, 1, nft_json_uri)
  // console.log('got nft:', nft)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
