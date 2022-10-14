
import React, { useEffect, useState } from 'react'
import { getUsers } from "./api";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react';


const Userlist = () => {

    const [user, setUser] = useState([]);

    useEffect(() => {
        getUsers().then((res) => setUser(res))
    }, [])

    const getUser = () => {
        
    }

    return <>
        <div style={{display:"inline-block",margin:"auto"}}>
            <TableContainer maxWidth = "100%">
                <Table variant='striped' colorScheme='teal'>
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Email</Th>
                            <Th>User Name</Th>
                            <Th>Website</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {user.map((value, i) => {
                            return (<>
                                <Tr>
                                    <Td key = {value.id} data-testid={`name-${i}`}>{value.name}</Td>
                                    <Td key = {value.email} data-testid={`email-${i}`}>{value.email}</Td>
                                    <Td key = {value.username} data-testid = {`username-${i}`}> {value.username}</Td>
                                    <Td key = {value.website}data-testid = {`website-${i}`}>{value.website}</Td>
                                </Tr>
                            </>
                            )
                        })}
                    </Tbody>
                </Table>
            </TableContainer>
            <button data-testid="user_data" onClick={getUser} > Make api call </button>
        </div>
    </>
}

export default Userlist