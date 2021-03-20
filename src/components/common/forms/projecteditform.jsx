/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import Joi from 'joi';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { useSelector } from 'react-redux';
import MomentUtils from '@date-io/moment';
import MultiSelect from 'react-multi-select-component';
import Input from './input';
import AutoSuggest from '../autosuggest';
import { selectAllMembers } from '../../../app/memberSlice';
// import { authService, projectService } from '../../../services';

function ProjectEditForm(props) {
  const memberList = useSelector(selectAllMembers);

  const options = memberList.map((member) => {
    return { label: member.name, value: member };
  });

  const [data, setData] = useState({
    project_name: '',
    due_date: '',
    project_admin: '',
    status_name: '',
  });
  const [errors, setErrors] = useState({});
  const [selected, setSelected] = useState([]);
  const schema = {
    project_name: Joi.string().required().label('Name'),
    due_date: Joi.date(),
    project_admin: Joi.number(),
    status_name: Joi.string(),
  };

  const handleDateChange = (event) => {
    setData({ ...data, due_date: event._d });
  };

  const handleAdminChange = (value) => {
    console.log(value);
    setData({ ...data, project_admin: value });
  };

  // const doSubmit = async () => {
  //   const { setShowModal } = props;
  //   const currentUser = authService.getCurrentUser();
  //   try {
  //     await projectService.addProject({
  //       ...data,
  //       company_id: currentUser.company_id,
  //     });
  //     setShowModal(false);
  //   } catch (ex) {
  //     if (ex.response && ex.response.status === 400) {
  //       const e = { ...errors };
  //       e.email = ex.response.data;
  //       setErrors(e);
  //     }
  //   }
  // };

  useEffect(() => {
    const { project_name, due_date, name, status_name } = props.data;
    const d = {
      project_name: project_name,
      due_date: due_date,
      project_admin: name,
      status_name: status_name,
    };
    setData(d);
  }, [
    props.data.project_name,
    props.data.due_date,
    props.data.name,
    props.data.status_name,
    props.data,
  ]);

  // const validate = () => {
  //   const options = { abortEarly: false };
  //   const { error } = Joi.validate(data, schema, options);
  //   if (!error) return null;
  //   const e = {};
  //   for (const item of error.details) e[item.path[0]] = item.message;
  //   return e;
  // };

  const validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const s = { [name]: schema[name] };
    const { error } = Joi.validate(obj, s);
    return error ? error.details[0].message : null;
  };

  const handleChange = ({ currentTarget: input }) => {
    const e = { ...errors };
    const errorMessage = validateProperty(input);
    if (errorMessage) e[input.name] = errorMessage;
    else delete e[input.name];

    const d = { ...data };
    d[input.name] = input.value;
    setData(d);
    setErrors(errors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    console.log('delete button clicked');
  };

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <div className="edit__form__container">
        <form>
          <div className="edit__form__body">
            <div className="project__info">
              <Input
                name="project_name"
                label="Change Project Name"
                value={data.project_name}
                onChange={handleChange}
                placeholder="Enter your Project Name"
                error={errors.project_name}
              />
              <Input
                name="status_name"
                label="Change Status"
                value={data.status_name}
                onChange={handleChange}
                placeholder="Enter your Project Name"
                error={errors.status_name}
              />
              <div className="form-group">
                <label>Change Due Date</label>
                <DatePicker
                  value={data.due_date}
                  onChange={handleDateChange}
                  name="due_date"
                />
              </div>
              <div className="form-group">
                <label htmlFor="memberselect">Add Members</label>
                <MultiSelect
                  options={options}
                  value={selected}
                  onChange={setSelected}
                  labelledBy="Select"
                />
              </div>
            </div>

            <div className="member__access">
              <label>Change Project Admin</label>
              <AutoSuggest
                value={props.data.name ? props.data.name : ''}
                handleAdminChange={handleAdminChange}
              />
            </div>

            <div className="form-group-btn">
              <button className="form__btn" onClick={handleSubmit}>
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </MuiPickersUtilsProvider>
  );
}

export default ProjectEditForm;
