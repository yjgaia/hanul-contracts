/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { FantasyItem } from "../FantasyItem";

export class FantasyItem__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<FantasyItem> {
    return super.deploy(overrides || {}) as Promise<FantasyItem>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): FantasyItem {
    return super.attach(address) as FantasyItem;
  }
  connect(signer: Signer): FantasyItem__factory {
    return super.connect(signer) as FantasyItem__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FantasyItem {
    return new Contract(address, _abi, signerOrProvider) as FantasyItem;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PERMIT_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "_setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b506040518060400160405280600b81526020017f46616e746173794974656d000000000000000000000000000000000000000000815250604051806060016040528060348152602001620038cb603491396040518060400160405280600181526020017f310000000000000000000000000000000000000000000000000000000000000081525081620000aa816200015260201b60201c565b508260039080519060200190620000c39291906200016e565b508060049080519060200190620000dc9291906200016e565b5060004690507f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f8480519060200120838051906020012083306040516020016200012b95949392919062000251565b6040516020818303038152906040528051906020012060808181525050505050506200035b565b80600290805190602001906200016a9291906200016e565b5050565b8280546200017c90620002f6565b90600052602060002090601f016020900481019282620001a05760008555620001ec565b82601f10620001bb57805160ff1916838001178555620001ec565b82800160010185558215620001ec579182015b82811115620001eb578251825591602001919060010190620001ce565b5b509050620001fb9190620001ff565b5090565b5b808211156200021a57600081600090555060010162000200565b5090565b6200022981620002ae565b82525050565b6200023a81620002c2565b82525050565b6200024b81620002ec565b82525050565b600060a0820190506200026860008301886200022f565b6200027760208301876200022f565b6200028660408301866200022f565b62000295606083018562000240565b620002a460808301846200021e565b9695505050505050565b6000620002bb82620002cc565b9050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060028204905060018216806200030f57607f821691505b602082108114156200032657620003256200032c565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60805161354d6200037e600039600081816107210152610754015261354d6000f3fe608060405234801561001057600080fd5b506004361061010a5760003560e01c806348613c28116100a25780638c4e3f32116100715780638c4e3f32146102cb578063a22cb465146102e7578063b390c0ab14610303578063e985e9c51461031f578063f242432a1461034f5761010a565b806348613c28146102315780634e1273f41461024d57806354fd4d501461027d5780637ecebe001461029b5761010a565b80631b2ef1ca116100de5780631b2ef1ca146101bd5780632eb2c2d6146101d957806330adf81f146101f55780633644e515146102135761010a565b8062fdd58e1461010f57806301ffc9a71461013f57806306fdde031461016f5780630e89341c1461018d575b600080fd5b61012960048036038101906101249190612228565b61036b565b6040516101369190612b50565b60405180910390f35b610159600480360381019061015491906122e0565b610434565b6040516101669190612890565b60405180910390f35b610177610516565b604051610184919061298e565b60405180910390f35b6101a760048036038101906101a2919061233a565b6105a4565b6040516101b4919061298e565b60405180910390f35b6101d760048036038101906101d29190612367565b610638565b005b6101f360048036038101906101ee9190611fa2565b610657565b005b6101fd6106f8565b60405161020a91906128ab565b60405180910390f35b61021b61071f565b60405161022891906128ab565b60405180910390f35b61024b6004803603810190610246919061215b565b610743565b005b61026760048036038101906102629190612268565b610a52565b6040516102749190612837565b60405180910390f35b610285610b6b565b604051610292919061298e565b60405180910390f35b6102b560048036038101906102b09190611f35565b610bf9565b6040516102c29190612b50565b60405180910390f35b6102e560048036038101906102e09190612071565b610c11565b005b61030160048036038101906102fc91906121e8565b610d7e565b005b61031d60048036038101906103189190612367565b610d94565b005b61033960048036038101906103349190611f62565b610da3565b6040516103469190612890565b60405180910390f35b610369600480360381019061036491906120c4565b610e37565b005b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156103dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103d3906129f0565b60405180910390fd5b60008083815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b60007fd9b67a26000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806104ff57507f0e89341c000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b8061050f575061050e82610ed8565b5b9050919050565b6003805461052390612de1565b80601f016020809104026020016040519081016040528092919081815260200182805461054f90612de1565b801561059c5780601f106105715761010080835404028352916020019161059c565b820191906000526020600020905b81548152906001019060200180831161057f57829003601f168201915b505050505081565b6060600280546105b390612de1565b80601f01602080910402602001604051908101604052809291908181526020018280546105df90612de1565b801561062c5780601f106106015761010080835404028352916020019161062c565b820191906000526020600020905b81548152906001019060200180831161060f57829003601f168201915b50505050509050919050565b61065333838360405180602001604052806000815250610f42565b5050565b61065f6110d8565b73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614806106a557506106a48561069f6110d8565b610da3565b5b6106e4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106db90612a70565b60405180910390fd5b6106f185858585856110e0565b5050505050565b7fdaab21af31ece73a508939fedd476a5ee5129a5ed4bb091f3236ffb45394df6260001b81565b7f000000000000000000000000000000000000000000000000000000000000000081565b8342111561075057600080fd5b60007f00000000000000000000000000000000000000000000000000000000000000007fdaab21af31ece73a508939fedd476a5ee5129a5ed4bb091f3236ffb45394df6260001b8888600560008c73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054896040516020016107ee9594939291906128c6565b6040516020818303038152906040528051906020012060405160200161081592919061273e565b6040516020818303038152906040528051906020012090506001600560008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461087d9190612cbe565b9250508190555061088d876113f4565b1561097657631626ba7e60e01b8773ffffffffffffffffffffffffffffffffffffffff16631626ba7e838686896040516020016108cc93929190612701565b6040516020818303038152906040526040518363ffffffff1660e01b81526004016108f8929190612919565b60206040518083038186803b15801561091057600080fd5b505afa158015610924573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610948919061230d565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161461097157600080fd5b610a3d565b60006001828686866040516000815260200160405260405161099b9493929190612949565b6020604051602081039080840390855afa1580156109bd573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610a0357600080fd5b8773ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610a3b57600080fd5b505b610a4987876001610c11565b50505050505050565b60608151835114610a98576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a8f90612af0565b60405180910390fd5b6000835167ffffffffffffffff811115610ab557610ab4612f36565b5b604051908082528060200260200182016040528015610ae35781602001602082028036833780820191505090505b50905060005b8451811015610b6057610b30858281518110610b0857610b07612f07565b5b6020026020010151858381518110610b2357610b22612f07565b5b602002602001015161036b565b828281518110610b4357610b42612f07565b5b60200260200101818152505080610b5990612e44565b9050610ae9565b508091505092915050565b60048054610b7890612de1565b80601f0160208091040260200160405190810160405280929190818152602001828054610ba490612de1565b8015610bf15780601f10610bc657610100808354040283529160200191610bf1565b820191906000526020600020905b815481529060010190602001808311610bd457829003601f168201915b505050505081565b60056020528060005260406000206000915090505481565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610c80576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c7790612ad0565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610d719190612890565b60405180910390a3505050565b610d90610d896110d8565b8383610c11565b5050565b610d9f338383611407565b5050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b610e3f6110d8565b73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff161480610e855750610e8485610e7f6110d8565b610da3565b5b610ec4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ebb90612a30565b60405180910390fd5b610ed18585858585611624565b5050505050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415610fb2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fa990612b30565b60405180910390fd5b6000610fbc6110d8565b9050610fdd81600087610fce886118a6565b610fd7886118a6565b87611920565b8260008086815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461103c9190612cbe565b925050819055508473ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6287876040516110ba929190612b6b565b60405180910390a46110d181600087878787611928565b5050505050565b600033905090565b8151835114611124576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161111b90612b10565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415611194576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161118b90612a50565b60405180910390fd5b600061119e6110d8565b90506111ae818787878787611920565b60005b845181101561135f5760008582815181106111cf576111ce612f07565b5b6020026020010151905060008583815181106111ee576111ed612f07565b5b60200260200101519050600080600084815260200190815260200160002060008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508181101561128f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161128690612ab0565b60405180910390fd5b81810360008085815260200190815260200160002060008c73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508160008085815260200190815260200160002060008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546113449190612cbe565b925050819055505050508061135890612e44565b90506111b1565b508473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb87876040516113d6929190612859565b60405180910390a46113ec818787878787611b0f565b505050505050565b600080823b905060008111915050919050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611477576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161146e90612a90565b60405180910390fd5b60006114816110d8565b90506114b181856000611493876118a6565b61149c876118a6565b60405180602001604052806000815250611920565b600080600085815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082811015611548576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161153f90612a10565b60405180910390fd5b82810360008086815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f628787604051611615929190612b6b565b60405180910390a45050505050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415611694576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161168b90612a50565b60405180910390fd5b600061169e6110d8565b90506116be8187876116af886118a6565b6116b8886118a6565b87611920565b600080600086815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905083811015611755576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161174c90612ab0565b60405180910390fd5b83810360008087815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508360008087815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461180a9190612cbe565b925050819055508573ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f628888604051611887929190612b6b565b60405180910390a461189d828888888888611928565b50505050505050565b60606000600167ffffffffffffffff8111156118c5576118c4612f36565b5b6040519080825280602002602001820160405280156118f35781602001602082028036833780820191505090505b509050828160008151811061190b5761190a612f07565b5b60200260200101818152505080915050919050565b505050505050565b6119478473ffffffffffffffffffffffffffffffffffffffff166113f4565b15611b07578373ffffffffffffffffffffffffffffffffffffffff1663f23a6e6187878686866040518663ffffffff1660e01b815260040161198d9594939291906127dd565b602060405180830381600087803b1580156119a757600080fd5b505af19250505080156119d857506040513d601f19601f820116820180604052508101906119d5919061230d565b60015b611a7e576119e4612f65565b806308c379a01415611a4157506119f96133f7565b80611a045750611a43565b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a38919061298e565b60405180910390fd5b505b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a75906129b0565b60405180910390fd5b63f23a6e6160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614611b05576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611afc906129d0565b60405180910390fd5b505b505050505050565b611b2e8473ffffffffffffffffffffffffffffffffffffffff166113f4565b15611cee578373ffffffffffffffffffffffffffffffffffffffff1663bc197c8187878686866040518663ffffffff1660e01b8152600401611b74959493929190612775565b602060405180830381600087803b158015611b8e57600080fd5b505af1925050508015611bbf57506040513d601f19601f82011682018060405250810190611bbc919061230d565b60015b611c6557611bcb612f65565b806308c379a01415611c285750611be06133f7565b80611beb5750611c2a565b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c1f919061298e565b60405180910390fd5b505b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c5c906129b0565b60405180910390fd5b63bc197c8160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614611cec576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ce3906129d0565b60405180910390fd5b505b505050505050565b6000611d09611d0484612bb9565b612b94565b90508083825260208201905082856020860282011115611d2c57611d2b612f8c565b5b60005b85811015611d5c5781611d428882611e18565b845260208401935060208301925050600181019050611d2f565b5050509392505050565b6000611d79611d7484612be5565b612b94565b90508083825260208201905082856020860282011115611d9c57611d9b612f8c565b5b60005b85811015611dcc5781611db28882611f0b565b845260208401935060208301925050600181019050611d9f565b5050509392505050565b6000611de9611de484612c11565b612b94565b905082815260208101848484011115611e0557611e04612f91565b5b611e10848285612d9f565b509392505050565b600081359050611e278161348d565b92915050565b600082601f830112611e4257611e41612f87565b5b8135611e52848260208601611cf6565b91505092915050565b600082601f830112611e7057611e6f612f87565b5b8135611e80848260208601611d66565b91505092915050565b600081359050611e98816134a4565b92915050565b600081359050611ead816134bb565b92915050565b600081359050611ec2816134d2565b92915050565b600081519050611ed7816134d2565b92915050565b600082601f830112611ef257611ef1612f87565b5b8135611f02848260208601611dd6565b91505092915050565b600081359050611f1a816134e9565b92915050565b600081359050611f2f81613500565b92915050565b600060208284031215611f4b57611f4a612f9b565b5b6000611f5984828501611e18565b91505092915050565b60008060408385031215611f7957611f78612f9b565b5b6000611f8785828601611e18565b9250506020611f9885828601611e18565b9150509250929050565b600080600080600060a08688031215611fbe57611fbd612f9b565b5b6000611fcc88828901611e18565b9550506020611fdd88828901611e18565b945050604086013567ffffffffffffffff811115611ffe57611ffd612f96565b5b61200a88828901611e5b565b935050606086013567ffffffffffffffff81111561202b5761202a612f96565b5b61203788828901611e5b565b925050608086013567ffffffffffffffff81111561205857612057612f96565b5b61206488828901611edd565b9150509295509295909350565b60008060006060848603121561208a57612089612f9b565b5b600061209886828701611e18565b93505060206120a986828701611e18565b92505060406120ba86828701611e89565b9150509250925092565b600080600080600060a086880312156120e0576120df612f9b565b5b60006120ee88828901611e18565b95505060206120ff88828901611e18565b945050604061211088828901611f0b565b935050606061212188828901611f0b565b925050608086013567ffffffffffffffff81111561214257612141612f96565b5b61214e88828901611edd565b9150509295509295909350565b60008060008060008060c0878903121561217857612177612f9b565b5b600061218689828a01611e18565b965050602061219789828a01611e18565b95505060406121a889828a01611f0b565b94505060606121b989828a01611f20565b93505060806121ca89828a01611e9e565b92505060a06121db89828a01611e9e565b9150509295509295509295565b600080604083850312156121ff576121fe612f9b565b5b600061220d85828601611e18565b925050602061221e85828601611e89565b9150509250929050565b6000806040838503121561223f5761223e612f9b565b5b600061224d85828601611e18565b925050602061225e85828601611f0b565b9150509250929050565b6000806040838503121561227f5761227e612f9b565b5b600083013567ffffffffffffffff81111561229d5761229c612f96565b5b6122a985828601611e2d565b925050602083013567ffffffffffffffff8111156122ca576122c9612f96565b5b6122d685828601611e5b565b9150509250929050565b6000602082840312156122f6576122f5612f9b565b5b600061230484828501611eb3565b91505092915050565b60006020828403121561232357612322612f9b565b5b600061233184828501611ec8565b91505092915050565b6000602082840312156123505761234f612f9b565b5b600061235e84828501611f0b565b91505092915050565b6000806040838503121561237e5761237d612f9b565b5b600061238c85828601611f0b565b925050602061239d85828601611f0b565b9150509250929050565b60006123b383836126bd565b60208301905092915050565b6123c881612d14565b82525050565b60006123d982612c52565b6123e38185612c80565b93506123ee83612c42565b8060005b8381101561241f57815161240688826123a7565b975061241183612c73565b9250506001810190506123f2565b5085935050505092915050565b61243581612d26565b82525050565b61244481612d32565b82525050565b61245b61245682612d32565b612e8d565b82525050565b600061246c82612c5d565b6124768185612c91565b9350612486818560208601612dae565b61248f81612fa0565b840191505092915050565b60006124a582612c68565b6124af8185612ca2565b93506124bf818560208601612dae565b6124c881612fa0565b840191505092915050565b60006124e0603483612ca2565b91506124eb82612fcb565b604082019050919050565b6000612503602883612ca2565b915061250e8261301a565b604082019050919050565b6000612526602b83612ca2565b915061253182613069565b604082019050919050565b6000612549602483612ca2565b9150612554826130b8565b604082019050919050565b600061256c600283612cb3565b915061257782613107565b600282019050919050565b600061258f602983612ca2565b915061259a82613130565b604082019050919050565b60006125b2602583612ca2565b91506125bd8261317f565b604082019050919050565b60006125d5603283612ca2565b91506125e0826131ce565b604082019050919050565b60006125f8602383612ca2565b91506126038261321d565b604082019050919050565b600061261b602a83612ca2565b91506126268261326c565b604082019050919050565b600061263e602983612ca2565b9150612649826132bb565b604082019050919050565b6000612661602983612ca2565b915061266c8261330a565b604082019050919050565b6000612684602883612ca2565b915061268f82613359565b604082019050919050565b60006126a7602183612ca2565b91506126b2826133a8565b604082019050919050565b6126c681612d88565b82525050565b6126d581612d88565b82525050565b6126e481612d92565b82525050565b6126fb6126f682612d92565b612e97565b82525050565b600061270d828661244a565b60208201915061271d828561244a565b60208201915061272d82846126ea565b600182019150819050949350505050565b60006127498261255f565b9150612755828561244a565b602082019150612765828461244a565b6020820191508190509392505050565b600060a08201905061278a60008301886123bf565b61279760208301876123bf565b81810360408301526127a981866123ce565b905081810360608301526127bd81856123ce565b905081810360808301526127d18184612461565b90509695505050505050565b600060a0820190506127f260008301886123bf565b6127ff60208301876123bf565b61280c60408301866126cc565b61281960608301856126cc565b818103608083015261282b8184612461565b90509695505050505050565b6000602082019050818103600083015261285181846123ce565b905092915050565b6000604082019050818103600083015261287381856123ce565b9050818103602083015261288781846123ce565b90509392505050565b60006020820190506128a5600083018461242c565b92915050565b60006020820190506128c0600083018461243b565b92915050565b600060a0820190506128db600083018861243b565b6128e860208301876123bf565b6128f560408301866123bf565b61290260608301856126cc565b61290f60808301846126cc565b9695505050505050565b600060408201905061292e600083018561243b565b81810360208301526129408184612461565b90509392505050565b600060808201905061295e600083018761243b565b61296b60208301866126db565b612978604083018561243b565b612985606083018461243b565b95945050505050565b600060208201905081810360008301526129a8818461249a565b905092915050565b600060208201905081810360008301526129c9816124d3565b9050919050565b600060208201905081810360008301526129e9816124f6565b9050919050565b60006020820190508181036000830152612a0981612519565b9050919050565b60006020820190508181036000830152612a298161253c565b9050919050565b60006020820190508181036000830152612a4981612582565b9050919050565b60006020820190508181036000830152612a69816125a5565b9050919050565b60006020820190508181036000830152612a89816125c8565b9050919050565b60006020820190508181036000830152612aa9816125eb565b9050919050565b60006020820190508181036000830152612ac98161260e565b9050919050565b60006020820190508181036000830152612ae981612631565b9050919050565b60006020820190508181036000830152612b0981612654565b9050919050565b60006020820190508181036000830152612b2981612677565b9050919050565b60006020820190508181036000830152612b498161269a565b9050919050565b6000602082019050612b6560008301846126cc565b92915050565b6000604082019050612b8060008301856126cc565b612b8d60208301846126cc565b9392505050565b6000612b9e612baf565b9050612baa8282612e13565b919050565b6000604051905090565b600067ffffffffffffffff821115612bd457612bd3612f36565b5b602082029050602081019050919050565b600067ffffffffffffffff821115612c0057612bff612f36565b5b602082029050602081019050919050565b600067ffffffffffffffff821115612c2c57612c2b612f36565b5b612c3582612fa0565b9050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b6000612cc982612d88565b9150612cd483612d88565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115612d0957612d08612ea9565b5b828201905092915050565b6000612d1f82612d68565b9050919050565b60008115159050919050565b6000819050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b82818337600083830152505050565b60005b83811015612dcc578082015181840152602081019050612db1565b83811115612ddb576000848401525b50505050565b60006002820490506001821680612df957607f821691505b60208210811415612e0d57612e0c612ed8565b5b50919050565b612e1c82612fa0565b810181811067ffffffffffffffff82111715612e3b57612e3a612f36565b5b80604052505050565b6000612e4f82612d88565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415612e8257612e81612ea9565b5b600182019050919050565b6000819050919050565b6000612ea282612fb1565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600060033d1115612f845760046000803e612f81600051612fbe565b90505b90565b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b60008160f81b9050919050565b60008160e01c9050919050565b7f455243313135353a207472616e7366657220746f206e6f6e204552433131353560008201527f526563656976657220696d706c656d656e746572000000000000000000000000602082015250565b7f455243313135353a204552433131353552656365697665722072656a6563746560008201527f6420746f6b656e73000000000000000000000000000000000000000000000000602082015250565b7f455243313135353a2062616c616e636520717565727920666f7220746865207a60008201527f65726f2061646472657373000000000000000000000000000000000000000000602082015250565b7f455243313135353a206275726e20616d6f756e7420657863656564732062616c60008201527f616e636500000000000000000000000000000000000000000000000000000000602082015250565b7f1901000000000000000000000000000000000000000000000000000000000000600082015250565b7f455243313135353a2063616c6c6572206973206e6f74206f776e6572206e6f7260008201527f20617070726f7665640000000000000000000000000000000000000000000000602082015250565b7f455243313135353a207472616e7366657220746f20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f455243313135353a207472616e736665722063616c6c6572206973206e6f742060008201527f6f776e6572206e6f7220617070726f7665640000000000000000000000000000602082015250565b7f455243313135353a206275726e2066726f6d20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f455243313135353a20696e73756666696369656e742062616c616e636520666f60008201527f72207472616e7366657200000000000000000000000000000000000000000000602082015250565b7f455243313135353a2073657474696e6720617070726f76616c2073746174757360008201527f20666f722073656c660000000000000000000000000000000000000000000000602082015250565b7f455243313135353a206163636f756e747320616e6420696473206c656e67746860008201527f206d69736d617463680000000000000000000000000000000000000000000000602082015250565b7f455243313135353a2069647320616e6420616d6f756e7473206c656e6774682060008201527f6d69736d61746368000000000000000000000000000000000000000000000000602082015250565b7f455243313135353a206d696e7420746f20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b600060443d10156134075761348a565b61340f612baf565b60043d036004823e80513d602482011167ffffffffffffffff8211171561343757505061348a565b808201805167ffffffffffffffff811115613455575050505061348a565b80602083010160043d03850181111561347257505050505061348a565b61348182602001850186612e13565b82955050505050505b90565b61349681612d14565b81146134a157600080fd5b50565b6134ad81612d26565b81146134b857600080fd5b50565b6134c481612d32565b81146134cf57600080fd5b50565b6134db81612d3c565b81146134e657600080fd5b50565b6134f281612d88565b81146134fd57600080fd5b50565b61350981612d92565b811461351457600080fd5b5056fea2646970667358221220f47071c5fd7f4c4006fdff4002fe8b71ae0fb1b62bc6a929d2d338a5ecd604e664736f6c6343000805003368747470733a2f2f74686566616e7461737967616d652e6f72672f6170692f66616e746173796974656d2f7b69647d2e6a736f6e";
