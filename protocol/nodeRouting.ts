// the-gated-scrolls/protocol/nodeRouting.ts

interface BrokerAccount {
  id: string;
  name: string;
  agentCount: number;
  approvedUpgrade: boolean;
}

interface NodeRoutingProfile {
  accountId: string;
  assignedNodeId: string;
  allocationStrategy: 'DEDICATED_PHYSICAL_IRON' | 'FEDERATED_COMPANY_NODE';
  monthlyMaintenanceFeeUsd: number;
  dataIsolationStatus: 'PRISTINE_ISOLATED_CONTAINER';
}

/**
 * Executes the "Jim Path" operational logic.
 * Routes brokers who defer full node purchases into a high-capacity Company Node.
 */
export function determineNodeRouting(account: BrokerAccount): NodeRoutingProfile {
  // If they have the team size AND approved the capital deployment, ship the dedicated box
  if (account.agentCount >= 30 && account.approvedUpgrade) {
    return {
      accountId: account.id,
      assignedNodeId: `NODE-DEDICATED-${account.id.toUpperCase()}`,
      allocationStrategy: 'DEDICATED_PHYSICAL_IRON',
      monthlyMaintenanceFeeUsd: 0, // Absorbed by upstream asset purchase
      dataIsolationStatus: 'PRISTINE_ISOLATED_CONTAINER'
    };
  }

  // THE JIM PATH: Maintain active status on the shared Company Node Motherboard
  // They control their setup, but use the regional federated infrastructure line
  return {
    accountId: account.id,
    assignedNodeId: "NODE-FEDERATED-COMPANY-MAIN-001", 
    allocationStrategy: 'FEDERATED_COMPANY_NODE',
    monthlyMaintenanceFeeUsd: 150, // Minimal infrastructure upkeep line item
    dataIsolationStatus: 'PRISTINE_ISOLATED_CONTAINER' // Cryptographically secure separation
  };
}
