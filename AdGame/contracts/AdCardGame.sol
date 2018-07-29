pragma solidity ^0.4.17;

import 'zeppelin-solidity/contracts/ownership/Ownable.sol';
import './AdCardToken.sol';

contract AdCardGame is Ownable {

  uint constant gameFee = 0.005 ether;
  uint constant minPrice = 0.01 ether;
  uint constant minHerosToken = 5 ether;

  //address public cryptoHerosGame = 0x0;
  uint256 public maxSingleGameId = 0;

  uint nonce = 0;
  AdCardToken adCardToken;

  struct SingleGame {
    address player;
    uint256 contractMiddleCard;
    uint256 contractLastCard;
    uint256 userCardTkn;
    uint256 playerBet;
    uint8 userCardHigh;
    uint8 result; // 1 = win , 0 = loss
  }

  SingleGame[] public singleGames;

  mapping(address => uint256[]) public usersSingleGames;

  constructor(AdCardToken _adCardToken) public {
    adCardToken = _adCardToken;
  }

  function () payable public {

  }

  function createSingleGame(uint _tokenId) payable public returns (uint256) {
    require(msg.value >= minPrice);
    require(address(this).balance >= minHerosToken);
    require(adCardToken.ownerOf(_tokenId) == msg.sender);

    uint userCardNumber;
    uint userCardProb;
    uint contractHighProb = rand(1,100);
    uint contractMiddleCard;
    uint contractLastCard;
    uint8 userCardHigh = 0;
    (userCardNumber, userCardProb) = adCardToken.getTokenProperty(_tokenId);

    //determine if card will be first or last.
    if(userCardProb >= contractHighProb)
      userCardHigh = 1;

    //Draw middle card
    contractMiddleCard = rand(0, adCardToken.getCardsLength());
    //Draw last card
    contractLastCard = rand(0, adCardToken.getCardsLength());
    //do calculation

    SingleGame memory _singleGame;

    if(userCardHigh == 1)
    {
      if((contractLastCard < contractMiddleCard) && (contractMiddleCard < userCardNumber)){
        _singleGame = SingleGame({
            player: msg.sender,
            contractMiddleCard: contractMiddleCard,
            contractLastCard: contractLastCard,
            userCardTkn: _tokenId,
            playerBet: msg.value,
            userCardHigh: userCardHigh,
            result: 1
          });
        require(msg.sender.send((msg.value * 150 / 100) - gameFee));
      }
      else{
        _singleGame = SingleGame({
            player: msg.sender,
            contractMiddleCard: contractMiddleCard,
            contractLastCard: contractLastCard,
            userCardTkn: _tokenId,
            playerBet: msg.value,
            userCardHigh: userCardHigh,
            result: 0
          });
        require(msg.sender.send(msg.value - gameFee));
      }

    }
    else
    {
      if((userCardNumber < contractMiddleCard) && (contractMiddleCard < contractLastCard)){
        _singleGame = SingleGame({
            player: msg.sender,
            contractMiddleCard: contractMiddleCard,
            contractLastCard: contractLastCard,
            userCardTkn: _tokenId,
            playerBet: msg.value,
            userCardHigh: userCardHigh,
            result: 1
          });
        require(msg.sender.send((msg.value * 150 / 100) - gameFee));
      }
      else  {
        _singleGame = SingleGame({
            player: msg.sender,
            contractMiddleCard: contractMiddleCard,
            contractLastCard: contractLastCard,
            userCardTkn: _tokenId,
            playerBet: msg.value,
            userCardHigh: userCardHigh,
            result: 0
          });
        require(msg.sender.send(msg.value - gameFee));
      }


    }

    maxSingleGameId = singleGames.push(_singleGame) - 1;
    uint256[] userSingleGames = usersSingleGames[msg.sender];
    userSingleGames.push(maxSingleGameId);
    return maxSingleGameId;
    //return

  }

  // function readUserGamesCount(address _address, uint _idx) public returns (uint){
  //   return usersSingleGames[_address][_idx].length;
  // }

  function getUserSingleGames(address _address) external view returns (uint256[]) {
    return usersSingleGames[_address];
  }

  function rand(uint min, uint max) private returns (uint){
    nonce++;
    return uint(block.blockhash(block.number-1))%10 + 1;
  }

  function withdraw(uint amount) public payable onlyOwner returns(bool) {
    require(amount <= address(this).balance);
    owner.transfer(amount);
    return true;
  }

}
