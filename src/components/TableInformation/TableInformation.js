import React from 'react';
import TableRow from '../TableRow/TableRow';

const namesTable = ['Name', 'Last Name', 'City', 'Project'];
const information = {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    city: 'McKenziehaven',
    address: {
        street: 'Douglas Extension',
        suite: 'Suite 847',
        city: 'McKenziehaven',
        zipcode: '59590-4157',
        geo: {
            lat: '-68.6102',
            lng: '-47.0653',
        },
    },
    phone: '1-463-123-4447',
    website: 'ramiro.info',
    company: {
        name: 'Romaguera-Jacobson',
        catchPhrase: 'Face to face bifurcated interface',
        bs: 'e-enable strategic applications',
    },
};

const TableInformation = () => {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        {namesTable.map((item, index) => {
                            return <th key={index}>{item}</th>;
                        })}
                    </tr>
                </thead>
                <tbody>
                    {/*{information.map((item, index) => {*/}
                    {/*  return (*/}
                    {/*    <tr key={index}>*/}
                    {/*      <td>{item.name}</td>*/}
                    {/*      <td>{item.email}</td>*/}
                    {/*      <td>{item.company.name}</td>*/}
                    {/*      <td>{item.address.city}</td>*/}
                    {/*    </tr>*/}
                    {/*  );*/}
                    {/*})}*/}

                    {Object.entries(information).map(([key, value]) => {
                        console.log(key, value);
                        // return     <tr key={key}>
                        //   <td>{value}</td>
                        //   <td>{value}</td>
                        //   <td>{value}</td>
                        //   <td>{value}</td>
                        // </tr>
                    })}
                    {console.log(Object.entries(information))}
                </tbody>
            </table>
            <TableRow obj={information} />
        </>
    );
};

export default TableInformation;
