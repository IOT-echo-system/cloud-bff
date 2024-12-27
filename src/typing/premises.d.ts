type Address = { address1: string; address2?: string; district: string; state: string; pincode: number }
export type Premises = { premisesId: string; name: string; address: Address; createdAt: Date }
