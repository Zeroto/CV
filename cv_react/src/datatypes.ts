export interface Address {
  Street: string
  Number: string
  City: string
  Country: string
}

export interface PersonalDetails {
  Name: string
  MaritalStatus: string
  Address: Address
}

export interface Education {
  Description: string
  Location: string
  Period: string
}

export interface Work {
  Company: string
  Period: string
  Description: string
  Skills: string[]
}

export interface Data {
  PersonalDetails: PersonalDetails
  Education: Education[],
  Work: Work[],
  Skills: Record<string, string[]>
}