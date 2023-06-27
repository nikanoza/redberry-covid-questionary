export let user = {
  first_name: "",
  last_name: "",
  email: "",
  had_covid: "",
  had_antibody_test: null,
  antibodies: {
    test_date: "",
    number: null,
  },
  had_vaccine: null,
  vaccination_stage: "",
  non_formal_meetings: "",
  number_of_days_from_office: null,
  what_about_meetings_in_live: "",
  tell_us_your_opinion_about_us: "",
  i_am_waiting: "",
};

export let isLocal = false;

const localDate = localStorage.getItem("user");
if (localDate) {
  user = JSON.parse(localDate);
  isLocal = true;
  console.log(user);
}

export const updateUser = (property, value) => {
  console.log(1);
  user[property] = value;
  localStorage.setItem("user", JSON.stringify(user));
  console.log(user);
};
