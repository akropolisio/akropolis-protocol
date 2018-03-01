pragma solidity ^0.4.18;

import 'zeppelin-solidity/contracts/ownership/Ownable.sol';
import '../user/User.sol';


/**
 * @title UserRegistry
 * @dev Holds records for all of the registered users
 */
contract UserRegistry is Ownable {

    event Registered(address indexed accountAddress, address indexed userContract);

    mapping(address => User) users;

    function registerUser(address _userAddress, User _userContract) public {
        require(msg.sender == owner || msg.sender == _userAddress);
        users[_userAddress] = _userContract;
        Registered(_userAddress, _userContract);
    }

    function getUserContract(address _userAddress) view public returns(User) {
        return users[_userAddress];
    }

}