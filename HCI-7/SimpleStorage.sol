
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {

    uint public number;

    // Function to store a number
    function setNumber(uint _number) public {
        number = _number;
    }

    // Function to retrieve the number
    function getNumber() public view returns (uint) {
        return number;
    }
}
