import React, { useState } from 'react'
import { backendUrl } from '../../App'
import axios from 'axios'

const Add = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")

  const onSubmitHandler = async (e) => {
    e.preventDefault()

    try {

      const formData = new FormData()

      formData.append("name", name)
      formData.append("email", email)
      formData.append("phone", phone)
      formData.append("address", address)

      const response = await axios.post(backendUrl + "/add", formData, { headers: { token } })

      if (response.data.success) {
        setName('')
        setEmail('')
        setPhone('')
        setAddress('')
      } else {
        console.log("error in else---", error);
      }

    } catch (error) {
      console.log("error in catch---", error);
    }
  }

  return (
    <form onSubmit={onSubmitHandler}
      className='flex flex-col w-full items-start gap-3'
    >
      <p>ALL COMPANIES</p>
      <div>

        <div>
          <p>Company Name</p>
          <input className=''
            type="text"
            placeholder='Type Here'
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </div>

        <div>
          <p>Company Email</p>
          <input className=''
            type="email"
            placeholder='Type Here'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>

        <div>
          <p>Company Phone Number</p>
          <input className=''
            type="number"
            placeholder='Type Here'
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            required
          />
        </div>

        <div>
          <p>Company Address</p>
          <input className=''
            type="text"
            placeholder='Type Here'
            onChange={(e) => setAddress(e.target.value)}
            value={address}
            required
          />
        </div>

      </div>

      <button type='submit'
        className='' >
        ADD COMPANY
      </button>
    </form>
  )
}

export default Add
