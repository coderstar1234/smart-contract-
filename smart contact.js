pragma solidity ^0.8.0;

contract AttendanceSystem {
    // Declare variables
    address public owner;
    bool public isPresent;
    uint public lastAttendanceTime;
    
    // Constructor function
    constructor() {
        owner = msg.sender;
        isPresent = false;
        lastAttendanceTime = 0;
    }
    
    // Function to mark attendance
    function markAttendance() public {
        require(msg.sender == owner, "Only the owner can mark attendance.");
        require(!isPresent, "Attendance already marked for today.");
        
        // Update variables
        isPresent = true;
        lastAttendanceTime = block.timestamp;
    }
    
    // Function to check attendance status
    function checkAttendanceStatus() public view returns (bool, uint) {
        return (isPresent, lastAttendanceTime);
    }
}
