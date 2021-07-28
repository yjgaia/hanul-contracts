// SPDX-License-Identifier: MIT
pragma solidity ^0.8.5;

import "../../token/interfaces/IFungibleToken.sol";

interface IWETH is IFungibleToken {
    
    event Deposit(address indexed owner, uint256 value);
    event Withdraw(address indexed owner, uint256 value);

    function deposit() payable external;
    function withdraw(uint256 value) external;
}
