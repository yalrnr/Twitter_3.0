//SPDX-License-Identifier: MIT

pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract ProfileImageNfts is ERC721, Ownable {

    using Counters for Counters.Counter;
    using Strings for uint256;

    Counters.Counter _tokenIds;
    mapping(uint256 => string) _tokenURIs;

    struct RenderToken{
        uint256 id;
        string uri;
        string space;
    }

}