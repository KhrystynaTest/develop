export const usersColumns = [
    {
        id: 'name',
        label: 'Name',
        minWidth: 170,
        handleClick: (value) => {
            console.log(value);
        },
    },
    { id: 'country', label: 'Country', minWidth: 100 },
    {
        id: 'email',
        label: 'Email',
        minWidth: 170,
        align: 'left',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'city',
        label: 'City',
        minWidth: 170,
        align: 'left',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'phone',
        label: 'Phone',
        minWidth: 170,
        align: 'left',
        format: (value) => value.toFixed(2),
    },
    {
        id: 'actions',
        label: 'Actions',
        minWidth: 100,
        align: 'center',
        format: () => {},
        withActions: true,
    },
];
