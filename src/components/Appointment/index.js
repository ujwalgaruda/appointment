import {Component} from 'react'
import './index.css'

const doctorList = [
  {
    id: 'DENTIST',
    doctorName: 'Dr.Rahul',
    specialization: 'Dentist',
  },
  {
    id: 'ORTHOPEDIC',
    doctorName: 'Dr.Suresh',
    specialization: 'Ortho',
  },
  {
    id: 'CARDIOLOGIST',
    doctorName: 'Dr.Thomas',
    specialization: 'Cardiologist',
  },
  {
    id: 'ENT',
    doctorName: 'Dr.Ram',
    specialization: 'ENT',
  },
  {
    id: 'NEURO-SURGEON',
    doctorName: 'Dr.Sheela',
    specialization: 'Neuro Surgeon',
  },
]

// Write your code here
class Appointment extends Component {
  state = {selectedDoctor: doctorList[0].id, isBooked:false}

  doctorClicked = event => {
    this.setState({selectedDoctor: event.target.value})
  }

  getDoctorDetails = () => {
    const {selectedDoctor} = this.state

    const doctorDetails = doctorList.find(
      eachItem => eachItem.id === selectedDoctor,
    )

    return doctorDetails.doctorName
  }

  onAppointmentBooked =() =>{
      const {isBooked} = this.state

      this.setState({isBooked:true})
  }

  renderBookAppointment = () => {
    const {selectedDoctor} = this.state
    const DoctorInfo = this.getDoctorDetails(selectedDoctor)
    

    return (
      <div className="bg-container">
        <div className="appointment-card">
          <h1 className="title">Book your Appointment</h1>
          <form className='form'>
              <div className='form-group'>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder='Your Name' />
              </div>
              <div className='form-group'>
              <label htmlFor="age">Age</label>
              <input type="number" id="age" placeholder='Your Age' />
              </div>
              <div className='form-group'>
              <label htmlFor="date">Date</label>
              <input type="date" id="date" placeholder='Date' />
              </div>
              <div className='form-group'>
              <label htmlFor="date">Doctor</label>
              <select
              onChange={this.doctorClicked}
              value={selectedDoctor}
              className="select"
              defaultValue={'DEFAULT'}
              
            >
                <option value="DEFAULT" disabled >Choose</option>
              {doctorList.map(eachItem => (
                <option
                  key={eachItem.id}
                  value={eachItem.id}
                  className="option"
                >
                  {eachItem.specialization}
                </option>
              ))}
            </select>
              </div>
              <div className='form-group'>
              <label htmlFor='doctor'>Doctor Name</label>
              <p name="doctor" className='doctor-name'>{DoctorInfo}</p>
              </div>
              <button className='button' type="submit" onClick={this.onAppointmentBooked}>Book Appointment</button>
          </form>
         
          
        </div>
      </div>
    )
  }

  renderThanksForBooking =() => {
    const {selectedDoctor} = this.state
    const DoctorInfo = this.getDoctorDetails(selectedDoctor)

    return(
        <div className='bg-container'>
            <div className='appointment-card'>
                <img src="./confirm.svg" alt="confirm-img" className='confirm-img'/>
                <h1 className='title'>Your appointment is booked with  
                 -{DoctorInfo}</h1>
            </div>
        </div>
    )
  }

  render() {
    const {isBooked} = this.state

    return(
        <div className='bg-container'>
            <img src='./doctor.svg' className='doctor-image' alt='doctor'/>
            {isBooked ? this.renderThanksForBooking() : this.renderBookAppointment()}
        </div>
    )

  }
}

export default Appointment
