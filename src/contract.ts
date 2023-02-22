import { Address } from "@graphprotocol/graph-ts"
import {
  AdminChanged as AdminChangedEvent,
  BeaconUpgraded as BeaconUpgradedEvent,
  Contract,
  FeesClaimed as FeesClaimedEvent,
  InstallmentPaymentReceived as InstallmentPaymentReceivedEvent,
  LoanClaimed as LoanClaimedEvent,
  LoanCreated as LoanCreatedEvent,
  LoanRepaid as LoanRepaidEvent,
  LoanRolledOver as LoanRolledOverEvent,
  LoanStarted as LoanStartedEvent,
  NonceUsed as NonceUsedEvent,
  Paused as PausedEvent,
  RoleAdminChanged as RoleAdminChangedEvent,
  RoleGranted as RoleGrantedEvent,
  RoleRevoked as RoleRevokedEvent,
  SetFeeController as SetFeeControllerEvent,
  Unpaused as UnpausedEvent,
  Upgraded as UpgradedEvent
} from "../generated/Contract/Contract"
import {
  AdminChanged,
  BeaconUpgraded,
  FeesClaimed,
  InstallmentPaymentReceived,
  Loan,
  LoanClaimed,
  LoanCreated,
  LoanRepaid,
  LoanRolledOver,
  LoanStarted,
  NonceUsed,
  Paused,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  SetFeeController,
  Unpaused,
  Upgraded
} from "../generated/schema"

export function handleAdminChanged(event: AdminChangedEvent): void {
  let entity = new AdminChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousAdmin = event.params.previousAdmin
  entity.newAdmin = event.params.newAdmin

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBeaconUpgraded(event: BeaconUpgradedEvent): void {
  let entity = new BeaconUpgraded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.beacon = event.params.beacon

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFeesClaimed(event: FeesClaimedEvent): void {
  let entity = new FeesClaimed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.token = event.params.token
  entity.to = event.params.to
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInstallmentPaymentReceived(
  event: InstallmentPaymentReceivedEvent
): void {
  let entity = new InstallmentPaymentReceived(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.loanId = event.params.loanId
  entity.repaidAmount = event.params.repaidAmount
  entity.remBalance = event.params.remBalance

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLoanClaimed(event: LoanClaimedEvent): void {
  let entity = new LoanClaimed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.loanId = event.params.loanId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLoanCreated(event: LoanCreatedEvent): void {
  let entity = new LoanCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.terms_durationSecs = event.params.terms.durationSecs
  entity.terms_deadline = event.params.terms.deadline
  entity.terms_numInstallments = event.params.terms.numInstallments
  entity.terms_interestRate = event.params.terms.interestRate
  entity.terms_principal = event.params.terms.principal
  entity.terms_collateralAddress = event.params.terms.collateralAddress
  entity.terms_collateralId = event.params.terms.collateralId
  entity.terms_payableCurrency = event.params.terms.payableCurrency
  entity.loanId = event.params.loanId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLoanRepaid(event: LoanRepaidEvent): void {
  let entity = new LoanRepaid(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.loanId = event.params.loanId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLoanRolledOver(event: LoanRolledOverEvent): void {
  let entity = new LoanRolledOver(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldLoanId = event.params.oldLoanId
  entity.newLoanId = event.params.newLoanId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLoanStarted(event: LoanStartedEvent): void {
  let loanContract = Contract.bind(Address.fromString(event.address.toHexString()));
  let loanData = loanContract.getLoan(event.params.loanId);
  let loan = new Loan(event.params.loanId.toString());
  loan.borrower = event.params.borrower;
  loan.lender = event.params.lender;
  loan.state = loanData.state;
  loan.numInstallmentsPaid = loanData.numInstallmentsPaid;
  loan.startDate = loanData.startDate;
  loan.balance = loanData.balance;
  loan.balancePaid = loanData.balancePaid;
  loan.lateFeesAccrued = loanData.lateFeesAccrued;
  let loanTerms = loanData.terms;
  loan.durationSecs = loanTerms.durationSecs;
  loan.deadline = loanTerms.deadline;
  loan.numInstallments = loanTerms.numInstallments;
  loan.interestRate = loanTerms.interestRate;
  loan.principal = loanTerms.principal;
  loan.collateralAddress = loanTerms.collateralAddress;
  loan.collateralId = loanTerms.collateralId;
  loan.payableCurrency = loanTerms.payableCurrency;
  loan.timestamp = event.block.timestamp.toI32()
  loan.save();
}

export function handleNonceUsed(event: NonceUsedEvent): void {
  let entity = new NonceUsed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.nonce = event.params.nonce

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePaused(event: PausedEvent): void {
  let entity = new Paused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleAdminChanged(event: RoleAdminChangedEvent): void {
  let entity = new RoleAdminChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.previousAdminRole = event.params.previousAdminRole
  entity.newAdminRole = event.params.newAdminRole

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleGranted(event: RoleGrantedEvent): void {
  let entity = new RoleGranted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleRevoked(event: RoleRevokedEvent): void {
  let entity = new RoleRevoked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetFeeController(event: SetFeeControllerEvent): void {
  let entity = new SetFeeController(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.feeController = event.params.feeController

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUnpaused(event: UnpausedEvent): void {
  let entity = new Unpaused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpgraded(event: UpgradedEvent): void {
  let entity = new Upgraded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.implementation = event.params.implementation

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
