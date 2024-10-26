const WorkerApprovedSubmissionTable = ({ info, idx }) => {
  return (
    <tbody>
      {/* row 1 */}
      <tr>
        <th>{idx + 1}</th>
        <td>{info.task_title}</td>
        <td>{info.payableAmount}</td>
        <td>{info.creator_name}</td>
        <td>{info.status}</td>
      </tr>
    </tbody>
  );
};

export default WorkerApprovedSubmissionTable;
