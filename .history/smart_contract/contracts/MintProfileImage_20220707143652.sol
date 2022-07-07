//SPDX-License-Identifier: MIT

pragma solidity ^0.8.2;

////////Smart Contract to run on Blockchain Network to mint NFTS


//// Importing Dependency for Standards of representing ownership of NFTs
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

//////// Smart Contract

contract ProfileImageNfts is ERC721, Ownable {

    using Counters for Counters.Counter;
    using Strings for uint256;

    /// Variables for storing TokenIds and its mappings
    Counters.Counter _tokenIds;
    mapping(uint256 => string) _tokenURIs;


    /// Works as Structure as well as function for storing the data
    struct RenderToken{
        uint256 id;
        string uri;
        string space;
    }

    constructor() ERC721("ProfileImageNfts","PIN"){}

    /// To Store the Metadata
    function _setTokenURI(uint256 tokenId, string memory _tokenURI) internal {
        _tokenURIs[tokenId] = _tokenURI;
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(_exists(tokenId),"URI does not exist on that ID!");
        string memory _RUri =  _tokenURIs[tokenId];
        return _RUri;
    }

    function getAlltoken() public view returns (RenderToken[] memory) {
        uint256 latestId = _tokenIds.current();
        RenderToken[] memory res = new RenderToken[](latestId);
        for(uint256 i = 0; i  <= latestId ; i++){
            if(_exists(i)){
                string memory uri = tokenURI(i);
                res[i] = RenderToken(i,uri," ");
            }
        }
        return res;
    }

    function mint(address recipents, string memory _uri) public returns (uint256) {
        uint256 newId = _tokenIds.current();
        _mint(recipents,newId);
        _setTokenURI(newId,_uri);
        _tokenIds.increment();
        return newId;
    }

}