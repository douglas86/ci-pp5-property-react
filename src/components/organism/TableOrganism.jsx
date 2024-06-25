import { thumbnail } from "../atom/elements";

const TableOrganism = ({ headers, data }) => {
  return (
    <div>
      <table style={{ width: "100%" }}>
        <thead>
          <tr>{headers && headers.map((header) => <th>{header}</th>)}</tr>
        </thead>
        <tbody>
          {data.profile.map(
            ({ profile_picture, user, address, area_code, role, rent }) => (
              <tr>
                <td>{thumbnail(`${profile_picture}`, "logo")}</td>
                <td>{user}</td>
                <td>{address}</td>
                <td>{area_code}</td>
                <td>{role}</td>
                <td>{rent}</td>
              </tr>
            ),
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableOrganism;
