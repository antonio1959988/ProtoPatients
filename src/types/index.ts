// Cuando se registre un paciente
export type Patient = {
    id: string
    name: string
    caretaker: string
    email: string
    date: Date
    symptoms: string
}

//Paciente de stage sin guardar
export type DraftPatient = Omit<Patient, 'id'>