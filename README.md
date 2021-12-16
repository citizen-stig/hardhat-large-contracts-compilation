# Description

Run

```
npm install
npx hardhat compile
```

Error will be:

```
RangeError: Invalid string length
    at JSON.stringify (<anonymous>)
    at stringify (/Users/ngolub/workspace/hardhat-large-compile/node_modules/jsonfile/index.js:86:18)
    at Object.writeFile (/Users/ngolub/workspace/hardhat-large-compile/node_modules/jsonfile/index.js:101:11)
    at /Users/ngolub/workspace/hardhat-large-compile/node_modules/universalify/index.js:13:12
    at new Promise (<anonymous>)
    at Object.writeFile (/Users/ngolub/workspace/hardhat-large-compile/node_modules/universalify/index.js:7:14)
    at Artifacts.saveBuildInfo (/Users/ngolub/workspace/hardhat-large-compile/node_modules/hardhat/src/internal/artifacts.ts:166:19)
    at SimpleTaskDefinition.action (/Users/ngolub/workspace/hardhat-large-compile/node_modules/hardhat/src/builtin-tasks/compile.ts:793:31)
    at Environment._runTaskDefinition (/Users/ngolub/workspace/hardhat-large-compile/node_modules/hardhat/src/internal/core/runtime-environment.ts:217:14)
    at Environment.run (/Users/ngolub/workspace/hardhat-large-compile/node_modules/hardhat/src/internal/core/runtime-environment.ts:129:14)
```