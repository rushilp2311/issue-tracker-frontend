/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import Joi from 'joi';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { useSelector, useDispatch } from 'react-redux';
import MomentUtils from '@date-io/moment';
import MultiSelect from 'react-multi-select-component';
import Input from './input';
import AutoSuggest from '../autosuggest';
import { selectAllMembers } from '../../../app/memberSlice';
import { projectUpdated } from '../../../app/projectSlice';
import { projectService } from '../../../services';

function ProjectEditForm(props) {
  const memberList = useSelector(selectAllMembers);
  const dispatch = useDispatch();
  const options = memberList.map((member) => {
    return { label: member.name, value: member };
  });

  const [data, setData] = useState({
    project_name: '',
    due_date: '',
    project_admin: '',
    status_id: '',
    member_id: 0,
  });
  const [errors, setErrors] = useState({});
  const [selected, setSelected] = useState([]);
  const schema = {
    project_name: Joi.string().required().label('Name'),
    due_date: Joi.date(),
    project_admin: Joi.number(),
    status_id: Joi.string(),
    member_id: Joi.number(),
  };

  const handleDateChange = (event) => {
    setData({ ...data, due_date: event._d });
  };

  const handleAdminChange = (value, project_admin) => {
    setData({ ...data, member_id: value, project_admin: project_admin });
  };

  const prevMember = props.data.member_id;

  useEffect(() => {
    const { project_name, due_date, name, status_id } = props.data;
    const d = {
      project_name: project_name,
      due_date: due_date,
      project_admin: name,
      status_id: status_id,
      member_id: props.data.member_id,
    };
    setData(d);
  }, [
    props.data.project_name,
    props.data.due_date,
    props.data.name,
    props.data.status_id,
    props.data,
  ]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    await projectService.updateProject({
      data: { project_id: props.data.project_id, ...data, prevMember },
      members: selected,
    });
    dispatch(
      projectUpdated({
        project_id: props.data.project_id,
        project_name: data.project_name,
        due_date: data.due_date,
        status_id: data.status_id,
        name: data.project_admin,
        creation_date: props.data.creation_date,
      })
    );
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
              {/* <Input
                name="status_id"
                label="Change Status"
                value={data.status_id}
                onChange={handleChange}
                placeholder="Enter your Project Name"
                error={errors.status_id}
              /> */}
              <select
                name="status_id"
                id="status_id"
                value={data.status_id}
                onChange={handleChange}
              >
                <option value={1}>OPEN</option>
                <option value={2}>IN-PROGRESS</option>
                <option value={5}>DONE</option>
              </select>
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
                value={data.project_admin}
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
