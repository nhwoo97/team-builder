import React from 'react'

export default function TeamForm(props) {
const { values, update, submit} = props


const onChange = evt => {
    const{name, value} = evt.target
    update(name, value)
}
const onSubmit = evt => {
    evt.preventDefault()
    submit()
}


    return (
        <form className='form container'>
            <div className='form-group inputs'>
                <h4>Info</h4>

                <label>Name:&nbsp;
                    <input
                        onChange={onChange}
                        value={values.name}
                        name='name'
                        placeholder='please enter name'
                        maxLength='20'
                        type='text'
                    />
                </label>

                <label>Email:&nbsp;
                    <input
                        onChange={onChange}
                        value={values.email}
                        name='email'
                        placeholder='please enter email'
                        maxLength='20'
                        type='email'
                    />
                </label>

                <label>Role:&nbsp;
                    <select onChange={onChange} value={values.role} name='role'>
                    <option value="">-- Select a Role --</option>
                    <option value="frontend">Frontend Developer</option>
                    <option value="backend">Backend Developer</option>
                    <option value="designer">Designer</option>
                    </select>
                </label>
                
            </div>

            <div className='form-group container'>
                <h2>Add a team Member</h2>
                <button onClick={onSubmit} disabled={!values.name || !values.email || !values.role ? true : false}>Submit</button>
            </div>
        </form>
    )
}