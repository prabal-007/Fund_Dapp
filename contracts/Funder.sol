// SPDX-License-Identifier: MIT
pragma solidity > 0.5.0 <=0.9.0;

contract Funder {
    uint public numOfFunders;

    mapping(uint=>address) private funders;

    receive () external payable{}

    function transfer() external payable{
        funders[numOfFunders] = msg.sender;
    }

    function withdraw(uint withdrawAmount ) external {
        require(withdrawAmount <= 2000000000000000000, "Cannot withdraw more then 2 eth!");
        payable(msg.sender).transfer(withdrawAmount);
    }
}