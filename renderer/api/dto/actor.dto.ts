export interface CreateActorDTO {
	fullName: string
	ava: File
}

export interface Actor {
	id: string
	fullName: string
	ava: string
	createdAt: string
}
