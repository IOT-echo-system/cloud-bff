type Address = { address1: string; address2?: string; district: string; state: string; pincode: number }
export type Premises = {
  premisesId: string
  name: string
  address: Address
  createdAt: Date
  user: { userId: string; role: 'OWNER' | 'ADMIN' | 'USER' }
  zones: string[]
  boards: string[]
}
