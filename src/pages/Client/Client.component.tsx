import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AdminLayout from 'src/hoc/AdminLayout';
import EnhancedTable from 'src/components/Table';
     
import AddClient from './AddClient';
import { loadClients } from 'src/redux/actions/client.action';
import { getClientList } from 'src/redux/selectors';

interface Data {
    name: string,
    age: number,
    gender: string,
    height: number,
    weight: number,
    goal: string,
    email: string,
    phone: number,
    payment: string
}

const columns = [
    { id: 'name', numeric: false, disablePadding: false, sort: true, label: 'Name' },
    { id: 'age', numeric: true, disablePadding: false, sort: true, label: 'Age' },
    { id: 'gender', numeric: false, disablePadding: false, sort: true, label: 'Gender' },
    { id: 'height', numeric: true, disablePadding: false, sort: true, label: 'Height' },
    { id: 'weight', numeric: true, disablePadding: false, sort: true, label: 'Weight' },
    { id: 'goal', numeric: false, disablePadding: false, sort: false, label: 'Goal' },
    { id: 'email', numeric: false, disablePadding: false, sort: false, label: 'Email' },
    { id: 'phone', numeric: true, disablePadding: false, sort: false, label: 'Phone' },
    { id: 'payment', numeric: false, disablePadding: false, sort: false, label: 'Payment' }
];

const Client = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadClients())
    }, [dispatch])

    const [dataArray, setDataArray] = useState<Array<Data>>([]);
    const data = useSelector(state=>getClientList(state));

     // converting string to number for accurate sorting
    data.forEach((item: Data)=>{
        if(item.age | item.weight | item.height ){
            item.age = Number(item.age)
            item.weight = Number(item.weight)
            item.height = Number(item.height)
        }
        return item
    })
    useEffect(()=>{
        setDataArray(data)
    },[data])
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const filteredArray = data.filter((item: Data)=>item.name.toLowerCase().includes(e.target.value.toLowerCase()));
        setDataArray(filteredArray)
    }
    return (
        <AdminLayout>
            <AddClient />
            <EnhancedTable rows={dataArray} columns={columns} heading={'Clients'} onSearchChange={handleChange}/>
        </AdminLayout>
    )
}

export default Client;
