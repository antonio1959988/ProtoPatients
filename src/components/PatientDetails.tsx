import { toast } from "react-toastify"
import { usePatientStore } from "../store"
import { Patient } from "../types"
import PatientDetailItem from "./PatientDetailItem"

type PatientDetailsProps = {
    patient: Patient
}

export default function PatientDetails({patient}: PatientDetailsProps) {

    const {deletePatient, getPatientById} = usePatientStore()

    const handleClick = () => {
        deletePatient(patient.id)
        toast.error('Paciente eliminado :(')
    }

  return (
    <div className="mx-5 my-10 py-10 px-5 bg-white shadow-md rounded-xl">
        <PatientDetailItem label="ID" data={patient.id}/>
        <PatientDetailItem label="Nombre" data={patient.name}/>
        <PatientDetailItem label="Propietario" data={patient.caretaker}/>
        <PatientDetailItem label="Email" data={patient.email}/>
        <PatientDetailItem label="Fecha Alta" data={patient.date.toString()}/>
        <PatientDetailItem label="Síntomas" data={patient.symptoms}/>

        <div className="flex flex-col lg:flex-row justify-between gap-3 mt-10">
            <button 
            type="button"
            className="py-2 px-10 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
            onClick={() => getPatientById(patient.id)}>
                Editar
            </button>

            <button 
            type="button"
            className="py-2 px-10 w-full bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg" onClick={() => handleClick()}>
                Eliminar
            </button>
        </div>
    </div>
  )
}
