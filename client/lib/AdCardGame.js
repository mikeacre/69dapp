myAdCardGame = {
  "contractName": "AdCardGame",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        },
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "usersSingleGames",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "maxSingleGameId",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "singleGames",
      "outputs": [
        {
          "name": "player",
          "type": "address"
        },
        {
          "name": "contractMiddleCard",
          "type": "uint256"
        },
        {
          "name": "contractLastCard",
          "type": "uint256"
        },
        {
          "name": "userCardTkn",
          "type": "uint256"
        },
        {
          "name": "playerBet",
          "type": "uint256"
        },
        {
          "name": "userCardHigh",
          "type": "uint8"
        },
        {
          "name": "result",
          "type": "uint8"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "_adCardToken",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "payable": true,
      "stateMutability": "payable",
      "type": "fallback"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipRenounced",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "createSingleGame",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "getUserSingleGames",
      "outputs": [
        {
          "name": "",
          "type": "uint256[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "withdraw",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    }
  ],
  "bytecode": "0x60806040526000600155600060025534801561001a57600080fd5b5060405160208061120c83398101806040528101908080519060200190929190505050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505061113e806100ce6000396000f300608060405260043610610099576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063264ade681461009b5780632e1a7d4d146100fc5780636a28d04714610134578063715018a61461015f57806374b8ea19146101765780638da5cb5b1461021957806399880b0514610270578063d46f75ea14610308578063f2fde38b1461033c575b005b3480156100a757600080fd5b506100e6600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061037f565b6040518082815260200191505060405180910390f35b61011a600480360381019080803590602001909291905050506103af565b604051808215151515815260200191505060405180910390f35b34801561014057600080fd5b506101496104a3565b6040518082815260200191505060405180910390f35b34801561016b57600080fd5b506101746104a9565b005b34801561018257600080fd5b506101a1600480360381019080803590602001909291905050506105ab565b604051808873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018781526020018681526020018581526020018481526020018360ff1660ff1681526020018260ff1660ff16815260200197505050505050505060405180910390f35b34801561022557600080fd5b5061022e610636565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561027c57600080fd5b506102b1600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061065b565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156102f45780820151818401526020810190506102d9565b505050509050019250505060405180910390f35b610326600480360381019080803590602001909291905050506106f2565b6040518082815260200191505060405180910390f35b34801561034857600080fd5b5061037d600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610f23565b005b60056020528160005260406000208181548110151561039a57fe5b90600052602060002001600091509150505481565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561040c57600080fd5b3073ffffffffffffffffffffffffffffffffffffffff1631821115151561043257600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f19350505050158015610499573d6000803e3d6000fd5b5060019050919050565b60015481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561050457600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167ff8df31144d9c2f0f6b59d69b8b98abd5459d07f2742c4df920b25aae33c6482060405160405180910390a260008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b6004818154811015156105ba57fe5b90600052602060002090600602016000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154908060020154908060030154908060040154908060050160009054906101000a900460ff16908060050160019054906101000a900460ff16905087565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6060600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054806020026020016040519081016040528092919081815260200182805480156106e657602002820191906000526020600020905b8154815260200190600101908083116106d2575b50505050509050919050565b60008060008060008060006107056110b8565b6000662386f26fc10000341015151561071d57600080fd5b674563918244f400003073ffffffffffffffffffffffffffffffffffffffff16311015151561074b57600080fd5b3373ffffffffffffffffffffffffffffffffffffffff16600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636352211e8c6040518263ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180828152602001915050602060405180830381600087803b1580156107f357600080fd5b505af1158015610807573d6000803e3d6000fd5b505050506040513d602081101561081d57600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff1614151561085057600080fd5b61085c60016064610f8a565b955060009250600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166338e5cdce8b6040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808281526020019150506040805180830381600087803b1580156108f257600080fd5b505af1158015610906573d6000803e3d6000fd5b505050506040513d604081101561091c57600080fd5b8101908080519060200190929190805190602001909291905050508098508199505050858710151561094d57600192505b610a186000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16630ff1b75e6040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b1580156109d857600080fd5b505af11580156109ec573d6000803e3d6000fd5b505050506040513d6020811015610a0257600080fd5b8101908080519060200190929190505050610f8a565b9450610ae56000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16630ff1b75e6040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b158015610aa557600080fd5b505af1158015610ab9573d6000803e3d6000fd5b505050506040513d6020811015610acf57600080fd5b8101908080519060200190929190505050610f8a565b935060018360ff161415610c58578484108015610b0157508785105b15610bb65760e0604051908101604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018681526020018581526020018b81526020013481526020018460ff168152602001600160ff1681525091503373ffffffffffffffffffffffffffffffffffffffff166108fc6611c37937e08000606460963402811515610b8a57fe5b04039081150290604051600060405180830381858888f193505050501515610bb157600080fd5b610c53565b60e0604051908101604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018681526020018581526020018b81526020013481526020018460ff168152602001600060ff1681525091503373ffffffffffffffffffffffffffffffffffffffff166108fc6611c37937e0800034039081150290604051600060405180830381858888f193505050501515610c5257600080fd5b5b610db9565b8488108015610c6657508385105b15610d1b5760e0604051908101604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018681526020018581526020018b81526020013481526020018460ff168152602001600160ff1681525091503373ffffffffffffffffffffffffffffffffffffffff166108fc6611c37937e08000606460963402811515610cef57fe5b04039081150290604051600060405180830381858888f193505050501515610d1657600080fd5b610db8565b60e0604051908101604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018681526020018581526020018b81526020013481526020018460ff168152602001600060ff1681525091503373ffffffffffffffffffffffffffffffffffffffff166108fc6611c37937e0800034039081150290604051600060405180830381858888f193505050501515610db757600080fd5b5b5b60016004839080600181540180825580915050906001820390600052602060002090600602016000909192909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001015560408201518160020155606082015181600301556080820151816004015560a08201518160050160006101000a81548160ff021916908360ff16021790555060c08201518160050160016101000a81548160ff021916908360ff160217905550505003600181905550600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905080600154908060018154018082558091505090600182039060005260206000200160009091929091909150555060015498505050505050505050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610f7e57600080fd5b610f8781610fbe565b50565b60006002600081548092919060010191905055506001600a600143034060019004811515610fb457fe5b0601905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515610ffa57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60e060405190810160405280600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600081526020016000815260200160008152602001600060ff168152602001600060ff16815250905600a165627a7a72305820720f52075583391f833f3d811d248a5d6313bc1a5e51d27d73032613b60a4e900029",
  "deployedBytecode": "0x608060405260043610610099576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063264ade681461009b5780632e1a7d4d146100fc5780636a28d04714610134578063715018a61461015f57806374b8ea19146101765780638da5cb5b1461021957806399880b0514610270578063d46f75ea14610308578063f2fde38b1461033c575b005b3480156100a757600080fd5b506100e6600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061037f565b6040518082815260200191505060405180910390f35b61011a600480360381019080803590602001909291905050506103af565b604051808215151515815260200191505060405180910390f35b34801561014057600080fd5b506101496104a3565b6040518082815260200191505060405180910390f35b34801561016b57600080fd5b506101746104a9565b005b34801561018257600080fd5b506101a1600480360381019080803590602001909291905050506105ab565b604051808873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018781526020018681526020018581526020018481526020018360ff1660ff1681526020018260ff1660ff16815260200197505050505050505060405180910390f35b34801561022557600080fd5b5061022e610636565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561027c57600080fd5b506102b1600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061065b565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156102f45780820151818401526020810190506102d9565b505050509050019250505060405180910390f35b610326600480360381019080803590602001909291905050506106f2565b6040518082815260200191505060405180910390f35b34801561034857600080fd5b5061037d600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610f23565b005b60056020528160005260406000208181548110151561039a57fe5b90600052602060002001600091509150505481565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561040c57600080fd5b3073ffffffffffffffffffffffffffffffffffffffff1631821115151561043257600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f19350505050158015610499573d6000803e3d6000fd5b5060019050919050565b60015481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561050457600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167ff8df31144d9c2f0f6b59d69b8b98abd5459d07f2742c4df920b25aae33c6482060405160405180910390a260008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b6004818154811015156105ba57fe5b90600052602060002090600602016000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154908060020154908060030154908060040154908060050160009054906101000a900460ff16908060050160019054906101000a900460ff16905087565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6060600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054806020026020016040519081016040528092919081815260200182805480156106e657602002820191906000526020600020905b8154815260200190600101908083116106d2575b50505050509050919050565b60008060008060008060006107056110b8565b6000662386f26fc10000341015151561071d57600080fd5b674563918244f400003073ffffffffffffffffffffffffffffffffffffffff16311015151561074b57600080fd5b3373ffffffffffffffffffffffffffffffffffffffff16600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636352211e8c6040518263ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180828152602001915050602060405180830381600087803b1580156107f357600080fd5b505af1158015610807573d6000803e3d6000fd5b505050506040513d602081101561081d57600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff1614151561085057600080fd5b61085c60016064610f8a565b955060009250600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166338e5cdce8b6040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808281526020019150506040805180830381600087803b1580156108f257600080fd5b505af1158015610906573d6000803e3d6000fd5b505050506040513d604081101561091c57600080fd5b8101908080519060200190929190805190602001909291905050508098508199505050858710151561094d57600192505b610a186000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16630ff1b75e6040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b1580156109d857600080fd5b505af11580156109ec573d6000803e3d6000fd5b505050506040513d6020811015610a0257600080fd5b8101908080519060200190929190505050610f8a565b9450610ae56000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16630ff1b75e6040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b158015610aa557600080fd5b505af1158015610ab9573d6000803e3d6000fd5b505050506040513d6020811015610acf57600080fd5b8101908080519060200190929190505050610f8a565b935060018360ff161415610c58578484108015610b0157508785105b15610bb65760e0604051908101604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018681526020018581526020018b81526020013481526020018460ff168152602001600160ff1681525091503373ffffffffffffffffffffffffffffffffffffffff166108fc6611c37937e08000606460963402811515610b8a57fe5b04039081150290604051600060405180830381858888f193505050501515610bb157600080fd5b610c53565b60e0604051908101604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018681526020018581526020018b81526020013481526020018460ff168152602001600060ff1681525091503373ffffffffffffffffffffffffffffffffffffffff166108fc6611c37937e0800034039081150290604051600060405180830381858888f193505050501515610c5257600080fd5b5b610db9565b8488108015610c6657508385105b15610d1b5760e0604051908101604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018681526020018581526020018b81526020013481526020018460ff168152602001600160ff1681525091503373ffffffffffffffffffffffffffffffffffffffff166108fc6611c37937e08000606460963402811515610cef57fe5b04039081150290604051600060405180830381858888f193505050501515610d1657600080fd5b610db8565b60e0604051908101604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018681526020018581526020018b81526020013481526020018460ff168152602001600060ff1681525091503373ffffffffffffffffffffffffffffffffffffffff166108fc6611c37937e0800034039081150290604051600060405180830381858888f193505050501515610db757600080fd5b5b5b60016004839080600181540180825580915050906001820390600052602060002090600602016000909192909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001015560408201518160020155606082015181600301556080820151816004015560a08201518160050160006101000a81548160ff021916908360ff16021790555060c08201518160050160016101000a81548160ff021916908360ff160217905550505003600181905550600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905080600154908060018154018082558091505090600182039060005260206000200160009091929091909150555060015498505050505050505050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610f7e57600080fd5b610f8781610fbe565b50565b60006002600081548092919060010191905055506001600a600143034060019004811515610fb457fe5b0601905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515610ffa57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60e060405190810160405280600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600081526020016000815260200160008152602001600060ff168152602001600060ff16815250905600a165627a7a72305820720f52075583391f833f3d811d248a5d6313bc1a5e51d27d73032613b60a4e900029",
  "sourceMap": "115:4129:0:-;;;346:1;313:34;;365:1;352:14;;713:82;8:9:-1;5:2;;;30:1;27;20:12;5:2;713:82:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;575:10:5;567:5;;:18;;;;;;;;;;;;;;;;;;778:12:0;764:11;;:26;;;;;;;;;;;;;;;;;;713:82;115:4129;;;;;;",
  "deployedSourceMap": "115:4129:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;655:53;;8:9:-1;5:2;;;30:1;27;20:12;5:2;655:53:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4075:166;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;313:34;;8:9:-1;5:2;;;30:1;27;20:12;5:2;313:34:0;;;;;;;;;;;;;;;;;;;;;;;827:111:5;;8:9:-1;5:2;;;30:1;27;20:12;5:2;827:111:5;;;;;;619:31:0;;8:9:-1;5:2;;;30:1;27;20:12;5:2;619:31:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;238:20:5;;8:9:-1;5:2;;;30:1;27;20:12;5:2;238:20:5;;;;;;;;;;;;;;;;;;;;;;;;;;;3812:124:0;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3812:124:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;3812:124:0;;;;;;;;;;;;;;;;;836:2824;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1100:103:5;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1100:103:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;655:53:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;4075:166::-;4139:4;719:5:5;;;;;;;;;;;705:19;;:10;:19;;;697:28;;;;;;;;4177:4:0;4169:21;;;4159:6;:31;;4151:40;;;;;;;;4197:5;;;;;;;;;;;:14;;:22;4212:6;4197:22;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;4197:22:0;4232:4;4225:11;;4075:166;;;:::o;313:34::-;;;;:::o;827:111:5:-;719:5;;;;;;;;;;;705:19;;:10;:19;;;697:28;;;;;;;;903:5;;;;;;;;;;;884:25;;;;;;;;;;;;931:1;915:5;;:18;;;;;;;;;;;;;;;;;;827:111::o;619:31:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;238:20:5:-;;;;;;;;;;;;;:::o;3812:124:0:-;3881:9;3905:16;:26;3922:8;3905:26;;;;;;;;;;;;;;;3898:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3812:124;;;:::o;836:2824::-;901:7;1064:19;1089:17;1112:21;1153:23;1182:21;1209:18;1620:29;;:::i;:::-;3514:25;215:10;924:9;:21;;916:30;;;;;;;;259:7;968:4;960:21;;;:38;;952:47;;;;;;;;1046:10;1013:43;;:11;;;;;;;;;;;:19;;;1033:8;1013:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1013:29:0;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1013:29:0;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1013:29:0;;;;;;;;;;;;;;;;:43;;;1005:52;;;;;;;;1136:11;1141:1;1143:3;1136:4;:11::i;:::-;1112:35;;1230:1;1209:22;;1270:11;;;;;;;;;;;:28;;;1299:8;1270:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1270:38:0;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1270:38:0;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1270:38:0;;;;;;;;;;;;;;;;;;;;;;;;;1237:71;;;;;;;;1381:16;1365:12;:32;;1362:59;;;1420:1;1405:16;;1362:59;1472:37;1477:1;1480:11;;;;;;;;;;;:26;;;:28;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1480:28:0;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1480:28:0;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1480:28:0;;;;;;;;;;;;;;;;1472:4;:37::i;:::-;1451:58;;1555:37;1560:1;1563:11;;;;;;;;;;;:26;;;:28;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1563:28:0;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1563:28:0;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1563:28:0;;;;;;;;;;;;;;;;1555:4;:37::i;:::-;1536:56;;1675:1;1659:12;:17;;;1656:1795;;;1713:18;1694:16;:37;1693:80;;;;;1758:14;1737:18;:35;1693:80;1690:861;;;1798:288;;;;;;;;;1831:10;1798:288;;;;;;1875:18;1798:288;;;;1925:16;1798:288;;;;1968:8;1798:288;;;;2001:9;1798:288;;;;2038:12;1798:288;;;;;;2072:1;1798:288;;;;;1784:302;;2104:10;:15;;:50;175:11;2139:3;2133;2121:9;:15;:21;;;;;;;;2120:33;2104:50;;;;;;;;;;;;;;;;;;;;;;;2096:59;;;;;;;;1690:861;;;2199:288;;;;;;;;;2232:10;2199:288;;;;;;2276:18;2199:288;;;;2326:16;2199:288;;;;2369:8;2199:288;;;;2402:9;2199:288;;;;2439:12;2199:288;;;;;;2473:1;2199:288;;;;;2185:302;;2505:10;:15;;:36;175:11;2521:9;:19;2505:36;;;;;;;;;;;;;;;;;;;;;;;2497:45;;;;;;;;1690:861;1656:1795;;;2601:18;2584:14;:35;2583:80;;;;;2646:16;2625:18;:37;2583:80;2580:863;;;2688:288;;;;;;;;;2721:10;2688:288;;;;;;2765:18;2688:288;;;;2815:16;2688:288;;;;2858:8;2688:288;;;;2891:9;2688:288;;;;2928:12;2688:288;;;;;;2962:1;2688:288;;;;;2674:302;;2994:10;:15;;:50;175:11;3029:3;3023;3011:9;:15;:21;;;;;;;;3010:33;2994:50;;;;;;;;;;;;;;;;;;;;;;;2986:59;;;;;;;;2580:863;;;3091:288;;;;;;;;;3124:10;3091:288;;;;;;3168:18;3091:288;;;;3218:16;3091:288;;;;3261:8;3091:288;;;;3294:9;3091:288;;;;3331:12;3091:288;;;;;;3365:1;3091:288;;;;;3077:302;;3397:10;:15;;:36;175:11;3413:9;:19;3397:36;;;;;;;;;;;;;;;;;;;;;;;3389:45;;;;;;;;2580:863;1656:1795;3507:1;3475:11;3492;3475:29;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;3475:29:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:33;3457:15;:51;;;;3542:16;:28;3559:10;3542:28;;;;;;;;;;;;;;;3514:56;;3576:15;3597;;3576:37;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;3576:37:0;;;;;;;;;;;;;;;;;;;;;;3626:15;;3619:22;;836:2824;;;;;;;;;;;:::o;1100:103:5:-;719:5;;;;;;;;;;;705:19;;:10;:19;;;697:28;;;;;;;;1169:29;1188:9;1169:18;:29::i;:::-;1100:103;:::o;3940:131:0:-;3991:4;4002:5;;:7;;;;;;;;;;;;;4065:1;4060:2;4056:1;4043:12;:14;4027:31;4022:37;;;:40;;;;;;;;:44;4015:51;;3940:131;;;;:::o;1338:171:5:-;1429:1;1408:23;;:9;:23;;;;1400:32;;;;;;;;1471:9;1443:38;;1464:5;;;;;;;;;;;1443:38;;;;;;;;;;;;1495:9;1487:5;;:17;;;;;;;;;;;;;;;;;;1338:171;:::o;115:4129:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "pragma solidity ^0.4.17;\n\nimport 'zeppelin-solidity/contracts/ownership/Ownable.sol';\nimport './AdCardToken.sol';\n\ncontract AdCardGame is Ownable {\n\n  uint constant gameFee = 0.005 ether;\n  uint constant minPrice = 0.01 ether;\n  uint constant minHerosToken = 5 ether;\n\n  //address public cryptoHerosGame = 0x0;\n  uint256 public maxSingleGameId = 0;\n\n  uint nonce = 0;\n  AdCardToken adCardToken;\n\n  struct SingleGame {\n    address player;\n    uint256 contractMiddleCard;\n    uint256 contractLastCard;\n    uint256 userCardTkn;\n    uint256 playerBet;\n    uint8 userCardHigh;\n    uint8 result; // 1 = win , 0 = loss\n  }\n\n  SingleGame[] public singleGames;\n\n  mapping(address => uint256[]) public usersSingleGames;\n\n  constructor(AdCardToken _adCardToken) public {\n    adCardToken = _adCardToken;\n  }\n\n  function () payable public {\n\n  }\n\n  function createSingleGame(uint _tokenId) payable public returns (uint256) {\n    require(msg.value >= minPrice);\n    require(address(this).balance >= minHerosToken);\n    require(adCardToken.ownerOf(_tokenId) == msg.sender);\n\n    uint userCardNumber;\n    uint userCardProb;\n    uint contractHighProb = rand(1,100);\n    uint contractMiddleCard;\n    uint contractLastCard;\n    uint8 userCardHigh = 0;\n    (userCardNumber, userCardProb) = adCardToken.getTokenProperty(_tokenId);\n\n    //determine if card will be first or last.\n    if(userCardProb >= contractHighProb)\n      userCardHigh = 1;\n\n    //Draw middle card\n    contractMiddleCard = rand(0, adCardToken.getCardsLength());\n    //Draw last card\n    contractLastCard = rand(0, adCardToken.getCardsLength());\n    //do calculation\n\n    SingleGame memory _singleGame;\n\n    if(userCardHigh == 1)\n    {\n      if((contractLastCard < contractMiddleCard) && (contractMiddleCard < userCardNumber)){\n        _singleGame = SingleGame({\n            player: msg.sender,\n            contractMiddleCard: contractMiddleCard,\n            contractLastCard: contractLastCard,\n            userCardTkn: _tokenId,\n            playerBet: msg.value,\n            userCardHigh: userCardHigh,\n            result: 1\n          });\n        require(msg.sender.send((msg.value * 150 / 100) - gameFee));\n      }\n      else{\n        _singleGame = SingleGame({\n            player: msg.sender,\n            contractMiddleCard: contractMiddleCard,\n            contractLastCard: contractLastCard,\n            userCardTkn: _tokenId,\n            playerBet: msg.value,\n            userCardHigh: userCardHigh,\n            result: 0\n          });\n        require(msg.sender.send(msg.value - gameFee));\n      }\n\n    }\n    else\n    {\n      if((userCardNumber < contractMiddleCard) && (contractMiddleCard < contractLastCard)){\n        _singleGame = SingleGame({\n            player: msg.sender,\n            contractMiddleCard: contractMiddleCard,\n            contractLastCard: contractLastCard,\n            userCardTkn: _tokenId,\n            playerBet: msg.value,\n            userCardHigh: userCardHigh,\n            result: 1\n          });\n        require(msg.sender.send((msg.value * 150 / 100) - gameFee));\n      }\n      else  {\n        _singleGame = SingleGame({\n            player: msg.sender,\n            contractMiddleCard: contractMiddleCard,\n            contractLastCard: contractLastCard,\n            userCardTkn: _tokenId,\n            playerBet: msg.value,\n            userCardHigh: userCardHigh,\n            result: 0\n          });\n        require(msg.sender.send(msg.value - gameFee));\n      }\n\n\n    }\n\n    maxSingleGameId = singleGames.push(_singleGame) - 1;\n    uint256[] userSingleGames = usersSingleGames[msg.sender];\n    userSingleGames.push(maxSingleGameId);\n    return maxSingleGameId;\n    //return\n\n  }\n\n  // function readUserGamesCount(address _address, uint _idx) public returns (uint){\n  //   return usersSingleGames[_address][_idx].length;\n  // }\n\n  function getUserSingleGames(address _address) external view returns (uint256[]) {\n    return usersSingleGames[_address];\n  }\n\n  function rand(uint min, uint max) private returns (uint){\n    nonce++;\n    return uint(block.blockhash(block.number-1))%10 + 1;\n  }\n\n  function withdraw(uint amount) public payable onlyOwner returns(bool) {\n    require(amount <= address(this).balance);\n    owner.transfer(amount);\n    return true;\n  }\n\n}\n",
  "sourcePath": "/home/phurien/private_blockchain/AdGame/contracts/AdCardGame.sol",
  "ast": {
    "absolutePath": "/home/phurien/private_blockchain/AdGame/contracts/AdCardGame.sol",
    "exportedSymbols": {
      "AdCardGame": [
        388
      ]
    },
    "id": 389,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".17"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:0"
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/ownership/Ownable.sol",
        "file": "zeppelin-solidity/contracts/ownership/Ownable.sol",
        "id": 2,
        "nodeType": "ImportDirective",
        "scope": 389,
        "sourceUnit": 922,
        "src": "26:59:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/phurien/private_blockchain/AdGame/contracts/AdCardToken.sol",
        "file": "./AdCardToken.sol",
        "id": 3,
        "nodeType": "ImportDirective",
        "scope": 389,
        "sourceUnit": 666,
        "src": "86:27:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 4,
              "name": "Ownable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 921,
              "src": "138:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Ownable_$921",
                "typeString": "contract Ownable"
              }
            },
            "id": 5,
            "nodeType": "InheritanceSpecifier",
            "src": "138:7:0"
          }
        ],
        "contractDependencies": [
          921
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 388,
        "linearizedBaseContracts": [
          388,
          921
        ],
        "name": "AdCardGame",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": true,
            "id": 8,
            "name": "gameFee",
            "nodeType": "VariableDeclaration",
            "scope": 388,
            "src": "151:35:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 6,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "151:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "302e303035",
              "id": 7,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "175:11:0",
              "subdenomination": "ether",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_5000000000000000_by_1",
                "typeString": "int_const 5000000000000000"
              },
              "value": "0.005"
            },
            "visibility": "internal"
          },
          {
            "constant": true,
            "id": 11,
            "name": "minPrice",
            "nodeType": "VariableDeclaration",
            "scope": 388,
            "src": "190:35:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 9,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "190:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "302e3031",
              "id": 10,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "215:10:0",
              "subdenomination": "ether",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_10000000000000000_by_1",
                "typeString": "int_const 10000000000000000"
              },
              "value": "0.01"
            },
            "visibility": "internal"
          },
          {
            "constant": true,
            "id": 14,
            "name": "minHerosToken",
            "nodeType": "VariableDeclaration",
            "scope": 388,
            "src": "229:37:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 12,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "229:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "35",
              "id": 13,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "259:7:0",
              "subdenomination": "ether",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_5000000000000000000_by_1",
                "typeString": "int_const 5000000000000000000"
              },
              "value": "5"
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 17,
            "name": "maxSingleGameId",
            "nodeType": "VariableDeclaration",
            "scope": 388,
            "src": "313:34:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 15,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "313:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "30",
              "id": 16,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "346:1:0",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_0_by_1",
                "typeString": "int_const 0"
              },
              "value": "0"
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 20,
            "name": "nonce",
            "nodeType": "VariableDeclaration",
            "scope": 388,
            "src": "352:14:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 18,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "352:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "30",
              "id": 19,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "365:1:0",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_0_by_1",
                "typeString": "int_const 0"
              },
              "value": "0"
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 22,
            "name": "adCardToken",
            "nodeType": "VariableDeclaration",
            "scope": 388,
            "src": "370:23:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_AdCardToken_$665",
              "typeString": "contract AdCardToken"
            },
            "typeName": {
              "contractScope": null,
              "id": 21,
              "name": "AdCardToken",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 665,
              "src": "370:11:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_AdCardToken_$665",
                "typeString": "contract AdCardToken"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "canonicalName": "AdCardGame.SingleGame",
            "id": 37,
            "members": [
              {
                "constant": false,
                "id": 24,
                "name": "player",
                "nodeType": "VariableDeclaration",
                "scope": 37,
                "src": "422:14:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 23,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "422:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 26,
                "name": "contractMiddleCard",
                "nodeType": "VariableDeclaration",
                "scope": 37,
                "src": "442:26:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 25,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "442:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 28,
                "name": "contractLastCard",
                "nodeType": "VariableDeclaration",
                "scope": 37,
                "src": "474:24:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 27,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "474:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 30,
                "name": "userCardTkn",
                "nodeType": "VariableDeclaration",
                "scope": 37,
                "src": "504:19:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 29,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "504:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 32,
                "name": "playerBet",
                "nodeType": "VariableDeclaration",
                "scope": 37,
                "src": "529:17:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 31,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "529:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 34,
                "name": "userCardHigh",
                "nodeType": "VariableDeclaration",
                "scope": 37,
                "src": "552:18:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint8",
                  "typeString": "uint8"
                },
                "typeName": {
                  "id": 33,
                  "name": "uint8",
                  "nodeType": "ElementaryTypeName",
                  "src": "552:5:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 36,
                "name": "result",
                "nodeType": "VariableDeclaration",
                "scope": 37,
                "src": "576:12:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint8",
                  "typeString": "uint8"
                },
                "typeName": {
                  "id": 35,
                  "name": "uint8",
                  "nodeType": "ElementaryTypeName",
                  "src": "576:5:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "SingleGame",
            "nodeType": "StructDefinition",
            "scope": 388,
            "src": "398:217:0",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 40,
            "name": "singleGames",
            "nodeType": "VariableDeclaration",
            "scope": 388,
            "src": "619:31:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_struct$_SingleGame_$37_storage_$dyn_storage",
              "typeString": "struct AdCardGame.SingleGame[]"
            },
            "typeName": {
              "baseType": {
                "contractScope": null,
                "id": 38,
                "name": "SingleGame",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 37,
                "src": "619:10:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_SingleGame_$37_storage_ptr",
                  "typeString": "struct AdCardGame.SingleGame"
                }
              },
              "id": 39,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "619:12:0",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_struct$_SingleGame_$37_storage_$dyn_storage_ptr",
                "typeString": "struct AdCardGame.SingleGame[]"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 45,
            "name": "usersSingleGames",
            "nodeType": "VariableDeclaration",
            "scope": 388,
            "src": "655:53:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint256_$dyn_storage_$",
              "typeString": "mapping(address => uint256[])"
            },
            "typeName": {
              "id": 44,
              "keyType": {
                "id": 41,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "663:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "655:29:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint256_$dyn_storage_$",
                "typeString": "mapping(address => uint256[])"
              },
              "valueType": {
                "baseType": {
                  "id": 42,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "674:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "id": 43,
                "length": null,
                "nodeType": "ArrayTypeName",
                "src": "674:9:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                  "typeString": "uint256[]"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 54,
              "nodeType": "Block",
              "src": "758:37:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 52,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 50,
                      "name": "adCardToken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22,
                      "src": "764:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_AdCardToken_$665",
                        "typeString": "contract AdCardToken"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 51,
                      "name": "_adCardToken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47,
                      "src": "778:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_AdCardToken_$665",
                        "typeString": "contract AdCardToken"
                      }
                    },
                    "src": "764:26:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_AdCardToken_$665",
                      "typeString": "contract AdCardToken"
                    }
                  },
                  "id": 53,
                  "nodeType": "ExpressionStatement",
                  "src": "764:26:0"
                }
              ]
            },
            "documentation": null,
            "id": 55,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 48,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47,
                  "name": "_adCardToken",
                  "nodeType": "VariableDeclaration",
                  "scope": 55,
                  "src": "725:24:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_AdCardToken_$665",
                    "typeString": "contract AdCardToken"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 46,
                    "name": "AdCardToken",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 665,
                    "src": "725:11:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_AdCardToken_$665",
                      "typeString": "contract AdCardToken"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "724:26:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 49,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "758:0:0"
            },
            "scope": 388,
            "src": "713:82:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 58,
              "nodeType": "Block",
              "src": "826:6:0",
              "statements": []
            },
            "documentation": null,
            "id": 59,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 56,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "808:2:0"
            },
            "payable": true,
            "returnParameters": {
              "id": 57,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "826:0:0"
            },
            "scope": 388,
            "src": "799:33:0",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 319,
              "nodeType": "Block",
              "src": "910:2750:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 70,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 67,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2068,
                            "src": "924:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 68,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "924:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 69,
                          "name": "minPrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 11,
                          "src": "937:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "924:21:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 66,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        2071,
                        2072
                      ],
                      "referencedDeclaration": 2071,
                      "src": "916:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 71,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "916:30:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 72,
                  "nodeType": "ExpressionStatement",
                  "src": "916:30:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 79,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 75,
                                "name": "this",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 2103,
                                "src": "968:4:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_AdCardGame_$388",
                                  "typeString": "contract AdCardGame"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_AdCardGame_$388",
                                  "typeString": "contract AdCardGame"
                                }
                              ],
                              "id": 74,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "960:7:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": "address"
                            },
                            "id": 76,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "960:13:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "id": 77,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "balance",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "960:21:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 78,
                          "name": "minHerosToken",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 14,
                          "src": "985:13:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "960:38:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 73,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        2071,
                        2072
                      ],
                      "referencedDeclaration": 2071,
                      "src": "952:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 80,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "952:47:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 81,
                  "nodeType": "ExpressionStatement",
                  "src": "952:47:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 89,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 85,
                              "name": "_tokenId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 61,
                              "src": "1033:8:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 83,
                              "name": "adCardToken",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22,
                              "src": "1013:11:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_AdCardToken_$665",
                                "typeString": "contract AdCardToken"
                              }
                            },
                            "id": 84,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "ownerOf",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 1190,
                            "src": "1013:19:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_uint256_$returns$_t_address_$",
                              "typeString": "function (uint256) view external returns (address)"
                            }
                          },
                          "id": 86,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1013:29:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 87,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2068,
                            "src": "1046:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 88,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1046:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "1013:43:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 82,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        2071,
                        2072
                      ],
                      "referencedDeclaration": 2071,
                      "src": "1005:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 90,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1005:52:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 91,
                  "nodeType": "ExpressionStatement",
                  "src": "1005:52:0"
                },
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 93,
                      "name": "userCardNumber",
                      "nodeType": "VariableDeclaration",
                      "scope": 320,
                      "src": "1064:19:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 92,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1064:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 94,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1064:19:0"
                },
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 96,
                      "name": "userCardProb",
                      "nodeType": "VariableDeclaration",
                      "scope": 320,
                      "src": "1089:17:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 95,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1089:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 97,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1089:17:0"
                },
                {
                  "assignments": [
                    99
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 99,
                      "name": "contractHighProb",
                      "nodeType": "VariableDeclaration",
                      "scope": 320,
                      "src": "1112:21:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 98,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1112:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 104,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "31",
                        "id": 101,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1141:1:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "313030",
                        "id": 102,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1143:3:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_100_by_1",
                          "typeString": "int_const 100"
                        },
                        "value": "100"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        {
                          "typeIdentifier": "t_rational_100_by_1",
                          "typeString": "int_const 100"
                        }
                      ],
                      "id": 100,
                      "name": "rand",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 360,
                      "src": "1136:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256) returns (uint256)"
                      }
                    },
                    "id": 103,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1136:11:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1112:35:0"
                },
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 106,
                      "name": "contractMiddleCard",
                      "nodeType": "VariableDeclaration",
                      "scope": 320,
                      "src": "1153:23:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 105,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1153:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 107,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1153:23:0"
                },
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 109,
                      "name": "contractLastCard",
                      "nodeType": "VariableDeclaration",
                      "scope": 320,
                      "src": "1182:21:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 108,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1182:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 110,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1182:21:0"
                },
                {
                  "assignments": [
                    112
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 112,
                      "name": "userCardHigh",
                      "nodeType": "VariableDeclaration",
                      "scope": 320,
                      "src": "1209:18:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      },
                      "typeName": {
                        "id": 111,
                        "name": "uint8",
                        "nodeType": "ElementaryTypeName",
                        "src": "1209:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 114,
                  "initialValue": {
                    "argumentTypes": null,
                    "hexValue": "30",
                    "id": 113,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1230:1:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1209:22:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 122,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "components": [
                        {
                          "argumentTypes": null,
                          "id": 115,
                          "name": "userCardNumber",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 93,
                          "src": "1238:14:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 116,
                          "name": "userCardProb",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 96,
                          "src": "1254:12:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 117,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "TupleExpression",
                      "src": "1237:30:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                        "typeString": "tuple(uint256,uint256)"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 120,
                          "name": "_tokenId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61,
                          "src": "1299:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 118,
                          "name": "adCardToken",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 22,
                          "src": "1270:11:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_AdCardToken_$665",
                            "typeString": "contract AdCardToken"
                          }
                        },
                        "id": 119,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "getTokenProperty",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 601,
                        "src": "1270:28:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_view$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                          "typeString": "function (uint256) view external returns (uint256,uint256)"
                        }
                      },
                      "id": 121,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1270:38:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                        "typeString": "tuple(uint256,uint256)"
                      }
                    },
                    "src": "1237:71:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 123,
                  "nodeType": "ExpressionStatement",
                  "src": "1237:71:0"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 126,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 124,
                      "name": "userCardProb",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 96,
                      "src": "1365:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 125,
                      "name": "contractHighProb",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 99,
                      "src": "1381:16:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1365:32:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 131,
                  "nodeType": "IfStatement",
                  "src": "1362:59:0",
                  "trueBody": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 129,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 127,
                        "name": "userCardHigh",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 112,
                        "src": "1405:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "hexValue": "31",
                        "id": 128,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1420:1:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "src": "1405:16:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "id": 130,
                    "nodeType": "ExpressionStatement",
                    "src": "1405:16:0"
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 139,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 132,
                      "name": "contractMiddleCard",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 106,
                      "src": "1451:18:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 134,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1477:1:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        {
                          "argumentTypes": null,
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "argumentTypes": null,
                              "id": 135,
                              "name": "adCardToken",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22,
                              "src": "1480:11:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_AdCardToken_$665",
                                "typeString": "contract AdCardToken"
                              }
                            },
                            "id": 136,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "getCardsLength",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 637,
                            "src": "1480:26:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$__$returns$_t_uint256_$",
                              "typeString": "function () view external returns (uint256)"
                            }
                          },
                          "id": 137,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1480:28:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 133,
                        "name": "rand",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 360,
                        "src": "1472:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                          "typeString": "function (uint256,uint256) returns (uint256)"
                        }
                      },
                      "id": 138,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1472:37:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1451:58:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 140,
                  "nodeType": "ExpressionStatement",
                  "src": "1451:58:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 148,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 141,
                      "name": "contractLastCard",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 109,
                      "src": "1536:16:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 143,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1560:1:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        {
                          "argumentTypes": null,
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "argumentTypes": null,
                              "id": 144,
                              "name": "adCardToken",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22,
                              "src": "1563:11:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_AdCardToken_$665",
                                "typeString": "contract AdCardToken"
                              }
                            },
                            "id": 145,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "getCardsLength",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 637,
                            "src": "1563:26:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$__$returns$_t_uint256_$",
                              "typeString": "function () view external returns (uint256)"
                            }
                          },
                          "id": 146,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1563:28:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 142,
                        "name": "rand",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 360,
                        "src": "1555:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                          "typeString": "function (uint256,uint256) returns (uint256)"
                        }
                      },
                      "id": 147,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1555:37:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1536:56:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 149,
                  "nodeType": "ExpressionStatement",
                  "src": "1536:56:0"
                },
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 151,
                      "name": "_singleGame",
                      "nodeType": "VariableDeclaration",
                      "scope": 320,
                      "src": "1620:29:0",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_SingleGame_$37_memory_ptr",
                        "typeString": "struct AdCardGame.SingleGame"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 150,
                        "name": "SingleGame",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 37,
                        "src": "1620:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_SingleGame_$37_storage_ptr",
                          "typeString": "struct AdCardGame.SingleGame"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 152,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1620:29:0"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    },
                    "id": 155,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 153,
                      "name": "userCardHigh",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 112,
                      "src": "1659:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "31",
                      "id": 154,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1675:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "1659:17:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 291,
                    "nodeType": "Block",
                    "src": "2572:879:0",
                    "statements": [
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 232,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "components": [
                              {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 226,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "id": 224,
                                  "name": "userCardNumber",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 93,
                                  "src": "2584:14:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "<",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "id": 225,
                                  "name": "contractMiddleCard",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 106,
                                  "src": "2601:18:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "2584:35:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              }
                            ],
                            "id": 227,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "2583:37:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "&&",
                          "rightExpression": {
                            "argumentTypes": null,
                            "components": [
                              {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 230,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "id": 228,
                                  "name": "contractMiddleCard",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 106,
                                  "src": "2625:18:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "<",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "id": 229,
                                  "name": "contractLastCard",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 109,
                                  "src": "2646:16:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "2625:37:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              }
                            ],
                            "id": 231,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "2624:39:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "2583:80:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": {
                          "id": 289,
                          "nodeType": "Block",
                          "src": "3067:376:0",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 276,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "argumentTypes": null,
                                  "id": 264,
                                  "name": "_singleGame",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 151,
                                  "src": "3077:11:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_SingleGame_$37_memory_ptr",
                                    "typeString": "struct AdCardGame.SingleGame memory"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "expression": {
                                        "argumentTypes": null,
                                        "id": 266,
                                        "name": "msg",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 2068,
                                        "src": "3124:3:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_magic_message",
                                          "typeString": "msg"
                                        }
                                      },
                                      "id": 267,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberName": "sender",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": null,
                                      "src": "3124:10:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "id": 268,
                                      "name": "contractMiddleCard",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 106,
                                      "src": "3168:18:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "id": 269,
                                      "name": "contractLastCard",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 109,
                                      "src": "3218:16:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "id": 270,
                                      "name": "_tokenId",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 61,
                                      "src": "3261:8:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "expression": {
                                        "argumentTypes": null,
                                        "id": 271,
                                        "name": "msg",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 2068,
                                        "src": "3294:3:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_magic_message",
                                          "typeString": "msg"
                                        }
                                      },
                                      "id": 272,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberName": "value",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": null,
                                      "src": "3294:9:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "id": 273,
                                      "name": "userCardHigh",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 112,
                                      "src": "3331:12:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "hexValue": "30",
                                      "id": 274,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "3365:1:0",
                                      "subdenomination": null,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_0_by_1",
                                        "typeString": "int_const 0"
                                      },
                                      "value": "0"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 265,
                                    "name": "SingleGame",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 37,
                                    "src": "3091:10:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_struct$_SingleGame_$37_storage_ptr_$",
                                      "typeString": "type(struct AdCardGame.SingleGame storage pointer)"
                                    }
                                  },
                                  "id": 275,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "structConstructorCall",
                                  "lValueRequested": false,
                                  "names": [
                                    "player",
                                    "contractMiddleCard",
                                    "contractLastCard",
                                    "userCardTkn",
                                    "playerBet",
                                    "userCardHigh",
                                    "result"
                                  ],
                                  "nodeType": "FunctionCall",
                                  "src": "3091:288:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_SingleGame_$37_memory",
                                    "typeString": "struct AdCardGame.SingleGame memory"
                                  }
                                },
                                "src": "3077:302:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_SingleGame_$37_memory_ptr",
                                  "typeString": "struct AdCardGame.SingleGame memory"
                                }
                              },
                              "id": 277,
                              "nodeType": "ExpressionStatement",
                              "src": "3077:302:0"
                            },
                            {
                              "expression": {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "arguments": [
                                      {
                                        "argumentTypes": null,
                                        "commonType": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        },
                                        "id": 285,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                          "argumentTypes": null,
                                          "expression": {
                                            "argumentTypes": null,
                                            "id": 282,
                                            "name": "msg",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2068,
                                            "src": "3413:3:0",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_magic_message",
                                              "typeString": "msg"
                                            }
                                          },
                                          "id": 283,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "memberName": "value",
                                          "nodeType": "MemberAccess",
                                          "referencedDeclaration": null,
                                          "src": "3413:9:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "-",
                                        "rightExpression": {
                                          "argumentTypes": null,
                                          "id": 284,
                                          "name": "gameFee",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 8,
                                          "src": "3425:7:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "src": "3413:19:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      ],
                                      "expression": {
                                        "argumentTypes": null,
                                        "expression": {
                                          "argumentTypes": null,
                                          "id": 279,
                                          "name": "msg",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 2068,
                                          "src": "3397:3:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_magic_message",
                                            "typeString": "msg"
                                          }
                                        },
                                        "id": 280,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberName": "sender",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": null,
                                        "src": "3397:10:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        }
                                      },
                                      "id": 281,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberName": "send",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": null,
                                      "src": "3397:15:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_function_send_nonpayable$_t_uint256_$returns$_t_bool_$",
                                        "typeString": "function (uint256) returns (bool)"
                                      }
                                    },
                                    "id": 286,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "functionCall",
                                    "lValueRequested": false,
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "3397:36:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    }
                                  ],
                                  "id": 278,
                                  "name": "require",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [
                                    2071,
                                    2072
                                  ],
                                  "referencedDeclaration": 2071,
                                  "src": "3389:7:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                                    "typeString": "function (bool) pure"
                                  }
                                },
                                "id": 287,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "3389:45:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 288,
                              "nodeType": "ExpressionStatement",
                              "src": "3389:45:0"
                            }
                          ]
                        },
                        "id": 290,
                        "nodeType": "IfStatement",
                        "src": "2580:863:0",
                        "trueBody": {
                          "id": 263,
                          "nodeType": "Block",
                          "src": "2664:390:0",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 245,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "argumentTypes": null,
                                  "id": 233,
                                  "name": "_singleGame",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 151,
                                  "src": "2674:11:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_SingleGame_$37_memory_ptr",
                                    "typeString": "struct AdCardGame.SingleGame memory"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "expression": {
                                        "argumentTypes": null,
                                        "id": 235,
                                        "name": "msg",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 2068,
                                        "src": "2721:3:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_magic_message",
                                          "typeString": "msg"
                                        }
                                      },
                                      "id": 236,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberName": "sender",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": null,
                                      "src": "2721:10:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "id": 237,
                                      "name": "contractMiddleCard",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 106,
                                      "src": "2765:18:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "id": 238,
                                      "name": "contractLastCard",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 109,
                                      "src": "2815:16:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "id": 239,
                                      "name": "_tokenId",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 61,
                                      "src": "2858:8:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "expression": {
                                        "argumentTypes": null,
                                        "id": 240,
                                        "name": "msg",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 2068,
                                        "src": "2891:3:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_magic_message",
                                          "typeString": "msg"
                                        }
                                      },
                                      "id": 241,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberName": "value",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": null,
                                      "src": "2891:9:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "id": 242,
                                      "name": "userCardHigh",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 112,
                                      "src": "2928:12:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "hexValue": "31",
                                      "id": 243,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "2962:1:0",
                                      "subdenomination": null,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_1_by_1",
                                        "typeString": "int_const 1"
                                      },
                                      "value": "1"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 234,
                                    "name": "SingleGame",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 37,
                                    "src": "2688:10:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_struct$_SingleGame_$37_storage_ptr_$",
                                      "typeString": "type(struct AdCardGame.SingleGame storage pointer)"
                                    }
                                  },
                                  "id": 244,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "structConstructorCall",
                                  "lValueRequested": false,
                                  "names": [
                                    "player",
                                    "contractMiddleCard",
                                    "contractLastCard",
                                    "userCardTkn",
                                    "playerBet",
                                    "userCardHigh",
                                    "result"
                                  ],
                                  "nodeType": "FunctionCall",
                                  "src": "2688:288:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_SingleGame_$37_memory",
                                    "typeString": "struct AdCardGame.SingleGame memory"
                                  }
                                },
                                "src": "2674:302:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_SingleGame_$37_memory_ptr",
                                  "typeString": "struct AdCardGame.SingleGame memory"
                                }
                              },
                              "id": 246,
                              "nodeType": "ExpressionStatement",
                              "src": "2674:302:0"
                            },
                            {
                              "expression": {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "arguments": [
                                      {
                                        "argumentTypes": null,
                                        "commonType": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        },
                                        "id": 259,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                          "argumentTypes": null,
                                          "components": [
                                            {
                                              "argumentTypes": null,
                                              "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                              },
                                              "id": 256,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "leftExpression": {
                                                "argumentTypes": null,
                                                "commonType": {
                                                  "typeIdentifier": "t_uint256",
                                                  "typeString": "uint256"
                                                },
                                                "id": 254,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                  "argumentTypes": null,
                                                  "expression": {
                                                    "argumentTypes": null,
                                                    "id": 251,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 2068,
                                                    "src": "3011:3:0",
                                                    "typeDescriptions": {
                                                      "typeIdentifier": "t_magic_message",
                                                      "typeString": "msg"
                                                    }
                                                  },
                                                  "id": 252,
                                                  "isConstant": false,
                                                  "isLValue": false,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "memberName": "value",
                                                  "nodeType": "MemberAccess",
                                                  "referencedDeclaration": null,
                                                  "src": "3011:9:0",
                                                  "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                  }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "*",
                                                "rightExpression": {
                                                  "argumentTypes": null,
                                                  "hexValue": "313530",
                                                  "id": 253,
                                                  "isConstant": false,
                                                  "isLValue": false,
                                                  "isPure": true,
                                                  "kind": "number",
                                                  "lValueRequested": false,
                                                  "nodeType": "Literal",
                                                  "src": "3023:3:0",
                                                  "subdenomination": null,
                                                  "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_150_by_1",
                                                    "typeString": "int_const 150"
                                                  },
                                                  "value": "150"
                                                },
                                                "src": "3011:15:0",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_uint256",
                                                  "typeString": "uint256"
                                                }
                                              },
                                              "nodeType": "BinaryOperation",
                                              "operator": "/",
                                              "rightExpression": {
                                                "argumentTypes": null,
                                                "hexValue": "313030",
                                                "id": 255,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "3029:3:0",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_rational_100_by_1",
                                                  "typeString": "int_const 100"
                                                },
                                                "value": "100"
                                              },
                                              "src": "3011:21:0",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                              }
                                            }
                                          ],
                                          "id": 257,
                                          "isConstant": false,
                                          "isInlineArray": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "nodeType": "TupleExpression",
                                          "src": "3010:23:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "-",
                                        "rightExpression": {
                                          "argumentTypes": null,
                                          "id": 258,
                                          "name": "gameFee",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 8,
                                          "src": "3036:7:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "src": "3010:33:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      ],
                                      "expression": {
                                        "argumentTypes": null,
                                        "expression": {
                                          "argumentTypes": null,
                                          "id": 248,
                                          "name": "msg",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 2068,
                                          "src": "2994:3:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_magic_message",
                                            "typeString": "msg"
                                          }
                                        },
                                        "id": 249,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberName": "sender",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": null,
                                        "src": "2994:10:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        }
                                      },
                                      "id": 250,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberName": "send",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": null,
                                      "src": "2994:15:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_function_send_nonpayable$_t_uint256_$returns$_t_bool_$",
                                        "typeString": "function (uint256) returns (bool)"
                                      }
                                    },
                                    "id": 260,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "functionCall",
                                    "lValueRequested": false,
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "2994:50:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    }
                                  ],
                                  "id": 247,
                                  "name": "require",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [
                                    2071,
                                    2072
                                  ],
                                  "referencedDeclaration": 2071,
                                  "src": "2986:7:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                                    "typeString": "function (bool) pure"
                                  }
                                },
                                "id": 261,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2986:59:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 262,
                              "nodeType": "ExpressionStatement",
                              "src": "2986:59:0"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "id": 292,
                  "nodeType": "IfStatement",
                  "src": "1656:1795:0",
                  "trueBody": {
                    "id": 223,
                    "nodeType": "Block",
                    "src": "1682:876:0",
                    "statements": [
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 164,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "components": [
                              {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 158,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "id": 156,
                                  "name": "contractLastCard",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 109,
                                  "src": "1694:16:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "<",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "id": 157,
                                  "name": "contractMiddleCard",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 106,
                                  "src": "1713:18:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "1694:37:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              }
                            ],
                            "id": 159,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "1693:39:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "&&",
                          "rightExpression": {
                            "argumentTypes": null,
                            "components": [
                              {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 162,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "id": 160,
                                  "name": "contractMiddleCard",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 106,
                                  "src": "1737:18:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "<",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "id": 161,
                                  "name": "userCardNumber",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 93,
                                  "src": "1758:14:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "1737:35:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              }
                            ],
                            "id": 163,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "1736:37:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "1693:80:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": {
                          "id": 221,
                          "nodeType": "Block",
                          "src": "2175:376:0",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 208,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "argumentTypes": null,
                                  "id": 196,
                                  "name": "_singleGame",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 151,
                                  "src": "2185:11:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_SingleGame_$37_memory_ptr",
                                    "typeString": "struct AdCardGame.SingleGame memory"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "expression": {
                                        "argumentTypes": null,
                                        "id": 198,
                                        "name": "msg",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 2068,
                                        "src": "2232:3:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_magic_message",
                                          "typeString": "msg"
                                        }
                                      },
                                      "id": 199,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberName": "sender",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": null,
                                      "src": "2232:10:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "id": 200,
                                      "name": "contractMiddleCard",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 106,
                                      "src": "2276:18:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "id": 201,
                                      "name": "contractLastCard",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 109,
                                      "src": "2326:16:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "id": 202,
                                      "name": "_tokenId",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 61,
                                      "src": "2369:8:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "expression": {
                                        "argumentTypes": null,
                                        "id": 203,
                                        "name": "msg",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 2068,
                                        "src": "2402:3:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_magic_message",
                                          "typeString": "msg"
                                        }
                                      },
                                      "id": 204,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberName": "value",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": null,
                                      "src": "2402:9:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "id": 205,
                                      "name": "userCardHigh",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 112,
                                      "src": "2439:12:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "hexValue": "30",
                                      "id": 206,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "2473:1:0",
                                      "subdenomination": null,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_0_by_1",
                                        "typeString": "int_const 0"
                                      },
                                      "value": "0"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 197,
                                    "name": "SingleGame",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 37,
                                    "src": "2199:10:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_struct$_SingleGame_$37_storage_ptr_$",
                                      "typeString": "type(struct AdCardGame.SingleGame storage pointer)"
                                    }
                                  },
                                  "id": 207,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "structConstructorCall",
                                  "lValueRequested": false,
                                  "names": [
                                    "player",
                                    "contractMiddleCard",
                                    "contractLastCard",
                                    "userCardTkn",
                                    "playerBet",
                                    "userCardHigh",
                                    "result"
                                  ],
                                  "nodeType": "FunctionCall",
                                  "src": "2199:288:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_SingleGame_$37_memory",
                                    "typeString": "struct AdCardGame.SingleGame memory"
                                  }
                                },
                                "src": "2185:302:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_SingleGame_$37_memory_ptr",
                                  "typeString": "struct AdCardGame.SingleGame memory"
                                }
                              },
                              "id": 209,
                              "nodeType": "ExpressionStatement",
                              "src": "2185:302:0"
                            },
                            {
                              "expression": {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "arguments": [
                                      {
                                        "argumentTypes": null,
                                        "commonType": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        },
                                        "id": 217,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                          "argumentTypes": null,
                                          "expression": {
                                            "argumentTypes": null,
                                            "id": 214,
                                            "name": "msg",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2068,
                                            "src": "2521:3:0",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_magic_message",
                                              "typeString": "msg"
                                            }
                                          },
                                          "id": 215,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "memberName": "value",
                                          "nodeType": "MemberAccess",
                                          "referencedDeclaration": null,
                                          "src": "2521:9:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "-",
                                        "rightExpression": {
                                          "argumentTypes": null,
                                          "id": 216,
                                          "name": "gameFee",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 8,
                                          "src": "2533:7:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "src": "2521:19:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      ],
                                      "expression": {
                                        "argumentTypes": null,
                                        "expression": {
                                          "argumentTypes": null,
                                          "id": 211,
                                          "name": "msg",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 2068,
                                          "src": "2505:3:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_magic_message",
                                            "typeString": "msg"
                                          }
                                        },
                                        "id": 212,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberName": "sender",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": null,
                                        "src": "2505:10:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        }
                                      },
                                      "id": 213,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberName": "send",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": null,
                                      "src": "2505:15:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_function_send_nonpayable$_t_uint256_$returns$_t_bool_$",
                                        "typeString": "function (uint256) returns (bool)"
                                      }
                                    },
                                    "id": 218,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "functionCall",
                                    "lValueRequested": false,
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "2505:36:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    }
                                  ],
                                  "id": 210,
                                  "name": "require",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [
                                    2071,
                                    2072
                                  ],
                                  "referencedDeclaration": 2071,
                                  "src": "2497:7:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                                    "typeString": "function (bool) pure"
                                  }
                                },
                                "id": 219,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2497:45:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 220,
                              "nodeType": "ExpressionStatement",
                              "src": "2497:45:0"
                            }
                          ]
                        },
                        "id": 222,
                        "nodeType": "IfStatement",
                        "src": "1690:861:0",
                        "trueBody": {
                          "id": 195,
                          "nodeType": "Block",
                          "src": "1774:390:0",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 177,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "argumentTypes": null,
                                  "id": 165,
                                  "name": "_singleGame",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 151,
                                  "src": "1784:11:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_SingleGame_$37_memory_ptr",
                                    "typeString": "struct AdCardGame.SingleGame memory"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "expression": {
                                        "argumentTypes": null,
                                        "id": 167,
                                        "name": "msg",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 2068,
                                        "src": "1831:3:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_magic_message",
                                          "typeString": "msg"
                                        }
                                      },
                                      "id": 168,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberName": "sender",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": null,
                                      "src": "1831:10:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "id": 169,
                                      "name": "contractMiddleCard",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 106,
                                      "src": "1875:18:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "id": 170,
                                      "name": "contractLastCard",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 109,
                                      "src": "1925:16:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "id": 171,
                                      "name": "_tokenId",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 61,
                                      "src": "1968:8:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "expression": {
                                        "argumentTypes": null,
                                        "id": 172,
                                        "name": "msg",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 2068,
                                        "src": "2001:3:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_magic_message",
                                          "typeString": "msg"
                                        }
                                      },
                                      "id": 173,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberName": "value",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": null,
                                      "src": "2001:9:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "id": 174,
                                      "name": "userCardHigh",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 112,
                                      "src": "2038:12:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "hexValue": "31",
                                      "id": 175,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "2072:1:0",
                                      "subdenomination": null,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_1_by_1",
                                        "typeString": "int_const 1"
                                      },
                                      "value": "1"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 166,
                                    "name": "SingleGame",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 37,
                                    "src": "1798:10:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_struct$_SingleGame_$37_storage_ptr_$",
                                      "typeString": "type(struct AdCardGame.SingleGame storage pointer)"
                                    }
                                  },
                                  "id": 176,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "structConstructorCall",
                                  "lValueRequested": false,
                                  "names": [
                                    "player",
                                    "contractMiddleCard",
                                    "contractLastCard",
                                    "userCardTkn",
                                    "playerBet",
                                    "userCardHigh",
                                    "result"
                                  ],
                                  "nodeType": "FunctionCall",
                                  "src": "1798:288:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_SingleGame_$37_memory",
                                    "typeString": "struct AdCardGame.SingleGame memory"
                                  }
                                },
                                "src": "1784:302:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_SingleGame_$37_memory_ptr",
                                  "typeString": "struct AdCardGame.SingleGame memory"
                                }
                              },
                              "id": 178,
                              "nodeType": "ExpressionStatement",
                              "src": "1784:302:0"
                            },
                            {
                              "expression": {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "arguments": [
                                      {
                                        "argumentTypes": null,
                                        "commonType": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        },
                                        "id": 191,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                          "argumentTypes": null,
                                          "components": [
                                            {
                                              "argumentTypes": null,
                                              "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                              },
                                              "id": 188,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "leftExpression": {
                                                "argumentTypes": null,
                                                "commonType": {
                                                  "typeIdentifier": "t_uint256",
                                                  "typeString": "uint256"
                                                },
                                                "id": 186,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                  "argumentTypes": null,
                                                  "expression": {
                                                    "argumentTypes": null,
                                                    "id": 183,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 2068,
                                                    "src": "2121:3:0",
                                                    "typeDescriptions": {
                                                      "typeIdentifier": "t_magic_message",
                                                      "typeString": "msg"
                                                    }
                                                  },
                                                  "id": 184,
                                                  "isConstant": false,
                                                  "isLValue": false,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "memberName": "value",
                                                  "nodeType": "MemberAccess",
                                                  "referencedDeclaration": null,
                                                  "src": "2121:9:0",
                                                  "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                  }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "*",
                                                "rightExpression": {
                                                  "argumentTypes": null,
                                                  "hexValue": "313530",
                                                  "id": 185,
                                                  "isConstant": false,
                                                  "isLValue": false,
                                                  "isPure": true,
                                                  "kind": "number",
                                                  "lValueRequested": false,
                                                  "nodeType": "Literal",
                                                  "src": "2133:3:0",
                                                  "subdenomination": null,
                                                  "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_150_by_1",
                                                    "typeString": "int_const 150"
                                                  },
                                                  "value": "150"
                                                },
                                                "src": "2121:15:0",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_uint256",
                                                  "typeString": "uint256"
                                                }
                                              },
                                              "nodeType": "BinaryOperation",
                                              "operator": "/",
                                              "rightExpression": {
                                                "argumentTypes": null,
                                                "hexValue": "313030",
                                                "id": 187,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "2139:3:0",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_rational_100_by_1",
                                                  "typeString": "int_const 100"
                                                },
                                                "value": "100"
                                              },
                                              "src": "2121:21:0",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                              }
                                            }
                                          ],
                                          "id": 189,
                                          "isConstant": false,
                                          "isInlineArray": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "nodeType": "TupleExpression",
                                          "src": "2120:23:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "-",
                                        "rightExpression": {
                                          "argumentTypes": null,
                                          "id": 190,
                                          "name": "gameFee",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 8,
                                          "src": "2146:7:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "src": "2120:33:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      ],
                                      "expression": {
                                        "argumentTypes": null,
                                        "expression": {
                                          "argumentTypes": null,
                                          "id": 180,
                                          "name": "msg",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 2068,
                                          "src": "2104:3:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_magic_message",
                                            "typeString": "msg"
                                          }
                                        },
                                        "id": 181,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberName": "sender",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": null,
                                        "src": "2104:10:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        }
                                      },
                                      "id": 182,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberName": "send",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": null,
                                      "src": "2104:15:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_function_send_nonpayable$_t_uint256_$returns$_t_bool_$",
                                        "typeString": "function (uint256) returns (bool)"
                                      }
                                    },
                                    "id": 192,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "functionCall",
                                    "lValueRequested": false,
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "2104:50:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    }
                                  ],
                                  "id": 179,
                                  "name": "require",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [
                                    2071,
                                    2072
                                  ],
                                  "referencedDeclaration": 2071,
                                  "src": "2096:7:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                                    "typeString": "function (bool) pure"
                                  }
                                },
                                "id": 193,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2096:59:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 194,
                              "nodeType": "ExpressionStatement",
                              "src": "2096:59:0"
                            }
                          ]
                        }
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 300,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 293,
                      "name": "maxSingleGameId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17,
                      "src": "3457:15:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 299,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 296,
                            "name": "_singleGame",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 151,
                            "src": "3492:11:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_SingleGame_$37_memory_ptr",
                              "typeString": "struct AdCardGame.SingleGame memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_struct$_SingleGame_$37_memory_ptr",
                              "typeString": "struct AdCardGame.SingleGame memory"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 294,
                            "name": "singleGames",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 40,
                            "src": "3475:11:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_struct$_SingleGame_$37_storage_$dyn_storage",
                              "typeString": "struct AdCardGame.SingleGame storage ref[] storage ref"
                            }
                          },
                          "id": 295,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "push",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "3475:16:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_arraypush_nonpayable$_t_struct$_SingleGame_$37_storage_$returns$_t_uint256_$",
                            "typeString": "function (struct AdCardGame.SingleGame storage ref) returns (uint256)"
                          }
                        },
                        "id": 297,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3475:29:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "-",
                      "rightExpression": {
                        "argumentTypes": null,
                        "hexValue": "31",
                        "id": 298,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3507:1:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "src": "3475:33:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3457:51:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 301,
                  "nodeType": "ExpressionStatement",
                  "src": "3457:51:0"
                },
                {
                  "assignments": [
                    305
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 305,
                      "name": "userSingleGames",
                      "nodeType": "VariableDeclaration",
                      "scope": 320,
                      "src": "3514:25:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                        "typeString": "uint256[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 303,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "3514:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 304,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "3514:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                          "typeString": "uint256[]"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 310,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 306,
                      "name": "usersSingleGames",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 45,
                      "src": "3542:16:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint256_$dyn_storage_$",
                        "typeString": "mapping(address => uint256[] storage ref)"
                      }
                    },
                    "id": 309,
                    "indexExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 307,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2068,
                        "src": "3559:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 308,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "3559:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "3542:28:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                      "typeString": "uint256[] storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3514:56:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 314,
                        "name": "maxSingleGameId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17,
                        "src": "3597:15:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 311,
                        "name": "userSingleGames",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 305,
                        "src": "3576:15:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                          "typeString": "uint256[] storage pointer"
                        }
                      },
                      "id": 313,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "3576:20:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256) returns (uint256)"
                      }
                    },
                    "id": 315,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3576:37:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 316,
                  "nodeType": "ExpressionStatement",
                  "src": "3576:37:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 317,
                    "name": "maxSingleGameId",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 17,
                    "src": "3626:15:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 65,
                  "id": 318,
                  "nodeType": "Return",
                  "src": "3619:22:0"
                }
              ]
            },
            "documentation": null,
            "id": 320,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "createSingleGame",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 62,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 320,
                  "src": "862:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "862:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "861:15:0"
            },
            "payable": true,
            "returnParameters": {
              "id": 65,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 64,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 320,
                  "src": "901:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "901:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "900:9:0"
            },
            "scope": 388,
            "src": "836:2824:0",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 332,
              "nodeType": "Block",
              "src": "3892:44:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 328,
                      "name": "usersSingleGames",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 45,
                      "src": "3905:16:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint256_$dyn_storage_$",
                        "typeString": "mapping(address => uint256[] storage ref)"
                      }
                    },
                    "id": 330,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 329,
                      "name": "_address",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 322,
                      "src": "3922:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "3905:26:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                      "typeString": "uint256[] storage ref"
                    }
                  },
                  "functionReturnParameters": 327,
                  "id": 331,
                  "nodeType": "Return",
                  "src": "3898:33:0"
                }
              ]
            },
            "documentation": null,
            "id": 333,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getUserSingleGames",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 323,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 322,
                  "name": "_address",
                  "nodeType": "VariableDeclaration",
                  "scope": 333,
                  "src": "3840:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 321,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3840:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3839:18:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 327,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 326,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 333,
                  "src": "3881:9:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 324,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "3881:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 325,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "3881:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3880:11:0"
            },
            "scope": 388,
            "src": "3812:124:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 359,
              "nodeType": "Block",
              "src": "3996:75:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 343,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "++",
                    "prefix": false,
                    "src": "4002:7:0",
                    "subExpression": {
                      "argumentTypes": null,
                      "id": 342,
                      "name": "nonce",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20,
                      "src": "4002:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 344,
                  "nodeType": "ExpressionStatement",
                  "src": "4002:7:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 357,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 355,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 351,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 348,
                                    "name": "block",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 2058,
                                    "src": "4043:5:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_block",
                                      "typeString": "block"
                                    }
                                  },
                                  "id": 349,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "number",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "4043:12:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "-",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "hexValue": "31",
                                  "id": 350,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "4056:1:0",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_1_by_1",
                                    "typeString": "int_const 1"
                                  },
                                  "value": "1"
                                },
                                "src": "4043:14:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 346,
                                "name": "block",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 2058,
                                "src": "4027:5:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_block",
                                  "typeString": "block"
                                }
                              },
                              "id": 347,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "blockhash",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "4027:15:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_blockhash_view$_t_uint256_$returns$_t_bytes32_$",
                                "typeString": "function (uint256) view returns (bytes32)"
                              }
                            },
                            "id": 352,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4027:31:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          ],
                          "id": 345,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "4022:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_uint256_$",
                            "typeString": "type(uint256)"
                          },
                          "typeName": "uint"
                        },
                        "id": 353,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4022:37:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "%",
                      "rightExpression": {
                        "argumentTypes": null,
                        "hexValue": "3130",
                        "id": 354,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4060:2:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_10_by_1",
                          "typeString": "int_const 10"
                        },
                        "value": "10"
                      },
                      "src": "4022:40:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "+",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "31",
                      "id": 356,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4065:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "4022:44:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 341,
                  "id": 358,
                  "nodeType": "Return",
                  "src": "4015:51:0"
                }
              ]
            },
            "documentation": null,
            "id": 360,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "rand",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 338,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 335,
                  "name": "min",
                  "nodeType": "VariableDeclaration",
                  "scope": 360,
                  "src": "3954:8:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 334,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3954:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 337,
                  "name": "max",
                  "nodeType": "VariableDeclaration",
                  "scope": 360,
                  "src": "3964:8:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 336,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3964:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3953:20:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 341,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 340,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 360,
                  "src": "3991:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 339,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3991:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3990:6:0"
            },
            "scope": 388,
            "src": "3940:131:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "private"
          },
          {
            "body": {
              "id": 386,
              "nodeType": "Block",
              "src": "4145:96:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 375,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 370,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 362,
                          "src": "4159:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 372,
                                "name": "this",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 2103,
                                "src": "4177:4:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_AdCardGame_$388",
                                  "typeString": "contract AdCardGame"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_AdCardGame_$388",
                                  "typeString": "contract AdCardGame"
                                }
                              ],
                              "id": 371,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "4169:7:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": "address"
                            },
                            "id": 373,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4169:13:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "id": 374,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "balance",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "4169:21:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "4159:31:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 369,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        2071,
                        2072
                      ],
                      "referencedDeclaration": 2071,
                      "src": "4151:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 376,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4151:40:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 377,
                  "nodeType": "ExpressionStatement",
                  "src": "4151:40:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 381,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 362,
                        "src": "4212:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 378,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 839,
                        "src": "4197:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 380,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "4197:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 382,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4197:22:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 383,
                  "nodeType": "ExpressionStatement",
                  "src": "4197:22:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 384,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "4232:4:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 368,
                  "id": 385,
                  "nodeType": "Return",
                  "src": "4225:11:0"
                }
              ]
            },
            "documentation": null,
            "id": 387,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 365,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 364,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 869,
                  "src": "4121:9:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "4121:9:0"
              }
            ],
            "name": "withdraw",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 363,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 362,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 387,
                  "src": "4093:11:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 361,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "4093:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4092:13:0"
            },
            "payable": true,
            "returnParameters": {
              "id": 368,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 367,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 387,
                  "src": "4139:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 366,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "4139:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4138:6:0"
            },
            "scope": 388,
            "src": "4075:166:0",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 389,
        "src": "115:4129:0"
      }
    ],
    "src": "0:4245:0"
  },
  "legacyAST": {
    "absolutePath": "/home/phurien/private_blockchain/AdGame/contracts/AdCardGame.sol",
    "exportedSymbols": {
      "AdCardGame": [
        388
      ]
    },
    "id": 389,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".17"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:0"
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/ownership/Ownable.sol",
        "file": "zeppelin-solidity/contracts/ownership/Ownable.sol",
        "id": 2,
        "nodeType": "ImportDirective",
        "scope": 389,
        "sourceUnit": 922,
        "src": "26:59:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/phurien/private_blockchain/AdGame/contracts/AdCardToken.sol",
        "file": "./AdCardToken.sol",
        "id": 3,
        "nodeType": "ImportDirective",
        "scope": 389,
        "sourceUnit": 666,
        "src": "86:27:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 4,
              "name": "Ownable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 921,
              "src": "138:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Ownable_$921",
                "typeString": "contract Ownable"
              }
            },
            "id": 5,
            "nodeType": "InheritanceSpecifier",
            "src": "138:7:0"
          }
        ],
        "contractDependencies": [
          921
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 388,
        "linearizedBaseContracts": [
          388,
          921
        ],
        "name": "AdCardGame",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": true,
            "id": 8,
            "name": "gameFee",
            "nodeType": "VariableDeclaration",
            "scope": 388,
            "src": "151:35:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 6,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "151:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "302e303035",
              "id": 7,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "175:11:0",
              "subdenomination": "ether",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_5000000000000000_by_1",
                "typeString": "int_const 5000000000000000"
              },
              "value": "0.005"
            },
            "visibility": "internal"
          },
          {
            "constant": true,
            "id": 11,
            "name": "minPrice",
            "nodeType": "VariableDeclaration",
            "scope": 388,
            "src": "190:35:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 9,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "190:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "302e3031",
              "id": 10,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "215:10:0",
              "subdenomination": "ether",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_10000000000000000_by_1",
                "typeString": "int_const 10000000000000000"
              },
              "value": "0.01"
            },
            "visibility": "internal"
          },
          {
            "constant": true,
            "id": 14,
            "name": "minHerosToken",
            "nodeType": "VariableDeclaration",
            "scope": 388,
            "src": "229:37:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 12,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "229:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "35",
              "id": 13,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "259:7:0",
              "subdenomination": "ether",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_5000000000000000000_by_1",
                "typeString": "int_const 5000000000000000000"
              },
              "value": "5"
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 17,
            "name": "maxSingleGameId",
            "nodeType": "VariableDeclaration",
            "scope": 388,
            "src": "313:34:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 15,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "313:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "30",
              "id": 16,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "346:1:0",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_0_by_1",
                "typeString": "int_const 0"
              },
              "value": "0"
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 20,
            "name": "nonce",
            "nodeType": "VariableDeclaration",
            "scope": 388,
            "src": "352:14:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 18,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "352:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "30",
              "id": 19,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "365:1:0",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_0_by_1",
                "typeString": "int_const 0"
              },
              "value": "0"
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 22,
            "name": "adCardToken",
            "nodeType": "VariableDeclaration",
            "scope": 388,
            "src": "370:23:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_AdCardToken_$665",
              "typeString": "contract AdCardToken"
            },
            "typeName": {
              "contractScope": null,
              "id": 21,
              "name": "AdCardToken",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 665,
              "src": "370:11:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_AdCardToken_$665",
                "typeString": "contract AdCardToken"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "canonicalName": "AdCardGame.SingleGame",
            "id": 37,
            "members": [
              {
                "constant": false,
                "id": 24,
                "name": "player",
                "nodeType": "VariableDeclaration",
                "scope": 37,
                "src": "422:14:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 23,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "422:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 26,
                "name": "contractMiddleCard",
                "nodeType": "VariableDeclaration",
                "scope": 37,
                "src": "442:26:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 25,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "442:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 28,
                "name": "contractLastCard",
                "nodeType": "VariableDeclaration",
                "scope": 37,
                "src": "474:24:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 27,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "474:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 30,
                "name": "userCardTkn",
                "nodeType": "VariableDeclaration",
                "scope": 37,
                "src": "504:19:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 29,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "504:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 32,
                "name": "playerBet",
                "nodeType": "VariableDeclaration",
                "scope": 37,
                "src": "529:17:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 31,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "529:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 34,
                "name": "userCardHigh",
                "nodeType": "VariableDeclaration",
                "scope": 37,
                "src": "552:18:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint8",
                  "typeString": "uint8"
                },
                "typeName": {
                  "id": 33,
                  "name": "uint8",
                  "nodeType": "ElementaryTypeName",
                  "src": "552:5:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 36,
                "name": "result",
                "nodeType": "VariableDeclaration",
                "scope": 37,
                "src": "576:12:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint8",
                  "typeString": "uint8"
                },
                "typeName": {
                  "id": 35,
                  "name": "uint8",
                  "nodeType": "ElementaryTypeName",
                  "src": "576:5:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "SingleGame",
            "nodeType": "StructDefinition",
            "scope": 388,
            "src": "398:217:0",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 40,
            "name": "singleGames",
            "nodeType": "VariableDeclaration",
            "scope": 388,
            "src": "619:31:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_struct$_SingleGame_$37_storage_$dyn_storage",
              "typeString": "struct AdCardGame.SingleGame[]"
            },
            "typeName": {
              "baseType": {
                "contractScope": null,
                "id": 38,
                "name": "SingleGame",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 37,
                "src": "619:10:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_SingleGame_$37_storage_ptr",
                  "typeString": "struct AdCardGame.SingleGame"
                }
              },
              "id": 39,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "619:12:0",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_struct$_SingleGame_$37_storage_$dyn_storage_ptr",
                "typeString": "struct AdCardGame.SingleGame[]"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 45,
            "name": "usersSingleGames",
            "nodeType": "VariableDeclaration",
            "scope": 388,
            "src": "655:53:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint256_$dyn_storage_$",
              "typeString": "mapping(address => uint256[])"
            },
            "typeName": {
              "id": 44,
              "keyType": {
                "id": 41,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "663:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "655:29:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint256_$dyn_storage_$",
                "typeString": "mapping(address => uint256[])"
              },
              "valueType": {
                "baseType": {
                  "id": 42,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "674:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "id": 43,
                "length": null,
                "nodeType": "ArrayTypeName",
                "src": "674:9:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                  "typeString": "uint256[]"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 54,
              "nodeType": "Block",
              "src": "758:37:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 52,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 50,
                      "name": "adCardToken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22,
                      "src": "764:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_AdCardToken_$665",
                        "typeString": "contract AdCardToken"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 51,
                      "name": "_adCardToken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47,
                      "src": "778:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_AdCardToken_$665",
                        "typeString": "contract AdCardToken"
                      }
                    },
                    "src": "764:26:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_AdCardToken_$665",
                      "typeString": "contract AdCardToken"
                    }
                  },
                  "id": 53,
                  "nodeType": "ExpressionStatement",
                  "src": "764:26:0"
                }
              ]
            },
            "documentation": null,
            "id": 55,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 48,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47,
                  "name": "_adCardToken",
                  "nodeType": "VariableDeclaration",
                  "scope": 55,
                  "src": "725:24:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_AdCardToken_$665",
                    "typeString": "contract AdCardToken"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 46,
                    "name": "AdCardToken",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 665,
                    "src": "725:11:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_AdCardToken_$665",
                      "typeString": "contract AdCardToken"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "724:26:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 49,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "758:0:0"
            },
            "scope": 388,
            "src": "713:82:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 58,
              "nodeType": "Block",
              "src": "826:6:0",
              "statements": []
            },
            "documentation": null,
            "id": 59,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 56,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "808:2:0"
            },
            "payable": true,
            "returnParameters": {
              "id": 57,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "826:0:0"
            },
            "scope": 388,
            "src": "799:33:0",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 319,
              "nodeType": "Block",
              "src": "910:2750:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 70,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 67,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2068,
                            "src": "924:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 68,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "924:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 69,
                          "name": "minPrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 11,
                          "src": "937:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "924:21:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 66,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        2071,
                        2072
                      ],
                      "referencedDeclaration": 2071,
                      "src": "916:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 71,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "916:30:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 72,
                  "nodeType": "ExpressionStatement",
                  "src": "916:30:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 79,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 75,
                                "name": "this",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 2103,
                                "src": "968:4:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_AdCardGame_$388",
                                  "typeString": "contract AdCardGame"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_AdCardGame_$388",
                                  "typeString": "contract AdCardGame"
                                }
                              ],
                              "id": 74,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "960:7:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": "address"
                            },
                            "id": 76,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "960:13:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "id": 77,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "balance",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "960:21:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 78,
                          "name": "minHerosToken",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 14,
                          "src": "985:13:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "960:38:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 73,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        2071,
                        2072
                      ],
                      "referencedDeclaration": 2071,
                      "src": "952:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 80,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "952:47:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 81,
                  "nodeType": "ExpressionStatement",
                  "src": "952:47:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 89,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 85,
                              "name": "_tokenId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 61,
                              "src": "1033:8:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 83,
                              "name": "adCardToken",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22,
                              "src": "1013:11:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_AdCardToken_$665",
                                "typeString": "contract AdCardToken"
                              }
                            },
                            "id": 84,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "ownerOf",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 1190,
                            "src": "1013:19:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_uint256_$returns$_t_address_$",
                              "typeString": "function (uint256) view external returns (address)"
                            }
                          },
                          "id": 86,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1013:29:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 87,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2068,
                            "src": "1046:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 88,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1046:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "1013:43:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 82,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        2071,
                        2072
                      ],
                      "referencedDeclaration": 2071,
                      "src": "1005:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 90,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1005:52:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 91,
                  "nodeType": "ExpressionStatement",
                  "src": "1005:52:0"
                },
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 93,
                      "name": "userCardNumber",
                      "nodeType": "VariableDeclaration",
                      "scope": 320,
                      "src": "1064:19:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 92,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1064:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 94,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1064:19:0"
                },
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 96,
                      "name": "userCardProb",
                      "nodeType": "VariableDeclaration",
                      "scope": 320,
                      "src": "1089:17:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 95,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1089:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 97,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1089:17:0"
                },
                {
                  "assignments": [
                    99
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 99,
                      "name": "contractHighProb",
                      "nodeType": "VariableDeclaration",
                      "scope": 320,
                      "src": "1112:21:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 98,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1112:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 104,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "31",
                        "id": 101,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1141:1:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "313030",
                        "id": 102,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1143:3:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_100_by_1",
                          "typeString": "int_const 100"
                        },
                        "value": "100"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        {
                          "typeIdentifier": "t_rational_100_by_1",
                          "typeString": "int_const 100"
                        }
                      ],
                      "id": 100,
                      "name": "rand",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 360,
                      "src": "1136:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256) returns (uint256)"
                      }
                    },
                    "id": 103,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1136:11:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1112:35:0"
                },
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 106,
                      "name": "contractMiddleCard",
                      "nodeType": "VariableDeclaration",
                      "scope": 320,
                      "src": "1153:23:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 105,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1153:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 107,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1153:23:0"
                },
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 109,
                      "name": "contractLastCard",
                      "nodeType": "VariableDeclaration",
                      "scope": 320,
                      "src": "1182:21:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 108,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1182:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 110,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1182:21:0"
                },
                {
                  "assignments": [
                    112
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 112,
                      "name": "userCardHigh",
                      "nodeType": "VariableDeclaration",
                      "scope": 320,
                      "src": "1209:18:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      },
                      "typeName": {
                        "id": 111,
                        "name": "uint8",
                        "nodeType": "ElementaryTypeName",
                        "src": "1209:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 114,
                  "initialValue": {
                    "argumentTypes": null,
                    "hexValue": "30",
                    "id": 113,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1230:1:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1209:22:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 122,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "components": [
                        {
                          "argumentTypes": null,
                          "id": 115,
                          "name": "userCardNumber",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 93,
                          "src": "1238:14:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 116,
                          "name": "userCardProb",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 96,
                          "src": "1254:12:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 117,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "TupleExpression",
                      "src": "1237:30:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                        "typeString": "tuple(uint256,uint256)"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 120,
                          "name": "_tokenId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61,
                          "src": "1299:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 118,
                          "name": "adCardToken",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 22,
                          "src": "1270:11:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_AdCardToken_$665",
                            "typeString": "contract AdCardToken"
                          }
                        },
                        "id": 119,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "getTokenProperty",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 601,
                        "src": "1270:28:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_view$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                          "typeString": "function (uint256) view external returns (uint256,uint256)"
                        }
                      },
                      "id": 121,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1270:38:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                        "typeString": "tuple(uint256,uint256)"
                      }
                    },
                    "src": "1237:71:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 123,
                  "nodeType": "ExpressionStatement",
                  "src": "1237:71:0"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 126,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 124,
                      "name": "userCardProb",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 96,
                      "src": "1365:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 125,
                      "name": "contractHighProb",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 99,
                      "src": "1381:16:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1365:32:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 131,
                  "nodeType": "IfStatement",
                  "src": "1362:59:0",
                  "trueBody": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 129,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 127,
                        "name": "userCardHigh",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 112,
                        "src": "1405:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "hexValue": "31",
                        "id": 128,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1420:1:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "src": "1405:16:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "id": 130,
                    "nodeType": "ExpressionStatement",
                    "src": "1405:16:0"
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 139,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 132,
                      "name": "contractMiddleCard",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 106,
                      "src": "1451:18:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 134,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1477:1:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        {
                          "argumentTypes": null,
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "argumentTypes": null,
                              "id": 135,
                              "name": "adCardToken",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22,
                              "src": "1480:11:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_AdCardToken_$665",
                                "typeString": "contract AdCardToken"
                              }
                            },
                            "id": 136,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "getCardsLength",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 637,
                            "src": "1480:26:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$__$returns$_t_uint256_$",
                              "typeString": "function () view external returns (uint256)"
                            }
                          },
                          "id": 137,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1480:28:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 133,
                        "name": "rand",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 360,
                        "src": "1472:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                          "typeString": "function (uint256,uint256) returns (uint256)"
                        }
                      },
                      "id": 138,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1472:37:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1451:58:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 140,
                  "nodeType": "ExpressionStatement",
                  "src": "1451:58:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 148,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 141,
                      "name": "contractLastCard",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 109,
                      "src": "1536:16:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 143,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1560:1:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        {
                          "argumentTypes": null,
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "argumentTypes": null,
                              "id": 144,
                              "name": "adCardToken",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22,
                              "src": "1563:11:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_AdCardToken_$665",
                                "typeString": "contract AdCardToken"
                              }
                            },
                            "id": 145,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "getCardsLength",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 637,
                            "src": "1563:26:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$__$returns$_t_uint256_$",
                              "typeString": "function () view external returns (uint256)"
                            }
                          },
                          "id": 146,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1563:28:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 142,
                        "name": "rand",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 360,
                        "src": "1555:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                          "typeString": "function (uint256,uint256) returns (uint256)"
                        }
                      },
                      "id": 147,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1555:37:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1536:56:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 149,
                  "nodeType": "ExpressionStatement",
                  "src": "1536:56:0"
                },
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 151,
                      "name": "_singleGame",
                      "nodeType": "VariableDeclaration",
                      "scope": 320,
                      "src": "1620:29:0",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_SingleGame_$37_memory_ptr",
                        "typeString": "struct AdCardGame.SingleGame"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 150,
                        "name": "SingleGame",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 37,
                        "src": "1620:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_SingleGame_$37_storage_ptr",
                          "typeString": "struct AdCardGame.SingleGame"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 152,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1620:29:0"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    },
                    "id": 155,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 153,
                      "name": "userCardHigh",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 112,
                      "src": "1659:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "31",
                      "id": 154,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1675:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "1659:17:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 291,
                    "nodeType": "Block",
                    "src": "2572:879:0",
                    "statements": [
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 232,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "components": [
                              {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 226,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "id": 224,
                                  "name": "userCardNumber",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 93,
                                  "src": "2584:14:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "<",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "id": 225,
                                  "name": "contractMiddleCard",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 106,
                                  "src": "2601:18:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "2584:35:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              }
                            ],
                            "id": 227,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "2583:37:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "&&",
                          "rightExpression": {
                            "argumentTypes": null,
                            "components": [
                              {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 230,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "id": 228,
                                  "name": "contractMiddleCard",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 106,
                                  "src": "2625:18:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "<",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "id": 229,
                                  "name": "contractLastCard",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 109,
                                  "src": "2646:16:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "2625:37:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              }
                            ],
                            "id": 231,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "2624:39:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "2583:80:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": {
                          "id": 289,
                          "nodeType": "Block",
                          "src": "3067:376:0",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 276,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "argumentTypes": null,
                                  "id": 264,
                                  "name": "_singleGame",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 151,
                                  "src": "3077:11:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_SingleGame_$37_memory_ptr",
                                    "typeString": "struct AdCardGame.SingleGame memory"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "expression": {
                                        "argumentTypes": null,
                                        "id": 266,
                                        "name": "msg",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 2068,
                                        "src": "3124:3:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_magic_message",
                                          "typeString": "msg"
                                        }
                                      },
                                      "id": 267,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberName": "sender",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": null,
                                      "src": "3124:10:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "id": 268,
                                      "name": "contractMiddleCard",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 106,
                                      "src": "3168:18:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "id": 269,
                                      "name": "contractLastCard",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 109,
                                      "src": "3218:16:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "id": 270,
                                      "name": "_tokenId",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 61,
                                      "src": "3261:8:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "expression": {
                                        "argumentTypes": null,
                                        "id": 271,
                                        "name": "msg",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 2068,
                                        "src": "3294:3:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_magic_message",
                                          "typeString": "msg"
                                        }
                                      },
                                      "id": 272,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberName": "value",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": null,
                                      "src": "3294:9:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "id": 273,
                                      "name": "userCardHigh",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 112,
                                      "src": "3331:12:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "hexValue": "30",
                                      "id": 274,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "3365:1:0",
                                      "subdenomination": null,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_0_by_1",
                                        "typeString": "int_const 0"
                                      },
                                      "value": "0"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 265,
                                    "name": "SingleGame",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 37,
                                    "src": "3091:10:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_struct$_SingleGame_$37_storage_ptr_$",
                                      "typeString": "type(struct AdCardGame.SingleGame storage pointer)"
                                    }
                                  },
                                  "id": 275,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "structConstructorCall",
                                  "lValueRequested": false,
                                  "names": [
                                    "player",
                                    "contractMiddleCard",
                                    "contractLastCard",
                                    "userCardTkn",
                                    "playerBet",
                                    "userCardHigh",
                                    "result"
                                  ],
                                  "nodeType": "FunctionCall",
                                  "src": "3091:288:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_SingleGame_$37_memory",
                                    "typeString": "struct AdCardGame.SingleGame memory"
                                  }
                                },
                                "src": "3077:302:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_SingleGame_$37_memory_ptr",
                                  "typeString": "struct AdCardGame.SingleGame memory"
                                }
                              },
                              "id": 277,
                              "nodeType": "ExpressionStatement",
                              "src": "3077:302:0"
                            },
                            {
                              "expression": {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "arguments": [
                                      {
                                        "argumentTypes": null,
                                        "commonType": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        },
                                        "id": 285,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                          "argumentTypes": null,
                                          "expression": {
                                            "argumentTypes": null,
                                            "id": 282,
                                            "name": "msg",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2068,
                                            "src": "3413:3:0",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_magic_message",
                                              "typeString": "msg"
                                            }
                                          },
                                          "id": 283,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "memberName": "value",
                                          "nodeType": "MemberAccess",
                                          "referencedDeclaration": null,
                                          "src": "3413:9:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "-",
                                        "rightExpression": {
                                          "argumentTypes": null,
                                          "id": 284,
                                          "name": "gameFee",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 8,
                                          "src": "3425:7:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "src": "3413:19:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      ],
                                      "expression": {
                                        "argumentTypes": null,
                                        "expression": {
                                          "argumentTypes": null,
                                          "id": 279,
                                          "name": "msg",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 2068,
                                          "src": "3397:3:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_magic_message",
                                            "typeString": "msg"
                                          }
                                        },
                                        "id": 280,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberName": "sender",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": null,
                                        "src": "3397:10:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        }
                                      },
                                      "id": 281,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberName": "send",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": null,
                                      "src": "3397:15:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_function_send_nonpayable$_t_uint256_$returns$_t_bool_$",
                                        "typeString": "function (uint256) returns (bool)"
                                      }
                                    },
                                    "id": 286,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "functionCall",
                                    "lValueRequested": false,
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "3397:36:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    }
                                  ],
                                  "id": 278,
                                  "name": "require",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [
                                    2071,
                                    2072
                                  ],
                                  "referencedDeclaration": 2071,
                                  "src": "3389:7:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                                    "typeString": "function (bool) pure"
                                  }
                                },
                                "id": 287,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "3389:45:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 288,
                              "nodeType": "ExpressionStatement",
                              "src": "3389:45:0"
                            }
                          ]
                        },
                        "id": 290,
                        "nodeType": "IfStatement",
                        "src": "2580:863:0",
                        "trueBody": {
                          "id": 263,
                          "nodeType": "Block",
                          "src": "2664:390:0",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 245,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "argumentTypes": null,
                                  "id": 233,
                                  "name": "_singleGame",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 151,
                                  "src": "2674:11:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_SingleGame_$37_memory_ptr",
                                    "typeString": "struct AdCardGame.SingleGame memory"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "expression": {
                                        "argumentTypes": null,
                                        "id": 235,
                                        "name": "msg",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 2068,
                                        "src": "2721:3:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_magic_message",
                                          "typeString": "msg"
                                        }
                                      },
                                      "id": 236,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberName": "sender",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": null,
                                      "src": "2721:10:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "id": 237,
                                      "name": "contractMiddleCard",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 106,
                                      "src": "2765:18:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "id": 238,
                                      "name": "contractLastCard",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 109,
                                      "src": "2815:16:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "id": 239,
                                      "name": "_tokenId",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 61,
                                      "src": "2858:8:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "expression": {
                                        "argumentTypes": null,
                                        "id": 240,
                                        "name": "msg",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 2068,
                                        "src": "2891:3:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_magic_message",
                                          "typeString": "msg"
                                        }
                                      },
                                      "id": 241,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberName": "value",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": null,
                                      "src": "2891:9:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "id": 242,
                                      "name": "userCardHigh",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 112,
                                      "src": "2928:12:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "hexValue": "31",
                                      "id": 243,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "2962:1:0",
                                      "subdenomination": null,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_1_by_1",
                                        "typeString": "int_const 1"
                                      },
                                      "value": "1"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 234,
                                    "name": "SingleGame",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 37,
                                    "src": "2688:10:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_struct$_SingleGame_$37_storage_ptr_$",
                                      "typeString": "type(struct AdCardGame.SingleGame storage pointer)"
                                    }
                                  },
                                  "id": 244,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "structConstructorCall",
                                  "lValueRequested": false,
                                  "names": [
                                    "player",
                                    "contractMiddleCard",
                                    "contractLastCard",
                                    "userCardTkn",
                                    "playerBet",
                                    "userCardHigh",
                                    "result"
                                  ],
                                  "nodeType": "FunctionCall",
                                  "src": "2688:288:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_SingleGame_$37_memory",
                                    "typeString": "struct AdCardGame.SingleGame memory"
                                  }
                                },
                                "src": "2674:302:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_SingleGame_$37_memory_ptr",
                                  "typeString": "struct AdCardGame.SingleGame memory"
                                }
                              },
                              "id": 246,
                              "nodeType": "ExpressionStatement",
                              "src": "2674:302:0"
                            },
                            {
                              "expression": {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "arguments": [
                                      {
                                        "argumentTypes": null,
                                        "commonType": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        },
                                        "id": 259,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                          "argumentTypes": null,
                                          "components": [
                                            {
                                              "argumentTypes": null,
                                              "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                              },
                                              "id": 256,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "leftExpression": {
                                                "argumentTypes": null,
                                                "commonType": {
                                                  "typeIdentifier": "t_uint256",
                                                  "typeString": "uint256"
                                                },
                                                "id": 254,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                  "argumentTypes": null,
                                                  "expression": {
                                                    "argumentTypes": null,
                                                    "id": 251,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 2068,
                                                    "src": "3011:3:0",
                                                    "typeDescriptions": {
                                                      "typeIdentifier": "t_magic_message",
                                                      "typeString": "msg"
                                                    }
                                                  },
                                                  "id": 252,
                                                  "isConstant": false,
                                                  "isLValue": false,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "memberName": "value",
                                                  "nodeType": "MemberAccess",
                                                  "referencedDeclaration": null,
                                                  "src": "3011:9:0",
                                                  "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                  }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "*",
                                                "rightExpression": {
                                                  "argumentTypes": null,
                                                  "hexValue": "313530",
                                                  "id": 253,
                                                  "isConstant": false,
                                                  "isLValue": false,
                                                  "isPure": true,
                                                  "kind": "number",
                                                  "lValueRequested": false,
                                                  "nodeType": "Literal",
                                                  "src": "3023:3:0",
                                                  "subdenomination": null,
                                                  "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_150_by_1",
                                                    "typeString": "int_const 150"
                                                  },
                                                  "value": "150"
                                                },
                                                "src": "3011:15:0",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_uint256",
                                                  "typeString": "uint256"
                                                }
                                              },
                                              "nodeType": "BinaryOperation",
                                              "operator": "/",
                                              "rightExpression": {
                                                "argumentTypes": null,
                                                "hexValue": "313030",
                                                "id": 255,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "3029:3:0",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_rational_100_by_1",
                                                  "typeString": "int_const 100"
                                                },
                                                "value": "100"
                                              },
                                              "src": "3011:21:0",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                              }
                                            }
                                          ],
                                          "id": 257,
                                          "isConstant": false,
                                          "isInlineArray": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "nodeType": "TupleExpression",
                                          "src": "3010:23:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "-",
                                        "rightExpression": {
                                          "argumentTypes": null,
                                          "id": 258,
                                          "name": "gameFee",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 8,
                                          "src": "3036:7:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "src": "3010:33:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      ],
                                      "expression": {
                                        "argumentTypes": null,
                                        "expression": {
                                          "argumentTypes": null,
                                          "id": 248,
                                          "name": "msg",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 2068,
                                          "src": "2994:3:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_magic_message",
                                            "typeString": "msg"
                                          }
                                        },
                                        "id": 249,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberName": "sender",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": null,
                                        "src": "2994:10:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        }
                                      },
                                      "id": 250,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberName": "send",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": null,
                                      "src": "2994:15:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_function_send_nonpayable$_t_uint256_$returns$_t_bool_$",
                                        "typeString": "function (uint256) returns (bool)"
                                      }
                                    },
                                    "id": 260,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "functionCall",
                                    "lValueRequested": false,
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "2994:50:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    }
                                  ],
                                  "id": 247,
                                  "name": "require",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [
                                    2071,
                                    2072
                                  ],
                                  "referencedDeclaration": 2071,
                                  "src": "2986:7:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                                    "typeString": "function (bool) pure"
                                  }
                                },
                                "id": 261,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2986:59:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 262,
                              "nodeType": "ExpressionStatement",
                              "src": "2986:59:0"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "id": 292,
                  "nodeType": "IfStatement",
                  "src": "1656:1795:0",
                  "trueBody": {
                    "id": 223,
                    "nodeType": "Block",
                    "src": "1682:876:0",
                    "statements": [
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 164,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "components": [
                              {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 158,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "id": 156,
                                  "name": "contractLastCard",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 109,
                                  "src": "1694:16:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "<",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "id": 157,
                                  "name": "contractMiddleCard",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 106,
                                  "src": "1713:18:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "1694:37:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              }
                            ],
                            "id": 159,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "1693:39:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "&&",
                          "rightExpression": {
                            "argumentTypes": null,
                            "components": [
                              {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 162,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "id": 160,
                                  "name": "contractMiddleCard",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 106,
                                  "src": "1737:18:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "<",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "id": 161,
                                  "name": "userCardNumber",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 93,
                                  "src": "1758:14:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "1737:35:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              }
                            ],
                            "id": 163,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "1736:37:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "1693:80:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": {
                          "id": 221,
                          "nodeType": "Block",
                          "src": "2175:376:0",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 208,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "argumentTypes": null,
                                  "id": 196,
                                  "name": "_singleGame",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 151,
                                  "src": "2185:11:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_SingleGame_$37_memory_ptr",
                                    "typeString": "struct AdCardGame.SingleGame memory"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "expression": {
                                        "argumentTypes": null,
                                        "id": 198,
                                        "name": "msg",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 2068,
                                        "src": "2232:3:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_magic_message",
                                          "typeString": "msg"
                                        }
                                      },
                                      "id": 199,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberName": "sender",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": null,
                                      "src": "2232:10:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "id": 200,
                                      "name": "contractMiddleCard",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 106,
                                      "src": "2276:18:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "id": 201,
                                      "name": "contractLastCard",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 109,
                                      "src": "2326:16:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "id": 202,
                                      "name": "_tokenId",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 61,
                                      "src": "2369:8:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "expression": {
                                        "argumentTypes": null,
                                        "id": 203,
                                        "name": "msg",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 2068,
                                        "src": "2402:3:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_magic_message",
                                          "typeString": "msg"
                                        }
                                      },
                                      "id": 204,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberName": "value",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": null,
                                      "src": "2402:9:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "id": 205,
                                      "name": "userCardHigh",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 112,
                                      "src": "2439:12:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "hexValue": "30",
                                      "id": 206,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "2473:1:0",
                                      "subdenomination": null,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_0_by_1",
                                        "typeString": "int_const 0"
                                      },
                                      "value": "0"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 197,
                                    "name": "SingleGame",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 37,
                                    "src": "2199:10:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_struct$_SingleGame_$37_storage_ptr_$",
                                      "typeString": "type(struct AdCardGame.SingleGame storage pointer)"
                                    }
                                  },
                                  "id": 207,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "structConstructorCall",
                                  "lValueRequested": false,
                                  "names": [
                                    "player",
                                    "contractMiddleCard",
                                    "contractLastCard",
                                    "userCardTkn",
                                    "playerBet",
                                    "userCardHigh",
                                    "result"
                                  ],
                                  "nodeType": "FunctionCall",
                                  "src": "2199:288:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_SingleGame_$37_memory",
                                    "typeString": "struct AdCardGame.SingleGame memory"
                                  }
                                },
                                "src": "2185:302:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_SingleGame_$37_memory_ptr",
                                  "typeString": "struct AdCardGame.SingleGame memory"
                                }
                              },
                              "id": 209,
                              "nodeType": "ExpressionStatement",
                              "src": "2185:302:0"
                            },
                            {
                              "expression": {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "arguments": [
                                      {
                                        "argumentTypes": null,
                                        "commonType": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        },
                                        "id": 217,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                          "argumentTypes": null,
                                          "expression": {
                                            "argumentTypes": null,
                                            "id": 214,
                                            "name": "msg",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2068,
                                            "src": "2521:3:0",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_magic_message",
                                              "typeString": "msg"
                                            }
                                          },
                                          "id": 215,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "memberName": "value",
                                          "nodeType": "MemberAccess",
                                          "referencedDeclaration": null,
                                          "src": "2521:9:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "-",
                                        "rightExpression": {
                                          "argumentTypes": null,
                                          "id": 216,
                                          "name": "gameFee",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 8,
                                          "src": "2533:7:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "src": "2521:19:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      ],
                                      "expression": {
                                        "argumentTypes": null,
                                        "expression": {
                                          "argumentTypes": null,
                                          "id": 211,
                                          "name": "msg",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 2068,
                                          "src": "2505:3:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_magic_message",
                                            "typeString": "msg"
                                          }
                                        },
                                        "id": 212,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberName": "sender",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": null,
                                        "src": "2505:10:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        }
                                      },
                                      "id": 213,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberName": "send",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": null,
                                      "src": "2505:15:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_function_send_nonpayable$_t_uint256_$returns$_t_bool_$",
                                        "typeString": "function (uint256) returns (bool)"
                                      }
                                    },
                                    "id": 218,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "functionCall",
                                    "lValueRequested": false,
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "2505:36:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    }
                                  ],
                                  "id": 210,
                                  "name": "require",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [
                                    2071,
                                    2072
                                  ],
                                  "referencedDeclaration": 2071,
                                  "src": "2497:7:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                                    "typeString": "function (bool) pure"
                                  }
                                },
                                "id": 219,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2497:45:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 220,
                              "nodeType": "ExpressionStatement",
                              "src": "2497:45:0"
                            }
                          ]
                        },
                        "id": 222,
                        "nodeType": "IfStatement",
                        "src": "1690:861:0",
                        "trueBody": {
                          "id": 195,
                          "nodeType": "Block",
                          "src": "1774:390:0",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 177,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "argumentTypes": null,
                                  "id": 165,
                                  "name": "_singleGame",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 151,
                                  "src": "1784:11:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_SingleGame_$37_memory_ptr",
                                    "typeString": "struct AdCardGame.SingleGame memory"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "expression": {
                                        "argumentTypes": null,
                                        "id": 167,
                                        "name": "msg",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 2068,
                                        "src": "1831:3:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_magic_message",
                                          "typeString": "msg"
                                        }
                                      },
                                      "id": 168,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberName": "sender",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": null,
                                      "src": "1831:10:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "id": 169,
                                      "name": "contractMiddleCard",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 106,
                                      "src": "1875:18:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "id": 170,
                                      "name": "contractLastCard",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 109,
                                      "src": "1925:16:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "id": 171,
                                      "name": "_tokenId",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 61,
                                      "src": "1968:8:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "expression": {
                                        "argumentTypes": null,
                                        "id": 172,
                                        "name": "msg",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 2068,
                                        "src": "2001:3:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_magic_message",
                                          "typeString": "msg"
                                        }
                                      },
                                      "id": 173,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberName": "value",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": null,
                                      "src": "2001:9:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "id": 174,
                                      "name": "userCardHigh",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 112,
                                      "src": "2038:12:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "hexValue": "31",
                                      "id": 175,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "2072:1:0",
                                      "subdenomination": null,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_1_by_1",
                                        "typeString": "int_const 1"
                                      },
                                      "value": "1"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 166,
                                    "name": "SingleGame",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 37,
                                    "src": "1798:10:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_struct$_SingleGame_$37_storage_ptr_$",
                                      "typeString": "type(struct AdCardGame.SingleGame storage pointer)"
                                    }
                                  },
                                  "id": 176,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "structConstructorCall",
                                  "lValueRequested": false,
                                  "names": [
                                    "player",
                                    "contractMiddleCard",
                                    "contractLastCard",
                                    "userCardTkn",
                                    "playerBet",
                                    "userCardHigh",
                                    "result"
                                  ],
                                  "nodeType": "FunctionCall",
                                  "src": "1798:288:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_SingleGame_$37_memory",
                                    "typeString": "struct AdCardGame.SingleGame memory"
                                  }
                                },
                                "src": "1784:302:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_SingleGame_$37_memory_ptr",
                                  "typeString": "struct AdCardGame.SingleGame memory"
                                }
                              },
                              "id": 178,
                              "nodeType": "ExpressionStatement",
                              "src": "1784:302:0"
                            },
                            {
                              "expression": {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "arguments": [
                                      {
                                        "argumentTypes": null,
                                        "commonType": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        },
                                        "id": 191,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                          "argumentTypes": null,
                                          "components": [
                                            {
                                              "argumentTypes": null,
                                              "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                              },
                                              "id": 188,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "leftExpression": {
                                                "argumentTypes": null,
                                                "commonType": {
                                                  "typeIdentifier": "t_uint256",
                                                  "typeString": "uint256"
                                                },
                                                "id": 186,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                  "argumentTypes": null,
                                                  "expression": {
                                                    "argumentTypes": null,
                                                    "id": 183,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 2068,
                                                    "src": "2121:3:0",
                                                    "typeDescriptions": {
                                                      "typeIdentifier": "t_magic_message",
                                                      "typeString": "msg"
                                                    }
                                                  },
                                                  "id": 184,
                                                  "isConstant": false,
                                                  "isLValue": false,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "memberName": "value",
                                                  "nodeType": "MemberAccess",
                                                  "referencedDeclaration": null,
                                                  "src": "2121:9:0",
                                                  "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                  }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "*",
                                                "rightExpression": {
                                                  "argumentTypes": null,
                                                  "hexValue": "313530",
                                                  "id": 185,
                                                  "isConstant": false,
                                                  "isLValue": false,
                                                  "isPure": true,
                                                  "kind": "number",
                                                  "lValueRequested": false,
                                                  "nodeType": "Literal",
                                                  "src": "2133:3:0",
                                                  "subdenomination": null,
                                                  "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_150_by_1",
                                                    "typeString": "int_const 150"
                                                  },
                                                  "value": "150"
                                                },
                                                "src": "2121:15:0",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_uint256",
                                                  "typeString": "uint256"
                                                }
                                              },
                                              "nodeType": "BinaryOperation",
                                              "operator": "/",
                                              "rightExpression": {
                                                "argumentTypes": null,
                                                "hexValue": "313030",
                                                "id": 187,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "2139:3:0",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_rational_100_by_1",
                                                  "typeString": "int_const 100"
                                                },
                                                "value": "100"
                                              },
                                              "src": "2121:21:0",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                              }
                                            }
                                          ],
                                          "id": 189,
                                          "isConstant": false,
                                          "isInlineArray": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "nodeType": "TupleExpression",
                                          "src": "2120:23:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "-",
                                        "rightExpression": {
                                          "argumentTypes": null,
                                          "id": 190,
                                          "name": "gameFee",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 8,
                                          "src": "2146:7:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "src": "2120:33:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      ],
                                      "expression": {
                                        "argumentTypes": null,
                                        "expression": {
                                          "argumentTypes": null,
                                          "id": 180,
                                          "name": "msg",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 2068,
                                          "src": "2104:3:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_magic_message",
                                            "typeString": "msg"
                                          }
                                        },
                                        "id": 181,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberName": "sender",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": null,
                                        "src": "2104:10:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        }
                                      },
                                      "id": 182,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberName": "send",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": null,
                                      "src": "2104:15:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_function_send_nonpayable$_t_uint256_$returns$_t_bool_$",
                                        "typeString": "function (uint256) returns (bool)"
                                      }
                                    },
                                    "id": 192,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "functionCall",
                                    "lValueRequested": false,
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "2104:50:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    }
                                  ],
                                  "id": 179,
                                  "name": "require",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [
                                    2071,
                                    2072
                                  ],
                                  "referencedDeclaration": 2071,
                                  "src": "2096:7:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                                    "typeString": "function (bool) pure"
                                  }
                                },
                                "id": 193,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2096:59:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 194,
                              "nodeType": "ExpressionStatement",
                              "src": "2096:59:0"
                            }
                          ]
                        }
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 300,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 293,
                      "name": "maxSingleGameId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17,
                      "src": "3457:15:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 299,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 296,
                            "name": "_singleGame",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 151,
                            "src": "3492:11:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_SingleGame_$37_memory_ptr",
                              "typeString": "struct AdCardGame.SingleGame memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_struct$_SingleGame_$37_memory_ptr",
                              "typeString": "struct AdCardGame.SingleGame memory"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 294,
                            "name": "singleGames",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 40,
                            "src": "3475:11:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_struct$_SingleGame_$37_storage_$dyn_storage",
                              "typeString": "struct AdCardGame.SingleGame storage ref[] storage ref"
                            }
                          },
                          "id": 295,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "push",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "3475:16:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_arraypush_nonpayable$_t_struct$_SingleGame_$37_storage_$returns$_t_uint256_$",
                            "typeString": "function (struct AdCardGame.SingleGame storage ref) returns (uint256)"
                          }
                        },
                        "id": 297,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3475:29:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "-",
                      "rightExpression": {
                        "argumentTypes": null,
                        "hexValue": "31",
                        "id": 298,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3507:1:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "src": "3475:33:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3457:51:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 301,
                  "nodeType": "ExpressionStatement",
                  "src": "3457:51:0"
                },
                {
                  "assignments": [
                    305
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 305,
                      "name": "userSingleGames",
                      "nodeType": "VariableDeclaration",
                      "scope": 320,
                      "src": "3514:25:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                        "typeString": "uint256[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 303,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "3514:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 304,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "3514:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                          "typeString": "uint256[]"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 310,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 306,
                      "name": "usersSingleGames",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 45,
                      "src": "3542:16:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint256_$dyn_storage_$",
                        "typeString": "mapping(address => uint256[] storage ref)"
                      }
                    },
                    "id": 309,
                    "indexExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 307,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2068,
                        "src": "3559:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 308,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "3559:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "3542:28:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                      "typeString": "uint256[] storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3514:56:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 314,
                        "name": "maxSingleGameId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17,
                        "src": "3597:15:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 311,
                        "name": "userSingleGames",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 305,
                        "src": "3576:15:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                          "typeString": "uint256[] storage pointer"
                        }
                      },
                      "id": 313,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "3576:20:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256) returns (uint256)"
                      }
                    },
                    "id": 315,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3576:37:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 316,
                  "nodeType": "ExpressionStatement",
                  "src": "3576:37:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 317,
                    "name": "maxSingleGameId",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 17,
                    "src": "3626:15:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 65,
                  "id": 318,
                  "nodeType": "Return",
                  "src": "3619:22:0"
                }
              ]
            },
            "documentation": null,
            "id": 320,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "createSingleGame",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 62,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 320,
                  "src": "862:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 60,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "862:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "861:15:0"
            },
            "payable": true,
            "returnParameters": {
              "id": 65,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 64,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 320,
                  "src": "901:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "901:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "900:9:0"
            },
            "scope": 388,
            "src": "836:2824:0",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 332,
              "nodeType": "Block",
              "src": "3892:44:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 328,
                      "name": "usersSingleGames",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 45,
                      "src": "3905:16:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint256_$dyn_storage_$",
                        "typeString": "mapping(address => uint256[] storage ref)"
                      }
                    },
                    "id": 330,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 329,
                      "name": "_address",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 322,
                      "src": "3922:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "3905:26:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                      "typeString": "uint256[] storage ref"
                    }
                  },
                  "functionReturnParameters": 327,
                  "id": 331,
                  "nodeType": "Return",
                  "src": "3898:33:0"
                }
              ]
            },
            "documentation": null,
            "id": 333,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getUserSingleGames",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 323,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 322,
                  "name": "_address",
                  "nodeType": "VariableDeclaration",
                  "scope": 333,
                  "src": "3840:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 321,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3840:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3839:18:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 327,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 326,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 333,
                  "src": "3881:9:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 324,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "3881:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 325,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "3881:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3880:11:0"
            },
            "scope": 388,
            "src": "3812:124:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 359,
              "nodeType": "Block",
              "src": "3996:75:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 343,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "++",
                    "prefix": false,
                    "src": "4002:7:0",
                    "subExpression": {
                      "argumentTypes": null,
                      "id": 342,
                      "name": "nonce",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20,
                      "src": "4002:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 344,
                  "nodeType": "ExpressionStatement",
                  "src": "4002:7:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 357,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 355,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 351,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 348,
                                    "name": "block",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 2058,
                                    "src": "4043:5:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_block",
                                      "typeString": "block"
                                    }
                                  },
                                  "id": 349,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "number",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "4043:12:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "-",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "hexValue": "31",
                                  "id": 350,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "4056:1:0",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_1_by_1",
                                    "typeString": "int_const 1"
                                  },
                                  "value": "1"
                                },
                                "src": "4043:14:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 346,
                                "name": "block",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 2058,
                                "src": "4027:5:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_block",
                                  "typeString": "block"
                                }
                              },
                              "id": 347,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "blockhash",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "4027:15:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_blockhash_view$_t_uint256_$returns$_t_bytes32_$",
                                "typeString": "function (uint256) view returns (bytes32)"
                              }
                            },
                            "id": 352,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4027:31:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          ],
                          "id": 345,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "4022:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_uint256_$",
                            "typeString": "type(uint256)"
                          },
                          "typeName": "uint"
                        },
                        "id": 353,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4022:37:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "%",
                      "rightExpression": {
                        "argumentTypes": null,
                        "hexValue": "3130",
                        "id": 354,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4060:2:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_10_by_1",
                          "typeString": "int_const 10"
                        },
                        "value": "10"
                      },
                      "src": "4022:40:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "+",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "31",
                      "id": 356,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4065:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "4022:44:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 341,
                  "id": 358,
                  "nodeType": "Return",
                  "src": "4015:51:0"
                }
              ]
            },
            "documentation": null,
            "id": 360,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "rand",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 338,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 335,
                  "name": "min",
                  "nodeType": "VariableDeclaration",
                  "scope": 360,
                  "src": "3954:8:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 334,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3954:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 337,
                  "name": "max",
                  "nodeType": "VariableDeclaration",
                  "scope": 360,
                  "src": "3964:8:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 336,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3964:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3953:20:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 341,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 340,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 360,
                  "src": "3991:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 339,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3991:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3990:6:0"
            },
            "scope": 388,
            "src": "3940:131:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "private"
          },
          {
            "body": {
              "id": 386,
              "nodeType": "Block",
              "src": "4145:96:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 375,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 370,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 362,
                          "src": "4159:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 372,
                                "name": "this",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 2103,
                                "src": "4177:4:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_AdCardGame_$388",
                                  "typeString": "contract AdCardGame"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_AdCardGame_$388",
                                  "typeString": "contract AdCardGame"
                                }
                              ],
                              "id": 371,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "4169:7:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": "address"
                            },
                            "id": 373,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4169:13:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "id": 374,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "balance",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "4169:21:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "4159:31:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 369,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        2071,
                        2072
                      ],
                      "referencedDeclaration": 2071,
                      "src": "4151:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 376,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4151:40:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 377,
                  "nodeType": "ExpressionStatement",
                  "src": "4151:40:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 381,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 362,
                        "src": "4212:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 378,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 839,
                        "src": "4197:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 380,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "4197:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 382,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4197:22:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 383,
                  "nodeType": "ExpressionStatement",
                  "src": "4197:22:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 384,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "4232:4:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 368,
                  "id": 385,
                  "nodeType": "Return",
                  "src": "4225:11:0"
                }
              ]
            },
            "documentation": null,
            "id": 387,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 365,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 364,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 869,
                  "src": "4121:9:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "4121:9:0"
              }
            ],
            "name": "withdraw",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 363,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 362,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 387,
                  "src": "4093:11:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 361,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "4093:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4092:13:0"
            },
            "payable": true,
            "returnParameters": {
              "id": 368,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 367,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 387,
                  "src": "4139:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 366,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "4139:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4138:6:0"
            },
            "scope": 388,
            "src": "4075:166:0",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 389,
        "src": "115:4129:0"
      }
    ],
    "src": "0:4245:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-07-29T19:20:02.728Z"
}
