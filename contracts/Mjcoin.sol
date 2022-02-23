// SPDX-License-Identifier: MIT
pragma solidity 0.8.11;

import "./ERC20.sol";

contract Mjcoin is ERC20{

    constructor(uint256 _supply) ERC20("mjcoin", "MJC") {
    _mint(msg.sender, _supply*(10**decimals()));

    }

}