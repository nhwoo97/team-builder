import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid'
import TeamForm from './teamForm'
import Member from './member'
import './App.css';

const initialMemberList = [{
  id: uuid(),
  name: 'Nam',
  email: 'namwoo@gmail.com',
  role: 'frontend',
}]
const initialForm = {
  name: '',
  email: '',
  role: ''
}

const fakeAxiosGet = () => {
  return Promise.resolve({ status: 200, success: true, data: initialMemberList })
}
const fakeAxiosPost = (url, { name, email, role }) => {
  const newMember = { id: uuid(), name, email, role }
  return Promise.resolve({ status: 200, success: true, data: newMember })
}

function App() {

  const [members, setMembers] = useState([])

  const [formValues, setFormValues] = useState(initialForm)


  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue })
  }

  const submitForm = () => {
    const member = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }


  if (!member.name || !member.email) return

  fakeAxiosPost('fake.com', member)
    .then(res => {
      setMembers([...members, res.data])
    })
    .catch(err => {
      console.log(err)
    })
    .finally(() => {
      setFormValues(initialForm)
    })
  }

  useEffect(() => {
    fakeAxiosGet('fakeapi.com')
      .then(res => setMembers(res.data))
  }, [])


  return (
    <div className="App">
      <header><h1>Members App</h1></header>
      <TeamForm
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />

      {members.map(member => {
        return(
          <Member key={member.id} details={member}></Member>
        )
      })}

    </div>
  );
}

export default App;
