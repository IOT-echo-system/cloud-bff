import type { Zone } from './zone'
import type { Board } from './board'

type Address = { address1: string; address2?: string; district: string; state: string; pincode: number }
export type Premises = {
  premisesId: string
  name: string
  address: Address
  createdAt: Date
  user: { userId: string; role: 'OWNER' | 'ADMIN' | 'USER' }
}
export type PremisesDetails = Premises & { zoneIds: string[]; boardIds: string[]; zones: Zone[]; boards: Board[] }
