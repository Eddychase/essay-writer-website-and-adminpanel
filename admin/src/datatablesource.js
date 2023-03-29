export const userColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "country",
    headerName: "Country",
    width: 100,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 100,
  },
];

export const hotelColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
  },
  {
    field: "type",
    headerName: "Type",
    width: 100,
  },
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
];


export const orderColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "topic",
    headerName: "Topic",
    width: 180,
  },
  {
    field: "paperFormat",
    headerName: "Paper Format",
    width: 70
  },
  {
    field: "deadline",
    headerName: "Deadline",
    width: 70,
  },
  {
    field: "pages",
    headerName: "Pages",
    width: 70,
  },
  {
    field: "academicLvl",
    headerName: "Academic Level",
    width: 150,
  },
  {
    field: "price",
    headerName: "Price",
    width: 70,
  },
];


export const roomColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },
  {
    field: "desc",
    headerName: "Description",
    width: 200,
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
  {
    field: "maxPeople",
    headerName: "Max People",
    width: 100,
  },
];
