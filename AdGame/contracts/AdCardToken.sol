pragma solidity ^0.4.17;

import 'zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol';
import 'zeppelin-solidity/contracts/ownership/Ownable.sol';

/**
 * @title ERC721TokenMock
 * This mock just provides a public mint and burn functions for testing purposes,
 * and a public setter for metadata URI
 */
contract AdCardToken is ERC721Token, Ownable {
  mapping (uint256 => address) internal tokenOwner;
  uint constant minPrice = 0.01 ether;

  uint[] public numbers = [0,1,2,3,4,5,6,7,8,9];
  uint[] public probs = [0,25,50,75,100];

  struct Card {
    uint number;
    uint probHigh;
  }

  uint nonce = 0;
  Card[] public cards;

  mapping(uint256 => Card) public tokenProperty;

  constructor(string name, string symbol) public
    ERC721Token(name, symbol)
  { }

  /**
   * Only owner can mint
   */
  function mint() public payable {
    require(numbers.length > 0);
    require(probs.length > 0);
    require(msg.value >= minPrice);
    require(owner.send(msg.value));
    uint256 _tokenId = totalSupply();
    tokenOwner[_tokenId] = msg.sender;
    uint num = rand(0, numbers.length);
    uint prob = rand(0, probs.length);
    uint _number = numbers[num];
    uint _probHigh = probs[prob];

    tokenProperty[_tokenId] = Card({number: _number, probHigh: _probHigh});
    super._mint(msg.sender, _tokenId);
  }

  function burn(uint256 _tokenId) public onlyOwner {
    tokenOwner[_tokenId] = address(0);
    super._burn(ownerOf(_tokenId), _tokenId);
  }

  function getOwnedTokens(address _owner) external view returns (uint256[]) {
    return ownedTokens[_owner];
  }

  function getTokenProperty(uint256 _tokenId) external view returns (uint _number, uint _probs) {
    return (tokenProperty[_tokenId].number, tokenProperty[_tokenId].probHigh);
  }

  function rand(uint min, uint max) private returns (uint){
    nonce++;
    return uint(block.blockhash(block.number-1))%10 + 1;
  }

  function getCardsLength() external view returns (uint) {
    return cards.length;
  }

  function withdraw(uint amount) public payable onlyOwner returns(bool) {
    require(amount <= address(this).balance);
    owner.transfer(amount);
    return true;
  }

}
