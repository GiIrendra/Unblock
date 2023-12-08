const abi =[
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_authorizedClubs",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_clubFaculty",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_studentCabinet",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_idDept",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_adminDept",
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
				"indexed": true,
				"internalType": "address",
				"name": "clubAddress",
				"type": "address"
			}
		],
		"name": "AdminApproval",
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
				"name": "eventName",
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
				"name": "venue",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "budget",
				"type": "string"
			}
		],
		"name": "AdminDepartmentNotification",
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
				"name": "eventName",
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
				"name": "venue",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "budget",
				"type": "string"
			}
		],
		"name": "ITDepartmentNotification",
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
			}
		],
		"name": "ProposalSentToCabinet",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "adminDept",
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
				"name": "_clubAddress",
				"type": "address"
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
				"internalType": "address",
				"name": "_clubAddress",
				"type": "address"
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
				"internalType": "address",
				"name": "_clubAddress",
				"type": "address"
			}
		],
		"name": "approveByIT",
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
			}
		],
		"name": "approveProposal",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "authorizedClub",
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
		"name": "departmentApprovals",
		"outputs": [
			{
				"internalType": "enum EventProposalSystem.DepartmentStatus",
				"name": "adminStatus",
				"type": "uint8"
			},
			{
				"internalType": "enum EventProposalSystem.DepartmentStatus",
				"name": "itStatus",
				"type": "uint8"
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
		"name": "itDept",
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
				"name": "_clubAddress",
				"type": "address"
			}
		],
		"name": "notifyAdminDepartment",
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
			}
		],
		"name": "notifyITDepartment",
		"outputs": [],
		"stateMutability": "nonpayable",
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
				"name": "eventName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "date",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "venue",
				"type": "string"
			},
			{
				"internalType": "enum EventProposalSystem.ProposalStatus",
				"name": "status",
				"type": "uint8"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "budget",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_clubAddress",
				"type": "address"
			}
		],
		"name": "rejectProposal",
		"outputs": [],
		"stateMutability": "nonpayable",
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
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_eventName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_date",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_venue",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_description",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_budget",
				"type": "string"
			}
		],
		"name": "submitProposal",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];
export default abi;
