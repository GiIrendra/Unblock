const abi =[
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_clubAddress",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_studentCabinet",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_faculty",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_admin",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_itDepartment",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "clubAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "studentCabinet",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "faculty",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "admin",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "itDepartment",
				"type": "address"
			}
		],
		"name": "AddressesUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "clubAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "AdminApproval",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "approveByAdmin",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "approveByCabinet",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "approveByFaculty",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "approveByIT",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "clubAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "CabinetApproval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "clubAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "FacultyApproval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "clubAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ITApproval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "clubAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "venue",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "date",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "budget",
				"type": "uint256"
			}
		],
		"name": "ProposalCreated",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_venue",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_date",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_description",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_budget",
				"type": "uint256"
			}
		],
		"name": "proposeEvent",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_clubAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "department",
				"type": "string"
			}
		],
		"name": "resetApproval",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_clubAddress",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_studentCabinet",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_faculty",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_admin",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_itDepartment",
				"type": "address"
			}
		],
		"name": "updateAddresses",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "admin",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "clubAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "faculty",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getApprovalStatus",
		"outputs": [
			{
				"internalType": "enum EventProposalSystem.ApprovalStatus",
				"name": "facultyStatus",
				"type": "uint8"
			},
			{
				"internalType": "enum EventProposalSystem.ApprovalStatus",
				"name": "cabinetStatus",
				"type": "uint8"
			},
			{
				"internalType": "enum EventProposalSystem.ApprovalStatus",
				"name": "adminStatus",
				"type": "uint8"
			},
			{
				"internalType": "enum EventProposalSystem.ApprovalStatus",
				"name": "itStatus",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "isFullyApproved",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "itDepartment",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "proposals",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "venue",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "date",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "budget",
				"type": "uint256"
			},
			{
				"internalType": "enum EventProposalSystem.ApprovalStatus",
				"name": "facultyApproval",
				"type": "uint8"
			},
			{
				"internalType": "enum EventProposalSystem.ApprovalStatus",
				"name": "cabinetApproval",
				"type": "uint8"
			},
			{
				"internalType": "enum EventProposalSystem.ApprovalStatus",
				"name": "adminApproval",
				"type": "uint8"
			},
			{
				"internalType": "enum EventProposalSystem.ApprovalStatus",
				"name": "itApproval",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "studentCabinet",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
export default abi;
