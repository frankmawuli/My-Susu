// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Contribution {
    uint public nextContributionId = 1;

    // Define a struct to represent a contribution
    struct ContributionData {
        uint id;
        string contributionType;
        string name;
        string dateOfCommencement;
        string dateOfTermination;
        address owner;
        uint funds;
        uint contributorsCount;
    }

    struct Owner {
        address owner;
        uint[] contributionIds;
    }

    struct Contributor {
        address contributor;
        uint amount;
    }

    mapping(uint => ContributionData) public contributions;
    mapping(address => Owner) public owners;
    mapping(uint => Contributor[]) public contributionContributors;

    // Events
    event ContributionCreated(uint id, address owner);
    event Contributed(uint id, address contributor, uint amount);
    event Withdrawn(uint id, address owner, uint amount);

    // Create a new contribution
    function createContribution(
        string memory _type,
        string memory _name,
        string memory _start,
        string memory _end
    ) public {
        uint id = nextContributionId++;
        contributions[id] = ContributionData(
            id,
            _type,
            _name,
            _start,
            _end,
            msg.sender,
            0,
            0
        );
        owners[msg.sender].owner = msg.sender;
        owners[msg.sender].contributionIds.push(id);

        emit ContributionCreated(id, msg.sender);
    }

    // Get all contributions
    function getAllContributions() public view returns (ContributionData[] memory) {
        ContributionData[] memory result = new ContributionData[](nextContributionId - 1);
        for (uint i = 1; i < nextContributionId; i++) {
            result[i - 1] = contributions[i];
        }
        return result;
    }

    // Get a contribution by ID
    function getContributionById(uint _id) public view returns (ContributionData memory) {
        require(_id < nextContributionId, "Contribution does not exist");
        return contributions[_id];
    }

    // Get specific details of a contribution
    function getSpecificDetailsOfContribution(uint _id) public view returns (
        string memory contributionType,
        string memory name,
        string memory dateOfCommencement,
        string memory dateOfTermination,
        address owner,
        uint funds,
        uint contributorsCount
    ) {
        require(_id < nextContributionId, "Invalid ID");
        ContributionData memory data = contributions[_id];
        return (
            data.contributionType,
            data.name,
            data.dateOfCommencement,
            data.dateOfTermination,
            data.owner,
            data.funds,
            data.contributorsCount
        );
    }

    // Make contributions to a specific contribution ID
    function makeContribution(uint _id) public payable {
        require(_id < nextContributionId, "Invalid contribution ID");
        require(msg.value > 0, "Contribution must be greater than zero");

        ContributionData storage contrib = contributions[_id];
        contrib.funds += msg.value;
        contrib.contributorsCount += 1;

        contributionContributors[_id].push(Contributor(msg.sender, msg.value));

        emit Contributed(_id, msg.sender, msg.value);
    }

    // Withdraw funds from a contribution
    function withdrawFromContribution(uint _id) public {
        require(_id < nextContributionId, "Invalid contribution ID");
        ContributionData storage contrib = contributions[_id];

        require(msg.sender == contrib.owner, "Only owner can withdraw");
        require(contrib.funds > 0, "No funds to withdraw");
        // You can add a time check using block.timestamp and parsing dateOfTermination

        uint amount = contrib.funds;
        contrib.funds = 0;

        payable(msg.sender).transfer(amount);

        emit Withdrawn(_id, msg.sender, amount);
    }

    // Get contributors of a specific contribution
    function getContributors(uint _id) public view returns (Contributor[] memory) {
        return contributionContributors[_id];
    }
}
