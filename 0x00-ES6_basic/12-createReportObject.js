export default function createReportObject(employeesList) {
  const obj = {
    allEmplyees: employeesList,
    getNumberOfDepartments(dep) {
      return Object.keys(dep).length;
    },
  };

  return obj;
}
