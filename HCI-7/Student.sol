
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Student {
    string public name;
    uint public rollNo;
    uint public marks;

    // Set student details
    function setDetails(string memory _name, uint _rollNo, uint _marks) public {
        name = _name;
        rollNo = _rollNo;
        marks = _marks;
    }

    // Get student details
    function getDetails() public view returns (string memory, uint, uint) {
        return (name, rollNo, marks);
    }

    // Update marks
    function updateMarks(uint _marks) public {
        require(_marks <= 100, "Invalid marks");
        marks = _marks;
    }
}
