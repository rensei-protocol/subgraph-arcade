import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  AdminChanged,
  BeaconUpgraded,
  FeesClaimed,
  InstallmentPaymentReceived,
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
} from "../generated/Contract/Contract"

export function createAdminChangedEvent(
  previousAdmin: Address,
  newAdmin: Address
): AdminChanged {
  let adminChangedEvent = changetype<AdminChanged>(newMockEvent())

  adminChangedEvent.parameters = new Array()

  adminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdmin",
      ethereum.Value.fromAddress(previousAdmin)
    )
  )
  adminChangedEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )

  return adminChangedEvent
}

export function createBeaconUpgradedEvent(beacon: Address): BeaconUpgraded {
  let beaconUpgradedEvent = changetype<BeaconUpgraded>(newMockEvent())

  beaconUpgradedEvent.parameters = new Array()

  beaconUpgradedEvent.parameters.push(
    new ethereum.EventParam("beacon", ethereum.Value.fromAddress(beacon))
  )

  return beaconUpgradedEvent
}

export function createFeesClaimedEvent(
  token: Address,
  to: Address,
  amount: BigInt
): FeesClaimed {
  let feesClaimedEvent = changetype<FeesClaimed>(newMockEvent())

  feesClaimedEvent.parameters = new Array()

  feesClaimedEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  feesClaimedEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  feesClaimedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return feesClaimedEvent
}

export function createInstallmentPaymentReceivedEvent(
  loanId: BigInt,
  repaidAmount: BigInt,
  remBalance: BigInt
): InstallmentPaymentReceived {
  let installmentPaymentReceivedEvent = changetype<InstallmentPaymentReceived>(
    newMockEvent()
  )

  installmentPaymentReceivedEvent.parameters = new Array()

  installmentPaymentReceivedEvent.parameters.push(
    new ethereum.EventParam("loanId", ethereum.Value.fromUnsignedBigInt(loanId))
  )
  installmentPaymentReceivedEvent.parameters.push(
    new ethereum.EventParam(
      "repaidAmount",
      ethereum.Value.fromUnsignedBigInt(repaidAmount)
    )
  )
  installmentPaymentReceivedEvent.parameters.push(
    new ethereum.EventParam(
      "remBalance",
      ethereum.Value.fromUnsignedBigInt(remBalance)
    )
  )

  return installmentPaymentReceivedEvent
}

export function createLoanClaimedEvent(loanId: BigInt): LoanClaimed {
  let loanClaimedEvent = changetype<LoanClaimed>(newMockEvent())

  loanClaimedEvent.parameters = new Array()

  loanClaimedEvent.parameters.push(
    new ethereum.EventParam("loanId", ethereum.Value.fromUnsignedBigInt(loanId))
  )

  return loanClaimedEvent
}

export function createLoanCreatedEvent(
  terms: ethereum.Tuple,
  loanId: BigInt
): LoanCreated {
  let loanCreatedEvent = changetype<LoanCreated>(newMockEvent())

  loanCreatedEvent.parameters = new Array()

  loanCreatedEvent.parameters.push(
    new ethereum.EventParam("terms", ethereum.Value.fromTuple(terms))
  )
  loanCreatedEvent.parameters.push(
    new ethereum.EventParam("loanId", ethereum.Value.fromUnsignedBigInt(loanId))
  )

  return loanCreatedEvent
}

export function createLoanRepaidEvent(loanId: BigInt): LoanRepaid {
  let loanRepaidEvent = changetype<LoanRepaid>(newMockEvent())

  loanRepaidEvent.parameters = new Array()

  loanRepaidEvent.parameters.push(
    new ethereum.EventParam("loanId", ethereum.Value.fromUnsignedBigInt(loanId))
  )

  return loanRepaidEvent
}

export function createLoanRolledOverEvent(
  oldLoanId: BigInt,
  newLoanId: BigInt
): LoanRolledOver {
  let loanRolledOverEvent = changetype<LoanRolledOver>(newMockEvent())

  loanRolledOverEvent.parameters = new Array()

  loanRolledOverEvent.parameters.push(
    new ethereum.EventParam(
      "oldLoanId",
      ethereum.Value.fromUnsignedBigInt(oldLoanId)
    )
  )
  loanRolledOverEvent.parameters.push(
    new ethereum.EventParam(
      "newLoanId",
      ethereum.Value.fromUnsignedBigInt(newLoanId)
    )
  )

  return loanRolledOverEvent
}

export function createLoanStartedEvent(
  loanId: BigInt,
  lender: Address,
  borrower: Address
): LoanStarted {
  let loanStartedEvent = changetype<LoanStarted>(newMockEvent())

  loanStartedEvent.parameters = new Array()

  loanStartedEvent.parameters.push(
    new ethereum.EventParam("loanId", ethereum.Value.fromUnsignedBigInt(loanId))
  )
  loanStartedEvent.parameters.push(
    new ethereum.EventParam("lender", ethereum.Value.fromAddress(lender))
  )
  loanStartedEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )

  return loanStartedEvent
}

export function createNonceUsedEvent(user: Address, nonce: BigInt): NonceUsed {
  let nonceUsedEvent = changetype<NonceUsed>(newMockEvent())

  nonceUsedEvent.parameters = new Array()

  nonceUsedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  nonceUsedEvent.parameters.push(
    new ethereum.EventParam("nonce", ethereum.Value.fromUnsignedBigInt(nonce))
  )

  return nonceUsedEvent
}

export function createPausedEvent(account: Address): Paused {
  let pausedEvent = changetype<Paused>(newMockEvent())

  pausedEvent.parameters = new Array()

  pausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return pausedEvent
}

export function createRoleAdminChangedEvent(
  role: Bytes,
  previousAdminRole: Bytes,
  newAdminRole: Bytes
): RoleAdminChanged {
  let roleAdminChangedEvent = changetype<RoleAdminChanged>(newMockEvent())

  roleAdminChangedEvent.parameters = new Array()

  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdminRole",
      ethereum.Value.fromFixedBytes(previousAdminRole)
    )
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newAdminRole",
      ethereum.Value.fromFixedBytes(newAdminRole)
    )
  )

  return roleAdminChangedEvent
}

export function createRoleGrantedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleGranted {
  let roleGrantedEvent = changetype<RoleGranted>(newMockEvent())

  roleGrantedEvent.parameters = new Array()

  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleGrantedEvent
}

export function createRoleRevokedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleRevoked {
  let roleRevokedEvent = changetype<RoleRevoked>(newMockEvent())

  roleRevokedEvent.parameters = new Array()

  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleRevokedEvent
}

export function createSetFeeControllerEvent(
  feeController: Address
): SetFeeController {
  let setFeeControllerEvent = changetype<SetFeeController>(newMockEvent())

  setFeeControllerEvent.parameters = new Array()

  setFeeControllerEvent.parameters.push(
    new ethereum.EventParam(
      "feeController",
      ethereum.Value.fromAddress(feeController)
    )
  )

  return setFeeControllerEvent
}

export function createUnpausedEvent(account: Address): Unpaused {
  let unpausedEvent = changetype<Unpaused>(newMockEvent())

  unpausedEvent.parameters = new Array()

  unpausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return unpausedEvent
}

export function createUpgradedEvent(implementation: Address): Upgraded {
  let upgradedEvent = changetype<Upgraded>(newMockEvent())

  upgradedEvent.parameters = new Array()

  upgradedEvent.parameters.push(
    new ethereum.EventParam(
      "implementation",
      ethereum.Value.fromAddress(implementation)
    )
  )

  return upgradedEvent
}
