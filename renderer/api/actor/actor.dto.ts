export interface CreateActorDTO {
	fullName: string
	ava: File
}

export interface Actor {
	id: number
	fullName: string
	ava: string
	createdAt: string
}
