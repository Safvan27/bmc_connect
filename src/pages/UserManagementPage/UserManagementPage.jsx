import AddIcon from "@mui/icons-material/Add";
import BarChartIcon from "@mui/icons-material/BarChart";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Container from "@mui/material/Container";
import React, { useEffect, useState } from "react";
import {
    createUser,
    deleteUser,
    getUsers,
    loadMoreUsers,
} from "../../api/userApi";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import DataTable from "../../components/Table";
import DataTableHelpers from "../../helpers/DataTableHelpers";
import "./style.css";

export default function UserManagementPage() {
    const [users, setUsers] = useState([]);
    const [pageNum, setPageNum] = useState(1);
    const [userDataLoading, setUserDataLoading] = useState(1);

    useEffect(() => {
        const fetchUsers = async () => {
            setUserDataLoading(true);
            try {
                const usersData = await getUsers();
                setUsers(usersData);
                setUserDataLoading(false);
            } catch (error) {
                setUserDataLoading(false);
                console.error("Failed to fetch users", error);
            }
        };
        fetchUsers();
    }, []);

    const [isStatModalOpen, setIsStatModalOpen] = useState(false);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const handleLoadMore = async () => {
        try {
            setUserDataLoading(true);
            const usersData = await loadMoreUsers(pageNum + 1, 10);
            setPageNum(pageNum + 1);
            setUsers([...users, ...usersData]);
            setUserDataLoading(false);
        } catch (error) {
            setUserDataLoading(false);
            console.error("Failed to fetch users", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteUser(id);
            const deletedUserList = users.filter((item) => item.id !== id);
            setUsers(deletedUserList);
        } catch (error) {
            console.error("Failed to fetch users", error);
        }
    };

    const handleStats = () => {
        setIsStatModalOpen(!isStatModalOpen);
    };

    const handleAddCreator = async (data) => {
        try {
            const createdUser = await createUser(data);
            setUsers([...users, createdUser]);
            setIsAddModalOpen(!isAddModalOpen);
        } catch (error) {
            setIsAddModalOpen(!isAddModalOpen);
        }
    };

    const handleEdit = (id) => {
        console.log(`Editing item with ID ${id}`);
    };

    let userTableData = [];
    users.length &&
        users?.map((item, i) => {
            userTableData.push({
                id: item.id,
                name: item.name,
                email: item.email,
                gender: DataTableHelpers.capitalizeFirstLetter(item.gender),
                chat: item.status === "inactive" ? false : true,
            });
        });

    return (
        <React.Fragment>
            <Container maxWidth="lg">
                <div className="table-header">
                    <div className="header-text">Manage creators</div>
                    <div className="header-button">
                        <Button type="transparent" onClick={handleStats}>
                            <BarChartIcon /> View Stats
                        </Button>
                        <Button
                            onClick={() => setIsAddModalOpen(!isAddModalOpen)}
                        >
                            <AddIcon /> Add a new creator
                        </Button>
                        <Modal
                            setOpen={setIsAddModalOpen}
                            handleAddCreator={handleAddCreator}
                            open={isAddModalOpen}
                            type="ADD"
                            title="Add a new creator"
                        />
                        <Modal
                            setOpen={setIsStatModalOpen}
                            open={isStatModalOpen}
                            usersData={users}
                            type="STATS"
                            title="Stats"
                        />
                    </div>
                </div>
                <DataTable
                    data={userTableData}
                    onDelete={handleDelete}
                    onEdit={handleEdit}
                    isLoading={userDataLoading}
                />
                <div className="load-more-button">
                    <Button type="grey" onClick={handleLoadMore}>
                        Load more <KeyboardArrowDownIcon />
                    </Button>
                </div>
            </Container>
        </React.Fragment>
    );
}
