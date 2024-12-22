type Address = { address1: string; address2?: string; city: string; district: string; state: string; zipCode: number }
export type Premises = { premisesId: string; name: string; address: Address; createdAt: Date }
