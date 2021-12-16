run-ganache:
	ganache-cli --allowUnlimitedContractSize --callGasLimit="0x1fffffffffffff" -l="0x1fffffffffffff" -g="0x0" --verbose --account=0xb17202c37cce9498e6f7dcdc1abd207802d09b5eee96677ea219ac867a198b91,90021000000000000000000000  --account=0x202454d1b4e72c41ebf58150030f649648d3cf5590297fb6718e27039ed9c86d,9000000000000000000000000
deploy:
	npx hardhat run --network ganache scripts/deploy.js
